# Show Up — Autoridad temática, contenidos y enlaces

> **Este documento amplía y CORRIGE `04-arquitectura-seo.md`.** La arquitectura de URLs, las reglas de interlinking, el schema y la lista de "qué NO hacer" de aquel documento siguen vigentes salvo en dos puntos, que aquí se anulan y se justifican:
>
> - **Se anula el eje "boda primero".** El núcleo del negocio es la **música en vivo** y el eje de construcción de autoridad es **ayuntamientos y comisiones de fiestas**, no bodas. Razón en la sección 1.3.
> - **Se anula la decisión 4.7 ("no abrir el vertical hostelería en SEO").** Era correcta sobre la keyword y equivocada sobre el territorio. Razón en la sección 1.6.
>
> Regla que gobierna todo lo demás: **cada pieza tiene que poder responder a "¿qué sabemos nosotros de esto que no sabe Bodas.net?"**. Si la respuesta es "nada", la pieza no se escribe.

---

## 0. La tesis, en un párrafo

El activo real de esta empresa no es una web ni un catálogo: es **una agenda de músicos de directo** —txarangas, charangas, orquestas de verbena, grupos de versiones, tributos, solistas y dúos— y el conocimiento que se acumula gestionándolos. Un agregador sabe **qué artistas existen**. Aquí se sabe **cuántos amperios pide una orquesta de verbena, cuántos pases hace, qué cobra de verdad un dúo un viernes en un bar de 60 personas y por qué la comisión de fiestas cierra el cartel en febrero**. Eso no está escrito bien en ningún sitio de internet en español. Todo el plan consiste en sacarlo de la cabeza de tres personas y ponerlo en URLs.

Y una consecuencia que hay que aceptar el día uno: **el orden no lo marca el tamaño del mercado, lo marca el vacío del SERP.** Bodas es el mercado más grande y es donde más se tarda en existir. Ayuntamientos y locales con directo son mercados más pequeños donde se puede ser el primero **este año**. Con vía libre del cliente para que el producto se adapte al posicionamiento, la decisión es evidente.

---

## 1. Mapa topical: música en vivo como núcleo

### 1.1 Cómo piensa Google este nicho

Google no clasifica por keywords, clasifica **entidades y sus relaciones**. Para que `showupevents.es` sea entendido como autoridad, el dominio tiene que quedar conectado —vía contenido propio— con estas familias:

| Familia | Entidades a cubrir |
|---|---|
| **Formato musical (NÚCLEO)** | orquesta de verbena, charanga, txaranga, banda de versiones, tributo, dúo, solista, trío acústico, jazz band, DJ, DJ + directo |
| **Espectáculo no musical (periferia)** | mago de cerca, mago de escena, monologuista, humorista, artista de variedades |
| **Ocasión** | fiestas patronales, verbena, feria, pregón, chupinazo, cabalgata, cena de empresa, cena de Navidad, convención, boda, aniversario, cumpleaños |
| **Local con programación** | bar musical, pub, sala de conciertos, café-teatro, terraza de verano, ciclo de directos, jam |
| **Dinero** | caché, presupuesto, señal, IVA, factura, retención, dietas, kilometraje, pases, horas extra |
| **Sitio y producción** | plaza, camión-escenario, carpa, aforo, amperios, cuadro eléctrico, generador, backline, rider, prueba de sonido, limitador, decibelios, hora de cierre |
| **Papeles** | contrato menor, pliego, portal de transparencia, SGAE, licencia de actividad, seguro de RC, alta del artista en Seguridad Social |
| **Geografía** | provincia, comarca, zona, capital |

**Diagnóstico.** Los agregadores cubren razonablemente *Formato* y *Ocasión* (tienen fichas y filtros) y **cubren fatal** *Dinero*, *Sitio y producción*, *Papeles* y *Local con programación*. Son justo las cuatro familias donde hace falta haber trabajado para escribir una línea que se sostenga. **Ese es el territorio.**

### 1.2 Exclusiones explícitas

| Fuera del posicionamiento | Por qué |
|---|---|
| **Payasos y animación infantil** | Decisión de negocio. No se escribe una línea, no se pone una etiqueta, no se acepta un enlace de ese vertical. Contamina la clasificación de entidad del dominio |
| Castillos hinchables, pintacaras, hinchables | Mismo motivo |
| "Espectáculos para todos los públicos" como categoría | Frase que arrastra tráfico infantil. Prohibida |

Regla dura: **si un contenido puede hacer que Google clasifique este dominio como "animación infantil", ese contenido no existe.**

### 1.3 Los cinco territorios, ordenados por velocidad de conquista

Esta es **la decisión central del documento**. No se ordena por tamaño de mercado: se ordena por en cuánto tiempo se puede ser el primer resultado.

| # | Territorio | Volumen de búsqueda | Competencia real en el SERP | Ticket | Recurrencia | **Velocidad de autoridad** |
|---|---|---|---|---|---|---|
| **1** | **Ayuntamientos y comisiones de fiestas** | Bajo-medio | **Casi nula.** PDFs municipales y portales de contratación. Ni una landing comercial decente | 3.000–45.000 € | Anual, y con inercia brutal | **★★★★★ — 4-6 meses** |
| **2** | **Bares, pubs y salas con directo** | Bajo-medio | **Nula en contenido.** Sólo guías de "dónde ir a escuchar" | 250–900 €/bolo | **Semanal.** Es el que más veces repite | **★★★★★ — 4-6 meses** |
| **3** | **Empresa** | Medio | Media. Agregadores genéricos, poco específico | 1.500–8.000 € | Anual, RRHH repite | ★★★☆☆ — 8-10 meses |
| **4** | **Bodas** | **Alto** | **Brutal.** Bodas.net y 15 años de dominio | 1.500–6.000 € | Ninguna | ★★☆☆☆ — 10-14 meses |
| **5** | **Privados** | Muy bajo | Irrelevante | 600–3.000 € | Baja | ★☆☆☆☆ — sin cluster |

**Las tres conclusiones que ordenan el trabajo:**

1. **Se empieza por ayuntamientos.** Es el único territorio del sector donde una web nueva puede ser la mejor página de internet sobre un tema **en tres meses**, porque hoy no hay ninguna. Además el ticket es el más alto y el lector es quien firma.
2. **Bares y salas es el segundo, y es el que sostiene la máquina.** Ticket unitario bajo, pero recurrencia semanal: es el territorio que genera **dato** para el observatorio, **relación** con los músicos y **volumen de eventos** con los que llenar de pruebas el resto del sitio. Es el motor de contenido, no el motor de facturación.
3. **Bodas entra en el mes 9, no en el mes 1.** No porque no interese, sino porque el cluster de bodas necesita un dominio con autoridad previa para arrancar. Publicar el pilar de bodas el primer mes es quemarlo: se indexa sin fuerza, no rankea, y no se puede "volver a estrenar".

### 1.4 Los clusters

```
NÚCLEO · MÚSICA EN VIVO
   │
   ├─ T1 · FIESTAS Y AYUNTAMIENTOS   → /orquestas-para-fiestas-patronales      [PILAR 1]
   ├─ T2 · LOCALES CON DIRECTO       → /musica-en-directo-para-bares-y-salas   [PILAR 2]
   ├─ T3 · EMPRESA                   → /artistas-para-eventos-de-empresa       [PILAR 3]
   ├─ T4 · BODAS                     → /musica-para-bodas                      [PILAR 4]
   └─ T5 · PRIVADOS                  → ancla en /como-funciona. Sin cluster
   │
TRANSVERSALES (cruzan los cuatro pilares)
   ├─ D · TIPO DE ARTISTA   → charangas y txarangas · orquestas · grupos de versiones ·
   │                          tributos · solistas y dúos · DJs · magos · monologuistas
   ├─ E · EL DINERO         → observatorio + páginas de precio + qué entra en el caché
   ├─ F · EL SITIO          → plaza, bar, carpa, salón: qué aguanta cada uno
   └─ G · PAPELES           → contrato menor, SGAE, licencias, seguros, riders
   │
CATÁLOGO → /artistas + fichas. No es cluster: es prueba
```

### 1.5 Territorio 1 · Fiestas patronales y ayuntamientos — **el eje**

**Pilar:** `/orquestas-para-fiestas-patronales` · *Orquestas, charangas y espectáculos para fiestas patronales*

| Satélite | URL | Por qué existe |
|---|---|---|
| Cómo contrata un ayuntamiento | `…/como-contrata-un-ayuntamiento` | **Cero competencia.** Contrato menor, umbrales, plazos, tres presupuestos, justificación del gasto. Lo lee quien firma |
| Cuánto cuesta una orquesta | `…/cuanto-cuesta` | Rangos por formación, por número de pases y por noches |
| Cómo se monta el programa de fiestas | `/guias/programa-de-fiestas-de-un-pueblo` | Día a día, de la charanga de la mañana al fin de fiesta. **Lo lee una comisión** |
| Qué necesita una verbena | `/guias/que-necesita-una-verbena` | Camión-escenario, amperios, generador, seguro, montaje, horarios |
| Cómo funciona una comisión de fiestas | `/guias/comision-de-fiestas` | Quién decide, con qué dinero, en qué mes. Nadie lo ha escrito |
| Justificación del gasto y facturas | `/guias/justificar-el-gasto-de-las-fiestas` | La pesadilla del interventor. Contenido de servicio puro |
| Provincia / comarca | `…/[provincia]` | Fase 4. Sólo con fiestas ya trabajadas allí |

