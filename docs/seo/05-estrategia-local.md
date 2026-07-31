# Show Up — Estrategia SEO local y geográfica

> Documento operativo. Sustituye y amplía la sección 2.3 de `04-arquitectura-seo.md`.
> Empresa nueva, dominio sin autoridad, sin local abierto al público.
> **Activo real: una agenda enorme de música en vivo** — txarangas, charangas, orquestas de verbena, grupos de versiones, músicos de todo tipo — más magos, monologuistas, humoristas y DJs. **No hay animación infantil ni payasos, y no se va a fingir que la hay.**
> Datos de nupcialidad: **INE, Estadística de Matrimonios 2024, por provincia de residencia** (tabla 37641, extraída vía API el 31/07/2026). No son estimaciones.

---

## 0. Las trece decisiones, para quien no lea el resto

1. **La geografía la marca el roster, no el tamaño del mercado.** Si la agenda pesa en txarangas y orquestas de verbena, el primer territorio no es Madrid: es el cinturón charanguero. Atacar el mercado más grande sin producto para servirlo es la forma más cara de no vender nada.
2. **No hay un eje geográfico. Hay cuatro, y los fija el segmento**, no la web: municipio→ninguno, territorio (CCAA) para fiestas, comarca para bodas, ciudad para empresa, ningún eje para bares.
3. **Regla de la URL geográfica única.** Para un mismo territorio y un mismo segmento existe **una sola URL**. El tipo de artista (charanga, orquesta, tributo, DJ) se resuelve con H2 dentro de esa página, **nunca** con URLs adicionales. Esto es lo que impide la explosión combinatoria que mata estos proyectos.
4. **Fiestas patronales: el municipio NO es una URL. Es una fila de tabla.** España tiene 8.131 municipios y ~16.900 fiestas populares registradas. Una página por municipio es una granja, sin discusión posible. El hiperlocal de las fiestas es un **activo de base de datos y de outbound**, no una arquitectura de URLs.
5. **La frontera anti-doorway, en una frase:** *se crea una página por territorio donde cambie **la palabra**, **el producto** o **el procedimiento de compra**. Si no cambia ninguna de las tres, no hay dos páginas: hay una.* En fiestas patronales eso son **14 territorios en toda España**. Ni 52 provincias ni 8.131 municipios.
6. **Fiestas patronales da resultados antes que bodas, y por goleada.** El SERP está ocupado por directorios provinciales huecos —charangas.info lista **4 charangas** para toda Navarra— mientras Bodas.net es inexpugnable. Fiestas es el mes 4; bodas es el mes 10.
7. **Bares, pubs y salas NO son un canal SEO de captación. Confirmado con datos, no por intuición.** El hostelero no busca "contratar grupo para mi bar": busca licencia de SGAE, insonorización y horarios. Hay **una sola jugada SEO legítima** ahí (§8) y no lleva topónimo.
8. **Google Business Profile: una sola ficha, tipo área de servicio, categoría `Agencia de espectáculos`.** Gratis y obligatoria, pero **no es el canal**: en este vertical el pack local casi no se dispara. Rinde en marca, Maps y reseñas.
9. **Techo del sitio a 3 años: ~37 URLs geográficas**, repartidas 14 fiestas / 15 bodas / 8 empresa. No "30 ciudades".
10. **El suelo de contenido único sube del 60 % al 75 %**, y el 100 % de las primeras 400 palabras es único. El 60 % del plan anterior es demasiado permisivo para un dominio de cero autoridad.
11. **La regla "sin evento real no hay página" es correcta pero bloqueante y se sustituye** por un sistema de tres niveles con puerta de entrada explícita (§12).
12. **Las citations españolas valen poco.** Se hacen 12 y se cierra el tema. El link building local real son ayuntamientos, comisiones de fiestas, fincas y prensa comarcal.
13. **El KPI geográfico es `briefs por página geográfica / año`.** Una página que no ha traído un brief en 9 meses se reescribe o se redirige. No se acumula chatarra.

---

## 1. El punto de partida corregido: cinco segmentos, cuatro geografías

El error del plan anterior fue tratar esto como un negocio de bodas con extras. No lo es. **Es un negocio de música en vivo con cinco mercados, y dos de ellos son mucho más geográficos que las bodas.**

| Segmento | Quién compra | Qué contrata | Ticket | Eje geográfico natural | ¿Canal SEO? |
|---|---|---|---|---|---|
| **A · Ayuntamientos y comisiones de fiestas** | Concejal de festejos, comisión de fiestas, peñas, quintos | Programa entero: txaranga/charanga de día + orquesta de noche + tributo | 500 €–45.000 € por noche; programa completo 10.000–120.000 € | **Territorio (CCAA)** | **Sí. El mejor.** |
| **B · Bodas** | La pareja, a veces wedding planner | Ceremonia, cóctel, fiesta, DJ | 800–6.000 € | **Comarca / corredor de fincas** | **Sí. El más lento.** |
| **C · Empresa** | RRHH, marketing, agencia de eventos | Monologuista, mago, grupo, DJ | 700–8.000 € | **Ciudad** | **Sí. El de más margen.** |
| **D · Bares, pubs y salas** | Hostelero, programador de sala | Formato pequeño recurrente | 300–800 € | Ninguno viable | **No para captación.** Sí para contenido (§8) |
| **E · Privados** | Particular | Lo que sea | 400–3.000 € | Ninguno | **No.** |

**Las tres consecuencias que reescriben la estrategia:**

**1 · El segmento con más geografía real es el que menos competencia SEO tiene.** Las fiestas patronales son el fenómeno más hiperlocal de España —cada pueblo con su patrón, su fecha en el santoral y su comisión— y el SERP que las sirve es lamentable. Los directorios se quedan en provincia y con contenido de dos párrafos.

**2 · El roster manda sobre el mercado.** Con una agenda fuerte en txarangas, charangas y orquestas de verbena, el criterio *capacidad real de servir* —que es eliminatorio— apunta al norte peninsular y a la meseta, no a Madrid. **Madrid es el mercado #1 de bodas de España (29.390 al año) y aun así no entra en fase 1**, porque no se ataca un mercado que no se puede servir.

**3 · Los segmentos no comparten geografía y eso es una ventaja, no un problema.** Que cada eje viva bajo un pilar distinto es exactamente lo que impide la canibalización (§3).

---

## 2. El dilema estructural: negocio nacional, búsqueda local

### 2.1 El problema, bien planteado

Show Up no tiene radio de servicio: una charanga sale de Pamplona y toca en Logroño el viernes y en Tudela el sábado. La restricción no es la distancia, es el coste de desplazamiento sobre el margen y la disponibilidad de fecha.

Pero **el cliente impone un marco local a un servicio que no lo tiene**:

- `txarangas para fiestas en Navarra`
- `grupos para bodas en Sevilla`
- `monologuista cena de empresa Madrid`

Y Google, que sirve al usuario, premia al que se presenta dentro de ese marco. De ahí las dos tentaciones, y las dos son trampas:

| Tentación | Qué parece | Por qué falla |
|---|---|---|
| **"Somos nacionales, una sola página"** | Honesto, limpio, sin riesgo | Nunca rankea en local. Cede el 100 % de la long tail geográfica —lo único que un dominio nuevo puede ganar— a plantillas mediocres. Es rendirse con buena conciencia. |
| **"Una landing por provincia / por municipio"** | Escalable, barato con IA | Es la definición literal de *doorway page*. Google la persigue desde 2015 y con más eficacia desde el core update de marzo de 2024 y la política de *scaled content abuse*. En un dominio sin autoridad no pierdes las páginas: pierdes el dominio. |

### 2.2 La doctrina

> **Google no penaliza que tengas muchas páginas de territorio. Penaliza que esas páginas no le sirvan a nadie que no seas tú.**

La política oficial define la doorway como la página creada *"para posicionar por consultas similares, con el objetivo de conducir al usuario a una página intermedia que no es tan útil como el destino final"*. La palabra que importa es **útil**. El criterio operativo no es "¿tengo oficina allí?" —Google no lo sabe ni le importa— sino:

> **¿Un concejal de festejos de Tafalla que aterriza aquí desde Google se lleva algo que no tenía antes, aunque no nos contrate nunca?**

**Los tres tests que decide cada página antes de publicarse:**

**Test 1 — Sustitución de topónimo.** Cambias `Navarra` por `Extremadura` en todo el texto. ¿Sigue siendo verdad? Si sigue siendo verdad, la página no dice nada de Navarra y no se publica. Es el filtro más barato y el que más páginas mata.

**Test 2 — El párrafo intransferible.** Toda página geográfica contiene **al menos tres afirmaciones que sólo pueda escribir alguien que ha trabajado ahí**. Hechos comprobables, no opiniones:

- *"En Navarra la palabra es txaranga, no charanga, y el que la contrata muchas veces no es el ayuntamiento sino la peña o los quintos, que pagan de su bolsillo y cierran en marzo."*
- *"El 26 % de las bodas de Sevilla siguen siendo religiosas —frente al 9 % de Barcelona—. Eso significa ceremonia en iglesia y que el grupo entra en el cóctel, no antes."*
- *"En Galicia una orquesta grande te puede pedir 45.000 € por noche y necesitar cuatro horas de montaje con camión de 12 m: si la plaza no tiene acceso, la orquesta no cabe aunque tengas el presupuesto."*

**Test 3 — El interlocutor.** Léele la página a alguien de ese territorio que vaya a contratar el año que viene. Si no te interrumpe ni una vez para preguntar algo, la página no tiene información: tiene relleno.

### 2.3 Seis reglas de implementación

| # | Regla | Por qué |
|---|---|---|
| 1 | **Una geo-página tiene que poder rankear por sí sola.** Si sólo existe porque "faltaba ese territorio", no existe. | Cada URL responde a una consulta con demanda propia, no rellena una matriz. |
| 2 | **Nunca se genera la matriz completa.** Navarra tiene fiestas pero no bodas; el Empordà tiene bodas pero no fiestas; Madrid tiene empresa y bodas pero no charangas. | La matriz completa es la firma visual del doorway. La asimetría es señal de decisión humana. |
| 3 | **Prohibido el listado de territorios en el footer.** Máximo 3 enlaces geográficos laterales dentro del cuerpo. | El footer con 40 topónimos es el patrón que los sistemas antispam detectan primero. |
| 4 | **Declaración de desplazamiento obligatoria y honesta**: de dónde sale el artista, qué supone en coste, y en qué casos recomendamos no contratarnos. | Convierte la debilidad en la señal de confianza más fuerte de la página, y es información que ninguna plantilla da. |
| 5 | **Sin `LocalBusiness` schema en páginas geográficas.** Se usa `Service` con `areaServed`. | `LocalBusiness` afirma un establecimiento. Afirmarlo sin tenerlo es lo único de este documento que puede considerarse engaño. |
| 6 | **Mínimo 15 días entre publicaciones geográficas.** | Ocho páginas publicadas el martes es un patrón de generación masiva. Ocho en cuatro meses es un negocio creciendo. |

---

## 3. La pregunta de arquitectura: ¿qué eje geográfico manda?

Es la decisión más importante del documento. **La respuesta es que no manda uno: manda uno por segmento.** Y la razón es que el eje geográfico no lo elige la empresa — lo elige **el comprador**.

