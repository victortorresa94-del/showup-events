# Show Up Events — Arquitectura técnica SEO

> **Este documento manda sobre la implementación.** `04-arquitectura-seo.md` decidió *qué* páginas existen y *por qué*. Esto decide *cómo se construyen*, *qué se indexa*, *cómo se renderiza* y *cómo se mide*. Donde los dos entren en conflicto, gana este.
>
> Stack asumido: **Next.js 15 (App Router) + React Server Components, desplegado en Vercel o en Node detrás de un CDN**. Todo lo que hay aquí es portable a Astro con dos cambios; nada depende de una feature propietaria.
>
> Contexto de partida: dominio nuevo, cero autoridad, cero enlaces, catálogo corto, dirección de arte oscura con fotografía a sangre y vídeo en el hero. Eso último es un problema de rendimiento, no un capricho: se resuelve en el §4, no se negocia con el §4.

---

## 0. Las trece decisiones. Todo lo demás son detalles

| # | Decisión | Alternativa que se descarta |
|---|---|---|
| 1 | **Una URL sólo existe si alguien puede escribir 400 palabras que no valgan para ninguna otra URL.** Es el criterio único de generación. | Generar la matriz `ocasión × artista × ciudad` y "ya veremos qué indexa". |
| 2 | **`/bodas/girona` no existe. `/musica-para-bodas/girona` sí, y sólo si hay prueba local.** Un solo eje de combinación: ocasión × lugar. | Doble o triple combinación (`/grupos-de-versiones/barcelona/bodas`). |
| 3 | **Las ciudades son una lista blanca en código (`content/ciudades.ts`) con `dynamicParams = false`.** Lo que no está en la lista devuelve 404 duro. | `[ciudad]` dinámico contra una API de municipios. Eso es una fábrica de *doorway pages* con `next build`. |
| 4 | **Los filtros del catálogo no generan enlaces rastreables.** Son `<button>` + `history.replaceState`, no `<a href>`. La faceta es estado de interfaz, no una URL. | Filtros como enlaces con `?tipo=` y confiar en el canonical para limpiar el desastre. |
| 5 | **`noindex` legible antes que `Disallow`.** En el lanzamiento las URLs con parámetros llevan `noindex, follow` y **no** están bloqueadas en `robots.txt`. El bloqueo llega en el mes 3, cuando GSC confirme cero indexadas. | Bloquear en `robots.txt` el día 1 e impedir que Google llegue a leer el `noindex`. Es el error clásico. |
| 6 | **Todo el contenido editorial es estático (SSG) con revalidación bajo demanda.** SSR sólo para lo que no se indexa. | ISR con `revalidate` corto "por si acaso". Paga TTFB variable a cambio de nada. |
| 7 | **El elemento LCP nunca es el vídeo. En móvil no hay vídeo en absoluto.** | Vídeo autoplay a pantalla completa en móvil. Son 4 s de LCP en la página que más enlaces internos recibe. |
| 8 | **El grano de película no va incrustado en el archivo de imagen: va en CSS.** El grano es ruido y el ruido destruye la compresión: incrustarlo cuesta ~40 % de peso extra por foto. | Exportar los JPEG ya granulados desde Lightroom. |
| 9 | **Los pilares y las guías no llevan foto a sangre en el hero. El LCP es el H1.** La foto a sangre se reserva para home, `/nosotros` y fichas de artista. | Aplicar la dirección de arte a ciegas y arrastrar 2,4 s de LCP en las 25 páginas que tienen que rankear. |
| 10 | **El brief es una sola URL (`/brief`), `noindex, follow`, con el paso en el hash.** Nunca `/brief/paso-3`. | Una URL por paso: 7 páginas finas duplicadas y una analítica que miente. |
| 11 | **Sin `hreflang`. Sitio `es-ES` único.** Ni catalán, ni euskera, ni gallego, ni inglés en el año 1. Argumentado en §6.3. | Multiplicar por cuatro la superficie de rastreo de un dominio con cero autoridad. |
| 12 | **`showupevents.es`.** ccTLD español para un servicio que sólo se presta en España, ahora que Search Console ya no permite fijar país en un gTLD. | `.com` genérico sin señal de geolocalización, o un dominio de coincidencia exacta tipo `contratar-artistas.es`. |
| 13 | **El KPI es "briefs por URL de aterrizaje orgánica", y se instrumenta el día 1 con atribución de primer contacto en cookie propia.** Sin eso, en el mes 9 no se sabrá qué apagar y qué duplicar. | Mirar posiciones en una herramienta de rank tracking. |
| 14 | **El eje que manda en la URL depende de la pericia del comprador, no del inventario.** Boda y empresa → manda la **ocasión**. Fiestas y verbenas → manda la **formación**. Argumentado en §1.6. | Un único eje para todo el sitio "por coherencia". La coherencia que importa es con cómo teclea cada comprador. |
| 15 | **`txaranga` y `charanga` son DOS URLs, no una con canonical.** Los SERPs no se solapan: son dos consultas con geografía e intención cultural distintas. `xaranga` no es una tercera URL. §1.7. | Una sola página con los dos términos en el H1 (`Charangas y txarangas para…`): pierde las dos. O dos páginas clonadas con canonical cruzado: pierde las dos y además señala plantilla. |
| 16 | **`/fiestas-patronales/[municipio]` no existe jamás.** 8.131 municipios. El eje geográfico del cluster de fiestas se acota a **provincia/comarca, con tope duro de 8 URLs en 24 meses**, verificado en build. §1.8. | Generar el municipio porque "es long tail". La consulta `fiestas de [pueblo]` la hace el que va a la verbena, no el que la contrata. |
| 17 | **Las páginas de formación SON las facetas curadas del catálogo.** Nunca se abre `?tipo=` a indexación: se indexan las 12 URLs de formación, que llevan contenido editorial encima del listado. §1.9. | Indexar facetas cuando el catálogo crezca. Sigue siendo la misma trampa, sólo que con más artistas dentro. |

---

## 0.1 Erratas de la v1 que este documento corrige

Tres cosas del copy deck (`06`) no cuadran con `04-arquitectura-seo.md`. Se resuelven aquí antes de tocar código:

| Conflicto | Resolución |
|---|---|
| La navegación del copy deck incluye **`Precios`**, pero `04` no define ninguna URL `/precios`. | **Se crea `/precios`** como página real. Ataca `precios artistas para eventos` / `cuánto cuesta contratar un artista`, que es una keyword distinta de las tres `…/cuanto-cuesta` de cluster. `/precios` es el **hub de horquillas por formato** (la tabla del copy deck §8) y enlaza hacia abajo a las tres páginas de precio por ocasión, que son las que tienen la profundidad. Ver §1.4 para la regla anticanibalización. |
| El copy deck define un estado vacío para **"Buscador sin coincidencias"**, pero `04` afirma que no hay buscador interno y por eso no marca `SearchAction`. | **Sí hay buscador**, pero es un filtro de cliente sobre un JSON de ≤ 24 artistas: no llama al servidor, no cambia la URL y no se indexa. La conclusión de `04` no cambia: **no se marca `SearchAction`**, porque Google retiró el rich result de *sitelinks searchbox* en noviembre de 2023. Marcarlo hoy es código muerto. |
| El copy deck define el estado **"Agenda del artista ocupada esa fecha"**, lo que implica un parámetro de fecha en la ficha. | `/artistas/[slug]?fecha=YYYY-MM-DD` existe funcionalmente y va **`noindex, follow`** con canonical a la ficha limpia. Es el mismo tratamiento que las facetas (§2.4). |

---

## 1. Arquitectura de información y URLs

### 1.1 Convenciones, sin excepciones

| Regla | Valor | Por qué |
|---|---|---|
| Protocolo | `https://` forzado, HSTS con `max-age=63072000; includeSubDomains; preload` | Un salto extra en la cadena de redirección es latencia en cada rastreo. |
| Host canónico | **`showupevents.es`, sin `www`** | Da igual cuál, pero una sola. Sin `www` ahorra 4 caracteres en cada enlace y en cada cita de marca. |
| Barra final | **Sin barra final.** `trailingSlash: false` | Una variante canónica. La otra devuelve **308** (no 301: preserva el método y es lo que Next emite por defecto). |
| Mayúsculas | Prohibidas. Middleware redirige a minúsculas con 308 | `/Artistas` y `/artistas` son dos URLs distintas para Google. |
| Acentos y ñ en slugs | **Prohibidos.** `emporda`, no `empordà`; `coruna`, no `coruña` | El *percent-encoding* rompe enlaces copiados, ensucia los informes y no aporta ranking. El acento sí va en el `<h1>`, en el `<title>` y en el texto, que es donde Google lee la entidad. |
| Stopwords | Sólo las que están en la keyword real | `musica-para-bodas` sí (la gente busca "música **para** bodas"); `contratar-a-un-mago-para-tu-evento` no. |
| Fechas y `/blog/` | Prohibidos | `/guias/…` es el hub. Una fecha en la URL envejece el contenido y obliga a redirigir al actualizarlo. |
| Longitud | ≤ 3 segmentos, ≤ 65 caracteres | Profundidad de carpeta ≠ profundidad de clic, pero una URL de 4 niveles se lee como periférica. |

**Slugs reservados** — ningún artista, ciudad ni guía puede llamarse así. Se valida en tiempo de build, no en revisión humana:

```
artistas · brief · guias · precios · contacto · nosotros · como-funciona
musica-para-bodas · artistas-para-eventos-de-empresa · orquestas-para-fiestas-patronales
grupos-de-versiones · magos-para-eventos · monologuistas-para-eventos
dj-para-bodas-y-eventos · bandas-tributo · cuartetos-de-cuerda-para-bodas
api · _next · sitemap · robots · aviso-legal · privacidad · cookies · 404 · 500
```

### 1.2 El árbol completo, con profundidad de clic

Profundidad = número mínimo de clics desde `/` siguiendo enlaces `<a href>` rastreables. **Ninguna URL indexable pasa de 2.**

```
/                                                       ┐ 0
├── /musica-para-bodas                          PILAR A │ 1   ← home §"Tipos de noche"
│   ├── /musica-para-bodas/cuanto-cuesta                │ 2
│   ├── /musica-para-bodas/ceremonia-coctel-y-fiesta    │ 2
│   ├── /musica-para-bodas/dj-o-grupo-en-directo        │ 2
│   ├── /musica-para-bodas/con-cuanta-antelacion-contratar │ 2
│   ├── /musica-para-bodas/barcelona            CIUDAD  │ 2
│   └── /musica-para-bodas/emporda              CIUDAD  │ 2
├── /artistas-para-eventos-de-empresa           PILAR B │ 1
│   ├── /artistas-para-eventos-de-empresa/cena-de-navidad      │ 2
│   ├── /artistas-para-eventos-de-empresa/cuanto-cuesta        │ 2
│   └── /artistas-para-eventos-de-empresa/barcelona    CIUDAD  │ 2
├── /orquestas-para-fiestas-patronales          PILAR C │ 1
│   ├── /orquestas-para-fiestas-patronales/como-contrata-un-ayuntamiento │ 2
│   └── /orquestas-para-fiestas-patronales/cuanto-cuesta                 │ 2
├── /artistas                                   CATÁLOGO│ 1
│   └── /artistas/[slug]                          FICHA │ 2
├── /precios                                            │ 1   ← navegación
├── /guias                                          HUB │ 1   ← footer
│   └── /guias/[slug]                                   │ 2
├── /como-funciona                                      │ 1
│   ├── #salas          (ancla, no URL)
│   └── #privados       (ancla, no URL)
├── /nosotros                                           │ 1
├── /contacto                                           │ 1
├── /brief                                    noindex   │ 1
│   └── /brief/gracias                        noindex   │ —
└── /aviso-legal · /privacidad · /cookies  noindex,follow│ 1

CLUSTER D · tipo de artista (raíz, profundidad 2)
/grupos-de-versiones · /magos-para-eventos · /monologuistas-para-eventos
/dj-para-bodas-y-eventos · /bandas-tributo · /cuartetos-de-cuerda-para-bodas
```

**Cómo llega el rastreador al Cluster D si la home no lo enlaza.** Por tres rutas, todas a profundidad 2:

1. Desde cada pilar de ocasión, en el párrafo donde se habla de ese formato (enlace editorial, anchor exacto).
2. Desde `/artistas`, en una franja **"Por tipo de artista"** bajo la parrilla — que además es lo que el usuario del catálogo espera encontrar.
3. Desde la ficha de artista, en el bloque *"Para qué noche sirve"*.

**El footer lleva 8 enlaces, ni uno más:** los 3 pilares, `/precios`, `/artistas`, `/como-funciona`, `/nosotros`, `/contacto`. Legales aparte, en una línea de menor jerarquía. **Nunca un listado de ciudades en el footer**: es la firma visual de las webs de plantilla, y Google la reconoce sin esforzarse.

### 1.3 La explosión combinatoria: qué se genera y qué no

Los ejes disponibles son cuatro:

| Eje | Cardinalidad realista |
|---|---|
| Ocasión | 3 con demanda (boda, empresa, fiestas) + 2 sin demanda (salas, privados) |
| Tipo de artista | 6 |
| Lugar | 8 provincias servibles + 6 zonas de bodas con nombre propio |
| Formato / tamaño | 4 (solista, dúo, trío-cuarteto, banda) |

Si se combinaran todos: **3 × 6 × 14 × 4 = 1.008 URLs.** Cada una con 200 palabras de plantilla y el topónimo cambiado. Ese sitio existe, se llama Partfy, Celebrents o Espectaculus, y es exactamente lo que `04` identificó como batible *porque* son plantillas. Reproducirlo sería competir contra ellos con su misma debilidad y sin su antigüedad.

**La regla de generación, en tres líneas:**

> **Se combinan como máximo dos ejes, y uno de los dos es siempre la ocasión.**
> **`ocasión × lugar` está permitido, con lista blanca y prueba local.**
> **`ocasión × tipo de artista` NO se combina en URL: el tipo de artista vive en raíz y cruza por enlace interno.**

Consecuencias concretas:

| Combinación | ¿Existe? | Razón |
|---|---|---|
| `/musica-para-bodas/barcelona` | **Sí**, lista blanca | Volumen real con modificador de ciudad + prueba local + capacidad de servir. |
| `/bodas/girona` | **No** | Duplicaría la intención de `/musica-para-bodas/girona`. Y `/bodas` como raíz no existe: canibaliza el pilar. |
| `/artistas-para-eventos-de-empresa/barcelona` | **Sí**, mes 6 | Segmento distinto, reutiliza autoridad local ya construida. |
| `/grupos-de-versiones/barcelona` | **No en el año 1** | Es el mismo SERP que `/musica-para-bodas/barcelona` con otro nombre. Sólo se abriría si GSC demuestra que `grupo de versiones barcelona` genera impresiones **que no captura** la landing de boda. Se decide con datos en el mes 12, no con una hipótesis hoy. |
| `/musica-para-bodas/barcelona/grupos-de-versiones` | **Nunca** | Tercer nivel de combinación. Es la definición de página finita. |
| `/musica-para-bodas/trio` | **No** | El formato es una **sección con `id`** dentro del pilar (`#trio`), no una URL. El pilar ya está organizado por formato: partirlo lo debilita. |
| `/orquestas-para-fiestas-patronales/[provincia]` | **No en el año 1** | El concejal de festejos no busca con modificador geográfico: busca "cómo se contrata". Ese cluster gana por contenido de procedimiento, no por geo. |
| `/artistas/bodas` (catálogo filtrado por ocasión) | **No** | Es una faceta. Ver §2.4. |