> **Este es el cluster que decide el año 1.** Volumen modesto, conversión altísima, competencia inexistente y un lector que gestiona presupuesto público. Y es enlazable desde dominios `.es` municipales, que es de lo más valioso que se puede conseguir en España.

### 1.6 Territorio 2 · Bares, pubs y salas con programación en directo — **la corrección a `04`**

`04-arquitectura-seo.md` dijo: *"el hostelero no busca en Google 'contratar grupo para mi bar'; ese canal es outbound"*. **La primera parte es cierta. La conclusión es falsa.**

El hostelero no busca el servicio: **busca su problema**. Y sus problemas sí tienen volumen y no tienen competencia:

| Lo que sí se busca | Quién rankea hoy |
|---|---|
| `sgae música en directo bar` / `cuánto cobra la sgae a un bar` | Foros, la propia SGAE, alguna gestoría |
| `licencia para poner música en directo en un local` | Blogs jurídicos genéricos |
| `límite de decibelios bar música en vivo` | Ordenanzas municipales en PDF |
| `cuánto cobra un grupo por tocar en un bar` | **Nadie. Vacío absoluto** |
| `cómo organizar conciertos en mi bar` | Nadie con criterio |
| `qué necesito para poner música en directo en mi local` | Nadie |

**Pilar:** `/musica-en-directo-para-bares-y-salas`

| Satélite | URL |
|---|---|
| SGAE y licencias | `/guias/sgae-y-licencias-para-musica-en-directo` |
| Cuánto cuesta programar directos | `/guias/cuanto-cuesta-programar-musica-en-directo-en-un-bar` |
| Decibelios y horarios | `/guias/limite-de-decibelios-y-horario-de-cierre` |
| Qué formato cabe en tu local | `/guias/formatos-que-caben-en-un-bar` |
| Programar un trimestre de directos | `/guias/programar-un-trimestre-de-directos` |
| Ciudad | `/musica-en-directo-para-bares-y-salas/[ciudad]` — fase 4 |

**Por qué este territorio vale más de lo que parece:** el ticket es bajo, pero un local que programa cada semana genera 40 bolos al año, alimenta la agenda de músicos, produce fotos y vídeo constante, y **es la fuente de dato más rica del observatorio en el tramo bajo de precios** —el tramo que nadie ha publicado nunca.

### 1.7 Territorios 3 y 4 · Empresa y bodas

Se conservan tal cual están definidos en `04` (pilares, satélites, ciudades), **pero bajan de prioridad**: empresa entra en el mes 6, bodas en el mes 9. La estructura de URLs no cambia ni una letra.

### 1.8 Transversal D · Tipo de artista

`/charangas-y-txarangas` · `/orquestas-de-verbena` · `/grupos-de-versiones` · `/bandas-tributo` · `/solistas-y-duos` · `/dj-para-bodas-y-eventos` · `/magos-para-eventos` · `/monologuistas-para-eventos`

**`/charangas-y-txarangas` es la pieza de mayor rentabilidad relativa de todo el sitio.** Búsqueda con demanda real y estacional muy marcada (fiestas), competencia prácticamente inexistente en contenido, y un contenido que exige saber de qué se habla: qué instrumentación lleva cada formación, en qué zonas se llama de una manera y en cuál de otra, qué repertorio funciona en pasacalles y cuál en plaza, cuántas horas de calle aguanta una formación de viento y qué se le tiene que dar de comer y beber. Ese párrafo no lo escribe nadie que no haya movido una charanga.

### 1.9 Orden de construcción — las cinco fases

| Fase | Meses | Qué se construye | Por qué en este orden |
|---|---|---|---|
| **1 · Credibilidad + municipal** | 1–3 | `/nosotros`, `/metodologia`, pilar 1 y sus tres satélites duros, charangas | El territorio más vacío del sector. Y sin E-E-A-T publicado, una página de precios no se cree |
| **2 · Locales con directo** | 4–6 | Pilar 2 y su cluster de papeles | Segundo territorio virgen. Genera dato, relación y recurrencia |
| **3 · Empresa + dato propio** | 6–9 | Pilar 3, estacionales de Navidad, **Observatorio** | Ya hay muestra que publicar y ya hay sitio que merezca enlaces |
| **4 · Bodas + geo** | 9–12 | Pilar 4, precio de boda, comparativas, provincias | El dominio ya tiene autoridad: ahora sí se puede entrar donde hay competencia |
| **5 · Malla y volumen** | 12–15 | Resto del cluster D, informacionales de volumen, herramienta | Los informacionales de volumen sólo rankean con autoridad previa |

---

## 2. E-E-A-T para una marca que nació ayer

### 2.1 Diagnóstico honesto

| Letra | Situación | Recorrido en 12 meses |
|---|---|---|
| **E — Experience** (vivencia directa) | **Fuerte y real: agenda de músicos y años de sala.** Un agregador con 15 años de dominio tiene **cero** de esto | **Todo.** Es la única letra que no se compra ni se acumula esperando |
| **E — Expertise** (pericia demostrable) | Real pero invisible: no está escrita en ningún sitio | Alta: bios, criterios, metodología publicada |
| **A — Authoritativeness** (que te citen) | Cero. Sin enlaces, sin menciones | Media: observatorio + digital PR (sección 5) |
| **T — Trust** | Cero histórico, controlable al 100 % | Alta e inmediata: precios públicos, garantía en contrato, decir que no |

**Todo el esfuerzo del año 1 se concentra en convertir la primera E en algo indexable.** La experiencia que no está escrita, para Google, no existe.

### 2.2 Las diez preguntas que sólo sabe responder quien ha estado

Esta lista **es el motor de contenido de la empresa**. Cada respuesta es un párrafo que ningún agregador puede escribir, y cada una vive dentro de una página concreta:

| # | La pregunta | Dónde vive la respuesta |
|---|---|---|
| 1 | ¿Qué diferencia hay entre una charanga, una txaranga, una fanfarria y una banda, y qué se pide en cada zona? | `/charangas-y-txarangas` |
| 2 | ¿Cuántos pases hace una orquesta de verbena, qué pasa entre pases y quién cubre ese hueco? | `/orquestas-de-verbena` |
| 3 | ¿Cuántos amperios pide una orquesta y por qué el cuadro del ayuntamiento se queda corto? | `/guias/que-necesita-una-verbena` |
| 4 | ¿Qué medidas necesita la plaza para que entre un camión-escenario? | `/guias/que-necesita-una-verbena` |
| 5 | ¿Cuántos músicos caben en un bar de 60 personas sin que la gente se vaya a la calle? | `/guias/formatos-que-caben-en-un-bar` |
| 6 | ¿Qué cobra de verdad un dúo un viernes en un local, y por qué por debajo de esa cifra no va nadie bueno? | `/guias/cuanto-cuesta-programar-musica-en-directo-en-un-bar` |
| 7 | ¿En qué se diferencia el repertorio (y el precio) de un tributo y de un grupo de versiones? | `/bandas-tributo` |
| 8 | ¿En qué mes decide de verdad una comisión de fiestas, y quién manda dentro? | `/guias/comision-de-fiestas` |
| 9 | ¿A qué hora se llena la pista según el formato y la hora de cena? | `/guias/escaleta-de-una-noche` |
| 10 | ¿Qué formación aguanta una plaza de 800 personas y cuál se queda pequeña sin que se note hasta que es tarde? | Pilar 1 + Matriz de la Noche |

> Regla: **ninguna página se publica sin al menos una respuesta de este tipo.** Si una página se puede escribir sin haber estado en una plaza a las tres de la mañana, esa página no nos diferencia de nada.

### 2.3 Las seis pruebas de experiencia, y cómo se ven

| # | Prueba | Ejemplo literal |
|---|---|---|
| 1 | **El detalle que sólo se sabe estando** | *"Una orquesta de doce necesita 63 A y dos horas y media de montaje. Si la plaza tiene un cuadro de 32, no es que suene peor: es que no arranca."* |
| 2 | **Foto propia, no de banco** | `Charanga en el pasacalles · Fiestas de [pueblo] · Agosto de 2026` |
| 3 | **La cifra propia, con su n** | *"En las 41 verbenas que llevamos, la plaza se llena de media 25 minutos después de empezar el primer pase. Nunca antes."* |
| 4 | **La recomendación en contra** | *"Si tu bar tiene 45 metros y techo bajo, no metas cuarteto con batería. Te vacía la barra."* |
| 5 | **El error propio** | *"Nos pasó en [pueblo]: dimos por hecho que había toma trifásica. Desde entonces preguntamos amperios antes de firmar."* |
| 6 | **La firma con cara** | *"Escrito por [Nombre], que ha programado tres años seguidos las fiestas de [pueblo]."* |

Las pruebas 1, 3 y 5 son las que **ningún agregador puede replicar aunque copie la página entera**.

### 2.4 Sistema de autoría

**Dos autores reales, con nombre y cara. Ni uno más, ni cero.** Cero autores = se pierde la letra E entera. Cinco autores en una empresa de tres personas = mentira detectable.

