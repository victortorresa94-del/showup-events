import Anthropic from '@anthropic-ai/sdk'
import { zodOutputFormat } from '@anthropic-ai/sdk/helpers/zod'
import { NextResponse } from 'next/server'
import { z } from 'zod'
import { catalogoParaPrompt, FICHA_VACIA, type Ficha } from '@/lib/busqueda'
import { AMBITO, SITE } from '@/lib/site'

/**
 * EL ASISTENTE.
 *
 * QUÉ ES ESTO Y QUÉ NO ES — esto no es un buscador con chat encima. Es un
 * generador de reuniones. La web no cierra contrataciones: consigue que la
 * persona nos cuente su evento con detalle y nos deje un teléfono. Ese es el
 * diferenciador, y por eso el prompt está escrito alrededor de esa única
 * métrica y no alrededor de «acertar el artista».
 *
 * De ahí tres decisiones que parecen contraintuitivas:
 *
 *  1. NO ENCONTRAR NADA ES BUENA NOTICIA. El catálogo publicado son seis
 *     nombres. Si alguien pide algo que no está, el modelo tiene orden expresa
 *     de celebrarlo, no de disculparse: el encargo a medida es el negocio.
 *  2. UNA PREGUNTA POR MENSAJE. El brief de siete pantallas se cargó
 *     precisamente por interrogatorio. Si aquí encadenamos preguntas volvemos
 *     al mismo sitio con otra estética.
 *  3. DEGRADA SIN IA. Si no hay ANTHROPIC_API_KEY —y hoy en Vercel no la hay
 *     hasta que se configure—, el endpoint sigue conduciendo la conversación
 *     con un guion determinista. La página nunca se queda muda.
 *
 * Modelo: Sonnet 5. En un chat la latencia ES la conversión — cada segundo de
 * espera antes de la primera pregunta se paga en abandono, y esta tarea
 * (extraer campos y preguntar el siguiente) no necesita más cabeza. Se puede
 * subir con SHOWUP_MODELO sin tocar código.
 */
export const runtime = 'nodejs'
export const maxDuration = 30

const MODELO = process.env.SHOWUP_MODELO ?? 'claude-sonnet-5'

const FichaSchema = z.object({
  que: z.string().nullable(),
  donde: z.string().nullable(),
  cuando: z.string().nullable(),
  gente: z.string().nullable(),
  objetivo: z.string().nullable(),
  montaje: z.string().nullable(),
  antecedentes: z.string().nullable(),
  nombre: z.string().nullable(),
  contacto: z.string().nullable(),
  organizacion: z.string().nullable(),
})

const RespuestaSchema = z.object({
  mensaje: z
    .string()
    .describe('Lo que dices en el chat. Dos frases como mucho, y termina preguntando.'),
  sugerencias: z
    .array(z.string())
    .describe('De 0 a 3 respuestas rápidas que la persona pueda pulsar. Cortas, 4 palabras.'),
  ficha: FichaSchema.describe('Todo lo que sabes del evento hasta ahora, acumulado.'),
  slugs: z
    .array(z.string())
    .describe('Slugs de artistas publicados que encajan de verdad. 0 a 3. Vacío si ninguno.'),
  fueraDeCatalogo: z
    .string()
    .nullable()
    .describe('Si lo que pide no está publicado, qué habría que buscarle. Si no, null.'),
  pedirContacto: z.boolean().describe('true cuando toca pedir nombre y teléfono.'),
})

type Respuesta = z.infer<typeof RespuestaSchema>