### 3.1 Cada comprador piensa en una unidad distinta

| Segmento | El comprador piensa en… | Porque… | Eje |
|---|---|---|---|
| **Fiestas patronales** | Su pueblo (municipio) al comprar, pero **su región al buscar** | Nadie busca "charanga para Tafalla": busca `txarangas Navarra` y luego mira quién le pilla cerca. La palabra que teclea es regional; la ejecución es municipal | **Territorio ≈ CCAA** |
| **Bodas** | La comarca de la finca | No piensa "provincia de Girona": piensa "una masía del Empordà". El corredor de fincas es la unidad de comparación | **Comarca** |
| **Empresa** | La ciudad | El evento es en un hotel o una sede, y la sede está en una ciudad. No existe "evento de empresa en el Penedès" | **Ciudad** |
| **Bares y salas** | Su barrio — pero no lo busca en Google | El hostelero programa por contacto y por recomendación, no por buscador (§8) | **Ninguno** |
| **Privados** | Nada | Volumen residual y sin patrón geográfico | **Ninguno** |

### 3.2 Cómo conviven tres ejes sin canibalizarse

**La solución es estructural y ya está medio construida en `04-arquitectura-seo.md`: el modificador geográfico nunca vive en la raíz. Siempre cuelga de un pilar de servicio.**

```
/orquestas-para-fiestas-patronales          ← PILAR A (nacional)
   ├── /navarra          ← eje TERRITORIO
   ├── /aragon
   └── /castilla-y-leon

/musica-para-bodas                          ← PILAR B (nacional)
   ├── /barcelona        ← eje CIUDAD (excepción: capital = mercado)
   ├── /emporda          ← eje COMARCA
   └── /sierra-de-madrid

/artistas-para-eventos-de-empresa           ← PILAR C (nacional)
   ├── /madrid           ← eje CIUDAD
   └── /barcelona

(bares y privados: SIN eje geográfico. Ver §8 y §9)
```

**Por qué esto no canibaliza, en tres razones que hay que poder recitar:**

1. **No existe `/navarra` ni `/barcelona` en raíz.** No hay ninguna URL que represente "un territorio" en abstracto, así que no hay ninguna URL compitiendo con otra por el topónimo pelado. Cada URL es *servicio + territorio*, y `txarangas Navarra` y `bodas Navarra` son consultas distintas con SERPs distintos.
2. **Los ejes casi no se solapan geográficamente.** Navarra es fiestas, el Empordà es bodas, Madrid es empresa y bodas. **Barcelona es el único territorio que aparecerá en dos pilares** —bodas y empresa— y ahí la diferenciación es total: público distinto, formato distinto, precio distinto, temporada distinta. Si alguna vez dos páginas del mismo territorio empiezan a competir en Search Console por las mismas consultas, se fusionan. Se revisa en la auditoría semestral.
3. **La regla de la URL geográfica única** (abajo) impide el tercer nivel, que es donde estos sitios revientan.

### 3.3 La regla que evita la explosión combinatoria

> **REGLA DE LA URL GEOGRÁFICA ÚNICA**
> Para un mismo **territorio** y un mismo **segmento** existe **una sola URL**.
> El tipo de artista se resuelve con **H2 dentro de esa página**, nunca con URLs adicionales.

| Combinación | ¿Permitida? |
|---|---|
| `segmento × territorio` | **Sí**, con la regla de admisión del §12 |
| `segmento × territorio × tipo de artista` | **PROHIBIDA SIEMPRE** |

Ejemplo concreto de lo que **no** se hace nunca: `/charangas/navarra`, `/orquestas/navarra`, `/txarangas/navarra`, `/bandas-tributo/navarra`. Eso son 4 páginas que dicen lo mismo con distinto sinónimo, canibalizan entre sí y son el patrón exacto de granja de contenido.

Lo que **sí** se hace: **una** URL, `/orquestas-para-fiestas-patronales/navarra`, con H1 `Txarangas y orquestas para fiestas patronales en Navarra` y H2 internos para `Txarangas de calle`, `Orquestas de verbena`, `Grupos de versiones y tributos`, `DJ para después de la orquesta`. Una URL captura las cuatro familias de consulta, concentra toda la autoridad y da una página que de verdad ayuda a montar un programa de fiestas.

Los tipos de artista tienen sus páginas **nacionales** en el Cluster D del doc 04 (`/charangas-y-txarangas`, `/bandas-tributo`, `/dj-para-bodas-y-eventos`), y esas enlazan a las geográficas. **El tipo de artista es un eje temático nacional; el territorio es un eje geográfico por segmento. No se multiplican.**

### 3.4 Test de granularidad: ¿esto merece página o es una fila?

Antes de crear cualquier URL geográfica, tres preguntas. **Si no cambia ninguna de las tres respecto al territorio ya cubierto, no hay página nueva.**

1. **¿Cambia la palabra?** ¿El cliente usa otro término? (`txaranga` en Navarra y Euskadi vs. `charanga` en Aragón y Castilla vs. `orquestra` en Cataluña vs. `orquesta` en Galicia).
2. **¿Cambia el producto?** ¿Se contrata otra cosa? (gran orquesta gallega de 15 personas y camión escenario vs. txaranga de 10 de calle vs. banda de versiones de 5).
3. **¿Cambia el procedimiento de compra?** ¿Compra otro y de otra forma? (comisión de fiestas con dinero de barra vs. concejalía con contrato menor de hasta 15.000 € vs. pliego con procedimiento abierto).

**Si cambia una: página.** Si no cambia ninguna: **fila de tabla dentro de la página del territorio vecino.**

---

## 4. Google Business Profile sin local abierto al público

### 4.1 ¿Se puede? Sí, y es la configuración correcta

Google contempla exactamente este caso: **empresa de servicio a domicilio (Service Area Business, SAB)**. Perfil sin dirección visible que declara zonas de servicio.

| Elemento | Regla |
|---|---|
| Dirección | Se **introduce** en el alta (Google la necesita para verificar) pero se **oculta**. Puede ser el domicilio fiscal. |
| Apartados de correos / buzones remotos | **Prohibidos.** Motivo directo de suspensión. |
| Coworkings y oficinas virtuales | Zona roja. Sólo válido con rótulo permanente y personal en horario. **No usar.** |
| Zonas de servicio | Hasta **20**, por ciudad, código postal o región. |
| Radio | El borde del área **no debe superar las 2 horas de viaje** desde la ubicación real. |
| Fichas | **Una sola.** Una ficha por territorio servido es infracción explícita y la vía más rápida a la suspensión en cadena. |
| Verificación | Vídeo, cada vez más habitual desde 2025. Hay que poder grabar continuo: entrada → espacio de trabajo → material rotulado → documentación con el nombre. |

**El límite de 2 horas es el dato que cambia el plan.** Show Up sirve a toda España pero **el GBP no puede declararlo**. Declarar "España" en un SAB es causa típica de reverificación y suspensión.

> **El GBP cubre tu comarca. El resto de España lo cubre el SEO orgánico. Son dos canales que no se solapan.** Quien prometa el pack local de Sevilla con una ficha en Pamplona miente.

### 4.2 Categoría

**Principal: `Agencia de espectáculos`** (equivalente ES de *Entertainment agency*). Es la que describe el negocio real —intermediación artística— y la que Google asocia a consultas de contratación. Verificar el literal exacto en el panel: el catálogo español cambia de nombre con frecuencia.

**Secundarias (3–5):** `Agencia de representación artística`, `Servicio de entretenimiento`, `Servicio de DJ`, `Servicio para bodas`.

| Categoría vetada | Motivo |
|---|---|
| `Empresa organizadora de eventos` | Trae leads de organización integral (catering, montaje) que no se sirven. Ensucia la relevancia semántica y las métricas de conversión. |
| `Grupo de música` / `Músico` | Show Up no es el artista. Compite con las fichas de los propios artistas, que sí deben tenerla. |
| `Sala de conciertos`, `Local de eventos` | Implican establecimiento visitable. Falso. |

**Nombre de la ficha: `Show Up Events`.** Punto. El *keyword stuffing* en el nombre es la primera causa de suspensión en España y es denunciable por cualquier competidor en dos clics.

### 4.3 Qué se gana realmente, y qué no

**Lo que NO se gana — y hay que decirlo primero:**

En este vertical **el pack local casi nunca se dispara**. `grupos musicales para bodas Barcelona` o `charangas Navarra` devuelven directorios (Bodas.net, Partfy, charangas.info, Gigstarter): Google ha clasificado la intención como *búsqueda de proveedor en directorio*, no como *búsqueda de establecimiento cercano*. No hay tres alfileres en un mapa porque el usuario no va a ir a ningún sitio.

**La ficha no te da la keyword transaccional geográfica.** Esa se gana con la geo-página orgánica. Quien construya el plan local alrededor del GBP está optimizando un canal que aquí apenas existe.

**Lo que sí se gana, y justifica hacerlo el día 1:**

1. **Búsqueda de marca.** Alguien oye el nombre en una verbena, busca `show up events`, y el panel con fotos, teléfono y reseñas es la diferencia entre parecer una empresa y parecer una web. Coste: cero.
2. **Reseñas como activo transversal.** Único sitio con reseñas públicas, verificables y no manipulables por ti. Alimentan E-E-A-T y el cierre comercial. Citables con enlace a la fuente, **nunca** como `AggregateRating` inventado (doc 04 §6.5).
3. **Maps en la comarca base.** En 2 h sí hay opción en `agencia de artistas cerca de mí`. Volumen bajo, intención altísima.
4. **Entidad.** Ficha + web + teléfono + `sameAs` coherentes consolidan "Show Up Events" como entidad. En dominio nuevo, acelera la comprensión del sitio.
5. **Publicaciones y fotos** como prueba de actividad: cada verbena hecha es una foto geolocalizada real.

### 4.4 Riesgos

| Riesgo | Probabilidad | Mitigación |
|---|---|---|
| Suspensión por reverificación (los SAB en el punto de mira desde 2025) | **Alta** | Prueba de vídeo siempre lista. Documentación fiscal con la dirección declarada. |
| Área de servicio desproporcionada | Media | No declarar "España". Máx. 20 áreas, todas dentro de 2 h. |
| Nombre con keywords | Media | Nombre limpio, y no ceder cuando alguien proponga "mejorarlo". |
| Denuncia de competidor | Media | Sector con agencias veteranas. Cumplir literalmente. |
| Pérdida de la ficha y sus reseñas | Baja pero **catastrófica** | Exportar reseñas trimestralmente. **No construir dependencia comercial de la ficha.** |

### 4.5 Protocolo

**Alta (día 1):** ficha única SAB con dirección oculta · categoría principal + 3 secundarias · áreas dentro de 2 h · descripción de 750 caracteres en lenguaje de cliente (`fiestas patronales`, `verbenas`, `bodas`, `eventos de empresa`) sin listas de topónimos · web a `/` · teléfono único idéntico al de `/contacto` · servicios dados de alta uno a uno con descripción propia · ≥12 fotos reales de directo.

**Mantenimiento mensual (30 min):** 3–4 fotos nuevas · 1 publicación · respuesta al 100 % de reseñas en <72 h · petición de reseña sistemática 48 h después de cada evento, por WhatsApp con enlace directo, al que contrató **y a la comisión de fiestas o wedding planner si los hubo**. Objetivo año 1: **25 reseñas ≥4,7**.