| Elemento | Especificación |
|---|---|
| **Página de autor** | `/nosotros/[nombre]` — index, follow. Foto real, bio de 150 palabras con oficio verificable, enlace a LinkedIn |
| **Firma en artículo** | Foto circular + nombre enlazado + **credencial pertinente al tema de esa página** |
| **Credencial pertinente** | No "experto en eventos". Sí: *"ha movido charangas por Navarra desde 2016"* en la página de charangas; *"ha programado 120 noches en locales de Barcelona"* en la de bares |
| **Schema** | `Person` con `@id`, `sameAs` a LinkedIn, `jobTitle`; `author` del `Article` apunta a ese `@id`; la página de autor lleva `worksFor` → `@id` de la Organization |
| **Fechas** | `datePublished` y `dateModified` visibles. `dateModified` sólo se toca cuando de verdad se ha actualizado algo |

### 2.5 Bloque fijo de transparencia — al pie de toda guía y toda página de precio

> ### De dónde sale esto
>
> Los rangos de esta página salen de **[N] contrataciones cerradas** entre [mes] y [mes] de [año], en [zonas], más **[M] contratos municipales publicados** en portales de transparencia. No son medias del sector ni estimaciones: es lo que se ha pagado, con IVA aparte. Cuando un dato viene de fuera, lo decimos y lo enlazamos. Cuando no lo sabemos, ponemos que no lo sabemos.
>
> **Última revisión:** [fecha] · **Revisado por:** [nombre]

Hace cuatro cosas a la vez: señal de E-E-A-T para Google, material citable para un periodista, argumento de venta para el lector, y **es literalmente el tono de marca** ("se demuestran, no se dicen").

### 2.6 Qué elemento lleva cada tipo de página

| Tipo de página | Autoría | Foto propia | Dato propio | "Para esto no" | Fuentes externas | Schema |
|---|---|---|---|---|---|---|
| **Pilar** | Sí, arriba | 3–5 | Obligatorio | Sección entera | 2–3 salientes | `Service` + `FAQPage` + `Breadcrumb` |
| **Precio** | Sí + bloque "de dónde sale" | 1–2 | **Obligatorio con n** | "Cuándo no pagar más" | Contratos públicos, SGAE, INE | `Article` + `FAQPage` |
| **Guía de papeles** | Sí | 1 | Recomendable | Sí | **Obligatorio: BOE, ordenanza, SGAE, plataforma de contratación** | `Article` |
| **Landing local** | Del que ha estado allí | **3 mínimo, del sitio real** | Local (dB, amperios, horarios) | Por tipo de sitio | Web del ayuntamiento / local | `Service` + `areaServed` |
| **Ficha de artista** | Firma la marca | **Vídeo de directo obligatorio** | Dónde se les ha visto | **"No los pidas para"** | Spotify / YouTube / su web | `MusicGroup` o `Person` + `VideoObject` |
| **Observatorio** | Los dos autores | Sí | Es todo dato propio | — | Metodología + fuentes públicas | `Article` + `Dataset` |
| **`/nosotros`** | — | Caras reales | Años, noches, zonas | — | — | `Organization` + `Person` |

### 2.7 Trust: seis decisiones, cinco ya tomadas

1. **Precios públicos en horquilla** (copy deck). La señal de confianza más barata y más rara del sector.
2. **La Garantía Show Up publicada y en contrato**, con su letra pequeña dicha en voz alta.
3. **Cero testimonios inventados.** Variante B hasta que haya testimonio real con nombre, evento, ciudad y fecha.
4. **Cero `AggregateRating` sin reseñas.** Es acción manual.
5. **NAP idéntico** en web, Google Business Profile, redes y directorios.
6. **NUEVO — `/metodologia`: "Cómo elegimos a quién se sube".** Criterios explícitos: qué se mira, cuántas veces se ve tocar a alguien antes de meterlo, qué motivos hay para sacarlo. Es el equivalente a la política editorial de un medio: convierte "seleccionamos con criterio" (frase de folleto) en "este es el criterio" (frase verificable).

---

## 3. Los 30 primeros contenidos

### 3.1 El criterio de orden

1. **¿Podemos ganarlo con 0 autoridad?** — vacío real del SERP, no la métrica de la herramienta.
2. **¿El que busca está comprando?** — precio y procedimiento > inspiración.
3. **¿Es base de otras páginas?** — el pilar antes que sus satélites, siempre.
4. **¿Es estacional?** — se publica **5 meses antes** del pico, nunca en el pico.
5. **¿Genera enlaces?** — pero eso va cuando ya hay un sitio digno de enlazar (fase 3).
6. **¿Demuestra la primera E?** — entre dos piezas empatadas, gana la que sólo podemos escribir nosotros.

### 3.2 Fase 1 · Credibilidad + territorio municipal (meses 1–3)

| # | Título literal | URL | Keyword objetivo | Intención | Formato | Ext. | Alimenta | Por qué aquí |
|---|---|---|---|---|---|---|---|---|
| 1 | **Por qué no tenemos 500 artistas** | `/nosotros` | show up events (marca) | Navegacional + E-E-A-T | Página con caras y oficio | 900–1.200 | Brief | Sin esto, todo lo demás lo firma un fantasma |
| 2 | **Cómo elegimos a quién se sube** | `/metodologia` | — (señal de confianza) | Confianza | Documento de criterios | 800–1.100 | Brief y fichas | Convierte "criterio" en verificable. Enlazable desde toda guía |
| 3 | **Orquestas, charangas y espectáculos para fiestas patronales** | `/orquestas-para-fiestas-patronales` | contratar orquesta fiestas patronales | Transaccional B2G | **PILAR 1** | 2.400–3.000 | Brief + teléfono | El territorio más vacío del sector y el de mayor ticket. Todo el cluster cuelga de aquí |
| 4 | **Cómo contrata un ayuntamiento las actuaciones de sus fiestas** | `…/como-contrata-un-ayuntamiento` | cómo contrata un ayuntamiento una orquesta | Informacional B2G, compra segura | Procedimiento + umbrales + plantillas | 2.200–2.800 | Teléfono | **Cero competencia.** Lo lee quien firma. Y es enlazable desde `.es` municipales |
| 5 | **Cuánto cuesta una orquesta para las fiestas del pueblo** | `…/cuanto-cuesta` | cuánto cuesta una orquesta fiestas del pueblo | Comercial | Rangos por formación, pases y noches | 1.800–2.200 | Brief + teléfono | El dato que ningún ayuntamiento encuentra en ningún sitio. Primer tráfico convertible |
| 6 | **Charangas y txarangas: cuál pedir y para qué momento** | `/charangas-y-txarangas` | contratar charanga / txaranga | Transaccional | Landing de tipo con criterio de zona y repertorio | 1.600–2.000 | Brief | **La mejor relación esfuerzo/resultado del sitio.** Demanda real, competencia inexistente, imposible de escribir sin oficio |
| 7 | **Cómo se monta el programa de fiestas de un pueblo, día a día** | `/guias/programa-de-fiestas-de-un-pueblo` | programa de fiestas patronales / organizar fiestas del pueblo | Informacional B2G | Guía cronológica con presupuesto tipo | 2.200–2.800 | Brief + teléfono | Lo lee una comisión entera. Contenido de servicio puro: se comparte por WhatsApp entre comisiones |
| 8 | **Qué necesita una verbena: escenario, corriente, seguros y horarios** | `/guias/que-necesita-una-verbena` | qué necesita una verbena / montaje escenario verbena | Informacional técnico | Guía de producción con medidas y amperios | 1.800–2.200 | Brief | Nadie ha escrito esto. Es la prueba de experiencia más contundente del sitio |

### 3.3 Fase 2 · Locales con directo (meses 4–6)

| # | Título literal | URL | Keyword objetivo | Intención | Formato | Ext. | Alimenta | Por qué aquí |
|---|---|---|---|---|---|---|---|---|
| 9 | **Música en directo para bares, pubs y salas** | `/musica-en-directo-para-bares-y-salas` | música en directo para bares / grupos para bares | Transaccional B2B | **PILAR 2** | 2.200–2.800 | Brief + WhatsApp | Segundo territorio virgen. Recurrencia semanal: es el que más veces repite |
| 10 | **SGAE y licencias para poner música en directo en tu local** | `/guias/sgae-y-licencias-para-musica-en-directo` | sgae música en directo bar / licencia música en vivo local | Informacional con angustia detrás | Guía legal en cristiano + fuentes oficiales | 2.000–2.400 | Brief | **La búsqueda del hostelero existe en forma de problema, no de servicio.** Volumen real, competencia cero |
| 11 | **Cuánto cobra un grupo por tocar en un bar** | `/guias/cuanto-cuesta-programar-musica-en-directo-en-un-bar` | cuánto cobra un grupo por tocar en un bar | Comercial | Rangos por formato y por día de la semana | 1.600–2.000 | Brief | **Vacío absoluto en el SERP.** Y es el tramo de precio que nadie ha publicado nunca |
| 12 | **Decibelios y hora de cierre: lo que puedes hacer sonar de verdad** | `/guias/limite-de-decibelios-y-horario-de-cierre` | límite de decibelios bar música en vivo | Informacional técnico-legal | Guía + tabla por tipo de licencia | 1.600–2.000 | Brief | Evita multas al lector: contenido que se guarda en marcadores y se enlaza |
| 13 | **Qué formato cabe en tu local sin vaciarte la barra** | `/guias/formatos-que-caben-en-un-bar` | qué grupo cabe en un bar / formatos música en directo local | Comercial | **Matriz** metros × techo × barra × formato | 1.400–1.800 | Brief | Criterio experto puro. Origen de la herramienta de la fase 5 |
| 14 | **Cómo programar un trimestre de directos sin arruinarte** | `/guias/programar-un-trimestre-de-directos` | programar conciertos en mi bar | Comercial B2B | Guía de calendario + costes + cartel | 1.800–2.200 | Brief | Convierte un cliente de un bolo en un cliente de doce |

