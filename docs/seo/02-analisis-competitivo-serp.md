# Show Up — Análisis competitivo del SERP español

> Radiografía del campo de batalla. Documento de inteligencia, no de deseos.
> **Eje del documento: esto NO es un negocio de bodas.** Bodas es uno de cinco segmentos, y no es el más interesante.
> El activo real del cliente es **una agenda de contactos grande en música en vivo** — txarangas, charangas, orquestas de verbena, grupos de versiones, tributos, solistas y dúos — más magos, monologuistas, humoristas y DJs. **No hay payasos ni animación infantil**, y eso es una decisión con consecuencias SEO que se explican en §3.7.
> Corrige en varios puntos a `/docs/04-arquitectura-seo.md`, que estaba escrito con el eje puesto en bodas.
> Verificado contra SERPs y páginas reales en julio de 2026. Las URLs son literales y navegables.

---

## 0. Metodología, y qué es dato y qué es criterio

| Tipo de afirmación | Fuente | Fiabilidad |
|---|---|---|
| Qué URLs aparecen para una búsqueda | Consulta real al índice de Google (es) | **Dato.** |
| Estructura de una página competidora (H1/H2, longitud, precios, elementos, tecnología) | Fetch y disección en vivo | **Dato.** |
| Rangos de precio de cada competidor | Copiados literalmente de sus páginas | **Dato.** |
| Volúmenes de búsqueda | **Sin acceso a Ahrefs/SEMrush en este entorno** | **Estimación por orden de magnitud.** |
| Autoridad de dominio (DA/DR) | Sin acceso a herramienta | **Inferencia** por antigüedad, footprint y grupo. |
| Presencia de AI Overview / PAA / local pack | Inferencia por intención + datos públicos de prevalencia 2026 | **Inferencia razonada.** Verificar a mano. |

**Tarea de verificación pendiente y no negociable (día 1):** las 32 búsquedas del anexo A, a mano, en incógnito, desde tres ubicaciones (Barcelona, Madrid, Pamplona), móvil y escritorio, con captura. Media jornada de trabajo que convierte tres cuartas partes de este documento de "inferencia sólida" a "dato".

**Punto de partida verificado:** el dominio no tiene huella digital. Cero resultados de marca. Eso significa cero penalizaciones heredadas, cero contenido legacy que limpiar y libertad total de arquitectura — pero también que **no hay nada que Google conozca de este dominio**, y que los primeros 90 días son de sandbox efectivo por mucho que se publique.

---

# PARTE I — EL MAPA DE DEBILIDAD COMPETITIVA

*Esta es la sección que decide por dónde entra la marca. Todo lo demás la sostiene.*

## 1. La matriz: dónde está flojo lo que rankea

Cada celda es una combinación **segmento × tipo de artista**. La puntuación de debilidad va de **10 (tierra de nadie, el SERP está pidiendo a gritos una página decente)** a **1 (muro, no se entra ni con presupuesto)**.

**Criterios de puntuación:**
1. ¿Hay páginas comerciales que resuelvan la intención, o solo agregadores/PDFs/clasificados?
2. ¿El contenido que rankea está actualizado y es específico, o es plantilla clonada?
3. ¿Publican precio contextualizado, o rangos inútiles / nada?
4. ¿Hay señales de confianza reales (fotos propias, vídeo, casos, reseñas)?
5. ¿Cuánto clic orgánico queda tras features del SERP?
6. ¿Puede un dominio de 0 meses entrar en 6–12 meses?

### 1.1 La matriz completa, ordenada de más débil a más fuerte

