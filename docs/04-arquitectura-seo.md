# Show Up — Arquitectura SEO

> Documento operativo. Dominio nuevo, cero autoridad, cero backlinks, catálogo corto.
> Todo lo que hay aquí está pensado para tráfico que **entra al brief**, no para posiciones bonitas en un informe.
> Regla de partida: **una keyword = una URL**. Si dos páginas pueden competir por lo mismo, una de las dos no se publica.

---

## 0. Diagnóstico del SERP español (lo que hay enfrente)

Antes de decidir nada, quién manda hoy en cada búsqueda:

| Territorio | Quién ocupa el top | Qué tipo de página | ¿Batible en año 1? |
|---|---|---|---|
| `músicos para bodas`, `grupos musicales para bodas` | Bodas.net (5.900+ proveedores), Supermúsica, Gigstarter, Fillevents | Directorio con miles de fichas | **No.** Ni con presupuesto. |
| `contratar artistas para eventos` | Espectalium, ContratarArtistas.com, Evenses, Tuset | Agregador con años de dominio | **No.** |
| `grupo de versiones + ciudad` | Partfy, Celebrents, La Factoría del Show, Espectaculus | Landing de ciudad clonada, contenido pobre | **Sí, con contenido real.** Son plantillas. |
| `cuánto cuesta contratar un mago/monologuista/grupo` | **Cronoshare**, blogs de proveedores | Página de precios genérica, sin rangos por contexto | **Sí. Es el hueco más grande del sector.** |
| `orquesta fiestas patronales`, `pliego actuación musical` | Portales de contratación pública, PDFs de ayuntamientos | Nadie ha hecho una landing comercial decente | **Sí. Territorio vacío.** |
| `música en directo` + bares/salas | Time Out, Madrid Secreto, listados editoriales de locales | **La intención es "dónde ir a escuchar", no "a quién contrato"** | **No existe la búsqueda.** |

**Tres conclusiones que condicionan toda la arquitectura:**

1. **Las head terms están cerradas.** Un dominio de 0 meses no le quita `grupos musicales para bodas` a Bodas.net. Ni en 12 meses. Todo el plan es long tail + intención + geo.
2. **El hueco real es el precio y el criterio.** Nadie en el sector publica rangos honestos ni dice "esto no te encaja". Es exactamente el tono de marca de Show Up. Coincidencia perfecta entre lo que la marca quiere decir y lo que el SERP premia.
3. **El vertical `Salas y locales` NO es un canal SEO.** El hostelero no busca en Google "contratar grupo para mi bar". Se le llega por outbound y por WhatsApp. Sigue existiendo en la web como página de marca, pero **no se le dedica ni un artículo ni una landing de ciudad**. Cualquier euro de SEO ahí es un euro tirado.

---

## 1. Keywords reales del sector

Volúmenes = orden de magnitud mensual en España (Google, es-ES). Lo que importa no es el número exacto, es el **grupo** en el que está.

### 1.1 Transaccionales — la gente que va a contratar

| Keyword | Volumen | Competencia | Decisión |
|---|---|---|---|
| grupos musicales para bodas | Alto | Brutal (Bodas.net) | No atacar directo. Se cae por cola. |
| contratar artistas para eventos | Alto | Brutal (Espectalium) | No atacar directo. |
| música en directo para bodas | Medio-alto | Alta | **Pilar.** Se ataca por variantes largas. |
| grupo de versiones para bodas | Medio | Media | **Sí.** |
| contratar mago para eventos | Medio | Media-baja | **Sí.** |
| contratar monologuista eventos de empresa | Bajo-medio | **Baja** | **Sí. Prioritaria.** Ticket alto, SERP flojo. |
| artistas para eventos de empresa | Medio | Media | **Pilar.** |
| contratar orquesta fiestas patronales | Bajo | **Muy baja** | **Sí.** Ticket 6.000–45.000 €. |
| banda tributo para eventos | Medio | Media | **Sí.** |
| dj para bodas | Medio-alto | Alta | Sólo vía comparativa (ver 1.3). |
| cuarteto de cuerda para boda | Bajo-medio | Media-baja | **Sí.** |

### 1.2 Comerciales (evaluando) — donde está el dinero fácil

Es el bloque que un dominio nuevo puede ganar en 4–8 meses. Intención altísima, competencia de blogs mediocres.

- `cuánto cuesta un grupo de música para una boda` — el SERP lo tiene Cronoshare con una página genérica. Ganable.
- `cuánto cuesta contratar un mago` / `precio mago para eventos`
- `precio monologuista cena de empresa`
- `cuánto cuesta una orquesta para las fiestas del pueblo`
- `dj o grupo en directo para una boda` — comparativa pura, decisión de compra.
- `cuántos músicos necesito para mi boda`
- `qué incluye el caché de un grupo de música`
- `mejor música para cena de empresa`
- `qué preguntar antes de contratar un grupo de música`

### 1.3 Informacionales — tráfico de captación, no de cierre

Volumen alto, conversión baja. Sirven para autoridad temática e interlinking, **nunca son prioridad 1**.

- `música para el cóctel de boda` (+ `canciones para el cóctel`)
- `canciones para la entrada de la novia`
- `repertorio para boda` / `canciones que no pueden faltar en una boda`
- `cómo organizar el timing musical de una boda`
- `ideas para amenizar una cena de empresa`
- `qué es un rider técnico`
- `con cuánta antelación se contrata la música de una boda`

### 1.4 Long tail geográfico — el motor real del año 1