**La ciudad número 4 no se publica hasta que la 1 y la 2 tengan impresiones crecientes tres meses seguidos.** Está en `04` y se convierte aquí en un control de código: la lista blanca tiene un campo `publicada: boolean` y el sitemap sólo emite las publicadas.

### 1.4 La regla anticanibalización de `/precios`

Cuatro páginas hablan de precio. Sin disciplina, se comen entre ellas:

| URL | Keyword objetivo | Qué contiene | Qué NO contiene |
|---|---|---|---|
| `/precios` | `precios artistas para eventos`, `cuánto cuesta contratar un artista` | Tabla de horquillas por **formato** (solista, trío, banda, mago/monologuista). Qué entra en el caché. 800–1.200 palabras. | Nada específico de boda, empresa o fiestas. Enlaza a las tres. |
| `/musica-para-bodas/cuanto-cuesta` | `cuánto cuesta un grupo de música para una boda` | Desglose por **momento de la boda** y por temporada. Caché + desplazamiento + horas extra + IVA. 1.800+ palabras. | La tabla genérica de `/precios`. |
| `/artistas-para-eventos-de-empresa/cuanto-cuesta` | `cuánto cuesta un artista para un evento de empresa` | Facturación, retenciones, quién emite la factura, exclusividad. | Bodas. |
| `/orquestas-para-fiestas-patronales/cuanto-cuesta` | `cuánto cuesta una orquesta para las fiestas del pueblo` | Escenario, sonido, dietas, SGAE, número de noches. | Bodas y empresa. |

**Enlace interno obligatorio en una sola dirección:** `/precios` → las tres. Las tres → `/precios` **sólo** desde el breadcrumb o desde una línea final del tipo *"Si buscas horquillas por formato y no por ocasión, están en Precios"*. Nunca con anchor de keyword de precio desde las profundas hacia arriba: eso invertiría el flujo y haría que `/precios` compitiese por las cuatro consultas a la vez.

### 1.5 Modelo de datos y de contenido

No hace falta un CMS para seis artistas, pero sí hace falta que alguien que no es desarrollador pueda cambiar un vídeo.

```
/content
  /guias/*.mdx                 → editorial. MDX en repo, versionado en git.
  /pilares/*.mdx               → editorial. Idem.
  ciudades.ts                  → lista blanca tipada. Fuente de verdad de las URLs geo.
/lib
  artistas.ts                  → cliente del CMS (Sanity/Payload). ISR bajo demanda.
```

Por qué MDX para el editorial y CMS sólo para artistas: el contenido de pilares y guías lo escribe quien decide la estrategia, cambia poco y se beneficia de revisión en PR (que es donde se caza la canibalización antes de publicarla). Los artistas cambian de vídeo, de formaciones y de fotos constantemente y los toca gente de negocio.

```ts
// content/ciudades.ts — ESTE FICHERO ES LA ÚNICA PUERTA A LAS URLs GEO
export type Ocasion = 'musica-para-bodas' | 'artistas-para-eventos-de-empresa';

export interface Ciudad {
  slug: string;            // sin acentos, sin ñ
  nombre: string;          // con acentos: "Empordà". Va en H1, title y schema
  tipo: 'City' | 'AdministrativeArea';
  provincia: string;
  ocasiones: Ocasion[];    // en qué clusters existe esta landing
  publicada: boolean;      // false = existe el fichero pero NO entra en sitemap ni en build
  pruebaLocal: {           // sin esto, `publicada` no puede ser true. Se valida en build.
    eventos: string[];     // ids de casos propios con fotos
    sitios: string[];      // fincas, masías, hoteles reales de la zona
  };
}

export const CIUDADES: Ciudad[] = [
  {
    slug: 'barcelona', nombre: 'Barcelona', tipo: 'City', provincia: 'Barcelona',
    ocasiones: ['musica-para-bodas', 'artistas-para-eventos-de-empresa'],
    publicada: true,
    pruebaLocal: { eventos: ['boda-can-ribas-2025'], sitios: ['Can Ribas', 'Masia Vallformosa'] },
  },
  {
    slug: 'emporda', nombre: 'Empordà', tipo: 'AdministrativeArea', provincia: 'Girona',
    ocasiones: ['musica-para-bodas'],
    publicada: false, // se publica en el mes 4
    pruebaLocal: { eventos: [], sitios: [] },
  },
];
```

```ts
// scripts/validar-contenido.ts — corre en CI, bloquea el merge
import { CIUDADES } from '../content/ciudades';
import { SLUGS_RESERVADOS } from '../content/reservados';

const errores: string[] = [];

for (const c of CIUDADES) {
  if (c.publicada && c.pruebaLocal.eventos.length === 0)
    errores.push(`${c.slug}: publicada sin evento propio. Ver 04-arquitectura-seo §2.3.`);
  if (!/^[a-z0-9-]+$/.test(c.slug))
    errores.push(`${c.slug}: mayúsculas, acentos o caracteres no permitidos.`);
  if (SLUGS_RESERVADOS.includes(c.slug))
    errores.push(`${c.slug}: colisiona con un slug reservado.`);
}

if (errores.length) { console.error(errores.join('\n')); process.exit(1); }
```

Esto no es burocracia: es el único mecanismo que impide que dentro de ocho meses, con prisa, alguien añada catorce ciudades y hunda el dominio.

---

## 2. Estrategia de indexación

**Es la decisión que arruina el 80 % de las webs de este tipo.** No porque sea difícil, sino porque se toma tarde: se lanza el catálogo con filtros enlazados, Google indexa 400 combinaciones vacías, y para el mes 6 el dominio entero está clasificado como fino. Recuperarse de eso cuesta más que construir el sitio.

### 2.1 La tabla maestra

| Tipo de página | `robots` | Canonical | Sitemap | Notas |
|---|---|---|---|---|
| `/` | `index, follow, max-image-preview:large` | self | Sí | |
| Pilares (3) | `index, follow, max-image-preview:large` | self | Sí | |
| Satélites de cluster | `index, follow` | self | Sí | |
| Landings de ciudad **publicadas** | `index, follow` | self | Sí | |
| Landings de ciudad **no publicadas** | No se construyen. 404. | — | No | `dynamicParams = false` |
| Cluster D (tipo de artista) | `index, follow` | self | Sí | |
| `/precios` | `index, follow` | self | Sí | |
| `/artistas` | `index, follow` | self | Sí | |
| `/artistas/[slug]` | `index, follow, max-image-preview:large, max-video-preview:-1` | self | Sí, con `<video:video>` | |
| `/artistas?tipo=…` y cualquier parámetro | **`noindex, follow`** | a `/artistas` | No | §2.4 |
| `/artistas/[slug]?fecha=…` | **`noindex, follow`** | a la ficha limpia | No | |
| `/guias` y `/guias/[slug]` | `index, follow` | self | Sí | |
| `/como-funciona`, `/nosotros`, `/contacto` | `index, follow` | self | Sí | |
| `/brief` | **`noindex, follow`** | self | No | §7 |
| `/brief/gracias` | **`noindex, nofollow`** | — | No | Página de conversión. `nofollow` porque no queremos que se rastree desde ahí. |
| `/aviso-legal`, `/privacidad`, `/cookies` | **`noindex, follow`** | self | No | `follow` para no cortar el flujo del footer. |
| `/404`, `/500` | **`noindex`** | — | No | Con código HTTP correcto, no soft-404. |
| `/api/*` | `X-Robots-Tag: noindex` (cabecera) | — | No | |
| **Cualquier despliegue que no sea producción** | **`X-Robots-Tag: noindex, nofollow` en TODAS las respuestas** | — | No | §8.3. Es el error que más veces mata un lanzamiento. |

### 2.2 Implementación del `robots` por página

Nada de una etiqueta suelta copiada en cada fichero. Una función, tipada, y el `noindex` por defecto invertido:

```ts
// lib/seo.ts
import type { Metadata } from 'next';

export const SITIO = 'https://showupevents.es';

type Args = {
  path: string;               // '/musica-para-bodas/barcelona'
  title: string;
  description: string;
  indexable?: boolean;        // por defecto true
  canonicalPath?: string;     // si difiere de path (facetas)
  imagen?: string;
  video?: boolean;
};

export function meta({
  path, title, description, indexable = true, canonicalPath, imagen, video,
}: Args): Metadata {
  const esProduccion = process.env.VERCEL_ENV === 'production';
  const index = indexable && esProduccion;   // ← el candado del §8.3

  return {
    metadataBase: new URL(SITIO),
    title,
    description,
    alternates: { canonical: canonicalPath ?? path },
    robots: {
      index,
      follow: true,
      googleBot: {
        index,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': video ? -1 : 0,
      },
    },
    openGraph: {
      type: 'website',
      locale: 'es_ES',
      siteName: 'Show Up Events',
      url: `${SITIO}${path}`,
      title,
      description,
      images: imagen ? [{ url: imagen, width: 1200, height: 630 }] : undefined,
    },
    twitter: { card: 'summary_large_image' },
  };
}
```

Uso:

```ts
// app/musica-para-bodas/[ciudad]/page.tsx
export async function generateMetadata({ params }): Promise<Metadata> {
  const { ciudad } = await params;
  const c = CIUDADES.find((x) => x.slug === ciudad)!;
  return meta({
    path: `/musica-para-bodas/${c.slug}`,
    title: `Música en directo para bodas en ${c.nombre}`,
    description: `Grupos, dúos y solistas para bodas en ${c.nombre} y alrededores. Conocemos los sitios, los límites de sonido y a qué hora se llena la pista. Cuéntanos la tuya.`,
    imagen: `${SITIO}/og/musica-bodas-${c.slug}.jpg`,
  });
}
```

### 2.3 Canonical: las cuatro reglas

1. **Absoluto y autorreferencial en toda página indexable.** `metadataBase` + `alternates.canonical` relativo lo resuelve; verificar que el HTML emite el dominio completo.
2. **Un canonical no es una redirección.** Es una sugerencia. Si la variante no debe existir, se redirige con 308; el canonical se reserva para variantes que **deben seguir siendo accesibles** (facetas, `?fecha=`).
3. **Sin canonical cruzado entre páginas distintas.** Ni `/musica-para-bodas/barcelona` → `/musica-para-bodas`. Si dos páginas necesitan el mismo canonical es que una de las dos no debía existir.
4. **Los parámetros de campaña (`utm_*`, `gclid`, `fbclid`) no rompen nada** porque el canonical es autorreferencial y limpio. No se redirigen: se perdería la atribución.

### 2.4 Facetas del catálogo — el punto crítico

El catálogo tiene tres filtros (*tipo de noche*, *ambiente*, *formato*) más un buscador de texto. Con 3 filtros de ~5 valores y combinación libre son **~216 estados**. Con 6 artistas en la base de datos, eso son 216 páginas con 0–2 resultados cada una. Es la forma más rápida y más barata de que Google decida que este dominio no aporta nada.

**Defensa en cuatro capas, en este orden:**

**Capa 1 — No crear el enlace. Es la única que funciona de verdad.**

Google indexa lo que descubre. Si no hay `<a href="/artistas?tipo=mago">`, no hay nada que descubrir. Los filtros son botones y el estado se refleja con `replaceState`, que **no** genera una entrada en el historial ni una URL rastreable:

```tsx
'use client';
// components/catalogo/Filtros.tsx
export function Filtros({ activos, onCambio }: Props) {
  function alternar(clave: string, valor: string) {
    const siguiente = calcular(activos, clave, valor);
    onCambio(siguiente);

    // Estado compartible por si el usuario copia la URL, PERO sin crear enlace rastreable.
    const qs = new URLSearchParams(serializar(siguiente)).toString();
    window.history.replaceState(null, '', qs ? `/artistas?${qs}` : '/artistas');
  }

  return (
    <div role="group" aria-label="Filtrar artistas">
      {OPCIONES.map((o) => (
        <button
          key={o.valor}
          type="button"                    /* ← button. NUNCA <a href>. NUNCA <Link>. */
          aria-pressed={activos[o.clave]?.includes(o.valor) ?? false}
          onClick={() => alternar(o.clave, o.valor)}
        >
          {o.etiqueta}
        </button>
      ))}
    </div>
  );
}
```

**Capa 2 — `noindex, follow` legible en cualquier URL con parámetros.**

Alguien enlazará una URL filtrada desde WhatsApp o desde un foro. Cuando pase, tiene que haber una etiqueta que Google pueda leer:

```ts
// app/artistas/page.tsx
export async function generateMetadata({ searchParams }): Promise<Metadata> {
  const sp = await searchParams;
  const filtrado = Object.keys(sp).some((k) => ['tipo', 'ambiente', 'formato', 'q'].includes(k));

  return meta({
    path: '/artistas',
    canonicalPath: '/artistas',       // siempre limpio
    indexable: !filtrado,             // ← noindex si hay faceta
    title: filtrado ? 'Artistas — Show Up' : 'Artistas — Show Up',
    description: 'Los artistas que ya conocemos, con vídeo de directo y para qué tipo de noche sirve cada uno. Si no está el que buscas, lo buscamos: es nuestro trabajo.',
  });
}
```

`follow`, no `nofollow`: queremos que el flujo hacia las fichas siga circulando desde esa URL.

**Capa 3 — `Disallow` en `robots.txt`: en el mes 3, no antes.**

Aquí es donde se equivoca todo el mundo. Si el día 1 se pone `Disallow: /artistas?*`, Google **no puede rastrear esas URLs y por tanto no puede leer el `noindex`**. Si alguna acaba descubierta por un enlace externo, se queda indexada como "Indexada aunque bloqueada por robots.txt", sin snippet y sin forma limpia de sacarla.

Secuencia correcta:

1. **Lanzamiento:** sin `Disallow`. Con `noindex` legible (capa 2).
2. **Mes 3:** revisar en GSC → *Páginas* → filtrar por `?`. Si hay 0 indexadas, activar el `Disallow` para ahorrar rastreo.
3. Si hubiera alguna indexada: **no** bloquear. Esperar a que el `noindex` la desindexe y bloquear después.

**Capa 4 — Lo que NO se hace.**

| Práctica | Por qué no |
|---|---|
| `rel="nofollow"` en los filtros como única defensa | `nofollow` es una pista sobre el enlace, no una directiva de indexación. La URL se indexa igual si se descubre por otra vía. |
| Canonical de la faceta a `/artistas` *sin* `noindex` | El canonical se ignora cuando el contenido difiere mucho. Con 216 variantes, se ignorará en unas cuantas. |
| Bloquear con `Disallow` **y** poner `noindex` | Se anulan: el bloqueo impide leer la etiqueta. Es una contradicción, no un cinturón y tirantes. |
| Filtros que hacen `router.push` | Genera entradas de historial y URLs de RSC. `replaceState` a secas. |
| Indexar facetas "porque son long tail" | Con catálogo corto no hay long tail: hay páginas vacías. Si algún día hubiera 200 artistas, se reevaluaría promoviendo **una sola** faceta de alto valor a URL estática y curada (p. ej. `/artistas` con un H2 por tipo), nunca abriendo la combinatoria. |

### 2.5 Paginación

**No hay paginación y no la va a haber en el año 1.** El catálogo cabe entero en una página. Es una restricción de marca (`02`: "sin contador, sin paginación visible") que resulta ser también la decisión SEO correcta.

Lo que se hace en su lugar y la regla para el futuro:

- **Hasta 24 artistas:** todos en el DOM en la primera respuesta. Las imágenes de las tarjetas por debajo del pliegue van `loading="lazy"`; el DOM no se difiere. Un catálogo entero en HTML son ~30 KB de más y un enlace interno a cada ficha desde profundidad 1: es el mejor uso posible de esos KB.
- **De 25 a 100:** sigue sin haber paginación. Se añade `content-visibility: auto` con `contain-intrinsic-size` a las tarjetas para que el renderizado no sufra, y un botón "Ver más" que **sólo revela** DOM ya presente (no carga nada).
- **Más de 100 (escenario improbable):** entonces sí, `/artistas/pagina/2`, con **canonical autorreferencial** en cada página, `index, follow`, y ninguna página apuntando su canonical a la 1. `rel="next"/"prev"` no se implementa: Google dejó de usarlo en 2019 y lo anunció.

### 2.6 Códigos de estado

| Situación | Código | Nota |
|---|---|---|
| Ciudad fuera de la lista blanca | **404** | Con `dynamicParams = false`. Nunca redirigir a `/musica-para-bodas`: sería un soft-404 encubierto. |
| Artista dado de baja del catálogo | **410 Gone** durante 60 días, luego 404 | Si el artista tenía tráfico por su nombre, **301 a su landing de tipo** (`/grupos-de-versiones`) sólo si la sustitución es honesta. Si no, 410. |
| Slug antiguo por cambio de nombre | **301** permanente, uno solo, sin cadena | Y actualizar el enlace interno de origen a la vez. Un 301 interno permanente es un enlace mal escrito. |
| URL con mayúsculas o barra final | **308** | Middleware. |
| Página en construcción | **No existe.** No se publica | Un placeholder indexado es una página fina con tu dominio encima. |

---

## 3. Renderizado

### 3.1 La decisión, página a página

| Página | Estrategia | Revalidación | Por qué |
|---|---|---|---|
| `/` | **SSG** | On-demand (webhook CMS) + `revalidate: 3600` de seguridad | El HTML del hero tiene que salir del CDN en el primer byte. Cualquier ms de servidor aquí es un ms directo de LCP en la página que más enlaces recibe. |
| Pilares, satélites, guías | **SSG** desde MDX | Sólo en build (el contenido está en git) | Contenido que cambia cuando alguien hace un PR. No hay nada que revalidar. |
| Landings de ciudad | **SSG** | En build | Se generan desde `CIUDADES` con `generateStaticParams` + `dynamicParams = false`. |
| Cluster D | **SSG** | En build + on-demand si listan artistas del CMS | |
| `/precios` | **SSG** | On-demand | Las horquillas las toca negocio. Webhook. |
| `/artistas` | **SSG con ISR** | On-demand + `revalidate: 3600` | El roster cambia. Se prerrenderiza el listado completo sin filtros; los filtros son cliente sobre un JSON embebido de ≤ 24 registros (~8 KB). Cero peticiones al filtrar. |
| `/artistas/[slug]` | **SSG con ISR** | On-demand por webhook del CMS | `generateStaticParams` sobre los publicados + `dynamicParams = true` para que un artista nuevo esté vivo sin redeploy (se sirve en el primer hit y queda cacheado). |
| `/como-funciona`, `/nosotros`, `/contacto` | **SSG** | Build | |
| `/brief` | **SSG (cáscara estática) + cliente** | Build | El formulario es estado de cliente. El servidor no tiene nada que decidir. Se sirve del CDN y se hidrata. |
| `/brief/gracias` | **SSR / `dynamic = 'force-dynamic'`** | — | Lee un token de sesión para personalizar y para no permitir que se cachee. `noindex`. |
| `/api/brief` | **Route Handler, runtime Node** | — | Necesita el SDK del CRM y firmar el evento de servidor. Edge no aporta nada: la latencia la manda el CRM. |
| `og/[slug]` (imágenes OG) | **Edge, cacheado** | `immutable` | |

**Regla de fondo: en este sitio no hay ni una sola página indexable que se renderice en el servidor por petición.** Ninguna necesita datos del usuario. Si mañana alguien propone SSR para una página indexable, la pregunta es "¿qué dato de la petición cambia el HTML?". Si la respuesta no es concreta, es SSG.

**Por qué no ISR agresivo en todo.** ISR con `revalidate: 60` "por si acaso" convierte un TTFB de 40 ms en uno de 300–800 ms cada vez que toca revalidar, y en un sitio de bajo tráfico *casi siempre toca revalidar*. La revalidación bajo demanda (webhook) da lo mismo con TTFB constante.

### 3.2 Código

```ts
// app/musica-para-bodas/[ciudad]/page.tsx
import { CIUDADES } from '@/content/ciudades';
import { notFound } from 'next/navigation';

export const dynamicParams = false;   // ← lo que NO está en la lista blanca es 404
export const revalidate = false;      // estático puro

export function generateStaticParams() {
  return CIUDADES
    .filter((c) => c.publicada && c.ocasiones.includes('musica-para-bodas'))
    .map((c) => ({ ciudad: c.slug }));
}

export default async function Page({ params }) {
  const { ciudad } = await params;
  const c = CIUDADES.find((x) => x.slug === ciudad);
  if (!c) notFound();
  return <LandingCiudad ciudad={c} />;
}
```

```ts
// app/artistas/[slug]/page.tsx
export const dynamicParams = true;    // artista nuevo vivo sin redeploy
export const revalidate = 3600;

export async function generateStaticParams() {
  const artistas = await getArtistasPublicados();
  return artistas.map((a) => ({ slug: a.slug }));
}
```

```ts
// app/api/revalidar/route.ts — webhook del CMS
import { revalidatePath, revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const firma = req.headers.get('x-cms-signature');
  if (!verificar(firma, await req.clone().text())) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }
  const { tipo, slug } = await req.json();

  if (tipo === 'artista') {
    revalidatePath(`/artistas/${slug}`);
    revalidatePath('/artistas');
    revalidatePath('/');              // el carrusel de destacados vive en la home
    revalidateTag('sitemap-artistas');
  }
  return NextResponse.json({ ok: true, revalidado: new Date().toISOString() });
}
```

```js
// next.config.mjs
/** @type {import('next').NextConfig} */
export default {
  trailingSlash: false,
  poweredByHeader: false,
  compress: true,

  images: {
    formats: ['image/avif', 'image/webp'],
    // Ajustados a los anchos que realmente usamos. Cada tamaño de más es una
    // variante más que generar, cachear y purgar.
    deviceSizes: [390, 640, 828, 1080, 1440, 1920],
    imageSizes: [96, 160, 256, 384],
    minimumCacheTTL: 31536000,
  },

  async redirects() {
    return [
      { source: '/:path*', has: [{ type: 'host', value: 'www.showupevents.es' }],
        destination: 'https://showupevents.es/:path*', permanent: true },
      // Anclas de marca que la gente teclea. Un solo salto, nunca cadena.
      { source: '/bodas', destination: '/musica-para-bodas', permanent: true },
      { source: '/empresa', destination: '/artistas-para-eventos-de-empresa', permanent: true },
      { source: '/fiestas', destination: '/orquestas-para-fiestas-patronales', permanent: true },
    ];
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
      {
        // Fuentes y vídeo: inmutables, con hash en el nombre.
        source: '/:all*(woff2|mp4|webm|avif|webp)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/api/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
    ];
  },
};
```

```ts
// middleware.ts
import { NextResponse, type NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl;

  // 1) Minúsculas obligatorias
  if (url.pathname !== url.pathname.toLowerCase()) {
    url.pathname = url.pathname.toLowerCase();
    return NextResponse.redirect(url, 308);
  }

  const res = NextResponse.next();

  // 2) EL CANDADO: nada que no sea producción se indexa jamás.
  if (process.env.VERCEL_ENV !== 'production') {
    res.headers.set('X-Robots-Tag', 'noindex, nofollow');
  }

  // 3) Atribución de primer contacto (ver §9.4). Cookie propia, 90 días.
  if (!req.cookies.get('su_first')) {
    res.cookies.set('su_first', JSON.stringify({
      lp: url.pathname,
      ref: req.headers.get('referer') ?? '',
      utm: url.searchParams.get('utm_source') ?? '',
      gclid: url.searchParams.get('gclid') ?? '',
      ts: Date.now(),
    }), { maxAge: 60 * 60 * 24 * 90, sameSite: 'lax', path: '/', httpOnly: false });
  }

  return res;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|avif|webp|mp4|webm|woff2)$).*)'],
};
```

---

## 4. Core Web Vitals con una dirección de arte oscura y pesada

### 4.1 El diagnóstico honesto

La dirección de arte pide: negro profundo, **fotografía a sangre a pantalla completa**, grano de película, alto contraste, y **vídeo en bucle en el hero**. Tres de esas cuatro cosas son caras:

| Elemento | Riesgo | Magnitud si no se toca nada |
|---|---|---|
| Foto a sangre a pantalla completa | Es el elemento LCP en móvil, casi con seguridad | 180–400 KB → LCP 2,8–4,0 s en 4G lento |
| Grano de película incrustado | El grano es ruido de alta frecuencia: mata AVIF y WebP | **+35–45 % de peso** sobre la misma foto sin grano |
| Vídeo autoplay en el hero | Si el navegador lo elige como LCP, LCP = primer fotograma pintado tras descargar buffer | 3,5–5 s en móvil, y consume el ancho de banda que necesita el poster |
| Tres familias tipográficas | Salto de fuente = CLS; descarga = ms de FCP | 90–140 KB si no se subsetea + CLS 0,05–0,15 |

Ninguno de los cuatro obliga a renunciar a la dirección de arte. Los cuatro tienen solución técnica exacta.

### 4.2 Las siete reglas del hero

**Regla 1 — El elemento LCP es la imagen `poster`, nunca el vídeo. En móvil no hay vídeo.**

El vídeo se carga **después** del evento `load`, sólo en pantallas ≥ 768 px, sólo con `prefers-reduced-motion: no-preference`, sólo si la conexión no es lenta y no hay `saveData`. En móvil el hero es una fotografía fija y punto. Justificación de negocio, no técnica: entre el 65 % y el 75 % del tráfico de estas búsquedas es móvil, el vídeo en bucle a 6 s oscurecido al 80 % no cambia una sola conversión en una pantalla de 6 pulgadas, y el móvil es lo que mide Google.

**Regla 2 — El grano va en CSS, no en el archivo.**

Una foto de directo con grano incrustado a q≈50 en AVIF pesa ~130 KB a 828 px. La misma foto sin grano pesa ~72 KB. El grano se recupera con una capa CSS de 2,8 KB que se cachea para siempre y sirve para **todas** las fotos del sitio:

```css
/* Grano de película: 1 fichero, 2,8 KB, cacheado un año, aplicable a todo */
.grano::after {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image: url('/tex/grano-128.png'); /* PNG 128×128 en escala de grises */
  background-repeat: repeat;
  opacity: 0.07;
  mix-blend-mode: overlay;
  /* Sin animación: un grano animado obliga a repintar la pantalla completa cada frame
     y destroza el INP en móviles de gama media. El grano estático es indistinguible. */
}
@media (prefers-reduced-motion: reduce) { .grano::after { opacity: 0.05; } }
```

Lo mismo con el **degradado negro sobre el que se apoya el texto** y con el **viñeteado**: son CSS, no píxeles horneados. Eso permite además comprimir la foto más agresivamente, porque la zona donde va el texto va a quedar tapada de todos modos.

**Regla 3 — Art direction real: recorte vertical en móvil.**

Servir la foto apaisada de 1920 px recortada por CSS en un móvil de 390 px es tirar el 60 % de los bytes. Se sirven dos recortes distintos, no dos tamaños del mismo:

```html
<!-- En el <head>, ANTES de cualquier CSS. Sólo se descarga el que coincida. -->
<link rel="preload" as="image" fetchpriority="high"
      media="(max-width: 767px)"
      href="/hero/sala-390.avif"
      imagesrcset="/hero/sala-390.avif 390w, /hero/sala-828.avif 828w"
      imagesizes="100vw" type="image/avif">
<link rel="preload" as="image" fetchpriority="high"
      media="(min-width: 768px)"
      href="/hero/sala-1440.avif"
      imagesrcset="/hero/sala-1080.avif 1080w, /hero/sala-1440.avif 1440w, /hero/sala-1920.avif 1920w"
      imagesizes="100vw" type="image/avif">
```

```tsx
// components/Hero.tsx — servidor, sin JS
export function Hero() {
  return (
    <section className="hero grano">
      <picture>
        {/* Vertical 3:4 para móvil, apaisado 16:9 para escritorio */}
        <source media="(max-width: 767px)" type="image/avif"
                srcSet="/hero/sala-390.avif 390w, /hero/sala-828.avif 828w" sizes="100vw" />
        <source media="(max-width: 767px)" type="image/webp"
                srcSet="/hero/sala-390.webp 390w, /hero/sala-828.webp 828w" sizes="100vw" />
        <source type="image/avif"
                srcSet="/hero/sala-1080.avif 1080w, /hero/sala-1440.avif 1440w, /hero/sala-1920.avif 1920w"
                sizes="100vw" />
        <img
          src="/hero/sala-1440.webp"
          alt="Banda tocando en una sala a oscuras, público de pie con las manos levantadas"
          width={1440} height={810}
          fetchPriority="high"          /* el único de toda la página */
          decoding="sync"               /* no diferir la decodificación del LCP */
          className="hero__img"
        />
      </picture>
      <div className="hero__degradado" />   {/* CSS, no horneado */}
      <div className="hero__contenido">
        <h1>Dinos qué noche quieres.</h1>
        <p>Músicos, magos, monologuistas y DJs por toda España…</p>
        <CampoHero />
      </div>
      <VideoHero />   {/* client component, no hace nada hasta después de load */}
    </section>
  );
}
```

> **No usar `next/image` para el hero con art direction.** `next/image` no soporta `<picture>` con `media` distinto por recorte, y la optimización en tiempo de ejecución añade una petición al optimizador en el primer hit. El hero se exporta a mano en build (script `scripts/hero.sh`) y se sirve como estático inmutable. `next/image` sí para el resto (tarjetas de artista, fotos de guías), donde no hay art direction.

**Regla 4 — Fondo negro sólido, cero LQIP.**

Sobre `#0A0A0A`, un placeholder borroso no aporta nada: el fondo ya es del color de la foto. Se ahorra el `blurDataURL` (que son 600–1.200 bytes en el HTML de cada imagen, en línea, sin cachear) y se pone `background-color: #0A0A0A` en el contenedor. Es la única vez que el negro sale gratis.

**Regla 5 — `100svh`, no `100vh`.**

En móvil, `100vh` provoca un reajuste de layout cuando la barra de URL se contrae al hacer scroll. Con un hero a pantalla completa eso es CLS regalado:

```css
.hero { min-height: 100svh; }             /* small viewport height */
@supports not (height: 100svh) { .hero { min-height: 100vh; } }
```

**Regla 6 — El campo del hero reserva su altura desde el CSS crítico.**

El campo tiene 64 px, botón dentro a la derecha en escritorio y debajo a ancho completo en móvil. Ambos estados se declaran en el CSS crítico en línea, con `min-height` explícito. **El placeholder rotativo cambia texto, nunca tamaño**: se fija `min-height` en el `<input>` y la rotación es un cambio de atributo `placeholder`, no un cambio de nodo.

**Regla 7 — El vídeo, así.**

