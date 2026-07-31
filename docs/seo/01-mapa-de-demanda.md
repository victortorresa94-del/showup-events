# Show Up — Mapa de demanda del sector

> **Documento 01 de la serie SEO.** Sustituye y amplía la sección 1 de `docs/04-arquitectura-seo.md`.
> Aquí no se decide arquitectura ni URLs: aquí se decide **qué busca la gente, cuánta gente, cuándo y con qué palabras exactas**.
> Todo lo demás (árbol de URLs, interlinking, schema) se construye encima de esto.

---

## 0. Cómo leer este documento

### 0.1 De dónde salen los datos

No hay Ahrefs ni Semrush en este proyecto todavía, y decirte un número exacto de volumen que no puedo verificar sería exactamente lo que hace el resto del sector. Así que esto es lo que se ha hecho:

| Método | Qué aporta | Fiabilidad |
|---|---|---|
| **Observación de SERP** (quién rankea, con qué tipo de página, cuántos anuncios hay) | La señal más honesta de dinero: si hay 4 anuncios de pago sobre el orgánico, hay demanda comercial real | **Alta** |
| **Taxonomía de los agregadores** (Espectalium, Partfy, Celebrents, La Factoría del Show, Artistealo, Bodas.net) | Un agregador solo crea una categoría si le entra tráfico. Su árbol de categorías **es** el mapa de demanda del sector | **Alta** |
| **Existencia de página en Cronoshare** (`/cuanto-cuesta/X`) | Cronoshare crea páginas de precio por volumen de solicitudes reales. Si existe `/cuanto-cuesta/charanga`, hay demanda de precio de charanga | **Alta** |
| **Lenguaje de foros** (comunidad.bodas.net) y bloques de FAQ de los que ya rankean | Las palabras literales, no las que usaría un profesional | **Alta** para redacción, **nula** para volumen |
| **Estacionalidad estructural** (INE, calendario litúrgico, ciclo presupuestario municipal) | Cuándo se busca. Es lo más fiable de todo porque no depende de Google | **Muy alta** |
| **Bandas de volumen estimadas** | Orden de magnitud | **Media.** Validar con Keyword Planner antes de comprometer presupuesto |

### 0.2 La escala de volumen que se usa aquí

Los números exactos no importan. Lo que importa es **en qué banda está una keyword**, porque la banda determina la estrategia.

| Banda | Búsquedas/mes (España, es-ES) | Qué significa para un dominio nuevo |
|---|---|---|
| **A · Muy alto** | > 5.000 | Cerrado. Aquí no se entra en 12 meses. |
| **B · Alto** | 1.000 – 5.000 | Objetivo de año 2. Se ataca por cola, nunca de frente. |
| **C · Medio** | 300 – 1.000 | Ganable en 8–14 meses con contenido superior. |
| **D · Bajo** | 100 – 300 | **La zona de trabajo del año 1.** |
| **E · Nicho** | 10 – 100 | Ganable en 3–6 meses. Convierte brutal. Aquí está el negocio. |
| **F · Residual** | < 10 | Solo si es parte de un patrón replicable (geo, nombre de artista). |

> **Regla de Romuald aplicada:** con dominio de 0 autoridad, todo el plan del año 1 vive en las bandas **D y E**. Cualquiera que te venda la banda A el primer año te está vendiendo humo. El 20% de páginas que te va a dar el 80% del tráfico convertible del año 1 son páginas de banda D/E con intención comercial.

### 0.3 La regla que ordena todo el documento

> **Volumen sin intención es tráfico. Intención sin volumen es dinero.**

`canciones para la entrada de la novia` tiene 20 veces más volumen que `cuánto cuesta una orquesta para las fiestas del pueblo`. La segunda vale 40 veces más. Todo el documento está ordenado por esa lógica, no por volumen.

---

## 1. Racimo completo de keywords por intención

### 1.1 TRANSACCIONAL — quien va a contratar ya

Señal de intención: verbo de contratación (`contratar`, `alquilar`, `buscar`), o sustantivo de servicio + destinatario (`para bodas`, `para eventos`).

#### 1.1.1 Cabecera de música y eventos (bandas A–B)

| Keyword | Banda | Quién manda en el SERP | ¿Atacar en año 1? |
|---|---|---|---|
| grupos musicales para bodas | A | Bodas.net, Supermúsica, Fillevents | No |
| música para bodas | A | Bodas.net, agregadores | No |
| musicos para bodas | A | Bodas.net, Supermúsica | No |
| contratar artistas para eventos | A | Espectalium, ContratarArtistas | No |
| artistas para eventos | A | Espectalium, La Factoría del Show | No |
| dj para bodas | B | Bodas.net, DJs individuales, Cronoshare | Solo por comparativa |
| grupos de versiones | B | Partfy, Celebrents, La Factoría | Sí, por cola |
| orquestas para bodas | B | Bodas.net, agencias gallegas | Solo por cola |
| música en directo para bodas | B | Mixto: agregadores + bandas propias | **Sí (pilar)** |
| grupo de música para bodas | B | Bodas.net | Por cola |
| animación para eventos | B | Espectalium, Partfy | No (vertical distinto) |
| espectáculos para eventos | B | Espectalium, Todofiesta | No |
| contratar grupo de música | B | Agregadores | Por cola |

#### 1.1.2 Media y larga: el terreno de juego real (bandas C–E)

| Keyword | Banda | Competencia | Ticket medio | Decisión |
|---|---|---|---|---|
| grupo de versiones para bodas | C | Media | 1.800–3.500 € | **Sí** |
| banda de versiones para bodas | D | Media-baja | 1.800–3.500 € | **Sí** |
| contratar banda para boda | D | Media | 1.800–3.500 € | **Sí** |
| grupo para boda | C | Media | 1.800–3.500 € | **Sí** (variante coloquial, ver 2.1) |
| música en directo para boda | C | Media | — | **Sí** |
| cuarteto de cuerda para boda | D | Media-baja | 600–1.200 € | **Sí** |
| trío de cuerda para boda | E | Baja | 500–900 € | **Sí** |
| violinista para boda | D | Media-baja | 350–700 € | **Sí** |
| saxofonista para boda | E | Baja | 400–800 € | **Sí** |
| cantante para ceremonia de boda | D | Media | 400–900 € | **Sí** |
| música para ceremonia civil | D | Media | — | **Sí** |
| música para ceremonia religiosa | D | Media | 170–1.470 € ¹ | **Sí** |
| coro góspel para boda | E | **Baja** | 900–2.000 € | **Sí. Hueco claro.** |
| dúo acústico para boda | E | Baja | 600–1.200 € | **Sí** |
| solista para cóctel de boda | E | Baja | 600–1.000 € | **Sí** |
| grupo de jazz para boda | E | Baja | 800–1.800 € | **Sí** |
| mariachis para boda | D | Media (nicho consolidado) ² | 450–1.200 € | Evaluar |
| charanga para boda | E | Baja | 400–800 € ³ | **Sí** |
| dj y saxofonista para boda | E | **Muy baja** | 900–1.600 € | **Sí. Formato de moda.** |
| grupo para boda pequeña | E | **Muy baja** | 600–1.500 € | **Sí** |
| música para boda en el campo | E | Muy baja | — | **Sí** |
| música para boda íntima | E | Muy baja | — | **Sí** |

¹ Rango de Cronoshare para música de ceremonia religiosa.
² Nicho con dominios verticales fuertes (mariachis.es). Se entra solo si hay artista real.
³ Rango de charanga: 150–400 €/h de media nacional según Cronoshare.

#### 1.1.3 Empresa (B2B) — menos volumen, más margen