### 3.4 Fase 3 · Empresa + dato propio (meses 6–9)

| # | Título literal | URL | Keyword objetivo | Intención | Formato | Ext. | Alimenta | Por qué aquí |
|---|---|---|---|---|---|---|---|---|
| 15 | **Artistas para eventos de empresa** | `/artistas-para-eventos-de-empresa` | artistas para eventos de empresa | Transaccional | **PILAR 3** | 2.200–2.800 | Brief (empresa) | Tercer territorio: mayor margen, recurrencia anual de RRHH |
| 16 | **Qué contratar para la cena de Navidad de la empresa** | `…/cena-de-navidad` | qué contratar cena de Navidad empresa | Comercial estacional | Guía de decisión por aforo y sala | 1.600–2.000 | Brief (empresa) | **Publicar en junio.** Necesita 5 meses de rodaje para llegar posicionada al pico de sept-nov |
| 17 | **Cuánto cuesta un artista para un evento de empresa** | `…/cuanto-cuesta` | cuánto cuesta artista evento empresa | Comercial | Rangos + facturación y retenciones | 1.800–2.200 | Brief (empresa) | Réplica del modelo de precio en el segmento de mayor margen |
| 18 | **Contratar un monologuista para eventos y cenas de empresa** | `/monologuistas-para-eventos` | contratar monologuista eventos de empresa | Transaccional | Landing de tipo | 1.400–1.800 | Brief (empresa) | SERP flojo, ticket 700–3.000 €, ciclo de decisión corto |
| 19 | **Contratar un mago para eventos: de cerca o de escena** | `/magos-para-eventos` | contratar mago para eventos | Transaccional | Landing de tipo | 1.400–1.800 | Brief | Amplía el dominio más allá de la música sin salirse del espectáculo adulto |
| 20 | **Observatorio Show Up: lo que cuesta de verdad la música en vivo en España** | `/observatorio-precios-musica-en-vivo` | precios música en vivo España + marca | Autoridad + PR | **Estudio propio** con metodología, tablas, CSV | 3.000–4.000 | Brief + prensa | **La pieza más importante de los 18 meses.** Nace ahora porque antes no hay muestra |

### 3.5 Fase 4 · Bodas y geografía (meses 9–12)

| # | Título literal | URL | Keyword objetivo | Intención | Formato | Ext. | Alimenta | Por qué aquí |
|---|---|---|---|---|---|---|---|---|
| 21 | **Música en directo para bodas** | `/musica-para-bodas` | música en directo para bodas | Transaccional | **PILAR 4** | 2.800–3.500 | Brief (boda) | Entra ahora, con dominio ya asentado. Publicarlo el mes 1 habría sido quemarlo |
| 22 | **Cuánto cuesta un grupo de música para una boda** | `/musica-para-bodas/cuanto-cuesta` | cuánto cuesta un grupo de música para una boda | **Comercial altísima** | Rangos + 2 presupuestos desglosados | 2.000–2.500 | Brief (boda) | El satélite de más volumen convertible del sitio. Cronoshare ocupa el SERP con una página genérica |
| 23 | **¿DJ o grupo en directo para tu boda?** | `…/dj-o-grupo-en-directo` | dj o grupo en directo para una boda | Comercial | Comparativa que recomienda en contra | 1.800–2.200 | Brief (boda) | Alto CTR y alta permanencia. **El mejor imán de enlaces naturales** porque no vende ninguno de los dos |
| 24 | **Orquestas para las fiestas de [provincia]** | `/orquestas-para-fiestas-patronales/[provincia]` | orquesta fiestas patronales [provincia] | Transaccional local B2G | Landing con pueblos, plazas y casos reales | 1.400–1.800 | Brief + teléfono | Primera geo, y en el territorio donde ya somos fuertes. **Geo municipal antes que geo de bodas** |
| 25 | **Bandas tributo: cuáles llenan una plaza y cuáles sólo funcionan en sala** | `/bandas-tributo` | banda tributo para eventos | Transaccional | Landing de tipo con criterio de aforo | 1.600–2.000 | Brief | Cruza fiestas + empresa + salas. Máximo reparto de enlace interno |
| 26 | **Música en directo para bares y salas en [ciudad]** | `/musica-en-directo-para-bares-y-salas/[ciudad]` | grupos para bares en [ciudad] | Transaccional local B2B | Landing local con locales reales | 1.200–1.600 | Brief + WhatsApp | Geo del territorio 2, con locales ya trabajados |

### 3.6 Fase 5 · Malla y volumen (meses 12–15)

| # | Título literal | URL | Keyword objetivo | Intención | Formato | Ext. | Alimenta | Por qué aquí |
|---|---|---|---|---|---|---|---|---|
| 27 | **Orquestas de verbena: cuántos pases, cuánta gente y cuánto cuesta** | `/orquestas-de-verbena` | orquesta de verbena contratar | Transaccional | Landing de tipo con la mecánica de los pases | 1.600–2.000 | Brief | Refuerza el pilar 1 con la entidad concreta. Contenido imposible de fingir |
| 28 | **Grupos de versiones: cuántos caben en tu noche** | `/grupos-de-versiones` | grupos de versiones para bodas y fiestas | Transaccional | Landing de tipo con matriz de formación | 1.600–2.000 | Brief | Cruza los cuatro pilares. Es la pieza que más enlaces internos reparte |
| 29 | **Las canciones que llenan la pista (y las que la vacían)** | `/guias/canciones-que-llenan-la-pista` | canciones que no pueden faltar en una fiesta | Informacional de volumen | **Lista con dato propio de observación** | 1.800–2.400 | Brief + redes | Volumen alto y conversión baja: por eso va tarde. Con dato propio deja de ser un listicle |
| 30 | **Las cinco cosas que salen mal en una noche (y cuál es culpa nuestra)** | `/guias/lo-que-sale-mal` | — (marca y enlaces) | Confianza + PR | **Postmortem público** | 1.500–2.000 | Brief | Transparencia radical. Nadie del sector lo publica. Es lo que hace que un periodista quiera hablar contigo |

### 3.7 Segunda hornada (31–40), ya definida y en cola

`/solistas-y-duos` · `/dj-para-bodas-y-eventos` · `/guias/comision-de-fiestas` · `/guias/justificar-el-gasto-de-las-fiestas` · `/guias/que-es-un-rider-tecnico` · `/guias/preguntas-antes-de-contratar` · `/guias/escaleta-de-una-noche` · `/guias/diccionario-de-la-noche` · `/precios` (hub sin keyword de precio) · `/artistas-para-eventos-de-empresa/[ciudad]`.

### 3.8 Lo que NO se publica el año 1, a propósito

| Tentación | Por qué no |
|---|---|
| Payasos, animación infantil, hinchables | Decisión de negocio. Y contamina la clasificación de entidad del dominio |
| `grupos musicales para bodas` como página propia | Head term de Bodas.net. Se cae por cola desde el pilar 4 |
| Cualquier landing de ciudad antes del mes 9 | Doorway pages. Tres bien hechas > cuarenta clonadas |
| Listicles de tendencias sin dato propio | Si no lo podemos escribir mejor que nadie, no hay pieza |
| El pilar de bodas en el mes 1 | Se indexa sin fuerza, no rankea, y no se puede volver a estrenar |

---

## 4. Contenido con activo defendible

> **Esta es la sección que más vale del documento.** Todo lo anterior lo puede ejecutar cualquier agencia. Esto sólo lo puede ejecutar quien tenga la agenda de músicos y haya estado en la plaza a las tres de la mañana.

### 4.1 Primero: la máquina de capturar el dato

Sin esto no hay nada. **La Ficha de Noche**: formulario interno de 15 campos, se rellena en el móvil el día siguiente al bolo. Cuatro minutos. **Obligatoria antes de tramitar el pago al artista** — así no se olvida nunca.

| Campo | Por qué está |
|---|---|
| Fecha, día de la semana, municipio y provincia | Segmentación geográfica y de temporada |
| Tipo de noche (verbena / local / empresa / boda / privado) y tipo de sitio | Segmentación por territorio |
| Aforo real, no contratado | El dato que nadie tiene |
| Formato y nº de músicos | Eje principal de precios |
| **Caché cerrado sin IVA** y qué incluía | El dato del observatorio |
| Nº de pases y duración de cada uno | **Exclusivo del mundo verbena.** Nadie lo ha publicado |
| Extras facturados (sonido, luces, escenario, dietas, km, horas extra) | Lo que nadie desglosa |
| Quién pagaba (ayuntamiento / comisión / peña / local / empresa / particular) | Permite el corte por pagador, que es el corte periodístico |
| **Hora a la que se llenó la pista o la plaza** | Dato exclusivo. Nadie lo mide |
| Hora de cierre real vs. contratada | Segundo dato exclusivo |
| Límite de decibelios: ¿había?, ¿cuál?, ¿saltó? | Alimenta el Mapa Acústico |
| Amperios disponibles y si dieron problemas | Alimenta fichas de sitio y guías de producción |
| Las 3 canciones con más gente en pista | Alimenta el Top de la Pista |
| Qué salió mal, en una línea y sin filtro | Postmortems y mejora operativa |
| 5 fotos + 1 vertical mínimo · **permiso de publicación** (sí / anonimizado / no) | Munición de contenido. **El permiso se pide al firmar, no después** |