---

## 5. SEGMENTO A · Ayuntamientos y comisiones de fiestas

**Es el segmento prioritario del proyecto. Y es donde está la pregunta difícil de este documento.**

### 5.1 Por qué es el mejor hueco de España ahora mismo

**El mercado es real y grande:**

- ~400 formaciones de orquesta de verbena en España, la mayoría de origen gallego.
- Sólo Galicia: ~400 orquestas, ~4.000 empleos directos, **>40 M€ por temporada estival**, casi **2.500 fiestas patronales** entre julio y agosto.
- Cachés de orquesta: formación pequeña 6.000–8.000 €, media 12.000–15.000 €, gran orquesta hasta **45.000 €**. Subidas del 15–30 % en los últimos ejercicios.
- Cachés de charanga/txaranga: **150–800 €, media ~492 €**. Ticket bajo, pero se contratan varias por fiesta y se repiten cada año.
- Gasto municipal en festejos (Ministerio de Hacienda, 2023): Valencia **10,65 M€**, Barcelona **10,15 M€**, Sevilla **8,76 M€**, Santa Cruz de Tenerife **7,00 M€**, Málaga **6,89 M€**. Y eso son sólo las capitales grandes.
- España tiene **8.131 municipios** y hay ~**16.900 fiestas populares** registradas en los portales de referencia.

**Y el SERP que lo sirve es indefendible.** Comprobado:

| Competidor | Qué hace | Calidad real |
|---|---|---|
| **charangas.info** | Directorio por provincia y CCAA | **Lista 4 charangas para toda Navarra**, más 30 "de otras provincias que pueden actuar aquí". Texto introductorio genérico. Sin comarca ni municipio. |
| **Partfy** | Directorio por provincia, 248 charangas | Precio (150–800 €, media 492 €), FAQ genérica, demanda por meses. Mejor que la media, pero **menciona "fiestas patronales" sin nombrar ni una sola fiesta concreta**. |
| **La Factoría del Show** | Landing por provincia y por tipo de evento | Plantilla clonada. |
| **portalfiestas.com** | **16.872 fiestas indexadas** con nombre, fecha, municipio y provincia | Editorial y útil, **pero no vende artistas**. No es competencia comercial: es la prueba de que el dato existe y de que nadie lo ha cruzado con la contratación. |
| **Plataforma de Contratación del Sector Público** | Licitaciones en PDF | Nadie ha escrito la guía en cristiano. |

> **Nadie en España ha cruzado el calendario de fiestas con la contratación de música. Ese cruce es el activo.**

### 5.2 La doctrina: ¿tiene sentido una arquitectura por municipio?

**No. Y la razón no es sólo el riesgo de penalización — es que el comprador no busca así.**

Tres motivos, por orden de peso:

**1 · La búsqueda comercial no es municipal, es regional.** Nadie teclea `charanga para las fiestas de Tafalla`. Teclea `txarangas Navarra` o `charangas para fiestas patronales` y después mira quién le pilla cerca. El municipio aparece en la conversación de WhatsApp, no en la caja de búsqueda.

**2 · Las búsquedas que sí llevan nombre de municipio son B2C y no valen nada comercialmente.** `fiestas de San Fermín 2027`, `programa fiestas de Gracia`, `feria de Málaga fechas` tienen volumen enorme e intención **cero** de contratación: es un vecino buscando el programa. Encima, el resultado #1 es y será la web del ayuntamiento, que es la fuente oficial. **Es la trampa perfecta: mucho volumen, cero dinero, imposible de ganar.** Cualquier plan que proponga una página por fiesta con nombre está persiguiendo tráfico que no compra.

**3 · Aritmética.** 8.131 municipios × 1 página = una granja. Ni con diez años de autoridad. Y aunque Google no lo detectase, no hay forma humana de escribir 8.131 páginas útiles.

### 5.3 Dónde está exactamente la frontera

> **Se crea una página por territorio donde cambie la palabra, el producto o el procedimiento de compra. Si no cambia ninguna de las tres, no hay dos páginas: hay una.**

Aplicado a fiestas patronales, eso da **14 territorios en toda España**, no 52 provincias ni 8.131 municipios. Y esos 14 se justifican solos porque en cada uno cambia de verdad el idioma comercial:

| # | Territorio | La palabra del cliente | Formato dominante | Quién contrata | Prioridad |
|---|---|---|---|---|---|
| 1 | **Navarra** | **txaranga** (y charanga) | Txaranga de calle + orquesta de noche | **Peñas, quintos y comisión** tanto o más que el ayuntamiento | **1** |
| 2 | **Aragón** | **charanga** | Charanga + orquesta + jotas | Comisión de fiestas, peñas | **2** |
| 3 | **Castilla y León** | charanga / orquesta | Orquesta de verbena | Ayuntamiento y peñas | **3** |
| 4 | **La Rioja** | charanga | Charanga + orquesta | Comisión | 4 |
| 5 | **Euskadi** | **txaranga** | Txaranga, trikitixa, romería | Comisión, *udala* | 5 |
| 6 | **Comunidad Valenciana** | orquesta / verbena | Orquesta + charanga; Moros y Cristianos | Comisión de fiestas, quintada | 6 |
| 7 | **Cataluña** | **orquestra**, *grup de versions* | Orquestra de ball, *festa major* | *Comissió de festes*, ajuntament | 7 |
| 8 | **Castilla-La Mancha** | charanga / orquesta | Orquesta | Ayuntamiento | 8 |
| 9 | **Madrid** | orquesta / tributo | Orquesta + banda tributo | Concejalía de festejos, juntas de distrito | 9 |
| 10 | **Galicia** | **orquesta** (*orquestra*) | **Gran orquesta** con camión escenario | *Comisión de festas*, parroquia | 10 — mercado propio y saturado |
| 11 | **Andalucía** | orquesta / grupo | Orquesta de feria, sevillanas | Ayuntamiento, casetas | 11 |
| 12 | **Asturias y Cantabria** | orquesta | Orquesta de verbena, *fiestas de prau* | Comisión, peñas | 12 |
| 13 | **Murcia** | orquesta | Orquesta | Ayuntamiento, peñas | 13 |
| 14 | **Extremadura** | orquesta / charanga | Orquesta | Ayuntamiento | 14 |

*(Canarias y Baleares quedan fuera del eje: la logística de isla cambia la estructura de costes entera y sin socio local no hay servicio que prestar.)*

**Regla adicional para los 14:** ninguno se publica sin cumplir la regla de admisión del §12. **Tener el mapa no es tener derecho a las 14 páginas.**

### 5.4 El municipio, resuelto: es una fila, no una URL

Aquí está la jugada que nadie del sector ha hecho. El hiperlocal de las fiestas no se convierte en URLs: **se convierte en la tabla que hace única a la página de territorio.**

Dentro de `/orquestas-para-fiestas-patronales/navarra`, un bloque así:

> ### Cuándo son las fiestas en Navarra y cuándo hay que cerrar la música
>
> | Municipio | Fiesta | Patrón | Fechas orientativas | Cuándo se cierra la contratación |
> |---|---|---|---|---|
> | Tudela | Fiestas de Santa Ana | Santa Ana | 24–30 julio | Febrero–marzo |
> | Estella-Lizarra | Fiestas de la Virgen del Puy | Virgen del Puy | Primer viernes de agosto | Marzo |
> | Tafalla | Fiestas de la Virgen de la Asunción | — | 14–20 agosto | Marzo–abril |
> | … | | | | |
>
> *Fechas orientativas: confirma siempre con el ayuntamiento. Si tu fiesta no está, dínoslo y la añadimos.*

**Entre 40 y 80 municipios por territorio, en una sola URL.** Efectos:

- **Es genuinamente útil**: la columna *cuándo se cierra la contratación* no existe en ningún sitio y es exactamente lo que necesita saber quien va a contratar.
- **Captura long tail de forma natural y legítima**: la tabla contiene los topónimos sin que haya una página por topónimo.
- **Es defendible ante cualquier revisión**: es información, no relleno.
- **Es reutilizable como activo comercial**, que es donde de verdad vale dinero (§5.6).

**Cuándo un municipio merece URL propia:** prácticamente nunca. Sólo con las tres a la vez: (a) fiesta con reconocimiento nacional, (b) **evidencia de intención B2B**, no B2C, en el SERP de ese nombre, y (c) Show Up ha trabajado ahí de verdad. Previsión realista a cinco años: **entre 0 y 3 páginas de municipio.** Si en algún momento el plan propone más de tres, el plan se ha roto.

### 5.5 El otro eje de fiestas: el procedimiento, que no es geográfico

**Es el contenido con mejor relación esfuerzo/ingreso de todo el proyecto y no lleva topónimo.**

Quien contrata en un ayuntamiento tiene un problema administrativo antes que musical, y lo busca en Google porque nadie se lo ha explicado:

- **Contrato menor de servicios: hasta 15.000 €** (Ley 9/2017 de Contratos del Sector Público). Por encima, procedimiento con más requisitos. Y aquí está la duda real que se teclea: *"¿puedo trocear el programa de fiestas en varios contratos menores?"* — la respuesta honesta (fraccionamiento indebido, riesgo de reparo del interventor) es contenido que **no ha escrito nadie con voluntad comercial**.
- Cómo se justifica la **exclusividad** de un artista concreto.
- Qué documentación se pide: alta de actividad, certificados de estar al corriente, seguro de RC, declaración responsable.
- Quién factura cuando el que toca es un grupo de seis personas, y con qué IVA y retención.
- Cómo entra un **agente artístico** en la ecuación.

**Páginas nacionales, sin geografía:**

- `/orquestas-para-fiestas-patronales/como-contrata-un-ayuntamiento` — **la primera pieza a publicar de todo el proyecto.**
- `/orquestas-para-fiestas-patronales/contrato-menor-actuacion-musical`
- `/orquestas-para-fiestas-patronales/cuanto-cuesta`
- `/orquestas-para-fiestas-patronales/documentacion-y-facturacion`

Un concejal de festejos con presupuesto que encuentra la única página de España que le explica su propio procedimiento **no vuelve a buscar en Google: llama.**

### 5.6 El calendario como activo de outbound (donde está el dinero de verdad)

La base de datos de fiestas —municipio, fiesta, patrón, fechas, quién contrata, cuándo cierra, qué contrató el año pasado— **es más valiosa como CRM que como SEO.**

- Permite llamar a cada comisión **en su mes de decisión**, no en agosto cuando ya está todo cerrado.
- Se alimenta sola: cada evento hecho añade una fila con datos reales.
- Convierte un negocio estacional en un calendario de trabajo de 12 meses.

**En SEO se publica el 30 % de esa base (la parte pública y verificable). El 70 % restante —contactos, precios, histórico— es interno y no se publica jamás.**

### 5.7 Estacionalidad: cuándo hay que publicar

El ciclo es rígido y no perdona:

| Mes | Qué pasa | Qué hay que tener publicado |
|---|---|---|
| Sep–Dic | Se cierran presupuestos municipales del año siguiente | **Todo el contenido de proceso**, ya posicionado |
| **Ene–Mar** | **Se contrata la programación del verano** | Las páginas de territorio, ya posicionadas |
| Abr–Jun | Cierre de flecos, sustituciones | Disponibilidad y contacto rápido |
| Jul–Ago | Se toca | Fotos, vídeos, reseñas, filas nuevas del calendario |