| Keyword | Banda | Competencia | Ticket | Decisión |
|---|---|---|---|---|
| artistas para eventos de empresa | C | Media | — | **Sí (pilar)** |
| música para eventos de empresa | C | Media | 1.500–6.000 € | **Sí** |
| grupo de música para cena de empresa | D | Media-baja | 1.500–3.500 € | **Sí** |
| contratar monologuista para cena de empresa | D | **Baja** | 700–1.800 € ⁴ | **Sí. Prioritaria.** |
| monologuista para evento de empresa | D | Baja | 700–1.800 € | **Sí** |
| humorista para cena de empresa | D | Baja | 700–2.500 € | **Sí** |
| mago para evento de empresa | D | Media-baja | 800–2.500 € | **Sí** |
| mago para cena de empresa | E | **Baja** | 800–2.500 € | **Sí** |
| espectáculo para cena de empresa | D | Media-baja | — | **Sí** |
| animación para cena de empresa | D | Media | — | Sí |
| música para cóctel de empresa | E | Baja | 600–1.500 € | **Sí** |
| grupo de música para convención | E | **Muy baja** | 2.000–6.000 € | **Sí** |
| artistas para convenciones de empresa | E | Muy baja | — | **Sí** |
| música para inauguración de local | E | Muy baja | 500–1.500 € | Sí |
| música para presentación de producto | E | Muy baja | — | Sí |
| dj para fiesta de empresa | D | Media | 600–1.800 € | Sí |
| contratar artista fiesta de empresa | E | Baja | — | **Sí** |
| espectáculo para aniversario de empresa | E | **Muy baja** | 2.000–8.000 € | **Sí** |
| música para gala benéfica | F | Muy baja | — | Solo como sección |
| conferenciante y humorista para convención | F | Muy baja | 3.000–15.000 € | Solo como sección |

⁴ Show de 45–60 min para cena de empresa: 700–1.800 €. Monologuistas televisivos: +3.000 €.

#### 1.1.4 Fiestas patronales, verbenas y ayuntamiento (B2G) — el territorio vacío

| Keyword | Banda | Competencia | Ticket | Decisión |
|---|---|---|---|---|
| contratar orquesta para fiestas | D | **Baja** | 3.000–15.000 € | **Sí (pilar)** |
| orquestas para fiestas patronales | D | **Baja** | 3.000–15.000 € | **Sí** |
| contratar orquesta para verbena | E | **Muy baja** | 3.000–12.000 € | **Sí** |
| orquestas para verbenas | D | Baja (fuerte en Galicia) | 3.000–15.000 € | **Sí** |
| grupos para fiestas de pueblo | D | Baja | 1.500–8.000 € | **Sí** |
| contratar grupo para fiestas del pueblo | E | **Muy baja** | 1.500–8.000 € | **Sí** |
| bandas tributo para fiestas patronales | E | **Muy baja** | 2.500–9.000 € | **Sí** |
| contratar charanga | D | Baja | 400–900 € | **Sí** |
| charanga para fiestas | E | Muy baja | 400–900 € | Sí |
| pasacalles para fiestas | E | **Muy baja** | 400–1.200 € | Sí |
| espectáculos para ayuntamientos | E | **Muy baja** | — | **Sí. Hueco.** |
| contratar artistas para ayuntamiento | F | **Casi nula** | — | **Sí** |
| programación de fiestas patronales | E | Muy baja | — | **Sí (informacional B2G)** |
| espectáculo infantil para fiestas del pueblo | E | Muy baja | 500–1.500 € | Sí |
| verbena llave en mano | F | **Nula** | 6.000–30.000 € | **Sí. Territorio virgen.** |
| orquesta con escenario y sonido incluido | F | Nula | 6.000–25.000 € | **Sí** |

#### 1.1.5 Privados y celebraciones familiares

| Keyword | Banda | Competencia | Decisión |
|---|---|---|---|
| contratar mago para comunión | D | Media-baja | **Sí** |
| animación para comunión | C | Media | Sí |
| mago para cumpleaños | C | Media | Evaluar (ticket bajo) |
| contratar mago infantil | C | Media | Evaluar |
| música para bautizo | E | Baja | Sí (satélite) |
| grupo de música para cumpleaños | D | Media-baja | Sí |
| música para aniversario de bodas | E | **Muy baja** | **Sí** |
| música para bodas de oro | F | **Casi nula** | **Sí. Ticket sorprendente.** |
| contratar artista para fiesta privada | D | Media-baja | Sí |
| música para cena en casa | F | Nula | No |
| serenata sorpresa | E | Baja | Evaluar |
| contratar grupo para despedida de soltera | E | Baja | No (margen bajo) |

#### 1.1.6 Patrón geográfico (multiplicador, no keywords sueltas)

El patrón es `[servicio] + [modificador local]`. No es una lista de keywords: es una **plantilla que multiplica todo lo anterior**. Las combinaciones que existen de verdad:

| Patrón | Ejemplo | Banda típica | Nota |
|---|---|---|---|
| `[servicio] + en + [capital de provincia]` | `grupos para bodas en Sevilla` | D–E | Existe en las ~25 primeras ciudades |
| `[servicio] + [provincia]` | `orquestas Pontevedra` | E | Existe en las 50 |
| `[servicio] + en + [zona con nombre de mercado]` | `música para bodas en el Empordà` | E–F | **La mejor relación intención/competencia del mapa** |
| `[servicio] + [comunidad autónoma]` | `orquestas Galicia` | D | Solo tiene sentido en verbenas |
| `[servicio] + cerca de mí` | `grupos de música cerca de mí` | C | **Depende de Google Business Profile, no de contenido** |

**Zonas con nombre propio de mercado** (donde la zona bate a la provincia): Empordà, Costa Brava, Penedès, Sierra de Madrid, La Alcarria, La Rioja Alavesa, Aljarafe, Ribera del Duero, Valle del Jerte, Marina Alta, Maresme, Bierzo, Rías Baixas.

---

### 1.2 COMERCIAL — quien está evaluando (aquí está el año 1)

Señal: la búsqueda contiene una **decisión pendiente** (precio, comparación, criterio, cantidad). Es la banda donde un dominio nuevo puede ganar porque el SERP está ocupado por contenido genérico.

#### 1.2.1 Precio — el hueco más grande del sector

Este bloque merece atención especial. **Cronoshare tiene página de precio para casi todas estas categorías y rankea con contenido genérico, sin desglose por contexto.** Ese es exactamente el hueco: nadie da rangos honestos con el porqué.

| Keyword | Banda | Quién rankea hoy | Ganable |
|---|---|---|---|
| cuánto cuesta contratar música para una boda | C | **Cronoshare** (media nacional 300–700 €) | **Sí** |
| cuánto cuesta un grupo de música para una boda | C | Cronoshare + blogs de bandas | **Sí** |
| precio grupo de música boda | D | Bandas individuales | **Sí** |
| cuánto cuesta una orquesta para una boda | D | Blogs de orquestas | **Sí** |
| cuánto cuesta un dj para una boda | C | Cronoshare (`/cuanto-cuesta/contratar-dj-fiestas-bodas`) | **Sí** |
| cuánto cobra un grupo de música por actuación | D | Foros, blogs de músicos | **Sí** |
| cuánto cuesta contratar un mago | D | Cronoshare | **Sí** |
| precio mago para eventos | D | Magos individuales | **Sí** |
| cuánto cuesta un monologuista | D | **Cronoshare** (media 370 €, habitual 200–600 €) | **Sí** |
| precio monologuista cena de empresa | E | Casi nadie | **Sí. Muy fácil.** |
| cuánto cuesta contratar una charanga | D | Cronoshare (150–400 €/h) | **Sí** |
| cuánto cuesta contratar una orquesta para las fiestas | E | **Nadie con criterio** | **Sí. El más fácil del mapa.** |
| cuánto cuesta contratar un mariachi | D | mariachis.es (dominio vertical) | Difícil |
| cuánto cuesta contratar un artista famoso | D | Peculiar, Espectalium | **Sí, con matices** (ver §6) |
| caché de un grupo de música | E | Blogs de músicos | **Sí** |
| qué incluye el caché de un grupo | F | **Nadie** | **Sí** |
| cuánto cuesta la música de una boda en total | E | Nadie | **Sí** |
| presupuesto música boda | D | Bodas.net (calculadora) | Parcial |
| cuánto cuesta un cuarteto de cuerda | E | Nadie con criterio | **Sí** |
| precio banda tributo | E | Agregadores | **Sí** |
| cuánto cuesta traer un cantante conocido al pueblo | F | **Nadie** | **Sí. Muy alta intención B2G.** |

#### 1.2.2 Comparación y criterio de elección