Patrón: `[tipo de artista o música] + [ocasión] + [ciudad/zona]`.

- `grupo de música para bodas en Barcelona`
- `música en directo para bodas en el Empordà`
- `grupo de versiones Girona`
- `artistas para eventos de empresa en Madrid`
- `orquesta para fiestas patronales en [provincia]`
- `mago para eventos en Valencia`

**Por qué funciona:** los que rankean ahí (Partfy, Celebrents, Espectaculus) son plantillas clonadas con el nombre de la ciudad cambiado. Una página con un caso real, fotos reales de un sitio real y una frase del tipo *"en masías del Empordà con vecinos cerca, la banda completa te va a dar problemas con el límite de decibelios: aquí funciona el trío"* les gana sin discusión.

---

## 2. Arquitectura de clusters

### 2.1 Lógica

Tres clusters pilares, uno por **tipo de noche con demanda de búsqueda real**. Más un cluster transversal de **tipo de artista** que alimenta a los tres. Más el catálogo.

```
CLUSTER A · BODA          →  el volumen
CLUSTER B · EMPRESA       →  el margen y la recurrencia
CLUSTER C · FIESTA MAYOR  →  el ticket grande y el SERP vacío
CLUSTER D · TIPO DE ARTISTA (transversal) → capta a quien ya sabe qué quiere
CATÁLOGO   → /artistas + fichas
```

`Salas y locales` y `Privados` existen como página de marca, **sin cluster, sin blog, sin ciudades**. No tienen demanda de búsqueda.

### 2.2 Árbol de URLs completo

Convención: minúsculas, guiones, sin stopwords innecesarias, sin fechas, sin `/blog/`. Trailing slash: **sin barra final**, consistente, redirección 301 de la variante.

**Slugs reservados** (no pueden ser nunca el slug de un artista): `artistas`, `brief`, `guias`, `precios`, `contacto`, `nosotros`, `como-funciona`, y todos los slugs de landing de tipo de artista.

---

#### RAÍZ

**`/`**
- **Title:** `Show Up · Artistas para bodas, empresa y fiestas`
- **Meta:** `Dinos qué noche quieres y te proponemos dos o tres artistas, con el porqué de cada uno. Músicos, magos, monologuistas y DJs en toda España.`
- **H1:** `Dinos qué noche quieres.`
- **Intención:** Navegacional (marca) + conversión. **No compite por ninguna keyword transaccional.** Ver sección 7.

---

#### CLUSTER A · BODA

**`/musica-para-bodas`** — PILAR
- **Title:** `Música en directo para bodas: qué encaja y qué cuesta`
- **Meta:** `Grupos, dúos y solistas para ceremonia, cóctel y fiesta. Qué formato aguanta tu sitio, qué cuesta de verdad y quién toca. Cuéntanos tu boda y te proponemos 2 o 3.`
- **H1:** `Música en directo para bodas`
- **Intención:** Transaccional-comercial. Página larga (2.500–3.500 palabras) organizada por momento de la boda y por formato. Es el hub que enlaza a todos los satélites del cluster.

**`/musica-para-bodas/cuanto-cuesta`**
- **Title:** `Cuánto cuesta un grupo de música para una boda (2026)`
- **Meta:** `Rangos reales por formato: solista, dúo, trío y banda completa. Qué entra en el caché, qué se factura aparte y en qué casos no merece la pena pagar más.`
- **H1:** `Cuánto cuesta un grupo de música para una boda`
- **Intención:** Comercial. **La página más importante del año 1.** Rangos honestos con desglose (caché, desplazamiento, equipo, horas extra, IVA). Es la que le quita el hueco a Cronoshare.

**`/musica-para-bodas/ceremonia-coctel-y-fiesta`**
- **Title:** `Música de boda momento a momento: ceremonia, cóctel, fiesta`
- **Meta:** `Qué formato funciona en cada tramo de la boda y cómo encadenarlos sin pagar tres artistas distintos. Con tiempos, volúmenes y errores frecuentes.`
- **H1:** `Qué música va en cada momento de la boda`
- **Intención:** Comercial-informacional. Captura media docena de búsquedas de cola (`música para el cóctel de boda`, `música ceremonia civil`, `música para el baile`).

**`/musica-para-bodas/dj-o-grupo-en-directo`**
- **Title:** `¿DJ o grupo en directo para tu boda? Cómo decidir`
- **Meta:** `Ventajas reales de cada uno según el sitio, la hora y el número de invitados. Cuándo el directo sobra y cuándo el DJ solo se queda corto. Sin vender ninguno de los dos.`
- **H1:** `DJ o grupo en directo: cuál encaja en tu boda`
- **Intención:** Comercial. Contenido que **recomienda en contra** — exactamente el tono de marca. Muy compartible, buen imán de enlaces.

**`/musica-para-bodas/con-cuanta-antelacion-contratar`**
- **Title:** `Con cuánta antelación se contrata la música de una boda`
- **Meta:** `Los meses que necesitas de verdad según temporada y zona, qué pasa si vas tarde y qué se puede resolver en tres semanas. Con el calendario mes a mes.`
- **H1:** `Cuándo hay que cerrar la música de la boda`
- **Intención:** Informacional con alta señal de compra (quien pregunta esto está a punto de contratar).