> **Una página de territorio publicada en abril llega tarde a su propia temporada.** Se publica entre agosto y noviembre para llegar posicionada a enero. Este calendario manda sobre cualquier otra consideración de orden.

---

## 6. SEGMENTO B · Bodas — el eje comarca

### 6.1 Los datos duros: matrimonios por provincia, 2024

INE 2024, provincia de residencia. Índice normalizado con Madrid = 100.

| # | Provincia | Matrimonios | Índice | % religiosas | Mes pico | % may–oct |
|---|---|---|---|---|---|---|
| 1 | Madrid | 29.390 | 100 | 20 % | Junio (14 %) | 63 % |
| 2 | Barcelona | 20.364 | 69 | 9 % | Junio (13 %) | 62 % |
| 3 | Valencia | 10.185 | 35 | 12 % | Junio (12 %) | 60 % |
| 4 | Sevilla | 7.858 | 27 | **26 %** | **Octubre** (14 %) | 61 % |
| 5 | Alicante | 6.654 | 23 | 13 % | Septiembre (13 %) | 60 % |
| 6 | Illes Balears | 6.164 | 21 | 9 % | Octubre (13 %) | 60 % |
| 7 | Málaga | 6.065 | 21 | 16 % | Septiembre (13 %) | 63 % |
| 8 | Murcia | 5.656 | 19 | 22 % | Octubre (14 %) | 56 % |
| 9 | Cádiz | 4.480 | 15 | 21 % | Septiembre (15 %) | 65 % |
| 10 | Las Palmas | 4.277 | 15 | 11 % | Octubre (12 %) | 60 % |
| 11 | A Coruña | 3.914 | 13 | 11 % | **Agosto** (14 %) | 68 % |
| 12 | Bizkaia | 3.618 | 12 | 8 % | Junio (15 %) | 66 % |
| 13 | Asturias | 3.522 | 12 | 15 % | Septiembre (14 %) | 67 % |
| 14 | S.C. Tenerife | 3.482 | 12 | 14 % | Octubre (12 %) | 61 % |
| 15 | Pontevedra | 3.338 | 11 | 10 % | Septiembre (13 %) | 66 % |
| 16 | Zaragoza | 3.276 | 11 | 19 % | Septiembre (15 %) | 66 % |
| 17 | Granada | 3.211 | 11 | 23 % | Septiembre (15 %) | 67 % |
| 18 | **Girona** | 3.027 | 10 | **6 %** | Septiembre (13 %) | 62 % |
| 19 | Tarragona | 2.981 | 10 | 8 % | Junio (14 %) | 63 % |
| 20 | Córdoba | 2.979 | 10 | **34 %** | Junio (14 %) | 64 % |
| 21 | Toledo | 2.556 | 9 | 23 % | Junio (**16 %**) | **69 %** |
| 22 | Gipuzkoa | 2.524 | 9 | 8 % | Septiembre (15 %) | 67 % |
| 23 | Navarra | 2.241 | 8 | 16 % | Junio (**17 %**) | 68 % |
| 24 | Guadalajara | 1.077 | 4 | 14 % | Junio (15 %) | 66 % |
| 25 | Segovia | 481 | 2 | 22 % | Junio (15 %) | **71 %** |

Total nacional 2024: **175.364 matrimonios**, +1,7 % sobre 2023. **84 % civiles.**

**Cuatro lecturas que ningún competidor usa y que son contenido único por sí solas:**

1. **La brecha civil/religiosa cambia el producto.** Girona 6 % religiosas vs. Córdoba 34 % vs. Jaén 41 %. Donde manda la ceremonia civil, la música de ceremonia se contrata; donde manda la iglesia, el grupo entra en el cóctel. **Argumento comercial distinto por provincia, sacado de un dato público que nadie ha mirado.**
2. **El calendario de contratación no es nacional.** Pico en junio en Madrid, Barcelona, Toledo, Navarra y Bizkaia; en octubre en Sevilla, Murcia, Baleares y Canarias; en agosto en A Coruña. Pico en junio ⇒ el brief entra de septiembre a enero. Pico en octubre ⇒ entra de enero a mayo. **Esto define cuándo se publica cada geo-página.**
3. **La concentración premia al interior.** Segovia concentra el 71 % de sus bodas en seis meses; Valladolid el 73 %. Volumen bajo, demanda hiperconcentrada.
4. **Ticket ≠ volumen.** Estudios de sector 2025 sitúan el gasto medio nacional en ~20.000 € (130 invitados): Castilla-La Mancha ~32.500 €, Navarra ~27.600 €, La Rioja ~26.200 €, Asturias ~24.400 € arriba; Canarias ~12.400 €, Andalucía ~16.500 €, Baleares ~17.300 € abajo. *(Baleares baja porque el dato mide bodas de residentes, no las destination weddings internacionales, que son otro mercado.)* **Toledo y Guadalajara: volumen medio-bajo y ticket altísimo. Infravalorados por todo el sector.**

### 6.2 Por qué en bodas la unidad es la comarca

La pareja no piensa "provincia de Girona": piensa "una masía del Empordà". En España el mercado de bodas se organiza por **corredores de fincas**: agrupaciones de 15–60 espacios con estética, precio y logística comunes, que las parejas comparan entre sí. **Ese corredor tiene nombre propio, y ese nombre es la keyword.**

| Unidad | Cuándo se usa | Ejemplo |
|---|---|---|
| **Comarca / corredor de fincas** | **Por defecto**, si el nombre existe en el mercado y hay ≥25 espacios | `/musica-para-bodas/emporda` |
| **Ciudad** | Sólo en grandes capitales, donde la ciudad *es* el mercado | `/musica-para-bodas/barcelona` |
| **Provincia** | **Excepcional.** Sólo si la provincia es la marca del mercado y no hay comarca dominante | `/musica-para-bodas/toledo` |
| **CCAA** | Nunca en bodas | — |

### 6.3 El mapa de zonas-marca de España

Inventario de mercados geográficos posibles para los próximos cinco años.

| Zona | Provincia(s) | Nomenclatura correcta | Notas |
|---|---|---|---|
| **Empordà** (Alt y Baix) | Girona | `Empordà`, con accent grave | Ticket alto, destination europea. Alt/Baix se distingue en el cuerpo, no en la URL |
| **Costa Brava** | Girona | `Costa Brava` | Marca turística: más internacional, menos intención local |
| **Penedès** | Barcelona/Tarragona | `Penedès` | Enoturismo. Cuarteto y jazz, no verbena |
| **Maresme / Garraf** | Barcelona | — | Dependientes de BCN. No merecen URL todavía |
| **Sierra de Madrid** | Madrid | `Sierra de Madrid`, **no** "Sierra de Guadarrama" | Es el nombre comercial, no el geográfico. El cliente usa el primero |
| **Cigarrales de Toledo** | Toledo | `Toledo` en URL, `cigarrales` en el cuerpo | *Cigarral* es la palabra de autoridad local |
| **Gredos / Valle del Jerte** | Ávila, Cáceres | `Gredos` | Volumen bajo, ticket alto. Fase 4 |
| **Aljarafe** | Sevilla | `Aljarafe`; la palabra es **hacienda**, no finca | La hacienda sevillana es un tipo de espacio propio |
| **Costa del Sol / Axarquía** | Málaga | `Costa del Sol` | Requiere versión en inglés para competir de verdad |
| **Ribera del Duero** | Burgos, Valladolid, Soria | `Ribera del Duero` | Enoturismo, volumen bajo, ticket alto |
| **Rioja Alavesa** | Álava | `Rioja Alavesa` | SERP casi vacío, ticket muy alto, volumen mínimo |
| **Rías Baixas** | Pontevedra | `Rías Baixas`; la palabra es **pazo** | Sinergia directa con el eje verbena |

**Siete reglas de nomenclatura:**

1. Se usa **el nombre que usa el cliente**, no el del INE. `Sierra de Madrid` gana a `Sierra de Guadarrama`.
2. Se respeta **la grafía local y la lengua cooficial**: `Empordà`, `Penedès`, `Rías Baixas`. Slug sin diacríticos (`/emporda`), H1 y cuerpo con ellos.
3. Se usa **el vocabulario del espacio local**, y es lo que más diferencia: masía y mas en Cataluña; hacienda y cortijo en Andalucía occidental; cigarral en Toledo; pazo en Galicia; caserío en Euskadi; alquería en Valencia. **Un texto que dice "finca" en Sevilla y "finca" en Girona no ha estado en ninguno de los dos sitios.**
4. **Nunca se solapan dos unidades que compitan.** Si existe `/emporda`, no se crea `/girona`.
5. La zona se declara en `Service.areaServed` como `AdministrativeArea`; la ciudad como `City`.
6. **Umbral mínimo: ≥25 espacios de boda listados en la zona.** Por debajo, el mercado no existe.
7. En empresa la zona no aplica: ahí manda la ciudad.

---

## 7. SEGMENTO C · Empresa — el eje ciudad

Congresos internacionales ICCA 2024 (España, 3.ª del mundo con 536):

| Ciudad | Congresos 2024 |
|---|---|
| Barcelona | 142 (4.ª del mundo) |
| Madrid | 105 |
| Valencia | 51 |
| — | España coloca **57 ciudades** en el ranking |

Fuera del top 3, el evento relevante para Show Up (cena de Navidad, convención, aniversario) no sigue al congreso internacional sino a la **densidad de sedes corporativas**: Madrid, Barcelona, Valencia, Bilbao, Sevilla, Málaga y Zaragoza.

**Decisiones:**
- **Eje: ciudad. Sin excepción.** No existe "evento de empresa en el Penedès".
- **En año 1 el vertical empresa es Madrid y Barcelona. Todo lo demás es residual.**
- **Máximo 8 ciudades a tres años.** La novena no aporta.
- Estacionalidad: el ciclo de cena de empresa se decide de **septiembre a noviembre**, luego el contenido se publica **en junio** (doc 04 §5).
- Los polígonos y parques empresariales **no son un eje**: nadie busca "monologuista en el 22@". Se mencionan dentro de la página de ciudad como contexto de sitios (hoteles con salón, espacios de convención), que es donde sí aportan.

---

## 8. SEGMENTO D · Bares, pubs y salas — el veredicto honesto

**Encargo: investigar si hay demanda de búsqueda real o si es todo boca a boca, y ser honesto si el canal no da.**

### 8.1 Lo que dicen los datos

| Evidencia | Qué implica |
|---|---|
| Las consultas del **hostelero** que sí tienen volumen son **`licencia de música en directo bar`, `SGAE bar cuánto cuesta`, `insonorización local música en vivo`, `permisos música en directo`** | Su problema declarado no es *a quién contrato*: es *qué me hace falta para poder hacerlo legalmente*. Tarifas SGAE con directo o baile pueden superar los **1.500 €/año**, y hay requisitos de licencia, aforo e insonorización que dependen de la ordenanza municipal. |
| `música en directo` + ciudad devuelve **guías de "dónde ir a escuchar"** (Time Out, Madrid Secreto, listados de locales) | La intención está capturada por el **público asistente**, no por el programador. Es B2C con máscara de B2B. |
| El agregador que sí sirve este segmento (Gigstarter) tiene una página de ocasión `bar`, pero es una **ocasión dentro de un directorio**, no un mercado con páginas de ciudad | Ni siquiera los especialistas construyen geografía aquí: no la hay. |
| Ticket 300–800 €, recurrente | El CAC vía SEO **no se recupera** con un ticket de 400 € y un ciclo que además exige relación continuada. |
| El programador de sala contrata por **contacto, demo recibida y recomendación** | Es un mercado de relación, no de búsqueda. |