| Keyword | Banda | Competencia | Nota |
|---|---|---|---|
| dj o grupo en directo para la boda | D | **Baja** | Comparativa pura. Imán de enlaces. |
| qué es mejor dj u orquesta para una boda | E | Baja | Variante literal |
| orquesta o grupo de versiones | E | **Muy baja** | Duda real del comité de fiestas |
| cuántos músicos necesito para mi boda | E | **Muy baja** | Pregunta de brief perfecta |
| qué formato de música elegir para una boda | E | Muy baja | — |
| grupo de versiones o tributo | F | Nula | — |
| mago de cerca o mago de escena | F | **Nula** | Diferenciador de criterio |
| monologuista o humorista para empresa | F | Nula | — |
| mejor música para cena de empresa | D | Media (blogs de catering) | **Sí** |
| qué contratar para la cena de Navidad de empresa | D | Blogs genéricos de RRHH | **Sí. Estacional.** |
| ideas para amenizar una cena de empresa | C | Blogs de teambuilding | Sí |
| qué espectáculo poner en las fiestas del pueblo | E | **Nadie** | **Sí** |
| cómo elegir el grupo de música de la boda | D | Bodas.net, La Factoría | **Sí** |
| qué preguntar antes de contratar un grupo de música | E | **Casi nadie** | **Sí** |
| cómo saber si un grupo de música es bueno | F | Nadie | **Sí** |
| errores al contratar música para una boda | E | Pocos | **Sí** |
| mejores grupos de versiones de España | D | Listicles de agregadores | Evaluar |
| agencias de contratación de artistas España | E | Espectalium, Tuset | **Sí (navegacional-comercial)** |

#### 1.2.3 Reviews, alternativas y comparación de proveedores

| Keyword | Banda | Nota |
|---|---|---|
| opiniones bodas.net proveedores música | E | Alta intención, contenido delicado |
| alternativas a bodas.net | E | **Hueco. Encaja con el posicionamiento anticatálogo.** |
| gigstarter opiniones | E | Marca de tercero, comparativa legítima |
| supermúsica opiniones | F | Idem |
| agencia de artistas o contratar directo | F | **Nadie.** Artículo de sinceridad brutal que encaja con la marca |
| merece la pena una agencia de espectáculos | F | Idem |

---

### 1.3 INFORMACIONAL — tráfico de captación

Volumen alto, conversión baja, pero **construye la autoridad temática** que hace posible rankear lo comercial. Nunca es prioridad 1, y nunca se publica antes que su pilar.

#### 1.3.1 Boda — repertorio y momentos (el mayor volumen del mapa)

| Keyword | Banda | Nota |
|---|---|---|
| canciones para la entrada de la novia | A | Volumen enorme, conversión ~0. Solo cuando haya autoridad |
| canciones para el cóctel de boda | B | Idem |
| música para el baile nupcial | B | Idem |
| canciones para la ceremonia civil | B | Idem |
| canciones para bailar en una boda | B | — |
| música para la entrada de los novios al banquete | C | — |
| canciones para la salida de la iglesia | C | — |
| repertorio para boda | C | — |
| música para el vals de los novios | C | — |
| canciones emotivas para una boda | B | — |
| música para el ramo | D | — |
| playlist boda española | C | — |
| qué música poner en la barra libre | D | — |
| canciones que no pueden faltar en una boda | B | — |

> **Decisión:** este subcluster es **año 2**. Es el más competido en volumen puro y el que peor convierte. Publicarlo antes de tener el pilar comercial es gastar recursos en visitas que no dejan un euro.

#### 1.3.2 Organización y logística de boda (convierte mejor)

| Keyword | Banda | Nota |
|---|---|---|
| con cuánta antelación se contrata la música de una boda | D | **Alta señal de compra.** Los que ya rankean dicen 10–12 meses |
| cuándo reservar la música de la boda | D | Variante |
| cómo organizar el timing musical de una boda | E | **Nadie lo hace bien** |
| cuánto dura la actuación de un grupo en una boda | E | Muy baja competencia |
| qué necesita un grupo de música en una boda | E | Rider en cristiano |
| qué es un rider técnico | D | Informacional puro |
| hace falta permiso para música en directo en una boda | E | **Nadie.** Duda real |
| límite de decibelios en bodas al aire libre | E | **Nadie.** Diferenciador brutal de criterio |
| hay que pagar SGAE en una boda | D | **Duda muy buscada, mal respondida** |
| quién paga la SGAE en un evento | D | Idem |
| música en directo en exterior hasta qué hora | E | Nadie |
| qué pasa si llueve el día de la boda con la música | F | Nadie |
| contrato de actuación musical modelo | D | **Hueco. Descargable = imán de enlaces y leads** |

#### 1.3.3 Empresa

| Keyword | Banda | Nota |
|---|---|---|
| ideas para una cena de empresa | B | Volumen alto, competido |
| cómo organizar una cena de empresa | B | Blogs de catering y hoteles |
| ideas para el evento de Navidad de la empresa | C | Estacional |
| actividades para una convención de empresa | C | Teambuilding domina |
| cómo hacer que la gente no se vaya pronto de la cena de empresa | F | **Nadie. Es literalmente el copy de la marca.** |
| qué hacer después de la cena de empresa | E | — |
| protocolo cena de empresa con dirección | F | Nadie |
| cómo se factura una actuación artística a una empresa | E | **Nadie.** B2B, resuelve el miedo administrativo |
| retenciones de artistas factura | D | Fiscal, alta intención B2B |

#### 1.3.4 Fiestas y ayuntamiento

| Keyword | Banda | Nota |
|---|---|---|
| cómo organizar las fiestas de un pueblo | D | **Casi nadie con criterio** |
| presupuesto fiestas patronales ayuntamiento | E | Nadie comercial |
| qué necesita un ayuntamiento para contratar una orquesta | F | **Nadie. Cero competencia.** |
| contrato menor actuación musical ayuntamiento | E | Portales jurídicos, no comerciales |
| fraccionamiento del contrato actuaciones musicales | F | Jurídico puro. **Oportunidad de autoridad.** |
| seguro de responsabilidad civil para un concierto | E | **Nadie del sector artístico** |
| permisos para montar un escenario en la plaza | F | Nadie |
| SGAE fiestas patronales ayuntamiento | E | Duda real, mal resuelta |
| cómo se hace una programación de fiestas | F | Nadie |

#### 1.3.5 Curiosidad y cultura (tráfico frío, uso limitado)

`qué es una verbena` · `origen de las fiestas patronales` · `historia de las orquestas gallegas` · `diferencia entre orquesta y grupo de versiones` · `qué es una charanga` · `qué es un pasacalles`.

> **Decisión:** solo `diferencia entre orquesta y grupo de versiones` merece página, porque es criterio de compra disfrazado de curiosidad. El resto, no.

---

### 1.4 NAVEGACIONAL

Cuatro subtipos, y solo dos son accionables.

| Subtipo | Ejemplos | Banda | Acción |
|---|---|---|---|
| **Marca propia** | `show up events`, `showup events`, `show up artistas`, `show up eventos` | F hoy → C en 24 meses | Se construye, no se caza. GBP + consistencia NAP + contenido citable |
| **Marca de competidor** | `espectalium`, `bodas.net música`, `partfy`, `celebrents`, `gigstarter`, `supermúsica`, `la factoría del show`, `artistealo`, `contratarartistas` | C–D cada una | **Solo vía comparativa honesta**, jamás vía landing "alternativa a X" clonada |
| **Marca de artista propio** | `las doce grupo`, `[nombre banda] contratar`, `[nombre] bolos` | E–F | **La ficha de artista es la única forma legítima de capturarlo.** Es tráfico gratis y de altísima conversión |
| **Marca de artista de terceros** | `contratar a [famoso]` | Ver §6 | Tratamiento aparte |

**Long tail navegacional que se subestima:** `[nombre del artista] + precio`, `[nombre] + caché`, `[nombre] + contacto`, `[nombre] + contratar`, `[nombre] + bodas`. Cada artista del catálogo genera 5–8 de estas. Con 6 artistas son ~40 keywords de banda F que **suman** y que convierten al 20–40 %, porque quien busca a alguien por su nombre ya ha decidido.

---

## 2. Long tail de verdad: las preguntas literales

### 2.1 Cómo escribe la gente (y cómo escribe el sector)

La brecha entre el lenguaje del sector y el del cliente es el mayor arbitraje de este mapa. El sector escribe *"grupos musicales para bodas"*. La novia escribe *"grupo para boda"*, en singular, sin adjetivo.

| Lo que escribe el sector | Lo que escribe la persona | Quién rankea la versión de la persona |
|---|---|---|
| grupos musicales para bodas | **grupo para boda**, **grupo para mi boda** | Nadie específicamente |
| música en directo para bodas | **musica en directo boda** (sin tilde, sin "para") | Agregadores por coincidencia |
| contratar grupo de versiones | **grupo que toque de todo** | **Nadie** |
| orquesta para fiestas patronales | **orquesta para las fiestas del pueblo** | **Nadie** |
| animación infantil | **algo para entretener a los niños en la boda** | Nadie |
| monologuista corporativo | **alguien que haga reír en la cena de empresa** | Nadie |
| solución integral de espectáculos | **que me lo organicen todo** | Nadie |