**`/musica-para-bodas/[ciudad]`** — ver 2.3
- **Title:** `Música en directo para bodas en {Ciudad}`
- **Meta:** `Grupos, dúos y solistas para bodas en {Ciudad} y alrededores. Conocemos los sitios, los límites de sonido y a qué hora se llena la pista. Cuéntanos la tuya.`
- **H1:** `Música en directo para bodas en {Ciudad}`
- **Intención:** Transaccional local. Contenido **único obligatorio**: fincas/masías de la zona, restricciones acústicas reales, un caso propio.

---

#### CLUSTER B · EMPRESA

**`/artistas-para-eventos-de-empresa`** — PILAR
- **Title:** `Artistas para eventos de empresa: qué funciona de verdad`
- **Meta:** `Música, magia y monólogos para cenas de empresa, convenciones y aniversarios. Te proponemos dos o tres opciones argumentadas, no un catálogo de cuatrocientas fichas.`
- **H1:** `Artistas para eventos de empresa`
- **Intención:** Transaccional-comercial.

**`/artistas-para-eventos-de-empresa/cena-de-navidad`**
- **Title:** `Qué contratar para la cena de Navidad de empresa`
- **Meta:** `Monologuista, mago de cerca, grupo o DJ: qué encaja según el número de asistentes, el tipo de sala y la hora. Y qué evitar si hay dirección delante.`
- **H1:** `Cena de Navidad de empresa: qué artista encaja`
- **Intención:** Comercial estacional. **Publicar en junio**, no en noviembre. Necesita 4–5 meses para posicionar antes del pico.

**`/artistas-para-eventos-de-empresa/cuanto-cuesta`**
- **Title:** `Cuánto cuesta un artista para un evento de empresa`
- **Meta:** `Rangos por perfil: monologuista, mago, banda, DJ. Qué cambia el precio (sala, hora, exclusividad) y cuándo pagar de más no compra nada mejor.`
- **H1:** `Cuánto cuesta un artista para un evento de empresa`
- **Intención:** Comercial. Incluye la parte que nadie explica: facturación, retenciones y quién emite la factura.

**`/artistas-para-eventos-de-empresa/[ciudad]`** — mismo patrón que boda.

---

#### CLUSTER C · FIESTA MAYOR / AYUNTAMIENTO

**`/orquestas-para-fiestas-patronales`** — PILAR
- **Title:** `Orquestas y grupos para fiestas patronales y verbenas`
- **Meta:** `Programación musical para fiestas mayores: cachés, rider, montaje y la documentación que necesita el ayuntamiento. Cuéntanos el programa y lo montamos entero.`
- **H1:** `Orquestas y grupos para fiestas patronales`
- **Intención:** Transaccional B2G. **SERP prácticamente vacío de páginas comerciales decentes.**

**`/orquestas-para-fiestas-patronales/como-contrata-un-ayuntamiento`**
- **Title:** `Cómo contrata un ayuntamiento una orquesta (contrato menor)`
- **Meta:** `Contrato menor, pliego de prescripciones técnicas y agente artístico: las tres vías, con umbrales, plazos y qué documentación te van a pedir. En cristiano.`
- **H1:** `Cómo contrata un ayuntamiento las actuaciones de sus fiestas`
- **Intención:** Informacional B2G con intención de compra brutal. **Cero competencia.** Lo lee un concejal de festejos que va a contratar.

**`/orquestas-para-fiestas-patronales/cuanto-cuesta`**
- **Title:** `Cuánto cuesta una orquesta para las fiestas del pueblo`
- **Meta:** `Rangos por tamaño de formación y noches contratadas, más los costes que no salen en el caché: escenario, sonido, dietas y SGAE. Presupuesto realista.`
- **H1:** `Cuánto cuesta una orquesta para las fiestas del pueblo`
- **Intención:** Comercial.

---

#### CLUSTER D · TIPO DE ARTISTA (transversal, raíz)

Van en raíz, **no bajo `/artistas/`**, para no colisionar con las fichas.

**`/grupos-de-versiones`**
- **Title:** `Grupos de versiones para bodas, empresa y fiestas`
- **Meta:** `Bandas de versiones en formato dúo, trío o completo. Qué repertorio funciona con qué público y cuántos músicos aguanta tu sitio de verdad.`
- **H1:** `Grupos de versiones`
- **Intención:** Transaccional.

**`/magos-para-eventos`**
- **Title:** `Contratar un mago para eventos: magia de cerca y escena`
- **Meta:** `Magia de cerca para cóctel o espectáculo de escena para después de la cena. Cuál encaja según el formato del evento, el ruido y el número de invitados.`
- **H1:** `Magos para eventos`
- **Intención:** Transaccional.

**`/monologuistas-para-eventos`**
- **Title:** `Contratar un monologuista para eventos y cenas de empresa`
- **Meta:** `Humor que encaja con tu público, no el que arrasa en la tele. Cómo elegir tono, duración y momento para que el monólogo no muera en la sobremesa.`
- **H1:** `Monologuistas para eventos`
- **Intención:** Transaccional. **Alta prioridad: SERP flojo, ticket 700–3.000 €.**

**`/dj-para-bodas-y-eventos`**
- **Title:** `DJ para bodas y eventos: cuándo es la opción correcta`
- **Meta:** `DJ solo, DJ con directo o DJ después del grupo. Las tres fórmulas, qué cuesta cada una y en qué tipo de noche funciona mejor.`
- **H1:** `DJ para bodas y eventos`
- **Intención:** Transaccional.

**`/bandas-tributo`**
- **Title:** `Bandas tributo para eventos y fiestas en toda España`
- **Meta:** `Tributos que llenan una plaza y tributos que sólo funcionan en sala. Te decimos cuál pega con tu público antes de que pagues la señal.`
- **H1:** `Bandas tributo`
- **Intención:** Transaccional. Fuerte para fiestas patronales.