### 8.2 Veredicto

> **Bares, pubs y salas no son un canal SEO de captación. Cero páginas de ciudad, cero páginas de barrio, cero páginas de zona de ocio. El canal es outbound: WhatsApp, visita y relación.**
>
> Y hay que decirlo con números: una página de ciudad para bares costaría lo mismo que una de bodas y traería un ticket cinco veces menor con un ciclo cinco veces más largo. **Es el peor euro de SEO que se puede gastar en este proyecto.**

Esto confirma —ahora con evidencia, no con intuición— la decisión que ya estaba en `04-arquitectura-seo.md` §0.3.

### 8.3 La única jugada SEO legítima aquí, y no lleva topónimo

Hay un hueco real, pero está **un paso antes** de la contratación: el hostelero que se está planteando programar directo y no sabe en qué se mete. Contenido informacional, competencia baja, y captura al comprador **antes** de que exista la necesidad.

- `/guias/musica-en-directo-en-un-bar-que-necesitas` — licencias, SGAE, insonorización, aforo, ordenanza, horarios.
- `/guias/cuanto-cuesta-programar-musica-en-directo-en-un-bar` — caché, sonido, si hace falta técnico, cuándo sale rentable y **cuándo no** (recomendar en contra es tono de marca).
- `/guias/como-organizar-un-ciclo-de-conciertos-en-tu-local` — periodicidad, formatos, cómo no perder dinero.

**Reglas duras:** nacionales, **sin variante por ciudad jamás**, y el CTA no es el brief genérico sino *"cuéntanos qué local tienes"*, que entra por un canal comercial distinto. Es contenido de captación para un canal de outbound. **Si alguna de estas tres páginas engendra una versión "…en Madrid", el plan se ha roto.**

---

## 9. SEGMENTO E · Privados

Sin eje geográfico, sin cluster, sin blog. Se resuelve con una ancla dentro de `/como-funciona` (doc 04 §2.2). Demanda de búsqueda dispersa, ticket medio-bajo, cero patrón geográfico. **Convierte solo desde marca y referido.**

---

## 10. Priorización de mercados: el mapa de huecos

### 10.1 El modelo de puntuación

Se puntúa cada **combinación segmento × territorio** de 0 a 100 con cinco factores. **El quinto es eliminatorio.**

| Factor | Peso | Fuente |
|---|---|---|
| **A. Volumen de demanda** | 25 % | INE 2024 (bodas) · gasto municipal en festejos · ICCA (empresa) |
| **B. Valor del ticket** | 20 % | Cachés reales por formato · gasto medio de boda por CCAA · presupuesto municipal |
| **C. Debilidad competitiva del SERP** | **30 %** | Quién ocupa el top 10 con modificador geográfico y con qué calidad |
| **D. Encaje con el roster** | 15 % | ¿Tenemos de eso, y bueno? |
| **E. Capacidad real de servir** | 10 %, **eliminatorio** | ¿Llega alguien? ¿El desplazamiento deja margen? |

**El peso de C sube al 30 %** respecto a un modelo convencional. Con dominio nuevo, la debilidad del rival importa más que el tamaño del premio: **un hueco pequeño que se puede ganar en 4 meses vale más que un mercado enorme que no se gana en 24.**

### 10.2 El mapa de huecos

Combinaciones ordenadas por puntuación. **Es la tabla que decide el orden de trabajo de tres años.**

| # | Combinación | Punt. | Por qué es un hueco | Riesgo |
|---|---|---|---|---|
| 1 | **Proceso de contratación pública × nacional** (sin geo) | **92** | Nadie ha escrito en cristiano cómo contrata un ayuntamiento música. Contrato menor de 15.000 €, fraccionamiento, documentación, facturación. Lo lee alguien con presupuesto. **Competencia: cero.** | Ninguno |
| 2 | **Fiestas × Navarra** | **89** | charangas.info lista **4 charangas** para toda Navarra. La palabra es *txaranga* y casi nadie la optimiza. Peñas y quintos contratan al margen del ayuntamiento: comprador extra que nadie atiende | Estacional |
| 3 | **Fiestas × Aragón** | **86** | Charanga + jotas + orquesta, mercado denso, directorios genéricos. La palabra es *charanga* | Estacional |
| 4 | **Fiestas × Castilla y León** | **82** | Orquesta de verbena en el mercado más atomizado de España. SERP casi vacío | Ticket disperso |
| 5 | **Bodas × Barcelona** | **80** | Índice 69, base operativa, 91 % civiles ⇒ se vende ceremonia | Competencia alta |
| 6 | **Fiestas × La Rioja** | **78** | Mercado pequeño pero muy concentrado y sin nadie enfrente | Volumen bajo |
| 7 | **Bodas × Empordà** | **77** | **Girona tiene la tasa de bodas civiles más alta de España (94 %)**: todas las ceremonias son contratables. SERP de comarca casi vacío. A 1 h 15 de Barcelona | Ticket alto exige producto de nivel |
| 8 | **Fiestas × Euskadi** | **75** | *Txaranga*, mercado sólido, poca oferta digital decente | Mercado cerrado a proveedor local |
| 9 | **Empresa × Barcelona** | **74** | 142 congresos internacionales. Reaprovecha autoridad geográfica ya construida | — |
| 10 | **Fiestas × C. Valenciana** | **72** | Moros y Cristianos, quintadas, fallas: densidad de fiesta altísima | Competencia local organizada |
| 11 | **Bodas × Madrid** | **72** | 29.390 bodas, 1,44× Barcelona. **El mercado #1 de España** | **E=0 hasta que haya artista que llegue. Hay que ir a comprarlo (§12.4)** |
| 12 | **Empresa × Madrid** | **70** | Densidad corporativa máxima, ciclo corto | Competencia de agencias grandes |
| 13 | **Fiestas × Cataluña** (*festa major*) | **68** | *Comissió de festes*, vocabulario propio, mucho municipio | Requiere catalán bien escrito |
| 14 | **Bodas × Sierra de Madrid** | **67** | Corredor con nombre de mercado propio, ticket superior a "Madrid" | Depende de #11 |
| 15 | **Bodas × Toledo / cigarrales** | **66** | **Ticket CLM el más alto de España (~32.500 €)**, 69 % de bodas en may–oct, receptor de la boda madrileña | Volumen medio-bajo |
| 16 | **Bodas × Sevilla + Aljarafe** | **64** | **Pico en octubre**: calendario complementario al catalán, rellena temporada baja. 26 % religiosas ⇒ mercado de cóctel y fiesta | Desplazamiento caro, competencia enraizada |
| 17 | **Fiestas × Galicia** | **60** | Mercado enorme (>40 M€, 2.500 fiestas) | **~400 orquestas con ecosistema propio y precio propio. Y la temporada 2025 se leyó como floja: menos verbenas parroquiales, concentración en fin de semana, competencia de discomóviles. Se está concentrando, no creciendo.** Entrar tarde |
| 18 | **Bodas × Costa del Sol** | 58 | Destination internacional, ticket muy alto | Saturado; hay que competir en inglés |
| 19 | **Bodas × Bizkaia/Gipuzkoa** | 56 | 92 % civiles, ticket alto, poco atendido por agencias nacionales | Cultura de proveedor local cerrada |
| 20 | **Bodas × Baleares** | 48 | Ticket destination altísimo | **Logística de isla: instrumentos, ferry, backline alquilado. Cambia la estructura de costes entera.** Sólo con socio local |
| — | **Bares × cualquier ciudad** | **0** | — | **Descartado. Ver §8** |
| — | **Bodas × Canarias, Ceuta, Melilla** | **0** | — | **Descartado.** Logística y volumen (347 y 291 bodas) |

### 10.3 Las fases: cuántas atacar en cada una

**Fase 1 — meses 1–6. Seis URLs: 3 de proceso (sin geo) + 3 geográficas.**

| # | URL | Mes | Por qué aquí |
|---|---|---|---|
| 1 | `/orquestas-para-fiestas-patronales/como-contrata-un-ayuntamiento` | 1 | Competencia cero, comprador con presupuesto, **y hay que estar posicionado antes de enero** |
| 2 | `/orquestas-para-fiestas-patronales` (pilar) | 2 | Sin pilar, las páginas de territorio no tienen a dónde apuntar |
| 3 | `/orquestas-para-fiestas-patronales/navarra` | 3 | **El mayor hueco identificado.** Publicar antes de noviembre para llegar a la ventana de enero–marzo |
| 4 | `/musica-para-bodas` (pilar) + `/musica-para-bodas/cuanto-cuesta` | 4 | Arranca el juego largo. `cuanto-cuesta` es la mejor keyword comercial del sector (doc 04 §5) |
| 5 | `/orquestas-para-fiestas-patronales/aragon` | 5 | Segundo territorio charanguero |
| 6 | `/musica-para-bodas/barcelona` | 6 | Base operativa. Pico en junio ⇒ el brief entra sep–ene, margen suficiente |

**Fase 2 — meses 7–12. Hasta 12 URLs geográficas totales.**

`/orquestas-para-fiestas-patronales/castilla-y-leon` · `/la-rioja` · `/euskadi` · `/musica-para-bodas/emporda` · `/artistas-para-eventos-de-empresa` (pilar) + `/barcelona` · las páginas de proceso restantes.

**Fase 3 — meses 13–24. Hasta 24 URLs geográficas.**

Se abre Madrid (bodas y empresa) **sólo si se ha resuelto E** · C. Valenciana · Cataluña *festa major* · Sierra de Madrid · Toledo · Sevilla.

**Fase 4 — meses 25–36. Techo: ~37 URLs geográficas.**

| Eje | Fase 1 | Fase 2 | Fase 3 | Techo |
|---|---|---|---|---|
| **Fiestas** (territorio) | 2 | 5 | 9 | **14** |
| **Bodas** (comarca/ciudad) | 1 | 2 | 8 | **15** |
| **Empresa** (ciudad) | 0 | 1 | 4 | **8** |
| **Bares / privados** | 0 | 0 | 0 | **0** |
| **Total geográficas** | **3** | **8** | **21** | **37** |

**Ritmo máximo, en cualquier fase: 2 geo-páginas por mes, nunca dos en la misma semana.**

---

## 11. Anatomía de una página geográfica que no es contenido duplicado

### 11.1 El objetivo

Que **el 75 % del texto sea imposible de reutilizar** en otro territorio, y que el 25 % de plantilla esté **por debajo** del contenido único. Extensión: **1.400–2.000 palabras**. Menos no compite; más es relleno y baja el ratio de unicidad.

### 11.2 Plantilla A · Territorio de fiestas patronales

