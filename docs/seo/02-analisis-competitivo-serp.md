# Show Up — Análisis competitivo del SERP español

> Radiografía del campo de batalla. Documento de inteligencia, no de deseos.
> Complementa y **corrige en algunos puntos** a `/docs/04-arquitectura-seo.md`, que fue escrito con una foto más gruesa del SERP.
> Todo lo que hay aquí se ha verificado contra resultados y páginas reales en julio de 2026. Las URLs son literales y navegables.

---

## 0. Metodología, y qué es dato y qué es criterio

Hay que decirlo antes de nada porque el resto del documento pierde valor si no se distingue:

| Tipo de afirmación | Fuente | Fiabilidad |
|---|---|---|
| Qué URLs aparecen para una búsqueda | Consulta real al índice de Google (es) | **Dato.** |
| Estructura de una página competidora (H1/H2, longitud, schema, precios, elementos) | Fetch y disección de la página en vivo | **Dato.** |
| Rangos de precio que publica cada competidor | Copiados literalmente de sus páginas | **Dato.** |
| Volúmenes de búsqueda | **No hay acceso a Ahrefs/SEMrush en este entorno** | **Estimación por orden de magnitud.** Marcados como tal. |
| Autoridad de dominio (DA/DR) | Sin acceso a herramienta | **Inferencia** a partir de antigüedad, footprint y pertenencia a grupo. Marcado como tal. |
| Presencia de AI Overview / PAA / local pack | Inferencia por patrón de intención + datos públicos de prevalencia 2026 | **Inferencia razonada.** Hay que verificarlo a mano el día 1. |

**Tarea de verificación pendiente y no negociable (día 1 de proyecto):** hacer las 25 búsquedas del anexo A a mano, en incógnito, desde Barcelona y desde Madrid, en móvil y en escritorio, y hacer captura. Media hora de trabajo que convierte tres cuartas partes de este documento de "inferencia sólida" a "dato". Nada de lo que sigue debe cerrarse presupuestariamente sin ese paso.

---

## 1. Quién domina hoy: el mapa de poder

El SERP español de contratación de artistas no lo domina "la competencia". Lo dominan **cinco tipos de jugador distintos**, cada uno con un modelo de negocio distinto, y confundirlos es el error estratégico más caro que se puede cometer. A Bodas.net no se le gana; a Celebrents sí. Y no es cuestión de esfuerzo, es que juegan a cosas diferentes.

### 1.1 Los cinco arquetipos

| # | Arquetipo | Ejemplos | Modelo de negocio | Por qué gana en Google |
|---|---|---|---|---|
| **A** | **Portal vertical de bodas** | Bodas.net, Zankyou, Todoboda, Bodaclick | Suscripción del proveedor | Autoridad de grupo internacional + UGC masivo (reseñas) + cobertura geográfica total |
| **B** | **Marketplace horizontal de servicios** | Cronoshare, Milanuncios | Lead selling / clasificados | Autoridad de dominio brutal aplicada a un vertical al que dedican 1 página |
| **C** | **Agregador de artistas** | Espectalium, ContratarArtistas.com, Partfy, Celebrents, Artistealo, Supermúsica, Fillevents, La Factoría del Show, Musiqua | Comisión / intermediación | Escala programática: N artistas × M ciudades = miles de URLs |
| **D** | **Agencia regional / productora** | Tuset Eventos, Circodelia, Espectáculos Vértigo, Eventos Barcelona, Ispasión, Magos Madrid, Tus Magos | Servicio | Antigüedad + SEO local + marca en su ciudad |
| **E** | **Proveedor directo (el artista)** | Grupo Musical Feeling, Kalifornia, Maikelnaits, Calle Habana, Iván Mora, thesweetrockers | Actuación propia | Contenido honesto de nicho, pero web pobre y sin arquitectura |

Show Up nace, técnicamente, como un **D con ambición de C** — pero su plataforma de marca le prohíbe ser un C. Eso no es una limitación: es el único hueco defendible, y toda la sección 4 lo desarrolla.

### 1.2 Ficha por competidor

---

#### **Bodas.net** — el muro

- **URLs de referencia:** `https://www.bodas.net/bodas/proveedores/musica` · `https://www.bodas.net/bodas/proveedores/musica/barcelona` · `https://www.bodas.net/bodas/proveedores/musica/madrid`
- **Qué domina:** prácticamente todo el territorio `[música/músicos/grupos/DJ/orquesta] + boda [+ provincia] [+ ciudad]`. Es el resultado #1 o #2 en todas las variantes con modificador geográfico. También domina la cola informacional de bodas vía `/articulos/`.
- **Tipo de página:** directorio facetado con paginación profunda. La página de Barcelona declara **101 resultados** filtrables y afirma tener **600 empresas** en la región; el índice nacional de música llega a la **página 144** de paginación (`.../musica--144`), lo que sitúa el número de URLs de proveedor de música en varios miles.
- **Autoridad (inferida):** la más alta del sector con diferencia. Pertenece a **The Knot Worldwide**, grupo internacional con presencia en decenas de mercados y enlaces desde medios de gran tirada. Dominio con más de dos décadas de historial.
- **Por qué gana — cuatro razones, y solo una es SEO clásico:**
  1. **UGC de reseñas verificadas.** Cada ficha acumula opiniones reales con nota y volumen (`5.0 (113)`, `4.9 (101)`). Es contenido que Google no encuentra en ningún otro sitio y que el usuario busca activamente. **Show Up no puede replicar esto en 18 meses. Punto.**
  2. **Datos agregados de precio que nadie más tiene.** La página de Barcelona publica: precio más bajo 324 €, rango habitual 450–900 €, precio medio 748 €, máximo 1.409 €. Eso sale de su propia base de transacciones. Es un activo de datos, no de contenido.
  3. **Cobertura geográfica exhaustiva.** Tiene página para Guadalajara, Pontevedra, León... y para el municipio dentro de la provincia (`/musica/girona/girona`). No hay hueco geográfico que atacar por debajo.
  4. **Intención perfecta.** Quien busca "músicos para boda en Barcelona" quiere **comparar varios**. Un directorio es literalmente el mejor formato de respuesta. Google acierta poniéndolo primero.
- **Su punto débil real:** el directorio compara **proveedores**, no **decisiones**. No responde "¿cuántos músicos aguanta mi masía?", "¿el trío se queda corto con 140 invitados?", "¿qué pasa con el límite de decibelios?". Su FAQ es genérica y autogenerada. Ahí es donde se le puede quitar tráfico — no en su terreno, en el adyacente.

---

#### **Cronoshare** — el que ocupa el hueco del precio con una plantilla

- **URLs de referencia:** `https://www.cronoshare.com/cuanto-cuesta/musica-boda` · `https://www.cronoshare.com/cuanto-cuesta/contratar-mago` · `https://www.cronoshare.com/cuanto-cuesta/monologuista`
- **Qué domina:** **todo el bloque `cuánto cuesta [X]`**. Es el resultado #1 para "cuánto cuesta contratar música para una boda", "cuánto cuesta contratar un mago", "cuánto cuesta contratar monologuistas" y decenas más.
- **Tipo de página:** guía de precios templatizada. Misma estructura exacta en las tres páginas analizadas: H1 pregunta → tabla de precios medios por tipo de evento → tabla por ciudad → tabla por especialidad → factores que influyen → FAQ → testimonios de profesionales → calculadora interactiva.
- **Autoridad (inferida):** alta y **transversal**. Cronoshare cubre albañiles, fontaneros, jardineros, pintores... Su autoridad de dominio no viene del sector de eventos, viene de reformas y hogar. Aplican esa autoridad a un vertical donde tienen una sola página. **Esto es clave: no defienden el territorio, lo ocupan de paso.**
- **Por qué gana:** intención perfecta + autoridad prestada + señal de frescura agresiva (las páginas van fechadas *"6 enero, 2026"* y *"13 enero, 2026"*; refrescan la fecha sistemáticamente) + datos declarados como propios ("miles de solicitudes").
- **Por qué es batible — y es el hallazgo más importante de este documento:**

  | Lo que Cronoshare da | Lo que NO da |
  |---|---|
  | Rangos amplios (200–675 €, 500–3.000 €, 700–5.000+ €) | Qué hace que estés en la parte baja o alta del rango |
  | Precio por especialidad | Precio por **contexto real**: 140 invitados en exterior con límite acústico |
  | Factores genéricos (temporada, duración, desplazamiento) | Qué entra y qué no entra en el caché (equipo, técnico, horas extra, IVA, SGAE) |
  | Calculadora de leads | Cancelaciones, señal, quién emite factura, retenciones |
  | Fecha refrescada | Un solo dato de una operación real |

  Sus rangos son tan anchos (`700–5.000+ €`) que **no ayudan a decidir**. Un rango de 4.300 € de amplitud es una forma educada de no responder. Ahí hay un hueco de utilidad enorme, y quien lo llene se lleva la búsqueda comercial más valiosa del sector.

---

#### **Espectalium** — el rey de la escala programática