> A 60–100 bolos al año entre verbenas y locales, en 12 meses hay muestra de sobra. **Con n≥60 y metodología escrita, un periodista cita el estudio.**

### 4.2 Activo 1 · **El Observatorio Show Up del Directo** — evaluación completa

#### ¿Es viable? **Sí, y con este alcance es más defendible que nunca.**

Cubrir desde **un dúo de bar un martes** hasta **una orquesta de doce en una plaza en agosto** convierte el estudio en la única radiografía completa de precios del directo en España. Los estudios que existen hoy son de industria musical (giras, salas, taquilla): **nadie mide el mercado de contratación privada y municipal**, que es donde trabaja casi todo el músico español.

#### La clave de la viabilidad: tiene DOS patas, no una

| Pata | Fuente | n potencial año 1 | Riesgo de confianza |
|---|---|---|---|
| **A · Dato propio** | Ficha de Noche | 60–100 | Gestionable (ver 4.3) |
| **B · Dato público** | **Contratos menores y adjudicaciones de fiestas publicados en portales de transparencia municipales y en la Plataforma de Contratación del Sector Público** | **Cientos, si se trabaja** | **Cero.** Es información pública por ley |

La pata B es la que convierte un estudio de una empresa pequeña en un estudio con autoridad estadística. Los ayuntamientos publican lo que pagan por sus orquestas: **está ahí, en abierto, y nadie lo ha agregado nunca.** Recopilar, normalizar y publicar eso, con la metodología a la vista, es un trabajo de semanas que produce un activo de años.

> **El titular de la pata B se escribe solo:** *"Lo que se paga de verdad por la orquesta de las fiestas, pueblo a pueblo."* Eso es un artículo en cada periódico provincial de España.

#### Cómo se construye sin traicionar la confianza de los artistas

Esto es lo que decide si el observatorio construye reputación o la quema. **Siete reglas, todas innegociables:**

1. **Nunca se publica un caché individual identificable.** Ni con el nombre, ni con datos que permitan deducirlo ("la orquesta que tocó en X el 15 de agosto").
2. **Umbral de agregación: mínimo 5 observaciones por celda.** Si un cruce (formato × zona × mes) tiene menos de 5 datos, esa celda no se publica. Se dice que no hay muestra suficiente.
3. **Mediana y percentiles 25/75, nunca la media.** Cuatro bolos caros deforman una media, y cualquiera que sepa leer lo sabe.
4. **Consentimiento explícito y por escrito**, en el propio contrato con el artista: *"los datos económicos de esta contratación podrán usarse de forma agregada y anónima en estudios de mercado publicados por Show Up"*. Con opción de decir que no sin consecuencias.
5. **El artista recibe el informe antes que la prensa.** Se le da valor a cambio del dato: le sirve para saber si está cobrando por debajo de mercado.
6. **El observatorio se publica en clave de defensa del artista, no de presión a la baja.** Se publica también **el suelo**: por debajo de qué cifra no se puede montar un formato sin que alguien pierda dinero. Esta decisión editorial es la que hace que los músicos lo compartan en vez de temerlo.
7. **Los datos de la pata B (públicos) se citan con enlace a la fuente original.** Siempre.

> Formulado así, **el observatorio no delata al gremio: le da la única herramienta de negociación que nunca ha tenido.** Ese es el encuadre y no se abandona nunca.

#### Especificación técnica

| Decisión | Especificación |
|---|---|
| URL | `/observatorio-precios-musica-en-vivo` permanente; ediciones antiguas en `/observatorio-precios-musica-en-vivo/2027` |
| Cadencia | **Edición completa en enero** (cuando se cierran las programaciones municipales y arranca la temporada) + **actualización corta en septiembre** (empresa y balance de verano) |
| Cortes | Por formato · por tipo de pagador · por aforo · por zona · por mes · por día de la semana · por nº de pases |
| Formato | HTML con **tablas nativas copiables** (no imágenes) + gráficos + **CSV descargable** + nota metodológica completa |
| Schema | `Article` + `Dataset` |
| Licencia | **CC BY con atribución y enlace.** Se pide literal: *"puedes usar estos datos citando a Show Up y enlazando a esta página"*. Es la línea que convierte una cita en un enlace |

#### Los cuatro titulares que el estudio tiene que poder dar

Se diseñan **antes** de recoger el dato, no después:

1. *"Una verbena de pueblo cuesta de mediana X €. Hace un año costaba Y."*
2. *"Tocar en sábado de agosto cuesta un Z % más que en viernes de junio: el mismo grupo, la misma hora."*
3. *"Un dúo de bar cobra X € por tres horas. Es menos de lo que cuesta la barra esa noche."*
4. *"El 40 % de los presupuestos del sector no incluye el equipo de sonido. Y no lo dice."*

El 4 es el que da prensa: es una denuncia con dato, hecha desde dentro.

#### Retorno esperado

| Vector | Estimación honesta año 1 | Comentario |
|---|---|---|
| **Enlaces** | **12–25 dominios referentes** en 8 semanas tras la publicación | Prensa provincial (varios), medios de sector, blogs de músicos, asociaciones, algún `.es` institucional. Es entre un tercio y la mitad de todo el perfil de enlaces del año |
| **Tráfico directo** | Bajo (300–800 visitas/mes) | El observatorio no es una página de tráfico: es una página de autoridad |
| **Tráfico indirecto** | **Alto.** Sube todo el dominio | El salto de autoridad se nota en las páginas de precio y en los pilares, en 6–10 semanas |
| **Citas de IA (ChatGPT, Perplexity, AI Overviews)** | **Alto y creciente. Aquí está el retorno menos obvio y más grande** | Ver abajo |
| **Ventas directas** | Bajo directamente, alto como argumento comercial | Se usa en cada llamada: *"esto es lo que se paga; su presupuesto está aquí"* |

#### Por qué el observatorio es, sobre todo, una máquina de citas de IA

Los buscadores generativos necesitan **cifras concretas, atribuibles y estructuradas** para responder "cuánto cuesta una orquesta para las fiestas". Hoy, ante esa pregunta, no hay ninguna fuente española con dato. Quien la publique primero se convierte en **la respuesta por defecto** durante años. Cómo se optimiza para eso:

- **Frases autocontenidas y citables**: *"La mediana del caché de una orquesta de 10 músicos para una noche de verbena en 2027 fue de X €, según el Observatorio Show Up."* Una frase que se puede copiar sin contexto y sigue siendo correcta.
- **Bloque "Datos clave" al principio**, con 6–8 cifras en lista. Es lo que se extrae.
- **Tablas HTML reales**, con encabezados semánticos. Nada de datos dentro de imágenes.
- **Metodología, n y fecha visibles**: es lo que hace que un modelo se fíe y atribuya.
- **Nomenclatura consistente de la entidad**: siempre "Observatorio Show Up del Directo", nunca variantes.
- **CSV y `Dataset` schema**: facilita la indexación estructurada.

### 4.3 Activo 2 · **La Matriz de la Noche** — criterio experto convertido en herramienta

*Para qué noche sirve cada formato.* Es el corazón intelectual de la empresa, publicado en abierto.

Ejes: **aforo × espacio (plaza / bar / carpa / salón / exterior) × momento × edad media del público × hora de cierre.**
Salida: formato recomendado, formato que se queda corto, formato que se pasa, **y por qué**.

| Fase | Entrega |
|---|---|
| A (mes 5) | Tablas estáticas dentro de `/guias/formatos-que-caben-en-un-bar` y del pilar 1 |
| B (mes 13) | **Herramienta interactiva** `/que-encaja-en-tu-noche`: 5 preguntas → veredicto + rango de precio + **descarte razonado**. Termina en el brief precargado |

Las webs de ayuntamientos, salas y wedding planners enlazan **herramientas**, no artículos.

### 4.4 Activo 3 · **El Mapa Acústico y Eléctrico** — el dato que no tiene nadie

Registro propio, sitio a sitio: **límite de decibelios real, hora de corte municipal, si hay limitador, amperios disponibles, y qué formato aguanta eso sin sonar apagado.**

No existe en internet. Está en la cabeza de los técnicos de sonido y en ordenanzas que nadie lee. Publicarlo ordenado:

- Le evita una multa y un disgusto al cliente.
- Le quita conversaciones incómodas al local o al ayuntamiento: **por eso lo enlazan**.
- Es imposible de copiar sin haber estado.

**Regla editorial:** nunca se publica un sitio en clave negativa. El dato se da en positivo — *"aquí funciona el trío"*, no *"aquí no se puede tocar"*.

### 4.5 Activo 4 · **El Reloj de la Plaza**

De la Ficha de Noche sale un dato exclusivo: **a qué hora se llena la plaza o la pista según formato, tipo de noche y hora de cena.**

- Titular: *"La plaza no se llena cuando empieza la orquesta. Se llena 25 minutos después del primer pase."*
- Uso comercial: argumenta la escaleta al cliente que quiere que se empiece a las once.
- Uso SEO: alimenta el pilar 1, `/orquestas-de-verbena` y `/guias/escaleta-de-una-noche`.
- Uso PR: dato con gancho blando, perfecto para radio y prensa de estilo de vida.