**`/cuartetos-de-cuerda-para-bodas`**
- **Title:** `Cuarteto de cuerda para bodas: ceremonia y cóctel`
- **Meta:** `Cuarteto, trío o dúo de cuerda para la ceremonia y el aperitivo. Repertorio, tiempos y qué hace falta si la ceremonia es en exterior.`
- **H1:** `Cuarteto de cuerda para bodas`
- **Intención:** Transaccional de cola. Barato de posicionar.

---

#### CATÁLOGO

**`/artistas`**
- **Title:** `Artistas — Show Up`
- **Meta:** `Los artistas que ya conocemos, con vídeo de directo y para qué tipo de noche sirve cada uno. Si no está el que buscas, lo buscamos: es nuestro trabajo.`
- **H1:** `Nuestros artistas`
- **Intención:** Navegacional. **No es una página SEO.** Existe para el usuario y para distribuir enlace interno hacia las fichas.

**`/artistas/[slug-artista]`**
- **Title:** `{Nombre} — {qué hace} | Show Up`
- **Meta:** `{Nombre}: {una línea}. Vídeo de directo, formaciones posibles y para qué tipo de noche funciona. Pregunta por ellos y te decimos si encajan.`
- **H1:** `{Nombre}`
- **Intención:** Navegacional de marca del artista + captura de búsquedas `{nombre} contratar`. Es la única forma legítima de rankear por nombre propio.

**`/tipos-de-noche/bodas`, `/tipos-de-noche/empresa`, `/tipos-de-noche/fiestas-de-ciudad`, `/tipos-de-noche/salas-y-locales`, `/tipos-de-noche/privados`**
- **DECISIÓN:** estas cinco **no existen como URL**. Canibalizarían los pilares.
  - `Bodas` → enlaza a `/musica-para-bodas`
  - `Empresa` → `/artistas-para-eventos-de-empresa`
  - `Fiestas de ciudad` → `/orquestas-para-fiestas-patronales`
  - `Salas y locales` y `Privados` → anclas dentro de `/como-funciona` (`#salas`, `#privados`). Sin demanda de búsqueda, no merecen URL propia.
- El eje de navegación por ocasión de la marca se mantiene intacto. Simplemente los destinos son los pilares.

---

#### SERVICIO Y MARCA

| URL | Title | Meta | H1 | Intención / Indexación |
|---|---|---|---|---|
| `/como-funciona` | `Cómo funciona Show Up: tres pasos, sin catálogo` | `Nos cuentas la noche, te proponemos dos o tres opciones con el porqué de cada una, y nos ocupamos de contrato, rider y horarios. Eso es todo.` | `Cómo funciona` | Informacional de marca. **Index.** Objeciones + FAQ. |
| `/nosotros` | `Quiénes somos y por qué no tenemos 500 artistas` | `No vendemos acceso a una lista. Nos hacemos responsables de la noche. Quiénes somos, de dónde venimos y cómo elegimos a quién sube al escenario.` | `Por qué existimos` | Marca + E-E-A-T. **Index.** Con nombres y caras reales. |
| `/brief` | `Dinos qué noche quieres — Show Up` | `Cuéntanos el evento en tus palabras. Te escribimos en menos de 24 h con dos o tres nombres y el porqué de cada uno.` | `Dinos qué noche quieres` | Conversión. **Index, follow** pero sin trabajo SEO. |
| `/brief/gracias` | — | — | `Recibido` | **noindex.** Página de conversión medible. |
| `/contacto` | `Contacto — Show Up` | `Teléfono, email y dirección. Si prefieres hablar antes que escribir un formulario, llama.` | `Hablemos` | NAP consistente. **Index.** |
| `/guias` | `Guías — Show Up` | `Todo lo que hemos aprendido montando noches: precios reales, formatos, timings y los errores que se repiten.` | `Guías` | Hub de contenido informacional. **Index.** |
| `/aviso-legal`, `/privacidad`, `/cookies` | — | — | — | **noindex, follow.** |

---

### 2.3 Ciudades: cuántas y con qué criterio

**Se arranca con TRES. Ni una más.** Se llega a seis a los 12 meses, si y sólo si las tres primeras tienen impresiones crecientes en Search Console.

**Los cuatro criterios, en orden. Una ciudad entra sólo si cumple los cuatro:**

1. **Prueba local real.** Hay al menos un evento hecho ahí, con fotos propias y, si se puede, una frase del cliente. **Sin prueba, no hay página.** Este es el criterio que impide clonar.
2. **Capacidad de servir sin destrozar el margen.** El desplazamiento del artista no puede comerse el presupuesto. Radio realista desde la base o desde donde vive el artista.
3. **Volumen de búsqueda con modificador de ciudad.** Que exista `[servicio] + [ciudad]`. En capitales existe siempre; en pueblos de 8.000 habitantes, no.
4. **Densidad de sitios.** Fincas y masías para boda; sedes corporativas para empresa. Una ciudad sin sitios donde celebrar no genera demanda aunque tenga población.

**Regla de la zona por encima de la ciudad.** En bodas, el usuario no busca la ciudad: busca **dónde está la finca**. `bodas en el Empordà` convierte mejor y compite menos que `bodas en Girona`. Cuando la zona tiene nombre propio en el mercado de bodas (Empordà, Sierra de Madrid, Penedès, Costa Brava, La Rioja Alavesa, Aljarafe), **la zona gana a la provincia**.