- **URLs de referencia:** `https://www.espectalium.com/contratar-artistas-para-eventos/madrid/` · `.../barcelona/` · `https://www.espectalium.com/contratar-magos-para-eventos-y-fiestas/` · `https://www.espectalium.com/contratar-monologuistas/`
- **Qué domina:** `contratar artistas para eventos [+ ciudad]`, `contratar [tipo de artista] [+ ciudad]`, `agencia de espectáculos [+ ciudad]`. Cabecera del bloque transaccional B2B/B2G.
- **Tipo de página:** landing de categoría × ciudad. Disección de la de Madrid:
  - ~2.800–3.200 palabras totales, de las cuales **solo el ~30% es texto editorial**. El 65% es listado de artistas.
  - H2 en mayúsculas con la ciudad en minúscula sin corregir (*"CONTRATACIÓN DE ARTISTAS para Eventos en madrid"*) — señal inequívoca de generación por plantilla.
  - 50+ H3, todos nombres de artista.
  - **Las imágenes son placeholders GIF en base64 que no cargan** en el render inicial. Lazy loading mal implementado: penaliza LCP y no aporta señal de imagen.
  - Sin vídeo.
  - Pie con **"Trabajamos en toda España:" seguido de las 52 provincias**.
- **Autoridad (inferida):** alta en el vertical. 10+ años declarados. El activo real no es el contenido, es la **malla interna**: 15+ categorías × 52 provincias × 8 páginas de paginación de catálogo. Decenas de miles de URLs enlazadas entre sí.
- **Por qué gana:** cobertura absoluta de la matriz `tipo × geo`. Cuando alguien busca "contratar malabaristas en Cuenca", Espectalium tiene esa página y nadie más la tiene.
- **Punto débil:** contenido de plantilla puro, imágenes rotas, cero prueba real, cero vídeo, y un bloque de FAQ idéntico en todas las ciudades. Es **exactamente el tipo de página que las actualizaciones de contenido útil de Google llevan tres años degradando**. Rankea por inercia de autoridad y malla interna, no por calidad. Vulnerable a medio plazo — pero "medio plazo" aquí significa que no se puede contar con ello en 18 meses.

---

#### **Partfy** — el agregador inflado

- **URL de referencia:** `https://partfy.com/monologuista`
- **Qué domina:** `contratar [tipo de artista] para fiestas y eventos`, muy fuerte en monologuistas y animación.
- **Tipo de página:** catálogo + contenido inflado. Disección:
  - **~5.000–6.000 palabras**, de las cuales el peritaje estima **~60% relleno**. La sección "¿Qué ofrece Partfy?" repite el mismo concepto cinco veces. La frase "mejor monologuista/cómico" aparece 30+ veces.
  - H1 conversacional (*"¿Estás buscando monologuistas a tu medida?"*) — no lleva la keyword exacta, lo cual es una debilidad on-page.
  - **112 resultados**, 12 visibles por página.
  - **Precios visibles y transparentes: desde 55 € hasta 2.900 €, precio medio destacado 230 €.** Esto es un activo real.
  - Menciona a **Leo Harlem y Miki Nadal** repetidamente sin garantizar disponibilidad — captura búsquedas de marca ajena. Táctica agresiva y de dudosa sostenibilidad.
  - FAQ genérica, intercambiable entre categorías.
- **Autoridad (inferida):** media. Dominio joven comparado con Espectalium.
- **Por qué gana:** transparencia de precio + volumen de fichas + long tail geográfico (40+ ciudades enlazadas).
- **Punto débil:** el contenido es keyword stuffing con formato moderno. Y el precio medio que publica (230 € para un monologuista) **es de mercado de fiesta privada, no de evento corporativo**. Quien busca un monologuista para una cena de empresa de 200 personas y ve "230 € de media" recibe una expectativa falsa. Ese desajuste es una grieta de credibilidad explotable.

---

#### **Celebrents** — la plantilla más clonable del sector

- **URLs de referencia:** `https://www.celebrents.es/girona/grupos-de-jazz/` · `https://www.celebrents.es/madrid/magos/`
- **Tipo de página:** matriz `[ciudad] × [tipo de artista]`. ~3.000 palabras. Y aquí está el dato demoledor de la disección:

  > La página "Grupos de Jazz para eventos, bodas y fiestas en **Girona**" tiene **4 profesionales listados** y unas 3.000 palabras, de las cuales una parte sustancial es **la historia del jazz desde finales del siglo XIX** — texto que funciona idéntico para Girona, Badajoz o Lugo.

  Frases literales de plantilla: *"El precio medio de Grupos de Jazz en Girona es 630€ por servicio"*, *"Es importante que tengas claro qué estilo de música te gusta"*.
- **Por qué gana hoy:** cubre combinaciones `[ciudad] × [género]` que nadie más cubre, y tiene un dato de precio por celda.
- **Por qué es el objetivo prioritario:** 4 proveedores, cero fotos propias, cero vídeo embebido, cero conocimiento local. **Una página con dos casos reales en masías del Empordà, fotos propias y una frase sobre el límite de decibelios de la zona le gana esta búsqueda.** Es el competidor más batible del mapa.

---

#### **Supermúsica, Fillevents, ContratarArtistas.com, Artistealo, Musiqua, La Factoría del Show** — la segunda línea

| Dominio | URL tipo | Qué domina | Nota |
|---|---|---|---|
| Supermúsica | `https://supermusica.es/musica-para-eventos/musicos-para-bodas/` · `/ciudades/contratar-musicos-en-madrid/` | `músicos para bodas`, `grupos musicales para bodas` | Declara **80+ artistas verificados** y "presupuesto gratis en 24 h". Es el competidor **conceptualmente más parecido a Show Up** y el más peligroso: catálogo curado, no infinito. Vigilar. |
| Fillevents | `https://www.fillevents.es/grupos-musicales-para-bodas/` | `grupos musicales para bodas` | Title con `▷` y *"El Mejor Precio. ¡¡LLÁMANOS!!"*. SEO de 2015 que sigue rankeando. Señal de que el SERP no está tan afinado como parece. |
| ContratarArtistas.com | `https://contratarartistas.com/ciudad/madrid-_1` · `/musicos-y-grupos-musicales/...` | `contratar artistas [+ ciudad]` | URLs con IDs numéricos (`-_1`, `-5.html`). Arquitectura antigua. Rankea por antigüedad. |
| Artistealo | `https://www.artistealo.com/contratar-servicio/orquesta/alicante/` | `contratar orquesta [+ provincia]` | Matriz servicio × provincia. **Está ya dentro del territorio de fiestas patronales** — el doc 04 dice que ese SERP está vacío; no lo está del todo. |
| Musiqua | `https://www.musiqua.es/generos/grupos-musicales-bandas/girona` | `grupos musicales [+ ciudad]` | Matriz género × ciudad. |
| La Factoría del Show | `https://www.lafactoriadelshow.com/grupos-de-musica/bodas/` · `/agencias-espectaculos/madrid/` | mixto | 20+ años declarados. Blog activo con contenido de consejo. |

---

#### **Gigstarter** — el outsider con modelo distinto

- **URL:** `https://www.gigstarter.es/` · `/contratar-reservar-banda`
- Plataforma neerlandesa activa en España **desde el 30/09/2016**. Modelo freemium sin comisión, contacto directo artista-cliente, sistema de evaluaciones.
- **Por qué importa:** es el único con **autoridad internacional heredada** (dominio matriz .nl consolidado) en el nicho de música en vivo puro. Rankea bien en `contratar banda`, `contratar grupo de música`.
- **Por qué no es la amenaza principal:** su intención es "reservar una banda", no "resolverme la noche". No compite en bodas de forma seria ni en corporativo.

---

#### **Milanuncios** — ruido con autoridad

- **URLs:** `https://www.milanuncios.com/anuncios/orquestas-para-fiestas-patronales.htm` · `/servicios-en-madrid/grupo-musical.htm` · `/anuncios/orquestas-bodas.htm`
- Rankea por **autoridad de dominio bruta** (Adevinta) aplicada a páginas de listado de clasificados que son, en contenido, casi vacías.
- **Relevancia estratégica: baja como competidor, alta como diagnóstico.** Que Milanuncios aparezca en el top de `orquestas para fiestas patronales` es la prueba de que **ese SERP está desnutrido**. Google está poniendo clasificados porque no encuentra nada mejor. Es una señal verde enorme.

---

#### **Zankyou, Bodaclick, Todoboda** — los portales en decadencia relativa

- Zankyou (`https://www.zankyou.es/`) mantiene marca fuerte pero su directorio de proveedores está claramente por detrás de Bodas.net en el SERP.
- Bodaclick (`https://www.bodaclick.com/servicios/`) sigue reclamando "el 40% de las bodas de España" pero **su ficha aparece listada dentro de Bodas.net** (`https://www.bodas.net/animacion/bodaclick--e248358`) — es decir, el que fue portal líder es ahora proveedor en el portal de su competencia. Eso es una lápida.
- Todoboda (`https://www.todoboda.com/bodas/proveedores/musica/girona`) aparece en cola, por debajo de Bodas.net en las mismas búsquedas.
- **Conclusión:** el vertical de bodas se ha consolidado en un ganador. No hay tres portales que batir: hay uno, y no se bate.

