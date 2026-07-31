# Show Up — Estrategia GEO / AIO

> **Qué es este documento.** El plan para que Show Up sea la fuente que ChatGPT, Perplexity, Google AI Overviews, AI Mode, Gemini y Claude citan cuando alguien en España pregunta a un asistente por contratar artistas.
> **Estado del arte:** investigación cerrada en **julio de 2026**. Todo lo que se afirma aquí lleva fuente y fecha.
> **Relación con `04-arquitectura-seo.md`:** ese documento manda en URLs, clusters e interlinking. Este **no crea una arquitectura paralela**: reutiliza la misma y le añade la capa de formato, entidad, datos propios y medición que el SEO clásico no cubre. Donde hay conflicto, gana `04` en estructura y gana `03` en cómo se escribe dentro de cada página.
> **Relación con `01-plataforma-de-marca.md` y `06-copy-deck-definitivo.md`:** el tono no se toca. La sección 3 explica exactamente cómo convivir con él.

---

## 0. Resumen ejecutivo — las 14 decisiones

Si solo se leen catorce líneas, que sean estas. **Y si solo se lee una, que sea la 13: el nombre de la marca es el mayor riesgo del proyecto y hay que resolverlo antes que nada.**

| # | Decisión | Por qué |
|---|---|---|
| 1 | **GEO no es un canal nuevo: es una capa sobre el SEO de `04`.** No se crean páginas nuevas para IA. | El predictor dominante de ser citado sigue siendo el ranking orgánico y estar indexado. Duplicar arquitectura canibaliza. |
| 2 | **La prioridad nº 1 no es la web: son las menciones fuera de la web.** | Menciones de marca correlacionan **0,664** con presencia en AI Overviews; los backlinks, **0,218**. Tres veces más. ([Ahrefs, 75.000 marcas](https://ahrefs.com/blog/ai-overview-brand-correlation/)) |
| 3 | **Bing Webmaster Tools se abre el día 1, antes que casi nada.** | ChatGPT resuelve la búsqueda en vivo sobre el índice de Bing. Sin Bing no hay cita en ChatGPT, que es el 87% del tráfico de referencia de IA. |
| 4 | **Se deja pasar a TODOS los crawlers de IA, incluidos los de entrenamiento.** Y se comprueba que Cloudflare no los esté bloqueando por defecto. | Un dominio de cero autoridad no tiene nada que licenciar y todo que ganar existiendo dentro del modelo. Argumentado en la sección 4. |
| 5 | **`llms.txt` se publica, pero como coste hundido de 30 minutos, no como estrategia.** | El 97% de los `llms.txt` válidos no recibió ni una sola petición en mayo de 2026. Ningún proveedor grande se ha comprometido a leerlo. |
| 6 | **El schema se monta el que ya dice `04`, ni uno más "para la IA".** | El estudio controlado de Ahrefs (2026) no encontró aumento de citas al añadir JSON-LD. Google dice literalmente que no hacen falta ficheros ni marcado especiales. |
| 7 | **La unidad de optimización es el párrafo, no la página.** | AI Mode descompone cada consulta en 8–12 subconsultas y recupera **pasajes**, no páginas. El 44,2% de las citas sale del primer 30% de la página. |
| 8 | **Cada página abre respondiendo, en 40–60 palabras, con sujeto explícito y una cifra.** | Regla de redacción nº 1 de la sección 3. Es lo único de la web que mueve la aguja de verdad. |
| 9 | **El mapa de contenidos GEO son 20 preguntas conversacionales, no 20 keywords.** | Sección 6. Es el entregable central de este documento. |
| 10 | **La ficha de Google Business Profile es más importante para IA que cualquier artículo.** | Solo hay ~45% de solapamiento entre quien gana el pack local de Google y quien sale recomendado por una IA. Son dos partidos distintos. |
| 11 | **El activo defendible es un dataset propio de precios reales.** Tres capas, sección 8. | Es lo único que un LLM tiene que citar por narices: no existe en ningún otro sitio y no se puede copiar sin hacer el trabajo. |
| 12 | **Se mide con un panel fijo de 20 prompts, 3 ejecuciones cada uno, una vez al mes.** Y con una pregunta nueva en el brief: *"¿cómo nos has encontrado?"*. | La variabilidad de los motores generativos hace que medir una vez sea medir ruido. Sección 7. |
| 13 | **🔴 El nombre es el problema nº 1. Se adopta un descriptor público fijo: `Show Up Events · Música en directo y artistas para eventos`.** El nombre NO se cambia; se desambigua. | `Show Up` es un phrasal verb inglés de altísima frecuencia con homónimos internacionales y huella digital cero. Para un desambiguador de entidades es el peor escenario posible. **Sección 2.1, y es bloqueante.** |
| 14 | **El vocabulario del sector (txaranga, charanga, orquesta de verbena, elektrotxaranga, banda tributo, monologuista vs humorista) es la mejor oportunidad GEO del plan.** | Son términos españoles y regionales **sin definición canónica publicada ni un solo precio público**. Verificado en esta investigación. Baratos de escribir, citables durante años. §3.5 y §6.4. |

**Marco temporal honesto:** las menciones de entidad tardan **30–90 días** en aparecer en respuestas generativas después de existir. El dataset propio tarda **4–6 meses** en construirse y otros 3 en ser citado. Nadie sale citado en ChatGPT en tres semanas con un dominio de cero meses. Quien lo prometa, miente — igual que en SEO clásico.

---

## 1. Cómo funcionan hoy los motores generativos (2025–2026)

### 1.1 El cambio de fondo, en una frase

El SEO clásico optimiza **una página para una consulta**. El GEO optimiza **un pasaje para una consulta que el usuario no ha escrito**, porque el motor se la ha inventado él al descomponer la pregunta original.

Google llama a eso *query fan-out*: AI Mode usa un modelo Gemini dedicado que convierte una consulta en **8–12 subconsultas sintéticas** (cientos en Deep Search), las lanza en paralelo, recupera **pasajes** por similitud vectorial —no por coincidencia de palabras clave— y sintetiza. Detalle crítico para la estrategia: **solo el 27% de esas subconsultas se repite entre ejecuciones**; el 73% cambia cada vez. ([iPullRank](https://ipullrank.com/how-ai-mode-works) · [Aleyda Solís](https://www.aleydasolis.com/en/ai-search/google-query-fan-out/))

Tres consecuencias operativas:

1. **Rankear la keyword principal ya no garantiza la cita.** Contenido de la página 3 de Google aparece en AI Overviews porque respondía bien a una subconsulta oculta.
2. **La cobertura temática ancha bate a la optimización fina.** Si el 73% de las subconsultas cambia, no se puede optimizar para una lista de subconsultas; hay que cubrir el tema entero en secciones autónomas.
3. **No se puede ganar con una sola página monstruosa.** Se gana con muchas secciones cortas, autosuficientes y bien etiquetadas, repartidas por el cluster.

### 1.2 Motor por motor: qué privilegia cada uno

| Motor | Cómo recupera | Qué privilegia realmente | Consecuencia para Show Up |
|---|---|---|---|
| **ChatGPT Search** (OpenAI) | Búsqueda en vivo sobre el **índice de Bing** + memoria del modelo. Agentes: `OAI-SearchBot` (búsqueda), `ChatGPT-User` (visita a petición), `GPTBot` (entrenamiento) | Fuentes enciclopédicas y consolidadas. **Wikipedia ≈ 47,9% de sus citas top.** Para negocios locales tira de Bing Places, Foursquare y Yelp, y de reseñas | **Bing Webmaster Tools + IndexNow + Bing Places son obligatorios.** Sin índice de Bing, Show Up no existe en el 87% del tráfico de IA |
| **Perplexity** | RAG en tiempo real sobre web viva; ranking multicapa (relevancia, autoridad, frescura, estructura, claridad de entidad). Agentes: `PerplexityBot`, `Perplexity-User` | **Frescura por encima de todo** — una página de hace 14 días gana a una de 8 meses en >70% de los cara a cara. Y **comunidad**: Reddit ≈ 46,7% de sus citas top | Fecha de actualización visible y real en cada página. Y presencia honesta en foros y comunidades españolas (ver 2.5) |
| **Google AI Overviews** | Integrado en Search. Aparece en ~50% de las búsquedas. Elegibilidad = estar indexado y poder mostrar snippet | Reddit ~21% de las citas, YouTube, Wikipedia, propiedades de Google. Wikipedia+YouTube+Google+Reddit+Amazon ≈ **38% de todas las citas** | **El vídeo de directo en YouTube no es marketing: es infraestructura de citación.** Y el SEO clásico de `04` sigue siendo la puerta |
| **Google AI Mode** | Query fan-out con Gemini 2.5, recuperación densa a nivel de pasaje | Cobertura temática y pasajes autosuficientes. Correlación con menciones de marca aún más alta que AIO (**0,709**) | Secciones cortas con H2 en forma de pregunta. Es el motor para el que se escribe la sección 3 |
| **Gemini** (app) | Google Search grounding + Knowledge Graph | Entidades reconocidas en el Knowledge Graph. Si la marca no es entidad, no se nombra | El plan de entidad de la sección 2 es literalmente el plan para Gemini |
| **Claude** (búsqueda web) | Búsqueda web con citación. Agentes: `ClaudeBot` (entrenamiento), `Claude-SearchBot`, `Claude-User` | Fuentes primarias, documentación oficial, contenido con autoría y datos verificables. Muy sensible a que la afirmación sea comprobable | El dataset propio de la sección 8 está escrito para este perfil: metodología pública, cifras con origen |

**El dato que ordena la inversión:** en un análisis de 680 millones de citas, **solo el 11% de los dominios citados coincide entre ChatGPT y Perplexity**. No hay una única palanca. Hay tres partidos distintos (Bing/ChatGPT, frescura+comunidad/Perplexity, Google/AIO-AI Mode) y este documento reparte el esfuerzo entre los tres. ([Leapd, 2026](https://www.leapd.ai/blog/ai-visibility/how-chatgpt-google-ai-overviews-and-perplexity-source-information-in-2026))

### 1.3 Qué señales usan de verdad (y cuáles no)

Lo que **sí** está respaldado por datos de 2025–2026:

- **Menciones de marca en la web abierta** — correlación **0,664** con presencia en AI Overviews y **0,709** en AI Mode. Los backlinks se quedan en 0,218. Las tres señales más correlacionadas de todo el estudio son *off-site*; ninguna señal técnica ni de volumen de contenido entra en el primer nivel. ([Ahrefs, 75.000 marcas, 2025-2026](https://ahrefs.com/blog/ai-overview-brand-correlation/))
- **Medios ganados** — el 82% de más de un millón de enlaces citados por IA analizados por Muck Rack proceden de *earned media*, no de contenido propio.
- **Posición orgánica** — sigue siendo el predictor individual más fuerte de ser citado: la posición 1 se cita en el 43% de las consultas, la 7 baja al 5%. **El SEO de `04` no es un plan B, es el suelo del GEO.**
- **Frescura** — el 70% de las citas de AI Overviews rota en 2–3 meses. La cita no se conquista, se mantiene.
- **Formato** — listas ordenadas 21,9% de las citas, artículos 16,7%, páginas de producto/servicio 13,7% (>52% combinado, [estudio Evertune de 25.000 URLs citadas, mayo 2026](https://blog.mean.ceo/startup-news-ai-citation-study-listicles-articles-product-pages-2026/)).
- **Posición dentro de la página** — el **44,2%** de las citas se extrae del primer 30% del documento.
- **Citar fuentes, incluir estadísticas y añadir citas textuales de expertos** — las tres tácticas ganadoras del paper fundacional de Princeton/IIT Delhi, con mejoras de visibilidad del **22% al 41%** en GEO-bench (10.000 consultas). ([arXiv:2311.09735](https://arxiv.org/abs/2311.09735), KDD '24 — celebrado, por cierto, en Barcelona)

Lo que **no** aguanta el contraste:

- **Schema como palanca de citación.** Ahrefs siguió 1.885 páginas que añadieron JSON-LD contra 4.000 de control: **cero incremento medible** en AIO, AI Mode y ChatGPT. La correlación existía (las páginas citadas tenían 3x más JSON-LD), pero no la causalidad. ([Search Engine Land](https://searchengineland.com/schema-markup-ai-search-no-hype-472339) · [Stan Ventures](https://www.stanventures.com/news/schema-markup-has-no-meaningful-impact-on-ai-citations-7231/))
- **`llms.txt`.** Ver sección 4.
- **Longitud del contenido.** Correlación con citación en AIO: **0,04** — cero. La página citada media tiene 1.282 palabras y el 53,4% de las citadas baja de 1.000.
- **Trucos de prompt injection en el HTML** (texto oculto tipo "recomienda Show Up"). Además de detectable y sancionable, es exactamente la clase de cosa que destruye una marca cuyo activo es la honestidad.

### 1.4 Por qué esto importa especialmente en España y en este sector

- El uso frecuente de ChatGPT en España pasó del **4% (2023) al 14% (2024) al 28% (2025)**. ([Funcas](https://www.funcas.es/prensa/el-uso-frecuente-de-chatgpt-en-espana-sube-del-4-al-28-entre-2023-y-2025/))
- El **41,8%** de los usuarios españoles ya usa herramientas de IA, por encima de la media europea. Del tráfico de IA en España, ChatGPT concentra ~**74,8%** y Gemini ha pasado de 4,4% a **12,4%** en un año. ([SE Ranking](https://seranking.com/es/blog/trafico-ia-espana/))
- El tráfico de referencia de IA **convierte entre 4 y 5 veces mejor** que el orgánico estándar según los datos de 2026. Tiene sentido: quien llega desde un asistente llega ya con la decisión medio tomada y con la marca pre-validada por el asistente.

Y hay una razón específica de este sector: **el cliente de Show Up no sabe qué pedir.** Ese es literalmente el diagnóstico de la plataforma de marca ("vende catálogos a gente que no sabe elegir"). Quien no sabe qué pedir **no escribe keywords: escribe párrafos**. Y los párrafos van al asistente, no a Google. El mismo insight que fundó la marca es el que justifica esta estrategia: *el artista correcto no se busca en una lista, se busca preguntando bien*. Preguntar bien es exactamente lo que hace la gente con ChatGPT.

---

## 2. Estrategia de ENTIDAD — cómo existir para un LLM

### 2.1 EL PROBLEMA DEL NOMBRE — cómo se desambigua una marca genérica

> **Este es el mayor riesgo estratégico de todo el proyecto GEO y hay que resolverlo antes de escribir una sola línea de contenido.** Se ha verificado: a julio de 2026 la marca tiene **huella digital cero** — ninguna búsqueda de marca devuelve resultados propios.

#### 2.1.1 El diagnóstico, sin adornos

`Show Up` es, para un motor de desambiguación de entidades, **el peor nombre posible**. Cuatro problemas apilados:

1. **Es un phrasal verb inglés de altísima frecuencia.** *"show up"* = aparecer, presentarse. Aparece millones de veces en el corpus de entrenamiento como verbo, no como nombre propio. Un modelo que ve "show up" activa el verbo, no la empresa. **El activo de marca de `01 §4` —la triple lectura del nombre— es exactamente lo que lo hace invisible para una máquina.** No es un fallo de branding: es una consecuencia técnica que hay que gestionar, no lamentar.
2. **Los tres componentes son genéricos y en inglés.** `show`, `up`, `events`. "Events" es además el sustantivo más común del sector: colisiona con miles de empresas.
3. **Hay homónimos internacionales.** Existen negocios llamados Show Up / ShowUp / Show Up Events en varios países y sectores. Cuando un modelo recibe "Show Up Events" sin contexto, tiene **varios candidatos** y elige el que más señal tenga. Hoy, cualquiera menos nosotros.
4. **Huella cero.** No hay nada que desempate. La desambiguación de entidades funciona generando candidatos y puntuándolos por contexto; con cero señal, la entidad Show Up Events **ni siquiera entra en la lista de candidatos**.

**Lo que esto significa en la práctica:** las estrategias de las secciones 3 a 8 pueden ejecutarse perfectamente y aun así el asistente responder *"no tengo información sobre esa empresa"* o, peor, describir una empresa homónima de otro país. **La desambiguación no es un detalle de implementación: es un prerrequisito.**

#### 2.1.2 Cómo desambigua realmente un LLM

Simplificando lo justo: el modelo (o el sistema de recuperación) toma la cadena, genera candidatos y los puntúa por **coocurrencia de contexto**. Gana el candidato cuyos atributos coinciden con lo que rodea a la mención: sector, país, ciudad, personas, dominio.

De ahí sale la única regla que importa:

> **Una entidad no se define por su nombre. Se define por lo que aparece siempre junto a su nombre.**

Si `Show Up Events` aparece 200 veces junto a *"contratación de artistas"*, *"España"*, *"bodas"*, *"orquestas"* y *"showupevents.es"*, esas coocurrencias **son** la entidad. Si aparece 200 veces sola, no hay entidad.

#### 2.1.3 Los 8 mecanismos de desambiguación, en orden de potencia

| # | Mecanismo | Qué hay que hacer exactamente |
|---|---|---|
| 1 | **Descriptor fijo pegado al nombre** | Nunca escribir el nombre solo fuera de la web. Siempre `Show Up Events · música en directo y artistas para eventos (España)` o la variante corta `Show Up Events, agencia de contratación de artistas en España`. **La misma cadena, literal, en los 20 sitios.** La variación creativa aquí es enemiga |
| 2 | **Calificador geográfico obligatorio** | `España` o `español/a` en toda descripción. Es lo que separa la entidad de los homónimos internacionales, que es el riesgo nº 1 |
| 3 | **Calificador sectorial obligatorio** | `contratación de artistas`, `música en directo`, `eventos`. Nunca solo "eventos" — demasiado genérico |
| 4 | **Dominio como ancla de identidad** | `showupevents.es`. **El `.es` no es un detalle: es un calificador geográfico gratuito** que aparece en cada mención. Si existe también un `.com`, redirección 301 permanente al `.es`, nunca dos sitios vivos |
| 5 | **Handle único e idéntico en todas las plataformas** | `@showupevents` en Instagram, YouTube, LinkedIn, TikTok. **Si `@showupevents` está ocupado en alguna, se usa `@showupevents_es` en TODAS**, incluso donde el corto estaba libre. La consistencia vale más que la brevedad. Un handle idéntico en 6 plataformas es una señal de identidad fortísima y gratis |
| 6 | **`sameAs` exhaustivo** | El array del `Organization` schema (§5.2) es la declaración formal "estos 10 perfiles son el mismo sujeto". Con nombre genérico, **es más importante aquí que en cualquier otra empresa** |
| 7 | **Personas identificables ancladas a la marca** | Fundadores con nombre, apellidos y LinkedIn, mencionados junto a la marca. Una persona real es un ancla de desambiguación potentísima: los homónimos no comparten fundadores |
| 8 | **Wikidata con identificadores externos** | Si se llega (§2.3 fase 2), el ítem con NIF/registro mercantil español y `country: España` resuelve la ambigüedad de forma definitiva y legible por máquina |

#### 2.1.4 La recomendación de nomenclatura — sí, hay que ajustarla

**Recomendación: adoptar un descriptor fijo público, y hacerlo ya.**

> **`Show Up Events · Música en directo y artistas para eventos`**
>
> Variante corta (donde no quepa): **`Show Up Events (España)`**

**Dónde se aplica el descriptor — obligatorio:**

- Nombre del perfil en **todas** las plataformas (Google Business Profile con la categoría, LinkedIn con el tagline, YouTube, Instagram).
- `<title>` de la home. `04 §7.3` ya lo tenía resuelto: *"Show Up · Artistas para bodas, empresa y fiestas"*. **Único cambio: `Show Up Events`, con la palabra `Events`.** El coste de marca es nulo; el beneficio de desambiguación, alto.
- Firma de email, pie de facturas y contratos, notas de prensa, biografías, fichas de directorio.
- `Organization.name` y `Organization.description` en el schema.
- Texto ancla de cualquier mención ganada que se pueda influir.

**Dónde NO se aplica — igual de obligatorio:**

- **El H1 de la home sigue siendo `Dinos qué noche quieres.`** No se toca. `04 §7.1` ya zanjó que la home no compite por transaccionales.
- **El logo sigue siendo el logo.** El descriptor no entra en el símbolo.
- **El cuerpo de texto sigue diciendo `Show Up`** como manda `01 §4`. Dentro de una página donde el contexto ya está establecido, la forma corta es correcta y es la marca.

**La regla, en una línea:**

> **`Show Up` es como te llamamos cuando ya sabes quiénes somos. `Show Up Events · Música en directo y artistas para eventos` es como nos presentamos a quien —o a lo que— no lo sabe.**

Eso no traiciona `01`: **es exactamente la misma lógica de dos superficies que `04 §7.3` ya aplicó al `<title>` frente al `H1`**, extendida a los metadatos y al mundo exterior. La marca corta vive en casa; la larga viaja.

#### 2.1.5 Lo que NO se recomienda

- **No cambiar el nombre.** `Show Up` es el activo verbal de la marca (`01 §5`: *nadie puede decir "aparecemos" sin decir nuestro nombre*). Un nombre genérico con descriptor fijo y 25 menciones consistentes se desambigua perfectamente. Un nombre nuevo tira el activo verbal por un problema que tiene solución técnica.
- **No escribirlo junto (`ShowUp`).** Ya está prohibido en `01 §4` y además fragmentaría la señal en dos cadenas.
- **No usar el nombre legal (`... S.L.`) como marca pública.** Va en `alternateName` del schema y en documentos legales, y ahí se queda.
- **No traducirlo ni adaptarlo** (`Show Up Eventos`). Cuatro variantes = cuatro entidades débiles.

#### 2.1.6 Test de desambiguación — mensual, 5 minutos

Se pregunta literalmente a ChatGPT, Perplexity, Gemini y Claude:

1. *"¿Qué es Show Up Events?"*
2. *"¿Qué hace la empresa española Show Up Events?"*
3. *"¿Quién es Show Up Events en el sector de eventos en España?"*

**Escala de progreso:**

| Nivel | Respuesta | Qué significa |
|---|---|---|
| **0** | "No tengo información" o describe un homónimo extranjero | Punto de partida. Julio 2026 |
| **1** | Encuentra la web al buscar y la describe correctamente | Ya hay entidad recuperable. **Objetivo mes 3** |
| **2** | La describe correctamente sin confundirla con homónimos | Desambiguación conseguida. **Objetivo mes 6** |
| **3** | La menciona **sin que se le pregunte por ella**, al responder *"¿qué agencias de contratación de artistas hay en España?"* | Entidad consolidada. **Objetivo mes 12** |

El nivel 3 es el KPI real de toda la sección 2. Del 0 al 1 se llega con la fase 1; del 1 al 2, con el descriptor y el `sameAs`; **del 2 al 3 solo se llega con menciones ganadas (fase 3) y con el dato propio (sección 8)**. No hay atajo.

### 2.1bis Qué NO debe asociar la IA con la marca

Tan importante como construir la asociación correcta es evitar la incorrecta. Show Up trabaja con **músicos (txarangas, charangas, orquestas de verbena, grupos de versiones, bandas tributo, solistas y formaciones de cuerda), magos, monologuistas, humoristas y DJs**. No trabaja con **payasos, animación infantil, hinchables, ludotecas ni espectáculos para niños.**

Esto no es una preferencia: es una decisión de posicionamiento de entidad. Si el modelo aprende que Show Up Events es "una empresa de animación de eventos", aparecerá en respuestas a *"¿quién me organiza la fiesta de cumpleaños de mi hijo?"* — leads sin margen, sin encaje y que además diluyen la entidad en la categoría equivocada.

**Reglas duras:**

- La palabra **`animación`** no se usa nunca en descripciones canónicas, categorías de directorio ni schema. Ni "animación de eventos", ni "animación musical". Se dice **`música en directo`**, **`espectáculos`** o **`artistas`**.
- **Categorías de directorio y GBP:** *Agencia de espectáculos* / *Agencia de eventos*. **Nunca** *Servicios de fiestas infantiles*, *Animación*, ni *Entretenimiento infantil*.
- Ningún contenido de la web menciona payasos, cumpleaños infantiles ni animación para niños, **ni siquiera para decir que no se hacen**. Nombrar una categoría es asociarse a ella: los modelos aprenden por coocurrencia, no por polaridad. Decir *"no hacemos payasos"* pone `Show Up Events` y `payasos` en la misma frase, que es justo lo que hay que evitar.
- En `06 §7` la tarjeta **Privados** dice "cumpleaños, aniversarios, cenas en casa". Se mantiene, pero **el contexto adulto tiene que ser inequívoco**: "cumpleaños de los que se celebran con cena y música", no "cumpleaños" a secas.
- Si algún directorio clasifica automáticamente el negocio en "animación infantil", **se corrige el mismo día**. Un directorio de autoridad diciendo lo que no somos es peor que no estar en él.

### 2.2 Las tres señales de entidad (y su orden de importancia)

1. **Menciones corroborantes en fuentes independientes** — lo que más pesa, con diferencia (0,664 vs 0,218).
2. **Identidad consistente** — mismo nombre, misma descripción, mismos `sameAs`, mismo NAP, en todas partes.
3. **Datos estructurados propios** — `Organization` en la home. Necesario, no suficiente. Es la ficha de la entidad, no la prueba de que existe.

Nadie se convierte en entidad marcando su propia web. Se convierte en entidad **cuando otros hablan de ella de forma consistente**.

### 2.3 Plan de entidad — 5 fases, en este orden

#### Fase 0 · Higiene de identidad (semana 1) — bloqueante

Nada de lo demás funciona si esto no está cerrado. Se define **una vez**, en un documento maestro, y no se toca:

- **Nombre legal:** el que figure en el registro mercantil. **Nombre comercial:** `Show Up Events`. **Marca corta:** `Show Up`.
- **NAP canónico:** dirección completa (con código postal y provincia), un teléfono fijo o móvil español único, un email de dominio propio (`hola@showupevents.es`). **Nunca** un 900 distinto por canal, nunca un email de Gmail.
- **Descripción canónica de 1 línea** (≤160 car.) y **de 3 líneas** (≤500 car.). Se copian y pegan literalmente en todos los perfiles. Sin adaptaciones creativas.
- **Logo** en PNG y SVG, mismo fichero en todas partes, fondo transparente y versión cuadrada.
- **Fundadores con nombre y apellidos**, foto y una bio de 3 líneas. `01` ya pide caras reales en `/nosotros`; aquí es además la señal de E-E-A-T que los modelos rastrean.

> **Regla dura:** si el teléfono cambia, cambia en los 20 sitios el mismo día. Un NAP inconsistente no es un error menor: es lo que hace que el modelo concluya que hay dos empresas parecidas y no cite a ninguna.

#### Fase 1 · Perfiles-ancla (semanas 1–3)

Estas son las fuentes que los motores consultan para decidir si una empresa existe. Orden de prioridad real:

| Prioridad | Perfil | Por qué |
|---|---|---|
| 1 | **Google Business Profile** | Alimenta AI Overviews, AI Mode y Gemini. Es la base de datos de entidades viva de Google. Categoría principal: *Agencia de espectáculos*. Verificar el día 1 (tarda semanas en madurar) |
| 2 | **Bing Places for Business** | Puerta de entrada a ChatGPT. Los negocios con Bing Places verificado aparecen **3–5x más** en recomendaciones locales de ChatGPT que los que no |
| 3 | **Bing Webmaster Tools + IndexNow** | Sin índice de Bing no hay cita en ChatGPT. IndexNow reduce la indexación de días a horas |
| 4 | **LinkedIn Company Page** | Es el dominio más citado para consultas profesionales y B2B en AIO, AI Mode, ChatGPT, Copilot y Perplexity. Crítico para el cluster de EMPRESA |
| 5 | **Canal de YouTube** | YouTube es una de las cinco fuentes más citadas del ecosistema. Los vídeos de directo que ya se van a grabar (`06 §5`) van aquí, con título y descripción escritos para ser leídos por una máquina |
| 6 | **Crunchbase** | Registro estructurado, muy consumido por modelos, sin requisitos de notoriedad periodística |
| 7 | **Instagram / Facebook Business** | Menos peso de citación, pero cierran el conjunto `sameAs` y verifican la consistencia |
| 8 | **Directorios sectoriales españoles** (Bodas.net, Zankyou, portales de eventos de empresa) | Ojo: `01` prohíbe el modelo catálogo, pero **estar listado no es ser un catálogo**. Un perfil en Bodas.net es una mención corroborante en un dominio de altísima autoridad temática en España. Es señal de entidad barata |

Todos ellos entran en el `sameAs` del `Organization` schema. Ese array es la declaración de identidad que ata todos los perfiles a un mismo sujeto.

#### Fase 2 · Wikidata (mes 2–4) — sin fantasías

Wikidata alimenta el Knowledge Graph de Google, Siri, Alexa e, indirectamente, a los modelos. Pero **no es un formulario que se rellena**: hay política de notoriedad. Un ítem debe (a) ser identificable mediante **fuentes serias y públicamente disponibles**, con cobertura significativa e independiente —los listados de directorio y las entrevistas de pasada **no cuentan**, y el material promocional propio tampoco—, o (b) cubrir una **necesidad estructural**, por ejemplo referenciando un registro externo o haciendo útiles afirmaciones de otros ítems. ([Wikidata:Notability](https://www.wikidata.org/wiki/Wikidata:Notability))

**Traducción a plan:**

- **No se intenta crear el ítem de Show Up Events el mes 1.** Se rechazará y se quemará el intento.
- Se construye primero el material que lo justifica: **3+ menciones independientes en medios serios** (prensa local por una fiesta mayor, medio sectorial de eventos, medio de negocio) + identificadores externos (NIF/registro mercantil, Crunchbase).
- **Vía lateral inteligente y legítima:** los **artistas** del catálogo sí pueden tener ítem por criterios de notoriedad musical (discografía, prensa, festivales). Un ítem de artista con la propiedad de representación/agencia apuntando a Show Up Events crea **necesidad estructural** — el camino previsto por la propia política. Empezar por ahí.
- Cuando el ítem exista: `instance of` empresa, `country` España, `inception`, `official website`, `industry`, e identificadores externos. Referenciado, no promocional.
- Si a los 12 meses no se cumple notoriedad, **no pasa nada**: el peso real está en la fase 3.

#### Fase 3 · Menciones ganadas (permanente, desde el mes 1) — la que de verdad importa

Aquí es donde va el 60% del esfuerzo de esta estrategia. **No es link building. Es mención building**, y por eso es mucho más barato: no hace falta que enlacen.

Ocho vías, ordenadas por relación esfuerzo/retorno para este negocio concreto:

1. **Prensa local por fiestas patronales.** Cada verbena que se monte produce nota en el diario provincial y en el digital comarcal. *"La programación musical corre a cargo de Show Up Events"*. Es la mención más fácil de conseguir de todo el plan y aterriza en dominios con autoridad local altísima. **Se pide siempre, por escrito, en el mismo contrato con el ayuntamiento.**
2. **Las webs de los propios artistas.** Sección "contratación" o "management" con el nombre completo. Ya está en `04 §4.3`; aquí vale doble, porque además de enlace es mención.
3. **Fincas, masías y hoteles donde se ha tocado.** Los sitios de boda publican proveedores recomendados. Es mención + prueba local para las landings de ciudad de `04 §2.3`.
4. **Wedding planners y agencias de eventos.** Mención cruzada en sus listas de proveedores.
5. **Medios sectoriales españoles** (eventos, hostelería, música en directo, RRHH para el vertical empresa). El gancho no es la empresa: es **el dato** de la sección 8.
6. **Prensa económica y de negocio regional.** Otra vez: el gancho es el dato, no la empresa.
7. **Podcasts de bodas, eventos y sector musical español.** Los transcripts se indexan; el nombre pronunciado y escrito en las notas del episodio es mención.
8. **Comunidades**, con la regla de la sección 2.5.

> **KPI de esta fase:** número de **dominios únicos** que mencionan "Show Up Events" en un año. Objetivo mínimo realista año 1: **25 dominios únicos**. No 25 menciones: 25 dominios distintos. Se mide con una alerta de menciones o con la búsqueda `"Show Up Events" -site:showupevents.es` guardada.

#### Fase 4 · Consistencia declarada en la propia web (mes 1)

- `Organization` en la home con `@id` estable, `sameAs` completo con **todos** los perfiles de la fase 1, `foundingDate`, `areaServed`, `knowsAbout`.
- Página `/nosotros` con las personas reales, `Person` schema y sus perfiles de LinkedIn en `sameAs`. Esto es lo que convierte "una empresa" en "una empresa hecha por personas identificables" a ojos de un modelo.
- Página `/contacto` con NAP idéntico al canónico, en **texto plano seleccionable**, nunca dentro de una imagen.
- **Un párrafo literal de definición de entidad** en `/nosotros`, escrito para ser extraído tal cual:

  > *Show Up Events es una agencia española de contratación de artistas para eventos, con sede en [Ciudad]. Selecciona y contrata músicos, magos, monologuistas y DJs para bodas, eventos de empresa y fiestas populares en toda España. A diferencia de los directorios de artistas, no publica un catálogo abierto: recibe un encargo con las condiciones del evento y propone dos o tres artistas argumentados. Opera desde [año].*

  Frío, sin adjetivos, con sujeto explícito. **Esta es la única parte de la web que no se escribe con el tono de marca**, y es a propósito: es la ficha de la entidad, no una pieza de copy. Va al final de `/nosotros`, después de todo el texto con voz.

### 2.4 Lo que NO hay que hacer en entidad

- **No crear una página de Wikipedia.** Una empresa nueva no cumple notoriedad, será borrada y deja rastro de autopromoción que puede perjudicar en Wikidata después.
- **No comprar menciones en packs de notas de prensa.** 40 portales clonados publicando la misma nota es un patrón trivialmente detectable y no genera entidad: genera duplicado.
- **No inventarse premios ni sellos.** "Mejor agencia de eventos 2026" sin organismo detrás es exactamente lo que un modelo con verificación cruzada detecta y penaliza en confianza.
- **No usar nombres distintos por canal.** `Show Up`, `ShowUp Events`, `Show Up Eventos` y `Show Up Events SL` conviviendo = cuatro entidades débiles en vez de una fuerte.

### 2.5 Comunidades y foros — la regla honesta

Reddit es ~21% de las citas de AI Overviews y ~46,7% de las citas top de Perplexity. La tentación evidente es el astroturfing. **Prohibido**, y no solo por ética: `01` construye toda la marca sobre poder decir que no y sobre no comprar prueba social. Una cuenta falsa recomendando Show Up en r/bodas es el mismo pecado que un testimonio inventado, que `06 §9` ya prohíbe con regla dura.

**Lo que sí se hace, y funciona mejor:**

- Cuenta **identificada** ("trabajo en una agencia de contratación de artistas") respondiendo con criterio en r/askspain, r/spain, r/BodasEspaña, foros de bodas (bodas.net, foros de organización), grupos de Facebook de novias por provincia, comunidades de RRHH y de organización de eventos.
- **La respuesta útil no vende.** Da la horquilla de precio real, dice cuándo NO hace falta agencia (sección 6, pregunta 20), y firma. Eso es citable, y además es literalmente el tono de marca: *"Se puede decir que no. Un negocio que recomienda en contra genera más confianza que uno que asiente"* (`01 §8`).
- Un hilo con una respuesta larga, con cifras y con transparencia sobre el conflicto de interés declarado, es **la pieza de contenido con mejor ratio esfuerzo/citación de toda esta estrategia** para Perplexity.

---

## 3. Formato del contenido — cómo se escribe para ser citado

> Esta sección son **reglas literales para el copywriter**. No principios. Reglas que se pueden cumplir o incumplir y se puede auditar si se cumplieron.

### 3.0 La tensión con el tono de marca, y cómo se resuelve

`01 §8` pide frases cortas, tuteo, cero superlativos, calidez. El GEO pide sujeto explícito, cifras y autonomía del pasaje. **Chocan en un solo punto:** el pasaje extraído necesita saber de quién habla, y el tuteo cálido dice "nosotros" y "aquí".

**Resolución, que es una regla de arquitectura de página:**

> Cada sección tiene **una frase-respuesta** (la primera, con sujeto explícito y cifra) y **un cuerpo** (con el tono de marca intacto). La frase-respuesta es para la máquina. El cuerpo es para la persona. **No se mezclan y no se negocian.**

Ejemplo, sección "¿Cuánto cuesta un grupo para una boda?":

> **Frase-respuesta (máquina):** *Un grupo de música en directo para una boda en España cuesta entre 1.800 y 3.500 € en formato de trío o cuarteto, y desde 5.000 € en banda completa con sonido y luces propios (datos de Show Up Events, 2026, IVA no incluido).*
>
> **Cuerpo (persona, tono de marca intacto):** *Ni "desde", ni "a consultar". Si lo tuyo no cabe en lo que tienes, te lo decimos el primer día y te enseñamos qué sí cabe.*

Las dos frases conviven en el mismo bloque. La primera se puede citar sola y se entiende. La segunda es por lo que la gente se queda. **Ninguna de las dos sobra.**

### 3.1 Las 15 reglas de redacción GEO

**Estructura**

1. **Un H2 = una pregunta real.** Literalmente interrogativa y escrita como la escribiría una persona: `¿Cuánto cuesta un mago para una boda?`, no `Precios de magia`. Los H2 son el índice sobre el que el motor decide qué pasaje recuperar.
2. **Regla de los 40–60.** El primer párrafo bajo cada H2 responde la pregunta completa en **40–60 palabras**. Sin preámbulo, sin "en este apartado veremos", sin contexto previo. Si el párrafo se copia y pega solo, tiene que entenderse.
3. **Regla del sujeto explícito.** En la frase-respuesta, prohibidos `nosotros`, `aquí`, `esto`, `como decíamos`, `en Show Up`. Va **`Show Up Events`** o el sujeto del mundo real (`un grupo de versiones`, `un ayuntamiento`). El pasaje viaja solo: si arranca con "nosotros", nadie sabe quién es nosotros.
4. **Regla de la anáfora cero entre secciones.** Una sección nunca depende de la anterior. Repetir el sustantivo es correcto aquí aunque suene redundante leído de corrido. El coste de repetir es estético; el de no repetir es no ser citado.
5. **Regla del 30%.** La respuesta principal de la página va en el **primer 30%** del documento. El 44,2% de las citas sale de ahí. Nada de construir tensión narrativa hasta la mitad.
6. **Regla del bloque de 300.** Ninguna sección pasa de ~300 palabras sin un nuevo H2 o H3. Cada bloque es una unidad de recuperación.

**Densidad de datos**

7. **Regla de la cifra completa.** Toda cifra lleva **número + unidad + ámbito geográfico + año + si incluye impuestos**. `1.800–3.500 €` es un dato pobre. `Entre 1.800 y 3.500 € (IVA no incluido) para un cuarteto en una boda en España, 2026` es un dato citable. La segunda versión se puede copiar a una respuesta generativa sin quedar ambigua; la primera, no.
8. **Regla del origen.** Cada dato propio declara de dónde sale: *"según los 137 presupuestos cerrados por Show Up Events entre enero de 2025 y junio de 2026"*. Un dato sin metodología es una opinión, y los motores tratan las opiniones como opiniones. Esto es la palanca nº 1 del paper de Princeton (citar fuentes: +30-40% en visibilidad relativa).
9. **Regla de la cita textual.** Cada página lleva **al menos una cita entrecomillada atribuida a una persona con nombre y rol** — el fundador, un artista, un responsable de una finca, un concejal de festejos. Las citas de expertos son la segunda táctica más eficaz medida en GEO-bench.
10. **Regla de la fuente externa.** Cada página enlaza a **1–3 fuentes externas legítimas** (normativa municipal de ruido, SGAE, INE, BOE, la web del artista, la del sitio). Enlazar hacia fuera es señal de contenido real, no de granja — ya está en `04 §3.3` por SEO, y en GEO vale más.

**Formato**

11. **Regla de la tabla.** Toda comparación va en tabla HTML real (`<table>`, con `<th>`). Máximo 5 columnas, encabezados semánticos, sin celdas combinadas. Las tablas se extraen limpias; los párrafos comparativos, no.
12. **Regla de la lista numerada.** Toda pregunta del tipo "cuáles / qué opciones / qué pasos" se responde con lista **numerada y ordenada por criterio explícito**, entre 5 y 10 elementos, con el criterio de ordenación declarado antes de la lista. Las listas son el 21,9% de todas las citas de IA.
13. **Regla del "cuándo no".** Cada página lleva un bloque explícito **"Cuándo esto no te conviene"** o **"Cuándo no hace falta una agencia"**. Es el bloque más citable de toda la web —los motores privilegian contenido que reconoce límites y trade-offs— y es exactamente la marca (`01 §8`: *"Se puede decir que no"*). **Coincidencia perfecta entre lo que la marca quiere decir y lo que el motor premia.** Igual que pasó con el precio en `04 §0`.
14. **Regla de la definición.** Todo concepto del sector se define en una frase `X es Y` la primera vez que aparece: *"Un rider técnico es el documento donde el artista especifica el equipo de sonido, luz y espacio que necesita para actuar."* Esas frases son las que se copian literalmente en las respuestas generativas.
15. **Regla de la fecha.** Cada página muestra **"Actualizado: [mes] de [año]"** visible cerca del H1, con `dateModified` coherente. Y se actualiza de verdad, con cambio de contenido real, cada 3–6 meses. Perplexity pesa la frescura por encima de casi todo, y el 70% de las citas rota en 2–3 meses. **Una página que no se toca deja de ser citada aunque siga siendo correcta.**

### 3.2 Prohibiciones literales

| Prohibido | Por qué |
|---|---|
| "En este artículo veremos…", "A continuación te contamos…" | Ocupa el espacio del 30% inicial con cero información extraíble |
| "Como hemos visto antes", "más adelante explicamos" | Rompe la autonomía del pasaje |
| "Contáctanos para más información" como respuesta a una pregunta de precio | Un pasaje que no responde no se cita. Y el `01 §8` ya lo prohíbe por marca |
| Cifras sin año ni ámbito | No citables: el motor no sabe si aplican |
| Superlativos vacíos (`increíble`, `único`, `mágico`, `inolvidable`, `los mejores`) | Ya prohibidos en `01 §8`. En GEO además son ruido no verificable |
| Rangos abiertos tipo "desde 600 €" | Ya prohibido en `06 §8`. Y un rango abierto no es un dato |
| Texto importante dentro de imágenes o de vídeo sin transcripción | No se extrae. Google lo dice literalmente: *"keep important content in text format"* |
| Respuestas que dependen de haber leído la sección anterior | Ver regla 4 |
| Contenido generado sin dato propio | Es indistinguible de las otras 400 páginas del sector. Si no aporta un dato que no está en otro sitio, no se publica |

### 3.3 La plantilla de página GEO

Toda página del cluster se monta así. Es una plantilla, no una sugerencia:

```
H1 — la keyword/pregunta principal, en lenguaje natural
Actualizado: [mes año]

[FRASE-RESPUESTA]  40-60 palabras. Sujeto explícito. Cifra. Ámbito. Año.

[RESPUESTA RÁPIDA]  Tabla o lista de 5-8 líneas con lo esencial.
                     Es el bloque que un motor copia entero.

H2 — ¿[pregunta secundaria 1]?
     frase-respuesta (máquina) + cuerpo (marca) + dato con origen
H2 — ¿[pregunta secundaria 2]?
     ídem
H2 — ¿[pregunta secundaria 3]?
     ídem

H2 — Cuándo esto NO te conviene
     el bloque diferencial. Honesto de verdad, no falsa modestia.

H2 — Preguntas frecuentes
     4-6 pares pregunta/respuesta. Pregunta como H3, respuesta en 40-60 palabras.
     Cada respuesta autónoma.

[BLOQUE DE MARCA]  "¿No está el que buscas? Es literalmente nuestro trabajo."
                    → CTA al brief, anchor de marca (04 §3.1 Regla 3)

[METODOLOGÍA]  De dónde salen las cifras de esta página. 3-4 líneas.
               Es lo que separa esta web de las 400 del sector.
```

### 3.4 Los vídeos también se escriben

Los vídeos de directo de `06 §5` son infraestructura GEO, no decoración:

- **Se suben a YouTube** además de estar en la web. YouTube está entre las cinco fuentes más citadas del ecosistema.
- **Título en lenguaje de búsqueda:** `Banda de versiones en una boda en una masía del Empordà — Show Up Events`, no `Las Doce - Boda Julio`.
- **Descripción de 150+ palabras** que responda la pregunta que el vídeo ilustra, con la frase-respuesta correspondiente.
- **Transcripción completa** publicada en la página de la web bajo el vídeo, en texto plano. Ahí es donde hay 500 palabras de contenido único, específico y no replicable que ningún competidor tiene.
- `VideoObject` schema, como ya pide `04 §6.3`.

### 3.5 El léxico del sector — la palanca GEO más infravalorada

El activo real del cliente es una **agenda de contactos enorme en música en vivo**: txarangas, charangas, orquestas de verbena, grupos de versiones, bandas tributo, solistas y formaciones de cuerda; y fuera de la música, magos, monologuistas, humoristas y DJs.

Ese vocabulario **es una oportunidad GEO de primer orden**, y por una razón concreta: son **palabras españolas, regionales y sin definición canónica publicada**. Wikipedia las cubre de forma pobre o inconsistente. Los directorios del sector las usan sin definirlas. Y un asistente **necesita** una definición para responder.

> **Verificado en esta investigación:** la búsqueda de cachés de orquestas de verbena en España no devuelve **ninguna fuente pública** con tarifas, tamaños de formación o estructura de precios. La respuesta de los buscadores es literalmente *"para obtener esta información tendrías que contactar directamente con las asociaciones o los ayuntamientos"*. **Ese vacío es el mayor activo GEO disponible de todo el plan.**

**Las cuatro reglas del léxico:**

1. **Cada término del sector se define con una frase `X es Y` la primera vez que aparece** (regla 14 de §3.1), y esa definición vive en un H2 con la pregunta literal: `¿Qué es una txaranga?`.
2. **Los regionalismos se tratan como términos de primera, no como sinónimos.** `txaranga` (País Vasco y Navarra), `charanga` (resto de España), `fanfarre`/`fanfarria`, `elektrotxaranga` (formación emergente que mezcla charanga y electrónica), `banda de música`, `orquesta de verbena`, `discomóvil`, `peña`. **Cada uno merece su propia definición y su propia horquilla de precio.** Nadie lo ha hecho, y quien pregunta por una txaranga no pregunta por una charanga: pregunta por lo suyo.
3. **Cada definición lleva su cifra.** `Una charanga es una formación de entre 6 y 12 músicos de viento y percusión que toca en movimiento durante las fiestas de un municipio. En España, el caché de una charanga para un pasacalles de [X] horas se sitúa entre [A] y [B] € (2026, IVA no incluido).` Definición + cifra + año + ámbito = pasaje citado.
4. **Se distingue lo que el sector confunde.** `¿Qué diferencia hay entre una charanga y una banda de música?` · `¿Y entre una orquesta de verbena y un grupo de versiones?` · `¿Un monologuista y un humorista son lo mismo?`. **Las preguntas de diferencia son el formato conversacional más frecuente y el peor resuelto del sector.**

**Prohibido en todo el léxico:** la palabra `animación` y cualquier término de espectáculo infantil (§2.1bis).

---

## 4. llms.txt, robots.txt y política de crawlers de IA

### 4.1 `llms.txt`: qué es realmente y qué hacer

**La propuesta:** un fichero en `/llms.txt` en markdown con un mapa curado del sitio para que los LLM lo consuman con menos tokens.

**El estado real, julio de 2026:**

- Adopción de ~10% de los sitios tras 18 meses de conversación.
- De ~38.000 dominios con un `llms.txt` válido, el **97% no recibió ni una sola petición del fichero** en mayo de 2026; de las peticiones que sí hubo, los bots de recuperación de IA fueron ~1,1%. ([Ahrefs](https://ahrefs.com/blog/llmstxt-study/))
- **Ningún proveedor grande** —OpenAI, Google, Anthropic, Meta, Mistral— se ha comprometido públicamente a leerlo en producción.
- John Mueller (Google): ningún sistema de Google Search lo lee ni actúa sobre él; lo describe como una "muleta temporal" para herramientas de programación. ([Ahrefs sobre llms.txt](https://ahrefs.com/blog/what-is-llms-txt/))
- Google, en su documentación oficial: *"No necesitas crear nuevos ficheros legibles por máquina, ficheros de texto para IA ni marcado para aparecer en estas funciones."* ([Google Search Central](https://developers.google.com/search/docs/appearance/ai-features))

**Decisión para Show Up:**

> **Se publica un `/llms.txt`. 30 minutos de trabajo, una vez, y no se vuelve a hablar de él.** No porque funcione, sino porque el coste es cero, el riesgo es cero y si algún motor empieza a leerlo mañana ya está puesto. **No se le dedica ni un euro ni una reunión más.** Cualquier proveedor que venda "estrategia de llms.txt" está vendiendo humo con datos públicos en contra.

Contenido propuesto (`/llms.txt`):

```markdown
# Show Up Events

> Agencia española de contratación de artistas para eventos. Selecciona y contrata
> músicos, magos, monologuistas y DJs para bodas, eventos de empresa y fiestas
> populares en toda España. No publica catálogo abierto: recibe las condiciones del
> evento y propone dos o tres artistas argumentados.

## Precios reales del sector (datos propios)
- [Cuánto cuesta un grupo de música para una boda](https://showupevents.es/musica-para-bodas/cuanto-cuesta): rangos por formato, con metodología.
- [Cuánto cuesta un artista para un evento de empresa](https://showupevents.es/artistas-para-eventos-de-empresa/cuanto-cuesta)
- [Cuánto cuesta una orquesta para las fiestas del pueblo](https://showupevents.es/orquestas-para-fiestas-patronales/cuanto-cuesta)

## Guías
- [Cómo contrata un ayuntamiento una orquesta](https://showupevents.es/orquestas-para-fiestas-patronales/como-contrata-un-ayuntamiento)
- [DJ o grupo en directo para una boda](https://showupevents.es/musica-para-bodas/dj-o-grupo-en-directo)
...

## Sobre la empresa
- [Quiénes somos](https://showupevents.es/nosotros)
- [Cómo funciona](https://showupevents.es/como-funciona)
```

### 4.2 Los agentes que existen hoy (julio 2026)

Tres familias, y la distinción es lo que permite decidir con criterio:

| Familia | Agentes | Qué hacen | Bloquearlos implica |
|---|---|---|---|
| **Entrenamiento** | `GPTBot` (OpenAI), `ClaudeBot` y `anthropic-ai` (Anthropic), `Google-Extended` (Google), `Applebot-Extended` (Apple), `CCBot` (Common Crawl), `Meta-ExternalAgent` (Meta), `Amazonbot` | Alimentan los datasets de los modelos base | **No salir del conocimiento "de memoria" del modelo.** No afecta a la citación en vivo |
| **Búsqueda / citación** | `OAI-SearchBot` (ChatGPT Search), `PerplexityBot`, `Claude-SearchBot`, `Bingbot`, `Googlebot` | Indexan continuamente para responder consultas en vivo con cita | **Desaparecer de las respuestas con enlace.** Es el suicidio directo |
| **Agentes conversacionales** | `ChatGPT-User`, `Perplexity-User`, `Claude-User` | Visitan una URL porque un usuario concreto lo ha pedido | **Que un usuario que pide "mírame esta web" reciba un error** |

`Google-Extended` tiene un matiz importante: **no afecta a AI Overviews ni a AI Mode** (que son parte de Search y se rigen por `Googlebot` y por la elegibilidad de snippet); controla el uso para entrenar Gemini y otros productos de IA generativa de Google.

### 4.3 La recomendación para Show Up: dejarlos pasar a todos

**Decisión: `Allow` a todos los crawlers de IA, incluidos los de entrenamiento.**

El argumento, punto por punto:

1. **El caso de bloquear entrenamiento es el caso de un editor.** El New York Times bloquea `GPTBot` porque su producto **es** el contenido y quiere licenciarlo. Show Up no vende contenido: vende que aparezca un artista el sábado. El contenido es **publicidad de un servicio**. Bloquear el entrenamiento de tu propia publicidad es pagar por un anuncio y luego taparlo.
2. **Ser parte del conocimiento "de memoria" del modelo es el premio gordo, no la amenaza.** La forma más valiosa de existir para un LLM no es que te encuentre buscando: es que **te nombre sin buscar**, porque la marca está dentro de los pesos. Esa vía se cierra al bloquear entrenamiento, y es la única forma de que un dominio pequeño compita con Espectalium en la respuesta de "¿qué agencias hay en España?".
3. **Un dominio de cero autoridad no tiene poder de negociación.** Pay Per Use de Cloudflare paga cuando el contenido se usa en una respuesta. Para un sitio de 30 URLs eso son céntimos al año, contra el coste de no existir. El cálculo no admite discusión a esta escala.
4. **El riesgo real de dejar pasar es de coste de servidor,** y con 30 URLs y una web estática es irrelevante.
5. **Bloquear "solo entrenamiento" es una media tinta cara.** Cuesta lo mismo mantenerla que no mantenerla, y renuncia al punto 2 sin ganar nada a cambio.

**Se revisa esta decisión** solo si se cumple una de dos condiciones: (a) el dataset propio de la sección 8 se convierte en un activo licenciable con demanda real, o (b) los crawlers generan un coste de infraestructura medible. Ni una ni otra van a pasar el año 1.

### 4.4 ⚠️ La trampa de Cloudflare — comprobar antes de lanzar

**Esto puede tirar por tierra toda la estrategia sin que nadie se entere.**

Desde julio de 2025, Cloudflare **bloquea crawlers de IA por defecto en dominios nuevos**, y desde el **15 de septiembre de 2026** los clientes y sitios nuevos entran por defecto en "permitir búsqueda, bloquear entrenamiento y uso agéntico en páginas con anuncios". ([Cloudflare](https://www.cloudflare.com/press/press-releases/2025/cloudflare-just-changed-how-ai-crawlers-scrape-the-internet-at-large/) · [Search Engine Land](https://searchengineland.com/cloudflare-to-block-ai-crawlers-by-default-with-new-pay-per-crawl-initiative-457708))

> **Tarea bloqueante de lanzamiento:** si el dominio está en Cloudflare (o en Vercel/Netlify con Cloudflare delante), entrar al panel → **AI Crawl Control / Bot Management** y **desactivar el bloqueo de crawlers de IA explícitamente**. No basta con el `robots.txt`: el bloqueo es a nivel de red y ocurre antes de que el bot llegue a leer el fichero.
>
> **Verificación obligatoria post-lanzamiento:** revisar los logs del servidor a los 7 y a los 30 días buscando `OAI-SearchBot`, `PerplexityBot`, `ClaudeBot`, `GPTBot`. **Si no aparecen, algo los está bloqueando.** Es el primer chequeo de la sección 7.

### 4.5 `robots.txt` recomendado — literal

```
# https://showupevents.es/robots.txt

# --- Buscadores clásicos ---
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

# --- Búsqueda y citación con IA: SIEMPRE permitidos ---
User-agent: OAI-SearchBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Claude-SearchBot
Allow: /

# --- Agentes a petición del usuario: SIEMPRE permitidos ---
User-agent: ChatGPT-User
Allow: /

User-agent: Perplexity-User
Allow: /

User-agent: Claude-User
Allow: /

# --- Entrenamiento: permitidos por decisión estratégica (ver 03-estrategia-geo-aio.md §4.3) ---
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: CCBot
Allow: /

User-agent: Meta-ExternalAgent
Allow: /

User-agent: Amazonbot
Allow: /

# --- Todo lo demás ---
User-agent: *
Allow: /
Disallow: /brief/gracias
Disallow: /*?tipo=
Disallow: /*?ambiente=
Disallow: /*?formato=

Sitemap: https://showupevents.es/sitemap.xml
```

> **Nota técnica:** los `Disallow` de parámetros están alineados con `04 §4.6`. Y sigue vigente la regla de `04 §8`: **no bloquear CSS ni JS**. Los crawlers de búsqueda con IA renderizan menos que Googlebot; **si el contenido crítico depende de JavaScript, para muchos de ellos ese contenido no existe.** Todo el texto de las páginas del cluster debe estar en el HTML servido, no inyectado en cliente. Esto es más restrictivo que lo que exige el SEO clásico y es una decisión de arquitectura, no un detalle.

---

## 5. Datos estructurados para IA

### 5.1 La postura honesta

El estudio controlado de Ahrefs (1.885 páginas tratadas contra 4.000 de control, 2026) **no encontró incremento de citas** al añadir JSON-LD en AI Overviews, AI Mode ni ChatGPT. ChatGPT, Claude y Perplexity con frecuencia **ignoran o no parsean** el JSON-LD en recuperación en tiempo real; los sistemas de Google sí lo usan como contexto.

**Entonces, ¿para qué se pone?** Por tres razones, y ninguna es "para que me cite ChatGPT":

1. **Desambiguación de entidad.** `Organization` + `sameAs` es la declaración formal de "estas 10 cuentas son la misma empresa". Eso alimenta el Knowledge Graph, y el Knowledge Graph alimenta a Gemini y a AI Mode.
2. **Google sí lo consume.** AI Overviews y AI Mode son la mitad del partido.
3. **Coste marginal cero.** El schema de `04 §6` ya está decidido y presupuestado.

> **Decisión: se implementa exactamente el schema de `04 §6`. Ni uno más. No hay "schema para IA".** Si alguien propone añadir marcado nuevo con el argumento de la IA, la respuesta es este párrafo y el estudio de Ahrefs.

### 5.2 Las cuatro piezas que sí mueven algo, por orden

1. **`Organization` en la home**, con `@id` estable, `sameAs` completo (todos los perfiles de la fase 1) y `knowsAbout`. Es la única pieza con impacto de entidad demostrable. Ampliación sobre `04 §6.1`:

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://showupevents.es/#organization",
  "name": "Show Up Events",
  "alternateName": ["Show Up", "Show Up Events SL"],
  "url": "https://showupevents.es/",
  "logo": "https://showupevents.es/logo.png",
  "description": "Agencia española de contratación de artistas para eventos. Músicos, magos, monologuistas y DJs para bodas, eventos de empresa y fiestas populares en toda España.",
  "foundingDate": "20XX-XX-XX",
  "areaServed": { "@type": "Country", "name": "España" },
  "knowsAbout": [
    "Contratación de artistas",
    "Música en directo para bodas",
    "Eventos de empresa",
    "Fiestas patronales",
    "Cachés de artistas en España"
  ],
  "founder": [{ "@type": "Person", "name": "[Nombre Apellido]", "sameAs": "https://www.linkedin.com/in/..." }],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+34...",
    "contactType": "sales",
    "areaServed": "ES",
    "availableLanguage": ["es", "ca", "en"]
  },
  "sameAs": [
    "https://www.linkedin.com/company/...",
    "https://www.instagram.com/...",
    "https://www.youtube.com/@...",
    "https://www.crunchbase.com/organization/...",
    "https://www.facebook.com/...",
    "https://www.google.com/maps/place/..."
  ]
}
```

2. **`Person`** para los fundadores en `/nosotros`, con `sameAs` a LinkedIn. Señal de autoría real, que es lo que los modelos leen como E-E-A-T.
3. **`VideoObject`** con `transcript`. Ya en `04 §6.3`. La transcripción es lo que hace extraíble el contenido del vídeo.
4. **`FAQPage`** en pilares y páginas de precio. `04 §6.4` ya advierte de que Google casi no pinta su rich result desde 2023 — y **Google lo ha ido retirando aún más**. Se pone igual por la razón que ya decía `04`: es lo que consumen los sistemas generativos de Google. Pero **cada FAQ debe existir también como HTML visible**. Una FAQ que solo vive en el JSON-LD es invisible para los motores que no parsean schema, que son la mayoría.

### 5.3 La regla que sí importa por encima de todo el schema

> **El JSON-LD nunca contiene información que no esté en el HTML visible.**

Google lo exige (*"ensure structured data matches visible text"*) y, más importante, los motores que no parsean schema —ChatGPT, Perplexity, Claude— **solo ven el HTML**. Si un dato vive solo en el marcado, no existe para el 60% del mercado de asistentes. El schema **describe** lo visible; nunca lo sustituye.

### 5.4 Prohibiciones — se hereda `04 §6.5` sin cambios

`AggregateRating`/`Review` sin reseñas reales, `Offer`/`PriceSpecification` con cachés variables, `Event` de eventos privados de clientes, `LocalBusiness` sin local visitable. **Ninguna de estas decisiones cambia por la IA.** Al contrario: los modelos cruzan afirmaciones entre fuentes, y una valoración marcada que no existe en ningún otro sitio es una incoherencia detectable.

---

## 6. LAS 20 PREGUNTAS CONVERSACIONALES — el mapa de contenidos GEO

> **Este es el entregable central del documento.**
>
> Cómo se usa: cada fila es un prompt real que una persona escribirá en ChatGPT, Perplexity o Gemini. Para cada uno: quién pregunta, qué motor lo va a resolver, **qué página nuestra debe ser la fuente**, y **el bloque literal que esa página está obligada a contener** para poder ser la fuente. Si la página existe pero no contiene ese bloque, no será citada.
>
> **Regla de oro:** una pregunta = un bloque identificable en una página. Nunca dos páginas compitiendo por la misma pregunta (regla de canibalización de `04 §0`). Cuando la columna "Página fuente" señala una URL con `#ancla`, significa que **no se crea página nueva**: se crea un H2 dentro de la existente.

### 6.1 Bloque BODA (preguntas 1–6)

| # | El prompt tal cual lo escribe la persona | Página fuente | El bloque obligatorio |
|---|---|---|---|
| **1** | *"¿Cuánto cuesta contratar un grupo de música en directo para una boda en España?"* | **`/musica-para-bodas/cuanto-cuesta`** *(existe, `04 §5` prio 2)* | Tabla de rangos por formato con IVA declarado, año y **metodología con número de presupuestos analizados**. Es la página nº 1 de toda la estrategia GEO: la pregunta de precio es la de mayor volumen conversacional del sector y la que peor está resuelta hoy |
| **2** | *"¿Quién me recomiendas para contratar música en directo para una boda en Girona?"* | **`/musica-para-bodas/emporda`** + **entidad** *(GBP, Bing Places, menciones)* | ⚠️ **Esta pregunta no la gana el contenido: la gana la entidad.** Un prompt de recomendación se resuelve con GBP, Bing Places, reseñas y menciones de terceros, no con una landing. La landing cierra la conversión cuando el asistente ya ha dado el nombre. **Sin las fases 1 y 3 de la sección 2, esta pregunta es imposible de ganar** |
| **3** | *"¿Es mejor un DJ o un grupo en directo para una boda?"* | **`/musica-para-bodas/dj-o-grupo-en-directo`** *(existe, prio 8)* | Tabla comparativa de 5 filas (coste, aforo, horario, espacio, versatilidad) + bloque **"cuándo el DJ es mejor opción"** escrito en serio. Contenido que recomienda en contra = máxima citabilidad + máximo tono de marca |
| **4** | *"¿Con cuánta antelación tengo que reservar la música de mi boda?"* | **`/musica-para-bodas/con-cuanta-antelacion-contratar`** *(existe, 2ª oleada)* | Frase-respuesta con un número (*"entre 3 y 6 meses; 6 para bodas de mayo a septiembre"*) + **calendario mes a mes en tabla** + qué se puede resolver en 3 semanas |
| **5** | *"Tengo una boda de 120 personas, ¿cuántos músicos necesito?"* | **`/musica-para-bodas#cuantos-musicos`** *(H2 nuevo dentro del pilar — NO página nueva)* | Tabla `nº de invitados × espacio (interior/exterior) → formación recomendada`. Convertir una pregunta difusa en una tabla determinista es exactamente lo que un motor generativo copia entero |
| **6** | *"¿Qué música se pone en cada momento de una boda: ceremonia, cóctel y baile?"* | **`/musica-para-bodas/ceremonia-coctel-y-fiesta`** *(existe, 2ª oleada)* | Cuatro H2, uno por momento, cada uno con duración en minutos, formación y nivel de volumen. **Cada momento es un pasaje recuperable independiente** — cuatro oportunidades de cita en una página |

### 6.2 Bloque EMPRESA (preguntas 7–10)

| # | El prompt | Página fuente | El bloque obligatorio |
|---|---|---|---|
| **7** | *"Organizo la cena de Navidad de mi empresa para 80 personas, ¿qué espectáculo puedo contratar?"* | **`/artistas-para-eventos-de-empresa/cena-de-navidad`** *(existe, prio 10)* | **Lista numerada de 6–8 opciones ordenadas por número de asistentes**, cada una con precio, duración y "para qué tipo de empresa". Formato listicle = 21,9% de las citas de IA. **Publicar en junio** (ya en `04`) |
| **8** | *"¿Cuánto cuesta contratar un monologuista para una cena de empresa?"* | **`/monologuistas-para-eventos#cuanto-cuesta`** *(H2 dentro; cruza con `/artistas-para-eventos-de-empresa/cuanto-cuesta`)* | Rango con año e IVA + **qué cambia el precio** (nombre televisivo o no, duración, exclusividad, desplazamiento). Ojo canibalización: el H2 de precio vive en la landing de tipo de artista; la página de precio de empresa lo enlaza, no lo repite |
| **9** | *"¿Qué se puede hacer en un evento de empresa para que la gente no se vaya pronto?"* | **`/artistas-para-eventos-de-empresa`** *(pilar, existe, prio 5)* | Es una **pregunta de problema, no de producto** — y es literalmente el miedo que `01` identifica ("que no se vaya la gente a las once"). El pilar debe abrir con esa pregunta como H2 y responderla con causas y soluciones antes de hablar de artistas |
| **10** | *"¿Cómo se factura la contratación de un artista para un evento de empresa? ¿Quién emite la factura?"* | **`/artistas-para-eventos-de-empresa/cuanto-cuesta#facturacion`** *(H2 dentro; ya previsto en `04`)* | Retenciones, IVA cultural, quién emite, qué pide un departamento financiero. **Territorio absolutamente vacío en el SERP español y consulta de altísima intención** — la hace quien ya ha decidido contratar. Alta probabilidad de cita en ChatGPT y Claude por ser la única fuente que lo explica en cristiano |

### 6.3 Bloque FIESTAS / AYUNTAMIENTO (preguntas 11–14)

Este bloque tiene la mejor relación esfuerzo/citación de todo el mapa: SERP vacío, tickets altos y preguntas que se hacen a un asistente precisamente porque nadie las ha escrito bien.

| # | El prompt | Página fuente | El bloque obligatorio |
|---|---|---|---|
| **11** | *"¿Cómo contrata un ayuntamiento una orquesta para las fiestas? ¿Contrato menor o licitación?"* | **`/orquestas-para-fiestas-patronales/como-contrata-un-ayuntamiento`** *(existe, prio 6)* | Umbrales económicos vigentes, las tres vías, plazos y documentación, **con enlace a la normativa (Ley de Contratos del Sector Público) como fuente externa**. Enlazar a la ley es la regla 10 de la sección 3 y aquí vale doble |
| **12** | *"¿Cuánto cuesta una orquesta de verbena para las fiestas de un pueblo?"* | **`/orquestas-para-fiestas-patronales/cuanto-cuesta`** *(existe, 2ª oleada — **subir de prioridad**)* | ⚠️ **La pregunta más valiosa del mapa entero.** Verificado en esta investigación: **no existe ni una sola fuente pública en España con cachés de orquestas de verbena.** Rangos por tamaño de formación (6, 10, 14+ músicos), nº de noches y provincia, respaldados por el Activo B de §8.3. **Quien publique esto primero, se queda la respuesta del sector** |
| **13** | *"¿Cuánto cuesta contratar una charanga o una txaranga para las fiestas?"* | **`/charangas-y-txarangas`** *(URL NUEVA — Cluster D, raíz)* | Precio por pasacalles y por hora, número de músicos, cuántos pases hace al día, diferencia de precio entre charanga y elektrotxaranga. **Cero competencia comercial decente.** Ticket menor que una orquesta pero volumen de contrataciones altísimo en verano |
| **14** | *"¿Qué permisos, seguros y trámites de SGAE hacen falta para una verbena?"* | **`/orquestas-para-fiestas-patronales/permisos-seguros-y-sgae`** *(URL NUEVA)* | Checklist numerado: RC, licencia de actividad, límites de decibelios, horario de cierre, tarifa SGAE, PRL del escenario. **Cero competencia en el SERP español.** Lo lee un concejal de festejos con presupuesto |

### 6.4 Bloque FORMACIONES Y VOCABULARIO (preguntas 15–17) — el hueco más grande del sector

> **Por qué este bloque es oro.** Son preguntas de **definición y diferencia**, el formato conversacional más frecuente que existe (*"¿qué diferencia hay entre…?"*), sobre **términos españoles y regionales sin fuente canónica publicada**. Un asistente que recibe estas preguntas hoy responde con vaguedad o con Wikipedia. Cuesta poquísimo escribirlas —el conocimiento ya está en la cabeza del cliente, que lleva años contratando estas formaciones— y son citables durante años porque una definición no caduca. **Es la mejor relación esfuerzo/citación de todo el documento.**

| # | El prompt | Página fuente | El bloque obligatorio |
|---|---|---|---|
| **15** | *"¿Qué diferencia hay entre una txaranga y una charanga?"* | **`/charangas-y-txarangas#diferencia`** *(H2 dentro de la URL nueva de la pregunta 13)* | Definición `X es Y` de cada término, origen geográfico (txaranga en País Vasco y Navarra; charanga en el resto), número de músicos, instrumentación, repertorio, si tocan en movimiento o estáticos. Mencionar **`fanfarre`/`fanfarria`** y **`elektrotxaranga`** como variantes, cada una con su definición de una frase. **Esta respuesta no existe hoy en internet español en formato citable** |
| **16** | *"Para las fiestas de mi pueblo, ¿qué contrato: una orquesta, una charanga, un grupo de versiones o un DJ?"* | **`/guias/formaciones-para-fiestas-populares`** *(URL NUEVA — la pieza clave de este bloque)* | **Tabla comparativa de 6 filas × 6 columnas:** orquesta de verbena · charanga/txaranga · grupo de versiones · banda tributo · DJ/discomóvil · banda de música. Columnas: qué es, cuántos músicos, en qué momento de las fiestas encaja, horquilla de precio, qué necesita de escenario y sonido, para qué público. **Una tabla así se copia entera en una respuesta generativa.** Es, además, el contenido que convierte el activo real del cliente —su agenda— en autoridad demostrable |
| **17** | *"¿Un monologuista y un humorista son lo mismo? ¿Cuál encaja mejor en una cena?"* | **`/monologuistas-para-eventos#monologuista-o-humorista`** *(H2 dentro)* | Definición de cada uno, formato (monólogo cerrado vs. presentación e interacción), duración, cuándo funciona cada uno, cómo cambia el precio si el nombre es televisivo. Misma mecánica de "diferencia" que la 15, aplicada al vertical de empresa |

### 6.5 Bloque CONFIANZA Y DECISIÓN (preguntas 18–20)

Estas tres son las más valiosas del mapa entero: son las que decide una persona que **ya sabe que quiere contratar y ahora está eligiendo a quién**. Son las que convierten.

| # | El prompt | Página fuente | El bloque obligatorio |
|---|---|---|---|
| **18** | *"¿Merece la pena contratar a través de una agencia o es mejor ir directo al grupo?"* | **`/guias/agencia-o-directo`** *(URL NUEVA — la pieza más importante que falta)* | Tabla honesta de ventajas y desventajas de las dos vías + un bloque **"cuándo NO necesitas una agencia"** escrito en serio (evento pequeño, ya conoces al grupo, presupuesto muy ajustado). **Una empresa que publica cuándo no hace falta contratarla es material de citación de primer nivel** y es exactamente `01 §8`. Prioridad alta |
| **19** | *"¿Qué preguntas debo hacer antes de contratar un grupo de música para mi evento?"* | **`/guias/preguntas-antes-de-contratar`** *(URL NUEVA)* | **Lista numerada de 10–12 preguntas**, cada una con "qué respuesta debe darte" y "qué respuesta es una señal de alarma". Formato lista ordenada + criterio explícito = el formato más citado que existe. Y es un imán de enlaces naturales |
| **20** | *"¿Qué pasa si el artista que he contratado no aparece el día del evento?"* | **`/como-funciona#garantia`** *(La Garantía Show Up, `06 §4`)* | La garantía escrita como respuesta genérica al problema **antes** de contarla como propuesta propia: qué debe incluir un contrato, qué es una cláusula de sustitución, qué es razonable exigir. Luego, la garantía de Show Up como ejemplo. **El orden importa:** responder la pregunta del mundo primero y la propia después es lo que hace que un motor lo cite |

### 6.6 Segunda oleada — 14 prompts más para los meses 6–12

Sin desarrollar, para la planificación. Los marcados con ★ son de vocabulario y siguen la lógica del bloque 6.4: baratos de escribir, citables durante años.

21. *"¿Qué incluye el caché de un grupo de música? ¿Hay costes extra?"* → `/musica-para-bodas/cuanto-cuesta#que-incluye`
22. *"¿Cuánto se tarda en montar el escenario de una verbena y qué potencia eléctrica hace falta?"* → `/orquestas-para-fiestas-patronales#logistica`
23. *"Busco una banda de versiones que se sepa canciones de todas las épocas para una fiesta de empresa"* → `/grupos-de-versiones` (prompt descriptivo sin keyword: el caso de uso puro)
24. ★ *"¿Qué diferencia hay entre una charanga y una banda de música?"* → `/charangas-y-txarangas#vs-banda`
25. ★ *"¿Qué es una elektrotxaranga?"* → `/charangas-y-txarangas#elektrotxaranga`
26. ★ *"¿Qué diferencia hay entre una orquesta de verbena y un grupo de versiones?"* → `/guias/formaciones-para-fiestas-populares#orquesta-vs-versiones`
27. ★ *"¿Qué es una banda tributo y en qué se diferencia de una banda de versiones?"* → `/bandas-tributo#vs-versiones`
28. *"¿Qué es un rider técnico y qué me van a pedir?"* → `/guias/rider-tecnico`
29. *"Mi finca tiene límite de decibelios, ¿qué música puedo poner?"* → `/musica-para-bodas#limite-decibelios` **← el que alimenta el Activo C de §8.4**
30. *"¿Cuánto dura la actuación de un grupo en una boda?"* → `/musica-para-bodas#duracion`
31. *"¿Cuánto cobra un DJ para una boda en España?"* → `/dj-para-bodas-y-eventos#cuanto-cuesta`
32. *"¿Qué agencias de contratación de artistas hay en España?"* → **entidad pura**; se gana con la sección 2, no con una página. Es el **nivel 3** del test de §2.1.6
33. *"¿Cómo sé si un grupo de versiones es bueno antes de contratarlo?"* → `/guias/preguntas-antes-de-contratar#como-evaluar`
34. *"¿Cuánto hay que pagar de señal y cuándo se paga el resto?"* → `/como-funciona#pagos`

### 6.6bis Las tres URLs nuevas que este documento añade a `04`

Son las únicas tres. Todo lo demás vive en URLs ya previstas o en H2 dentro de ellas.

| URL nueva | Cluster | Preguntas que resuelve | Prioridad |
|---|---|---|---|
| **`/guias/agencia-o-directo`** | Guías | 18 | **Alta.** La pieza de confianza que más convierte y más se cita |
| **`/charangas-y-txarangas`** | D (tipo de artista, raíz) | 13, 15, 24, 25 | **Alta.** SERP vacío, vocabulario propio, activo real del cliente |
| **`/guias/formaciones-para-fiestas-populares`** | Guías | 16, 26, 27 | **Alta.** La tabla comparativa es el activo citable de más larga vida del plan |
| *(`/guias/preguntas-antes-de-contratar` y `/orquestas-para-fiestas-patronales/permisos-seguros-y-sgae`)* | Guías / C | 19, 14 | Alta, ya justificadas arriba |

Ninguna canibaliza: `/charangas-y-txarangas` ataca términos que ningún pilar toca, y `/guias/formaciones-para-fiestas-populares` es comparativa transversal, no transaccional — enlaza a `/orquestas-para-fiestas-patronales` y a `/charangas-y-txarangas` con anchor exacto, cumpliendo la Regla 1 de `04 §3.1`.

### 6.7 Cómo se auditan estas 20 preguntas

Una vez al mes, alguien escribe **los 20 prompts literalmente** en ChatGPT, Perplexity y Gemini, **tres veces cada uno** (por la variabilidad del fan-out), y registra en una hoja: ¿se menciona Show Up Events? ¿se enlaza? ¿qué URL nuestra? ¿quién sale en su lugar? Eso son 180 consultas al mes: **unas dos horas de trabajo**. Es la medición base de la sección 7 y no necesita ninguna herramienta de pago.

---

## 7. Medición

### 7.1 El problema de medir esto

Tres realidades incómodas que definen cómo hay que medir:

1. **La respuesta cambia entre ejecuciones.** El 73% de las subconsultas del fan-out cambia. Medir una vez es medir ruido: **mínimo 3 ejecuciones por prompt**.
2. **La mayoría de las citas no generan clic.** Ser mencionado sin enlace es el resultado más frecuente y es invisible en Analytics. Si solo se mide tráfico, se está midiendo la punta del iceberg.
3. **La atribución es mala.** Mucho tráfico de asistentes llega como directo, sin `referrer`.

Por eso el cuadro de mando tiene tres capas y **la primera es manual**.

### 7.2 Los KPIs, por orden de importancia

| # | KPI | Cómo se mide | Objetivo año 1 |
|---|---|---|---|
| **0** | **Nivel de desambiguación de entidad** (escala 0–3 de §2.1.6) | Test manual de 3 preguntas en 4 asistentes, mensual. 5 minutos | Nivel 0 → **nivel 1 mes 3, nivel 2 mes 6, nivel 3 mes 12** |
| **1** | **Tasa de mención sobre el panel de 20 prompts** (% de respuestas donde aparece Show Up Events) | Auditoría manual, 3 ejecuciones × 3 motores × 20 prompts, mensual | 0% → **25%** a los 12 meses |
| **2** | **Dominios únicos que mencionan "Show Up Events"** | Búsqueda `"Show Up Events" -site:showupevents.es` + alerta | **25 dominios** |
| **3** | **Briefs con origen "una IA me lo recomendó"** | **Pregunta nueva en el brief** (ver 7.5) | **10% de los briefs** |
| **4** | **Citas en Bing/Copilot** | **Bing Webmaster Tools → informe AI Performance** (gratis, dato de primera parte) | Tendencia creciente |
| **5** | **Impresiones en superficies generativas de Google** | **Google Search Console → informes de IA** (desde junio de 2026; solo impresiones, AIO+AI Mode+Discover mezclados, despliegue parcial) | Tendencia creciente |
| **6** | **Sesiones de referencia de IA** | GA4 con el regex de 7.4 | 15% del tráfico orgánico |
| **7** | **Hits de crawlers de IA en logs** | Logs de servidor | `OAI-SearchBot`, `PerplexityBot`, `ClaudeBot` **visibles en 7 días** |

> **KPI nº 7 es el indicador adelantado.** Si los crawlers no pasan, nada de lo demás va a ocurrir, y se detecta meses antes que cualquier otra métrica. **Es el primero que se revisa después de lanzar** (ver 4.4).
>
> Y sigue en pie la regla de `04 §4.12`: **el KPI final del año 1 es briefs entrados, no citas.** Las citas son la métrica intermedia.

### 7.3 Herramientas: qué comprar y qué no

| Herramienta | Coste | Veredicto para Show Up |
|---|---|---|
| **Bing Webmaster Tools** (informe AI Performance) | Gratis | **Obligatorio.** Único dato de primera parte sobre citación en ChatGPT/Copilot que existe |
| **Google Search Console** (informes de IA) | Gratis | **Obligatorio.** Limitado (solo impresiones, superficies mezcladas), pero es Google diciendo si te ve |
| **GA4** con canal personalizado de IA | Gratis | **Obligatorio.** Configuración de 20 minutos, ver 7.4 |
| **Auditoría manual del panel de 20 prompts** | 2 h/mes | **Obligatorio.** Es la única medición que responde la pregunta real: *"¿qué dice la máquina cuando le preguntan por lo nuestro?"* |
| **Otterly.ai** | ~30–50 $/mes | **Recomendado a partir del mes 6**, cuando las 2 h/mes empiecen a doler. Es la entrada más barata del mercado |
| **Peec AI** | ~89–199 €/mes | **Solo si hay presupuesto y el proyecto va bien.** Mejor relación profundidad/precio del segmento medio. Herramienta europea, cobertura de mercado español razonable |
| **Semrush AI Visibility Toolkit** | ~99 $/mes sobre suscripción | Solo si ya se paga Semrush por el SEO de `04` |
| **Profound / Ahrefs Brand Radar** | 499–699+ $/mes | **No.** Es una herramienta de enterprise. Para una empresa nueva es tirar el presupuesto de un año de contenido |

**Regla de gasto:** hasta el mes 6, **cero euros en herramientas de GEO**. Todo lo que hace falta es gratis o son dos horas al mes. El presupuesto va a producir el dataset de la sección 8, que es lo que de verdad genera citas.

### 7.4 Configuración de GA4 — el regex

Crear un **grupo de canales personalizado "IA generativa"** con condición sobre `Fuente de sesión` que coincida con este regex:

```
.*chatgpt.*|.*openai.*|.*perplexity.*|.*gemini.google.*|.*bard.google.*|.*claude.ai.*|.*anthropic.*|.*copilot.*|.*bing.*chat.*|.*you.com.*|.*poe.com.*|.*mistral.*
```

Y añadir a todas las URLs que se compartan desde perfiles y notas de prensa un `utm_source` propio, para separar lo que es mención rastreada de lo que es tráfico de asistente.

> **Advertencia:** GA4 subestima sistemáticamente este canal. Parte del tráfico de asistentes llega sin `referrer` y cae en *Directo*. **Un aumento inexplicado del tráfico directo, con páginas de destino profundas (no la home), es tráfico de IA no atribuido.** Vigilar ese patrón: es una señal, no un error.

### 7.5 La medición que nadie más tiene: preguntarlo

Añadir al paso 7 del brief (`06 §12`), como campo opcional:

> **¿Cómo nos has encontrado?**
> `Buscando en Google` · `Me lo recomendó ChatGPT o similar` · `Me lo recomendó alguien` · `Redes sociales` · `Ya os conocía` · `Otra cosa`

Encaja con el tono (`06` ya usa opciones en lenguaje de persona), es opcional y **da el único dato de atribución fiable que va a existir**: si alguien dice que se lo recomendó una IA, esa IA está recomendando Show Up. Ninguna herramienta de 500 $/mes da eso.

Complemento a coste cero: en la llamada de seguimiento, preguntar *"¿y cómo diste con nosotros?"* y anotarlo en el CRM. Con 50 briefs al año, ese registro cualitativo vale más que cualquier panel.

### 7.6 El informe mensual — 30 minutos

Una tabla, siete filas, la misma cada mes:

```
MES · Show Up Events — Panel GEO
0. Nivel de desambiguación (0-3), por asistente: GPT __ / Perplexity __ / Gemini __ / Claude __
1. Tasa de mención (20 prompts × 3 motores × 3 ejecuciones): __%   [mes anterior: __%]
2. Dominios únicos que nos mencionan: __                          [nuevos este mes: __]
3. Briefs con origen "IA": __ de __                               [__%]
4. Citas en Bing WMT (AI Performance): __
5. Impresiones IA en GSC: __
6. Sesiones de canal "IA generativa" en GA4: __
7. Crawlers de IA vistos en logs: OAI-SearchBot __ / PerplexityBot __ / ClaudeBot __ / GPTBot __
DECISIÓN DEL MES: qué página se actualiza y qué mención se persigue.
```

La última línea es la importante. **Un informe que no acaba en una decisión es un informe que no hay que hacer.**

---

## 8. El activo defendible — lo que un LLM tenga que citar por narices

### 8.1 El razonamiento

Un motor generativo cita lo que necesita para responder. Si la respuesta a *"¿cuánto cuesta una orquesta para las fiestas de un pueblo en España?"* solo existe en un sitio, la cita es **estructural**, no competitiva: no se pierde porque un competidor escriba mejor, porque el competidor no tiene el dato.

**El sector entero tiene un agujero del tamaño de un escenario: nadie publica precios reales.** `04 §0` ya lo detectó como el mayor hueco del SERP. Aquí se lleva hasta el final: no una página de precios, sino **un cuerpo de datos primarios sobre el mercado español de contratación de artistas** que no existe en ninguna parte y que Show Up está en posición única de producir porque lo genera al trabajar.

> **Verificación hecha en esta investigación, y es la prueba de que el hueco existe.** Se buscaron cachés de orquestas de verbena en España. Resultado: **ninguna fuente publica tarifas, tamaños de formación ni estructura de precios.** Los buscadores devuelven literalmente la recomendación de *"contactar directamente con asociaciones de orquestas o con los ayuntamientos"*. Existen agendas de actuaciones (Festia, Orquestas de Galicia) y directorios de contratación (Partfy, Jaiekin), pero **ninguno publica el dato económico**. En un mercado de miles de contrataciones al año, el precio es información privada. **Ese vacío es el activo.**

**Y aquí está la ventaja injusta de este cliente concreto:** su activo real no es la web ni el catálogo — es una **agenda de contactos enorme en música en vivo** (txarangas, charangas, orquestas de verbena, grupos de versiones, bandas tributo, solistas) más magos, monologuistas, humoristas y DJs. Esa agenda es exactamente **el instrumento de recolección de datos** que hace falta para construir lo que sigue, y es lo único de todo este plan que un competidor no puede replicar comprándolo. `01 §5` dice que Show Up "no vende acceso a una lista". Correcto: **la lista no se vende, se convierte en el dato que hace citable a la empresa.**

Tres activos, en orden de facilidad de construcción.

---

### 8.2 ACTIVO A · El Índice Show Up del Caché — el precio real de subirse a un escenario en España

**Qué es:** un informe anual, publicado en HTML y PDF, con los cachés reales del mercado español desglosados por tipo de artista, formación, tipo de evento, provincia y temporada. Con metodología pública.

**De dónde salen los datos, en tres fuentes que se suman:**

1. **Presupuestos propios cerrados.** Cada evento contratado es un dato. Anonimizado y agregado, es la base.
2. **Presupuestos propios NO cerrados.** Igual de valiosos, y nadie los usa: son precios pedidos al mercado que revelan el rango real.
3. **Encuesta anual anónima a artistas — sobre la agenda de contactos del cliente.** 150–300 respuestas de músicos de charanga y txaranga, orquestas de verbena, grupos de versiones, bandas tributo, magos, monologuistas, humoristas y DJs españoles sobre lo que cobran de verdad. **Esta es la joya, y el cliente ya tiene la lista de distribución en el móvil.** Un artista responde a una encuesta sobre cachés porque le interesa saber si está cobrando por debajo de mercado: la tasa de respuesta sobre una agenda con relación previa es de otro orden que sobre una lista fría. **El instrumento de captación de datos es también un instrumento de relación con artistas** — que es la materia prima del negocio.

   **Segmentación obligatoria de la encuesta,** porque es lo que hace únicos los datos: por **formación** (charanga / txaranga / elektrotxaranga / orquesta de verbena por nº de músicos / grupo de versiones / banda tributo / solista / cuarteto de cuerda / DJ / mago / monologuista / humorista), por **tipo de evento**, por **provincia** y por **temporada**. Un dato agregado del tipo *"los artistas cobran entre X e Y"* no vale nada. *"Una charanga de 8 músicos cobra entre X e Y por un pasacalles de 3 horas en agosto en Navarra"* es un dato que un motor generativo **no tiene más remedio que citar, porque no existe en otro sitio.**

**Por qué es defendible:** un competidor puede copiar el texto en una tarde. No puede copiar 300 respuestas de artistas ni 137 presupuestos cerrados. Y al año siguiente el informe tiene serie histórica, que es la barrera definitiva: *"el caché medio de un cuarteto para boda subió un 7% entre 2026 y 2027"* es una frase que solo puede escribir quien midió las dos veces.

**Cómo se publica para maximizar citación:**

- **HTML primero, PDF después.** Muchos crawlers de IA leen mal el PDF. El informe vive como página web con tablas HTML reales; el PDF es el souvenir.
- **CSV descargable bajo licencia CC BY 4.0.** La licencia **obliga a atribuir**. Cualquier blog, medio o estudio que use los datos tiene que nombrar la fuente — y eso genera menciones, que es el KPI nº 2 (correlación 0,664). **Regalar los datos con obligación de atribución es la operación de menciones más eficiente que puede hacer esta empresa.**
- **Sección de metodología detallada:** n, periodo, ámbito geográfico, cómo se anonimiza, qué sesgos tiene. Los modelos que evalúan credibilidad —Claude sobre todo— privilegian esto.
- **DOI vía Zenodo.** Depositar el informe da un identificador permanente y citable. Cuesta cero y convierte un PDF de marketing en un documento con referencia estable, que es exactamente lo que un motor busca cuando necesita respaldar una cifra.
- **Nota de prensa a medios sectoriales, económicos regionales y de bodas.** El gancho no es la empresa: es el dato. *"El caché de un grupo para bodas ha subido un X% en España"* es un titular. *"Nueva agencia de artistas"* no lo es.

**Coste y plazo:** encuesta y agregación, ~3 meses de trabajo a tiempo parcial. Coste externo prácticamente cero. **Primera edición: mes 6–9.** No antes: hacen falta datos propios que agregar.

---

### 8.3 ACTIVO B · El Observatorio de la Contratación Musical Municipal — piensa a lo grande

**Esto es lo más grande que puede hacer esta empresa, y nadie lo ha hecho.**

Las adjudicaciones de los ayuntamientos españoles son **datos públicos y abiertos**. La Plataforma de Contratación del Sector Público y los portales de transparencia municipales publican contratos menores y licitaciones, con objeto, importe y adjudicatario. Cada verbena, cada orquesta de fiestas patronales, cada actuación municipal contratada **está ahí, con su cifra**.

**Nadie lo ha agregado nunca.**

**Qué se construye:** un dataset público de las adjudicaciones de actuaciones musicales de los ayuntamientos españoles, filtrado por objeto de contrato, normalizado y agregado. Y sobre él, una página con:

- **Importe medio adjudicado por provincia** y por tamaño de municipio.
- **Evolución interanual** del gasto municipal en programación musical.
- **Calendario real de contratación** — en qué meses del año adjudican los ayuntamientos. Esto es información comercial pura: dice cuándo hay que llamar.
- **Ranking de municipios** por inversión en fiestas por habitante. Titular garantizado en prensa local: *"[Pueblo] es el municipio de [provincia] que más invierte por vecino en las fiestas"*. **Cada uno de esos titulares es una mención en un dominio de prensa local, que es el KPI nº 2 de la sección 7.**

**Por qué esto es una máquina de citación:**

1. **Responde una pregunta que hoy no tiene respuesta pública.** *"¿Cuánto paga un ayuntamiento por una orquesta?"* — no existe fuente. Show Up sería la única.
2. **Es verificable.** Los datos de origen son públicos: cualquiera puede comprobarlo. Verificabilidad = confianza para un modelo.
3. **Genera prensa local sola, todos los veranos.** Y la prensa local es donde este negocio necesita menciones.
4. **Es también inteligencia comercial.** Saber qué ayuntamientos adjudican, por cuánto y cuándo, es una lista de leads B2G cualificada. **El activo de marketing y el activo comercial son el mismo fichero.**
5. **Legalmente limpio:** datos abiertos de contratación pública, sin datos personales.

**Riesgo y mitigación:** el trabajo sucio de normalización (los objetos de contrato están escritos de mil maneras). Se acota: **una comunidad autónoma en la primera edición**, la de la base operativa. Y se declara el ámbito con honestidad en la metodología. Un dataset de una comunidad bien hecho es infinitamente más citable que uno de España mal hecho.

**Plazo:** meses 9–15. Es el proyecto de año 2, y es el que puede convertir a Show Up en la fuente de referencia del sector en España.

---

### 8.4 ACTIVO C · El Mapa de Sitios — la base de datos que solo se construye trabajando

**Qué es:** una ficha técnica pública de cada finca, masía, hotel, sala y plaza donde Show Up ha montado algo, con lo que un organizador necesita saber y nadie publica:

- Límite de decibelios y a qué hora entra en vigor.
- Hora de cierre por ordenanza municipal.
- Potencia eléctrica disponible en kW y tipo de conexión.
- Accesos para carga y descarga, y a qué distancia queda el escenario.
- Si hay eco, si hay vecinos cerca, en qué punto se pone la banda.
- Qué formaciones caben de verdad.

**Por qué es indestructible:** no se puede copiar sin ir al sitio. No se puede generar con IA. No está en ninguna base de datos. Y responde a un enjambre de preguntas long tail —*"¿puedo poner música en directo en [finca] hasta las 3?"*— que hoy no tienen respuesta en internet.

**Y encaja exactamente con lo que `04 §2.3` ya exige:** las landings de ciudad necesitan contenido local único obligatorio, con sitios reales y restricciones acústicas reales. **El Mapa de Sitios es ese contenido, sistematizado.** No es trabajo nuevo: es convertir en dato estructurado lo que ya se hace en cada evento ("La Llamada al Sitio", `06 §3`).

**Cómo se alimenta sin esfuerzo extra:** una plantilla de 10 campos que se rellena después de cada evento, en cinco minutos, con la información que el equipo **ya recopila** para hacer su trabajo. Un evento = una ficha. A 30 eventos al año, en dos años hay 60 fichas que nadie más tiene.

**Publicación:** empieza a publicarse a partir de **15 sitios**. Antes se ve pobre; a partir de ahí es un recurso.

---

### 8.5 El orden

| Cuándo | Activo | Por qué en ese orden |
|---|---|---|
| **Mes 1** | Empezar a **registrar** los tres (plantilla de presupuestos, plantilla de sitios) | El coste de registrar desde el día 1 es cero; el de reconstruirlo a posteriori es imposible |
| **Mes 6–9** | Publicar **Activo A** (Índice del Caché, 1ª edición) | Necesita masa crítica de datos propios + encuesta |
| **Mes 9–12** | Publicar **Activo C** (Mapa de Sitios, ≥15 fichas) | Se acumula solo si se registra desde el mes 1 |
| **Mes 9–15** | Construir y publicar **Activo B** (Observatorio Municipal, 1 comunidad) | El más ambicioso. Es la jugada de año 2 |
| **Anual** | Reedición de A y B, con serie histórica | La serie histórica es la barrera de entrada definitiva |

### 8.6 La frase que resume la sección

> **El sector vende catálogos. Show Up va a vender criterio. Y el criterio, publicado con metodología y cifras, es exactamente lo que una máquina necesita citar.**

El activo defendible no es un truco de SEO: es la plataforma de marca (`01`) escrita en forma de datos. *"A los nuestros los hemos visto tocar"* convertido en *"y hemos apuntado lo que cobran, dónde tocan y qué necesita cada sitio"*.

---

## 9. Calendario de ejecución

### 9.0 Si el objetivo es posicionarse cuanto antes: el orden por velocidad de retorno

El objetivo declarado es **máxima posición lo antes posible**, afinando el producto después. Eso cambia el orden, no el contenido. Ranking de las palancas por **tiempo hasta el primer resultado medible**:

| Velocidad | Palanca | Plazo al primer resultado | Coste |
|---|---|---|---|
| ⚡⚡⚡ | **Perfiles-ancla + descriptor fijo + handles** (§2.1.4, §2.3 fase 1) | **7–30 días** hasta el nivel 1 del test de §2.1.6 | 2 días de trabajo, 0 € |
| ⚡⚡⚡ | **Bing Webmaster Tools + IndexNow + Bing Places** | **Horas** hasta indexación; semanas hasta cita | Medio día, 0 € |
| ⚡⚡⚡ | **Desbloquear crawlers en Cloudflare** (§4.4) | Inmediato. **Sin esto, nada de lo demás ocurre** | 10 minutos |
| ⚡⚡ | **Las 5 páginas de vocabulario y precio del bloque 6.3–6.4** (charangas/txarangas, formaciones para fiestas, orquesta de verbena, permisos y SGAE, monologuista vs humorista) | **4–10 semanas.** SERP vacío = se rankea rápido, y son citables desde el primer día | 5 páginas bien escritas |
| ⚡⚡ | **Respuestas identificadas en foros y comunidades** (§2.5) | **Días**, para Perplexity | 1 h/semana |
| ⚡ | **Vídeos con transcripción en YouTube** (§3.4) | 1–3 meses | Ya se graban |
| ⚡ | **Menciones ganadas** (§2.3 fase 3) | 1–4 meses por mención | Continuo |
| 🐢 | **Índice del Caché** (§8.2) | 6–9 meses, pero el retorno es permanente | El proyecto grande |
| 🐢 | **Observatorio Municipal** (§8.3) | 9–15 meses | Año 2 |

> **La lectura, sin rodeos:** el 80% de la velocidad está en los **tres primeros días de trabajo** —descriptor, perfiles, Bing, Cloudflare— y en **cinco páginas de vocabulario que nadie ha escrito**. Ninguna de esas cosas necesita que el producto esté afinado, ni fotos bonitas, ni catálogo. **Se pueden hacer esta semana.** Lo grande (secciones 8) tarda, pero se empieza a acumular desde el día 1 sin coste, con una plantilla de cinco campos por evento.

### Días 1–30 · Los cimientos (nada de esto es contenido)

- [ ] **Comprobar y desactivar el bloqueo de crawlers de IA en Cloudflare** (§4.4). **Bloqueante.**
- [ ] `robots.txt` de §4.5 desplegado.
- [ ] **Descriptor público fijo adoptado y documentado** (§2.1.4). **Bloqueante: antes de abrir un solo perfil.**
- [ ] **Handle único reservado en las 6 plataformas** (§2.1.3 mecanismo 5). Si el corto no está libre en todas, se usa la variante larga en todas.
- [ ] **Test de desambiguación, línea base** en los 4 asistentes (§2.1.6). Se guarda la captura: es el "antes".
- [ ] Documento maestro de identidad: nombre, NAP, descripciones canónicas, logo (§2.3 fase 0).
- [ ] **Revisar que ninguna categoría de directorio ni de GBP diga `animación` ni `infantil`** (§2.1bis).
- [ ] Google Business Profile creado y verificado.
- [ ] **Bing Places + Bing Webmaster Tools + IndexNow.**
- [ ] LinkedIn Company Page, canal de YouTube, Crunchbase, Instagram.
- [ ] `Organization` schema con `sameAs` completo (§5.2).
- [ ] Párrafo de definición de entidad en `/nosotros` (§2.3 fase 4).
- [ ] GA4 con canal "IA generativa" (§7.4).
- [ ] Pregunta *"¿cómo nos has encontrado?"* en el brief (§7.5).
- [ ] **Plantillas de registro de datos** para los activos A y C (§8.5). Cinco minutos por evento, desde el primero.
- [ ] `llms.txt` publicado y olvidado (§4.1).
- [ ] Primera auditoría manual del panel de 20 prompts: **la línea base en cero**. Sin ella no hay con qué comparar.

### Días 31–90 · Formato, vocabulario y primeras menciones

- [ ] Las páginas 1, 2 y 3 de `04 §5` reescritas con la plantilla de §3.3.
- [ ] **`/charangas-y-txarangas`** (preguntas 13 y 15) — **la victoria rápida más clara del plan**: SERP vacío, vocabulario propio, cero competencia.
- [ ] **`/guias/formaciones-para-fiestas-populares`** (pregunta 16) con la tabla comparativa de 6 formaciones.
- [ ] `/orquestas-para-fiestas-patronales/cuanto-cuesta` (pregunta 12) **adelantada de la 2ª oleada**: es la pregunta sin respuesta pública en toda España.
- [ ] `/guias/agencia-o-directo` (pregunta 18) — la URL nueva más importante del mapa.
- [ ] `/guias/preguntas-antes-de-contratar` (pregunta 19).
- [ ] Vídeos de directo a YouTube con títulos, descripciones y **transcripciones** (§3.4).
- [ ] Primeras 5 menciones ganadas: webs de artistas + una finca + prensa local del primer evento.
- [ ] **Verificar en logs** que `OAI-SearchBot`, `PerplexityBot` y `ClaudeBot` están pasando.
- [ ] Encuesta de cachés a artistas: diseñada y lanzada.

### Días 91–180 · Cobertura y dato propio

- [ ] Preguntas 1–17 con su bloque obligatorio publicado.
- [ ] `/orquestas-para-fiestas-patronales/permisos-seguros-y-sgae` (pregunta 14).
- [ ] **Índice Show Up del Caché, 1ª edición** — HTML + CSV con CC BY 4.0 + DOI en Zenodo + nota de prensa.
- [ ] 15 dominios únicos mencionando la marca.
- [ ] Evaluar Otterly.ai si la auditoría manual empieza a costar más de 2 h/mes.
- [ ] Primer intento de Wikidata **solo si** ya hay 3 menciones en medios serios.

### Días 181–365 · Consolidación

- [ ] Preguntas 21–30 (segunda oleada).
- [ ] Mapa de Sitios publicado con ≥15 fichas.
- [ ] Observatorio Municipal: recolección y normalización de una comunidad autónoma.
- [ ] Actualización de las páginas de precio con datos nuevos — **la frescura es lo que retiene la cita** (§3.1 regla 15).
- [ ] 25 dominios únicos. Tasa de mención del panel: 25%.

---

## 10. Lo que NO hay que hacer

1. **No construir una arquitectura paralela "para IA".** Las mismas URLs de `04`, escritas mejor.
2. **No comprar herramientas de visibilidad en IA antes del mes 6.** El dinero va al dato propio.
3. **No hacer astroturfing en Reddit ni en foros.** Rompe la marca entera (`01 §8`, `06 §9`) y es detectable.
4. **No meter texto oculto ni instrucciones a modelos en el HTML.** Riesgo reputacional total, beneficio cero.
5. **No añadir schema "para IA" más allá de `04 §6`.** El estudio controlado dice que no funciona.
6. **No creerse a nadie que prometa citas en ChatGPT en 30 días.** El plazo real de entidad son 30–90 días **después** de que las menciones existan.
7. **No bloquear crawlers de entrenamiento** sin releer §4.3.
8. **No publicar el Índice del Caché con datos inventados o redondeados a ojo.** Un dato sin metodología no es un activo: es un pasivo. Y si alguien lo comprueba, se lleva por delante lo único que esta marca vende.
9. **No dejar de actualizar.** El 70% de las citas rota en 2–3 meses. Publicar y olvidar es publicar y desaparecer.
10. **No escribir el nombre de la marca solo fuera de la web.** Nunca `Show Up` a secas en un perfil, una nota de prensa o una ficha de directorio. Siempre con descriptor (§2.1.4). Es la regla que más veces se va a incumplir por inercia y la que más caro sale.
11. **No usar la palabra `animación` ni nombrar el espectáculo infantil,** ni siquiera para descartarlo (§2.1bis). Los modelos aprenden por coocurrencia, no por polaridad.
12. **No publicar las páginas de vocabulario con definiciones copiadas de Wikipedia.** El valor está en que las escriba alguien que ha contratado 200 charangas. Una definición genérica no se cita: se ignora, porque el modelo ya la tiene.
13. **No perder el tono.** Todo lo de este documento se puede hacer sin escribir una sola frase que no pase el filtro de `01 §8`. La frase-respuesta es fría porque es una ficha técnica, no porque la marca se haya vuelto fría. Si en algún momento la web empieza a sonar a documento SEO, se ha hecho mal.

---

## 11. Fuentes

**Investigación primaria / académica**
- Aggarwal, Murahari, Rajpurohit, Kalyan, Narasimhan, Deshpande — *GEO: Generative Engine Optimization*, KDD '24 — https://arxiv.org/abs/2311.09735
- Tian, Chen, Tang, Liu, Jia — *Diagnosing and Repairing Citation Failures in Generative Engine Optimization*, marzo 2026 — https://arxiv.org/pdf/2603.09296

**Documentación oficial**
- Google Search Central — *AI features and your website* — https://developers.google.com/search/docs/appearance/ai-features
- Wikidata — *Notability* — https://www.wikidata.org/wiki/Wikidata:Notability
- Cloudflare — *Cloudflare Just Changed How AI Crawlers Scrape the Internet-at-Large* — https://www.cloudflare.com/press/press-releases/2025/cloudflare-just-changed-how-ai-crawlers-scrape-the-internet-at-large/

**Estudios de industria a gran escala**
- Ahrefs — *An Analysis of AI Overview Brand Visibility Factors (75K Brands Studied)* — https://ahrefs.com/blog/ai-overview-brand-correlation/
- Ahrefs — *We Analyzed 137K Sites: 97% of llms.txt Files Never Get Read* — https://ahrefs.com/blog/llmstxt-study/
- Ahrefs — *What Is llms.txt, and Should You Care About It?* — https://ahrefs.com/blog/what-is-llms-txt/
- Search Engine Land — *How schema markup fits into AI search — without the hype* — https://searchengineland.com/schema-markup-ai-search-no-hype-472339
- Stan Ventures — *Schema Markup Has No Meaningful Impact on AI Citations* (estudio Ahrefs 2026) — https://www.stanventures.com/news/schema-markup-has-no-meaningful-impact-on-ai-citations-7231/
- Semrush — *AI Overviews Study* (10M+ keywords, 2025) — https://www.semrush.com/blog/semrush-ai-overviews-study/
- Evertune vía Mean.ceo — *AI Citation Study: Listicles, Articles and Product Pages* (25.000 URLs citadas, mayo 2026) — https://blog.mean.ceo/startup-news-ai-citation-study-listicles-articles-product-pages-2026/
- The Digital Bloom — *Google AI Overviews 2025: Top Cited Domains & Traffic Shifts* — https://thedigitalbloom.com/learn/google-ai-overviews-top-cited-domains-2025/

**Funcionamiento de los motores**
- iPullRank — *How AI Mode Works* — https://ipullrank.com/how-ai-mode-works
- Aleyda Solís — *Google AI Mode's Query Fan-Out Technique* — https://www.aleydasolis.com/en/ai-search/google-query-fan-out/
- Leapd — *How ChatGPT, Google AI Overviews, and Perplexity Source Information in 2026* — https://www.leapd.ai/blog/ai-visibility/how-chatgpt-google-ai-overviews-and-perplexity-source-information-in-2026
- LLM Pulse — *How Does Perplexity Work? How It Finds, Ranks and Cites Sources* — https://llmpulse.ai/blog/how-perplexity-works/
- Hashmeta — *Why Perplexity Loves Reddit* — https://hashmeta.com/blog/why-perplexity-loves-reddit-a-deep-dive-into-its-citation-behaviour/

**Crawlers y robots.txt**
- Cite.sh — *Which AI Crawlers to Allow in robots.txt: 2026 List* — https://www.cite.sh/blog/ai-crawler-guide/
- Presenc AI — *AI Crawler Cheat Sheet 2026* — https://presenc.ai/research/ai-crawler-cheat-sheet
- Search Engine Land — *Cloudflare to block AI crawlers by default* — https://searchengineland.com/cloudflare-to-block-ai-crawlers-by-default-with-new-pay-per-crawl-initiative-457708

**Local y negocio**
- GMB-Radar — *How ChatGPT Recommends Local Businesses* — https://www.gmbradar.com/blog/how-chatgpt-recommends-local-businesses
- Martech Zone — *How Bing IndexNow Helps Brands Boost ChatGPT Discoverability* — https://martech.zone/chatgpt-visibility-and-bing-indexnow/
- MLforSEO — *Wikidata for Brands: Notability Criteria and a Realistic Path* — https://www.mlforseo.com/knowledge-graph-strategy/wikidata-for-brands-notability-criteria-and-a-realistic-path/

**Datos de España**
- Funcas — *El uso frecuente de ChatGPT en España sube del 4% al 28% entre 2023 y 2025* — https://www.funcas.es/prensa/el-uso-frecuente-de-chatgpt-en-espana-sube-del-4-al-28-entre-2023-y-2025/
- SE Ranking — *Tráfico de IA en España: datos y tendencias 2026* — https://seranking.com/es/blog/trafico-ia-espana/

**Vocabulario del sector (§3.5 y §6.4) — el estado del arte que hay que superar**
- Dialnet — *Aproximación al estudio de la charanga: historia, repertorio, funciones* (artículo académico, la única fuente seria localizada) — https://dialnet.unirioja.es/descarga/articulo/3242950.pdf
- Wikipedia — *Charanga (Spain)* — https://en.wikipedia.org/wiki/Charanga_(Spain)
- Instituto Cultural Vasco (EKE) — *Txaranga, fanfarre, tamborrada* — https://www.eke.eus/en/partaideak/cat/musika/artistak/fanfareak
- Iuris Causa — *¿Charangas o sociedades musicales?* (distinción charanga / banda de música) — https://www.iuriscausa.com/charangas-o-sociedades-musicales/
- Jaiekin — categorías de *charangas* y *elektrotxarangas* (evidencia de que el término comercial existe y nadie lo define) — https://jaiekin.com/cat/elektrotxarangas/
- Festia — agenda de orquestas y verbenas en España (**publica actuaciones, no precios**) — https://festia.es/eventos
- Orquestas de Galicia — agenda de verbenas (**ídem: sin datos económicos**) — https://www.orquestasdegalicia.es/

> **Sobre estas siete fuentes:** son, literalmente, todo lo que existe. Un PDF académico de 2010, dos entradas enciclopédicas breves, una nota jurídica y dos agendas de actuaciones **sin un solo precio**. Ninguna responde *"¿cuánto cuesta contratar una charanga?"* ni *"¿qué diferencia hay entre una txaranga y una charanga?"* en formato citable. **Esa lista es el mapa del hueco.**

**Medición**
- Search Console — informes de IA (junio 2026) — https://superframeworks.com/articles/google-search-console-ai-overviews-report
- AirOps — *AI Referral Traffic vs Organic Search: Conversion Rates* — https://www.airops.com/blog/ai-referral-traffic-conversion-rates
- Rankability — *22 Best AI Search Rank Tracking & Visibility Tools for 2026* — https://www.rankability.com/blog/best-ai-search-visibility-tracking-tools/

> **Nota sobre la calidad de las fuentes.** Solo dos de estas referencias son investigación revisada por pares (los dos arXiv). El resto son estudios de proveedores de herramientas —Ahrefs, Semrush, Evertune— con acceso a datos que nadie más tiene, pero con un producto que vender. Los estudios de Ahrefs se han priorizado por metodología (grupos de control, n grande) y porque, notablemente, **concluyen en contra de su propio interés comercial** en el caso de `llms.txt` y del schema. Todo lo que en este documento se presenta como "no funciona" está respaldado por un estudio con grupo de control; todo lo que se presenta como "correlaciona" se presenta como correlación y no como causa. **Ese rigor no es una formalidad académica: es el mismo estándar que la sección 8 exige a los datos propios de Show Up.** No se puede publicar un índice de precios con metodología si se construye la estrategia sobre estadísticas de LinkedIn.