### 4.6 Activo 5 · **El Archivo de Escaletas Reales**

Veinte escaletas reales anonimizadas, hora a hora: *18:30 llega el camión · 20:00 prueba de sonido · 23:45 primer pase · 01:10 descanso y DJ · 01:40 segundo pase…*

Nadie publica esto porque nadie lo tiene por escrito. Show Up sí: **La Escaleta ya es una de las 12 piezas del stack de valor.** Publicar veinte es convertir un entregable interno en contenido con coste marginal cero. Página + PDF descargable (captación de email) + una escaleta destacada en cada pilar.

### 4.7 Activo 6 · **Los postmortems** — transparencia radical

Serie `Lo que salió mal`, dos o tres al año. Formato fijo:

> **Qué pasó** → **De quién fue la culpa** (con nombre cuando es nuestra) → **Qué le costó al cliente** → **Qué hemos cambiado**

Regla dura: **nunca se nombra al artista ni al cliente.** El único que sale mal parado en un postmortem de Show Up es Show Up. Ese es todo el efecto: en un sector donde todos dicen que todo salió perfecto, el que cuenta un fallo con datos es automáticamente el más creíble.

### 4.8 Activo 7 · **El Diccionario de la Noche**

Glosario en cristiano: caché, pase, rider, backline, pica, escaleta, limitador, camión-escenario, ficha técnica, tarifa SGAE, contrato menor, dietas, kilometraje, charanga, txaranga, fanfarria. Cada término con definición corta, **qué significa para tu bolsillo** y enlace a la guía larga.

Una sola página con anclas (`/guias/diccionario-de-la-noche#pase`), nunca 30 páginas finas. Es la pieza que le enseña a Google que este dominio maneja el vocabulario completo de la entidad.

### 4.9 Activo 8 · **El Barómetro de Temporada** *(trimestral, 400 palabras)*

Dato de demanda propia: **qué fechas se están llenando y con cuánta antelación se cierra.**

> *"A 15 de febrero, el 70 % de los fines de semana de agosto ya tienen orquesta cerrada."*

Tres beneficios por 400 palabras: escasez honesta (no inventada), contenido recurrente sin esfuerzo y **la razón perfecta para escribir a la lista** cuatro veces al año.

### 4.10 Resumen: qué activo alimenta qué

| Activo | Origen | Cadencia | SEO | PR | Citas IA | Venta |
|---|---|---|---|---|---|---|
| Observatorio | Ficha de Noche + contratos públicos | Anual + update | ★★★ | ★★★ | ★★★ | ★★ |
| Matriz de la Noche | Criterio del equipo | Estático + herramienta | ★★★ | ★★ | ★★ | ★★★ |
| Mapa Acústico y Eléctrico | Ficha de Noche + visitas | Continuo | ★★★ | ★ | ★★ | ★★ |
| Reloj de la Plaza | Ficha de Noche | Anual | ★★ | ★★★ | ★★ | ★★★ |
| Archivo de Escaletas | Operativa interna | Continuo | ★★ | ★ | ★ | ★★★ |
| Postmortems | Ficha de Noche | 2–3/año | ★ | ★★★ | ★ | ★★ |
| Diccionario | Conocimiento del equipo | Estático | ★★ | — | ★★★ | ★ |
| Barómetro | CRM propio | Trimestral | ★ | ★★ | ★ | ★★★ |

---

## 5. Linkbuilding realista y limpio

### 5.1 Las cinco reglas

1. **Cero packs, cero PBN, cero notas de prensa replicadas en 40 portales.** Diez enlaces reales valen más que quinientos comprados, y no te pueden penalizar.
2. **El enlace se gana con un activo o con una relación comercial que ya existe.** No se pide de gratis a desconocidos.
3. **Anchor variado y natural:** marca, URL desnuda y frases (*"según el observatorio de Show Up"*). **Nunca** `contratar orquesta fiestas patronales` repetido como anchor externo: es la firma de un perfil comprado.
4. **Nunca en footer ni sidebar sitewide.** Enlace editorial dentro de contenido, o no hay enlace.
5. **Ritmo:** 2–4 dominios referentes nuevos al mes. 35–45 el año 1.

### 5.2 Las 20 oportunidades, con su ángulo

| # | Objetivo | Tipo | El ángulo (qué se ofrece, no qué se pide) | Dificultad | Mes |
|---|---|---|---|---|---|
| 1 | **Web de cada artista de la agenda** | Relación existente | *"Te montamos la sección 'Contrátanos' con tu rider, tus formaciones y tu ficha técnica."* Enlace editorial en su página de contratación, anchor variado, **nunca footer** | Muy baja | 1–4 |
| 2 | **Ayuntamientos donde se ha programado** | Institucional `.es` | El programa de fiestas publicado en la web municipal suele citar y enlazar a quien produce. **Se pide al firmar el contrato, no después.** De los enlaces más valiosos que existen en España | Baja–media | 2–12 |
| 3 | **Comisiones de fiestas y peñas** | Comunidad | Se les cede en abierto `/guias/programa-de-fiestas-de-un-pueblo` y `/guias/que-necesita-una-verbena`, con permiso de republicación citando origen. Las comisiones se copian entre pueblos | Baja | 3–12 |
| 4 | **Prensa provincial (Heraldo, Diario de Navarra, La Nueva España, Diari de Girona…)** | Digital PR | **Observatorio, corte provincial:** *"Lo que paga cada pueblo de la provincia por su orquesta."* Dato local + fuente identificable = artículo casi escrito | Media | 9–13 |
| 5 | **Agencias y medios nacionales (Europa Press, 20minutos, El Español)** | Digital PR | Observatorio, corte nacional, con el titular del 40 % de presupuestos sin sonido incluido. Denuncia con dato, desde dentro | Alta | 10–14 |
| 6 | **Bares, pubs y salas con los que se programa** | Relación existente | Ficha técnica del local (metros, techo, amperios, dB, qué formato entra) redactada para su web + agenda cruzada de conciertos | Baja | 4–12 |
| 7 | **Asociaciones de salas de música en directo y de hostelería** | Sector | La guía de SGAE, licencias y decibelios cedida como recurso para sus asociados. Es su servicio, con nuestra firma | Media | 6–14 |
| 8 | **Radios locales y autonómicas** | Entrevista | El Reloj de la Plaza. *"A qué hora se llena de verdad la plaza"* son cinco minutos de radio perfectos, y la web del programa enlaza | Media | 8–15 |
| 9 | **Federaciones y asociaciones de charangas y bandas** | Gremio | El observatorio en clave de defensa del músico: por debajo de qué caché no se puede montar una formación de viento. Les sirve para negociar | Media | 8–16 |
| 10 | **Escuelas de música y conservatorios** | Institucional `.edu`/`.org` | Charla + material: **cómo se gana dinero tocando en directo** — cachés reales, facturas, altas, dietas. Es lo que nadie les enseña. Suelen publicar la charla con enlace | Media | 9–16 |
| 11 | **Medios de sector MICE y eventos corporativos** | Contenido invitado | *"Por qué la cena de empresa se vacía a las once"*, con dato propio. Público exacto del territorio 3 | Media | 7–13 |
| 12 | **Portales y blogs de hostelería** | Contenido invitado | *"Cuánto cuesta de verdad programar directos en tu bar y cuándo sale a cuenta"*, con números | Media | 6–12 |
| 13 | **Blogs y medios de música independiente / gremio de músicos** | Sector | El observatorio, otra vez en clave de gremio. Y los postmortems, que se leen como oficio | Media | 10–16 |
| 14 | **Wedding planners de la zona** | Colaboración | El Archivo de Escaletas y el PDF de preguntas, coeditados. Entra cuando bodas entra (fase 4) | Media | 10–16 |
| 15 | **Fincas, masías y hoteles con salón** | Colaboración | Ficha acústica y eléctrica del sitio, redactada para su web de proveedores. Les resuelve una conversación recurrente | Media | 9–16 |
| 16 | **Empresas de sonido e iluminación** | Proveedor cruzado | Página de "con quién trabajamos", máximo 6, **sólo con los que se ha trabajado de verdad**. Vale por relación y por tráfico | Baja | 5–12 |
| 17 | **Podcasts de eventos, hostelería y música** | Entrevista | El postmortem: *"las cinco cosas que salen mal"*. Un invitado que cuenta fallos propios es un episodio que se escucha entero | Media | 8–16 |
| 18 | **Newsletters de sector (hostelería, RRHH, fiestas)** | Mención | Barómetro de temporada cedido con 48 h de exclusiva a cambio de crédito con enlace | Media | 9–16 |
| 19 | **Universidades y FP de gestión cultural y eventos** | Recurso docente | Se cede el Archivo de Escaletas y la Matriz como material de aula. Los apuntes online enlazan la fuente | Alta | 12–18 |
| 20 | **Directorios legítimos y perfiles de marca** | Base | GBP, Bing Places, LinkedIn, Cámara de Comercio, directorios serios. **NAP idéntico.** No dan autoridad: dan consistencia de entidad. Es higiene | Muy baja | 1 |

### 5.3 La secuencia de digital PR del observatorio (meses 9–11)