---

### 1.3 Tabla resumen: quién domina qué

| Territorio de búsqueda | #1 real | Tipo de página | ¿Batible en 18 meses? |
|---|---|---|---|
| `músicos/grupos para boda [+ ciudad]` | Bodas.net | Directorio facetado + UGC | **No.** |
| `contratar artistas para eventos [+ ciudad]` | Espectalium | Landing programática | **No** en head; sí en variantes largas. |
| `cuánto cuesta [artista/música] [+ contexto]` | Cronoshare | Guía de precios templatizada | **Sí.** Prioridad 1. |
| `[género musical] + [ciudad]` | Celebrents / Musiqua | Plantilla clonada, 4 fichas | **Sí.** Prioridad 2. |
| `contratar monologuista [+ empresa]` | Partfy / Espectalium / Cronoshare | Catálogo inflado | **Sí.** Prioridad 1. |
| `contratar orquesta fiestas patronales` | Artistealo / Milanuncios / Espectáculos Vértigo | Matriz provincia + clasificados | **Sí.** Prioridad 1. |
| `cómo contrata un ayuntamiento una orquesta` | PDFs municipales, `derecholocal.es`, `elderecho.com` | Doctrina jurídica y expedientes | **Sí, en su versión comercial.** Ver §4.3. |
| `qué contratar cena de navidad empresa` | Blogs de hotel, Sage, VenuesPlace | Listículo genérico | **Sí.** Prioridad 2. |
| `dj o grupo en directo boda` | Bodas.net `/articulos/` + blogs de proveedor | Artículo editorial | **Sí, con matices.** Ver §4.5. |
| `rider técnico` / `contrato de actuación` | Blogs legales y de músicos | Artículo | **Sí, pero no convierte.** Ver §6. |

---

## 2. Anatomía de las páginas que rankean

Cinco disecciones completas de las URLs que ocupan las posiciones más valiosas. Esto es el patrón que hay que igualar y superar.

### 2.1 `cronoshare.com/cuanto-cuesta/musica-boda`

**Posición:** #1 para "cuánto cuesta contratar música para una boda" y variantes.

| Variable | Dato |
|---|---|
| Longitud | ~3.200–3.500 palabras |
| H1 | *"¿Cuánto cuesta contratar música para una boda?"* — pregunta literal, coincidencia exacta con la query |
| H2 | `¿Os gustaría saber cuánto cuesta la música para boda?` · `Tabla de precios de música para boda` · `Factores que pueden influir en el coste del servicio` · `Índice` |
| H3 | 15 en total. 5 son preguntas (religiosa, DJ vs grupo, cuándo contratar, misma formación ceremonia/cóctel, DJ/orquesta/grupo). 9 son factores (temporada, localización, invitados, experiencia, duración, solicitudes, vestimenta, desplazamiento, repertorio). |
| Tablas | 1 tabla maestra de 5 filas: DJ 200–675 € · Solista/dúo 250–1.000 € · Trío/cuarteto 500–3.000 € · Orquesta/banda 700–5.000+ € · Extras 39–800 € |
| Otros rangos | "300–700 €" general · "desde 100 €" · religiosa "170–1.470 €" |
| Elementos | 3 gráficos de precio · 3 fichas de profesional con portfolio · **calculadora interactiva** (selector de nº de asistentes) · múltiples botones "PIDE PRECIO GRATIS" · 3 testimonios con nota (9.9 / 10 / 9.8) |
| Vídeo | **Ninguno** |
| Frescura | *"6 enero, 2026"* visible en el cuerpo |
| Enlace externo | **Al INE** (datos de matrimonios). Un solo enlace de autoridad, bien elegido. |
| Enlaces internos | `/servicios/grupos-musica-bodas`, `/servicios/djs-profesionales`, `/cuanto-cuesta/mariachis`, `/cuanto-cuesta/charanga`, `/cuanto-cuesta/bailarines-para-eventos` |

**Lo que Google está premiando aquí, en orden:**
1. **Coincidencia exacta de H1 con la query.** No hay creatividad. La pregunta, tal cual.
2. **Índice de contenidos enlazado** (el H2 `Índice`) → genera enlaces de salto y ayuda a los sitelinks de sección.
3. **Tabla estructurada de precios.** Es lo que se cita en AI Overviews y en snippets.
4. **Fecha visible y reciente.** Query con intención de precio = Google prioriza frescura.
5. **Sub-preguntas como H3.** Cada H3-pregunta es una candidatura a People Also Ask.
6. **Un enlace externo a fuente oficial (INE).** Señal E-E-A-T barata y efectiva.

**Cómo se le gana, concretamente:**
- Igualar la estructura (H1 exacto, índice, tabla, fecha, sub-preguntas H3, enlace a fuente oficial).
- Y añadir lo que no tiene: **desglose de qué entra en el caché** (músicos, técnico, equipo de PA, iluminación, desplazamiento, dietas, horas extra, IVA, gestión SGAE), **rangos por contexto** (no "trío 500–3.000 €" sino "trío para cóctel de 80 personas en interior: 900–1.400 €"), **un caso real con factura desglosada**, y **la frase que ningún competidor escribirá jamás: en qué casos pagar más no compra nada mejor**.
- **Vídeo.** Cronoshare no tiene ninguno. Un vídeo corto de 90 s explicando el desglose, con `VideoObject`, en una vertical donde nadie marca vídeo, es la palanca de CTR más barata del plan.

---

### 2.2 `bodas.net/bodas/proveedores/musica/barcelona`

**Posición:** #1 para "músicos para boda Barcelona" y toda la familia.

| Variable | Dato |
|---|---|
| H1 | `Música para bodas en Barcelona` |
| H2 | `Filtrar` · `101 resultados` · `Música para bodas en Barcelona: ¡encontrad vuestra opción preferida!` · `¿Cuánto cuesta contratar la música para la boda en Barcelona?` · `Preguntas frecuentes en Música en Barcelona` · `Mira las opiniones de nuestras parejas sobre Música en Barcelona` · `Música en Barcelona por tipo` · `Música en Barcelona por zona` · `Otros proveedores de Barcelona para tu boda` |
| H3 | Nombres de proveedor (El Piano de tu Boda, Noze Romero, 22Duo...) |
| Texto editorial | Solo **200–250 palabras**. El resto es listado. |
| Confianza | Estrellas + nº de opiniones por ficha (`4.9 (101)`, `5.0 (113)`) · badges `TOP`, `PREMIUM`, `Wedding Awards` · `Responde en 24 horas` |
| Precios | Bloque de datos agregados: **mínimo 324 € · rango habitual 450–900 € · medio 748 € · máximo 1.409 €**. Y "Desde X €" en cada ficha. |
| Filtros | Población (+ "incluir cercanos") · Precio (6 tramos) · Servicios (8) · Estilos (13) · Tipo de formación (8) |
| FAQ | 6 preguntas, autogeneradas y genéricas |

**La lección brutal:** Bodas.net rankea #1 con **250 palabras de texto editorial**. La extensión no es el factor. Lo que Google premia aquí es **cobertura de opciones + señales de confianza de terceros + datos de precio agregados + facetado que resuelve la intención comparativa**.

**Lección operativa para Show Up:** no se le compite escribiendo más largo. Se le compite **cambiando la intención**. Bodas.net responde "¿quién hay?". Show Up tiene que responder "¿cuál de ellos y por qué?". Son búsquedas distintas y el usuario hace las dos.

---

### 2.3 `espectalium.com/contratar-artistas-para-eventos/madrid/`

| Variable | Dato |
|---|---|
| Longitud | 2.800–3.200 palabras (≈30% editorial real, 65% listado) |
| H1 | `Contratar artistas para eventos en Madrid` — coincidencia exacta |
| H2 | `CONTRATACIÓN DE ARTISTAS para Eventos en madrid` · `CANTANTES RECOMENDADOS para eventos en madrid` · `CONTRATACIÓN DE FAMOSOS en madrid` · `tu éxito al contratar artistas Y FAMOSOS, es nuestro éxito` · `Preguntas frecuentes` · `ESPECTALIUM, TU AGENCIA DE ARTISTAS Y FAMOSOS` |
| H3 | 50+, todos nombres de artista |
| Imágenes | 50+ **placeholders GIF base64 que no cargan** |
| Vídeo | Ninguno |
| Contacto | Formulario + teléfono `(+34) 601 89 63 77` + `contratacion@espectalium.com` |
| Enlaces internos | 15+ categorías · 50+ fichas · paginación 1–8 · cross-city · **listado de las 52 provincias en el pie** |

**Diagnóstico:** es una página que rankea **a pesar de su calidad, no por ella**. Los H2 con la ciudad en minúscula sin normalizar y el listado de 52 provincias en el pie son la firma de un generador. Las imágenes rotas son un problema real de LCP.