**Configuración recomendada de arranque:**

| # | Página | Cuándo | Por qué |
|---|---|---|---|
| 1 | `/musica-para-bodas/barcelona` | Mes 2 | Volumen + base operativa. |
| 2 | `/musica-para-bodas/emporda` | Mes 4 | Zona de bodas de alto ticket, competencia casi nula, intención altísima. |
| 3 | `/artistas-para-eventos-de-empresa/barcelona` | Mes 6 | Reutiliza autoridad local ya construida; segmento distinto. |
| 4–6 | Madrid (boda + empresa) y una segunda zona | Mes 9–12 | **Sólo si 1–3 rankean.** |

**Prohibido:** publicar la ciudad 4 antes de que la 1 y la 2 tengan tráfico. Publicar landings de ciudades donde no se ha tocado nunca. Reutilizar el mismo texto cambiando el topónimo. Ese patrón es exactamente lo que Google clasifica como *doorway pages*, y con un dominio nuevo no hay colchón de autoridad que lo aguante.

**Mínimo de contenido único por landing de ciudad: 60%.** El bloque de servicio puede repetirse; el bloque de sitios, restricciones, casos y fotos, no.

---

## 3. Interlinking

### 3.1 Las cinco reglas

**Regla 1 — Satélite → pilar, siempre y arriba.** Cada satélite enlaza a su pilar **dentro de los primeros 150 palabras**, con anchor exacto de la keyword del pilar (`música en directo para bodas`). Un solo enlace, no tres.

**Regla 2 — Pilar → satélites, con índice visible.** El pilar tiene un índice de contenidos enlazado y, además, un enlace contextual dentro del párrafo donde se toca cada subtema. Doble ruta: la de navegación y la editorial.

**Regla 3 — Los CTAs al brief NUNCA llevan anchor de keyword.** Esto es lo más importante de esta sección y donde todo el mundo se equivoca.

`/brief` va a recibir cientos de enlaces internos. Si esos enlaces usan anchors como *"contratar música para bodas"*, le estás diciendo a Google que `/brief` es tu página de música para bodas, y **canibaliza al pilar**. Los anchors al brief son siempre de marca o de acción:

- ✅ `Dinos qué noche quieres` · `Cuéntanos la tuya` · `Empezar` · `Pídelo`
- ❌ `contratar grupo de música` · `presupuesto música boda` · `artistas para eventos`

Efecto: el usuario va al brief desde cualquier sitio (lo que quiere la marca) y ninguna keyword transaccional se desvía de su pilar (lo que quiere el SEO). Los dos objetivos son compatibles si el anchor está bien elegido.

**Regla 4 — Cluster D cruza con Clusters A/B/C.** Cada landing de tipo de artista enlaza a los pilares de ocasión donde ese artista tiene sentido, y viceversa. `/grupos-de-versiones` enlaza a boda, empresa y fiestas. `/cuartetos-de-cuerda-para-bodas` sólo a boda. La malla temática es lo que construye autoridad de tema, no el número de artículos.

**Regla 5 — Ficha de artista, nunca callejón sin salida.** Cada ficha enlaza a: (a) breadcrumb hacia `/artistas`, (b) los pilares de ocasión donde encaja, desde el bloque *"Para qué noche sirve"* — que ya existe en el diseño y es un imán de enlaces internos naturales, (c) su landing de tipo (`/grupos-de-versiones`), (d) el brief precargado.

### 3.2 Flujo de autoridad

```
        /guias/*  (informacional, capta)
             │  enlaza a
             ▼
    PILAR (boda / empresa / fiestas)  ◄──┐
        │              ▲                 │ enlace cruzado
        │ enlaza a     │ enlaza a        │
        ▼              │                 ▼
   satélites      landings ciudad   Cluster D (tipo artista)
        │              │                 │
        └──────────────┴─────────────────┘
                       │
                       ▼  anchor SIEMPRE de marca
                    /brief
                       │
                       ▼
                /brief/gracias (noindex)
```

### 3.3 Higiene

- **Cero páginas huérfanas.** Toda URL indexable a ≤3 clics de la home.
- **Footer con 8–10 enlaces máximo.** Nunca un listado de ciudades en el footer: es la firma de las webs de plantilla.
- **Bloque "También trabajamos en" en landings de ciudad: máximo 3 enlaces.** No un mapa de España.
- **Breadcrumbs en todo el sitio** (y marcados, ver sección 6). Es la señal de jerarquía más barata que existe.
- **Enlaces salientes**: a las webs de los artistas, a Spotify/YouTube. Enlazar hacia fuera a fuentes legítimas es señal de contenido real, no de granja.

---

## 4. Qué NO hacer el primer año

**1. No pelear las head terms.** `grupos musicales para bodas`, `contratar artistas para eventos`. Bodas.net y Espectalium tienen 10+ años y miles de dominios enlazantes. Si esas keywords hacen falta ya, se compran en Google Ads mientras el SEO construye la cola. SEO y SEM no compiten: se reparten el embudo.

**2. No clonar landings de ciudad.** Veinte páginas con el topónimo cambiado son *doorway pages*. En un dominio con autoridad puede colar; en uno nuevo dispara el filtro de contenido no útil y arrastra al dominio entero. **Tres ciudades bien hechas > cuarenta clonadas.**