> **Consecuencia práctica:** cada página debe contener **las dos versiones**. El H1 lleva la del sector (es la que tiene volumen medible); un H2 y el cuerpo llevan la de la persona. Ejemplo: H1 `Música en directo para bodas`, H2 `¿Grupo, dúo o DJ? Qué encaja en tu boda`, y dentro del texto, literalmente, *"si lo que buscas es un grupo para tu boda que toque de todo…"*.

### 2.2 Preguntas de "People Also Ask" y bloques FAQ observados

Extraídas de los bloques de preguntas de los que hoy rankean (Cronoshare, Bodas.net, blogs de bandas y agencias):

**Boda — precio**
1. ¿Cuánto cuesta contratar música para una boda religiosa?
2. ¿Cuál es la diferencia entre contratar un DJ y un grupo musical para una boda?
3. ¿Cuándo debo contratar la música para mi boda?
4. ¿Es mejor la misma formación musical para ceremonia y cóctel?
5. ¿Cuánto cuesta una orquesta para una boda de 100 personas?
6. ¿Cuánto se le da de propina a los músicos de una boda?
7. ¿El precio incluye el equipo de sonido?
8. ¿Cobran más por tocar en exterior?
9. ¿Cuánto tiempo tocan? ¿Cuántos pases hacen?
10. ¿Hay que darles de cenar a los músicos?

**Boda — decisión y logística**
11. ¿Cuántos músicos necesito para 120 invitados?
12. ¿Se puede tener grupo en la ceremonia y DJ en la fiesta?
13. ¿Qué pasa si el grupo se pone malo?
14. ¿Hay que firmar contrato con el grupo de música?
15. ¿Cuánto hay que dar de señal?
16. ¿Se puede cambiar el repertorio?
17. ¿Pueden tocar una canción concreta que le pida?
18. ¿A qué hora tienen que dejar de tocar?
19. ¿Necesito permiso del ayuntamiento para música en directo?
20. ¿Quién paga la SGAE, yo o la finca?

**Empresa**
21. ¿Cuánto cuesta un monologuista para una cena de empresa?
22. ¿Cuánto dura un monólogo para una cena de empresa?
23. ¿Qué monologuista es apropiado si va a estar la dirección delante?
24. ¿Se puede pedir que no haga chistes de un tema concreto?
25. ¿Cómo se factura la actuación? ¿Con qué retención?
26. ¿Es mejor mago o monologuista para una cena de empresa?
27. ¿Cuándo hay que reservar la cena de Navidad de empresa?
28. ¿Qué se hace después de la cena para que no se vaya la gente?

**Fiestas y ayuntamiento**
29. ¿Cuánto cuesta una orquesta para las fiestas del pueblo?
30. ¿Qué incluye el caché de una orquesta de verbena?
31. ¿El ayuntamiento tiene que poner el escenario?
32. ¿Se puede contratar una orquesta por contrato menor?
33. ¿Cuánto es el límite de un contrato menor de servicios?
34. ¿Hace falta pliego para contratar un concierto?
35. ¿Quién paga la SGAE en las fiestas patronales?
36. ¿Qué seguro hace falta para un concierto en la plaza?
37. ¿Con cuánta antelación hay que cerrar las orquestas de las fiestas?

**Magia e infantil**
38. ¿Cuánto cuesta un mago para una comunión?
39. ¿Cuánto dura un espectáculo de magia infantil?
40. ¿Qué diferencia hay entre magia de cerca y magia de escena?
41. ¿El mago trae su propio equipo de sonido?
42. ¿A partir de qué edad funciona la magia con niños?

### 2.3 Lenguaje literal de foros

De hilos de `comunidad.bodas.net` (*"Orquesta o grupo??"*, *"Precio musica???"*, *"Orquestas buenas para contratar en boda?"*) y de reseñas reales de proveedores:

| Frase literal detectada | Qué revela | Cómo se usa |
|---|---|---|
| *"¿orquesta o grupo?"* | **La duda nº1 y nadie la ha resuelto bien.** Ni siquiera saben que son cosas distintas | Página propia. Debe explicar la diferencia sin condescendencia |
| *"un dúo malo empieza en 300 € y una orquesta buena en 1.200 €"* | El usuario razona en **calidad × precio**, no en formato | El desglose de precio debe tener eje de calidad, no solo de tamaño |
| *"el vocalista no apareció y el sustituto no se sabía las canciones"* | **El miedo real, literal, en una reseña real** | Es la justificación entera de la Garantía Show Up. Copiar la estructura del miedo, no la reseña |
| *"nos costó 1.500 € y fueron fantásticos"* | Los precios se comparten en foros. **Un rango honesto genera confianza inmediata** | Confirma la estrategia de precio abierto |
| *"que la gente no se siente en toda la noche"* | El brief real no es musical | Ya está en el copy deck. Debe estar también en los H2 |

> **Nota de método:** los foros de bodas.net y los hilos de Reddit/Forocoches sobre el tema son **inagotables como fuente de redacción, y cero como fuente de volumen**. No se planifica con ellos: se escribe con ellos.

### 2.4 Patrones de autocompletado a explotar

Plantillas que generan long tail de forma sistemática. Cada una vale como sección H2 dentro de una página existente, **no como página nueva**:

- `cuánto cuesta [artista] para [ocasión]` → 6 tipos × 5 ocasiones = 30 combinaciones
- `[artista] para boda de [N] personas` → 50 / 100 / 150 / 200 / 300
- `[artista] barato` / `[artista] económico` → tráfico de precio bajo; se capta y se reeduca
- `mejor [artista] para [ocasión]`
- `[artista] cerca de mí` → **no es contenido, es Google Business Profile**
- `contratar [artista] última hora` / `para dentro de dos semanas` → **oro puro: urgencia máxima, cero competencia, margen alto**

> `contratar grupo de música última hora` y `boda dentro de un mes sin música` son de banda F, pero convierten como ninguna otra y encajan literalmente con la promesa de marca. Merecen una sección en el pilar y un bloque en el brief.

---

## 3. Estacionalidad mes a mes

### 3.1 Los cuatro relojes del sector

No hay una estacionalidad: hay cuatro, y solo una de ellas se parece a lo que la gente asume.

| Reloj | Cuándo pasa el evento | Cuándo se BUSCA | Desfase |
|---|---|---|---|
| **Boda** | May–oct (≈55 % en may, jun, sep + 1ª q. oct) | **9–14 meses antes** | Gigantesco |
| **Empresa / Navidad** | 1ª quincena de diciembre | **Sep–nov**, con adelanto a jul-ago | 2–4 meses |
| **Fiestas patronales / verbena** | Jun–sep (jul-ago: ~2.500 fiestas solo en Galicia) | **Ene–abr** (ciclo presupuestario municipal) | 4–7 meses |
| **Comunión** | **Mayo** (fines de semana 2-3, 9-10, 16-17, 23-24, 30-31 en 2026) + primeras de junio | **Ene–mar** | 2–4 meses |

> **Esta tabla es la que manda en el calendario editorial.** El contenido debe estar **posicionado**, no publicado, cuando llega el pico de búsqueda. Con dominio nuevo eso significa publicar **5–6 meses antes del pico de búsqueda**, que a su vez está meses antes del evento. En la práctica: para captar la cena de Navidad de 2026, el contenido tenía que estar online en **junio**.

### 3.2 Mes a mes