```tsx
'use client';
// components/VideoHero.tsx
import { useEffect, useRef, useState } from 'react';

export function VideoHero() {
  const [cargar, setCargar] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const mqMovil = window.matchMedia('(max-width: 767px)');
    const mqMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)');
    // @ts-expect-error API no estándar pero disponible en Chrome/Android
    const con = navigator.connection;

    if (mqMovil.matches) return;                       // móvil: nunca
    if (mqMovimiento.matches) return;                  // accesibilidad: nunca
    if (con?.saveData) return;                         // ahorro de datos: nunca
    if (con && ['slow-2g', '2g', '3g'].includes(con.effectiveType)) return;

    const arrancar = () => {
      const idle = window.requestIdleCallback ?? ((f: any) => setTimeout(f, 1200));
      idle(() => setCargar(true));
    };
    if (document.readyState === 'complete') arrancar();
    else window.addEventListener('load', arrancar, { once: true });
  }, []);

  useEffect(() => {
    if (!cargar || !ref.current) return;
    const v = ref.current;
    // Pausar cuando el hero sale de pantalla: ahorra CPU, batería y repintados.
    const io = new IntersectionObserver(([e]) => (e.isIntersecting ? v.play().catch(() => {}) : v.pause()));
    io.observe(v);
    return () => io.disconnect();
  }, [cargar]);

  if (!cargar) return null;   // ← no existe en el DOM hasta después de load

  return (
    <video
      ref={ref}
      className="hero__video"
      muted playsInline loop
      preload="auto"
      poster="/hero/sala-1440.webp"   /* el mismo que ya está en caché: coste cero */
      aria-hidden="true"
      tabIndex={-1}
    >
      <source src="/hero/sala.av1.mp4" type='video/mp4; codecs="av01.0.05M.08"' />
      <source src="/hero/sala.h264.mp4" type='video/mp4; codecs="avc1.640028"' />
    </video>
  );
}
```

Y el CSS que hace que el cambio foto→vídeo no se note (y que el vídeo no pueda ser nunca el LCP, porque aparece con opacidad 0 y sube después):

```css
.hero__img, .hero__video {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  object-fit: cover;
  filter: contrast(1.25) saturate(0.75) brightness(0.8);
}
.hero__video { opacity: 0; transition: opacity 600ms cubic-bezier(0.22, 1, 0.36, 1); }
.hero__video[data-listo='true'] { opacity: 1; }
.hero__degradado {
  position: absolute; inset: 0; pointer-events: none;
  background: linear-gradient(90deg, #0A0A0A 0%, rgba(10,10,10,.82) 38%, rgba(10,10,10,.25) 100%),
              radial-gradient(120% 90% at 60% 40%, transparent 40%, rgba(10,10,10,.65) 100%);
}
```

### 4.3 Codificación: los comandos exactos

```bash
#!/usr/bin/env bash
# scripts/hero.sh — de un máster a los seis ficheros del hero.
set -euo pipefail
MASTER="$1"          # master.mov, 10 bits si se puede
TRATAMIENTO="eq=contrast=1.25:saturation=0.75:brightness=-0.08"

# ── VÍDEO (sólo escritorio) ────────────────────────────────────────────────
# -an: SIN pista de audio. El hero es mudo por diseño; quitarla ahorra KB y
#      elimina de raíz los problemas de política de autoplay de iOS/Safari.
# -movflags +faststart: el átomo moov al principio, para que empiece a reproducir
#      sin descargar el fichero entero.
ffmpeg -y -i "$MASTER" -t 6 -an \
  -vf "scale=1920:-2:flags=lanczos,$TRATAMIENTO" \
  -c:v libsvtav1 -crf 40 -preset 6 -g 120 -pix_fmt yuv420p \
  -movflags +faststart public/hero/sala.av1.mp4

ffmpeg -y -i "$MASTER" -t 6 -an \
  -vf "scale=1600:-2:flags=lanczos,$TRATAMIENTO" \
  -c:v libx264 -crf 30 -preset slower -profile:v high -level 4.1 \
  -g 120 -pix_fmt yuv420p -movflags +faststart public/hero/sala.h264.mp4

# ── POSTER Y RECORTES (sin grano: el grano lo pone el CSS) ─────────────────
ffmpeg -y -i "$MASTER" -vframes 1 -vf "$TRATAMIENTO" /tmp/poster.png

# Escritorio 16:9
for W in 1080 1440 1920; do
  ffmpeg -y -i /tmp/poster.png -vf "scale=$W:-2:flags=lanczos" /tmp/d$W.png
  avifenc --min 0 --max 63 -a end-usage=q -a cq-level=34 -a tune=ssim -s 4 -j all \
          /tmp/d$W.png "public/hero/sala-$W.avif"
  cwebp -q 72 -m 6 -sharp_yuv /tmp/d$W.png -o "public/hero/sala-$W.webp"
done

# Móvil 3:4 — RECORTE distinto, no reescalado. Se centra en el artista.
for W in 390 828; do
  H=$(( W * 4 / 3 ))
  ffmpeg -y -i /tmp/poster.png \
    -vf "crop=ih*3/4:ih:(iw-ih*3/4)/2:0,scale=$W:$H:flags=lanczos" /tmp/m$W.png
  avifenc --min 0 --max 63 -a end-usage=q -a cq-level=36 -a tune=ssim -s 4 -j all \
          /tmp/m$W.png "public/hero/sala-$W.avif"
  cwebp -q 70 -m 6 -sharp_yuv /tmp/m$W.png -o "public/hero/sala-$W.webp"
done

ls -lh public/hero/
# Objetivo: sala-390.avif ≤ 32 KB · sala-828.avif ≤ 70 KB
#           sala-1440.avif ≤ 110 KB · sala.av1.mp4 ≤ 1,4 MB
```

**Nota de fotografía que ahorra la mitad del trabajo:** la dirección de arte pide contraluz con negros empastados. Eso es una bendición para la compresión — un fotograma con el 60 % de píxeles cerca de `#0A0A0A` y una sola fuente de luz cálida comprime muchísimo mejor que una foto plana bien iluminada. La estética elegida y el rendimiento van, por una vez, en la misma dirección. Lo único que hay que quitar del flujo de trabajo es el grano en exportación.

### 4.4 Tipografías

Tres familias es el límite superior de lo tolerable. Se sostiene así:

```ts
// app/fuentes.ts
import localFont from 'next/font/local';

// DISPLAY — sólo el H1 del hero y los números de sección (01/02/03).
// Subset manual con pyftsubset a ~110 glifos. De 62 KB a 9 KB.
export const display = localFont({
  src: [{ path: '../public/fonts/anton-subset.woff2', weight: '400', style: 'normal' }],
  variable: '--f-display',
  display: 'swap',
  preload: true,                     // está sobre el pliegue
  fallback: ['Impact', 'Haettenschweiler', 'sans-serif'],
  adjustFontFallback: false,
  // Métricas medidas contra Impact para que el intercambio no mueva un píxel.
  declarations: [
    { prop: 'size-adjust', value: '104%' },
    { prop: 'ascent-override', value: '96%' },
    { prop: 'descent-override', value: '22%' },
    { prop: 'line-gap-override', value: '0%' },
  ],
});

// TEXTO — todo el cuerpo. Variable, un solo fichero para todos los pesos.
export const texto = localFont({
  src: [{ path: '../public/fonts/inter-var-subset.woff2', weight: '100 900', style: 'normal' }],
  variable: '--f-texto',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
});

// EDITORIAL — cursiva de contraste alto para titulares de sección y citas.
// NO está sobre el pliegue en ninguna página → no se precarga.
export const editorial = localFont({
  src: [{ path: '../public/fonts/instrument-serif-italic-subset.woff2', weight: '400', style: 'italic' }],
  variable: '--f-editorial',
  display: 'swap',
  preload: false,                    // ← deliberado
  fallback: ['Georgia', 'Times New Roman', 'serif'],
});
```

```bash
# Subsetting. El juego de caracteres castellano completo + puntuación de la marca.
pyftsubset Anton-Regular.ttf \
  --unicodes="U+0020-007E,U+00A0-00FF,U+2010-2015,U+2018-201D,U+2026,U+20AC,U+00B7" \
  --layout-features="kern,liga" --flavor=woff2 --desubroutinize \
  --output-file=public/fonts/anton-subset.woff2
```

**Reglas duras de tipografía:**

- **Cero Google Fonts por CDN.** Una conexión más (DNS + TCP + TLS ≈ 200–400 ms en móvil), un tercero en la ruta crítica, y además `fonts.googleapis.com` ya no es aceptable en Europa sin consentimiento según la jurisprudencia alemana de 2022. Se autoalojan las tres, siempre.
- **Sólo dos `preload`**: display y texto. La editorial, no: `preload` de una fuente que no está sobre el pliegue compite por ancho de banda con el LCP y lo empeora.
- **`display: swap` + métricas ajustadas = CLS 0.** Sin las métricas, `swap` es una máquina de generar CLS. Se mide con `document.fonts.ready` y una captura antes/después, no se estima.
- **Números tabulares (`font-variant-numeric: tabular-nums`) en la tabla de precios**, para que no baile al actualizar.

### 4.5 Presupuesto de rendimiento, por tipo de página

Medido en **transferencia comprimida (brotli)**, en el percentil 75 de campo (CrUX / RUM propio), con perfil móvil. **No es una aspiración: es un umbral que rompe el build.**

| Recurso | Home | Pilar / guía | Ficha de artista | Catálogo | Brief |
|---|---|---|---|---|---|
| HTML | ≤ 22 KB | ≤ 28 KB | ≤ 24 KB | ≤ 32 KB | ≤ 14 KB |
| CSS (crítico en línea + resto) | ≤ 9 + 18 KB | ≤ 9 + 18 KB | ≤ 9 + 18 KB | ≤ 9 + 20 KB | ≤ 9 + 14 KB |
| JS de terceros | **0 KB antes del LCP** | 0 | 0 | 0 | 0 |
| JS total (framework + propio) | ≤ 115 KB | ≤ 100 KB | ≤ 125 KB | ≤ 135 KB | ≤ 150 KB |
| — del cual propio | ≤ 28 KB | ≤ 14 KB | ≤ 34 KB | ≤ 42 KB | ≤ 58 KB |
| Fuentes (precargadas) | ≤ 36 KB | ≤ 36 KB | ≤ 36 KB | ≤ 36 KB | ≤ 30 KB |
| Imagen LCP | ≤ 70 KB | **n/a (LCP = texto)** | ≤ 78 KB | ≤ 30 KB | n/a |
| Imágenes restantes hasta el pliegue | ≤ 40 KB | ≤ 0 KB | ≤ 40 KB | ≤ 60 KB | 0 |
| **Total hasta el LCP** | **≤ 250 KB** | **≤ 190 KB** | **≤ 265 KB** | **≤ 245 KB** | **≤ 160 KB** |
| **Total página completa (sin vídeo)** | **≤ 560 KB** | **≤ 420 KB** | **≤ 700 KB** | **≤ 820 KB** | **≤ 330 KB** |
| Vídeo (sólo escritorio, tras `load`) | ≤ 1,4 MB | — | ≤ 1,8 MB (reel) | — | — |
| Peticiones hasta el LCP | ≤ 9 | ≤ 7 | ≤ 9 | ≤ 10 | ≤ 6 |

**Umbrales de métrica (campo, p75, móvil):**

| Métrica | Home | Pilar / guía | Ficha | Catálogo | Global del sitio |
|---|---|---|---|---|---|
| TTFB | ≤ 250 ms | ≤ 250 ms | ≤ 350 ms | ≤ 300 ms | ≤ 300 ms |
| FCP | ≤ 1,3 s | ≤ 1,1 s | ≤ 1,4 s | ≤ 1,4 s | ≤ 1,4 s |
| **LCP** | **≤ 2,0 s** | **≤ 1,6 s** | **≤ 2,2 s** | **≤ 2,1 s** | **≤ 2,2 s** |
| **CLS** | **≤ 0,02** | ≤ 0,02 | ≤ 0,03 | ≤ 0,05 | **≤ 0,05** |
| **INP** | ≤ 150 ms | ≤ 120 ms | ≤ 180 ms | ≤ 200 ms | **≤ 200 ms** |
| TBT (lab, Moto G Power) | ≤ 150 ms | ≤ 100 ms | ≤ 180 ms | ≤ 200 ms | — |

El umbral de LCP es **2,0 s en la home, no 2,5 s**. El margen de 500 ms es deliberado: el p75 de campo se degrada con el tiempo (más contenido, más scripts, un píxel de remarketing que alguien añade en el mes 7). Si se lanza pegado a 2,5 s, en seis meses se está en rojo.

**Por qué el pilar tiene el LCP más bajo de todos: porque su LCP es el `<h1>`.** Esa es la decisión número 9 del §0 y aquí está el número que la justifica. La foto a sangre en la home cuesta ~400 ms de LCP frente a un hero de texto. En la home ese coste está comprado (es donde vive la marca). En las 25 páginas cuyo trabajo es rankear, no. Los pilares y las guías abren con: fondo `#0A0A0A`, `<h1>` en display, entradilla, y la fotografía **debajo del pliegue**, en 16:9, `loading="lazy"`. Se ve igual de Show Up y carga en la mitad de tiempo.

**Cómo se hace cumplir (CI, bloqueante):**

```json
// lighthouse-budget.json
[{
  "path": "/*",
  "timings": [
    { "metric": "largest-contentful-paint", "budget": 2200 },
    { "metric": "cumulative-layout-shift", "budget": 0.05 },
    { "metric": "total-blocking-time", "budget": 200 }
  ],
  "resourceSizes": [
    { "resourceType": "script", "budget": 140 },
    { "resourceType": "stylesheet", "budget": 30 },
    { "resourceType": "font", "budget": 40 },
    { "resourceType": "image", "budget": 200 },
    { "resourceType": "third-party", "budget": 40 },
    { "resourceType": "total", "budget": 600 }
  ],
  "resourceCounts": [{ "resourceType": "third-party", "budget": 4 }]
}]
```

```yaml
# .github/workflows/rendimiento.yml
- name: Lighthouse CI
  uses: treosh/lighthouse-ci-action@v12
  with:
    urls: |
      ${{ env.URL_PREVIEW }}/
      ${{ env.URL_PREVIEW }}/musica-para-bodas
      ${{ env.URL_PREVIEW }}/musica-para-bodas/cuanto-cuesta
      ${{ env.URL_PREVIEW }}/artistas
      ${{ env.URL_PREVIEW }}/artistas/las-doce
    budgetPath: ./lighthouse-budget.json
    configPath: ./lighthouserc.json     # emulación móvil, 3 pasadas, mediana
    uploadArtifacts: true
```

Y una prueba que no es de rendimiento pero se ejecuta aquí porque es el momento en que se detecta:

```ts
// e2e/indexabilidad.spec.ts — bloquea el despliegue a producción
test('ninguna página indexable emite noindex', async ({ request }) => {
  for (const ruta of RUTAS_INDEXABLES) {
    const r = await request.get(`${PROD}${ruta}`);
    expect(r.status()).toBe(200);
    expect(r.headers()['x-robots-tag'] ?? '').not.toContain('noindex');
    expect(await r.text()).not.toMatch(/<meta[^>]+name=["']robots["'][^>]+noindex/i);
  }
});
test('robots.txt no bloquea el sitio', async ({ request }) => {
  const txt = await (await request.get(`${PROD}/robots.txt`)).text();
  expect(txt).not.toMatch(/^Disallow:\s*\/\s*$/m);
});
```

### 4.6 Terceros: la partida que hay que ganar antes de empezar

**Presupuesto total de terceros: 40 KB y 4 peticiones.** Con eso caben exactamente: un CMP ligero y GA4. No cabe nada más. Cada petición de marketing que se añada después tiene que quitar otra.