**3. No comprar enlaces en packs.** Ni notas de prensa a 50 € replicadas en 40 portales, ni PBNs, ni "500 enlaces DA30". El primer año el link building se hace a mano y son pocos: la web de cada artista con el que se trabaja (enlace editorial en su sección de contratación, con anchor variado, **no en el footer**), los sitios de bodas (fincas, masías, wedding planners) con los que se ha colaborado de verdad, y prensa local cuando se toca en una fiesta mayor. **Diez enlaces reales valen más que quinientos comprados, y no te pueden penalizar.**

**4. No publicar tres artículos por semana generados sin criterio.** Veinte piezas al año que resuelvan de verdad una duda de compra baten a doscientas de relleno. La consistencia en SEO no es frecuencia, es calidad sostenida.

**5. No poner `AggregateRating` ni testimonios inventados.** El marcado de reseñas falsas es motivo de acción manual, y un testimonio genérico mata la marca (ya está escrito en la plataforma). Si no hay reseñas, la sección no existe.

**6. No indexar filtros ni búsquedas internas.** Los filtros del catálogo (`?tipo=`, `?ambiente=`, `?formato=`) van con `canonical` a `/artistas` y `noindex`. Con un catálogo corto, indexar combinaciones de filtros genera decenas de páginas casi vacías. Es la forma más rápida de que Google decida que el sitio es fino.

**7. No abrir el vertical hostelería en SEO.** El SERP de `música en directo` + local está ocupado por guías de "dónde ir a escuchar". La búsqueda de contratación no existe con volumen. Ese canal es outbound.

**8. No cambiar slugs ni migrar dominio a los cinco meses.** El SEO en dominio nuevo es exponencial: plano hasta el mes 5–7 y luego acelera. El proyecto que se rehace en el mes 4 se rehace justo antes del punto de inflexión. **Se decide la estructura una vez, aquí, y no se toca en 12 meses.**

**9. No usar la home como landing transaccional.** Ver sección 7.

**10. No dejar que el hero de vídeo destroce el LCP.** El diseño pide vídeo de directo a pantalla completa. Un vídeo como elemento LCP en móvil es 4+ segundos y arruina Core Web Vitals en la página que más enlaces internos recibe. **Solución obligatoria:** imagen `poster` en WebP/AVIF con `fetchpriority="high"` y `preload` como elemento LCP; el vídeo se carga después de `load`, `muted`, `playsinline`, `preload="none"`, y no se carga en absoluto con `prefers-reduced-motion` ni bajo `saveData`.

**11. No canibalizar.** Antes de crear cualquier URL nueva: ¿qué keyword ataca y hay ya otra página que la ataque? Si la respuesta es sí, se amplía la existente. No se crea.

**12. No medir posiciones. Medir briefs.** El KPI del año 1 no es el puesto en una keyword, es **briefs entrados desde orgánico**. Todo lo demás es métrica de vanidad.

---

## 5. Los 10 primeros contenidos, por orden

Criterio de orden: **facilidad de rankear × intención comercial**. No volumen.

| # | URL | Keyword objetivo | Dificultad | Intención | Por qué va aquí |
|---|---|---|---|---|---|
| 1 | `/musica-para-bodas` | música en directo para bodas | Alta | Transaccional | Sin el pilar, ningún satélite tiene a dónde apuntar. Es la base del cluster que más volumen tiene. Tardará, pero todo cuelga de aquí. |
| 2 | `/musica-para-bodas/cuanto-cuesta` | cuánto cuesta un grupo de música para una boda | **Baja** | **Comercial altísima** | El hueco más grande del SERP: sólo Cronoshare con una página genérica. Quien busca precio está comprando. Primer tráfico convertible del proyecto. |
| 3 | `/monologuistas-para-eventos` | contratar monologuista eventos de empresa | **Baja** | Transaccional | SERP flojo, ticket 700–3.000 €, ciclo de decisión corto. La mejor relación esfuerzo/ingreso de la lista. |
| 4 | `/musica-para-bodas/barcelona` | grupo de música para bodas en Barcelona | Media | Transaccional local | Los que rankean son plantillas. Con contenido local real se les gana. Empuja además al pilar #1. |
| 5 | `/artistas-para-eventos-de-empresa` | artistas para eventos de empresa | Media-alta | Transaccional | Segundo pilar. Segmento de mayor margen y recurrencia (RRHH repite cada año). |
| 6 | `/orquestas-para-fiestas-patronales/como-contrata-un-ayuntamiento` | cómo contrata un ayuntamiento una orquesta | **Muy baja** | Informacional B2G, compra segura | Nadie ha escrito esto bien. Lo lee un concejal de festejos con presupuesto. Además es contenido enlazable desde webs municipales y prensa local. |
| 7 | `/magos-para-eventos` | contratar mago para eventos | Media-baja | Transaccional | Amplía el catálogo temático más allá de música. Demanda estable todo el año, competencia fragmentada. |
| 8 | `/musica-para-bodas/dj-o-grupo-en-directo` | dj o grupo en directo para una boda | Baja | Comercial | Comparativa que recomienda en contra. Alto CTR, alta permanencia, el mejor imán de enlaces naturales del plan. |
| 9 | `/orquestas-para-fiestas-patronales` | contratar orquesta fiestas patronales | Baja | Transaccional | Pilar C. **Publicar antes de noviembre**: los ayuntamientos cierran programación entre enero y marzo. |
| 10 | `/artistas-para-eventos-de-empresa/cena-de-navidad` | qué contratar cena de Navidad empresa | Baja | Comercial estacional | **Publicar en junio.** Necesita 5 meses de rodaje para llegar posicionado al pico de septiembre-noviembre. |