const SISTEMA = `Eres quien atiende el chat de ${SITE.razonSocial}, una empresa que busca y contrata artistas para eventos en ${AMBITO.nombre}: orquestas, grupos de versiones, cercaviles, bandas tributo, magos y monologuistas.

TU TRABAJO REAL
Esta web no contrata nada online. Tu único objetivo es que la persona te cuente su evento con el máximo detalle posible y te deje su nombre y su teléfono, para que un compañero la llame y le busque el espectáculo. Todo lo demás —enseñar artistas, opinar, recomendar— está al servicio de eso.

CÓMO HABLAS
- Una sola pregunta por mensaje. Nunca dos.
- Dos frases como mucho antes de la pregunta.
- Tuteo, directo, sin florituras. Nada de emoji ni de exclamaciones encadenadas.
- Usas el vocabulario del sector en Cataluña con naturalidad: festa major, cercavila, comissió de festes, ball de tarda, bolo, pases, rider.
- Nunca dices "contrata ya" ni "reserva". Dices "te llamamos", "lo miramos", "te lo buscamos".

ORDEN DE LAS PREGUNTAS (salta las que ya sepas por lo que te ha escrito)
1. qué busca — qué tipo de espectáculo o qué tiene que pasar
2. dónde — municipio o comarca
3. cuándo — fecha o al menos el mes
4. cuánta gente se espera
5. qué tiene que pasar esa noche / qué sería un éxito
6. montaje — si hay escenario, sonido, hora de cierre
7. qué hicieron otros años y qué tal fue
Cuando tengas qué + dónde + cuándo, o después de cuatro intercambios, pon pedirContacto en true y pide nombre y teléfono con naturalidad, explicando para qué: para llamarle con dos o tres nombres concretos.

REGLAS QUE NO SE SALTAN
- PRECIOS: no damos cifras. Ni tarifas, ni rangos, ni "desde". Si te lo preguntan, explica qué mueve el presupuesto (número de músicos, si hace falta escenario y sonido, la fecha, la distancia, cuántos pases) y ofrece que el equipo se lo concrete por teléfono. Nunca inventes un número.
- ÁMBITO: solo servimos en ${AMBITO.nombre}. Si el evento es fuera, dilo claro en la primera respuesta y ofrécele igualmente dejar los datos por si podemos ayudarle a distancia.
- DISPONIBILIDAD: nunca digas que un artista está libre una fecha. No lo sabes. Di que lo comprobamos.
- NO INVENTES artistas, nombres, precios, premios ni actuaciones. Solo existen los seis publicados.
- No hacemos espectáculo infantil. Si lo piden, dilo sin rodeos y ofrece tomar los datos por si les encaja otra cosa.

EL CATÁLOGO PUBLICADO ES UNA MUESTRA, NO EL PRODUCTO
Solo hay seis artistas en la web. El negocio es encontrar lo que no está. Así que si lo que piden no encaja con ninguno de los seis, eso es una BUENA noticia y así lo dices: "eso no lo tenemos publicado, y es justo lo que hacemos por encargo — dime dónde y cuándo y te lo buscamos". Jamás te disculpes por no tenerlo, jamás fuerces un artista que no encaja, y si uno de los seis NO sirve para lo que piden, dilo tú antes de que lo descubran.

LA FICHA
En cada respuesta devuelves la ficha entera, acumulando lo que ya sabías con lo nuevo. Escribe cada campo con las palabras de la persona, resumidas. Nunca borres un campo que ya tenía valor. Si algo no lo sabes todavía, null.

${catalogoParaPrompt()}`

/* ───────────────────────────────────────────────────────────────────────────
 * PLAN B: sin API key.
 * Mismo formato de respuesta, guion fijo. Se nota que es más tonto, pero la
 * conversación existe y el lead se captura igual.
 * ─────────────────────────────────────────────────────────────────────────── */

const GUION: { clave: keyof Ficha; texto: string; sugerencias: string[] }[] = [
  {
    clave: 'que',
    texto: 'Para afinar: ¿qué tipo de espectáculo tienes en la cabeza?',
    sugerencias: ['Música para bailar', 'Cercavila', 'Mago', 'Monologuista'],
  },
  {
    clave: 'donde',
    texto: '¿Dónde es? Con el municipio o la comarca nos vale.',
    sugerencias: [],
  },
  {
    clave: 'cuando',
    texto: '¿Y cuándo? Si aún no hay fecha cerrada, dime el mes.',
    sugerencias: [],
  },
  {
    clave: 'gente',
    texto: '¿Cuánta gente esperáis?',
    sugerencias: ['Menos de 100', 'Entre 100 y 300', 'Más de 300'],
  },
  {
    clave: 'objetivo',
    texto: '¿Qué tiene que pasar esa noche para que digáis que ha salido bien?',
    sugerencias: [],
  },
  {
    clave: 'montaje',
    texto: '¿Hay escenario y sonido montados, o hace falta que lo lleve el grupo?',
    sugerencias: ['Ya tenemos escenario', 'Que lo lleven ellos', 'No lo sé'],
  },
]