```
1. H1 + entradilla con la palabra local .................. 100 % único
2. Cómo funciona una fiesta aquí ......................... 100 % único
3. El calendario: tabla de 40-80 municipios .............. 100 % único
4. Quién contrata y cómo (proceso local) ................. 60 %
5. Qué se contrata: charanga / orquesta / tributo / DJ ... 60 %
6. Presupuesto real de un programa de fiestas ............ 60 %
7. El caso propio ........................................ 100 % único
8. Logística: acceso, escenario, potencia, montaje ....... 60 %
9. Desplazamiento y honestidad ........................... plantilla
10. FAQ: 3 locales + 2 genéricas ......................... 60 %
11. Cierre + brief precargado ............................ plantilla
12. Enlaces laterales (máx. 3) ........................... plantilla
```

**1 · H1 + entradilla.** H1: `Txarangas y orquestas para fiestas patronales en Navarra`. **La palabra local en el H1 es obligatoria**: es la señal de que quien escribe es de aquí o ha trabajado aquí.

> *"En Navarra se dice txaranga, y muchas veces no la contrata el ayuntamiento: la contratan la peña o los quintos, con dinero de barra y de rifa, y cierran en marzo. Si vienes buscando en junio, ya vas tarde para agosto."*

**2 · Cómo funciona una fiesta aquí.** La estructura del día: dianas, pasacalles, vermú, toro, cena, orquesta, disco-móvil. Qué formato entra en cada tramo. **Esto cambia por territorio de verdad y por eso justifica la página.**

**3 · El calendario.** El bloque del §5.4. Entre 40 y 80 municipios con fiesta, patrón, fechas y **mes de cierre de contratación**. Es la sección que hace única la página, la que captura long tail sin crear URLs y la que ningún competidor tiene.

**4 · Quién contrata y cómo.** Comisión vs. peña vs. concejalía. Contrato menor hasta 15.000 €. Qué documentación piden. **Sin este bloque la página es un catálogo con topónimo.**

**5 · Qué se contrata.** Los H2 de tipo de artista, dentro de esta URL y no en otra (regla del §3.3).

**6 · Presupuesto real.** Rangos por formato con la corrección del territorio. Charanga 150–800 € (media ~492 €); orquesta pequeña 6.000–8.000 €, media 12.000–15.000 €, grande hasta 45.000 €. **Y el desglose que nadie publica: escenario, sonido, dietas, SGAE, alojamiento.**

**7 · El caso propio.** Un programa real: pueblo, fiestas, qué se montó, qué falló y cómo se resolvió. Con fotos propias (`txaranga-pasacalles-fiestas-tafalla-2025.webp`).

**8 · Logística.** Acceso de camión a la plaza, medidas de escenario, potencia disponible, quién monta. **Es información que sólo tiene quien ha montado.**

### 11.3 Plantilla B · Comarca de bodas

```
1. H1 + entradilla ....................................... 100 % único
2. Contexto local con dato INE ........................... 100 % único
3. Los sitios: espacios reales, nombrados ................ 100 % único
4. Restricciones reales (decibelios, horarios, acceso) ... 60 %
5. Qué formato encaja aquí (y cuál no) ................... 60 %
6. El caso propio ........................................ 100 % único
7. Quién toca aquí ....................................... 60 %
8. Desplazamiento y honestidad ........................... plantilla
9. Precio con ajuste local ............................... plantilla
10. Cómo funciona (3 pasos) .............................. plantilla
11. FAQ: 3 locales + 2 genéricas ......................... 60 %
12. Cierre + brief precargado ............................ plantilla
13. Enlaces laterales (máx. 3) ........................... plantilla
```

**2 · Contexto local con dato duro.** El dato INE que nadie publica, traducido a consecuencia práctica. Tres ángulos, se eligen dos:

| Ángulo | Qué se dice | Por qué es útil |
|---|---|---|
| Civil vs. religiosa | "el 94 % de las bodas de Girona son civiles" | Determina si hay ceremonia contratable |
| Calendario | "aquí el mes pico es octubre, no junio" | Determina cuándo reservar y qué queda libre |
| Concentración | "el 69 % de las bodas son de mayo a octubre" | Determina con cuánta antelación cerrar |

**3 · Los sitios.** **Es la sección que decide si la página existe.** 6–12 espacios reales, nombrados, agrupados por el **problema musical** que plantean:

> **Masías con vecinos cerca** — Mas X, Mas Y. Limitador y corte a la 1:00 en exterior. Aquí aguanta el trío acústico; la banda completa se queda al 60 % de su volumen útil y no compensa lo que cuesta.
>
> **Espacios grandes sin límite acústico** — Finca Z. Aquí sí entra la banda de siete, y de hecho el espacio se come a un dúo.

Reglas: espacios **reales y verificables**; se nombran pero no se enlazan por defecto (se enlaza sólo donde hay relación real, y es la semilla de link building del §13); no se dice "trabajamos con" si no es verdad; **prohibido copiar la descripción de la web de la finca** — se escribe qué implica *musicalmente*, que es lo que nadie escribe.

**6 · El caso propio.** Sin caso propio, **esta sección se sustituye por una declaración honesta**, no se deja vacía ni se rellena de humo:

> *"Todavía no hemos tocado en el Empordà: nuestras últimas doce bodas han sido en el Vallès y el Maresme. Lo que sabemos de aquí es de haber visitado seis masías y de hablar con dos wedding planners de la zona. Si buscas a alguien con veinte bodas hechas en el Baix Empordà, hay agencias en Palafrugell que lo tienen. Si quieres que te digamos qué formato aguanta tu masía, eso sí lo sabemos."*

Convierte la debilidad en la prueba de honestidad más potente de la web —tono de marca literal— y activa el nivel 1 de la regla de admisión.

### 11.4 Plantilla C · Ciudad de empresa

Misma lógica, con estas diferencias: los "sitios" son hoteles con salón, espacios de convención y auditorios; las restricciones son horarios de hotel, límites de sonido en sala y montaje entre coffee y cena; el caso propio es una cena de empresa o convención; y **se añade un bloque de facturación** (quién emite, IVA, retención, plazos de pago corporativos) que en empresa es objeción de compra real.

### 11.5 El porcentaje de unicidad: la cifra y cómo se mide

| Métrica | Umbral | Cómo se mide |
|---|---|---|
| **Unicidad global del texto** | **≥ 75 %** | Solapamiento de n-gramas (shingles de 8 palabras) contra cada geo-página existente. Script antes de publicar, no a ojo |
| **Unicidad de las primeras 400 palabras** | **100 %** | Ni una frase reutilizada. Cero |
| **`<title>` y meta** | 100 % | No basta con cambiar el topónimo: cambia el gancho |
| **Imágenes propias** | ≥4 por página, **0 de stock** | Una foto de banco en una página de territorio es la confesión de que no has estado |
| **Datos locales verificables** | ≥5 | Municipios con fecha, espacios nombrados, cifra INE, ordenanza, distancia |
| **Enlaces salientes a entidades locales** | 1–3 | Ayuntamiento, ordenanza, web de una finca. Enlazar a fuentes reales es señal de contenido real |

**Por qué se sube del 60 % al 75 %:** el 60 % del plan anterior permite que 4 de cada 10 párrafos sean plantilla. Con tres páginas pasa desapercibido; con veinte, el patrón es visible para cualquier sistema de detección de contenido escalado. Y en dominio nuevo no hay margen para "pasar desapercibido". **75 % es el número que permite llegar a 37 páginas sin cambiar de estrategia a mitad de camino.**

---

## 12. La regla de admisión

### 12.1 Veredicto sobre la regla anterior

> *"Sin evento real hecho ahí, no hay página."*

**Dirección correcta. Formulación defectuosa por dos motivos:**

1. **Es bloqueante y circular.** No se entra en Madrid porque no hay evento en Madrid, y no hay evento en Madrid porque no hay página. Aplicada literalmente congela el proyecto en su comarca de origen para siempre — y Madrid es el mercado #1 de bodas de España.
2. **Es insuficiente.** Un evento hecho en Cuenca no convierte a Cuenca en mercado. Puede haber evento y no haber demanda, ni densidad, ni capacidad de repetir. **La prueba es necesaria pero no suficiente.**

### 12.2 La regla nueva: cuatro obligatorios + dos de cuatro

**Eliminatorios — los cuatro, sin excepción:**

| # | Requisito | Umbral verificable |
|---|---|---|
| **E1** | **Demanda de búsqueda con modificador geográfico** | La consulta `[servicio] + [topónimo]` devuelve ≥3 resultados comerciales dedicados a ese topónimo. **Si el top 10 son sólo directorios nacionales sin página dedicada, la búsqueda no existe con volumen suficiente** |
| **E2** | **Densidad de mercado** | Bodas: ≥25 espacios listados. Fiestas: ≥40 municipios con fiesta documentada. Empresa: ≥1 palacio de congresos o ≥50 sedes corporativas |
| **E3** | **Capacidad de servir sin destrozar el margen** | Desplazamiento ≤3 h por carretera desde donde vive el artista, o artista con base en el territorio. Coste de desplazamiento ≤12 % del caché |
| **E4** | **Conocimiento de campo documentado** | **≥6 datos locales verificables**, de los cuales **≥3 no son de fuente pública** (hay que haber hablado con alguien o haber ido) |

**De refuerzo — al menos dos:**

| # | Requisito |
|---|---|
| **R1** | **Evento propio hecho ahí**, con fotos y —si se puede— frase del cliente *(la regla antigua, ahora en su sitio: el refuerzo más valioso, no el billete de entrada)* |
| **R2** | **Aliado local real**: comisión de fiestas, ayuntamiento, finca, wedding planner, sala o técnico de sonido con relación de trabajo verificable |
| **R3** | **Artista con vínculo con el territorio**: vive ahí, es de ahí, o ha tocado ahí con otro proyecto |
| **R4** | **Ticket o mercado excepcional**: gasto medio CCAA ≥25.000 €, presupuesto municipal en festejos ≥1 M€, o índice de volumen ≥20 (Madrid=100) |

### 12.3 Los tres niveles de existencia geográfica

| Nivel | Qué es | Requisitos | Ejemplo |
|---|---|---|---|
| **0 · Mención** | El territorio aparece **dentro** de otra página: un H3, una fila de tabla, un párrafo. **Sin URL.** | Ninguno | Tafalla dentro de `/…/navarra`. El Maresme dentro de `/…/barcelona` |
| **1 · Página de conocimiento** | URL propia, plantilla completa, **con el bloque de caso propio sustituido por la declaración honesta** | E1–E4 + 2 de refuerzo, **sin exigir R1** | `/musica-para-bodas/madrid` antes del primer evento en Madrid |
| **2 · Página con prueba** | Plantilla completa con caso propio y fotos | E1–E4 + **R1 obligatorio** | `/orquestas-para-fiestas-patronales/navarra` tras la primera temporada |

**La regla del ascenso:** una página de nivel 1 tiene **9 meses** para llegar a nivel 2. Si no hay evento real en ese territorio a los 9 meses, **se despublica y se redirige 301 al pilar**. Sin prórroga. Esto impide que "nivel 1" se convierta en la excusa para clonar 30 páginas sin sustancia.

### 12.4 Cómo se fabrica la prueba antes de tenerla

**Si la prueba local es lo que da derecho a la página, la prueba se compra.**