| Semana | Acción |
|---|---|
| −4 | Cierre de datos propios + volcado de contratos públicos. Nota metodológica escrita |
| −2 | Página publicada en `noindex` para revisión. Gráficos, CSV y bloque "Datos clave" listos |
| −1 | **Preaviso con exclusiva de 48 h a 3 medios** por corte distinto (nacional / provincial / sector). No se manda a 200 |
| 0 | Publicación + `index`. Email a la lista. Post en LinkedIn **del autor**, no de la marca |
| +1 | Envío personalizado a 25 periodistas, **cada uno con su corte** y con el dato ya en el asunto |
| +2 | Segunda ola: prensa provincial, provincia por provincia, con su tabla |
| +4 | **Recogida:** quién ha citado sin enlazar → email cordial pidiendo el enlace. Este paso recupera más enlaces que la campaña original |

### 5.4 Lo que no se hace nunca

Comprar en packs · intercambiar masivamente · PBN · nota de prensa genérica replicada en portales de pago · comentarios en foros con enlace (en foros se participa **sin enlace y con nombre real**, o no se participa) · pedir enlace a cambio de nada a quien no nos conoce.

---

## 6. Calendario editorial a 12 meses

### 6.1 El reloj del sector

Regla que gobierna el calendario: **se publica cinco meses antes de que se busque.** Una página necesita 4–6 meses para posicionar en dominio nuevo.

| Qué se busca | Cuándo se busca | Cuándo se publica |
|---|---|---|
| **Fiestas patronales de verano** (el pico del negocio) | **Enero a marzo** — cuando la comisión y el ayuntamiento cierran el cartel | **Septiembre a noviembre** |
| Fiestas de invierno y patronales de otoño | Junio–septiembre | Febrero–abril |
| **Programación de bares y salas** | **Todo el año**, con picos en enero y en septiembre | Siempre. Es el territorio menos estacional |
| Terrazas y ciclos de verano en locales | Marzo–mayo | Noviembre–enero |
| Cena de Navidad de empresa | **Septiembre y octubre** | **Junio** |
| Convenciones y kick-off | Noviembre–enero | Julio–agosto |
| Música de boda (temporada mayo–septiembre) | Octubre a febrero | Mayo–septiembre |
| Precio (todo el año, pico en enero) | Enero y septiembre | Siempre. Única categoría atemporal |

> **La consecuencia más importante de esta tabla:** el pilar 1 y sus satélites tienen que estar publicados **antes de noviembre** para llegar posicionados a la ventana de decisión municipal de enero–marzo. Es la razón por la que el territorio municipal va primero y no segundo.

### 6.2 Calendario mes a mes

> Ritmo sostenible: **2–3 piezas al mes.** Veinte piezas que resuelven una duda de compra baten a doscientas de relleno. Mes 1 = lanzamiento del sitio, planificado para **septiembre**.

| Mes | Contenidos (nº sección 3) | Dato / activo | Linkbuilding | Estacionalidad que se persigue |
|---|---|---|---|---|
| **1 · sep** | #1 `/nosotros` · #2 `/metodologia` · #3 **PILAR 1** | Ficha de Noche operativa desde el día 1 | #20 directorios + GBP · #1 webs de artistas | Se planta el territorio municipal antes de la ventana de enero |
| **2 · oct** | #4 cómo contrata un ayuntamiento · #5 cuánto cuesta orquesta | Primeros 10 registros. Arranca el volcado de contratos públicos | #2 primer ayuntamiento · #1 resto de artistas | **Todo el cluster municipal indexado antes de noviembre** |
| **3 · nov** | #6 charangas y txarangas · #7 programa de fiestas | Fotos propias de 3 bolos | #3 comisiones de fiestas | Las comisiones empiezan a mirar |
| **4 · dic** | #8 qué necesita una verbena · #9 **PILAR 2** | Mapa Acústico v0 | #6 primeros locales | Entra la ventana de decisión municipal. Segundo territorio en marcha |
| **5 · ene** | #10 SGAE y licencias · #11 cuánto cobra un grupo en un bar | Matriz de la Noche (tablas) | #6 más locales · #7 asociaciones de salas | **Pico de decisión de fiestas. Y pico de "precio" del año** |
| **6 · feb** | #12 decibelios y horarios · #13 formatos que caben en un bar | Primer corte interno de precios | #16 sonido e iluminación | Programación de terrazas de verano se decide ahora |
| **7 · mar** | #14 programar un trimestre · #15 **PILAR 3** | Reloj de la Plaza v0 | #12 portales de hostelería | Cierre del ciclo municipal. Arranca empresa |
| **8 · abr** | #18 monologuistas · #19 magos | Archivo de Escaletas (10 primeras) | #11 medios MICE · #17 podcasts | — |
| **9 · may** | #17 cuánto cuesta empresa · #24 primera provincia | **Cierre de datos del Observatorio** | Preaviso a medios (5.3, semana −1) | La provincia entra con las fiestas del verano ya contratadas: prueba real |
| **10 · jun** | #16 **cena de Navidad** · #20 **OBSERVATORIO** | Publicación + CSV + gráficos + Dataset | **#4 y #5 digital PR — la campaña del año** | Navidad se publica hoy para septiembre |
| **11 · jul** | #21 **PILAR 4** bodas · #25 bandas tributo | Barómetro Q3 | #8 radios · #9 federaciones · #18 newsletters | Bodas entra con dominio ya asentado |
| **12 · ago** | #22 cuánto cuesta boda · #23 DJ o directo | Postmortem del año | Recogida de citas sin enlace (5.3, +4) | Temporada alta: máximo material fotográfico del año |
| **13–15** | #26 ciudad de locales · #27 orquestas de verbena · #28 grupos de versiones · #29 canciones · #30 lo que sale mal | Herramienta `/que-encaja-en-tu-noche` | #10 escuelas · #13 gremio · #19 universidades · #14/#15 bodas | Segunda vuelta completa del ciclo municipal, ya posicionados |

### 6.3 Lo que se hace cada mes, pase lo que pase

| Rutina | Tiempo | Cuándo |
|---|---|---|
| Ficha de Noche de cada bolo | 4 min/bolo | Día siguiente |
| Volcado de 20 contratos públicos de fiestas | 45 min | Primer lunes |
| Search Console: consultas con impresiones y sin clics → arreglar `title` | 30 min | Primer lunes |
| Actualizar rangos de precio si han cambiado | 20 min | Primer lunes |
| 4 fotos nuevas a Google Business Profile | 10 min | Cualquier día |
| Pedir reseña a los clientes del mes anterior | 15 min | Primer lunes |
| Un enlace nuevo gestionado a mano | 1–2 h | Continuo |

---

## 7. Reutilización: una noche, nueve piezas

### 7.1 El principio

**No se produce contenido. Se destila.** El origen nunca es "tengo que escribir un post": el origen es **una noche real** o **un dato acumulado**.

```
UNA NOCHE REAL
   │
   ├─ Ficha de Noche (dato) ────► Observatorio · Reloj de la Plaza · Mapa Acústico
   ├─ 5 fotos ─────────────────► Landing local · Ficha de artista · GBP · Instagram
   ├─ 1 vídeo vertical ────────► Reel/TikTok · Ficha de artista · Hero de la landing
   ├─ 1 escaleta ──────────────► Archivo de Escaletas · PDF descargable
   ├─ 1 anécdota ──────────────► El párrafo "el detalle" de una guía · LinkedIn
   └─ 1 cosa que salió mal ────► Postmortem · Mejora del proceso · Email a la lista
```

### 7.2 Tabla de derivación

| Activo raíz | SEO | Redes | Email | Web / venta | Coste marginal |
|---|---|---|---|---|---|
| **Observatorio** | Página-estudio + tablas citables | Carrusel de 6 datos + reel del titular | Envío exclusivo con 48 h de adelanto | Argumento de precio en cada llamada | Bajo: el dato ya está |
| **Matriz de la Noche** | 2 guías + herramienta | Carrusel "qué cabe en tu sitio" | Serie de 3 emails de decisión | Guion del brief y del argumentario | Muy bajo |
| **Ficha de artista** | URL indexable + `VideoObject` | Reel de directo | Email de propuesta con "para qué noche sirve" | La terna del brief | Cero: ya se escribe para vender |
| **Foto de una noche** | Imagen de landing con `alt` real | Post + story | Cabecera de newsletter | Prueba en la propuesta | Cero |
| **Escaleta** | Guía + PDF | Carrusel de horarios | Lead magnet | Entregable al cliente | Cero: ya se hace |
| **Postmortem** | Guía de confianza | Post de LinkedIn del autor | Email "esto la liamos nosotros" | Argumento de objeción | Bajo |
| **Barómetro** | Actualización trimestral | Story con dato de ocupación | **El mejor email del trimestre** | Escasez honesta al cerrar | Muy bajo |
| **Contrato público volcado** | Fila del observatorio | Dato suelto por provincia | — | Inteligencia comercial: **qué pueblo paga qué y a quién** | Muy bajo |

> La última fila es la que más margen esconde: el volcado de contratos municipales no es sólo contenido. **Es una lista de clientes con presupuesto conocido y fecha de renovación anual.**

### 7.3 Las cuatro reglas antiduplicado

1. **El texto largo vive en una sola URL.** En LinkedIn y en la newsletter va **el argumento**, no el artículo: 3 párrafos nuevos + enlace. Nunca copiar-pegar.
2. **Si un medio republica una guía, se pide `canonical` a nuestra URL**; si no puede, versión reescrita con enlace. Nunca el mismo texto en dos dominios sin canonical.
3. **La newsletter no se publica como página web** salvo que valga por sí misma (el Barómetro sí; el "qué hemos hecho este mes", no).
4. **Una idea = una URL.** Si una pieza nueva ataca lo mismo que una vieja, se **amplía la vieja** y se actualiza `dateModified`.