**Cómo se le gana:** no en `contratar artistas para eventos Madrid` (imposible: es su keyword, su marca y su malla). Se le gana en las derivadas donde su plantilla no dice nada: `qué artista encaja en una convención de 300 personas`, `monologuista o mago para cena de empresa`, `cuánto cuesta un artista para un evento de empresa`. Su página no responde ninguna.

---

### 2.4 `partfy.com/monologuista`

| Variable | Dato |
|---|---|
| Longitud | ~5.000–6.000 palabras · **~60% relleno** |
| H1 | `¿Estás buscando monologuistas a tu medida?` — **no lleva la keyword transaccional.** Debilidad on-page explotable. |
| H2 | `¿Cuánto cuesta contratar monologuistas?` · `Consejos de nuestros expertos` · `Preguntas frecuentes sobre contratar monologuistas` · `¿Qué ofrece Partfy?` |
| Catálogo | 112 resultados, 12 por página, 40+ ciudades enlazadas |
| Precios | **Desde 55 € hasta 2.900 €. Precio medio destacado: 230 €.** |
| Reseñas | 6 testimonios cortos ("Genial recomendable"), contadores de comentarios por ficha |
| FAQ | 5 preguntas genéricas, intercambiables con cualquier otra categoría |
| Táctica agresiva | Menciona a **Leo Harlem y Miki Nadal** 15+ veces sin garantía de disponibilidad |

**Diagnóstico:** contenido inflado con formato moderno. Pero **transparencia de precio excelente**, y eso es lo que le da el snippet.

**El hueco concreto:** su precio medio de 230 € corresponde al mercado de fiesta privada. **El segmento corporativo real está entre 3.000 y 8.000 € para un humorista de nivel medio con 30–45 minutos.** Nadie está atendiendo bien esa franja. Una página que separe explícitamente *"monologuista para cumpleaños (200–600 €)"* de *"monologuista para cena de empresa de 200 personas (1.500–8.000 €)"* atiende una intención que hoy recibe una respuesta engañosa.

---

### 2.5 `celebrents.es/girona/grupos-de-jazz/`

| Variable | Dato |
|---|---|
| H1 | `Los mejores Grupos de Jazz para eventos, bodas y fiestas en Girona` |
| Secciones | `Precios de Grupos de Jazz en Girona` · `Últimas opiniones` · `Todo lo que necesitas saber sobre Grupos de Jazz en Girona` |
| Longitud | ~3.000 palabras |
| Proveedores listados | **4** (O2, Essential Feel, Live Bands Music, Xavi Lloses pianíssimo) |
| Precios | medio 630 € · mín. 275 € · máx. 2.355 € |
| Imágenes | 4, de las bandas. Sin vídeo embebido. |
| Contenido local real | **Cero.** Incluye la historia del jazz desde finales del s. XIX. |

**Esto es la definición de doorway page con maquillaje.** 3.000 palabras para 4 fichas. Es el competidor que hay que atacar primero porque **la barrera de entrada es una tarde de trabajo con fotos propias**.

---

### 2.6 El patrón común: qué premia Google en esta vertical

Del cruce de las cinco disecciones sale una lista de nueve elementos. Los cinco primeros los tienen todos los que rankean; los cuatro últimos **no los tiene casi nadie** y son la oportunidad.

**Lo que ya tienen (mínimo de entrada, obligatorio):**
1. H1 con coincidencia exacta o casi exacta con la query.
2. **Tabla de precios.** Sin excepción. Todos los que rankean en el bloque comercial publican rangos.
3. Bloque de FAQ con preguntas como encabezado.
4. Índice de contenidos enlazado en páginas largas.
5. Señal de frescura visible (fecha) en queries de precio.

**Lo que casi nadie tiene (aquí está la ventaja):**
6. **Vídeo embebido con `VideoObject` marcado.** Ninguna de las cinco páginas analizadas tiene vídeo. En una vertical que **vende un espectáculo**, es un fallo colectivo de sector.
7. **Fotografía propia y verificable.** Espectalium tiene GIFs rotos; Celebrents 4 fotos de agencia; Cronoshare gráficos genéricos.
8. **Contenido que recomienda en contra.** Nadie dice "esto no te encaja". Todos venden todo.
9. **Precio contextualizado en vez de rango.** El rango es la forma que tiene el sector de no comprometerse.

Los puntos 6, 7, 8 y 9 son, literalmente, la plataforma de marca de Show Up. **Coincidencia perfecta entre lo que la marca quiere decir y lo que el SERP tiene vacío.** No hay que elegir entre ser fiel a la marca y hacer SEO.

---

## 3. Features del SERP: cuánto clic queda de verdad

### 3.1 Contexto 2026, sin edulcorar

Los datos públicos disponibles a julio de 2026 son duros y hay que asumirlos antes de proyectar tráfico:

| Métrica | Valor | Fuente |
|---|---|---|
| Búsquedas de Google que activan AI Overview | **~43%** | [ecosistemastartup.com](https://ecosistemastartup.com/google-ai-overviews-43-trafico-organico-cae-61-en-2026/) |
| Búsquedas sin clic (global) | **~68%** | [seoestudios.es](https://www.seoestudios.es/busquedas-zero-click/) |
| Búsquedas sin clic (España/Europa) | **>58%** | [ismajimenez.com](https://ismajimenez.com/google-ai-overviews-como-impactan-el-ctr-organico-y-el-trafico-en-espana/) |
| Búsquedas sin clic **cuando hay AI Overview** | **~83%** | idem |
| En AI Mode | **~93%** | idem |
| Caída de CTR en posición #1 interanual | **−32%** | idem |
| Caída de CTR en queries informacionales | **−36,9%** | [citado.co](https://citado.co/blog/impacto-ai-overviews-trafico) |
| Caída de CTR orgánico agregado (Seer Interactive) | **−61%** | [reddeperiodistas.com](https://www.reddeperiodistas.com/con-y-sin-ai-overviews-google-destroza-el-negocio-del-clic/) |

**Traducción para este proyecto:** una estimación de tráfico basada en "volumen de búsqueda × CTR de posición 3" hecha con las tablas de CTR de 2021 **está inflada entre 2× y 4×**. Cualquier proyección de negocio que se construya sobre esas tablas miente.

### 3.2 Mapa de features por tipo de búsqueda

Estimación razonada por intención. **Verificar a mano — anexo A.**

| Tipo de búsqueda | Ejemplo | AI Overview | PAA | Local pack | Imágenes | Vídeo | Anuncios | **Clic orgánico disponible (est.)** |
|---|---|---|---|---|---|---|---|---|
| **Precio / cuánto cuesta** | `cuánto cuesta un grupo de música para una boda` | **Muy probable** | Sí | No | Poco | Poco | Medio | **20–30%** |
| **Informacional puro** | `qué es un rider técnico` · `canciones para la entrada de la novia` | **Casi seguro** | Sí | No | Sí | Sí | Bajo | **10–20%** |
| **Transaccional + geo** | `grupo de música para bodas en Barcelona` | **Poco probable** | A veces | **Sí, muy probable** | Sí | A veces | **Alto** | **25–40%** (el pack se lleva un tercio) |
| **Transaccional sin geo** | `contratar monologuista para eventos` | Poco probable | Sí | No | Sí | A veces | **Alto** | **40–55%** |
| **Comparativa / decisión** | `dj o grupo en directo para una boda` | **Probable** | Sí | No | No | Sí | Bajo | **25–35%** |
| **Nicho B2G** | `cómo contrata un ayuntamiento una orquesta` | Poco probable | A veces | No | No | No | **Nulo** | **70–85%** |
| **Marca / artista** | `[nombre del grupo] contratar` | No | No | A veces | Sí | **Sí** | Nulo | **60–80%** |

### 3.3 Las cuatro consecuencias estratégicas

**1. El bloque informacional pierde el 80–90% de su valor de clic.** El doc 04 ya lo colocaba en prioridad baja; los datos de 2026 dicen que hay que ir más lejos: **`/guias` no debería recibir más del 10% del esfuerzo de producción del año 1**, y su función pasa a ser autoridad temática e interlinking, no captación. Escribir "canciones para la entrada de la novia" es regalarle contenido a un AI Overview.

**2. El nicho B2G es, con diferencia, el que más clic conserva.** `cómo contrata un ayuntamiento una orquesta` es una búsqueda que hoy devuelve **PDFs de expedientes municipales y doctrina jurídica de pago** (`derecholocal.es`, `elderecho.com`). Sin AI Overview fiable, sin anuncios, sin local pack. Puede que el 80% del clic esté disponible. **Ratio esfuerzo/clic imbatible.** El doc 04 lo tiene en el puesto 6 de la lista de contenidos; **debería estar en el 2 o el 3**.

**3. En transaccional + geo, el local pack es el verdadero competidor, no el orgánico.** En `grupo de música para bodas en Barcelona`, Google casi con seguridad pinta un pack de 3 fichas de Google Business Profile por encima de todo lo orgánico. **Esto reordena la prioridad del checklist de lanzamiento:** el GBP no es un ítem del punto 8 del doc 04, es una de las tres primeras acciones del proyecto, por delante de la mitad del contenido. Sin dirección física verificable, esas búsquedas están fuera de alcance sea cual sea el contenido.

**4. Hay que optimizar para ser citado, no solo para ser clicado.** Con el 43% de queries con AI Overview, la partida en el bloque de precio se juega en **ser la fuente que el AI Overview cita**. Lo que hace citable a una página: datos numéricos concretos en tablas HTML reales (no imágenes), frases declarativas autocontenidas, fuente atribuible, fecha, y schema limpio. La página `/musica-para-bodas/cuanto-cuesta` hay que escribirla **con la mitad del ojo puesto en el AI Overview**, y hay que aceptar que parte de su retorno será marca y no clic.

---

## 4. Los huecos reales

Criterio: búsquedas con intención comercial donde **lo que rankea es objetivamente malo**. Ordenados por ratio (facilidad × valor).

### 4.1 HUECO 1 — El precio contextualizado · **prioridad máxima**

**Búsquedas:** `cuánto cuesta un grupo de música para una boda`, `cuánto cuesta contratar un mago`, `precio monologuista cena de empresa`, `cuánto cuesta una orquesta para las fiestas del pueblo`, `qué incluye el caché de un grupo de música`.

**Qué rankea hoy y por qué es malo:**

| URL | Problema concreto |
|---|---|
| `https://www.cronoshare.com/cuanto-cuesta/musica-boda` | Rango de 700–5.000+ € para "orquesta/banda". 4.300 € de amplitud. No decide nada. |
| `https://www.cronoshare.com/cuanto-cuesta/contratar-mago` | Misma plantilla exacta. No dice qué incluye el precio, no cubre cancelaciones (la pregunta está en la FAQ **sin respuesta**), solo analiza 3 ciudades. |
| `https://musicosbacata.com/cuanto-cuesta-un-grupo-musical-para-una-boda/` | Web de proveedor con contenido genérico. |
| `https://thesweetrockers.com/precio-de-grupo-musical-para-bodas-cuanto-cuesta/` | Proveedor único vendiéndose. Sesgo evidente. |
| `https://serenattia.com/blog/musicos-para-bodas-en-mexico-guia-definitiva` | **Contenido de México colándose en el SERP español.** Prueba directa de que Google no encuentra suficiente contenido español bueno. |
| `https://www.superanimaciones.com/magos-precios/` | Enfocado a animación infantil. Intención cruzada. |

**Lo que nadie ha publicado y decide la compra:**
- Qué entra y qué no entra en el caché: nº de músicos, técnico de sonido, PA, iluminación, backline, desplazamiento (€/km), dietas, alojamiento, horas extra, IVA (**21% en actuación contratada por empresa vs. tipos reducidos según la operación**), gestión SGAE.
- **Rangos por escenario real**, no por formación: "trío en cóctel de 80 personas en interior, 2 pases de 45 min, área metropolitana: 900–1.400 €".
- Quién emite la factura y cómo se retiene (el cliente corporativo se pregunta esto y nadie se lo explica).
- **Cuándo pagar más no compra nada mejor.** Nadie escribirá esto porque a todos les interesa el ticket alto. Es contenido diferencial y es la voz de la marca.

**Coste de entrada:** una página por vertical bien hecha. **Es el mejor uso de las primeras 40 horas de contenido del proyecto.**

---

### 4.2 HUECO 2 — El corporativo mal segmentado · **prioridad máxima**

**Búsquedas:** `contratar monologuista eventos de empresa`, `qué contratar para la cena de Navidad de empresa`, `artista para convención`, `cuánto cuesta un artista para un evento de empresa`.

**Qué rankea hoy:**

| URL | Problema |
|---|---|
| `https://partfy.com/monologuista` | Precio medio publicado **230 €**. El mercado corporativo real está en **3.000–8.000 €** para un humorista de nivel medio. Expectativa falsa. |
| `https://www.cronoshare.com/cuanto-cuesta/monologuista` | Media 370 €, habitual 200–600 €. Mismo desajuste: mide fiesta privada. |
| `https://blog.fuertehoteles.com/eventos/cena-de-empresa/` | **Blog de una cadena hotelera.** Habla de cenas, no de artistas. |
| `https://www.sage.com/es-es/blog/10-ideas-para-una-cena-de-empresa-inolvidable-esta-navidad/` | **Blog de un ERP.** Listículo de contenidos, cero criterio artístico. |
| `https://www.venuesplace.com/es/idea/276-24-ideas-divertidas-para-fiestas-de-navidad-en-empresas` | Listículo de 24 ideas. Amplitud sin profundidad. |
| `https://showflow.es/10-ideas-originales-animar-cenas-empresa-navidad/` | 10 ideas genéricas. |

**El diagnóstico es demoledor:** en una búsqueda con ticket de 1.500–8.000 €, los tres primeros resultados son **el blog de un hotel, el blog de un software de contabilidad y un listículo de un portal de espacios**. Ninguno vende artistas. Ninguno sabe de artistas. Google no encuentra nada mejor.

**Lo que falta:** una página que segmente por **número de asistentes × tipo de sala × momento de la noche**, que diga cuándo el monologuista muere en la sobremesa, qué pasa si hay dirección delante, y que dé rangos corporativos reales. Ticket alto, ciclo corto, decisor que repite cada año.

**Nota de calendario crítica:** el doc 04 dice publicar en junio. Los datos lo confirman, pero hay que ser más agresivo: **la cena de Navidad se decide entre septiembre y octubre**. Publicar en **mayo** para llegar con 4–5 meses de indexación y frescura suficiente al pico de búsqueda de septiembre.

---

### 4.3 HUECO 3 — El B2G · **el territorio más limpio del mapa**

**Búsquedas:** `cómo contrata un ayuntamiento una orquesta`, `contrato menor actuación musical`, `pliego actuación musical fiestas patronales`, `cuánto cuesta una orquesta para las fiestas del pueblo`.

**Qué rankea hoy:**

| URL | Qué es |
|---|---|
| `https://saael.dip-caceres.es/wp-content/uploads/sites/5/2018/05/Resolución-Contratacion-Menor-de-orquesta-para-fiestas-patronales.doc` | **Un .doc de 2018 de la Diputación de Cáceres.** Ocho años de antigüedad. |
| `https://derecholocal.es/consulta/contratacion-de-actuaciones-musicales-de-orquestas-para-fiestas-del-municipio-fraccionamiento-del-objeto-de-contrato` | Doctrina jurídica, muro de pago, escrita para juristas |
| `https://elderecho.com/contratacion-por-el-ayuntamiento-de-eventos-musicales-...` | Idem |
| `https://www.guadalajara.es/recursos/contratos/tecnicos/8509_204204201714258.pdf` | Un PDF de pliego concreto |
| `https://contratos.gobierto.es/contratos/6305180` | Ficha de expediente |
| `https://www.milanuncios.com/anuncios/orquestas-para-fiestas-patronales.htm` | **Clasificados.** Google poniendo Milanuncios en el top es la confesión de que no hay nada. |

**Cero páginas comerciales. Cero contenido escrito para el que decide.** Ni una sola pieza en todo el SERP explica en castellano llano, para un concejal de festejos, las tres vías (contrato menor bajo umbral, procedimiento negociado, agente artístico), qué documentación se pide, qué plazos hay, qué es fraccionamiento indebido del objeto del contrato y por qué le puede reventar el expediente si contrata tres orquestas por separado.

**Datos reales ya verificables y publicables:**
- Contrato menor por debajo de **10.000 €** (servicios) es la vía habitual para actuaciones sueltas.
- **No se puede fraccionar**: los espectáculos de las fiestas patronales se consideran un objeto único de contrato de servicios si el total supera el umbral. Esto es exactamente lo que consulta un ayuntamiento pequeño y lo que hace que llame a un intermediario.
- Pago en los **15 días** siguientes a la prestación y factura conforme.
- Escala de mercado documentada: **Illescas (Toledo, 2025), tres orquestas — Panorama, París de Noia y La Misión — 111.925 € en total.** Un dato público, citable y verificable, que ancla el rango alto y demuestra conocimiento del mercado.

**Por qué es oro:** intención de compra brutal, **cero competencia comercial**, ~80% de clic disponible (sin AIO, sin anuncios, sin pack), ticket 6.000–45.000 €, y es contenido **enlazable desde webs municipales, prensa local y foros de secretarios de ayuntamiento** — o sea, resuelve además el problema de backlinks (§7).

**Corrección al doc 04:** esta pieza está en el puesto 6 de "los 10 primeros contenidos". Debe subir al **puesto 2**. Y la ventana de calendario es dura: **los ayuntamientos cierran programación entre enero y marzo**. Publicar en octubre-noviembre para llegar indexado a esa ventana.

---

### 4.4 HUECO 4 — La ciudad/zona con conocimiento real · **prioridad alta**

**Qué rankea hoy en `[género o formación] + [ciudad]`:**

| URL | Problema |
|---|---|
| `https://www.celebrents.es/girona/grupos-de-jazz/` | **4 proveedores. 3.000 palabras. Incluye la historia del jazz del siglo XIX.** |
| `https://www.musiqua.es/generos/grupos-musicales-bandas/girona` | Matriz género × ciudad clonada |
| `https://www.artistealo.com/contratar-servicio/orquesta/alicante/` | Matriz servicio × provincia clonada |
| `https://www.espectalium.com/contratar-artistas-para-eventos/madrid/` | Plantilla con la ciudad sin capitalizar en los H2 |
| `https://www.eventoscelebria.com/contratar-grupos-musicales-para-bodas-y-eventos-en-barcelona-8-17` | URL con IDs numéricos, arquitectura de 2010 |

**Lo que nadie tiene y decide:** los sitios reales de la zona con sus nombres, los **límites de decibelios y horarios municipales** (el problema número uno en masías del Empordà y fincas de la Sierra), si hay acometida eléctrica o hace falta generador, si el escenario cabe, a qué hora se llena la pista en esa zona, y **fotos propias hechas allí**.

**Advertencia:** este hueco solo es explotable con **prueba local real**. El criterio del doc 04 (§2.3) es correcto y debe mantenerse a rajatabla: sin evento propio hecho ahí, no hay página. En el momento en que se clona, Show Up se convierte en Celebrents y pierde lo único que le diferencia.

**Advertencia añadida:** aquí compite el local pack. La landing de ciudad orgánica sin GBP verificado en esa zona rinde la mitad.

---

### 4.5 HUECO 5 — La comparativa honesta · **prioridad media, alto valor de enlace**

**Búsqueda:** `dj o grupo en directo para una boda`.

**Qué rankea:** `https://www.bodas.net/articulos/grupo-de-musica-o-dj-para-la-boda--c1983` (autoridad alta, contenido correcto pero tibio), `https://www.cronoshare.com/comunidad/comparativas/dj-grupo-musical-boda`, y una nube de blogs de proveedor (`eldiaperfecto.es`, `fridaenamorada.com`, `pamelamagal.com`, `deskaradaeventos.com`) que **siempre concluyen lo mismo: "las dos juntas"**. Es la conclusión que más factura, no la que más ayuda.

**El hueco:** nadie dice **cuándo el directo sobra**. Nadie escribe "con 60 invitados en un salón cerrado, la banda completa te va a echar a la gente de la sala y vas a pagar el triple por un problema". Una comparativa que recomiende en contra en casos concretos es el mejor imán de enlaces naturales del plan y la pieza más compartible.

**Realismo:** con AI Overview probable, el clic disponible está en el 25–35%. Se hace por marca, por enlaces y por autoridad temática, **no por volumen de tráfico**.

---

### 4.6 Resumen de huecos priorizados

| # | Hueco | Facilidad | Valor comercial | Clic disponible | **Prioridad** |
|---|---|---|---|---|---|
| 3 | B2G / ayuntamientos | **Muy alta** | Muy alto | **~80%** | **1** |
| 1 | Precio contextualizado | Alta | Muy alto | ~25% | **1** |
| 2 | Corporativo segmentado | Alta | Muy alto | ~50% | **1** |
| 4 | Ciudad/zona con prueba real | Media | Alto | ~30% (pack) | **2** |
| 5 | Comparativa honesta | Alta | Medio | ~30% | **3** (link bait) |

---

## 5. Directorios y agregadores: ¿estar o no estar?

La pregunta está mal formulada. No es "¿estamos en Bodas.net?". Es **"¿en cuáles, con qué activo, y con qué fecha de caducidad?"**.

### 5.1 El trade-off, sin romanticismo

**A favor de estar:**
- Leads **desde la semana 1**. El SEO propio no da nada convertible hasta el mes 5–7 (y este análisis sugiere que más bien el 7–9). Hay que comer entre medias.
- Bodas.net es donde está el 100% de la demanda de bodas. No estar es renunciar al canal principal del vertical de mayor volumen.
- Genera **reseñas verificadas**, que son el activo que Show Up no tiene y que tarda años en construirse. Una reseña en Bodas.net se puede citar (con permiso) en la web propia y es prueba social real.
- Enlace: normalmente `nofollow` o `sponsored`, **valor SEO ≈ 0**. No es un motivo para entrar.

**En contra:**
- **Canibalización directa e inevitable.** La ficha de Show Up en Bodas.net va a rankear por `show up events` antes que la web propia, porque el dominio del portal es 1.000 veces más fuerte. Es exactamente lo que le pasó a Bodaclick, que hoy aparece **como ficha dentro de Bodas.net** (`https://www.bodas.net/animacion/bodaclick--e248358`). Un portal que presumía del 40% de las bodas de España es hoy un proveedor listado en el portal de su competencia. **Esa es la foto del final del camino de la dependencia.**
- El modelo del portal es **la comparación**. Show Up existe precisamente para eliminar la comparación ("2-3 opciones argumentadas, no 40"). Meterse en un directorio es aceptar jugar en el tablero del enemigo declarado en la plataforma de marca: el catálogo.
- Coste de suscripción recurrente + comisión en algunos modelos. Y el lead llega **frío y comparando precio**, que es el peor tipo de lead para una marca cuyo argumento no es el precio.
- **Riesgo de dependencia estructural:** si a los 24 meses el 60% de los leads vienen del portal, el portal fija el precio de la suscripción y el negocio no es propio.

### 5.2 La decisión, por plataforma

| Plataforma | Decisión | Razón | Condición de salida |
|---|---|---|---|
| **Bodas.net** | **Sí, un año, plan mínimo** | Único canal con demanda real de bodas. El objetivo NO es el lead: es **acumular 15–20 reseñas verificadas** para poder usarlas fuera. | Cuando el orgánico propio dé >10 briefs/mes de boda. Revisión a los 12 meses. |
| **Cronoshare / marketplaces de leads** | **No** | Lead pagado por unidad, competencia por precio, cliente que pide 5 presupuestos. Destruye el posicionamiento de marca desde el primer contacto. | — |
| **Espectalium, Partfy, Celebrents, ContratarArtistas, Artistealo** | **No** | Son **competidores directos**, no canales. Meter artistas ahí es alimentar a quien te quita el SERP y regalarles el catálogo. | — |
| **Gigstarter** | **No** | Modelo artista-directo. Elimina el rol de Show Up (curación e intermediación). Contradice el producto. | — |
| **Milanuncios** | **No** | Contexto de precio bajo. Daño de marca > cualquier lead. | — |
| **Google Business Profile** | **Sí, día 1, prioridad absoluta** | No es un directorio: es el **local pack**, que en `[servicio]+[ciudad]` se lleva más clic que la posición orgánica 1. Gratis. | Nunca. |
| **Directorios de nicho de bodas locales** (wedding planners, fincas, `theweddingmarket.es`, `eventplannerspain.com`, `planning.wedding/directory`) | **Sí, selectivo** | Aquí sí hay enlaces `dofollow` reales y relevancia temática. Ver §7. | — |

### 5.3 La regla que zanja el debate

> **Se entra en un directorio para extraer un activo transferible (reseñas, un enlace real, un contacto de wedding planner), con fecha de salida escrita. Nunca para vivir de él.**

Y la métrica de control es una sola: **% de briefs que vienen de canal propio (orgánico + directo + marca)**. Si a los 18 meses no está por encima del 60%, el negocio no es de Show Up; es de Bodas.net y Show Up es su proveedor.

---

## 6. Qué NO se puede ganar en 18 meses

Sin anestesia. Cada línea de aquí es presupuesto que no se quema.

### 6.1 Imposible. No intentarlo en orgánico bajo ningún concepto

| Keyword / familia | Quién lo tiene | Por qué es imposible |
|---|---|---|
| `grupos musicales para bodas` · `músicos para bodas` · `música para bodas [+ cualquier capital]` | Bodas.net | UGC de miles de reseñas verificadas + datos de precio propietarios + The Knot Worldwide + 20 años. Ningún volumen de contenido lo compensa. |
| `contratar artistas para eventos` · `agencia de espectáculos [+ capital]` | Espectalium | Malla interna de decenas de miles de URLs + 10 años + marca. |
| `cuánto cuesta [cualquier cosa]` **en genérico sin contexto** | Cronoshare | Autoridad transversal prestada de un dominio de servicios del hogar. Se le gana en la variante contextualizada, **no en la genérica pelada**. |
| `contratar banda` · `contratar grupo de música` (head, sin modificador) | Gigstarter, Supermúsica | Head term pura, dominios consolidados. |
| Cualquier búsqueda de **nombre de artista famoso** (`contratar Leo Harlem`, `caché de [artista de primera fila]`) | Espectalium, Partfy, medios | No se representa a esos artistas. Rankear ahí es captar tráfico que no se puede servir → pogo-sticking → señal negativa. **Además es un riesgo reputacional.** |
| `música en directo [+ ciudad]` en el sentido de "dónde ir a escuchar" | Time Out, guías de ocio | **La intención no es de contratación.** El doc 04 ya lo dice y es correcto. Confirmado. |

### 6.2 Posible pero **no en 18 meses** — no es lo mismo que imposible

| Keyword | Plazo realista | Condición |
|---|---|---|
| `música en directo para bodas` (pilar, head-medium) | 18–30 meses | Solo si el clúster completo está construido y hay 25+ dominios enlazantes reales |
| `artistas para eventos de empresa` (pilar) | 15–24 meses | Idem |
| `grupo de música para bodas en Barcelona` (top 3 orgánico) | 12–20 meses | Y aun así, por debajo del local pack. Sin GBP verificado en Barcelona, **nunca**. |
| `grupos de versiones` (transversal) | 12–18 meses | Posible con contenido y vídeo |

**La consecuencia operativa:** los tres pilares del doc 04 (`/musica-para-bodas`, `/artistas-para-eventos-de-empresa`, `/orquestas-para-fiestas-patronales`) **no van a traer tráfico en el año 1**. Se construyen igual, porque son la arquitectura de la que cuelgan los satélites y la señal de autoridad temática. Pero **su KPI del año 1 no es tráfico, es servir de hub**. Medirlos por tráfico a los 8 meses lleva a la conclusión errónea de que el plan no funciona, y a rehacerlo justo antes del punto de inflexión.

### 6.3 Ganable pero que **no hay que ganar** — la trampa del tráfico bonito

Esto es lo que más presupuesto quema en SEO de servicios, porque **sí se posiciona** y por eso engaña.

| Keyword | Se puede ganar | Por qué NO hacerlo |
|---|---|---|
| `qué es un rider técnico` | Sí, fácil | Lo busca **el músico**, no el cliente. Tráfico 100% inútil. Además, AIO se lo come. |
| `canciones para la entrada de la novia` · `repertorio para boda` · `música para el cóctel de boda` | Sí | Volumen alto, **conversión ~0**, y AI Overview se lleva el 80–90% del clic. Es contenido para regalar a Google. |
| `contrato de actuación musical` · `modelo de contrato bolo` | Sí | Lo busca el artista o el gestor. No es el cliente. |
| `cuánto cobra [famoso] por actuar en una boda` | Sí | Tráfico de curiosidad, cero intención. Y ensucia la señal temática del dominio. |
| `[género musical] historia / origen` | Sí | Es exactamente el relleno de Celebrents. Copiarlo sería copiar su debilidad. |

**Regla de decisión, escrita para que no haya discusión:**

> Antes de publicar cualquier pieza informacional: **¿la persona que hace esta búsqueda puede firmar un contrato de 1.500 €?** Si la respuesta es no, no se publica. Se pone en el backlog de "cuando sobre autoridad", que en 18 meses no llegará.

### 6.4 Expectativa de plazos, corregida

El doc 04 dice "primeras señales de tráfico orgánico convertible: mes 5–7". Con los datos de zero-click de 2026 encima de la mesa, hay que corregirlo:

| Hito | Doc 04 | **Corrección** |
|---|---|---|
| Errores técnicos resueltos | Días | Días ✓ |
| Contenido publicado y optimizado | Semanas | Semanas ✓ |
| Primeras impresiones en Search Console | — | **Mes 2–3** (B2G y long tail primero) |
| Primeros briefs desde orgánico | Mes 5–7 | **Mes 6–9** |
| Volumen relevante | Mes 10–14 | **Mes 12–18** |
| Pilares con tráfico propio | — | **Mes 18–30** |

Y un ajuste de mix que se deriva de todo lo anterior: **con el orgánico dando cero durante 6-9 meses y el 43% de las queries con AIO, el año 1 no puede ser 100% SEO.** Google Ads sobre las head terms imposibles (§6.1) mientras el orgánico construye la cola no es "traicionar el SEO": es lo que permite que el SEO llegue vivo al mes 12. El doc 04 ya lo apunta en §4.1; este análisis lo confirma como **condición de supervivencia, no como opción**.

---

## 7. Backlinks: de dónde salen los suyos y cuáles son replicables

### 7.1 Cómo consigue enlaces cada arquetipo

| Competidor | Fuente principal de enlaces | ¿Replicable por Show Up? |
|---|---|---|
| **Bodas.net** | Grupo internacional (The Knot Worldwide), menciones en prensa generalista (`hola.com`, `stylelovely.com`), cobertura de los Wedding Awards, y **enlaces entrantes de los propios proveedores** que ponen "Míranos en Bodas.net" en sus webs | **No.** El único componente replicable es el de prensa, y a otra escala. |
| **Cronoshare** | Marketplace horizontal con años de PR, enlaces de medios de consumo y de contenido de hogar/reformas. Su autoridad no viene de eventos. | **No.** |
| **Espectalium** | Antigüedad + notas de prensa + enlaces desde webs de artistas representados | **Parcialmente** — el vector "web del artista" sí. |
| **Partfy / Celebrents / Artistealo** | Perfil probablemente ligero. Rankean por escala interna más que por autoridad externa. | **Sí, y ese es el punto:** si rankean con poco enlace, **su ventaja es replicable con 10-15 enlaces buenos + contenido mejor**. |
| **Agencias regionales** (Tuset, Circodelia, Magos Madrid, Tus Magos) | Prensa local, directorios de eventos, colaboraciones con espacios | **Sí. Este es el manual a copiar.** |
| **Proveedores directos** (Kalifornia, Maikelnaits, Calle Habana) | Webs de fincas, wedding planners, blogs de boda | **Sí. Directamente.** |

**La conclusión que importa:** los competidores **batibles** (§4) no ganan por backlinks. Ganan por escala programática. Eso significa que **el gap de enlaces frente a ellos es pequeño**, y que 10–20 enlaces reales de nicho pueden cambiar el resultado en los territorios de la §4. El gap frente a Bodas.net es infinito y no se cierra — pero en la §4 no está Bodas.net.

### 7.2 Las siete fuentes replicables, por orden de facilidad

**1. La web de cada artista del catálogo · dificultad 1/10 · el más fácil que existe**
Cada artista con el que se trabaja tiene web. Enlace **editorial y contextual** en su sección de contratación ("nos representa Show Up para eventos privados y corporativos"), no en el pie. Anchor variado, nunca el mismo. Con 6 artistas son 6 enlaces temáticamente perfectos, y crece con el catálogo.
**Regla:** nunca los 6 con el mismo anchor y nunca todos el mismo mes. Es la firma de patrón artificial.

**2. Fincas, masías y espacios donde se ha tocado · dificultad 2/10 · el más valioso por relevancia**
Toda finca de bodas tiene una página de "proveedores recomendados". Es un enlace `dofollow`, temáticamente perfecto, **local** (refuerza la landing de ciudad/zona) y se consigue con una llamada tras un evento bien resuelto. **Este es el activo de enlaces más importante del plan y está directamente ligado a la operación.** Cada evento hecho = un enlace potencial.
Ejemplos de tipología: masías del Empordà, fincas de la Sierra de Madrid, bodegas del Penedès.

**3. Wedding planners · dificultad 3/10**
Los que aparecen en `https://www.theweddingmarket.es/`, `https://www.weddingplanners.es/`, `https://www.thebigday.es/`, `https://planning.wedding/directory`, `https://www.eventplannerspain.com/`. Trabajan con proveedores y publican listas de recomendados. Requiere relación real, no email frío.

**4. Prensa local por fiestas patronales · dificultad 3/10 · sinergia total con el hueco B2G**
Cuando se programa una fiesta mayor, el diario provincial y el digital local publican el programa **y enlazan a los organizadores**. Enlaces de medios con autoridad local decente, temáticamente relevantes, y refuerzan exactamente el clúster C. **El hueco de contenido con más clic disponible (§4.3) es también la mejor fuente de enlaces.** No es casualidad: donde nadie compite, todo es más barato.

**5. La pieza B2G como recurso citable · dificultad 4/10**
Una guía honesta de "cómo contrata un ayuntamiento las actuaciones de sus fiestas" es el tipo de página que se enlaza desde foros de secretarios e interventores municipales, blogs de contratación pública y grupos de concejales de festejos. **Contenido que merece enlaces**, que es la única forma de link building que no se puede penalizar.

**6. Podcasts y medios del sector musical español · dificultad 5/10**
Medios de industria musical, asociaciones de músicos, escuelas de música. Aparecer hablando de "cómo se contrata de verdad" con criterio. Enlace desde nota de programa. Lento pero limpio.

**7. Datos propios como imán de enlaces · dificultad 6/10 · el de mayor techo**
El activo que Bodas.net tiene y nadie más: **datos agregados de precio real**. Show Up puede construirlo desde el evento 20. Un "Barómetro de precios de música en directo en España" honesto, publicado una vez al año con metodología transparente, es lo único de este plan que puede atraer enlaces de prensa generalista y de medios económicos. **No es para el año 1, pero se empieza a recopilar el dato desde el evento 1.** Si no se registra desde el principio, en dos años no existe.

### 7.3 Prohibido

Confirmado y reforzado respecto al doc 04 §4.3:
- Packs de enlaces, PBNs, notas de prensa replicadas en 40 portales. Con dominio nuevo no hay colchón de autoridad que absorba una penalización.
- **Intercambios masivos con otras agencias del sector.** Son competidores; el enlace es cruzado, detectable y además les regala relevancia.
- Enlaces de pie de página en las webs de los artistas. Sitewide + footer = patrón de baja calidad. **Editorial y contextual, o nada.**

### 7.4 Objetivo realista de perfil de enlaces

| Momento | Dominios enlazantes | Composición esperada |
|---|---|---|
| Mes 3 | 3–6 | Webs de artistas + 1 finca |
| Mes 6 | 8–14 | + fincas + 1 wedding planner |
| Mes 12 | 18–30 | + prensa local de fiestas + directorio de nicho |
| Mes 18 | 30–50 | + citas a la pieza B2G + medios de sector |

30–50 dominios reales y temáticamente relevantes es **suficiente para ganar todo lo listado en la §4**. No es suficiente para tocar nada de la §6.1, y no pasa nada: la §6.1 no está en el plan.

---

## 8. Las nueve conclusiones que cambian el plan

Correcciones y confirmaciones al doc `04-arquitectura-seo.md`, que en su conjunto es sólido pero necesita estos ajustes:

| # | Conclusión | Efecto sobre el doc 04 |
|---|---|---|
| 1 | El diagnóstico del doc 04 es **correcto en dirección y optimista en plazos**. Los datos de zero-click de 2026 obligan a mover los hitos 2–4 meses hacia adelante. | **Corregir §8** (expectativa de plazos). |
| 2 | **El B2G es el mejor activo del proyecto**, no el sexto. Cero competencia comercial, ~80% de clic disponible, ticket alto y además es la mejor fuente de enlaces. | **Subir `/orquestas-para-fiestas-patronales/como-contrata-un-ayuntamiento` del puesto 6 al 2.** Publicar oct-nov. |
| 3 | El SERP de precio no está ocupado, está **mal ocupado**. Cronoshare da rangos de 4.300 € de amplitud. La ventaja no es escribir más, es **contextualizar**. | Confirma §5 punto 2. Añadir desglose de caché, IVA y facturación. |
| 4 | El corporativo tiene los tres primeros resultados ocupados por **el blog de un hotel, el de un ERP y un listículo de espacios**. Y los precios publicados (230–370 €) son de otro mercado. | **Adelantar la cena de Navidad de junio a mayo.** Separar precio privado de precio corporativo explícitamente. |
| 5 | **Nadie en la vertical usa vídeo.** Ninguna de las 5 páginas top analizadas lo tiene. En un sector que vende espectáculo. | Confirma y refuerza §6.3: `VideoObject` obligatorio, y **también en pilares y páginas de precio**, no solo en fichas. |
| 6 | **El local pack es el competidor real** en `[servicio]+[ciudad]`, no el orgánico. Sin GBP verificado, esas búsquedas están fuera de alcance. | **Mover GBP del checklist §8 a acción nº1 del proyecto**, por delante de la mitad del contenido. |
| 7 | El informacional puro ha perdido el 80–90% de su valor de clic por AI Overview. | **Bajar `/guias` a ≤10% del esfuerzo.** Aplicar el test "¿esta persona puede firmar 1.500 €?" a toda pieza informacional. |
| 8 | Bodaclick aparece **como ficha dentro de Bodas.net**. Es la foto del final del camino de la dependencia de directorios. | Confirma la política de §5: entrar solo en Bodas.net, 12 meses, para extraer reseñas, con fecha de salida. |
| 9 | Los competidores batibles **no ganan por enlaces**, ganan por escala programática. El gap de autoridad frente a ellos es pequeño. | Confirma §4.3: 30–50 dominios reales bastan. **Cada evento hecho = un enlace potencial de finca.** Ligar link building a operaciones, no a marketing. |

---

## Anexo A — Las 25 búsquedas a verificar a mano el día 1

Incógnito, España, es-ES, móvil y escritorio, desde Barcelona y desde Madrid. Anotar para cada una: features presentes (AIO / PAA / local pack / imágenes / vídeo / snippet), nº de anuncios arriba, y las 5 primeras URLs orgánicas con su posición absoluta en píxeles.

**Bloque precio (6)**
1. cuánto cuesta un grupo de música para una boda
2. cuánto cuesta contratar un mago
3. precio monologuista cena de empresa
4. cuánto cuesta una orquesta para las fiestas del pueblo
5. qué incluye el caché de un grupo de música
6. cuánto cuesta un artista para un evento de empresa

**Bloque transaccional (6)**
7. contratar monologuista eventos de empresa
8. contratar mago para eventos
9. grupos de versiones para bodas
10. banda tributo para eventos
11. contratar orquesta fiestas patronales
12. cuarteto de cuerda para boda

**Bloque geo (5)**
13. grupo de música para bodas en Barcelona
14. música en directo para bodas Empordà
15. artistas para eventos de empresa en Madrid
16. grupo de versiones Girona
17. mago para eventos en Valencia

**Bloque B2G (4)**
18. cómo contrata un ayuntamiento una orquesta
19. contrato menor actuación musical
20. pliego actuación musical fiestas patronales
21. contratar orquesta ayuntamiento

**Bloque comparativa y estacional (4)**
22. dj o grupo en directo para una boda
23. qué contratar para la cena de navidad de empresa
24. cuántos músicos necesito para mi boda
25. con cuánta antelación se contrata la música de una boda

---

## Anexo B — Inventario de competidores con URLs

| Dominio | URL de referencia | Arquetipo |
|---|---|---|
| bodas.net | https://www.bodas.net/bodas/proveedores/musica/barcelona | A |
| zankyou.es | https://www.zankyou.es/ | A |
| bodaclick.com | https://www.bodaclick.com/servicios/ | A (en declive) |
| todoboda.com | https://www.todoboda.com/bodas/proveedores/musica/girona | A |
| cronoshare.com | https://www.cronoshare.com/cuanto-cuesta/musica-boda | B |
| milanuncios.com | https://www.milanuncios.com/anuncios/orquestas-para-fiestas-patronales.htm | B |
| espectalium.com | https://www.espectalium.com/contratar-artistas-para-eventos/madrid/ | C |
| contratarartistas.com | https://contratarartistas.com/ciudad/madrid-_1 | C |
| partfy.com | https://partfy.com/monologuista | C |
| celebrents.es | https://www.celebrents.es/girona/grupos-de-jazz/ | C |
| artistealo.com | https://www.artistealo.com/contratar-servicio/orquesta/alicante/ | C |
| supermusica.es | https://supermusica.es/musica-para-eventos/musicos-para-bodas/ | C |
| fillevents.es | https://www.fillevents.es/grupos-musicales-para-bodas/ | C |
| lafactoriadelshow.com | https://www.lafactoriadelshow.com/grupos-de-musica/bodas/ | C |
| musiqua.es | https://www.musiqua.es/generos/grupos-musicales-bandas/girona | C |
| gigstarter.es | https://www.gigstarter.es/contratar-reservar-banda | C |
| eventoscelebria.com | https://www.eventoscelebria.com/contratar-grupos-musicales-para-bodas-y-eventos-en-barcelona-8-17 | C |
| tuseteventos.com | https://tuseteventos.com/eventos/espectaculos-entretenimiento/artistas-para-eventos/ | D |
| circodeliaproducciones.com | https://www.circodeliaproducciones.com/contratacion-de-magos/ | D |
| espectaculosvertigo.com | https://www.espectaculosvertigo.com/orquestas/ | D |
| eventosbarcelona.com | https://www.eventosbarcelona.com/artistas/ | D |
| ispasion.com | https://ispasion.com/es/artistas/ | D |
| magosmadrid.com | https://magosmadrid.com/ | D |
| tusmagos.com | https://www.tusmagos.com/ | D |
| tumago.com | https://tumago.com/ | D |
| estoesmagia.com | https://estoesmagia.com/contratar-mago/ | D |
| kalifornia.es | https://kalifornia.es/musica-en-directo-para-bodas-fiestas-eventos-en/barcelona-cataluna-orquesta-grupo-versiones/ | E |
| maikelnaits.com | https://www.maikelnaits.com/sqm/musica-para-bodas/girona | E |
| callehabana.es | https://callehabana.es/precio-de-orquestas-para-fiestas/ | E |
| grupomusicalfeeling.com | https://grupomusicalfeeling.com/cuanto-cuesta-un-grupo-musical-para-boda/ | E |
| thesweetrockers.com | https://thesweetrockers.com/precio-de-grupo-musical-para-bodas-cuanto-cuesta/ | E |
| elbuenoelfeoyelmalo.com | https://elbuenoelfeoyelmalo.com/cuanto-cuesta-grupo-musica-en-directo/ | E |

---

*Documento cerrado a 31/07/2026. Caduca en 6 meses: el SERP se mueve y las cifras de AI Overview de 2026 van a empeorar, no a mejorar. Revisión obligatoria en enero de 2027, con los datos propios de Search Console encima de la mesa — que a esas alturas valdrán más que todo este análisis.*