1. **Se hace un evento a precio de coste en el territorio objetivo.** Una boda de un amigo, las fiestas de un pueblo pequeño, un showcase en una finca. El margen es cero; lo que se compra son las fotos, el caso y el testimonio. **En Madrid, con 29.390 bodas al año, ese evento a pérdida es la inversión de marketing más barata que existe.**
2. **Se visitan 5–6 sitios del territorio en un día.** En bodas, fincas. **En fiestas, la comisión y la peña, que es donde está el dinero y donde nunca va nadie de una agencia.** Tres preguntas que generan el contenido único: ¿a qué hora cortáis?, ¿qué formatos habéis tenido y cuál funcionó?, ¿qué problema se repite? Salen E4, R2 y las semillas de link building a la vez.
3. **Se localiza un artista con vínculo real** (R3). Es lo que hace sostenible el mercado y lo que resuelve E3 de verdad.

**Un viaje de campo por mercado nuevo, antes de escribir. Si no se puede hacer el viaje, ese mercado no está listo. La geografía en SEO no se investiga desde la silla.**

### 12.5 Ficha de admisión (obligatoria, se archiva)

```
TERRITORIO: ______________  Eje: [CCAA|comarca|ciudad]  Segmento: [fiestas|bodas|empresa]

ELIMINATORIOS
E1 Demanda geográfica ......... [ ]  Top 10 revisado el __/__/__:
E2 Densidad de mercado ........ [ ]  Nº espacios/municipios: ____  Fuente:
E3 Capacidad de servir ........ [ ]  Artista: ______  Km: ____  % desplaz./caché: ___%
E4 Conocimiento de campo ...... [ ]  6 datos, 3 no públicos:
    1. ____________________________________  (fuente:              )
    2. ____________________________________  (fuente:              )
    3. ____________________________________  (fuente:              )
    4. ____________________________________  (fuente:              )
    5. ____________________________________  (fuente:              )
    6. ____________________________________  (fuente:              )

TEST DE GRANULARIDAD (§3.4) — respecto al territorio vecino ya cubierto:
  ¿Cambia la palabra? [ ]   ¿Cambia el producto? [ ]   ¿Cambia el procedimiento? [ ]
  Si las tres son NO → NO hay página. Es una fila.

REFUERZO (≥2)
R1 Evento propio [ ]   R2 Aliado local [ ]   R3 Artista vinculado [ ]   R4 Ticket/mercado [ ]

NIVEL ASIGNADO: [0 · 1 · 2]    Fecha límite de ascenso a nivel 2: __/__/____
Fotos propias: ____   Municipios/espacios nombrables: ____
Firma: ______________  Fecha: __/__/____
```

---

## 13. Señales locales sin oficina

### 13.1 La verdad sobre las citations españolas

Valen **mucho menos** de lo que la industria del SEO local vende, y para un SAB sin dirección pública todavía menos: la mitad de su función es confirmar una dirección que aquí no se publica.

**Lo que sí hacen:** consistencia de entidad (12 fuentes diciendo lo mismo ayudan a Google a consolidar la entidad) y alguna visita residual.
**Lo que no hacen:** no mueven el ranking orgánico ni te meten en un pack local que en este vertical apenas se dispara.

**Decisión: se hacen 12, en dos tardes, y no se vuelve a tocar el tema.** Cualquier presupuesto en "500 citations" es dinero quemado.

| # | Directorio | Por qué |
|---|---|---|
| 1 | **Google Business Profile** | El único que importa de verdad |
| 2 | **Apple Business Connect** | Mapas de iPhone. Gratis, cinco minutos, casi nadie del sector lo tiene |
| 3 | **Bing Places** | Alimenta a Bing y, cada vez más, a los asistentes generativos |
| 4 | Páginas Amarillas | Marca reconocida, tráfico propio |
| 5 | QDQ | Fuerte en local, ~75 % de su tráfico es orgánico |
| 6 | Cylex España | Buena indexación |
| 7 | Yelp España | Poco uso aquí, pero consolida NAP |
| 8 | Axesor / eInforma | Señal de negocio real, no de tráfico |
| 9 | LinkedIn Company Page | Imprescindible para el vertical empresa |
| 10 | Instagram Business | Donde vive la prueba visual de este sector |
| 11 | **Bodas.net** (aunque sea el perfil básico) | Es el SERP entero de bodas: aunque no se pueda ganar, hay que estar dentro |
| 12 | **charangas.info / Partfy** | Los directorios del segmento fiestas. Estar donde el comprador ya mira |

**Regla NAP:** nombre `Show Up Events`, **un solo teléfono** (el mismo del GBP y de `/contacto`), sin prefijos locales por provincia, un solo email. Idéntico carácter por carácter, guardado en un documento maestro. **Un teléfono con prefijo local por territorio es simular presencia: no se hace.**

### 13.2 Lo que sí mueve la aguja

En orden de valor por unidad de esfuerzo:

**1 · Ayuntamientos, comisiones de fiestas y programas de fiestas — el mejor activo del proyecto.**
Un enlace desde un `.es` municipal o desde el programa de fiestas digital es de altísima confianza, temáticamente perfecto y prácticamente imposible de conseguir para quien no toca ahí. **Hay que pedirlo antes del evento**, porque después nadie actualiza el programa. Se pide junto con el material: cartel, foto y una línea de descripción del grupo, listos para pegar.
*Objetivo año 1: **4 enlaces municipales o de programa de fiestas**.*

**2 · Fincas, masías, haciendas y salas.**
Un enlace desde una finca en su página de *proveedores recomendados* vale más que doscientos directorios. Se consigue **después** de tocar ahí, dando valor primero: (a) las fotos profesionales de la noche en su espacio con derecho de uso, y (b) una ficha corta de *"qué formatos funcionan en este espacio"* que pueden publicar. El enlace se pide después, con anchor variado.
*Objetivo año 1: 6 enlaces de espacios.*

**3 · Prensa local y comarcal.**
El ángulo **no** es "nueva empresa de contratación de artistas" —eso no lo publica nadie—. El ángulo son **los datos**. Con el material de este documento se construyen notas genuinamente noticiables:

> *"El 94 % de las bodas de Girona ya son civiles, la tasa más alta de España: cómo ha cambiado eso la música de las bodas del Empordà."*
>
> *"Una orquesta grande cuesta hoy hasta 45.000 € por noche, un 30 % más que hace tres años: qué está pasando con la programación de las fiestas en [territorio]."*

Es verdad, es dato público, y nadie lo ha contado así. **Ese es el link building honesto: se genera la noticia, no se compra el enlace.**
*Objetivo año 1: 3 apariciones comarcales.*

**4 · Las webs de los propios artistas.**
Enlace editorial desde su sección de contratación. **Nunca en el footer** (patrón de red) y con anchors variados. Es el enlace más fácil del proyecto y el primero que hay que cerrar.

**5 · Wedding planners.** Pocos enlaces, pero leads directos y cualificados. *Objetivo: 3 relaciones, 2 enlaces.*

**6 · Asociaciones y clusters.** Gremios de espectáculos, asociaciones de empresarios de bodas, clusters MICE. Cuota baja, enlace institucional permanente.

### 13.3 Plan trimestral

| Trimestre | Objetivo | Acciones |
|---|---|---|
| **T1** | Base de entidad | GBP + 12 citations. Documento maestro de NAP. Enlaces desde las webs de todos los artistas. |
| **T2** | Primeros enlaces locales | Viaje de campo al territorio #2. 5 comisiones/fincas visitadas. Primera nota de prensa con datos. |
| **T3** | Prueba social | Sistema de reseñas rodando (12 reseñas). 2 enlaces de espacio. 1 aliado local. |
| **T4** | Consolidación | 4 enlaces municipales + 6 de espacio acumulados. 3 apariciones comarcales. 25 reseñas. Auditoría NAP. |

**Total realista año 1: 15–20 dominios enlazantes.** Todos reales, todos temáticamente relevantes, ninguno penalizable — y sitúan al proyecto por delante del 90 % de las plantillas que hoy ocupan el SERP geográfico de este sector.

---

## 14. Escalado: de 3 a 37 sin que se caiga el castillo

### 14.1 Por qué se caen los castillos

No mueren por publicar muchas páginas. Mueren por tres cosas, en este orden:

1. **Se publica más rápido de lo que se puede investigar.** La página 12 se escribe sin viaje de campo, y a partir de ahí todas son plantilla.
2. **Se publica en bloque.** Ocho URLs el mismo día es un patrón de generación masiva.
3. **No se poda.** Las páginas que no funcionan se quedan, el ratio de páginas útiles del dominio cae, y arrastra a las buenas.

### 14.2 Las cuatro fases y sus puertas

Ninguna fase empieza hasta que la anterior pasa **su gate completo**, evaluado en Search Console y no por sensación.

| Fase | Meses | Geo-páginas | Gate para pasar |
|---|---|---|---|
| **1 · Prueba** | 1–6 | **3** | ≥2 de 3 con impresiones crecientes 3 meses seguidos · ≥1 con clics de orgánico · **≥1 brief o llamada atribuida al contenido de proceso** |
| **2 · Validación** | 7–12 | **8** | ≥5 de 8 en top 20 para su keyword geográfica · ≥4 briefs geo acumulados · CTR medio ≥2 % · **la plantilla ya se ejecuta en <6 h de trabajo** |
| **3 · Expansión** | 13–24 | **21** | ≥12 de 21 con tráfico · CAC por brief geo inferior al de Ads · ≥2 territorios nuevos con evento propio · proceso documentado |
| **4 · Escala** | 25–36 | **37** | Sólo si el mes 24 cierra con ≥15 briefs geo/año y equipo capaz de sostener 2 territorios nuevos por trimestre |

### 14.3 Qué hay que industrializar

En la fase 1 cada página se hace a mano y tarda dos semanas. Si en la fase 3 sigue tardando dos semanas, no hay fase 3. **Se industrializa el proceso de investigación, nunca el texto.**

| Activo | Qué es | Cuándo |
|---|---|---|
| **Ficha de admisión** (§12.5) | Formulario que obliga a tener los datos antes de escribir | Fase 1 |
| **Base de datos de fiestas** | Municipio, fiesta, patrón, fechas, quién contrata, cuándo cierra, histórico. **El activo más valioso del proyecto a 3 años, por delante de las páginas** | **Desde el día 1** |
| **Base de datos de espacios** | Espacio, zona, tipo, aforo, hora de corte, límite dB, acceso, potencia, contacto, si hemos tocado | Desde el día 1 |
| **Guion del viaje de campo** | Las 8 preguntas que se hacen siempre. Salida: 6 datos locales garantizados | Fase 1 |
| **Script de unicidad** | Solapamiento de 8-gramas contra todas las geo-páginas. **Bloquea la publicación si <75 %** | Fase 2 |
| **Kit fotográfico** | 20 fotos por noche, nombradas con la convención, geolocalizadas. Sin fotos no hay nivel 2 | Fase 1 |
| **Calendario de publicación por temporada** | Fiestas: publicar ago–nov para la ventana ene–mar. Bodas: 5–6 meses antes del pico provincial. Empresa: en junio | Fase 2 |

### 14.4 La poda

Auditoría **semestral** de todas las geo-páginas:

| Situación a los 9 meses | Acción |
|---|---|
| Tráfico + briefs | Se amplía: más municipios en la tabla, segundo caso, FAQ nueva |
| Impresiones sí, clics no | Problema de `title`/meta. Se reescribe la entrada. Otros 6 meses |
| Impresiones planas o en caída | **Contenido insuficiente.** Se reescribe entera o se fusiona con el territorio vecino |
| Nivel 1 sin ascender a nivel 2 | **301 al pilar.** Sin prórroga |
| Cero impresiones a los 12 meses | **301 al pilar y fuera del sitemap.** No se conserva "por si acaso" |
| **Dos páginas compitiendo por las mismas consultas** | **Fusión inmediata.** La perdedora se redirige |

> **Una geo-página muerta no es neutra: consume crawl budget, baja el ratio de páginas útiles del dominio y es una prueba a favor de quien quiera argumentar que esto es una granja.** Se borra.

### 14.5 Cuándo se acelera — y cuándo no

**Se acelera con las tres a la vez:** (1) una geo-página ya publicada llega a top 5 en su keyword principal; (2) hay artistas con base en ≥3 territorios distintos; (3) producir una geo-página completa baja de **6 horas** sin bajar del 75 % de unicidad.

**No se acelera nunca por:**
- Que un competidor tenga 52 landings provinciales. Las tiene porque las clonó, y eso deja de funcionar cada core update.
- Que haya presupuesto. El cuello de botella no es dinero: es investigación de campo y fotos reales.
- Que la IA permita generar 30 textos en una tarde. Es exactamente el escenario que la política de *scaled content abuse* está diseñada para castigar. **La IA sirve para estructurar y editar los datos de la ficha de admisión; no para inventarlos.**

### 14.6 KPIs geográficos

| KPI | Cómo se mide | Objetivo año 1 |
|---|---|---|
| **Briefs y llamadas desde geo-páginas y contenido de proceso** | GA4 + registro manual de llamadas | **≥8** |
| Impresiones geográficas | Search Console, filtro por carpeta | Crecimiento MoM ≥15 % desde el mes 5 |
| Keywords geo en top 20 | Search Console, consultas con topónimo | ≥12 |
| Ratio de unicidad medio | Script propio | ≥75 % |
| Dominios enlazantes locales | Ahrefs / Search Console | 15–20 |
| Reseñas GBP | Panel GBP | 25 con ≥4,7 |
| Filas de la base de datos de fiestas | Interno | **≥400 municipios** |
| **Coste por brief geo vs. coste por lead en Ads** | Contabilidad | El SEO geo tiene que ser más barato en el mes 12. Si no, el modelo no escala |

---

## 15. Fiestas vs. bodas: cuál da resultados antes

**Encargo directo. Respuesta directa: fiestas patronales, y no está reñido.**

| Criterio | Fiestas patronales | Bodas |
|---|---|---|
| **Fuerza del SERP rival** | **Débil.** charangas.info lista 4 charangas para toda Navarra; Partfy no nombra ni una fiesta concreta | **Muy fuerte.** Bodas.net con 41.000–65.000 proveedores y una década de autoridad |
| **Tiempo hasta primeras impresiones** | **2–4 meses** | 5–7 meses |
| **Tiempo hasta primer lead orgánico** | **4–6 meses** | 8–12 meses |
| **Páginas necesarias** | 14 territorios + 4 de proceso = **18** | 15 comarcas + pilar + satélites = **~25** |
| **Ticket** | 500 € (charanga) a 45.000 € (gran orquesta). Programa completo 10.000–120.000 € | 800–6.000 € |
| **Recurrencia** | **Altísima.** La misma comisión contrata cada año, y el pueblo de al lado pregunta | Cero. Nadie se casa dos veces contigo |
| **Encaje con el roster** | **Máximo.** Es literalmente lo que hay en la agenda | Bueno, pero no diferencial |
| **Estacionalidad** | **Brutal y rígida.** Se contrata ene–mar o no se contrata | Repartida, con picos provinciales distintos |
| **Techo de mercado** | Finito: 8.131 municipios, comprador identificable | Prácticamente infinito: 175.364 bodas al año |
| **Riesgo** | Mercado en concentración (Galicia 2025 en "recesión": menos verbenas, más discomóvil) | Competencia inexpugnable en head terms |

**La lectura estratégica:**

> **Fiestas patronales es el motor de arranque. Bodas es el motor de crucero. Se encienden los dos, pero en ese orden.**

- **Fiestas trae caja y prueba social en el año 1**, que es lo que permite financiar y documentar todo lo demás. Y su contenido de proceso (`cómo contrata un ayuntamiento`) es la pieza de mejor relación esfuerzo/ingreso de todo el proyecto: cero competencia, comprador con presupuesto público, y ciclo anual predecible.
- **Bodas es el activo que sostiene el negocio a cinco años**, porque el volumen es infinitamente mayor y la demanda no es estacional en el mismo sentido. Pero tarda, y quien lo ponga primero se quedará sin gasolina antes de ver el retorno.
- **Y hay una sinergia que no hay que desperdiciar:** el mismo trío que toca en el cóctel de una boda del Empordà en septiembre está en la verbena de un pueblo de Navarra en agosto. **El roster es el mismo; lo que cambia es la página que lo vende.** Eso es exactamente lo que permite atacar dos segmentos a la vez sin duplicar estructura de costes.

**Regla de asignación de esfuerzo, año 1: 60 % fiestas, 30 % bodas, 10 % empresa. Cero bares, cero privados.**

---

## 16. Apéndice: schema geográfico

**Página de ciudad** — `Service` con `City`:

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Contratación de música en directo para bodas",
  "provider": { "@id": "https://showupevents.es/#organization" },
  "areaServed": { "@type": "City", "name": "Barcelona",
    "containedInPlace": { "@type": "AdministrativeArea", "name": "Cataluña" } },
  "url": "https://showupevents.es/musica-para-bodas/barcelona"
}
```

**Página de comarca o de territorio** — `AdministrativeArea`, nunca `City`:

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Contratación de txarangas y orquestas para fiestas patronales",
  "provider": { "@id": "https://showupevents.es/#organization" },
  "areaServed": { "@type": "AdministrativeArea", "name": "Navarra",
    "containedInPlace": { "@type": "Country", "name": "España" } },
  "url": "https://showupevents.es/orquestas-para-fiestas-patronales/navarra"
}
```

**La tabla de calendario** se marca como tabla HTML semántica (`<table>`, `<caption>`, `<th scope>`). **No** se marca como `Event`: son fiestas de terceros y las fechas son orientativas. Marcar como `Event` lo que no organizas ni puedes garantizar es pedir un problema.

**Prohibido en geo-páginas:** `LocalBusiness`, `Place` con `address`, `geo` con coordenadas de un territorio donde no hay establecimiento, y `Offer`/`PriceSpecification` con cachés (varían por fecha, formato y sitio: los rangos van en texto). **Afirmar presencia física falsa es lo único de este documento que puede considerarse engaño y no se hace.**

---

## Fuentes

- [INE · Estadística de Matrimonios, tabla 37641: matrimonios por provincia de residencia, mes y forma de celebración](https://www.ine.es/jaxiT3/Tabla.htm?t=37641) — datos 2024, extraídos vía API el 31/07/2026
- [INE · MNP Estadística de Matrimonios, últimos datos](https://www.ine.es/dyngs/INEbase/es/operacion.htm?c=Estadistica_C&cid=1254736176999&menu=ultiDatos&idp=1254735573002)
- [Google · Gestionar las zonas de servicio de empresas de servicios locales e híbridas](https://support.google.com/business/answer/9157481?hl=es)
- [Google · Requisitos de las empresas y directrices sobre propiedad](https://support.google.com/business/answer/13763036?hl=es)
- [Google · Lineamientos para la representación de tu empresa en Google](https://support.google.com/business/answer/3038177?hl=es-419)
- [Google · Gestionar tu categoría empresarial](https://support.google.com/business/answer/7249669?hl=es)
- [RicketyRoo · Location Pages: What Crosses the Line to Doorway Abuse & Spammy Content?](https://ricketyroo.com/blog/location-page-spam/)
- [Laura Alfonso · Incremento de las desverificaciones y suspensiones en las fichas de Google Business Profile](https://www.lauraalfonso.com/ficha-gbp/suspensiones-verificaciones/)
- [CaixaBank Research · Vamos de verbena: las cifras de las orquestas de verano](https://blog.caixabank.es/blogcaixabank/orquestas-verano-dimension-economica/)
- [El Economista · España en fiestas: el impacto millonario de la industria de las verbenas de verano](https://www.eleconomista.es/actualidad/noticias/13504850/08/25/espana-en-fiestas-el-impacto-millonario-de-la-industria-de-las-verbenas-de-verano.html)
- [Diario de Pontevedra · Las orquestas gallegas entran en "recesión"](https://www.diariodepontevedra.es/articulo/galicia/orquestas-entran-recesion/202506021447301393409.html)
- [Economía 3 · Fiestas populares en España: ¿cuánto gastan los ayuntamientos?](https://economia3.com/2024/08/06/612257-espana-y-las-fiestas-populares-cuanto-gastan-los-ayuntamientos-en-festejos/) — datos del Ministerio de Hacienda 2023
- [Charangas.info · Charangas y txarangas en Navarra](https://www.charangas.info/charangas-en-navarra) — análisis competitivo
- [Partfy · Listado de charangas](https://partfy.com/charanga) — análisis competitivo y rangos de precio
- [PortalFiestas · 16.872 fiestas populares registradas](https://www.portalfiestas.com/) — dimensión del calendario festivo español
- [Derecho Local · Contratación de conciertos por el ayuntamiento: ¿contrato menor o procedimiento negociado sin publicidad?](https://derecholocal.es/consulta/contratacion-de-conciertos-por-el-ayuntamiento-contrato-menor-o-procedimiento-negociado-sin-publicidad)
- [Administrativando · Contratos menores en la Ley de Contratos del Sector Público](https://administrativando.es/contratos-menores/) — umbral de 15.000 € en servicios
- [Hosteltur · España coloca 57 ciudades en el ranking ICCA de turismo de congresos](https://www.hosteltur.com/170520_espana-coloca-57-ciudades-en-el-ranking-icca-de-turismo-de-congresos.html)
- [Nexotur · ICCA publica su lista de ciudades líderes en turismo de congresos en 2024](https://nexotur.com/icca-publica-su-lista-de-ciudades-lideres-en-turismo-de-congresos-en-2024/)
- [SGAE · Licencias para bares](https://licencias.sgae.es/Home/Bares) y [Nexho · Licencia para música en directo en tu local](https://www.somosnexho.com/musica-en-directo-maximiza-posibilidades-local) — evidencia del segmento hostelería
- [Gigstarter · Contratar música en vivo para bares](http://www.gigstarter.es/occasions/bar) — análisis competitivo del segmento salas
- [OKDiario · Cuánto cuesta una boda en España en 2025](https://okdiario.com/economia/este-dinero-que-cuesta-boda-espana-2025-muy-poca-gente-lo-imagina-14726541) y [Felizia · Cuánto cuesta una boda en España 2025](https://felizia.es/blog/bodas/cuanto-cuesta-una-boda-en-espana-2025) — gasto medio por CCAA
- [SE Ranking · Los 15 mejores directorios locales para SEO en 2025](https://seranking.com/es/blog/directorios-locales/)
- [Romuald Fons · SEO Local: guía para posicionar en el Local Pack](https://romualdfons.com/seo-local-desde-cero/)