| Script | Decisión |
|---|---|
| Google Tag Manager | **No se instala.** Un contenedor GTM son 90–120 KB antes de cargar una sola etiqueta, y es la puerta por la que en el mes 6 entran seis píxeles sin que nadie lo revise. Si negocio lo exige, va **server-side** (sGTM) y el cliente sólo envía a un endpoint propio. |
| GA4 | Vía `next/third-parties` `<GoogleAnalytics />`, estrategia `afterInteractive`, y **nunca antes del LCP**. Alternativa preferida el año 1: **Plausible o Umami autoalojado (~1,4 KB)** + GA4 sólo si hay que compartir datos con una agencia de Ads. |
| Consent Mode v2 | Obligatorio en la UE. CMP **ligero y autoalojado** (Klaro, ~14 KB), no un CMP comercial de 180 KB. `default` en `denied` para `ad_storage` y `ad_user_data`; `analytics_storage` con consentimiento. |
| reCAPTCHA | **Prohibido en la carga inicial.** 250–450 KB y un impacto directo en INP. Ver §7.5. |
| Chat / widget de WhatsApp | Botón `<a href="https://wa.me/…">` nativo. Cero KB. Ningún SDK. |
| Fuentes de Google, iconos de FontAwesome, jQuery | No existen en este proyecto. |
| Píxel de Meta / LinkedIn | Sólo si hay campaña activa, cargado tras consentimiento y tras `load`. Con campaña apagada, se retira del código. |

### 4.7 Vídeo en la ficha de artista

La ficha lleva "vídeo de directo, lo primero que se ve". Un `<iframe>` de YouTube en la carga inicial son ~550 KB, 5 conexiones a 3 dominios y un golpe de 200–400 ms de TBT. Solución:

- **Fachada** (patrón `lite-youtube`, ~3 KB): se pinta el poster + un botón de play; el `<iframe>` real se inyecta al primer clic.
- **El poster se sirve desde nuestro dominio**, no desde `i.ytimg.com`. Se descarga `maxresdefault.jpg` en build, se reencoda a AVIF con el tratamiento de la casa y se guarda. Ahorra una conexión de tercero y aplica la dirección de arte al fotograma.
- `youtube-nocookie.com` como origen del iframe, para no depender del consentimiento para poder mostrar el poster.
- **YouTube y no autoalojado**, deliberadamente: el vídeo alojado en el canal del artista le suma reproducciones (buena relación con el artista, que es de donde salen los primeros enlaces reales del §"link building" de `04`), y el `VideoObject` con `embedUrl` de YouTube es el que Google indexa con más facilidad.

---

## 5. Datos estructurados

Todo en **JSON-LD**, en un solo `<script>` por página con `@graph`, emitido desde el servidor. Un único bloque por página evita que dos scripts declaren entidades contradictorias.

### 5.1 El componente

```tsx
// components/JsonLd.tsx
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // El reemplazo de '<' evita que un valor con "</script>" rompa el documento.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  );
}
```

### 5.2 Grafo base — en todas las páginas

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://showupevents.es/#organization",
      "name": "Show Up Events",
      "alternateName": "Show Up",
      "url": "https://showupevents.es/",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://showupevents.es/#logo",
        "url": "https://showupevents.es/logo.png",
        "width": 512,
        "height": 512,
        "caption": "Show Up Events"
      },
      "image": { "@id": "https://showupevents.es/#logo" },
      "description": "Contratación de artistas para bodas, eventos de empresa y fiestas en toda España. No vendemos catálogo: encontramos al artista que encaja en cada noche y respondemos de que aparezca.",
      "slogan": "Aparecemos nosotros. Quedas bien tú.",
      "foundingDate": "2025",
      "knowsLanguage": ["es-ES", "ca-ES", "en"],
      "areaServed": { "@type": "Country", "name": "España" },
      "knowsAbout": [
        "Contratación de músicos para bodas",
        "Artistas para eventos de empresa",
        "Orquestas para fiestas patronales",
        "Grupos de versiones",
        "Magos para eventos",
        "Monologuistas para eventos"
      ],
      "contactPoint": [{
        "@type": "ContactPoint",
        "@id": "https://showupevents.es/#contacto-ventas",
        "telephone": "+34600000000",
        "email": "hola@showupevents.es",
        "contactType": "sales",
        "areaServed": "ES",
        "availableLanguage": ["es", "ca", "en"]
      }],
      "sameAs": [
        "https://www.instagram.com/showupevents",
        "https://www.linkedin.com/company/showupevents",
        "https://www.youtube.com/@showupevents"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://showupevents.es/#website",
      "url": "https://showupevents.es/",
      "name": "Show Up Events",
      "publisher": { "@id": "https://showupevents.es/#organization" },
      "inLanguage": "es-ES"
    }
  ]
}
```

> **Sin `potentialAction` / `SearchAction`.** Google retiró el rich result de *sitelinks searchbox* en noviembre de 2023. Marcarlo no hace nada. Además el buscador de este sitio es un filtro de cliente sin URL de resultados: no habría `target` honesto que declarar.

### 5.3 Home

Añade al `@graph` base:

```json
{
  "@type": "WebPage",
  "@id": "https://showupevents.es/#webpage",
  "url": "https://showupevents.es/",
  "name": "Show Up · Artistas para bodas, empresa y fiestas",
  "description": "Dinos qué noche quieres y te proponemos dos o tres artistas, con el porqué de cada uno. Músicos, magos, monologuistas y DJs en toda España.",
  "isPartOf": { "@id": "https://showupevents.es/#website" },
  "about": { "@id": "https://showupevents.es/#organization" },
  "primaryImageOfPage": {
    "@type": "ImageObject",
    "url": "https://showupevents.es/hero/sala-1440.webp",
    "width": 1440,
    "height": 810,
    "caption": "Banda tocando en una sala a oscuras con el público de pie"
  },
  "inLanguage": "es-ES"
}
```

### 5.4 Breadcrumbs — en toda página que no sea la home

Es el marcado con mejor relación coste/beneficio del sitio: Google lo sigue pintando y sustituye la URL cruda por la ruta legible.

```json
{
  "@type": "BreadcrumbList",
  "@id": "https://showupevents.es/musica-para-bodas/barcelona#breadcrumb",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio",
      "item": "https://showupevents.es/" },
    { "@type": "ListItem", "position": 2, "name": "Música en directo para bodas",
      "item": "https://showupevents.es/musica-para-bodas" },
    { "@type": "ListItem", "position": 3, "name": "Barcelona" }
  ]
}
```

> El último elemento **no lleva `item`**: es la página actual. Es lo que recomienda Google y evita el autoenlace.

```tsx
// lib/schema/breadcrumb.ts
export function breadcrumb(path: string, migas: { nombre: string; url?: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${SITIO}${path}#breadcrumb`,
    itemListElement: migas.map((m, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: m.nombre,
      ...(m.url ? { item: `${SITIO}${m.url}` } : {}),
    })),
  };
}
```

### 5.5 Pilar de ocasión — `Service`

```json
{
  "@type": "Service",
  "@id": "https://showupevents.es/musica-para-bodas#service",
  "name": "Música en directo para bodas",
  "serviceType": "Contratación de música en directo para bodas",
  "description": "Selección y contratación de grupos, dúos y solistas para ceremonia, cóctel y fiesta de boda, con contrato, rider resuelto y suplente reservado.",
  "url": "https://showupevents.es/musica-para-bodas",
  "provider": { "@id": "https://showupevents.es/#organization" },
  "areaServed": { "@type": "Country", "name": "España" },
  "audience": {
    "@type": "Audience",
    "audienceType": "Parejas que organizan su boda y wedding planners"
  },
  "termsOfService": "https://showupevents.es/como-funciona",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Formatos para boda",
    "itemListElement": [
      { "@type": "OfferCatalog", "name": "Solista o dúo para ceremonia y cóctel" },
      { "@type": "OfferCatalog", "name": "Trío o cuarteto para boda completa" },
      { "@type": "OfferCatalog", "name": "Banda completa con sonido y luces" },
      { "@type": "OfferCatalog", "name": "Cuarteto de cuerda para ceremonia" }
    ]
  }
}
```

> **`hasOfferCatalog` con nombres, sin `Offer` ni `price`.** Declara los formatos que existen (útil para entidades y para asistentes generativos) sin comprometer un precio. La decisión de `04` de no marcar precios se mantiene: los cachés varían por fecha, sitio y formato, y un `Offer` que no se sostiene genera reclamaciones y desconfianza. Las horquillas van en texto, en `/precios`.

### 5.6 Landing de ciudad — `Service` con `areaServed` real

```json
{
  "@type": "Service",
  "@id": "https://showupevents.es/musica-para-bodas/barcelona#service",
  "name": "Música en directo para bodas en Barcelona",
  "serviceType": "Contratación de música en directo para bodas",
  "description": "Grupos, dúos y solistas para bodas en Barcelona y provincia. Conocemos las masías, los límites de decibelios y los horarios de cierre de la zona.",
  "url": "https://showupevents.es/musica-para-bodas/barcelona",
  "provider": { "@id": "https://showupevents.es/#organization" },
  "areaServed": [
    { "@type": "City", "name": "Barcelona",
      "sameAs": "https://es.wikipedia.org/wiki/Barcelona" },
    { "@type": "AdministrativeArea", "name": "Provincia de Barcelona" }
  ],
  "isRelatedTo": { "@id": "https://showupevents.es/musica-para-bodas#service" }
}
```

`sameAs` a Wikipedia/Wikidata en la entidad geográfica es gratis y desambigua la ciudad. En zonas con nombre propio (`Empordà`) es todavía más útil, porque no es un municipio y sin `sameAs` Google puede no saber qué es.

### 5.7 Ficha de artista — banda

**El marcado más valioso del sitio**, porque nadie en esta vertical lo pone y es lo que activa la miniatura de vídeo en el resultado.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": "https://showupevents.es/#organization" },
    {
      "@type": "MusicGroup",
      "@id": "https://showupevents.es/artistas/las-doce#artista",
      "name": "Las Doce",
      "alternateName": "Las 12",
      "url": "https://showupevents.es/artistas/las-doce",
      "description": "Banda de versiones de seis músicos con tres voces y 140 canciones de repertorio. Del pasodoble al reguetón sin que se note la costura.",
      "genre": ["Versiones", "Pop español", "Rumba", "Verbena"],
      "foundingLocation": { "@type": "Place", "name": "Zamora" },
      "numberOfMembers": 6,
      "member": [
        { "@type": "OrganizationRole",
          "member": { "@type": "Person", "name": "Nombre Apellido" },
          "roleName": "Voz y guitarra" },
        { "@type": "OrganizationRole",
          "member": { "@type": "Person", "name": "Nombre Apellido" },
          "roleName": "Batería" }
      ],
      "image": { "@id": "https://showupevents.es/artistas/las-doce#retrato" },
      "subjectOf": { "@id": "https://showupevents.es/artistas/las-doce#video" },
      "sameAs": [
        "https://open.spotify.com/artist/XXXXXXXX",
        "https://www.youtube.com/@lasdoce",
        "https://www.instagram.com/lasdoce"
      ]
    },
    {
      "@type": "ImageObject",
      "@id": "https://showupevents.es/artistas/las-doce#retrato",
      "url": "https://showupevents.es/artistas/las-doce/retrato-1200.avif",
      "contentUrl": "https://showupevents.es/artistas/las-doce/retrato-1200.avif",
      "width": 1200,
      "height": 1600,
      "caption": "Las Doce en las fiestas de San Juan de Alcalá de Henares, con el público de pie",
      "creditText": "Show Up Events",
      "license": "https://showupevents.es/aviso-legal"
    },
    {
      "@type": "VideoObject",
      "@id": "https://showupevents.es/artistas/las-doce#video",
      "name": "Las Doce en directo — Fiestas de San Juan, Alcalá de Henares",
      "description": "Actuación completa de Las Doce en las fiestas de San Juan de Alcalá de Henares: escenario de plaza, público de todas las edades y el cierre acústico con percusión y voces.",
      "thumbnailUrl": [
        "https://showupevents.es/artistas/las-doce/video-poster-1280x720.jpg",
        "https://showupevents.es/artistas/las-doce/video-poster-640x480.jpg"
      ],
      "uploadDate": "2025-07-14T20:00:00+02:00",
      "duration": "PT3M42S",
      "embedUrl": "https://www.youtube-nocookie.com/embed/XXXXXXXXXXX",
      "contentUrl": "https://www.youtube.com/watch?v=XXXXXXXXXXX",
      "inLanguage": "es-ES",
      "isFamilyFriendly": true,
      "publisher": { "@id": "https://showupevents.es/#organization" },
      "about": { "@id": "https://showupevents.es/artistas/las-doce#artista" },
      "regionsAllowed": "ES"
    },
    {
      "@type": "WebPage",
      "@id": "https://showupevents.es/artistas/las-doce#webpage",
      "url": "https://showupevents.es/artistas/las-doce",
      "name": "Las Doce — Banda de versiones | Show Up",
      "isPartOf": { "@id": "https://showupevents.es/#website" },
      "mainEntity": { "@id": "https://showupevents.es/artistas/las-doce#artista" },
      "primaryImageOfPage": { "@id": "https://showupevents.es/artistas/las-doce#retrato" },
      "breadcrumb": { "@id": "https://showupevents.es/artistas/las-doce#breadcrumb" },
      "inLanguage": "es-ES"
    }
  ]
}
```

**Requisitos que hay que cumplir o el `VideoObject` no sirve de nada:**

- `thumbnailUrl` de al menos 1.200 px de ancho, accesible sin autenticación, **no bloqueada en `robots.txt`**.
- `uploadDate` en ISO 8601 **con zona horaria**. Sin zona, Google lo descarta a veces.
- `duration` en formato ISO 8601 (`PT3M42S`), no en segundos.
- El vídeo tiene que ser **visible en la página sin interacción compleja**: la fachada con un botón de play cumple; un vídeo detrás de una pestaña oculta, no.
- `max-video-preview: -1` en la etiqueta `robots` de la página (ya está en `meta()`).

### 5.8 Ficha de artista — persona (mago, monologuista, solista)

```json
{
  "@type": "Person",
  "@id": "https://showupevents.es/artistas/ramon-prats#artista",
  "name": "Ramón Prats",
  "url": "https://showupevents.es/artistas/ramon-prats",
  "jobTitle": "Mago de cerca",
  "description": "Magia de cerca mesa por mesa para cócteles y cenas de empresa. Trabaja sin escenario, sin sonido y con la sala en marcha.",
  "image": { "@id": "https://showupevents.es/artistas/ramon-prats#retrato" },
  "knowsLanguage": ["es-ES", "ca-ES"],
  "worksFor": { "@id": "https://showupevents.es/#organization" },
  "sameAs": ["https://www.instagram.com/ramonprats"],
  "subjectOf": { "@id": "https://showupevents.es/artistas/ramon-prats#video" }
}
```

> `worksFor` sólo si la relación es real y continuada. Si el artista es un colaborador puntual, se quita: marcar una relación laboral que no existe es una afirmación falsa sobre una persona identificable. `performerIn` se reserva para cuando haya una `Event` pública real que enlazar (§5.12).

### 5.9 Catálogo — `CollectionPage` + `ItemList`

```json
{
  "@type": "CollectionPage",
  "@id": "https://showupevents.es/artistas#webpage",
  "url": "https://showupevents.es/artistas",
  "name": "Nuestros artistas",
  "description": "Los artistas que ya conocemos, con vídeo de directo y para qué tipo de noche sirve cada uno.",
  "isPartOf": { "@id": "https://showupevents.es/#website" },
  "inLanguage": "es-ES",
  "mainEntity": {
    "@type": "ItemList",
    "itemListOrder": "https://schema.org/ItemListUnordered",
    "numberOfItems": 6,
    "itemListElement": [
      { "@type": "ListItem", "position": 1,
        "url": "https://showupevents.es/artistas/las-doce",
        "name": "Las Doce" },
      { "@type": "ListItem", "position": 2,
        "url": "https://showupevents.es/artistas/ramon-prats",
        "name": "Ramón Prats" }
    ]
  }
}
```