| Mes | Qué se busca con fuerza | Qué se busca de fondo | Nota |
|---|---|---|---|
| **Enero** | **Pico anual de organización de boda** (efecto pedidas de Navidad/Nochevieja) · orquestas para fiestas patronales (arranca el ciclo municipal) · animación para comunión | Precios de todo | **El mes más importante del año.** Se decide el proveedor de una boda de septiembre |
| **Febrero** | Boda (alto) · fiestas patronales (alto) · comuniones | Precio, comparativa | Continuación del pico |
| **Marzo** | Boda (alto) · **cierre de comuniones de mayo** · fiestas patronales | Repertorio | Última llamada para comuniones |
| **Abril** | Boda (medio-alto) · fiestas patronales (cierre) · Semana Santa deprime todo una semana | Logística, timing | Abril es temporada baja de verbena |
| **Mayo** | **Comuniones se ejecutan** · bodas de última hora de junio · fiestas de mayo | Urgencia | Búsquedas de urgencia: `para dentro de dos semanas` |
| **Junio** | Boda de urgencia · **verbenas se ejecutan** · fin de curso | Repertorio, timing | **Mes de PUBLICAR contenido de Navidad de empresa** |
| **Julio** | Ejecución pura (bodas + verbenas) · búsqueda baja | — | Valle de búsqueda. Mes de producción de contenido |
| **Agosto** | Ejecución · **valle absoluto de búsqueda** | — | No publicar nada crítico. Mes de trabajo técnico |
| **Septiembre** | **Arranca fuerte cena de empresa** · bodas de 2027 · vuelta al cole | Ideas para evento de empresa | Segundo arranque del año |
| **Octubre** | **Pico de cena de empresa** · bodas 2027 | Qué contratar, precio | Aquí se decide diciembre |
| **Noviembre** | **Cierre de cena de empresa** · urgencias de diciembre | Urgencia, disponibilidad | `contratar monologuista última hora` |
| **Diciembre** | Ejecución de empresa · **pedidas de mano** · fin de año | Nada comercial | Preparar el asalto de enero |

### 3.3 Calendario editorial derivado

La regla: **publicar 5 meses antes del pico de búsqueda de esa keyword.**

| Publicar en | Contenido | Pico que persigue |
|---|---|---|
| **Junio–julio** | Cena de Navidad de empresa (qué contratar, cuánto cuesta, monologuista vs mago) | Sep–nov |
| **Agosto–septiembre** | Todo el cluster de boda (pilar, precio, DJ vs grupo, antelación) | **Ene–mar** |
| **Agosto–septiembre** | Cluster de comunión y celebraciones familiares | Ene–mar |
| **Septiembre–octubre** | Cluster de fiestas patronales, ayuntamiento, contrato menor, verbena llave en mano | **Ene–abr** |
| **Noviembre–diciembre** | Landings de ciudad de boda (refuerzan el pico de enero) | Ene–jun |
| **Enero–marzo** | Contenido de repertorio y momentos de boda (informacional, año 2) | Perenne |
| **Abril–mayo** | Actualización anual de todas las páginas de precio | Todo el año |

> **La página de precios se actualiza cada año en abril**, con el año en el `<title>`. Es la única concesión a la fecha en el título, y está justificada: `Cuánto cuesta un grupo de música para una boda (2027)` gana CTR frente a un resultado sin año, y Google premia la frescura en consultas de precio.

### 3.4 Ventana de urgencia — el activo que nadie explota

Existe un flujo constante y contraestacional: **quien se ha quedado sin artista**. Bodas a 3 semanas, monologuistas que cancelan en noviembre, orquestas que se caen en agosto.

| Keyword | Cuándo pica | Competencia |
|---|---|---|
| contratar grupo de música última hora | Abr–jun, nov | **Nula** |
| boda en un mes sin música | May–jun | Nula |
| sustituir grupo de música que ha cancelado | Todo el año | **Nula** |
| orquesta disponible para el sábado | Jul–ago | Nula |
| monologuista disponible en diciembre | Nov–dic | Nula |

Volumen ridículo. Conversión altísima. Y es **exactamente la promesa de marca** (*Aparecemos. Si no lo tenemos, lo buscamos*). Una sola página, `/urgencias` o una sección dentro del pilar con un H2 literal, cubre las cinco.

---

## 4. Demanda por tipo de artista

### 4.1 Matriz de decisión

Puntuación 1–5. **Prioridad = (Volumen + Ticket + Recurrencia) − (Competencia × 1,5)**. Es decir: se penaliza la competencia por encima de todo, porque el dominio no tiene autoridad.

| Tipo de artista | Volumen | Competencia | Ticket | Recurrencia | **Prioridad** | Veredicto |
|---|---|---|---|---|---|---|
| **Grupo de versiones / orquesta de baile** | 5 | 5 | 4 | 3 | **4,5** | Pilar obligado. Se ataca por cola |
| **Monologuista / humorista** | 3 | **2** | 3 | 4 | **7,0** | **La mejor del mapa.** SERP flojo, B2B, repite cada año |
| **Mago** | 4 | 3 | 3 | 3 | **5,5** | Muy buena. Dos mercados distintos (adulto/infantil) |
| **Orquesta de verbena** | 3 | **2** | **5** | **5** | **10,0** | **La mejor por ticket.** B2G, contrato recurrente anual |
| **Banda tributo** | 3 | 3 | 4 | 3 | **5,5** | Buena. Encaja en fiestas y empresa |
| **DJ** | 5 | 5 | 2 | 2 | **1,5** | **No atacar de frente.** Mercado atomizado, ticket bajo |
| **Cuarteto / trío de cuerda** | 2 | **2** | 2 | 2 | **3,0** | Fácil de ganar, poco dinero. Satélite, no pilar |
| **Coro góspel** | 2 | **1** | 3 | 2 | **5,5** | **Hueco puro.** Alta emoción, cero competencia |
| **Charanga / pasacalles** | 3 | **2** | 2 | **4** | **4,0** | Buena. Recurrente en fiestas. Ticket bajo pero fácil |
| **Cuentacuentos / infantil no mago** | 2 | 3 | 1 | 3 | **1,5** | **No.** Ticket bajo, mercado de animación, otra industria |
| **Mariachi** | 3 | 4 | 2 | 2 | **1,0** | **No.** Dominio vertical consolidado (mariachis.es) |
| **Solista de piano / jazz para hotel** | 2 | **2** | 2 | **5** | **6,0** | **Infravalorada.** Contrato de temporada, no evento suelto |
| **Tributo a artista concreto** | 3 | 3 | 4 | 3 | **5,5** | Ver §6: la keyword es de marca ajena |
| **Artista famoso** | 4 | 4 | **5** | 1 | **4,0** | Ver §6 |

### 4.2 Las tres conclusiones que cambian el plan

**1. La música no es la mejor puerta de entrada SEO. La magia y el humor, sí.**
La taxonomía de Espectalium lo confirma: pone *Monologuistas* como primera categoría del menú, por delante de *Músicos*. Un agregador con años de datos no ordena su menú por gusto. Y aun así, `contratar monologuista para cena de empresa` tiene un SERP de banda D con competencia baja. Es la anomalía más rentable del mapa.

**2. La orquesta de verbena es el mejor negocio SEO del sector español, y no lo ha reclamado nadie.**
Ticket de 3.000–15.000 €, cliente institucional que **repite cada año sin licitar de nuevo si quedó contento**, y un SERP ocupado por agregadores genéricos y PDFs de ayuntamientos. Es el único territorio donde una web nueva con contenido honesto puede ser el mejor resultado de Google en 6 meses.

**3. El DJ es una trampa.**
Volumen enorme (73 % de las parejas contratan DJ, según Bodas.net), ticket bajo (200–675 €), y un mercado atomizado en miles de DJs autónomos con web propia y SEO local. Se compite contra 4.000 dominios pequeños en lugar de contra 5 grandes. **Se entra solo por la comparativa** (`dj o grupo en directo`), que es donde Show Up puede decir algo que un DJ no dirá nunca: cuándo el DJ es la opción correcta.

### 4.3 Sub-segmentación por tipo de artista

Cada tipo se rompe en dos o tres mercados con SERP distinto. Confundirlos es el error que comete el sector:

| Tipo | Mercado A | Mercado B | ¿Misma página? |
|---|---|---|---|
| Mago | **Adulto/empresa** — magia de cerca, mentalismo, 800–2.500 € | **Infantil** — comunión y cumpleaños, 85–300 € | **NO.** Intención y ticket incompatibles |
| Monologuista | **Empresa** — 700–1.800 € | **Fiestas municipales** — 1.500–5.000 € | Misma landing, secciones distintas |
| Grupo de versiones | **Boda** — 1.800–3.500 € | **Verbena** — 3.000–9.000 € | **NO.** Repertorio y formato distintos |
| DJ | **Boda** | **Sala/discoteca** | Solo boda tiene demanda de contratación |
| Cuerda | **Ceremonia** | **Cóctel corporativo** | Misma página, dos H2 |

> **Decisión recomendada:** separar `magos-para-eventos` (adulto/empresa) de `magos-para-comuniones-y-cumpleanos` (infantil). Son dos negocios, dos precios y dos SERPs. Mezclarlos es lo que hace que las páginas de los agregadores no rankeen bien en ninguno de los dos.