**Segunda oleada (meses 5–9), en este orden:** `/grupos-de-versiones` · `/musica-para-bodas/ceremonia-coctel-y-fiesta` · `/artistas-para-eventos-de-empresa/cuanto-cuesta` · `/musica-para-bodas/emporda` · `/bandas-tributo` · `/musica-para-bodas/con-cuanta-antelacion-contratar` · `/dj-para-bodas-y-eventos` · `/cuartetos-de-cuerda-para-bodas` · `/orquestas-para-fiestas-patronales/cuanto-cuesta` · `/artistas-para-eventos-de-empresa/barcelona`.

---

## 6. Schema.org

Sólo lo que hace algo. Todo en JSON-LD, en `<head>`.

### 6.1 En todas las páginas

**`Organization`** (en la home, con `@id` reutilizado por referencia en el resto):

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://showupevents.es/#organization",
  "name": "Show Up Events",
  "alternateName": "Show Up",
  "url": "https://showupevents.es/",
  "logo": "https://showupevents.es/logo.png",
  "description": "Contratación de artistas para bodas, eventos de empresa y fiestas. No vendemos catálogo: encontramos al artista.",
  "areaServed": { "@type": "Country", "name": "España" },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+34...",
    "contactType": "sales",
    "areaServed": "ES",
    "availableLanguage": ["es", "ca", "en"]
  },
  "sameAs": ["https://www.instagram.com/...", "https://www.linkedin.com/company/..."]
}
```

**`BreadcrumbList`** en toda página que no sea la home. Es el marcado con mejor relación coste/beneficio que existe: Google lo sigue pintando en el resultado y sustituye la URL cruda.

### 6.2 En pilares y landings

**`Service`**, con `areaServed` de verdad (país en los pilares, ciudad/zona en las landings locales):

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Contratación de música en directo para bodas",
  "provider": { "@id": "https://showupevents.es/#organization" },
  "areaServed": { "@type": "City", "name": "Barcelona" },
  "audience": { "@type": "Audience", "audienceType": "Parejas que organizan su boda" },
  "url": "https://showupevents.es/musica-para-bodas/barcelona"
}
```

### 6.3 En fichas de artista — el marcado más valioso del sitio

- Bandas y grupos → **`MusicGroup`** (con `genre`, `member`, `sameAs` a Spotify / YouTube / Instagram del artista).
- Magos, monologuistas, solistas → **`Person`** con `jobTitle` y `performerIn` si procede.
- **`VideoObject`** para el vídeo de directo. **Obligatorio.** Es lo que activa la miniatura de vídeo en el resultado de búsqueda y multiplica el CTR en una vertical donde nadie lo marca. Requiere `name`, `description`, `thumbnailUrl`, `uploadDate` y `contentUrl` o `embedUrl`.
- **`ImageObject`** en el retrato, con `caption` real.

### 6.4 En páginas con preguntas

**`FAQPage`** en `/como-funciona`, en los pilares y en las páginas de precio. Aviso honesto: **desde 2023 Google casi no pinta el rich result de FAQ** salvo en dominios institucionales. Se pone igual, pero por otra razón: es lo que consumen los buscadores generativos y los asistentes para citar respuestas. Coste bajo, beneficio a medio plazo. **No es un truco de CTR.**

### 6.5 Prohibido o condicionado

| Marcado | Decisión |
|---|---|
| `AggregateRating` / `Review` | **Sólo con reseñas reales y verificables.** Antes de eso, no existe. |
| `Offer` / `PriceSpecification` | **No.** Los cachés varían por fecha, sitio y formato. Marcar un precio que luego no se sostiene genera desconfianza y quejas. Los rangos van en texto, no en schema. |
| `Event` | **No** para eventos de clientes (son privados). **Sí** si algún día Show Up produce un evento propio abierto al público. |
| `LocalBusiness` | Sólo en `/contacto`, y sólo si hay oficina física con dirección real. **Si no hay local que se pueda visitar, no se marca.** |
| `WebSite` + `SearchAction` | **No.** No hay buscador interno. |

### 6.6 SEO local

Si existe dirección física: **Google Business Profile es prioridad por encima de casi cualquier artículo.** Categoría principal correcta (*Agencia de espectáculos* / *Agencia de eventos*), fotos de directos reales subidas cada mes, y un sistema para pedir reseña a cada cliente después del evento. En búsquedas locales, el pack de 3 se lleva más clics que la posición orgánica 1. NAP idéntico en web, GBP, redes y cualquier directorio.

---

## 7. La tensión: catálogo indexable vs. "Dinos qué noche quieres"

### 7.1 La tensión es falsa, y esta es la razón

La premisa oculta del conflicto es *"la home tiene que rankear por las keywords transaccionales"*. **Con un dominio nuevo eso no va a pasar de todos modos.** La home de Show Up jamás va a quitarle `contratar artistas para eventos` a Espectalium en el año 1, ponga el H1 que ponga. Optimizar la home para una keyword que no puede ganar tiene coste de marca y cero beneficio de tráfico.

Así que la home queda liberada. Y como queda liberada, puede ser exactamente lo que la marca quiere: **una pregunta.**

### 7.2 El reparto de trabajo

| | Home | Pilares y landings | `/artistas` y fichas |
|---|---|---|---|
| **Trabajo** | Convertir al que llega por marca, referido, Ads o directo | Captar tráfico transaccional de Google | Cerrar al que ya está dentro / captar por nombre de artista |
| **Keyword** | `show up events` (navegacional) | Las transaccionales y comerciales | Nombre del artista |
| **H1** | `Dinos qué noche quieres.` | Keyword exacta | Nombre del artista |
| **KPI** | % que arranca el brief | Impresiones → clics → briefs | Clics al brief precargado |