`ItemList` con `url` en cada `ListItem` (no el objeto completo embebido) es la forma correcta para una página de listado. Cuesta 400 bytes y le dice a Google que esas seis fichas son un conjunto.

### 5.10 `FAQPage` — dónde sí y dónde no

Se pone en `/como-funciona`, en los tres pilares, en `/precios` y en las tres páginas de precio.

```json
{
  "@type": "FAQPage",
  "@id": "https://showupevents.es/musica-para-bodas/cuanto-cuesta#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta un grupo de música para una boda?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Depende del formato y de cuántas horas toquen. Un solista o un dúo para la ceremonia y el cóctel se mueve entre 600 y 1.200 €. Un trío o cuarteto para la boda entera, entre 1.800 y 3.500 €. Una banda completa con sonido y luces propios, de 5.000 € en adelante. Dentro va el caché, el desplazamiento, las dietas y el contrato."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué entra en el caché de un grupo de música de boda?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El caché de los músicos, los desplazamientos, las dietas y el contrato. El equipo de sonido y las luces entran o no según el formato, y eso se pone por escrito antes de firmar. Si la finca ya tiene equipo, se habla con ellos y se descuenta."
      }
    },
    {
      "@type": "Question",
      "name": "¿Con cuánta antelación hay que contratar la música de una boda?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lo cómodo son tres o cuatro meses. Para bodas entre mayo y septiembre, seis: esas fechas se llenan primero. Con tres semanas también se ha hecho y sale bien más veces de las que parece."
      }
    }
  ]
}
```

**Reglas:**

- La pregunta y la respuesta del JSON-LD tienen que estar **literalmente visibles en la página**. Marcar contenido oculto es motivo de acción manual.
- **Aviso honesto:** desde 2023 Google casi no pinta el rich result de FAQ salvo en dominios gubernamentales y sanitarios. **No se pone por CTR.** Se pone porque es lo que consumen los resúmenes generativos (AI Overviews, ChatGPT, Perplexity) para citar respuestas, y porque en una vertical donde nadie publica precios honestos, ser la fuente citable del precio es el activo. Coste: 1 KB. Beneficio: a medio plazo, y en un canal que no es el SERP azul.
- **`HowTo` no se implementa.** Google retiró el rich result de HowTo en 2023. No aporta nada.
- **Máximo 6 preguntas por página.** Un `FAQPage` de 25 preguntas es un intento de acaparar y se ignora.

### 5.11 `LocalBusiness` — condicionado

**Sólo en `/contacto`, y sólo si hay una dirección física que un cliente pueda visitar.** Si la operación es remota, no se marca: un `LocalBusiness` sin local es una afirmación falsa y contamina el Google Business Profile.

```json
{
  "@type": ["LocalBusiness", "EntertainmentBusiness"],
  "@id": "https://showupevents.es/#localbusiness",
  "name": "Show Up Events",
  "parentOrganization": { "@id": "https://showupevents.es/#organization" },
  "url": "https://showupevents.es/contacto",
  "image": "https://showupevents.es/oficina.jpg",
  "telephone": "+34600000000",
  "email": "hola@showupevents.es",
  "priceRange": "€€-€€€",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Carrer Exemple, 00",
    "addressLocality": "Barcelona",
    "addressRegion": "Barcelona",
    "postalCode": "08000",
    "addressCountry": "ES"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 41.3874, "longitude": 2.1686 },
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    "opens": "09:00", "closes": "19:00"
  }],
  "areaServed": { "@type": "Country", "name": "España" },
  "sameAs": ["https://www.instagram.com/showupevents"]
}
```

El NAP de este bloque tiene que ser **byte a byte idéntico** al del Google Business Profile, al del footer y al de cualquier directorio. Se centraliza en una constante y se importa en los tres sitios.

### 5.12 `Event` — la decisión

| Caso | ¿Se marca? |
|---|---|
| Boda, cena de empresa o evento privado de un cliente | **Nunca.** Son privados, no se puede comprar entrada, y marcar `Event` para algo no público es exactamente el uso que Google penaliza. Además hay un problema de protección de datos. |
| Fiesta patronal en la que actúa un artista de Show Up, con programa público del ayuntamiento | **Sí**, en la ficha del artista, con `performerIn`. Es público, verificable y con fecha. |
| Evento propio de Show Up abierto al público (showcase, jornada para wedding planners) | **Sí**, con página propia. Es el único caso que justificaría una URL de tipo `/eventos/[slug]`. |

```json
{
  "@type": "Event",
  "@id": "https://showupevents.es/artistas/las-doce#evento-sanjuan-2026",
  "name": "Las Doce — Fiestas de San Juan de Alcalá de Henares",
  "startDate": "2026-06-23T22:30:00+02:00",
  "endDate": "2026-06-24T01:30:00+02:00",
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "location": {
    "@type": "Place",
    "name": "Plaza de Cervantes",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Alcalá de Henares",
      "addressRegion": "Madrid",
      "addressCountry": "ES"
    }
  },
  "performer": { "@id": "https://showupevents.es/artistas/las-doce#artista" },
  "organizer": { "@type": "Organization", "name": "Ayuntamiento de Alcalá de Henares" },
  "isAccessibleForFree": true,
  "image": ["https://showupevents.es/artistas/las-doce/sanjuan-1200.jpg"]
}
```

### 5.13 Prohibiciones de marcado

| Marcado | Decisión | Motivo |
|---|---|---|
| `AggregateRating`, `Review` | **No existe hasta que haya reseñas reales, verificables y visibles en la página.** | Es motivo de acción manual, y el copy deck ya prohíbe testimonios inventados. Cuando las haya: reseñas propias visibles + `Review` con `author` real. Nunca `AggregateRating` autodeclarado sin reseñas mostradas. |
| `Offer`, `PriceSpecification`, `AggregateOffer` | **No.** | Los cachés varían por fecha, sitio y formato. Un precio marcado que no se sostiene genera reclamaciones. Las horquillas van en texto. |
| `SearchAction` | **No.** | Rich result retirado en 2023 + no hay URL de resultados. |
| `HowTo` | **No.** | Rich result retirado en 2023. |
| `Product` sobre un artista | **Nunca.** | Una persona no es un producto. Además arrastra a exigir `Offer` y `AggregateRating`. |
| `Speakable` | **No.** | Sólo se soporta para noticias y sólo en inglés. |
| `JobPosting` para "buscamos artistas" | **No** en el año 1. | Si algún día hay una página de alta de artistas, se valora. Requiere fechas de caducidad y mantenimiento. |

### 5.14 Validación en CI

```ts
// e2e/schema.spec.ts
import { test, expect } from '@playwright/test';

const OBLIGATORIOS: Record<string, string[]> = {
  '/':                                  ['Organization', 'WebSite', 'WebPage'],
  '/musica-para-bodas':                 ['Service', 'BreadcrumbList', 'FAQPage'],
  '/musica-para-bodas/barcelona':       ['Service', 'BreadcrumbList'],
  '/musica-para-bodas/cuanto-cuesta':   ['FAQPage', 'BreadcrumbList'],
  '/artistas':                          ['CollectionPage', 'ItemList', 'BreadcrumbList'],
  '/artistas/las-doce':                 ['MusicGroup', 'VideoObject', 'ImageObject', 'BreadcrumbList'],
  '/contacto':                          ['BreadcrumbList'],
};

for (const [ruta, tipos] of Object.entries(OBLIGATORIOS)) {
  test(`JSON-LD válido en ${ruta}`, async ({ page }) => {
    await page.goto(ruta);
    const bloques = await page.locator('script[type="application/ld+json"]').allTextContents();
    expect(bloques.length, 'un solo bloque JSON-LD por página').toBe(1);
    const grafo = JSON.parse(bloques[0]);
    const presentes = (grafo['@graph'] ?? [grafo]).flatMap((n: any) =>
      Array.isArray(n['@type']) ? n['@type'] : [n['@type']]);
    for (const t of tipos) expect(presentes).toContain(t);
    // Prohibidos, siempre:
    for (const p of ['AggregateRating', 'Offer', 'Product', 'SearchAction', 'HowTo'])
      expect(presentes).not.toContain(p);
  });
}
```

---

## 6. Sitemaps, robots.txt y hreflang

### 6.1 Sitemaps

Índice de sitemaps con hijos por tipo. No porque haga falta por volumen (son ~40 URLs), sino porque **en GSC se puede ver la cobertura por sitemap**: si el sitemap de ciudades tiene 3 enviadas y 1 indexada, eso es un diagnóstico inmediato que un sitemap único esconde.

```
/sitemap.xml                → índice
  /sitemap/paginas.xml      → home, marca, pilares, satélites, Cluster D, /precios
  /sitemap/ciudades.xml     → landings geo publicadas
  /sitemap/artistas.xml     → fichas, con extensión de vídeo e imagen
  /sitemap/guias.xml        → guías
```

```ts
// app/sitemap.ts
import type { MetadataRoute } from 'next';
import { CIUDADES } from '@/content/ciudades';
import { getArtistasPublicados, getGuias, getPaginasEstaticas } from '@/lib/contenido';

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const S = 'https://showupevents.es';

  const paginas = getPaginasEstaticas().map((p) => ({
    url: `${S}${p.path}`,
    lastModified: p.actualizado,          // ← fecha REAL de modificación del MDX (git log),
                                          //    nunca new Date() del build.
    changeFrequency: undefined,           // Google los ignora desde hace años
    priority: undefined,                  // idem. No se emiten: ruido.
  }));

  const ciudades = CIUDADES.flatMap((c) =>
    c.publicada
      ? c.ocasiones.map((o) => ({ url: `${S}/${o}/${c.slug}`, lastModified: c.actualizado }))
      : []);

  const artistas = (await getArtistasPublicados()).map((a) => ({
    url: `${S}/artistas/${a.slug}`,
    lastModified: a.actualizado,
    images: [`${S}/artistas/${a.slug}/retrato-1200.avif`],
    videos: a.video ? [{
      title: `${a.nombre} en directo`,
      thumbnail_loc: a.video.poster,
      description: a.video.descripcion,
      content_loc: a.video.contentUrl,
      player_loc: a.video.embedUrl,
      duration: a.video.duracionSegundos,
      publication_date: a.video.publicado,
      family_friendly: 'yes' as const,
    }] : undefined,
  }));

  const guias = (await getGuias()).map((g) => ({
    url: `${S}/guias/${g.slug}`, lastModified: g.actualizado,
  }));

  return [...paginas, ...ciudades, ...artistas, ...guias];
}
```

**Reglas del sitemap:**

- **Sólo URLs `200` e indexables.** Ni `/brief`, ni `/brief/gracias`, ni legales, ni facetas, ni ciudades sin publicar. Un sitemap con URLs `noindex` es una contradicción y erosiona la confianza que Google pone en el fichero.
- **`lastmod` real o no se pone.** El error más común es emitir `new Date()` en cada build: entonces las 40 URLs cambian cada despliegue, Google aprende que el `lastmod` de este dominio es basura y deja de usarlo. La fecha sale de `git log -1 --format=%aI <fichero>` para el MDX y del `_updatedAt` del CMS para los artistas.
- **Sin `priority` ni `changefreq`.** Google confirmó que los ignora. Emitirlos es ruido.
- **Extensión de vídeo en el sitemap de artistas.** Es la señal más directa para que se indexe el vídeo, y el vídeo en el SERP es lo que multiplica el CTR en una vertical donde nadie lo marca.
- Se envía **el índice** en Search Console, no los hijos por separado.

### 6.2 `robots.txt`

```ts
// app/robots.ts
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  // Producción: abierto. Cualquier otro entorno: cerrado a cal y canto.
  if (process.env.VERCEL_ENV !== 'production') {
    return { rules: [{ userAgent: '*', disallow: '/' }] };
  }

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/brief/gracias',
          // '/artistas?',   ← FASE 2. Ver §2.4: no activar hasta el mes 3,
          //                    y sólo si GSC confirma 0 facetas indexadas.
        ],
      },
      // Sin bloqueos a GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot ni CCBot.
      // Decisión explícita: para una marca con cero autoridad, ser la fuente
      // citada sobre precios reales en asistentes generativos es tráfico y
      // reputación, no una fuga. El contenido está hecho para ser citado.
    ],
    sitemap: 'https://showupevents.es/sitemap.xml',
    host: 'https://showupevents.es',
  };
}
```

**Prohibiciones:**

- **No bloquear `/_next/`.** Ahí viven el CSS y el JS. Bloquearlos impide a Google renderizar la página y es de los pocos errores que hunden un sitio entero en una semana.
- **No bloquear las carpetas de imágenes.** Las miniaturas de vídeo bloqueadas invalidan el `VideoObject`.
- **No usar `Crawl-delay`.** Google lo ignora y otros rastreadores lo interpretan mal.
- **No poner `Disallow` para "ahorrar crawl budget"** en un sitio de 40 URLs. El crawl budget no es un problema aquí y no lo será hasta las ~10.000 URLs.

### 6.3 `hreflang`: no. Y por qué

**Decisión: sitio único en `es-ES`. `<html lang="es">`. Sin `hreflang`, sin `x-default`, sin `/ca/`, sin `/eu/`, sin `/gl/`, sin `/en/`.**

Cinco argumentos, en orden de peso:

**1. La demanda transaccional en lenguas cooficiales es marginal, incluso entre hablantes nativos.** La búsqueda comercial en España se hace mayoritariamente en castellano incluso por personas cuya lengua habitual es otra: `grupos de música para bodas` frente a `grups de música per a bodes` es una diferencia de uno a dos órdenes de magnitud. Y esto no es una opinión: es lo primero que hay que verificar en Keyword Planner antes de gastar un euro. Si la verificación dijera lo contrario para alguna consulta concreta, esa consulta se ataca **con una página en castellano que mencione el término catalán en el cuerpo**, no con una versión del sitio.

**2. Multiplicar la superficie de rastreo de un dominio sin autoridad es el error más caro que se puede cometer.** Cuatro idiomas convierten 40 URLs en 160. Google tiene que descubrir, rastrear, evaluar y elegir entre cuatro variantes de cada página, en un dominio que todavía no le da ninguna razón para dedicarle recursos. El resultado típico: indexación parcial y errática en las cuatro, en vez de indexación completa en una.

**3. El coste de mantenimiento es el que mata el proyecto, no el de implantación.** Cada actualización de precio, cada ciudad nueva, cada corrección de la promesa de las 24 h se multiplica por cuatro. En el mes 8, con recursos limitados, las versiones traducidas se quedan desactualizadas — y una página traducida y desactualizada es exactamente el perfil de contenido que el sistema de contenido útil degrada.

**4. Traducciones flojas hacen daño activo.** Una traducción automática de un copy cuya ventaja competitiva es el tono ("*preferimos decírtelo antes de que lo pagues*") destruye lo único que diferencia a esta marca. Y el copy deck ya establece que el tono es el activo.

**5. `hreflang` mal implementado es peor que no tenerlo.** Sin reciprocidad, sin `x-default`, con códigos inventados (`ca-ES` está bien; `cat` no existe) o con anotaciones que apuntan a URLs redirigidas, Google ignora el conjunto y a veces canonicaliza mal. Es de las cosas que más `Página duplicada, Google eligió una canónica distinta` generan.

**Lo que sí se hace en su lugar, que resuelve el 90 % del problema real:**