---

## 5. Demanda B2B y B2G

Es la demanda que menos volumen tiene, menos competencia tiene y más dinero mueve. Y es **estructuralmente distinta**: el que busca no es el que disfruta, y su miedo no es que la fiesta salga mal, es **que le pidan explicaciones**.

### 5.1 Los cuatro compradores institucionales

| Comprador | Quién es | Qué teme | Qué busca en Google | Ticket | Ciclo |
|---|---|---|---|---|---|
| **RRHH / Office manager** | 28–45, mujer en el 70 % de los casos, no es su trabajo principal | Que su jefe pregunte "¿quién eligió esto?" | Precio, formato, si se factura bien | 1.500–8.000 € | Anual, sep–nov |
| **Concejal de festejos / comisión de fiestas** | Cargo político o vecino voluntario, sin formación en contratación | Auditoría, prensa local, que el pueblo se queje | **Procedimiento legal** antes que artista | 6.000–45.000 € (programa) | Anual, ene–abr |
| **Hotel / sala / resort** | Jefe de F&B o director de alojamiento | Programación irregular, huésped aburrido | Proveedor **de temporada**, no de evento | 400–1.200 €/actuación × 20–40 fechas | Trimestral / temporada |
| **Agencia de eventos / wedding planner** | Profesional que subcontrata | Que le falles a ella delante de su cliente | Fiabilidad, rider, respuesta rápida | Variable | Continuo |

### 5.2 Qué busca un ayuntamiento (el más valioso y el peor atendido)

El concejal de festejos **no busca artistas primero**. Busca **cómo hacerlo sin meterse en un lío**. Ese es el descubrimiento central de este mapa.

| Keyword | Intención real | Competencia | Quién rankea |
|---|---|---|---|
| contrato menor actuación musical | "¿Puedo contratar sin licitar?" | Baja | Portales jurídicos municipales |
| límite contrato menor servicios 2026 | Idem | Media | Blogs jurídicos |
| fraccionamiento del contrato actuaciones musicales | "¿Me van a pillar?" | **Muy baja** | Derecholocal.es |
| pliego de prescripciones técnicas actuación musical | "Necesito el documento" | **Muy baja** | PDFs de ayuntamientos |
| cómo contrata un ayuntamiento una orquesta | Todo lo anterior junto | **Casi nula** | **Nadie** |
| CPV servicios artísticos de orquestas | Búsqueda técnica de funcionario | Nula | Plataforma de Contratación |
| certificado de estar al corriente para contratar con la administración | Trámite | Media | AEAT, gestorías |
| seguro de responsabilidad civil espectáculos públicos | Requisito legal | Baja | Correduría de seguros |
| SGAE fiestas patronales quién paga | Duda económica real | Baja | Foros municipales |
| catálogo de espectáculos diputación | Vía de financiación | **Muy baja** | Diputaciones |
| subvención para contratar espectáculos ayuntamiento | Dinero disponible | **Muy baja** | BOP, diputaciones |

> **La jugada:** una página que explique en cristiano **cómo contrata un ayuntamiento una actuación**, con los umbrales, el modelo de pliego, la documentación exigible y las vías de financiación provincial (Circuito 107 de Sevilla, Red Cultural de Guadalajara, Diputació a Escena de Castellón, E-catàleg de Tarragona, Culturama de Málaga, Red Andaluza de Teatros Públicos), es **contenido que ningún competidor va a escribir** porque a ninguno le apetece. Es enlazable desde webs municipales y prensa local, cero competencia, y lo lee alguien con presupuesto firmado.

### 5.3 Qué busca una empresa

| Keyword | Banda | Competencia | Nota |
|---|---|---|---|
| artistas para eventos de empresa | C | Media | Pilar |
| espectáculo para cena de empresa | D | Media-baja | — |
| qué contratar para la cena de Navidad de empresa | D | **Baja** | Estacional, publicar en junio |
| animación para convención de empresa | D | Media | Teambuilding compite |
| música para evento corporativo | D | Media | — |
| **cómo se factura una actuación artística** | E | **Muy baja** | **Miedo administrativo real** |
| **retención IRPF artistas factura** | D | Media (gestorías) | Alta intención B2B |
| **quién emite la factura de un grupo de música** | F | **Nula** | Duda real de RRHH |
| contratar artistas con factura | E | **Muy baja** | Filtro de proveedor serio |
| proveedor de espectáculos homologado | F | Nula | Empresas grandes |
| presupuesto artistas evento empresa | E | Baja | — |
| ideas para el evento de fin de año de la empresa | D | Media | Estacional |

> **Diferenciador brutal para B2B:** el sector no habla de facturación, retenciones ni seguros. RRHH sí piensa en eso. Una sección honesta de *"cómo se paga esto y qué papeles vas a recibir"* dentro del pilar de empresa gana la venta antes de hablar del artista. Y hay un documento en el proyecto (`fiscalidad-musica-espana`) que permite escribirla con criterio real.

### 5.4 Qué busca un hotel o una sala

**El hostelero apenas busca en Google**, y esa conclusión del documento 04 se confirma. Pero se matiza:

| Búsqueda | ¿Existe? | Quién la hace |
|---|---|---|
| contratar grupo para mi bar | **No con volumen** | — |
| música en directo [ciudad] | Sí, pero **la intención es "dónde ir"**, no "a quién contrato" | Público, no hostelero |
| músicos para hoteles | **Sí, banda E** | Cadenas hoteleras y F&B. Espectalium tiene página propia |
| animación hotelera empresa | Sí, banda D | Cadenas. Mercado de *staffing*, no de artistas |
| programación musical para hotel | F | Muy pocos, pero **muy cualificados** |
| pianista para hotel | E | **Recurrente, contrato de temporada** |

> **Corrección al documento 04:** el vertical de hostelería no es *"cero SEO"*. Es *"cero SEO de sala y bar, pero sí micro-SEO de hotel"*. `músicos para hoteles` y `pianista para hotel` son búsquedas reales de banda E-F que un competidor grande (Espectalium) ya cubre con página propia — señal de que le entra tráfico. **Una sola página, no un cluster.** El resto del vertical sigue siendo outbound.

---

## 6. Keywords de marca de terceros: `contratar [famoso]`

### 6.1 La demanda existe y es alta

Espectalium organiza su menú de monologuistas **por nombre propio**: Leo Harlem, Grison, Luis Piedrahita, Carlos Latre, Goyo Jiménez, Eva Soriano, Agustín Jiménez, Nerea Garmendia. La Factoría del Show tiene una sección `cantantes-famosos`. Peculiar tiene artículos de caché. Nadie hace eso sin datos de tráfico detrás.

**Escala de la demanda:**

| Patrón | Banda por artista | Nota |
|---|---|---|
| `contratar a [monologuista TV]` | D–E | El más buscado del grupo |
| `caché de [artista]` / `cuánto cobra [artista]` | D–E | Intención mixta: curiosidad + compra |
| `[artista] contratar para evento` | E | Compra pura |
| `precio [artista] concierto privado` | F | Compra pura, ticket enorme |
| `contratar [artista] para fiestas patronales` | F | **B2G, ticket 20.000–60.000 €** |

**Rangos de caché documentados:** artistas de pequeño formato (hoteles, bares) 500–3.000 €; artistas nacionales conocidos desde ~20.000 €; grandes figuras internacionales +100.000 €. Monologuistas televisivos +3.000 €.

### 6.2 Legalidad: qué se puede y qué no

La cuestión jurídica está resuelta en la doctrina española y comunitaria sobre uso de marca ajena en buscadores, y se resume en tres reglas:

| Práctica | ¿Legal? | Riesgo |
|---|---|---|
| **Contenido orgánico** que menciona al artista informativamente (`cuánto cuesta contratar a X`, con datos y contexto) | **Sí.** Uso descriptivo/informativo | Bajo |
| Página que **afirma o insinúa representación** que no se tiene (`somos su agencia`, logo, foto oficial) | **No.** Riesgo de confusión sobre el origen | **Alto.** Competencia desleal + derecho de imagen |
| Uso de **fotos oficiales del artista** sin licencia | **No** | **Alto.** Propiedad intelectual + derecho de imagen |
| Keyword de marca ajena en **Google Ads** | **Zona gris.** Legal si no menoscaba la función indicadora de origen y el usuario medio entiende que el anunciante no es el titular | **Medio.** Google acepta la puja pero **no el uso en el texto del anuncio** |
| Meter el **nombre del artista en el `<title>` y H1** de una landing comercial propia | Legal si el contenido es honesto y no simula representación | **Medio.** Es lo que hacen los agregadores |

