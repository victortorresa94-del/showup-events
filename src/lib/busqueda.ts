import { ARTISTAS, type Artista } from '@/data/artistas'
import { FORMACIONES, type Formacion } from '@/data/formaciones'

/**
 * BÚSQUEDA LOCAL — instantánea, determinista, coste cero.
 *
 * Existe por una razón de producto: cuando alguien escribe en el buscador de
 * la home tiene que ver un resultado ANTES de que responda ninguna IA. Si la
 * primera pantalla de /buscar es un spinner, la promesa del buscador se rompe
 * otra vez.
 *
 * Así que el reparto de papeles es este:
 *  · Este fichero resuelve «qué te enseño ya» (síncrono, en cliente).
 *  · La IA de /api/recomendar resuelve «qué me falta saber de ti» (asíncrono).
 *
 * OJO CON LO QUE ESTO NO ES: no es el producto. El catálogo publicado es una
 * muestra corta a propósito (docs/01 §9). Que una búsqueda no encuentre nada
 * NO es un fallo — es exactamente el caso que más vale nuestro negocio, y la
 * interfaz tiene que tratarlo como una buena noticia, no como un error 404.
 */

export type Segmento = 'festa-major' | 'empresa' | 'bodas' | 'privados'

/** Normaliza para comparar: sin acentos, sin mayúsculas, sin puntuación. */
function normalizar(texto: string) {
  return texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9ñ\s]/g, ' ')
}

/**
 * Vocabulario del territorio. Está en catalán Y en castellano a propósito:
 * en Cataluña la misma persona escribe «festa major» y «orquesta» en la misma
 * frase, y el buscador tiene que entender las dos (docs/08 §decisión abierta).
 */
const SENALES_SEGMENTO: Record<Segmento, string[]> = {
  'festa-major': [
    'festa major', 'fiesta mayor', 'festes', 'fiestas', 'ayuntamiento', 'ajuntament',
    'comissio', 'comision de fiestas', 'pueblo', 'poble', 'plaza', 'placa', 'verbena',
    'patronales', 'barrio', 'barri', 'revetlla', 'municipio', 'cercavila', 'pasacalles',
    'gegants', 'gigantes', 'ball de tarda', 'pregon', 'fira',
  ],
  empresa: [
    'empresa', 'corporativo', 'convencion', 'convencio', 'cena de navidad', 'sopar',
    'equipo', 'team building', 'clientes', 'congreso', 'inauguracion', 'oficina',
    'trabajadores', 'empleados', 'gala', 'premios', 'networking', 'hotel',
  ],
  bodas: [
    'boda', 'bodas', 'casament', 'novios', 'novia', 'novio', 'banquete', 'masia',
    'ceremonia', 'coctel', 'convite', 'enlace', 'nupcial',
  ],
  privados: [
    'cumpleanos', 'aniversario', 'privada', 'privado', 'en casa', 'jardin',
    'comunion', 'despedida', 'familiar', 'bautizo', 'homenaje',
  ],
}

/**
 * Señales por formación. La clave es el `slug` de FORMACIONES, así que si una
 * búsqueda no encuentra artista pero sí formación, seguimos teniendo algo que
 * enseñar: la página que explica ese producto.
 */
const SENALES_FORMACION: Record<string, string[]> = {
  'orquestas-para-festa-major': [
    'orquesta', 'orquestra', 'ball de tarda', 'escenario propio', 'camion', 'llave en mano',
  ],
  'grupos-de-versiones': [
    'versiones', 'versions', 'covers', 'grupo', 'banda', 'bailar', 'baile', 'ball',
    'musica en directo', 'directo', 'rumba', 'pop', 'fiesta',
  ],
  cercaviles: [
    'cercavila', 'pasacalles', 'charanga', 'xaranga', 'txaranga', 'fanfarria', 'fanfarra',
    'batucada', 'calle', 'carrer', 'gegants', 'gigantes', 'desfile', 'metales',
  ],
  'bandas-tributo': [
    'tributo', 'homenaje', 'tribut', 'banda tributo', 'queen', 'beatles', 'abba',
    'los 80', 'anos 80', 'anos 90',
  ],
  'monologuistas-para-eventos': [
    'monologo', 'monolog', 'monologuista', 'stand up', 'comico', 'humorista', 'humor',
    'reir', 'risa', 'presentador', 'maestro de ceremonias',
  ],
  'humoristas-para-eventos': ['humorista', 'comedia', 'espectaculo de humor', 'gags'],
  'magos-para-eventos': [
    'mago', 'magia', 'ilusionismo', 'mentalismo', 'cartomagia', 'mag', 'trucos',
  ],
  havaneres: ['havaneres', 'habaneras', 'rom cremat', 'cantada', 'marinera'],
}

/** Cuántas señales de una lista aparecen en el texto. */
function golpes(texto: string, senales: string[]) {
  return senales.reduce((n, s) => (texto.includes(s) ? n + 1 : n), 0)
}

export type Resultado = {
  /** Artistas del catálogo ordenados por encaje. Siempre devuelve algo. */
  artistas: Artista[]
  /** Páginas de formación que explican el producto que ha pedido. */
  formaciones: Formacion[]
  /** Segmento detectado, si el texto lo deja claro. */
  segmento: Segmento | null
  /**
   * `false` cuando nada del catálogo encaja de verdad. NO es un error: es el
   * encargo a medida, que es donde vivimos. La UI lo dice con esas palabras.
   */
  hayEncaje: boolean
}