- **Topónimos en su forma oficial dentro del texto castellano:** *Empordà*, *Girona*, *A Coruña*, *Bizkaia*, *Sant Cugat del Vallès*. Eso no es `hreflang`: es coincidencia de entidad, y es lo que gana la consulta local. `Gerona` en el texto es una señal de "no somos de aquí" tanto para Google como para el cliente.
- **Nombres de sitios reales tal cual se llaman:** *Masia Vallformosa*, *Mas Solers*. Son las entidades que el usuario teclea.
- **`knowsLanguage: ["es-ES","ca-ES","en"]` en `Organization`** y una frase en `/contacto`: *"También te atendemos en catalán y en inglés."* Cero coste, resuelve la objeción comercial.
- **`<html lang="es">`** en el layout, y `lang="ca"` puntual en una cita textual en catalán si la hubiera.

**Cuándo se revisaría esta decisión.** Con dos disparadores concretos y medibles, no antes:

| Disparador | Acción |
|---|---|
| GSC muestra ≥ 200 impresiones/mes en consultas en catalán con intención transaccional | Se crea **`/ca/`** (subdirectorio, nunca subdominio ni ccTLD), traducción **humana**, sólo el cluster de bodas, con `hreflang` recíproco `es-ES` / `ca-ES` / `x-default` → `es-ES`. |
| El segmento *destination wedding* (Empordà, Costa Brava, Mallorca) supera el 15 % de los briefs y llega con nombre y correo extranjeros | Se valida con una campaña de Ads en inglés de 400 € antes de escribir una línea. Si convierte, `/en/` con el mismo criterio. |

**Nunca, en ningún escenario:** traducción por JavaScript en el cliente (Google indexa el HTML servido, no el traducido), subdominios por idioma, ccTLDs por idioma, o `hreflang` generado automáticamente sin comprobar reciprocidad.

---

## 7. El brief multi-paso sin destruir la indexación ni la analítica

El brief es el motor de conversión de todo el negocio y, a la vez, la pieza que más fácilmente rompe dos cosas: el índice (si genera URLs) y la medición (si el evento se dispara en el sitio equivocado).

### 7.1 Una sola URL. El paso va en el hash

```
✅  /brief            → único documento indexable-declarado (noindex), un solo canonical
    /brief#p1 … #p7   → estado, no documento. El hash nunca llega al servidor
                        ni genera una URL rastreable.
❌  /brief/paso-2     → 7 URLs finas, casi idénticas, con el mismo title. Y si se
                        dejan indexables, siete competidores internos por nada.
❌  /brief?paso=2&q=… → parámetros con texto libre del usuario: URLs infinitas,
                        datos personales en la URL, en los logs y en GA4.
```

```tsx
'use client';
// app/brief/Brief.tsx
export function Brief({ inicial }: { inicial: Partial<Datos> }) {
  const [paso, setPaso] = useState(1);
  const [datos, setDatos] = useState<Partial<Datos>>(inicial);

  // El hash da botón "atrás" nativo sin crear URLs indexables.
  useEffect(() => {
    const alVolver = () => {
      const n = Number(location.hash.replace('#p', '')) || 1;
      setPaso(n);
      evento('brief_step_view', { paso: n, nombre: NOMBRES[n] });
    };
    window.addEventListener('popstate', alVolver);
    return () => window.removeEventListener('popstate', alVolver);
  }, []);

  function avanzar(n: number) {
    history.pushState({ paso: n }, '', `#p${n}`);   // pushState: el atrás funciona
    setPaso(n);
    evento('brief_step_complete', { paso: paso, nombre: NOMBRES[paso] });
    evento('brief_step_view', { paso: n, nombre: NOMBRES[n] });
  }
  …
}
```

### 7.2 El texto del hero llega al paso 5 sin pasar por la URL

Esto es lo que exige el copy deck ("a nadie se le pide que escriba dos veces") y es donde muchos meten el texto en un query param. No:

```tsx
'use client';
// components/CampoHero.tsx
export function CampoHero() {
  const router = useRouter();

  useEffect(() => { router.prefetch('/brief'); }, [router]);  // 0 KB ahora, instantáneo después

  function enviar(texto: string) {
    // sessionStorage, NO query string: sin URLs infinitas, sin datos personales
    // en logs/analytics/Referer, y sin ensuciar el informe de páginas.
    sessionStorage.setItem('su_hero', JSON.stringify({ texto, ts: Date.now() }));
    evento('hero_submit', { longitud: texto.length, tiene_texto: texto.length > 0 });
    router.push('/brief');
  }
  …
}
```

`prefetch` en el `useEffect` del campo del hero: el usuario que enfoca el campo va a ir al brief con altísima probabilidad, y el `chunk` del formulario (≈ 40 KB) se descarga mientras escribe. Coste en el LCP de la home: cero, porque ocurre después de la hidratación.

### 7.3 Persistencia y recuperación

El copy deck promete *"Lo dejaste por la pregunta 4. Sigue donde estabas, que no se ha borrado nada."*. Eso obliga a persistir:

```ts
const CLAVE = 'su_brief_v1';           // versión en la clave: al cambiar el esquema,
                                        // los borradores viejos se ignoran solos
const TTL = 1000 * 60 * 60 * 24 * 30;   // 30 días

export function guardar(datos: Partial<Datos>, paso: number) {
  localStorage.setItem(CLAVE, JSON.stringify({ datos, paso, ts: Date.now() }));
}
export function recuperar() {
  const raw = localStorage.getItem(CLAVE);
  if (!raw) return null;
  const b = JSON.parse(raw);
  if (Date.now() - b.ts > TTL) { localStorage.removeItem(CLAVE); return null; }
  return b;
}
```

Guardado con *debounce* de 800 ms sobre `input`, e inmediato en cada cambio de paso. `localStorage`, no cookie: no viaja en cada petición y no engorda las cabeceras.

### 7.4 Rendimiento del brief

| Medida | Detalle |
|---|---|
| **Cáscara estática** | `/brief` es SSG. Lo dinámico es el estado del cliente. TTFB de CDN. |
| **Un solo paso en el DOM** | No se renderizan los 7 pasos ocultos: `INP` se degrada con árboles grandes. Sólo el actual + precarga del siguiente. |
| **Sin librería de formularios pesada** | `react-hook-form` (≈ 9 KB) o estado propio. **No** Formik + Yup + un date-picker de 90 KB. |
| **Selector de fecha nativo** | `<input type="date">` con `lang="es"`. En móvil abre el selector del sistema, que es mejor que cualquier librería y pesa 0 KB. Sólo se sustituye si negocio exige mostrar disponibilidad. |
| **Nada de iframes de terceros** | Ni Typeform, ni Tally, ni HubSpot Forms embebido. Un iframe de formulario son 200–400 KB, rompe el INP, no se puede estilar con la dirección de arte, y —lo grave— **se lleva el evento de conversión a otro dominio**, con lo que la atribución a la URL orgánica de entrada se pierde. El brief se construye. |
| **Código dividido por paso** | El paso 7 (validación de correo/teléfono + Turnstile) se carga con `dynamic()` cuando el usuario llega al paso 5. |
| **Presupuesto** | JS propio ≤ 58 KB, total ≤ 150 KB, INP ≤ 150 ms. |

### 7.5 Antispam sin destrozar el rendimiento

```
Capa 1 · Honeypot            campo oculto "empresa_web"; si viene relleno → 200 falso, se descarta
Capa 2 · Tiempo mínimo       menos de 4 s entre montaje y envío → sospechoso
Capa 3 · Límite por IP       5 envíos / hora en el Route Handler
Capa 4 · Turnstile (~30 KB)  SÓLO si las capas 1-3 marcan sospecha, y SÓLO cargado en el paso 7
```

**reCAPTCHA v3 queda prohibido en la carga inicial:** 250–450 KB, penalización directa de INP en todas las páginas donde se instala, y un problema de consentimiento en la UE. Turnstile en el paso 7 hace el mismo trabajo con un décimo del coste y sólo para quien llega al final.

### 7.6 Medición del brief: el evento de verdad se dispara en el servidor

El error clásico: contar la conversión cuando el navegador aterriza en `/brief/gracias`. Eso pierde a todo el que tenga bloqueador (15–25 % en este perfil de tráfico), a quien cierre antes de que cargue la página de gracias, y cuenta de más cuando alguien recarga.

```ts
// app/api/brief/route.ts
export async function POST(req: Request) {
  const cuerpo = await req.json();
  const primero = JSON.parse(req.cookies?.get('su_first')?.value ?? '{}'); // §3.2 middleware

  const lead = await crm.crear({
    ...cuerpo,
    // ── ATRIBUCIÓN: esto es lo que hace medible todo el plan SEO ──
    lp_entrada: primero.lp,          // '/musica-para-bodas/cuanto-cuesta'
    referrer: primero.ref,
    utm_source: primero.utm,
    gclid: primero.gclid,
    canal: clasificar(primero),      // 'organico' | 'ads' | 'directo' | 'social' | 'referido'
    ts_entrada: primero.ts,
    ts_brief: Date.now(),
  });

  // Evento de servidor: fuente de verdad. Sobrevive a bloqueadores y a cierres.
  await ga4.medicion({
    name: 'brief_submit',
    params: {
      lead_id: lead.id,
      lp_entrada: primero.lp,
      canal: clasificar(primero),
      tipo_evento: cuerpo.celebra,
      presupuesto: cuerpo.presupuesto,
      ciudad: cuerpo.poblacion,
      // event_id para deduplicar con el evento de cliente
      event_id: cuerpo.eventId,
    },
  });

  return NextResponse.json({ ok: true, id: lead.id });
}
```

El cliente dispara el mismo evento con el mismo `event_id` para tener el dato en tiempo real; el servidor manda. Y **`lp_entrada` es la columna que, en el mes 9, contesta la única pregunta que importa: qué URL de las 25 ha generado clientes.**

---

## 8. Dominio, lanzamiento y errores fatales

### 8.1 El dominio

**`showupevents.es`.**

| Criterio | Razonamiento |
|---|---|
| **ccTLD `.es`** | El servicio se presta exclusivamente en España. `.es` es una señal de geolocalización que Google aplica automáticamente. Y es una señal que ya **no se puede obtener de otra forma**: Search Console retiró la herramienta de segmentación internacional por país en 2022. Con un `.com` genérico, hoy no hay ningún ajuste que le diga a Google "esto es para España". |
| **Confianza del público** | El público incluye a la madre de la novia de 58 años y al concejal de festejos de un pueblo de 4.000 habitantes. Para ambos, `.es` es más creíble que `.events` o `.rocks`. |
| **Coincidencia con la marca** | `showupevents` es la marca verbal completa. `showup.es` sería más corto pero probablemente esté ocupado y pierde la palabra que ancla la categoría. |

**Se registran a la defensiva y se redirigen con un solo 301 al canónico:** `showupevents.com`, `showupevents.eu`, `show-up-events.es`, `showupevent.es` y la variante `.es` sin la `s` final. Ninguno sirve contenido. Ninguno encadena redirecciones.

**Lo que no se hace:**

| Antipatrón | Por qué |
|---|---|
| `contratar-artistas-eventos.es` (dominio de coincidencia exacta) | El EMD dejó de dar ventaja en 2012 y hoy es una señal de baja calidad. Además hace imposible construir marca, y la marca es lo único que va a hacer que alguien escriba "show up events" en Google dentro de dos años. |
| Guiones en el dominio | Se pierden al dictarlo por teléfono, que es exactamente como se comparte este servicio. |
| Un `.com` "por si internacionalizamos" | Se compra y se aparca. No se sirve desde él. Si algún día hay expansión, se migra con criterio, no se lanza defensivamente. |
| Subdominio para el blog (`guias.showupevents.es`) | Google trata los subdominios como sitios en buena medida independientes. Con cero autoridad, partirla en dos es suicida. `/guias` en el mismo host. |

### 8.2 No hay migración, pero el lanzamiento es una

No hay sitio anterior que migrar. Aun así, hay que comprobar tres cosas antes de publicar:

1. **¿Existe un "próximamente" o una landing de Wix/Carrd en el dominio?** Si sí: inventariar sus URLs, redirigir con 301 las que tengan cualquier enlace entrante, y verificar que ninguna se queda huérfana devolviendo 200 con contenido viejo.
2. **¿El dominio ha tenido dueño antes?** Comprobar en Wayback Machine y en un backlink checker. Un `.es` reciclado que fue una granja de enlaces arrastra un historial que hay que conocer antes, no después. Si aparece un pasado sucio: se cambia de dominio. Es más barato hoy que en el mes 9.
3. **¿Hay perfiles sociales, GBP o directorios ya creados con otro NAP?** Se unifican antes del lanzamiento, no después.

### 8.3 Los doce errores fatales del lanzamiento

Ordenados por frecuencia real, no por gravedad teórica.

| # | Error | Prevención concreta |
|---|---|---|
| **1** | **Salir a producción con el `noindex` de staging.** Es, sin discusión, el error número uno. Se detecta a las tres semanas, cuando alguien pregunta por qué no aparece nada en GSC. | El candado del §3.2 (`process.env.VERCEL_ENV !== 'production'`) hace que el `noindex` sea una **consecuencia del entorno**, no una etiqueta que alguien tiene que acordarse de quitar. Más la prueba de humo `e2e/indexabilidad.spec.ts` (§4.5) ejecutada **contra producción** después de cada despliegue. |
| **2** | **`Disallow: /` olvidado en `robots.txt`.** | `app/robots.ts` deriva del entorno. Nunca hay un fichero estático que editar. Más el test de §4.5. |
| **3** | **Despliegues de vista previa indexados.** Vercel genera una URL por commit. Si son públicas y sin `noindex`, Google indexa 40 copias del sitio en 40 dominios. Duplicado masivo el día uno. | `X-Robots-Tag: noindex, nofollow` en middleware para todo lo que no sea `production` **más** *Deployment Protection* activada en Vercel (Vercel Authentication en Preview). Las dos cosas, no una. |
| **4** | **`www` y sin `www` respondiendo 200 los dos.** El sitio entero duplicado. | Redirección 308 en `next.config.mjs` (§3.2) y verificación con `curl -I` de las cuatro combinaciones (`http`/`https` × `www`/sin) **antes** de enviar el sitemap. |
| **5** | **Publicar las 25 URLs el día 1 con contenido de relleno.** Es la forma más rápida de que un dominio nuevo quede clasificado como fino: Google conoce el dominio por su peor contenido. | Se publica en el orden del §5 de `04-arquitectura-seo.md`: **2–3 URLs al mes, terminadas**. Al lanzar: home, `/artistas` + fichas, `/como-funciona`, `/nosotros`, `/contacto`, `/precios` y **un solo pilar**. El resto llega escrito. |
| **6** | **Cambiar slugs en el mes 4.** El SEO en dominio nuevo es plano hasta el mes 5–7. Rehacer la estructura justo antes del punto de inflexión reinicia el reloj. | La estructura se congela con este documento. Cualquier cambio de slug pasa por PR con justificación escrita y plan de 301. |
| **7** | **`lastmod` con la fecha del build.** Las 40 URLs "cambian" en cada despliegue; Google deja de fiarse del fichero. | `git log -1 --format=%aI` / `_updatedAt` del CMS (§6.1). |
| **8** | **Entorno de desarrollo en subdominio indexable** (`dev.showupevents.es`). | El desarrollo vive en `*.vercel.app` protegido. Si hiciera falta un subdominio, va con autenticación básica **y** `noindex`. |
| **9** | **Cadena de redirecciones** `http://www` → `https://www` → `https://`. Tres saltos en cada rastreo. | Un solo salto siempre: la redirección de host y la de protocolo se resuelven en la misma regla del proveedor. Se verifica con `curl -ILs` contando los `Location`. |
| **10** | **No dar de alta Search Console y GBP antes del lanzamiento.** GSC no tiene datos retroactivos: los primeros días de vida del dominio se pierden para siempre. GBP tarda semanas en madurar. | Ambos, verificados, **una semana antes** de abrir el sitio. Propiedad de **dominio** en GSC (cubre todos los subdominios y protocolos), no propiedad de prefijo de URL. |
| **11** | **Cabeceras de caché del HTML mal puestas.** Un `Cache-Control: public, max-age=31536000` en un documento HTML deja a los usuarios con una versión vieja durante un año. | HTML: `public, max-age=0, must-revalidate` + `s-maxage` gestionado por el CDN con invalidación en el despliegue. Estáticos con hash: `immutable`. |
| **12** | **Enviar el sitemap antes de que el contenido esté publicado.** URLs enviadas que devuelven 404 o que están vacías. | El sitemap se genera desde el contenido publicado (`publicada: true`). Se envía **después** del despliegue, comprobando antes que todas las URLs devuelven 200. |