**Regla práctica que protege la marca:** el nombre del artista puede aparecer **como objeto del contenido**, nunca **como sujeto de la oferta**. Se puede escribir *"Cuánto cuesta traer a un monologuista de televisión a las fiestas de tu pueblo, y qué alternativas hay por la mitad"*. No se puede escribir *"Contrata a Leo Harlem con nosotros"* sin tenerlo.

### 6.3 ¿Merece la pena?

**Para Show Up, en el año 1: parcialmente, y solo en una forma concreta.**

| Enfoque | Veredicto |
|---|---|
| Landing por artista famoso (estilo Espectalium) | **No.** Requiere decenas de páginas finas, roza la simulación de representación, y contradice frontalmente la plataforma de marca (*no somos un catálogo*) |
| Google Ads sobre nombres de famosos | **No.** Coste alto, conversión baja, riesgo legal medio |
| **Una guía honesta de cachés reales del mercado español**, con rangos por categoría (monologuista de TV, artista nacional, tributo, orquesta de primera línea), sin prometer a nadie | **SÍ.** Es contenido informacional de banda D, enlazable, muy compartible, con cero riesgo legal |
| **Página de "el tributo que quieres, o el original"** — comparativa honesta de coste entre traer al artista original y traer su mejor tributo | **SÍ, y es la mejor idea de esta sección.** Captura la búsqueda de marca ajena por la puerta de al lado, es útil de verdad, y **acaba vendiendo lo que Show Up sí tiene** |

> **La jugada elegante:** quien busca `contratar a [famoso] para las fiestas` casi siempre se estrella con el precio. Una página que le diga *"eso cuesta 40.000 € más producción; por 6.000 € tienes esto otro, y esta es la diferencia real que va a notar tu público"* convierte a un buscador frustrado en un lead. Es exactamente el tono de la marca: **recomendar en contra**.

---

## 7. El hueco: las 15 keywords prioritarias para un dominio nuevo

Criterio de ordenación: **(intención comercial × facilidad de rankear) / tiempo hasta el primer euro**. No volumen. Nunca volumen.

| # | Keyword objetivo | Banda | Dif. | Ticket | Meses a top 10 | Por qué está aquí |
|---|---|---|---|---|---|---|
| **1** | cuánto cuesta una orquesta para las fiestas del pueblo | E | **Muy baja** | 3.000–15.000 € | 3–5 | Nadie ha escrito esto con rangos reales. Lo busca quien tiene presupuesto municipal firmado. Ticket más alto del mapa con la competencia más baja. **Es el mejor arbitraje del sector.** |
| **2** | cómo contrata un ayuntamiento una orquesta / contrato menor actuación musical | E–F | **Casi nula** | Indirecto | 3–5 | Cero competencia comercial. Lo lee un concejal. Enlazable desde webs municipales y prensa local: **construye los primeros backlinks reales del dominio** |
| **3** | precio monologuista cena de empresa | E | **Muy baja** | 700–1.800 € | 3–5 | Ciclo de decisión corto, cliente que repite cada año, SERP vacío. La conversión más rápida del plan |
| **4** | cuánto cuesta un grupo de música para una boda | C | Baja-media | 1.800–3.500 € | 5–8 | El hueco clásico: solo Cronoshare con una media nacional (300–700 €) sin desglose por contexto. Volumen decente + intención de compra máxima |
| **5** | contratar monologuista para cena de empresa | D | **Baja** | 700–1.800 € | 5–7 | Transaccional del punto 3. Espectalium lo pone el primero en su menú por algo |
| **6** | dj o grupo en directo para la boda | D | **Baja** | Indirecto | 4–6 | Comparativa que recomienda en contra. Máxima permanencia, máximo CTR, **el mejor imán de enlaces naturales del plan** |
| **7** | orquesta o grupo de versiones (qué diferencia hay) | E | **Muy baja** | Indirecto | 3–4 | La duda literal nº1 de los foros de bodas, sin respuesta decente en Google. Alimenta a #1 y #4 |
| **8** | contratar orquesta para fiestas patronales | D | **Baja** | 3.000–15.000 € | 5–8 | Pilar del cluster B2G. Publicar **antes de octubre**: los ayuntamientos cierran de enero a abril |
| **9** | mago para cena de empresa | E | **Baja** | 800–2.500 € | 4–6 | Sub-segmento correcto (adulto, no infantil). Ticket medio-alto, competencia fragmentada |
| **10** | cuántos músicos necesito para mi boda | E | **Muy baja** | Indirecto | 3–4 | Pregunta de brief convertida en página. Convierte a brief casi directamente. Barata de escribir |
| **11** | música en directo para bodas en [zona con nombre de mercado] | E–F | **Muy baja** | 1.800–3.500 € | 4–7 | El Empordà, la Sierra de Madrid o el Penedès baten a "Barcelona" o "Madrid" en intención y competencia. **Solo con evento real hecho allí** |
| **12** | qué contratar para la cena de Navidad de empresa | D | Baja | 1.500–3.500 € | 5–7 | Estacional puro. **Publicar en junio.** Pico de búsqueda sep–nov |
| **13** | coro góspel para boda | E | **Muy baja** | 900–2.000 € | 3–5 | Alta carga emocional, cero competencia especializada, ticket sano. Nadie lo ha reclamado |
| **14** | hay que pagar SGAE en una boda / quién paga la SGAE en un evento | D | Baja | Indirecto | 4–6 | Duda muy buscada y pésimamente respondida. Contenido de autoridad que da confianza al comprador dubitativo |
| **15** | contratar grupo de música última hora | F | **Nula** | 1.800–3.500 € | 2–4 | Volumen ridículo, conversión brutal, **y es literalmente la promesa de la marca**. Cierra el círculo entre marca y SEO |

### 7.1 Lectura del hueco

Cinco cosas saltan a la vista al mirar la tabla completa:

1. **Nueve de las quince no son de música.** Son de precio, de procedimiento, de criterio o de humor. El sector entero cree que compite por "grupos para bodas" y ha dejado abandonado todo lo demás.

2. **Seis de las quince son B2G.** El ayuntamiento es el cliente peor atendido de España en este sector, y el que más paga. Ningún competidor le habla en su idioma.

3. **El primer euro llega por la 1, la 3 y la 15**, no por la 4. La 4 es la que más volumen tiene y la que más tarda. Empezar por volumen es el error clásico.

4. **Ninguna de las quince es batible por un agregador aunque quiera.** Bodas.net no puede escribir *"con vecinos cerca, la banda completa te da problemas de decibelios"*, porque tiene 5.900 proveedores que se enfadarían. **La ventaja de Show Up no es SEO: es que puede decir la verdad.** El SEO solo la distribuye.

5. **Once de las quince encajan en el pilar de precio.** Es coherente con la plataforma de marca (`Lo que cuesta, antes de que lo preguntes`) y con el copy deck (§8 Precios). **La marca y el SEO piden lo mismo.** Eso casi nunca pasa y hay que aprovecharlo entero.

### 7.2 Lo que NO está en la lista y alguien va a preguntar

| Keyword | Por qué no está |
|---|---|
| `grupos musicales para bodas` | Banda A con Bodas.net delante. No se gana en 12 meses ni con presupuesto |
| `dj para bodas` | Volumen alto, ticket bajo, 4.000 competidores locales. Trampa |
| `canciones para la entrada de la novia` | Volumen enorme, conversión cero. Año 2 |
| `mago para cumpleaños infantil` | Ticket 85–195 €. No paga el coste de adquisición |
| `contratar mariachi` | Dominio vertical consolidado. No se entra sin artista propio |
| `música en directo Madrid` | La intención es "dónde ir a escuchar", no "a quién contrato" |
| `contratar [famoso]` como landing | Riesgo legal y contradicción con la plataforma de marca. Se ataca por la guía de cachés (§6.3) |

---

## 8. Qué hacer con esto mañana