| # | Segmento × Artista | Debilidad | Qué rankea hoy | Por qué está flojo |
|---|---|---|---|---|
| 1 | **Ayuntamiento/comisión × proceso de contratación** | **10** | PDFs de expedientes, doctrina jurídica de pago, `.doc` de 2018 | **Cero páginas comerciales.** Nadie ha escrito esto para el que decide |
| 2 | **Ayuntamiento/comisión × txaranga/charanga** | **9,5** | `charangas.info` (Joomla legacy, sin precios), `jaiekin.com` (MVP), Milanuncios | Web más fuerte del nicho **no encuentra charangas vascas para una query vasca** |
| 3 | **Fiesta patronal × orquesta de verbena (por provincia)** | **9** | `multiparkespectaculos.com` (diseño ~2015, sin precios, sin FAQ), `espectaculosvertigo.com` (15.000 palabras, 0 precios), `artistealo.com` (plantilla provincia) | Nadie publica precio. Nadie resuelve la logística municipal |
| 4 | **Empresa × monologuista/humorista** | **9** | Blog de un hotel, blog de un ERP (Sage), listículo de espacios, Partfy con precio medio 230 € | Los precios publicados **son de otro mercado** (fiesta privada, no corporativo) |
| 5 | **Cualquiera × precio contextualizado** | **8,5** | Cronoshare, con rangos de 4.300 € de amplitud y **sin contexto de evento** | Rango tan ancho que no decide nada. Y en charanga **no distingue ni el tipo de evento** |
| 6 | **Fiesta patronal × banda tributo** | **8** | `eventzone.es`, `fillevents.es` (SEO de 2015), Partfy, Espectalium | Nadie explica qué tributo llena una plaza y cuál solo funciona en sala |
| 7 | **Privado × txaranga (despedidas, cumpleaños)** | **8** | Partfy por provincia, `arlequinband.com`, `jupy.es`, TikTok | Ticket bajo pero volumen alto y competencia amateur |
| 8 | **Bar/pub/sala × cualquier artista** | **8** ⚠️ | **Nadie del lado de la contratación.** Arquitectos, consultoras de licencias, acústicos | **Debilidad altísima pero demanda casi nula.** Ver §3.6: trampa |
| 9 | **Empresa × mago** | **7,5** | Espectalium, Circodelia, `magosmadrid.com`, `tusmagos.com` | Agencias regionales decentes pero sin precio ni criterio de formato |
| 10 | **Fiesta patronal × grupo de versiones (por zona)** | **7,5** | `celebrents.es` (4 fichas + historia del jazz del s.XIX), `musiqua.es`, `fillevents.es` | Plantillas clonadas puras |
| 11 | **Empresa × orquesta/grupo (convención, premios)** | **7** | Espectalium, La Factoría del Show, Artistealo `/evento-empresa/` | Plantilla × plantilla. Nadie segmenta por nº de asistentes |
| 12 | **Boda × formaciones de nicho** (cuarteto de cuerda, flamenco, gospel) | **6,5** | Bodas.net + proveedores directos con webs pobres | Cola larga que Bodas.net cubre por catálogo, no por criterio |
| 13 | **Privado × mago / monologuista** | **6** | Cronoshare, Partfy, agencias regionales | Contaminado por animación infantil, que no se cubre |
| 14 | **Empresa × DJ** | **5,5** | `fixando.es`, Cronoshare, `goeventlive.com`, `fander.es`, Artistealo, Evenses | Mercado saturado de plataformas de lead. Precio comoditizado |
| 15 | **Boda × grupo de versiones / orquesta** | **4** | Bodas.net (#1 blindado), Supermúsica, Fillevents | Directorio con UGC masivo. Se entra solo por cola muy larga |
| 16 | **Boda × DJ** | **3** | Bodas.net + cientos de DJs locales con SEO local propio | Saturación total. Cero diferenciación posible |
| 17 | **Boda × "música para bodas" (head)** | **2** | Bodas.net, `/musica/[provincia]`, `/musica/[ciudad]/[municipio]` | **Muro.** No se entra. |
| 18 | **Cualquiera × artista famoso** (`contratar Leo Harlem`) | **1** | Espectalium, Partfy, medios | No se representa. Rankear ahí es captar tráfico que no se puede servir |

### 1.2 La lectura en una frase

> **Las siete primeras filas de la tabla no tienen ni una sola página comercial decente. Las tres últimas son un muro. Y la frontera entre ambas cosas es, casi exactamente, la frontera entre el mundo de la verbena y el mundo de la boda.**

### 1.3 Veredicto sobre la hipótesis del coordinador

> *"El nicho de txarangas/charangas/orquestas de verbena tiene competencia mucho menos sofisticada que el de bodas — webs antiguas, agencias regionales, páginas de los propios grupos."*

**CONFIRMADA, y por un margen mayor del que sugiere la hipótesis.** La prueba, con URLs:

| Evidencia | URL | Qué demuestra |
|---|---|---|
| El portal vertical de charangas **no tiene charangas del territorio que anuncia** | `https://www.charangas.info/charangas-en-el-pais-vasco` | Página titulada "Charangas y Txarangas en País Vasco / Euskadi" que devuelve *"No hemos encontrado resultados"* y lista **31 grupos de otras provincias**. Joomla legacy, sin precios, sin vídeo, logos de 80×80 px. |
| El directorio "moderno" del nicho es un MVP abandonado | `https://jaiekin.com/cat/charangas/zona/navarra/` | 10 charangas, descripciones **truncadas a media frase** (*"arranco en 1998..."*), sin precios, **la mayoría de fichas con "?" en la valoración**. |
| La agencia de orquestas con 3 décadas tiene una web de 2015 | `https://www.multiparkespectaculos.com/contratar-orquestas-en-castilla-y-leon` | ~500 palabras, **sin precios, sin FAQ, sin vídeo, sin fecha de actualización**, una sola imagen, diseño de plantilla 2015-16. |
| El catálogo más grande de orquestas de España no publica ni un precio | `https://www.espectaculosvertigo.com/orquestas/` | **15.000+ palabras, 150+ orquestas, 17 regiones... y cero precios.** Vídeo anunciado con un emoji ▶️ que **no reproduce nada**. |
| Cronoshain trata todas las charangas igual | `https://www.cronoshare.com/cuanto-cuesta/charanga` | Da 150–400 €/h nacional y desglosa por **tres ciudades**, pero **no distingue fiesta patronal de despedida de soltero ni de boda**. Nueve factores de precio y ninguno es el tipo de evento. |
| Google mete clasificados en el top | `https://www.milanuncios.com/anuncios/orquestas-para-fiestas-patronales.htm` | Cuando Google pone Milanuncios arriba, es que **no encuentra nada mejor**. Confesión del algoritmo. |

**Comparación directa del nivel de sofisticación:**

| Variable | Mundo BODA (Bodas.net) | Mundo VERBENA (Vértigo / Multipark / charangas.info) |
|---|---|---|
| Reseñas verificadas por ficha | **Sí**, `5.0 (113)`, `4.9 (101)` | **No**, o un "?" |
| Datos de precio agregados | **Sí**: mín. 324 €, medio 748 €, máx. 1.409 € | **Ninguno** |
| Facetado y filtros | 5 ejes, 35+ opciones | Ninguno o un desplegable de provincia |
| Frescura declarada | Continua (UGC) | Web de 2015, sin fechas |
| Vídeo | Escaso | **Cero real** |
| Cobertura geográfica | Hasta el municipio | Provincia, y a veces mal |
| Contenido específico de zona | Datos reales de la provincia | Historia del jazz del s. XIX |

**No es "algo más fácil". Es otro deporte.** Un dominio nuevo con contenido honesto y fotos propias es, en el mundo verbena, **inmediatamente la mejor página del SERP**. En el mundo boda es el número 40.

### 1.4 El corolario incómodo

Si el activo real del cliente es su agenda de música en vivo popular —txarangas, orquestas, tributos, grupos de versiones—, entonces **el plan del doc 04 tiene el orden invertido**. Ese documento pone `/musica-para-bodas` como contenido nº1 y el cluster de fiestas patronales como el tercero y último. **Debe ser al revés.**

> **Fiestas patronales y verbena no es "el tercer cluster". Es el negocio. Bodas es la expansión, no el punto de partida.**

Razones, todas verificadas arriba:
- Es donde el cliente tiene el activo (agenda de contactos).
- Es donde el SERP está más débil (filas 1-3 y 6 de la matriz).
- Es donde queda más clic disponible (sin AI Overview, sin anuncios, sin local pack — ver §5).
- Es donde el ticket es más alto (6.000–45.000 € por programación completa vs. 900–2.500 € por una boda).
- Es donde el comprador **repite todos los años** y **habla con otros compradores** (las comisiones de fiestas de la comarca se conocen entre sí).

---

## 2. Cómo se traduce el mapa en orden de entrada

Los criterios de esta tabla son: debilidad del SERP × valor del ticket × clic disponible × capacidad real de servir.

| Orden | Territorio | Página tipo | Ventana de calendario | Por qué aquí |
|---|---|---|---|---|
| **1** | **Cómo contrata un ayuntamiento una actuación** | Guía B2G | Publicar **sep–oct**. Los ayuntamientos cierran programación **ene–mar** | Debilidad 10. ~80% de clic. Cero competencia comercial. Y es imán de enlaces municipales |
| **2** | **Cuánto cuesta una orquesta / txaranga para las fiestas** | Precio contextualizado | Publicar **oct–nov** | Debilidad 9. Nadie publica precio en todo el nicho. Nadie |
| **3** | **Contratar txaranga/charanga [+ zona]** | Landing tipo × zona | **Oct–ene** | Debilidad 9,5. El líder del nicho no tiene grupos en la zona que anuncia |
| **4** | **Programar las fiestas del pueblo** (guía de programación completa) | Pilar B2G | **Nov–ene** | Convierte a Show Up en el interlocutor de la comisión, no en un proveedor más |
| **5** | **Contratar orquesta de verbena [+ provincia]** | Landing tipo × provincia | **Nov–feb** | Debilidad 9. Solo con prueba real en esa provincia |
| **6** | **Monologuista/humorista para evento de empresa** | Landing + precio | Publicar **may–jun** | Debilidad 9. Ticket 1.500–8.000 €. El SERP lo ocupa el blog de un ERP |
| **7** | **Qué contratar para la cena de Navidad de empresa** | Comercial estacional | **Publicar en mayo.** Se decide sep–oct | Debilidad 9. Pico anual, decisor que repite |
| **8** | **Banda tributo para fiestas y plazas** | Landing tipo | **Ene–mar** | Debilidad 8. Alimenta directo al cluster de fiestas |
| **9** | **Mago para evento de empresa** | Landing tipo × segmento | Cualquiera | Debilidad 7,5. Demanda estable todo el año |
| **10** | **Grupo de versiones [+ zona]** | Landing tipo × zona | Cualquiera | Debilidad 7,5. Plantillas clonadas fáciles de batir |
| — | *A partir de aquí, meses 9-18* | | | |
| 11 | Artistas para eventos de empresa (pilar) | Pilar | — | Se construye como hub, sin esperar tráfico en año 1 |
| 12 | Música en directo para bodas (pilar) | Pilar | — | **Se construye, pero no se pelea.** Ver §7 |
| 13 | Bodas de nicho (cuarteto de cuerda, flamenco) | Cola larga | — | Único acceso viable al vertical boda |

**El cambio respecto al doc 04, en una línea:** de las 10 primeras piezas de aquel plan, **cinco eran de boda y una de fiestas patronales**. Aquí son **cinco de fiestas/verbena, dos de empresa y ninguna de boda en las diez primeras**. No es un ajuste. Es dar la vuelta al plan.

---

# PARTE II — LOS SEGMENTOS, UNO A UNO

## 3. Radiografía por segmento

### 3.1 Ayuntamientos y comisiones de fiestas — **el mejor territorio del mapa**

**Búsquedas:** `cómo contrata un ayuntamiento una orquesta`, `contrato menor actuación musical`, `pliego actuación musical fiestas patronales`, `contratar orquestas fiestas patronales`, `organizar fiestas de pueblo`, `programación fiestas patronales`.

**Qué rankea hoy — el SERP completo:**

| URL | Qué es | Diagnóstico |
|---|---|---|
| `https://saael.dip-caceres.es/wp-content/uploads/sites/5/2018/05/Resolución-Contratacion-Menor-de-orquesta-para-fiestas-patronales.doc` | **Un `.doc` de 2018 de la Diputación de Cáceres** | Ocho años. Formato Word. Es lo mejor que Google encuentra |
| `https://derecholocal.es/consulta/contratacion-de-actuaciones-musicales-de-orquestas-para-fiestas-del-municipio-fraccionamiento-del-objeto-de-contrato` | Doctrina jurídica | Muro de pago, escrita para juristas |
| `https://elderecho.com/contratacion-por-el-ayuntamiento-de-eventos-musicales-...` | Doctrina jurídica | Idem |
| `https://www.guadalajara.es/recursos/contratos/tecnicos/8509_204204201714258.pdf` | Un pliego concreto en PDF | Documento administrativo suelto |
| `https://contratos.gobierto.es/contratos/6305180` | Ficha de expediente | Datos, no respuesta |
| `https://www.milanuncios.com/anuncios/orquestas-para-fiestas-patronales.htm` | Clasificados | Confesión del algoritmo |
| `https://bellmart.es/organizador-fiestas-de-pueblo/` | Organizador integral | La única pieza comercial, y es de servicios completos, no de criterio |
| `https://www.hugoespectaculos.com/que-orquestas-contratar-para-una-fiesta-de-pueblo-exitosa` | Artículo de agencia | Correcto pero genérico, sin datos ni precios |

**Cero páginas escritas para el que decide.** Ni una sola pieza explica en castellano llano, para un concejal de festejos o un presidente de comisión:
- Las tres vías: contrato menor bajo umbral, procedimiento negociado, agente artístico.
- Qué es el **fraccionamiento indebido del objeto del contrato** y por qué contratar tres orquestas por separado le puede reventar el expediente.
- Qué documentación se le va a pedir (alta en el epígrafe, certificado de estar al corriente, seguro de RC, rider firmado).
- Plazos de pago.
- Qué es un rider y qué del rider paga el ayuntamiento y qué el artista.

**Datos ya verificados y publicables (esto es contenido, no relleno):**
- Contrato menor de servicios: umbral habitual **por debajo de 10.000 €**.
- **No se puede fraccionar**: los espectáculos de las fiestas patronales se consideran objeto único de contrato de servicios si el total supera el umbral. Es exactamente la duda que hace que un ayuntamiento pequeño llame a un intermediario.
- Pago en los **15 días** siguientes a la prestación y factura conforme.
- Ancla de mercado pública y citable: **Illescas (Toledo, 2025) — tres orquestas (Panorama, París de Noia, La Misión) por 111.925 € en total.**

**Features del SERP:** sin AI Overview fiable, **sin anuncios**, sin local pack. **~70–85% de clic disponible.** El ratio esfuerzo/clic más alto de todo el análisis, con diferencia.

**Bonus:** es contenido enlazable desde webs municipales, prensa local y foros de secretarios e interventores. **El mejor hueco de contenido es también la mejor fuente de enlaces.** No es casualidad: donde nadie compite, todo es más barato.

---

### 3.2 Fiestas patronales y verbenas (el mercado, no el proceso) — **debilidad 9**

**Búsquedas:** `contratar orquesta fiestas patronales`, `orquesta verbena [+ provincia]`, `orquestas para fiestas de pueblo`, `contratar txaranga [+ zona]`, `charangas [+ provincia]`, `banda tributo fiestas`.

**Quién rankea y en qué estado están:**

| URL | Modelo | Estado verificado |
|---|---|---|
| `https://www.artistealo.com/contratar-servicio/orquesta/asturias/` (y `/alicante/`, `/murcia/`, `/madrid/`, `/valencia/`, `/leon/`, `/barcelona/`) | Matriz servicio × provincia × ocasión (`/evento-empresa/segovia/`, `/cumpleanos/segovia/`) | **El más sistemático del nicho.** Plantilla clonada, pero cubre la matriz entera. Es el competidor a batir, no `charangas.info` |
| `https://www.espectaculosvertigo.com/orquestas/` | Catálogo nacional | **15.000+ palabras, 150+ orquestas, 17 regiones, CERO precios.** Vídeo anunciado que no existe. Diseño WordPress 2015-18 con footer © 2026 |
| `https://www.multiparkespectaculos.com/contratar-orquestas-en-castilla-y-leon` | Agencia regional, 3 décadas | ~500 palabras. **Sin precios, sin FAQ, sin vídeo, sin fecha.** Una imagen |
| `https://www.charangas.info/charangas-en-el-pais-vasco` | Portal vertical de charangas | Joomla legacy. **Sin resultados locales en su propia página territorial.** Sin precios. Logos 80×80 |
| `https://jaiekin.com/cat/charangas/zona/navarra/` | Directorio nicho vasco-navarro | MVP. Descripciones truncadas. Valoraciones en "?" |
| `https://partfy.com/charanga/navarra` · `/charanga/vizcaya` | Agregador | Matriz tipo × provincia. Precios visibles (su punto fuerte) |
| `https://www.lafactoriadelshow.com/charangas/` | Agencia, 20+ años | Catálogo con fichas individuales de txarangas (`/txaranga-forristar/`) |
| `https://www.produccionessibemol.es/orquestas-y-grupos` | Agencia regional | Catálogo pequeño |
| `https://www.jupy.es/producto/charanga-logrono-la-rioja` | Producto individual | URL de e-commerce (`/producto/`). Arquitectura equivocada para SEO de servicio |
| `https://www.arlequinband.com/charanga/precio-de-una-charanga.html` | **Grupo propio publicando precio** | Extensión `.html` de web antigua, pero **es de los pocos que habla de precio de verdad** |
| `https://www.orquestasdegalicia.es/` · `https://festia.es/eventos` | Agendas de verbenas | **Otro modelo: "dónde ir", no "a quién contrato".** Intención distinta. No compiten, pero son fuentes de enlaces y de datos |

**Precios que publica el nicho (recopilados, y con contradicciones entre sí):**

| Fuente | Rango declarado |
|---|---|
| Cronoshare (charanga) | 150–400 €/h nacional · Madrid 200–600 € · Barcelona 200–500 € · Valencia 200–450 € |
| Arlequin Band (charanga) | 250–500 € por evento |
| Artistealo (orquesta) | desde 200 €, habitual ~595 €, hasta 3.000 € |
| Kalifornia (orquesta/versiones) | espectáculo completo desde **1.950 € + IVA**, con **suplemento de 550 € para Galicia y Asturias** |
| Espectáculos Vértigo | **ninguno** |
| Multipark | **ninguno** |
| charangas.info | **ninguno** |
| Ancla pública | Illescas 2025: 3 orquestas = 111.925 € |

**Ahí está el hueco, y es enorme:** hay un factor **50×** entre el precio más bajo publicado (200 €) y el ticket real de una programación de fiestas (decenas de miles). Nadie explica esa escala. Nadie dice qué separa una charanga de 300 € de una orquesta de 15.000 €. Nadie desglosa qué paga el ayuntamiento aparte del caché: **escenario, sonido y luces si no van incluidos, generador, seguro de RC, dietas y alojamiento de 12 músicos, SGAE, IVA**.

Una tabla honesta con esos tramos —charanga de calle, txaranga con equipo, grupo de versiones, orquesta mediana, orquesta grande de las que llenan una plaza— es **la mejor página que existiría en español sobre el tema**. Hoy no existe.

---

### 3.3 Empresa — **debilidad 7 a 9 según el artista**

**Búsquedas:** `contratar monologuista eventos de empresa`, `qué contratar para la cena de Navidad de empresa`, `artistas para eventos de empresa`, `espectáculo para convención`, `entrega de premios animación`.

**Qué rankea en `qué contratar cena de Navidad empresa`:**

| URL | Qué es |
|---|---|
| `https://blog.fuertehoteles.com/eventos/cena-de-empresa/` | **El blog de una cadena hotelera** |
| `https://www.sage.com/es-es/blog/10-ideas-para-una-cena-de-empresa-inolvidable-esta-navidad/` | **El blog de un software de contabilidad** |
| `https://www.venuesplace.com/es/idea/276-24-ideas-divertidas-para-fiestas-de-navidad-en-empresas` | Listículo de un portal de espacios |
| `https://showflow.es/10-ideas-originales-animar-cenas-empresa-navidad/` | 10 ideas genéricas |
| `https://centralfiestas.es/planes/cena-espectaculo-navidad` | Cena-espectáculo propia (producto, no criterio) |
| `https://fabricandoeventos.com/animacion-navidad-2/` | Agencia de animación |

**En una búsqueda con ticket de 1.500–8.000 €, los tres primeros resultados son el blog de un hotel, el de un ERP y un listículo de un portal de espacios. Ninguno vende artistas. Ninguno sabe de artistas.**

**El desajuste de precio, que es el hueco concreto:**

| Fuente | Precio publicado para monologuista | Mercado real corporativo |
|---|---|---|
| `https://partfy.com/monologuista` | **medio 230 €** (rango 55–2.900 €) | |
| `https://www.cronoshare.com/cuanto-cuesta/monologuista` | **medio 370 €** (habitual 200–600 €) | |
| Realidad del segmento | | **3.000–8.000 €** para 30-45 min de un humorista de nivel medio |

Los dos que rankean están midiendo el mercado de fiesta privada y presentándolo como si fuera el corporativo. **Un director de RRHH que lee "230 € de media" y luego pide presupuesto recibe una cifra diez veces mayor.** Esa fricción es exactamente donde entra una página que separe explícitamente los dos mercados. Es contenido que nadie escribirá porque a todos les incomoda.

**Nota de calendario:** el doc 04 dice publicar la pieza de Navidad en junio. **Adelantar a mayo.** La cena de Navidad se decide entre septiembre y octubre; hacen falta 4-5 meses de indexación y frescura para llegar posicionado al pico de búsqueda.

**Ventaja estructural del segmento:** el decisor de RRHH **repite cada año** y **cambia de empresa llevándose el proveedor**. Es el segmento de mayor valor de vida del cliente de los cinco.

---

### 3.4 Bodas — **debilidad 2 a 6,5. El muro.**

**Quién manda:** `https://www.bodas.net/bodas/proveedores/musica/barcelona` y sus equivalentes hasta el municipio (`/musica/girona/girona`). El índice nacional llega a la **página 144** de paginación.

**Por qué no se entra — cuatro razones y solo una es SEO clásico:**
1. **UGC de reseñas verificadas.** `5.0 (113)`, `4.9 (101)` por ficha. Contenido que no existe en ningún otro sitio. **Show Up no lo replica en 18 meses. Punto.**
2. **Datos de precio propietarios.** Barcelona: mín. 324 € · habitual 450–900 € · medio 748 € · máx. 1.409 €. Sale de su base de transacciones.
3. **Cobertura hasta el municipio.** No hay hueco geográfico por debajo.
4. **Intención perfecta.** Quien busca "músicos para boda en Barcelona" quiere **comparar varios**. Un directorio es literalmente la mejor respuesta. Google acierta.

Detrás: `supermusica.es` (80+ artistas verificados, "presupuesto en 24 h" — **el competidor conceptualmente más parecido a Show Up y el más peligroso**), `fillevents.es` (title con `▷` y *"¡¡LLÁMANOS!!"*, SEO de 2015 que sigue rankeando), `todoboda.com`, `zankyou.es`.

**Y la lápida del sector:** Bodaclick, que reclamaba "el 40% de las bodas de España", **aparece hoy como ficha dentro de Bodas.net** (`https://www.bodas.net/animacion/bodaclick--e248358`). El portal que fue líder es proveedor en el portal de su competencia. Esa es la foto del final del camino de la dependencia de directorios.

**Lo único viable en bodas durante 18 meses:**
- Cola larguísima de nicho: `cuarteto de cuerda para boda`, `grupo de flamenco para boda`, `gospel para ceremonia`.
- Comparativas de decisión que Bodas.net responde con tibieza: `dj o grupo en directo para una boda`.
- Precio contextualizado, que Cronoshare da mal.
- **Nada de head terms. Nada de `[música] + [capital]`.**

---

### 3.5 Privados — **debilidad 6 a 8, pero con un problema de contaminación**

**Búsquedas:** `contratar grupo música cumpleaños`, `charanga despedida de soltero`, `música fiesta privada`, `grupo para aniversario`.

**Qué rankea:** `https://www.deamare.es/grupo-musical-para-fiesta-privada`, `https://grupomerlin.com/grupos-musicales-para-fiestas-privadas/`, `https://gruposdeflamenco.es/`, `https://www.sesadisespectaculos.com/despedidasdesolteroybodas.html`, `https://www.artistealo.com/contratar-servicio/grupos-orquestas/`, `https://www.tudespedida.com/`, Partfy por provincia.

**Diagnóstico:** SERP fragmentado, competencia amateur, entrada relativamente fácil. **Pero:**
- Ticket bajo (300–1.200 €), ciclo de decisión de días, cliente que compara precio.
- **El SERP está contaminado con animación infantil**, que Show Up no cubre. `https://www.superanimaciones.com/magos-precios/` rankea para "precio mago" porque el grueso del mercado de magos es infantil. Atacar `contratar mago` en genérico trae tráfico de comuniones y cumpleaños de niños que **no se puede servir** → pogo-sticking → señal negativa para el dominio.

**Decisión:** el segmento privado se cubre **como derivada del cluster de txarangas** (despedidas de soltero son el segundo mercado natural de una charanga) y **nunca atacando `mago` o `animación` en genérico**. Toda pieza de mago o monologuista tiene que llevar el modificador de segmento adulto (`para eventos de empresa`, `para bodas`, `magia de cerca para cóctel`) o el tráfico será basura.

---

### 3.6 Bares, pubs y salas — **debilidad 8 pero DEMANDA CASI NULA. La trampa del documento.**

Este segmento merece un aviso en rojo porque es el que más fácil parece y el que más presupuesto puede quemar.

**Qué rankea para `contratar grupo música en directo para bar / pub / sala`:**

| URL | Qué es | Lado del mercado |
|---|---|---|
| `https://www.milanuncios.com/musicos/musica-en-directo-para-fiestas.htm` | Clasificados | **Oferta** (músicos buscando bolo) |
| `https://www.somosnexho.com/musica-en-directo-maximiza-posibilidades-local` | Blog de plataforma de hostelería (ex-Rentabilibar) | Regulatorio |
| `https://www.somosnexho.com/guia-sobre-la-normativa-de-ruidos-en-bares-y-restaurantes-limites-de-decibelios-y-horarios` | Idem | Regulatorio |
| `https://gorkavillanueva.com/licencia-para-un-bar-de-copas-o-pub-normativa-de-horarios-aforo-y-musica-en-directo` | **Un arquitecto** | Regulatorio |
| `https://acusticadoppler.com/requisitos-para-las-actuaciones-de-ocio-en-establecimientos-de-hosteleria/` | **Una consultora de acústica** | Regulatorio |
| `https://www.licmad.es/normativa-musica-bares/` | Tramitación de licencias | Regulatorio |
| `https://combohr.com/es/blog/tipos-de-licencias-de-hosteleria` · `https://ingenieriademenu.com/tipos-de-licencias-hosteleria/` | Blogs de software de hostelería | Regulatorio |
| `https://fander.es/` · `https://elsperaevents.com/bandas-de-musica/` | Plataformas de contratación | **Demanda**, pero marginal en el SERP |

**Diagnóstico definitivo:** en el lado de la contratación **no hay nadie**, pero **tampoco hay búsquedas**. El SERP entero está ocupado por el problema *regulatorio* (licencia, decibelios, aforo, limitador, LEPAR) y por músicos ofreciéndose. El hostelero no busca "contratar grupo para mi bar". Se le llega por WhatsApp, por boca a boca y porque el músico entra por la puerta.

**Confirmado lo que ya decía el doc 04 §4.7. Pero con un matiz nuevo y aprovechable:**

> **El hostelero que busca `licencia para música en directo en mi local` es exactamente el que está a punto de programar música en vivo. Ese es el único punto de entrada SEO real al segmento, y hoy lo ocupan un arquitecto, una consultora de acústica y el blog de un ERP.**

Ninguno de ellos le va a resolver el siguiente paso, que es *"vale, ya tengo la licencia, ¿y ahora a quién pongo los jueves?"*.

**Decisión, y hay que ser disciplinado:**
- **NO** landings de ciudad para hostelería.
- **NO** cluster.
- **SÍ**, y como máximo, **una sola pieza** en el mes 12+, del tipo *"Música en directo en tu local: licencia, decibelios y a quién programar"*, que resuelva honestamente la parte regulatoria (con enlaces a las fuentes serias) y termine en el brief. Y **solo si el resto del plan va bien**. Es un experimento barato, no una apuesta.
- Cualquier euro adicional en este segmento es un euro tirado.

---

### 3.7 La decisión de no cubrir animación infantil: consecuencia SEO

No hacer payasos ni animación infantil es correcto de marca (la plataforma dice "es cualquier noche que merezca la pena", y una fiesta de cumpleaños de niños no lo es). Pero tiene una consecuencia SEO concreta que hay que gestionar:

**El mercado de magos en España es mayoritariamente infantil.** `https://www.superanimaciones.com/magos-precios/` rankea alto para "precio mago". Cronoshare da un rango de **70–270 € para magia infantil** frente a **350–1.500 €+ corporativo**. Si Show Up ataca `contratar mago` o `precio mago` en genérico:
- Capta tráfico de padres organizando un cumpleaños.
- Que rebota inmediatamente.
- Y le dice a Google que este dominio va de animación infantil.

**Regla dura:** **ninguna URL de mago, monologuista o humorista sin modificador de segmento adulto en el slug y en el H1.** `/magos-para-eventos-de-empresa`, no `/magos`. `/monologuistas-para-cenas-de-empresa`, no `/monologuistas`. Se sacrifica volumen a cambio de que el tráfico sea servible y la señal temática limpia. Con un dominio nuevo, la señal temática limpia vale más que el volumen.

---

# PARTE III — QUIÉN DOMINA Y CÓMO

## 4. Los seis arquetipos de competidor

Confundirlos es el error estratégico más caro. A Bodas.net no se le gana; a `charangas.info` sí. No es cuestión de esfuerzo: juegan a cosas distintas.

| # | Arquetipo | Ejemplos | Por qué gana en Google | ¿Batible? |
|---|---|---|---|---|
| **A** | **Portal vertical de bodas** | Bodas.net (The Knot Worldwide), Zankyou, Todoboda, Bodaclick | Autoridad de grupo internacional + UGC masivo + cobertura hasta el municipio | **No** |
| **B** | **Marketplace horizontal de leads** | Cronoshare, Fixando, Milanuncios | Autoridad de dominio prestada de otro vertical (reformas, clasificados) | **Sí en la variante contextualizada; no en la genérica** |
| **C** | **Agregador de artistas a escala** | Espectalium, ContratarArtistas, Partfy, Celebrents, Artistealo, Supermúsica, Fillevents, Evenses, Eventzone, Musiqua, La Factoría del Show | Escala programática: N tipos × M provincias × K ocasiones | **Sí en las celdas donde su plantilla no dice nada** |
| **D** | **Agencia regional / productora** | Multipark, Espectáculos Vértigo, Producciones Sibemol, Hugo Espectáculos, Tuset, Circodelia, Magos Madrid, Tus Magos, Ispasión, Bellmart | Antigüedad + SEO local + marca comarcal | **Sí, y fácil.** Webs de 2015 |
| **E** | **Portal de nicho / directorio vertical pequeño** | charangas.info, jaiekin.com, jupy.es, orquestasdegalicia.es, festia.es | Especialización temática y de idioma/territorio | **Sí. Son los más débiles del mapa** |
| **F** | **Proveedor directo (el artista)** | Kalifornia, Maikelnaits, Arlequin Band, Calle Habana, Grupo Feeling, Deamare | Contenido honesto de nicho, web pobre, sin arquitectura | **Sí, pero son aliados potenciales, no enemigos** — ver §9 |

**Show Up nace como un D con ambición de C, pero su plataforma de marca le prohíbe ser un C** (el enemigo declarado es el catálogo). Ese conflicto aparente es en realidad su ventaja: **en los territorios de la matriz §1 con debilidad ≥7, lo que falta no es más catálogo, es criterio.** Y criterio es exactamente lo que un C no puede producir a escala.

### 4.1 Fichas de los que hay que vigilar de verdad

**Artistealo** — `https://www.artistealo.com/contratar-servicio/orquesta/asturias/`
El más sistemático del mundo verbena. Matriz de tres ejes: `servicio × ocasión × provincia` (`/orquesta/evento-empresa/segovia/`, `/orquesta/cumpleanos/segovia/`). Plantilla clonada, pero **cubre la matriz entera y publica precios**. Es el competidor real del territorio prioritario, no `charangas.info`. **Vigilar mensualmente.**

**Espectalium** — `https://www.espectalium.com/contratar-artistas-para-eventos/madrid/`
~3.000 palabras con **solo ~30% de texto editorial**. H2 con la ciudad en minúscula sin normalizar (*"CONTRATACIÓN DE ARTISTAS para Eventos en madrid"*), 50+ H3 de nombres de artista, **imágenes en GIF base64 que no cargan**, pie con las 52 provincias. Rankea por malla interna e inercia de autoridad, no por calidad. **Vulnerable a medio plazo, pero "medio plazo" aquí no cabe en 18 meses.**

**Partfy** — `https://partfy.com/monologuista`
5.000-6.000 palabras con **~60% de relleno** ("mejor monologuista/cómico" aparece 30+ veces). H1 conversacional que **no lleva la keyword** (*"¿Estás buscando monologuistas a tu medida?"*) — debilidad on-page explotable. Menciona **Leo Harlem y Miki Nadal** 15+ veces sin garantizar disponibilidad. **Pero publica precios y eso es lo que le da el snippet.**

**Supermúsica** — `https://supermusica.es/musica-para-eventos/musicos-para-bodas/`
**El competidor conceptualmente más parecido a Show Up.** 80+ artistas verificados, catálogo curado (no infinito), "presupuesto gratis en 24 h". Es la prueba de que el posicionamiento de Show Up es viable — y de que alguien ya lo está ocupando en el vertical boda. **Vigilar de cerca. Si se meten en verbena, se acabó la ventaja.**

**Cronoshare** — `https://www.cronoshare.com/cuanto-cuesta/[lo-que-sea]`
Ocupa **todo** el bloque `cuánto cuesta`. Misma plantilla exacta en música-boda, mago, monologuista, charanga y DJ. Autoridad transversal de un dominio de servicios del hogar. **No defiende el territorio, lo ocupa de paso.** Su debilidad estructural: los rangos son tan anchos que no deciden nada, y **en charanga ni siquiera distingue el tipo de evento**.

---

## 5. Anatomía de las páginas que rankean

Disecciones completas de seis URLs en las posiciones más valiosas.

### 5.1 `cronoshare.com/cuanto-cuesta/musica-boda` — la plantilla a batir

| Variable | Dato |
|---|---|
| Longitud | ~3.200–3.500 palabras |
| H1 | *"¿Cuánto cuesta contratar música para una boda?"* — coincidencia exacta con la query |
| H2 | `¿Os gustaría saber cuánto cuesta la música para boda?` · `Tabla de precios de música para boda` · `Factores que pueden influir en el coste` · `Índice` |
| H3 | 15: 5 preguntas + 9 factores (temporada, localización, invitados, experiencia, duración, solicitudes, vestimenta, desplazamiento, repertorio) |
| Tabla maestra | DJ 200–675 € · Solista/dúo 250–1.000 € · Trío/cuarteto 500–3.000 € · Orquesta/banda **700–5.000+ €** · Extras 39–800 € |
| Elementos | 3 gráficos · 3 fichas de profesional · **calculadora interactiva** · botones "PIDE PRECIO GRATIS" · 3 testimonios con nota (9.9/10/9.8) |
| Vídeo | **Ninguno** |
| Frescura | *"6 enero, 2026"* visible en el cuerpo |
| Enlace externo | **Al INE.** Un solo enlace de autoridad, bien elegido |

**Qué premia Google aquí, en orden:** H1 exacto → índice enlazado → tabla estructurada → fecha visible → sub-preguntas como H3 (candidatas a PAA) → un enlace a fuente oficial.

**Cómo se le gana:** igualar la estructura y añadir lo que no tiene — **desglose de qué entra en el caché** (músicos, técnico, PA, iluminación, backline, desplazamiento €/km, dietas, alojamiento, horas extra, IVA, SGAE), **rangos por escenario real** en vez de por formación, **un caso propio con presupuesto desglosado**, y **la frase que nadie escribirá: en qué casos pagar más no compra nada mejor.** Más **vídeo con `VideoObject`**, que Cronoshare no tiene.

### 5.2 `cronoshare.com/cuanto-cuesta/charanga` — la misma plantilla, peor aplicada

~1.800–2.000 palabras (el núcleo de precio es solo el 40%). Rangos: 150–400 €/h nacional; Madrid 200–600 €; Barcelona 200–500 €; Valencia 200–450 €. Fechada *"9 enero, 2026"*.

**El fallo grave, literal:** lista **nueve factores de precio y ninguno es el tipo de evento**. Una charanga de fiesta patronal, una de despedida de soltero y una de boda tienen precios, duraciones y logísticas completamente distintas, y la página las trata igual. Tampoco cubre: tiempo mínimo de contratación, política de cancelación, qué incluye (equipo, desplazamiento, repertorio a medida), ni zonas fuera de tres ciudades.

**Es la página #1 de España para "cuánto cuesta una charanga" y es context-blind.** Objetivo prioritario.

### 5.3 `bodas.net/bodas/proveedores/musica/barcelona` — la lección incómoda

H1 `Música para bodas en Barcelona`. H2: `Filtrar` · `101 resultados` · `¿Cuánto cuesta contratar la música para la boda en Barcelona?` · `Preguntas frecuentes` · `Mira las opiniones de nuestras parejas` · `Música en Barcelona por tipo` · `por zona`. Precios agregados: **mín. 324 € · habitual 450–900 € · medio 748 € · máx. 1.409 €**. Filtros de 5 ejes. Badges `TOP`/`PREMIUM`/`Wedding Awards`. `Responde en 24 horas`.

**Y solo 200–250 palabras de texto editorial.**

> **Bodas.net rankea #1 con 250 palabras. La extensión no es el factor.** Lo que premia Google aquí es cobertura de opciones + señales de confianza de terceros + datos de precio agregados + facetado que resuelve la intención comparativa.

**Lección operativa:** no se le compite escribiendo más largo. Se le compite **cambiando la intención**. Bodas.net responde "¿quién hay?". Show Up responde "¿cuál de ellos y por qué?". Son búsquedas distintas, y el usuario hace las dos.

### 5.4 `espectaculosvertigo.com/orquestas/` — 15.000 palabras y cero precios

150+ orquestas en 17 secciones regionales. Footer © 2026 y "Catálogo de Orquestas 2026", pero estructura de plantilla WordPress 2015-18. **Ningún precio, ninguna tarifa, ningún tramo.** El vídeo promocional se anuncia con un emoji `▶️` y **no reproduce nada**. Sin calendarios de disponibilidad, sin casos, sin testimonios municipales, sin rider, sin requisitos técnicos, sin documentación para el departamento de contratación.

**Verdicto:** genera awareness y frustra a quien tiene que presupuestar. Es la página más grande del nicho y **no responde ninguna de las preguntas que hace un ayuntamiento**.

### 5.5 `charangas.info/charangas-en-el-pais-vasco` — el fallo más ridículo del mapa

Portal vertical de charangas. La página se titula *"Charangas y Txarangas en País Vasco / Euskadi"* y **no encuentra ninguna**: muestra *"No hemos encontrado resultados"* y lista **31 grupos de otras provincias** como alternativa. Joomla legacy. ~300-400 palabras genéricas. **Sin precios, sin vídeos, sin galerías, sin testimonios.** Logos de 80×80 px. Copyright con error de fecha.

**Esto rankea en primera página para búsquedas de charangas en Euskadi.** No hace falta más argumento sobre la debilidad del nicho.

### 5.6 `multiparkespectaculos.com/contratar-orquestas-en-castilla-y-leon` — la agencia de 3 décadas

H1 correcto y bien orientado. **~500 palabras.** Sin precios, sin FAQ, sin schema, sin vídeo, sin fechas visibles, una sola imagen, sin lazy loading moderno, sin testimonios ni casos. Diseño de ~2015-16. CTA `¡CONSÚLTANOS SIN COMPROMISO!`.

Es una agencia con 30 años de experiencia real trabajando con ayuntamientos y comisiones de fiestas, **y su web no transmite ni el 5% de ese activo**. Es el retrato del nicho entero.

### 5.7 El patrón: qué premia Google y qué está vacío

**Lo que ya tienen todos los que rankean (mínimo de entrada):**
1. H1 con coincidencia exacta o casi con la query.
2. Índice de contenidos enlazado en páginas largas.
3. Bloque de FAQ con preguntas como encabezado.
4. Señal de frescura visible en queries de precio.
5. Malla interna densa (tipo × geo × ocasión).

**Lo que casi nadie tiene — aquí está la ventaja entera:**

| Elemento vacío | Quién lo tiene en el mundo verbena |
|---|---|
| **Precio publicado y contextualizado** | Cronoshare (mal), Artistealo (parcial). **Vértigo, Multipark, charangas.info, jaiekin: nadie** |
| **Vídeo embebido con `VideoObject`** | **Nadie.** En un sector que vende espectáculo. Fallo colectivo |
| **Fotografía propia y verificable** | Espectalium tiene GIFs rotos; charangas.info logos de 80 px |
| **Contenido que recomienda en contra** | Nadie. Todos venden todo |
| **Conocimiento local real** | Nadie. Celebrents pone la historia del jazz del siglo XIX |
| **Respuestas al comprador institucional** | Nadie |

Los seis huecos son, literalmente, la plataforma de marca de Show Up. **Coincidencia perfecta entre lo que la marca quiere decir y lo que el SERP tiene vacío.** No hay que elegir entre ser fiel a la marca y hacer SEO.

---

## 6. Features del SERP: cuánto clic queda de verdad

### 6.1 Contexto 2026, sin edulcorar

| Métrica | Valor | Fuente |
|---|---|---|
| Búsquedas que activan AI Overview | **~43%** | [ecosistemastartup.com](https://ecosistemastartup.com/google-ai-overviews-43-trafico-organico-cae-61-en-2026/) |
| Búsquedas sin clic (global) | **~68%** | [seoestudios.es](https://www.seoestudios.es/busquedas-zero-click/) |
| Búsquedas sin clic (España/Europa) | **>58%** | [ismajimenez.com](https://ismajimenez.com/google-ai-overviews-como-impactan-el-ctr-organico-y-el-trafico-en-espana/) |
| Sin clic **cuando hay AI Overview** | **~83%** | idem |
| En AI Mode | **~93%** | idem |
| Caída de CTR en posición #1 interanual | **−32%** | idem |
| Caída de CTR en queries informacionales | **−36,9%** | [citado.co](https://citado.co/blog/impacto-ai-overviews-trafico) |
| Caída de CTR orgánico agregado (Seer) | **−61%** | [reddeperiodistas.com](https://www.reddeperiodistas.com/con-y-sin-ai-overviews-google-destroza-el-negocio-del-clic/) |

**Traducción:** cualquier proyección hecha con tablas de CTR de 2021 está inflada entre 2× y 4×.

### 6.2 Clic disponible por tipo de búsqueda

| Tipo de búsqueda | Ejemplo | AIO | PAA | Local pack | Anuncios | **Clic orgánico disponible** |
|---|---|---|---|---|---|---|
| **B2G / institucional** | `cómo contrata un ayuntamiento una orquesta` | Poco probable | A veces | No | **Nulo** | **70–85%** 🟢 |
| **Verbena + provincia** | `contratar orquesta verbena Asturias` | Poco probable | A veces | A veces | Bajo | **55–70%** 🟢 |
| **Txaranga + zona** | `contratar txaranga Navarra` | Poco probable | A veces | A veces | Bajo | **55–70%** 🟢 |
| **Transaccional sin geo** | `contratar monologuista para eventos de empresa` | Poco probable | Sí | No | **Alto** | **40–55%** 🟡 |
| **Marca / artista** | `[nombre del grupo] contratar` | No | No | A veces | Nulo | **60–80%** 🟢 |
| **Comparativa** | `dj o grupo en directo para una boda` | **Probable** | Sí | No | Bajo | **25–35%** 🟠 |
| **Transaccional + geo (boda)** | `grupo de música para bodas en Barcelona` | Poco probable | A veces | **Sí** | **Alto** | **25–40%** 🟠 |
| **Precio** | `cuánto cuesta una charanga` | **Muy probable** | Sí | No | Medio | **20–30%** 🟠 |
| **Informacional puro** | `qué es un rider técnico` · `canciones para la entrada de la novia` | **Casi seguro** | Sí | No | Bajo | **10–20%** 🔴 |

### 6.3 Las cinco consecuencias

**1. El territorio prioritario es también el que más clic conserva.** B2G, verbena y txaranga están todos en verde. **La debilidad del SERP y la disponibilidad de clic apuntan al mismo sitio.** Eso casi nunca pasa y hay que aprovecharlo antes de que alguien más lo vea.

**2. El bloque informacional ha perdido el 80-90% de su valor de clic.** `/guias` no debe llevarse más del 10% del esfuerzo de producción del año 1. Escribir "canciones para la entrada de la novia" es regalarle contenido a un AI Overview.

**3. En transaccional + geo de boda, el local pack es el competidor real.** Sin Google Business Profile verificado, esas búsquedas están fuera de alcance sea cual sea el contenido. **Mover el GBP del checklist a acción nº1 del proyecto.**

**4. Las páginas de precio hay que escribirlas para ser citadas, no solo clicadas.** Con AIO muy probable, parte del retorno de `/cuanto-cuesta-*` será marca y no clic. Lo que hace citable a una página: **tablas HTML reales (no imágenes)**, cifras concretas, frases declarativas autocontenidas, fuente atribuible, fecha visible y schema limpio.

**5. Hay una ventaja de idioma sin explotar.** `txaranga` (grafía vasca) vs `charanga` (castellana) son dos SERPs distintos con competencia distinta. `charangas.info` no cubre bien el vasco-navarro y `jaiekin.com` es un MVP. **Cubrir ambas grafías, en URLs separadas o en la misma con las dos en el H1 y en el cuerpo**, es una ventaja gratis que nadie ha tomado.

---

# PARTE IV — DECISIONES

## 7. Qué NO se puede ganar en 18 meses

Sin anestesia. Cada línea es presupuesto que no se quema.

### 7.1 Imposible. No intentarlo en orgánico bajo ningún concepto

| Familia de keywords | Quién la tiene | Por qué |
|---|---|---|
| `música/músicos/grupos para bodas [+ cualquier capital]` | Bodas.net | UGC de miles de reseñas + datos propietarios + The Knot Worldwide + 20 años |
| `dj para bodas [+ ciudad]` | Bodas.net + cientos de DJs con SEO local | Saturación total, cero diferenciación |
| `contratar artistas para eventos` · `agencia de espectáculos [+ capital]` | Espectalium | Malla interna de decenas de miles de URLs |
| `cuánto cuesta [X]` **en genérico pelado** | Cronoshare | Autoridad transversal prestada. Se le gana en la variante contextualizada, no en la genérica |
| `contratar mago` · `mago precios` **sin modificador** | Superanimaciones y el mercado infantil | Tráfico no servible. Ensucia la señal temática |
| Nombre de **artista famoso** (`contratar Leo Harlem`) | Espectalium, Partfy, medios | No se representa. Riesgo reputacional + pogo-sticking |
| `música en directo [+ ciudad]` en sentido "dónde ir" | Time Out, guías de ocio | La intención no es de contratación |
| `licencia música en directo bar` como cluster | Arquitectos, consultoras acústicas, LicMad | Es su negocio, no el nuestro. Una pieza como máximo (§3.6) |

### 7.2 Posible pero no en 18 meses

| Keyword | Plazo realista | Condición |
|---|---|---|
| `música en directo para bodas` (pilar) | 18–30 meses | Cluster completo + 25 dominios enlazantes |
| `artistas para eventos de empresa` (pilar) | 15–24 meses | Idem |
| `grupo de música para bodas en Barcelona` (top 3) | 12–20 meses | Y por debajo del local pack. **Sin GBP, nunca** |
| `contratar orquesta` (head sin modificador) | 15–24 meses | Con el cluster de verbena maduro |

**Consecuencia operativa:** los pilares **no traen tráfico en el año 1**. Se construyen igual, porque son la arquitectura de la que cuelgan los satélites y la señal de autoridad temática. **Su KPI del año 1 es servir de hub, no traer visitas.** Medirlos por tráfico a los 8 meses lleva a la conclusión errónea de que el plan no funciona, y a rehacerlo justo antes del punto de inflexión.

### 7.3 Ganable pero que NO hay que ganar — la trampa del tráfico bonito

Esto es lo que más presupuesto quema en SEO de servicios, porque **sí posiciona** y por eso engaña.

| Keyword | Por qué NO |
|---|---|
| `qué es un rider técnico` · `contrato de actuación musical` · `modelo contrato bolo` | Lo busca **el músico**, no el cliente. Tráfico 100% inútil |
| `canciones para la entrada de la novia` · `repertorio para boda` · `música para el cóctel` | Volumen alto, conversión ~0, y AIO se lleva el 80-90% |
| `cuánto cobra [famoso] por actuar en una boda` | Curiosidad pura. Ensucia la señal temática |
| `historia de la charanga` · `origen de la verbena` · `[género] historia` | Es exactamente el relleno de Celebrents. Copiar su debilidad |
| `animación infantil` · `payasos` · `magia para niños` | Fuera de servicio. Tráfico no servible |

**Regla de decisión, escrita para que no haya discusión:**

> Antes de publicar cualquier pieza informacional: **¿la persona que hace esta búsqueda puede firmar un contrato de 1.500 €?** Si la respuesta es no, no se publica.

### 7.4 Expectativa de plazos, corregida

| Hito | Doc 04 | **Corrección** |
|---|---|---|
| Errores técnicos resueltos | Días | Días ✓ |
| Primeras impresiones en Search Console | — | **Mes 2–3** (B2G y txaranga primero: sin competencia, indexan rápido) |
| Primeros briefs desde orgánico | Mes 5–7 | **Mes 4–7** en verbena/B2G · **mes 8–12** en boda |
| Volumen relevante | Mes 10–14 | **Mes 9–14** en verbena · **mes 14–20** en boda |
| Pilares con tráfico propio | — | **Mes 18–30** |

**Nota:** el plazo en verbena/B2G es **mejor** que el del doc 04, no peor. Es la ventaja directa de atacar un SERP sin competencia. El plazo en boda es peor. Ambas correcciones van en la misma dirección: el plan tiene que empezar por donde está el hueco.

**Y un ajuste de mix:** con el orgánico dando poco durante 4-6 meses, el año 1 no puede ser 100% SEO. Google Ads sobre las head terms imposibles (§7.1) mientras el orgánico construye la cola no es traicionar el SEO: es lo que permite que el SEO llegue vivo al mes 12.

---

## 8. Directorios y agregadores: ¿estar o no estar?

La pregunta está mal formulada. No es "¿estamos en Bodas.net?". Es **"¿en cuáles, para extraer qué activo, y con qué fecha de caducidad?"**.

### 8.1 El trade-off

**A favor:** leads desde la semana 1 mientras el SEO no da nada; acceso a la demanda del vertical; y sobre todo **reseñas verificadas**, el activo que Show Up no tiene y que tarda años en construirse.

**En contra:** el enlace suele ser `nofollow`/`sponsored`, **valor SEO ≈ 0**; el lead llega frío y comparando precio; y **canibalización estructural** — la ficha del portal rankeará por `show up events` antes que la web propia. La foto del final de ese camino ya existe: **Bodaclick, que presumía del 40% de las bodas de España, aparece hoy como ficha dentro de Bodas.net** (`https://www.bodas.net/animacion/bodaclick--e248358`).

### 8.2 Decisión por plataforma

| Plataforma | Decisión | Razón | Salida |
|---|---|---|---|
| **Google Business Profile** | **Sí, día 1, prioridad absoluta** | No es un directorio: es el local pack, que en `[servicio]+[ciudad]` se lleva más clic que la posición orgánica 1. Gratis | Nunca |
| **Bodas.net** | **Sí, 12 meses, plan mínimo** | Única vía al vertical boda. **El objetivo no es el lead: es acumular 15-20 reseñas verificadas** para usarlas fuera | Cuando el orgánico dé >10 briefs/mes de boda |
| **Agendas de verbena** (`orquestasdegalicia.es`, `festia.es`) | **Sí, gratis, sin dudarlo** | Modelo "dónde ir", no compiten. Son **fuente de enlaces, de datos de mercado y de contactos de comisiones de fiestas** | — |
| **Directorios de nicho de bodas** (`theweddingmarket.es`, `weddingplanners.es`, `planning.wedding/directory`, `eventplannerspain.com`) | **Sí, selectivo** | Aquí sí hay `dofollow` real y relevancia temática | — |
| **Cronoshare, Fixando** | **No** | Lead pagado por unidad, cliente pidiendo 5 presupuestos. Destruye el posicionamiento de marca en el primer contacto |—|
| **Espectalium, Partfy, Celebrents, Artistealo, ContratarArtistas, Evenses, Eventzone** | **No** | Son **competidores directos**, no canales. Meter artistas ahí es alimentar a quien te quita el SERP | — |
| **charangas.info, jaiekin.com, jupy.es** | **No como proveedor.** Sí como objeto de estudio | Son a quien hay que desplazar. Estar dentro legitima al competidor que se quiere batir | — |
| **Gigstarter** | **No** | Modelo artista-directo sin comisión. Elimina el rol de Show Up | — |
| **Milanuncios** | **No** | Contexto de precio bajo. Daño de marca > cualquier lead | — |

### 8.3 La regla y la métrica de control

> **Se entra en un directorio para extraer un activo transferible —reseñas, un enlace real, un contacto de comisión de fiestas— con fecha de salida escrita. Nunca para vivir de él.**

**Métrica única:** % de briefs de canal propio (orgánico + directo + marca). **Si a los 18 meses no supera el 60%, el negocio es de Bodas.net y Show Up es su proveedor.**

---

## 9. Backlinks: de dónde salen los suyos y cuáles son replicables

### 9.1 El hallazgo que lo cambia todo

| Competidor | Fuente de enlaces | ¿Replicable? |
|---|---|---|
| Bodas.net | The Knot Worldwide, prensa generalista (`hola.com`, `stylelovely.com`), Wedding Awards, y **los propios proveedores enlazando "míranos en Bodas.net"** | **No** |
| Cronoshare | PR de un marketplace horizontal. Su autoridad **no viene de eventos** | **No** |
| Espectalium | Antigüedad + notas de prensa + enlaces desde webs de artistas representados | **Parcialmente** |
| **Artistealo, Partfy, Celebrents, charangas.info, jaiekin, Multipark, Vértigo** | **Perfil probablemente ligero.** Rankean por escala interna y antigüedad, no por autoridad externa | **Sí — y ese es el punto** |
| Agencias regionales | Prensa local, directorios de eventos, colaboraciones con espacios | **Sí. Este es el manual** |
| Proveedores directos | Webs de fincas, wedding planners, ayuntamientos que publican el programa | **Sí, directamente** |

> **Los competidores batibles no ganan por backlinks. Ganan por antigüedad y escala programática. El gap de enlaces frente a ellos es pequeño.** 10-20 enlaces reales de nicho pueden decidir el resultado en todo el territorio prioritario. El gap frente a Bodas.net es infinito — pero Bodas.net no está en el territorio prioritario.

### 9.2 Las ocho fuentes replicables, por dificultad

**1. La web de cada artista de la agenda · dificultad 1/10 · el más fácil que existe**
Cada txaranga, orquesta, tributo y grupo de versiones de la agenda tiene web o Facebook. Enlace **editorial y contextual** en su sección de contratación (*"nos representa Show Up para fiestas patronales y eventos"*), nunca en el pie. Anchor variado. **Con una agenda grande esto no son 6 enlaces, son decenas.** Es el mayor activo de link building del proyecto y ya está pagado.
**Regla:** nunca el mismo anchor, nunca todos el mismo mes, nunca sitewide en footer. Es la firma de patrón artificial.

**2. Ayuntamientos y comisiones de fiestas · dificultad 2/10 · el más valioso y el más ignorado**
**Los ayuntamientos publican el programa de fiestas en su web municipal, en PDF y en HTML, y a menudo acreditan a quien lo ha programado.** Un enlace desde un dominio `.es` municipal es de los enlaces más limpios y con más autoridad temática que puede conseguir una empresa de este sector. Nadie del nicho lo está trabajando sistemáticamente.
**Acción concreta:** en cada contratación con un ayuntamiento, pedir mención con enlace en la página del programa. Cuesta una frase en el email de cierre.

**3. Prensa local por fiestas patronales · dificultad 3/10 · sinergia total con el territorio prioritario**
Cuando se programa una fiesta mayor, el diario provincial y el digital local publican el programa y las crónicas. Enlaces con autoridad local decente, temáticamente perfectos, y refuerzan exactamente el cluster prioritario. **El hueco de contenido con más clic disponible es también la mejor fuente de enlaces.**

**4. Agendas de verbena · dificultad 2/10**
`https://www.orquestasdegalicia.es/` y `https://festia.es/eventos` recogen actuaciones confirmadas por zona. Publicar ahí cada actuación es gratis, da enlace o al menos cita, y **además da datos de mercado de la competencia**.

**5. Fincas, masías y espacios · dificultad 2/10 · para el vertical boda**
Toda finca de bodas tiene página de "proveedores recomendados". `dofollow`, temáticamente perfecto, **local** (refuerza la landing de zona), y se consigue con una llamada tras un evento bien resuelto. **Cada evento hecho = un enlace potencial.**

**6. La pieza B2G como recurso citable · dificultad 4/10**
Una guía honesta de "cómo contrata un ayuntamiento las actuaciones de sus fiestas" se enlaza desde foros de secretarios e interventores municipales, blogs de contratación pública y grupos de concejales de festejos. **Contenido que merece enlaces**, la única forma de link building que no se puede penalizar.

**7. Wedding planners y directorios de nicho · dificultad 3/10**
`https://www.theweddingmarket.es/`, `https://www.weddingplanners.es/`, `https://www.thebigday.es/`, `https://planning.wedding/directory`, `https://www.eventplannerspain.com/`. Requiere relación real, no email frío.

**8. Datos propios como imán de enlaces · dificultad 6/10 · el de mayor techo**
El activo que Bodas.net tiene y nadie más en verbena: **datos agregados de precio real**. Un *"Barómetro de precios de música en vivo popular en España"* —charanga, txaranga, orquesta, tributo, versiones— publicado una vez al año con metodología transparente, es lo único de este plan que puede atraer enlaces de prensa generalista y medios económicos. En un nicho donde **nadie publica ni un precio**, sería la única fuente citable que existe.
**No es para el año 1, pero el dato se empieza a registrar desde el evento 1.** Si no se registra desde el principio, en dos años no existe.

### 9.3 Prohibido

- Packs de enlaces, PBNs, notas de prensa replicadas en 40 portales. Con dominio nuevo no hay colchón de autoridad que absorba una penalización.
- **Intercambios con otras agencias del sector.** Son competidores; el enlace es cruzado, detectable y les regala relevancia.
- Enlaces sitewide en el footer de las webs de los artistas. **Editorial y contextual, o nada.**

### 9.4 Objetivo de perfil

| Momento | Dominios enlazantes | Composición |
|---|---|---|
| Mes 3 | 5–10 | Webs de artistas de la agenda |
| Mes 6 | 12–20 | + 1-2 ayuntamientos + agendas de verbena |
| Mes 12 | 25–40 | + prensa local de fiestas + fincas + directorio de nicho |
| Mes 18 | 40–60 | + citas a la pieza B2G + medios de sector |

40–60 dominios reales y temáticamente relevantes **bastan para ganar todo lo listado con debilidad ≥7 en la matriz §1**. No bastan para tocar nada de §7.1, y no pasa nada: §7.1 no está en el plan.

---

## 10. Las once conclusiones que cambian el plan

| # | Conclusión | Efecto sobre el doc 04 |
|---|---|---|
| 1 | **La hipótesis del coordinador está confirmada con margen.** El nicho de verbena/txaranga no es "algo más fácil" que el de bodas: es otro deporte. El portal líder de charangas **no tiene charangas en su propia página del País Vasco** | **Invertir el orden del plan.** Fiestas/verbena pasa a ser el cluster A |
| 2 | **Fiestas patronales y verbena no es el tercer cluster: es el negocio.** Ahí está el activo del cliente, la debilidad del SERP, el clic disponible, el ticket alto y el comprador que repite | Reescribir §2 y §5 del doc 04 |
| 3 | **El B2G es el mejor activo individual del proyecto.** Cero competencia comercial, ~80% de clic, y es la mejor fuente de enlaces | Subir `como-contrata-un-ayuntamiento` **del puesto 6 al 1** |
| 4 | **Nadie en todo el nicho de verbena publica un precio.** Vértigo tiene 15.000 palabras y 150 orquestas sin una sola cifra | La página de precio de orquesta/txaranga es la **nº2** |
| 5 | **Cronoshare, #1 en "cuánto cuesta una charanga", no distingue el tipo de evento.** Nueve factores de precio y ninguno es la ocasión | Hueco directo, explotable en una tarde |
| 6 | **El corporativo tiene los tres primeros resultados ocupados por el blog de un hotel, el de un ERP y un listículo de espacios.** Y los precios publicados (230-370 €) son de otro mercado | Adelantar cena de Navidad **de junio a mayo**. Separar precio privado de corporativo |
| 7 | **Bodas es un muro, y el plan lo trataba como la base.** Solo cola larga de nicho, comparativas y precio contextualizado | Bajar bodas del puesto 1 al 12 |
| 8 | **Bares y salas: debilidad altísima, demanda casi nula.** La única puerta es `licencia música en directo`, que ocupan un arquitecto y una consultora acústica | Confirma §4.7 del doc 04. **Una sola pieza, mes 12+, y solo si sobra** |
| 9 | **No cubrir infantil obliga a modificar todos los slugs de mago/monologuista.** El mercado de magos en España es mayoritariamente infantil | Regla dura: ninguna URL de mago o monologuista sin modificador de segmento adulto |
| 10 | **Nadie en la vertical usa vídeo.** Ninguna página analizada lo tiene. En un sector que vende espectáculo | `VideoObject` obligatorio también en pilares y páginas de precio, no solo en fichas |
| 11 | **Los competidores batibles no ganan por enlaces.** El gap de autoridad frente a ellos es pequeño, y la agenda de artistas del cliente ya es un activo de link building pagado | Ligar link building a operaciones: cada actuación = un enlace potencial (artista, ayuntamiento, prensa local, agenda) |

---

## Anexo A — Las 32 búsquedas a verificar a mano el día 1

Incógnito, es-ES, móvil y escritorio, desde **Barcelona, Madrid y Pamplona** (la tercera es clave para el eje txaranga). Anotar features presentes, nº de anuncios arriba, y las 5 primeras URLs orgánicas con su posición en píxeles.

**Bloque B2G y fiestas (8)**
1. cómo contrata un ayuntamiento una orquesta
2. contrato menor actuación musical
3. pliego actuación musical fiestas patronales
4. contratar orquesta fiestas patronales
5. organizar fiestas de pueblo música
6. cuánto cuesta una orquesta para las fiestas del pueblo
7. programación fiestas patronales orquestas
8. contratar orquesta verbena [provincia]

**Bloque txaranga/charanga (6)**
9. contratar txaranga
10. contratar charanga
11. charangas Navarra
12. txarangas País Vasco
13. cuánto cuesta una charanga
14. charanga despedida de soltero

**Bloque tipo de artista (6)**
15. contratar banda tributo
16. contratar grupo de versiones para fiestas
17. contratar monologuista para eventos de empresa
18. contratar mago para evento de empresa
19. contratar humorista para gala
20. contratar dj para fiestas

**Bloque empresa (4)**
21. qué contratar para la cena de navidad de empresa
22. artistas para eventos de empresa
23. cuánto cuesta un artista para un evento de empresa
24. espectáculo para convención de empresa

**Bloque boda (5)**
25. grupo de música para bodas en Barcelona
26. cuánto cuesta un grupo de música para una boda
27. dj o grupo en directo para una boda
28. cuarteto de cuerda para boda
29. con cuánta antelación se contrata la música de una boda

**Bloque hostelería y privados (3)**
30. licencia música en directo bar
31. contratar grupo de música para mi bar
32. contratar grupo música cumpleaños

---

## Anexo B — Inventario completo de competidores

| Dominio | URL de referencia | Arquetipo | Segmento fuerte | Debilidad |
|---|---|---|---|---|
| bodas.net | https://www.bodas.net/bodas/proveedores/musica/barcelona | A | Boda | Muy baja |
| zankyou.es | https://www.zankyou.es/ | A | Boda | Media |
| bodaclick.com | https://www.bodaclick.com/servicios/ | A | Boda | Alta (en declive) |
| todoboda.com | https://www.todoboda.com/bodas/proveedores/musica/girona | A | Boda | Media |
| cronoshare.com | https://www.cronoshare.com/cuanto-cuesta/charanga | B | Precio (todo) | **Media-alta: context-blind** |
| fixando.es | https://www.fixando.es/servicios/dj-para-eventos | B | DJ, leads | Media |
| milanuncios.com | https://www.milanuncios.com/anuncios/orquestas-para-fiestas-patronales.htm | B | Verbena, salas | Alta |
| espectalium.com | https://www.espectalium.com/contratar-artistas-para-eventos/madrid/ | C | Empresa, artistas | Media |
| artistealo.com | https://www.artistealo.com/contratar-servicio/orquesta/asturias/ | C | **Verbena por provincia** | Media — **el rival real** |
| partfy.com | https://partfy.com/charanga/navarra | C | Charanga, monologuista | Media-alta |
| celebrents.es | https://www.celebrents.es/girona/grupos-de-jazz/ | C | Género × ciudad | **Muy alta** |
| supermusica.es | https://supermusica.es/musica-para-eventos/musicos-para-bodas/ | C | Boda | Media — **vigilar** |
| fillevents.es | https://www.fillevents.es/tributos/ | C | Tributos, versiones | Alta |
| contratarartistas.com | https://contratarartistas.com/ciudad/madrid-_1 | C | Genérico | Alta |
| evenses.es | https://www.evenses.es/charanga | C | Genérico | Alta |
| eventzone.es | https://eventzone.es/bandas-tributo | C | Tributos, versiones | Alta |
| musiqua.es | https://www.musiqua.es/generos/grupos-musicales-bandas/girona | C | Género × ciudad | Alta |
| lafactoriadelshow.com | https://www.lafactoriadelshow.com/charangas/ | C | Charangas, orquestas | Media-alta |
| gigstarter.es | https://www.gigstarter.es/contratar-reservar-banda | C | Bandas | Media |
| espectaculosvertigo.com | https://www.espectaculosvertigo.com/orquestas/ | D | **Orquestas nacional** | **Muy alta: 0 precios** |
| multiparkespectaculos.com | https://www.multiparkespectaculos.com/contratar-orquestas-en-castilla-y-leon | D | Orquestas CyL | **Muy alta: web 2015** |
| produccionessibemol.es | https://www.produccionessibemol.es/orquestas-y-grupos | D | Orquestas | Muy alta |
| hugoespectaculos.com | https://www.hugoespectaculos.com/que-orquestas-contratar-para-una-fiesta-de-pueblo-exitosa | D | Fiestas de pueblo | Muy alta |
| bellmart.es | https://bellmart.es/organizador-fiestas-de-pueblo/ | D | Fiestas integral | Alta |
| circodeliaproducciones.com | https://www.circodeliaproducciones.com/contratacion-de-magos/ | D | Magos empresa | Media-alta |
| magosmadrid.com · tusmagos.com · tumago.com | https://magosmadrid.com/ | D | Magos | Media-alta |
| tuseteventos.com · ispasion.com · eventosbarcelona.com | https://tuseteventos.com/eventos/espectaculos-entretenimiento/artistas-para-eventos/ | D | Empresa | Alta |
| deamare.es | https://www.deamare.es/grupo-musical-para-fiesta-privada | D | Privados | Alta |
| charangas.info | https://www.charangas.info/charangas-en-el-pais-vasco | E | Charangas | **Máxima: Joomla, 0 resultados locales** |
| jaiekin.com | https://jaiekin.com/cat/charangas/zona/navarra/ | E | Charangas vasco-navarras | **Máxima: MVP abandonado** |
| jupy.es | https://www.jupy.es/producto/charanga-logrono-la-rioja | E | Charangas Rioja | Muy alta |
| orquestasdegalicia.es · festia.es | https://www.orquestasdegalicia.es/ | E | Agenda de verbenas | **No compiten — son aliados** |
| arlequinband.com | https://www.arlequinband.com/charanga/precio-de-una-charanga.html | F | Charanga propia | Alta — pero **publica precio** |
| kalifornia.es | https://kalifornia.es/cuanto-cuesta-contratar-orquesta-grupo-versiones/ | F | Orquesta/versiones | Alta — **publica precio: 1.950 € + IVA** |
| callehabana.es | https://callehabana.es/precio-de-orquestas-para-fiestas/ | F | Orquesta propia | Alta |
| maikelnaits.com · grupomusicalfeeling.com · thesweetrockers.com | https://www.maikelnaits.com/sqm/musica-para-bodas/girona | F | Boda | Alta |
| somosnexho.com · licmad.es · acusticadoppler.com · gorkavillanueva.com | https://www.somosnexho.com/musica-en-directo-maximiza-posibilidades-local | — | **Licencias hostelería** | No compiten — **son la puerta al segmento salas** |

---

*Documento cerrado a 31/07/2026. Caduca en 6 meses: el SERP se mueve y las cifras de AI Overview van a empeorar, no a mejorar. Revisión obligatoria en enero de 2027 con los datos propios de Search Console encima de la mesa — que a esas alturas valdrán más que todo este análisis.*