### 8.4 Comprobación de humo post-despliegue

```bash
#!/usr/bin/env bash
# scripts/humo.sh — se ejecuta después de CADA despliegue a producción
set -euo pipefail
D=https://showupevents.es

echo "→ Canonicalización de host y protocolo (debe ser UN salto)"
for u in http://showupevents.es https://www.showupevents.es http://www.showupevents.es; do
  n=$(curl -sILo /dev/null -w '%{num_redirects} %{url_effective}\n' "$u")
  echo "   $u → $n"
done

echo "→ robots.txt"
curl -s "$D/robots.txt" | tee /dev/stderr | grep -qE '^Disallow:\s*/\s*$' \
  && { echo "FATAL: el sitio está bloqueado"; exit 1; }

echo "→ noindex en páginas indexables"
for p in / /musica-para-bodas /musica-para-bodas/cuanto-cuesta /artistas /precios; do
  h=$(curl -sI "$D$p" | grep -i 'x-robots-tag' || true)
  b=$(curl -s "$D$p" | grep -io '<meta[^>]*name="robots"[^>]*>' || true)
  echo "$h $b" | grep -qi noindex && { echo "FATAL: noindex en $p"; exit 1; }
  echo "   ok $p"
done

echo "→ Sitemap: todas las URLs deben devolver 200"
curl -s "$D/sitemap.xml" | grep -oP '(?<=<loc>)[^<]+' | while read -r u; do
  c=$(curl -sILo /dev/null -w '%{http_code}' "$u")
  [ "$c" = "200" ] || echo "   AVISO: $u → $c"
done

echo "→ 404 real, no soft-404"
curl -sILo /dev/null -w '   /musica-para-bodas/pueblo-inventado → %{http_code}\n' \
  "$D/musica-para-bodas/pueblo-inventado"

echo "→ HSTS y caché del HTML"
curl -sI "$D/" | grep -iE 'strict-transport-security|cache-control'
```

---

## 9. Medición: qué se instrumenta el día uno

**El KPI del año 1 es "briefs completados desde tráfico orgánico, atribuidos a la URL de aterrizaje".** Todo lo demás es diagnóstico.

### 9.1 Taxonomía de eventos

Nomenclatura: `sustantivo_verbo`, en minúsculas, sin acentos, estable para siempre. Renombrar un evento en el mes 8 parte la serie histórica.

| Evento | Cuándo | Parámetros | ¿Conversión? |
|---|---|---|---|
| `hero_field_focus` | Primer foco en el campo del hero | `pagina` | No |
| `hero_field_input` | Primera pulsación de tecla (una vez por sesión) | `pagina` | No |
| `hero_submit` | Clic en *Ver quién encaja* | `longitud_texto`, `tiene_texto`, `pagina` | No — pero es **la métrica de la home** |
| `brief_start` | Se pinta el paso 1 | `origen` (`hero`/`nav`/`ficha`/`cta_seccion`), `artista_precargado` | Sí (micro) |
| `brief_step_view` | Se pinta cada paso | `paso` (1-7), `nombre` | No |
| `brief_step_complete` | Se avanza desde un paso | `paso`, `nombre`, `ms_en_paso` | No |
| `brief_abandon` | `visibilitychange`→hidden sin envío | `ultimo_paso`, `ms_total` | No — **el informe más útil del sitio** |
| `brief_submit` | **Servidor**, al crear el lead | `lead_id`, `lp_entrada`, `canal`, `tipo_evento`, `presupuesto`, `ciudad`, `event_id` | **Sí. La conversión.** |
| `brief_resume` | Se recupera un borrador | `paso` | No |
| `artist_view` | Ficha vista ≥ 3 s | `artista`, `tipo` | No |
| `artist_video_play` | Clic en el play de la fachada | `artista` | Sí (micro) |
| `artist_video_progress` | Hitos 25/50/75/100 % | `artista`, `porcentaje` | No |
| `artist_ask` | Clic en *Pregunta por [nombre]* | `artista`, `posicion` (`hero`/`pie`) | Sí (micro) |
| `catalog_filter_apply` | Se activa un filtro | `filtro`, `valor`, `n_resultados` | No |
| `catalog_empty` | Estado vacío mostrado | `filtros_activos` | No — **señal de hueco de catálogo** |
| `price_range_view` | Tabla de horquillas ≥ 50 % visible ≥ 2 s | `pagina` | No |
| `faq_open` | Se despliega una pregunta | `pregunta`, `pagina` | No |
| `phone_click` | Clic en `tel:` | `pagina`, `posicion` | **Sí** |
| `whatsapp_click` | Clic en `wa.me` | `pagina` | **Sí** |
| `email_click` | Clic en `mailto:` | `pagina` | **Sí** |
| `puerta_grande_click` | Clic en *Pídelo* | `pagina` | Sí (micro) |
| `scroll_75` | 75 % de la página | `pagina` | No |
| `web_vitals` | Cada métrica de CWV, con atribución | `metrica`, `valor`, `rating`, `elemento`, `pagina` | No |

Las cuatro conversiones reales: `brief_submit`, `phone_click`, `whatsapp_click`, `email_click`. Las "micro" sirven para diagnosticar embudos, no para presumir.

### 9.2 Los cuatro informes que se miran, y ninguno más

**1. Embudo del brief por paso.** `brief_step_view` → `brief_step_complete` por paso. Le dice qué pregunta está matando la conversión. Si el paso 6 (presupuesto) pierde el 40 %, el problema está en cómo está redactada esa pantalla, no en el SEO.

**2. Briefs por URL de aterrizaje orgánica.** `brief_submit` desglosado por `lp_entrada` filtrando `canal = organico`. **Es el informe.** En el mes 9 dice qué páginas de las 25 hay que duplicar y cuáles apagar.

**3. GSC: consultas con impresiones y CTR bajo.** Mensual, 30 minutos. Cada consulta con >200 impresiones y CTR <2 % es un `<title>` mal escrito, y arreglarlo es la optimización más rentable que existe.

**4. Core Web Vitals de campo por plantilla.** No la media del sitio: p75 de LCP segmentado por tipo de página. Es la única forma de saber si el hero oscuro está costando dinero en el mundo real.

### 9.3 CWV de campo, con atribución

Lighthouse dice si el sitio es rápido en un laboratorio. Esto dice qué elemento concreto está lento en el móvil de una novia en Cáceres con cobertura regular:

```ts
// app/vitals.tsx
'use client';
import { useReportWebVitals } from 'next/web-vitals';
import { onLCP, onINP, onCLS } from 'web-vitals/attribution';

export function Vitals() {
  useEffect(() => {
    onLCP((m) => enviar('web_vitals', {
      metrica: 'LCP', valor: Math.round(m.value), rating: m.rating,
      elemento: m.attribution.element,                 // '#hero img' — el dato que importa
      ttfb: Math.round(m.attribution.timeToFirstByte),
      retraso_carga: Math.round(m.attribution.resourceLoadDelay),
      duracion_carga: Math.round(m.attribution.resourceLoadDuration),
      retraso_render: Math.round(m.attribution.elementRenderDelay),
    }), { reportAllChanges: false });

    onINP((m) => enviar('web_vitals', {
      metrica: 'INP', valor: Math.round(m.value), rating: m.rating,
      elemento: m.attribution.interactionTarget,
      tipo: m.attribution.interactionType,
    }));

    onCLS((m) => enviar('web_vitals', {
      metrica: 'CLS', valor: Number(m.value.toFixed(3)), rating: m.rating,
      elemento: m.attribution.largestShiftTarget,
    }));
  }, []);
  return null;
}
```

Con `attribution.element` se sabe, con datos reales, si el LCP es el `<h1>` (bien) o el `<img>` del hero (a optimizar), y con `elementRenderDelay` si el culpable es la descarga de la imagen o el bloqueo por fuentes. Sin eso, optimizar es adivinar.

### 9.4 Atribución de primer contacto

Ya está en el middleware (§3.2) y en el Route Handler (§7.6). Es la pieza que convierte todo este documento en algo evaluable. Tres precisiones:

- **Cookie propia (`su_first`), primera parte, 90 días.** No un parámetro de URL, no `sessionStorage`: el ciclo de decisión de una boda son semanas.
- **Primer contacto, no último.** El último contacto en este negocio es casi siempre "directo" o "marca": la gente lee la guía de precios en agosto y vuelve tecleando el nombre en octubre. Atribuir a la última visita haría invisible al SEO que sí funcionó.
- **Se guarda en el CRM, no sólo en GA4.** GA4 muestrea, caduca y no se puede cruzar con si el lead cerró. La columna `lp_entrada` en el CRM sí permite responder *"¿cuánto ha facturado `/musica-para-bodas/cuanto-cuesta`?"* — que es la pregunta final.

### 9.5 Criterios de vida o muerte por página

Sin esto, en el mes 12 no se sabrá qué apagar:

| Hito | Criterio | Si no se cumple |
|---|---|---|
| Mes 1 desde publicación | Indexada (GSC: *Indexada*) | Revisar enlace interno desde el pilar y desde `/guias`. Solicitar indexación una vez, no cinco. |
| Mes 3 | ≥ 50 impresiones/mes | El contenido no responde a la intención. Se reescribe contra los tres primeros resultados reales, no contra la keyword. |
| Mes 6 | ≥ 20 clics/mes | El `<title>` no gana el clic. Se reescribe el title y se mide 30 días. |
| Mes 9 | ≥ 1 brief atribuido | La intención no es comercial o la página no lleva bien al brief. Se revisa el CTA y su ubicación, no el texto. |
| Mes 12 | ≥ 2 briefs/mes | **Se congela.** No se le dedica más tiempo. El esfuerzo va a las páginas que sí convierten, y se documenta por qué. |

Y una regla de gobierno: **no se mide el ranking.** Se mira GSC una vez al mes durante 30 minutos y el panel de briefs por URL una vez a la semana. Cualquier herramienta que informe de posiciones diarias sirve para generar ansiedad y decisiones malas.

---

## 10. Checklist de lanzamiento (bloqueante)

**Infraestructura**
- [ ] `showupevents.es` registrado + defensivos apuntando con un solo 301
- [ ] HTTPS con HSTS `preload`; `www` → sin `www` en 308, **un solo salto** verificado con `curl -ILs`
- [ ] `trailingSlash: false`; middleware de minúsculas activo
- [ ] Deployment Protection en Preview **y** `X-Robots-Tag: noindex` fuera de producción
- [ ] Cabeceras de caché: HTML `max-age=0, must-revalidate`; estáticos con hash `immutable`

**Indexación**
- [ ] `robots.txt` derivado del entorno, sin `Disallow: /`, sin bloquear `/_next/`
- [ ] Sitemap índice + 4 hijos, sólo URLs 200 e indexables, `lastmod` real
- [ ] Canonical absoluto y autorreferencial en todas las indexables
- [ ] `noindex, follow` en `/brief`, legales y URLs con parámetros; **sin `Disallow` de facetas todavía**
- [ ] Filtros del catálogo como `<button>` + `replaceState`. Cero `<a href>` con parámetros
- [ ] `dynamicParams = false` en las rutas de ciudad; ciudad inventada → 404
- [ ] Prueba `e2e/indexabilidad.spec.ts` en verde **contra producción**

**Rendimiento**
- [ ] LCP p75 móvil: home ≤ 2,0 s · pilares ≤ 1,6 s · ficha ≤ 2,2 s
- [ ] Vídeo del hero: no existe en el DOM antes de `load`, no en móvil, no con `reduced-motion`, no con `saveData`
- [ ] Grano en CSS, no incrustado. Degradado y viñeteado en CSS
- [ ] Poster AVIF con recorte 3:4 en móvil, `fetchpriority="high"`, `preload` con `media`
- [ ] Tres fuentes autoalojadas, subseteadas, dos precargadas, métricas ajustadas → CLS ≤ 0,02
- [ ] `100svh` en el hero; altura del campo reservada en el CSS crítico
- [ ] Terceros ≤ 40 KB y ≤ 4 peticiones; cero JS de terceros antes del LCP
- [ ] `lighthouse-budget.json` bloqueando el merge

**Datos estructurados**
- [ ] Un solo `<script type="application/ld+json">` por página, con `@graph`
- [ ] `Organization` + `WebSite` en todas; `BreadcrumbList` en todas menos la home
- [ ] `Service` en pilares y ciudades con `areaServed` real
- [ ] `MusicGroup`/`Person` + `VideoObject` + `ImageObject` en cada ficha
- [ ] `FAQPage` sólo con preguntas visibles en la página, máximo 6
- [ ] Cero `AggregateRating`, `Offer`, `Product`, `SearchAction`, `HowTo` — test en CI
- [ ] Validado en el Test de Resultados Enriquecidos y en el validador de Schema.org

**Medición**
- [ ] GSC propiedad de **dominio**, verificada, con sitemap enviado tras el despliegue
- [ ] Cookie `su_first` escribiéndose en el middleware
- [ ] `brief_submit` disparándose **desde el servidor** con `lp_entrada` y llegando al CRM
- [ ] Las cuatro conversiones marcadas en GA4
- [ ] `web-vitals/attribution` enviando LCP/INP/CLS con selector de elemento
- [ ] Google Business Profile creado, verificado, con categoría principal correcta, una semana antes

**Contenido**
- [ ] Al lanzar: home, `/artistas` + fichas, `/como-funciona`, `/nosotros`, `/contacto`, `/precios` y **un** pilar. Todo terminado
- [ ] Cero páginas placeholder, cero "próximamente", cero lorem
- [ ] Cero landings de ciudad sin evento propio (validado en CI)
- [ ] Ningún CTA al brief con anchor de keyword transaccional (Regla 3 de `04` §3.1)

---

## 11. Expectativa honesta

Errores técnicos: días. Contenido publicado y optimizado: semanas. **Primeras señales de tráfico orgánico convertible: mes 5–7. Volumen relevante: mes 10–14.** No hay ninguna decisión de este documento que acelere eso; todas ellas evitan que se retrase.

Lo que sí cambia desde el día uno es la calidad de la información: con la atribución de primer contacto instrumentada y el presupuesto de rendimiento en CI, en el mes 6 se sabrá exactamente qué funciona y por qué. Sin eso, en el mes 6 sólo habrá opiniones.

> **Una web sin tráfico orgánico es una tienda en un callejón sin salida. Una web rápida, indexable y medida en un callejón sin salida es exactamente lo mismo — pero con arreglo.** Este documento sólo garantiza que, cuando el contenido llegue, no haya nada técnico impidiendo que Google lo muestre.