1. **Validar las 15 con Keyword Planner** (cuenta de Google Ads con campaña activa, no la versión limitada) y con una prueba de Ahrefs/Semrush. Las bandas de este documento son estimaciones fundadas; el orden de prioridad no cambiará mucho, los números sí.
2. **Confirmar la #1 y la #2 mirando SERP en modo incógnito y desde geolocalización rural.** Son las dos apuestas fuertes y son las que menos datos duros tienen.
3. **Cruzar este mapa con la capacidad real de servicio.** No se publica una landing de zona sin evento hecho allí (regla del doc 04, sección 2.3), y no se publica una landing de tipo de artista sin al menos un artista de ese tipo al que se pueda llamar el martes.
4. **Bloquear en calendario las dos fechas críticas:** publicar el cluster de fiestas patronales **antes de octubre**, y el de cena de Navidad **en junio**. Si se falla esa ventana, se pierde el año entero.
5. **Montar Google Business Profile ya.** Todo el patrón `[servicio] cerca de mí` y buena parte del geográfico se juega ahí, no en contenido, y tarda semanas en madurar.

---

## Fuentes consultadas

**Precios y demanda**
- [Cronoshare — Cuánto cuesta contratar música para una boda (2026)](https://www.cronoshare.com/cuanto-cuesta/musica-boda) · rangos por formación, FAQ, 172.430 matrimonios/año, 4.085 M€ de sector
- [Cronoshare — Cuánto cuesta contratar monologuistas (2026)](https://www.cronoshare.com/cuanto-cuesta/monologuista) · media 370 €, habitual 200–600 €
- [Cronoshare — Cuánto cuesta contratar una charanga (2026)](https://www.cronoshare.com/cuanto-cuesta/charanga) · 150–400 €/h
- [Cronoshare — Cuánto cuesta contratar a un DJ para fiestas y bodas](https://www.cronoshare.com/cuanto-cuesta/contratar-dj-fiestas-bodas)
- [Bodas.net — Músicos para boda](https://www.bodas.net/bodas/proveedores/musica) · 73 % contratan DJ; antelación recomendada 10–12 meses
- [Kalifornia — Cuánto cuesta contratar una orquesta o grupo de versiones](https://kalifornia.es/cuanto-cuesta-contratar-orquesta-grupo-versiones/)
- [Paul White Band — Cuánto cuesta contratar una banda en España (2026)](https://paulwhiteband.com/cuanto-cuesta-contratar-una-banda-de-musica-para-una-boda-o-evento-en-espana/)
- [Mariachis.es — Guía de precios 2026](https://mariachis.es/guia/blog/cuanto-cuesta-contratar-mariachi)
- [Peculiar — Cuánto cuesta contratar un artista famoso](https://peculiar.es/blog-cuanto-cuesta-contratar-artista-famoso) y [precios y cachés](https://peculiar.es/precios-cantantes-para-fiestas)
- [Espectalium — Cuánto cobra un cantante por concierto](https://www.espectalium.com/cuanto-cobra-un-cantante-por-concierto/)
- [Magos Pingu — precios y tarifas](https://magospingu.es/precios-magos/) · animación infantil 85–195 €

**Lenguaje real de usuario**
- [Foro Bodas.net — "Orquesta o grupo??"](https://comunidad.bodas.net/debates/orquesta-o-grupo--t802135)
- [Foro Bodas.net — "Precio musica???"](https://comunidad.bodas.net/debates/precio-musica--t156834)
- [Foro Bodas.net — "Orquestas buenas para contratar en boda?"](https://comunidad.bodas.net/debates/orquestas-buenas-para-contratar-en-boda--t47997)
- [Opiniones de Grupo Orquesta Élite — Bodas.net](https://www.bodas.net/musica/grupo-orquesta-elite--e53142/opiniones) · reseña literal del miedo real

**Taxonomía y competencia**
- [Espectalium](https://www.espectalium.com/) · árbol de categorías y orden del menú
- [Partfy](https://partfy.com/) · [Celebrents](https://www.celebrents.es/) · [La Factoría del Show](https://www.lafactoriadelshow.com/) · [Artistealo](https://www.artistealo.com/) · [Supermúsica](https://supermusica.es/) · [Gigstarter](https://www.gigstarter.es/) · [Contratar Artistas](https://contratarartistas.com/)
- [Espectalium — Músicos para hoteles](https://www.espectalium.com/animacion-para-eventos-y-fiestas/musicos-para-hoteles/) · confirma demanda del vertical hotelero

**Estacionalidad**
- [INE — Estadística de Matrimonios](https://www.ine.es/dyngs/INEbase/es/operacion.htm?c=Estadistica_C&cid=1254736176999&menu=ultiDatos&idp=1254735573002) y [matrimonios por mes y provincia](https://ine.es/jaxiT3/Tabla.htm?t=37641)
- [Boda.es — Temporada alta vs baja de bodas](https://boda.es/temporada/temporada-alta-vs-baja-bodas) · ≈55 % en may, jun, sep y 1ª q. oct
- [Carmy Atelier — Cuándo son las comuniones en 2026](https://carmy.es/cuando-son-las-comuniones-en-2026/) · fines de semana concretos
- [ILUNION Hotels — Cena de empresa Navidad: cuándo reservo](https://dondedormiresdespertar.es/blog/cena-de-empresa-navidad-cuando-reservo-menu-y-que-tener-en-cuenta/)
- [InfoHoreca — Los 3 días más solicitados para la cena de empresa](https://www.infohoreca.com/noticias/20231023/los-3-dias-mas-solicitados-para-reservar-comida-o-cena-empresa-esta-navidad/)
- [El Español / Quincemil — Cuánto cuesta contratar una orquesta en Galicia](https://www.elespanol.com/quincemil/vivir/fiestas/20250419/cuesta-contratar-orquesta-galicia/1003743713378_0.html) · abril temporada baja, may-jun fechas complicadas
- [Diario de Pontevedra — El boom de las orquestas](https://www.diariodepontevedra.es/articulo/pontevedra/galicia-vive-resurgir-nuevo-boom-orquestas-verano/202308301703371268784.html) · ~2.500 fiestas en jul-ago
- [Orquestas de Galicia](https://www.orquestasdegalicia.es/) · agenda pública de contrataciones

**B2G y contratación pública**
- [Gobierto Contratación — CPV 92312140 Servicios artísticos de orquestas](https://contratos.gobierto.es/cpv/92312140)
- [Derecho Local — Fraccionamiento del objeto del contrato en actuaciones musicales](https://derecholocal.es/consulta/contratacion-de-actuaciones-musicales-de-orquestas-para-fiestas-del-municipio-fraccionamiento-del-objeto-de-contrato)
- [Derecho Local — Contrato menor o negociado sin publicidad para conciertos](https://derecholocal.es/consulta/contratacion-de-conciertos-por-el-ayuntamiento-contrato-menor-o-procedimiento-negociado-sin-publicidad)
- [Diputación de Sevilla — Programas culturales / Circuito 107](https://www.dipusevilla.es/temas/cultura-y-juventud/programas-culturales/)
- [Diputación de Tarragona — E-catàleg](https://oficinatecnicadesubvenciones.es/subvenciones-para-la-contractacion-de-actividades-culturales/)
- [Junta de Andalucía — Catálogo de la Red Andaluza de Teatros Públicos 2026](https://juntadeandalucia.es/boja/2025/118/28)
- [Diputación de Castellón — Diputació a Escena](https://www.dipcas.es/es/actualidad/la-diputaci-n-de-castell-n-promueve-la-cultura-en-el-conjunto-de-la-provincia-con-una-nueva-edici-n-de-diputaci-a-escena)

**Marca y legalidad**
- [Webpositer — ¿Es legal usar marcas registradas como keywords en Ads?](https://www.webpositer.com/blog/utilizar-marcas-registradas-como-keywords-en-google-adwords.html)
- [LetsLaw — Usar la marca de la competencia en Google Ads](https://letslaw.es/en/using-keyword-brand-google-ads/)
- [Eiuris — El uso de marca registrada en Google Ads](https://www.eiurisweb.com/el-uso-de-marca-registrada-en-google-ads/)

---

> **Aviso final, y va en serio.** Todas las bandas de volumen de este documento son estimaciones construidas sobre observación de SERP, taxonomía de competidores y estacionalidad estructural. **No son datos de Keyword Planner.** El orden de prioridad de la sección 7 es sólido porque descansa en competencia e intención —que sí se observan directamente—, pero antes de comprometer un euro de presupuesto hay que validar los volúmenes con herramienta. Cualquiera que te dé un número exacto de búsquedas mensuales sin enseñarte de dónde sale, te lo está inventando.