export function buscar(consulta: string): Resultado {
  const texto = normalizar(consulta)

  if (texto.trim().length < 3) {
    return { artistas: ARTISTAS, formaciones: [], segmento: null, hayEncaje: false }
  }

  // ── Segmento ──────────────────────────────────────────────────────────
  let segmento: Segmento | null = null
  let mejorSegmento = 0
  for (const clave of Object.keys(SENALES_SEGMENTO) as Segmento[]) {
    const n = golpes(texto, SENALES_SEGMENTO[clave])
    if (n > mejorSegmento) {
      mejorSegmento = n
      segmento = clave
    }
  }

  // ── Formaciones ───────────────────────────────────────────────────────
  const puntosFormacion = new Map<string, number>()
  for (const [slug, senales] of Object.entries(SENALES_FORMACION)) {
    const n = golpes(texto, senales)
    if (n > 0) puntosFormacion.set(slug, n)
  }

  // ── Artistas ──────────────────────────────────────────────────────────
  const puntuados = ARTISTAS.map((a) => {
    let puntos = 0

    // La formación pedida pesa más que nada: es lo concreto.
    puntos += (puntosFormacion.get(a.formacionSlug) ?? 0) * 5

    // El segmento reparte, no decide: casi todos sirven para varios.
    if (segmento && a.segmentos.includes(segmento)) puntos += 3

    // Repertorio y nombre: el que busca «rumba» o «Miramar» merece verlo arriba.
    for (const r of a.repertorio) {
      if (texto.includes(normalizar(r))) puntos += 2
    }
    if (texto.includes(normalizar(a.nombre))) puntos += 10

    return { artista: a, puntos }
  })

  const conEncaje = puntuados.filter((p) => p.puntos > 0)
  const ordenados = [...puntuados].sort((x, y) => y.puntos - x.puntos).map((p) => p.artista)

  return {
    artistas: ordenados,
    formaciones: [...puntosFormacion.entries()]
      .sort((x, y) => y[1] - x[1])
      .map(([slug]) => FORMACIONES.find((f) => f.slug === slug))
      .filter((f): f is Formacion => Boolean(f))
      .slice(0, 3),
    segmento,
    // Un solo golpe de segmento no es encaje: «boda» empareja con medio roster.
    hayEncaje: conEncaje.some((p) => p.puntos >= 5),
  }
}

/* ───────────────────────────────────────────────────────────────────────────
 * LA FICHA
 *
 * Esto no es un formulario disfrazado: es la lista de lo que necesitamos saber
 * para poder llamar a alguien y hablar con criterio. Cada campo que se rellena
 * es una razón menos para que la primera llamada empiece de cero.
 *
 * El orden importa: es el orden en que se pregunta.
 * ─────────────────────────────────────────────────────────────────────────── */

export type Ficha = {
  que: string | null
  donde: string | null
  cuando: string | null
  gente: string | null
  /** Lo que tiene que pasar esa noche. La pregunta que nadie hace. */
  objetivo: string | null
  /** Escenario, sonido, luz, licencia, hora de cierre. */
  montaje: string | null
  /** Qué hicieron otros años y qué tal fue. Oro puro para la propuesta. */
  antecedentes: string | null
  nombre: string | null
  contacto: string | null
  organizacion: string | null
}

export const FICHA_VACIA: Ficha = {
  que: null,
  donde: null,
  cuando: null,
  gente: null,
  objetivo: null,
  montaje: null,
  antecedentes: null,
  nombre: null,
  contacto: null,
  organizacion: null,
}

export const ETIQUETAS_FICHA: { clave: keyof Ficha; etiqueta: string }[] = [
  { clave: 'que', etiqueta: 'Qué buscas' },
  { clave: 'donde', etiqueta: 'Dónde' },
  { clave: 'cuando', etiqueta: 'Cuándo' },
  { clave: 'gente', etiqueta: 'Cuánta gente' },
  { clave: 'objetivo', etiqueta: 'Qué tiene que pasar' },
  { clave: 'montaje', etiqueta: 'Montaje' },
  { clave: 'antecedentes', etiqueta: 'Otros años' },
]

/** Cuántos de los campos que de verdad importan están rellenos. */
export function completitud(ficha: Ficha) {
  const hechos = ETIQUETAS_FICHA.filter((c) => Boolean(ficha[c.clave])).length
  return { hechos, total: ETIQUETAS_FICHA.length }
}

/** Catálogo comprimido para el prompt: lo justo para elegir, sin gastar tokens. */
export function catalogoParaPrompt() {
  const artistas = ARTISTAS.map((a) =>
    [
      `slug: ${a.slug}`,
      `nombre: ${a.nombre}`,
      `formación: ${a.formacion} (${a.base})`,
      `sirve para: ${a.sirvePara.join(' | ')}`,
      `NO sirve para: ${a.noSirvePara.join(' | ')}`,
      `repertorio: ${a.repertorio.join(', ')}`,
    ].join('\n  '),
  ).join('\n\n')

  const formaciones = FORMACIONES.map((f) => `- ${f.nombre} (/${f.slug}): ${f.entradilla}`).join('\n')

  return `ARTISTAS PUBLICADOS (son SEIS: es una muestra, no el catálogo real)\n\n${artistas}\n\nTIPOS DE FORMACIÓN CON PÁGINA PROPIA\n${formaciones}`
}