**El SEO no necesita la home. Necesita 25 URLs bien construidas.** Y esas 25 URLs son, materialmente, un catálogo indexable — sólo que ordenado por **noche** y no por **inventario**, que es justo lo que la plataforma de marca pide.

### 7.3 Las siete decisiones concretas

**1. La home mantiene su H1 de marca.** `Dinos qué noche quieres.` intacto. El H1 no es un requisito de ranking para una página navegacional.

**2. El contexto semántico lo da el subtítulo, no el H1.** Justo debajo, en un `<p>` real y visible (no oculto, no un `alt`), va la frase que ya está escrita en el copy deck, ligeramente ampliada:

> `Encontramos al artista que la llena. Músicos, magos, monologuistas y DJs para bodas, eventos de empresa y fiestas, en toda España.`

Ahí están todas las entidades que Google necesita para clasificar el dominio. Sin tocar el gesto de marca, sin meter un ladrillo de texto SEO en el hero.

**3. El `<title>` sí lleva descriptor.** El `<title>` no se ve en la página, sólo en la pestaña y en el SERP. Ahí no hay conflicto de marca: `Show Up · Artistas para bodas, empresa y fiestas`. La marca en la web dice una cosa; el `<title>` da contexto a Google y al que ve el resultado. Son dos superficies distintas.

**4. Los H2 de la home hacen el trabajo de keywords.** La sección "Tipos de noche" del copy deck lleva H2/H3 con las etiquetas de siempre (`Bodas`, `Empresa`, `Fiestas de ciudad`) y **cada una enlaza a su pilar con anchor descriptivo**: *"Música en directo para bodas →"*. La marca ve las cinco ocasiones; Google ve una arquitectura temática. Mismo píxel, dos lecturas.

**5. El catálogo se indexa; los filtros no.** `/artistas` y cada `/artistas/[slug]` son `index, follow`. Los filtros de *tipo de evento*, *ambiente* y *formato* son parámetros de URL con `canonical` a `/artistas` y `noindex`. Se conserva la experiencia de filtrado sin generar páginas finas. Y como no hay paginación visible (decisión de marca), tampoco hay que resolver paginación en SEO. La restricción de marca **simplifica** el SEO aquí.

**6. Cada landing pilar es "la puerta grande" con contenido.** Las landings no son parrillas. Son páginas que argumentan qué encaja en tu noche y cuánto cuesta —el tono de la marca literal— y terminan en el bloque de contraste invertido que ya existe:

> **¿No está el que buscas? Es literalmente nuestro trabajo.**

Ese bloque, que la marca creó para tapar un catálogo corto, es a la vez la mejor conversión de tráfico frío de Google: quien llega de una búsqueda long tail casi nunca busca a alguien del catálogo. **El parche de marca resulta ser la mejor mecánica de conversión SEO del sitio.**

**7. El anchor de los CTAs al brief es siempre de marca.** Ya explicado en 3.1, Regla 3. Es la pieza técnica que hace que las dos cosas convivan: el brief recibe todo el tráfico interno sin robarle ninguna keyword a los pilares.

### 7.4 La frase que zanja el debate

> **El catálogo no se indexa para vender. Se indexa para que Google entienda de qué va este dominio. Quien vende es el brief.**

Si dentro de un año el catálogo tiene 60 artistas en vez de 6, no cambia una sola línea de esta arquitectura. Si sigue teniendo 6, tampoco. Eso es la prueba de que la estructura es correcta.

---

## 8. Checklist técnico de lanzamiento

- [ ] HTTPS con redirección 301 forzada. Una sola versión canónica de dominio (con o sin `www`, da igual, pero una).
- [ ] `sitemap.xml` sólo con URLs indexables (fuera `/brief/gracias`, legales y parámetros). Enviado en Search Console.
- [ ] `robots.txt` limpio. **No bloquear CSS ni JS.**
- [ ] `hreflang`: **no.** Sitio en `es-ES` únicamente. Si algún día hay versión catalana, entonces sí — y con URLs separadas, nunca traducción por JavaScript.
- [ ] Core Web Vitals en móvil: LCP < 2,5 s con el hero de vídeo resuelto según la sección 4.10. CLS 0 en el campo del hero (reservar altura).
- [ ] Campo del hero con `font-size ≥ 16px` (ya en el copy deck: evita el zoom de iOS y es señal de usabilidad móvil).
- [ ] Imágenes: WebP/AVIF, `width`/`height` declarados, `loading="lazy"` salvo el LCP, nombre de archivo descriptivo (`banda-versiones-boda-masia-emporda.webp`, no `IMG_4471.jpg`), `alt` que describa la escena real.
- [ ] Google Search Console + Analytics con **`/brief/gracias` configurada como conversión**. Es el único KPI que importa.
- [ ] Google Business Profile creado y verificado el día 1 (tarda semanas en madurar).
- [ ] Revisión mensual de Search Console: 30 minutos. Qué consultas generan impresiones sin clics (→ arreglar `title`), qué páginas suben, qué errores de indexación aparecen.

**Expectativa honesta de plazos:** errores técnicos, en días. Contenido publicado y optimizado, en semanas. **Primeras señales de tráfico orgánico convertible: mes 5–7.** Volumen relevante: mes 10–14. Quien prometa antes, miente.