function sinIA(ficha: Ficha): Respuesta {
  const pendiente = GUION.find((p) => !ficha[p.clave])

  if (!pendiente) {
    return {
      mensaje:
        'Con esto ya podemos buscarte algo con criterio. Déjanos tu nombre y un teléfono y te llamamos con dos o tres nombres concretos.',
      sugerencias: [],
      ficha,
      slugs: [],
      fueraDeCatalogo: null,
      pedirContacto: true,
    }
  }

  const respondidas = GUION.filter((p) => Boolean(ficha[p.clave])).length

  return {
    mensaje: pendiente.texto,
    sugerencias: pendiente.sugerencias,
    ficha,
    slugs: [],
    fueraDeCatalogo: null,
    pedirContacto: respondidas >= 3,
  }
}

/* ─────────────────────────────────────────────────────────────────────────── */

type Turno = { rol: 'persona' | 'nosotros'; texto: string }

export async function POST(request: Request) {
  let cuerpo: { turnos?: Turno[]; ficha?: Partial<Ficha> }

  try {
    cuerpo = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'json_invalido' }, { status: 400 })
  }

  const fichaPrevia: Ficha = { ...FICHA_VACIA, ...(cuerpo.ficha ?? {}) }
  const turnos = (cuerpo.turnos ?? []).slice(-24)

  if (turnos.length === 0) {
    return NextResponse.json({ ok: false, error: 'sin_turnos' }, { status: 400 })
  }

  // Sin llave no hay IA, pero sí conversación. Ver cabecera del fichero.
  if (!process.env.ANTHROPIC_API_KEY) {
    const ultimo = turnos[turnos.length - 1]
    const heredada = { ...fichaPrevia }
    if (!heredada.que && ultimo.rol === 'persona') heredada.que = ultimo.texto.slice(0, 200)
    return NextResponse.json({ ok: true, conIA: false, ...sinIA(heredada) })
  }

  const cliente = new Anthropic()

  const mensajes: Anthropic.MessageParam[] = turnos.map((t) => ({
    role: t.rol === 'persona' ? ('user' as const) : ('assistant' as const),
    content: t.texto,
  }))

  // El estado va como último mensaje de sistema para no romper el prefijo
  // cacheado: el prompt grande (catálogo + reglas) no cambia nunca.
  mensajes.push({
    role: 'user',
    content: `[ficha acumulada hasta ahora, en JSON]\n${JSON.stringify(fichaPrevia)}`,
  })

  try {
    const respuesta = await cliente.messages.parse({
      model: MODELO,
      max_tokens: 2000,
      system: [{ type: 'text', text: SISTEMA, cache_control: { type: 'ephemeral' } }],
      messages: mensajes,
      output_config: { format: zodOutputFormat(RespuestaSchema) },
    })

    if (respuesta.stop_reason === 'refusal') {
      return NextResponse.json({ ok: true, conIA: false, ...sinIA(fichaPrevia) })
    }

    const datos = respuesta.parsed_output
    if (!datos) {
      return NextResponse.json({ ok: true, conIA: false, ...sinIA(fichaPrevia) })
    }

    // Fusionamos por si el modelo olvida un campo: la ficha nunca pierde datos.
    const ficha: Ficha = { ...fichaPrevia }
    for (const clave of Object.keys(FICHA_VACIA) as (keyof Ficha)[]) {
      const valor = datos.ficha[clave]
      if (valor) ficha[clave] = valor
    }

    return NextResponse.json({ ok: true, conIA: true, ...datos, ficha })
  } catch (error) {
    if (error instanceof Anthropic.APIError) {
      console.error('[recomendar] error de API', error.status, error.message)
    } else {
      console.error('[recomendar] error', error)
    }
    // Nunca dejamos la conversación muerta: cae al guion.
    return NextResponse.json({ ok: true, conIA: false, ...sinIA(fichaPrevia) })
  }
}