### 7.4 El flujo semanal, en cuatro horas

| Bloque | Tiempo | Qué se hace |
|---|---|---|
| Lunes | 1 h | Search Console + actualizar una página existente + fotos a GBP + volcado de contratos |
| Martes–miércoles | 2 h | Escribir o avanzar la pieza del mes |
| Jueves | 30 min | Destilar la pieza en 1 post + 1 carrusel programados |
| Viernes | 30 min | Un contacto de linkbuilding, hecho a mano |

Cuatro horas semanales sostenidas 18 meses baten a 40 horas en un mes y luego nada. **Consistencia no es frecuencia: es calidad sostenida.**

---

## 8. KPIs y expectativas, mes a mes

### 8.1 El único KPI que manda

**Briefs y llamadas entradas desde orgánico.** Todo lo demás es diagnóstico.

`posiciones` → `impresiones` → `clics` → `contactos orgánicos` → **`contactos orgánicos cualificados (con fecha y presupuesto)`** → `eventos cerrados`

> **Aviso de medición sin el cual todo este plan parece peor de lo que es:** el lead del territorio municipal **no rellena formularios: llama por teléfono**. Sin número trackeado o sin la pregunta *"¿cómo nos has encontrado?"* registrada en el CRM, el cluster que antes va a dar dinero es invisible en Analytics. Esto se monta el mes 1, no el mes 8.

### 8.2 Proyección honesta a 18 meses

Supuestos: 2–3 piezas nuevas al mes, 2–4 dominios referentes nuevos al mes, ejecución correcta, **sin cambios de estructura**, lanzamiento en septiembre. Órdenes de magnitud, no promesas.

| Mes | URLs indexadas | Impresiones/mes | Clics/mes | KW top 10 | Dominios ref. | **Contactos orgánicos** | Qué está pasando de verdad |
|---|---|---|---|---|---|---|---|
| 1 · sep | 6–8 | 0–100 | 0–5 | 0 | 1–3 | **0** | Google descubre el dominio. Nada más |
| 2 · oct | 10 | 100–400 | 5–20 | 0–1 | 4 | **0** | Sandbox de facto. Es normal. No tocar nada |
| 3 · nov | 13 | 400–900 | 20–50 | 1–2 | 6 | **0–1** | `como-contrata-un-ayuntamiento` empieza a asomar. SERP vacío = entrada rápida |
| 4 · dic | 16 | 900–1.800 | 50–100 | 3–5 | 8 | **1–2** | Charangas y programa de fiestas cogen impresiones. Empieza a llamar gente |
| 5 · ene | 18 | 1.800–3.000 | 100–180 | 6–9 | 10 | **2–3** ⭐ | **Primer lead orgánico de verdad. Ver 8.3** |
| 6 · feb | 21 | 2.800–4.500 | 170–280 | 10–14 | 12 | **3–4** | Ventana municipal en marcha. Cluster 1 convirtiendo |
| 7 · mar | 23 | 4.000–6.000 | 250–400 | 14–20 | 15 | **4–5** | Entra el cluster de bares: consultas de hostelero, ciclo corto |
| 8 · abr | 25 | 5.500–8.000 | 350–550 | 20–28 | 18 | **5–6** | Territorio 2 empieza a repetir: el mismo local vuelve |
| 9 · may | 27 | 7.500–11.000 | 500–750 | 28–38 | 22 | **7** | Provincia rankeando. Tráfico local convierte 3× mejor |
| 10 · jun | 29 | 10.000–14.000 | 700–1.000 | 36–48 | **28** | **8–9** | **Observatorio publicado.** El salto de enlaces se nota en 6–10 semanas, no antes |
| 11 · jul | 31 | 13.000–18.000 | 900–1.300 | 45–60 | 33 | **10–11** | Efecto PR entrando: sube todo el dominio, no sólo la página enlazada |
| 12 · ago | 33 | 16.000–22.000 | 1.100–1.600 | 55–72 | 37 | **12–14** | Primer mes de doble dígito estable. Temporada alta de verbenas |
| 13 | 35 | 20.000 | 1.500 | 68 | 41 | **16** | Segundo ciclo municipal, ya posicionados desde el primer día |
| 14 | 37 | 24.000 | 1.800 | 80 | 45 | **19** | — |
| 15 | 38 | 28.000 | 2.200 | 92 | 48 | **22** | La herramienta empieza a captar enlaces sola |
| 16 | 40 | 32.000 | 2.500 | 105 | 52 | **25** | Bodas empieza a aportar de verdad |
| 17 | 41 | 37.000 | 2.900 | 118 | 56 | **28** | Segunda edición del observatorio: el efecto se compone |
| 18 | 42 | 42.000–48.000 | 3.300–4.000 | 130–150 | 60 | **32–38** | Canal orgánico consolidado como primera fuente de contacto |

### 8.3 Cuándo llega el primer lead orgánico de verdad: **mes 5**

Un mes antes de lo que sería razonable en este sector, **y sólo porque se empieza por el territorio vacío**. Si se hubiera empezado por bodas, la respuesta honesta sería el mes 8 o 9.

**El primer lead real va a llegar por uno de estos tres sitios, en este orden de probabilidad:**

1. **`/orquestas-para-fiestas-patronales/como-contrata-un-ayuntamiento`** — un concejal o un técnico municipal en plena ventana de enero. **Llamará por teléfono, no rellenará el formulario.**
2. **`/orquestas-para-fiestas-patronales/cuanto-cuesta`** — una comisión de fiestas haciendo números.
3. **`/guias/cuanto-cuesta-programar-musica-en-directo-en-un-bar`** — un hostelero, ciclo de decisión de días, ticket bajo, pero **repite**.

**No va a llegar por la home, ni por el pilar de bodas.** El pilar de bodas ni siquiera estará publicado. Contar con él antes es el error que hunde proyectos en el mes 4.

### 8.4 Semáforos: cuándo preocuparse y cuándo no

| Momento | Señal | Lectura |
|---|---|---|
| Mes 2 | 0 clics | 🟢 Normal. No tocar nada |
| Mes 3 | Páginas sin indexar tras 3 semanas | 🟠 Enlaces internos y sitemap. Es descubrimiento, no contenido |
| Mes 4 | <800 impresiones | 🟠 Revisar que los `title` lleven la keyword exacta y que no haya canibalización |
| Mes 5 | El cluster municipal no coge impresiones | 🔴 **La señal más grave posible.** Si el territorio vacío no entra, algo falla en indexación o en intención. Diagnóstico completo |
| Mes 5 | Impresiones bien, clics mal | 🟠 Problema de `title`/meta. Se arregla en una tarde |
| Mes 8 | Tráfico sube, contactos no | 🔴 El problema está en la landing o en el tipo de tráfico, **no en el SEO**. Y comprobar que las llamadas se están contando |
| Mes 9 | <5.000 impresiones | 🔴 Replantear: probablemente se ha atacado demasiada head term y poca cola |
| Cualquiera | Caída brusca >40 % | 🔴 Comprobar, por este orden: acciones manuales, `noindex` accidental en un despliegue, core update |

### 8.5 Lo que hay que resistirse a hacer

| Mes | La tentación | Por qué es un error |
|---|---|---|
| 3 | "Publicamos ya el pilar de bodas, que es donde está el mercado" | Se indexa sin fuerza, no rankea y no se puede volver a estrenar. Bodas se gana con autoridad previa, no con ganas |
| 4 | "Esto no funciona, cambiamos la estructura" | Es plano hasta el mes 4–6 y luego acelera. Rehacerlo ahí es rehacerlo justo antes del punto de inflexión |
| 5 | "Publicamos 40 landings de provincia de golpe" | Doorway pages. Con dominio nuevo dispara el filtro y arrastra al dominio entero |
| 6 | "Compramos 200 enlaces para acelerar" | La única acción de esta lista que puede destruir el proyecto, no sólo retrasarlo |
| 7 | "Metemos animación infantil, que se pide mucho" | Contamina la entidad del dominio y rompe el posicionamiento entero. Está excluido por decisión de negocio |
| 8 | "Metemos IA a producir 3 artículos por semana" | Doscientas piezas de relleno no baten a veinte que resuelven una duda de compra, y diluyen la señal topical construida |
| 12 | "Ya rankeamos, bajamos el ritmo" | El mes 12 es cuando el compuesto empieza a pagar. Parar ahí es tirar los doce anteriores |

### 8.6 El cuadro de mando, en una pantalla

**Semanal (5 min):** contactos orgánicos de la semana (formulario **y teléfono**) · errores nuevos en Search Console.
**Mensual (30 min):** impresiones · clics · contactos orgánicos · dominios referentes nuevos · 3 consultas con muchas impresiones y pocos clics → arreglar `title`.
**Trimestral (2 h):** canibalización · qué página actualizar (la que más impresiones tiene sin estar en top 5) · qué activo de datos toca publicar.
**Anual:** observatorio, revisión de todos los rangos de precio, y la pregunta que lo resume todo:

> **¿Hay algo publicado este año que ningún competidor pueda copiar?**
>
> Si la respuesta es no, el año siguiente no va a crecer.
