# Show Up — Estrategia SEO local y geográfica

> Documento operativo. Sustituye y amplía la sección 2.3 de `04-arquitectura-seo.md`.
> Empresa nueva, dominio sin autoridad, sin local abierto al público, catálogo corto, servicio nacional.
> Todos los datos de nupcialidad son **INE, Estadística de Matrimonios 2024, por provincia de residencia** (tabla 37641, extraída vía API el 31/07/2026). No son estimaciones.

---

## 0. Las nueve decisiones, para quien no lea el resto

1. **Nunca se simula una presencia que no existe.** No hay sedes falsas, ni una ficha de Google por ciudad, ni un teléfono con prefijo local por provincia. La mentira geográfica es lo único de este plan que puede matar el dominio entero.
2. **La ventaja no es estar allí. Es saber de allí.** Se compite con conocimiento de campo verificable (fincas, decibelios, horarios, accesos), no con el topónimo repetido 14 veces.
3. **Google Business Profile: sí, una sola ficha, tipo área de servicio, categoría principal `Agencia de espectáculos`.** Es gratis y hay que tenerla, pero **no es el canal**: en este vertical el pack local casi no se dispara. Rinde en marca, en Maps y como depósito de reseñas, no en `grupos para bodas en Sevilla`.
4. **Se arranca con 3 páginas geográficas. Se llega a 8 en el mes 12. A 30 no se llega antes del mes 30**, y sólo con producción industrializada y prueba real por mercado.
5. **En bodas, la unidad geográfica correcta no es la provincia. Es la comarca o el corredor de fincas.** `Empordà`, `Sierra de Madrid`, `Penedès`, `Aljarafe`, `Ribera del Duero`. La provincia sólo se usa cuando la provincia *es* la marca del mercado (Girona no; Toledo sí).
6. **El suelo de contenido único sube del 60 % al 75 %**, y el 100 % del contenido por encima del pliegue (primeras 400 palabras) es único y no plantillable. El 60 % del plan anterior es demasiado permisivo para un dominio de cero autoridad.
7. **La regla de admisión "sin evento real no hay página" es correcta pero incompleta y bloqueante.** Se sustituye por un sistema de tres niveles con puerta de entrada explícita (cómo se fabrica la prueba antes de tenerla).
8. **Las citations españolas valen poco para ranking y bastante para consistencia.** Se hacen 12 y se dejan de hacer. El link building local real son fincas, wedding planners, salas y prensa comarcal.
9. **El KPI geográfico no es la posición. Es `briefs por página de ciudad / mes`.** Una página de ciudad que no ha traído un brief en 6 meses se reescribe o se borra. No se acumula chatarra.

---

## 1. El dilema estructural: negocio nacional, búsqueda local

### 1.1 El problema, bien planteado

Show Up no tiene radio de servicio. Un trío que sale de Barcelona toca en Zaragoza el sábado y en Girona el domingo. La restricción no es la distancia: es el coste de desplazamiento sobre el margen y la disponibilidad de fecha.

Pero **el cliente no busca así**. Busca:

- `grupos para bodas en Sevilla`
- `música en directo boda Empordà`
- `mago para evento de empresa Madrid`

Es decir: el usuario impone un marco local a un servicio que no lo tiene. Y Google, que sirve al usuario, premia al que se presenta dentro de ese marco.

De ahí nacen las dos tentaciones, y las dos son trampas:

| Tentación | Qué parece | Por qué falla |
|---|---|---|
| **"Somos nacionales, una sola página"** | Honesto, limpio, sin riesgo | Nunca rankea en local. Cede el 100 % de la long tail geográfica —que es exactamente donde un dominio nuevo puede ganar— a plantillas mediocres. Es rendirse con buena conciencia. |
| **"52 landings, una por provincia"** | Escalable, barato con IA | Es la definición literal de *doorway page*. Google la persigue explícitamente desde 2015 y con más eficacia desde el core update de marzo de 2024 y la política de *scaled content abuse*. En un dominio sin autoridad no hay colchón: no pierdes las 52 páginas, pierdes el dominio. |

### 1.2 La doctrina

> **Google no penaliza que tengas muchas páginas de ciudad. Penaliza que esas páginas no le sirvan a nadie que no sea tú.**

La política oficial define la doorway page como el sitio o página creado *"para posicionar por consultas similares, con el objetivo de conducir a los usuarios a una página intermedia que no es tan útil como el destino final"*. La palabra que importa es **útil**. El criterio operativo no es "¿tengo oficina en Sevilla?" —Google no lo sabe ni le importa— sino:

> **¿Un novio de Sevilla que aterriza aquí desde Google se lleva algo que no tenía antes, aunque no nos contrate nunca?**

Si la respuesta es no, la página es una doorway aunque no lo pretendas. Si la respuesta es sí, la página es legítima aunque tu único artista viva a 900 km.

**Los tres tests que decide cada página antes de publicarse:**

**Test 1 — El test de sustitución de topónimo.**
Cambias `Sevilla` por `Valladolid` en todo el texto. ¿Sigue siendo verdad la página? Si sigue siendo verdad, la página no dice nada de Sevilla y no se publica. Este es el filtro más barato y el que más páginas mata.

**Test 2 — El test del párrafo intransferible.**
Toda página geográfica tiene que contener **al menos tres afirmaciones que sólo pueda escribir alguien que ha trabajado ahí**. No opiniones: hechos comprobables. Ejemplos reales del tipo que buscamos:

- *"En las masías del Baix Empordà con vecinos a menos de 200 m, la ordenanza municipal corta la música amplificada en exterior a la 1:00. Si quieres barra hasta las 4, la fiesta se mueve dentro y ahí la banda completa de siete no entra."*
- *"El 26 % de las bodas de Sevilla siguen siendo religiosas —frente al 9 % de Barcelona—. Eso significa ceremonia en iglesia, órgano o cuarteto, y que el grupo entra en el cóctel, no antes."*
- *"En la Sierra de Madrid, en septiembre, el problema no es el volumen: es que a las 23:00 hay ocho grados y el metal se desafina. Los vientos aguantan mal; la cuerda, peor."*

**Test 3 — El test del interlocutor.**
Léele la página a alguien que se casa en esa zona el año que viene. Si no te interrumpe ni una vez para preguntar algo, la página no tiene información: tiene relleno.

### 1.3 La implementación

**Modelo: un solo hub nacional + páginas geográficas por ocasión, colgando del pilar.**

```
/musica-para-bodas                     ← PILAR nacional (autoridad temática)
   ├── /musica-para-bodas/barcelona    ← ciudad
   ├── /musica-para-bodas/emporda      ← zona
   └── /musica-para-bodas/sierra-de-madrid

/artistas-para-eventos-de-empresa
   ├── /artistas-para-eventos-de-empresa/barcelona
   └── /artistas-para-eventos-de-empresa/madrid
```

Se mantiene la convención de `04-arquitectura-seo.md`. **Ninguna página geográfica cuelga de la raíz** (`/barcelona` no existe): el geo modifica al servicio, no al revés. Esto tiene tres efectos:

1. El breadcrumb declara la jerarquía real: `Inicio › Música para bodas › Barcelona`.
2. El pilar recibe enlace de todas sus geo-páginas, que es como se construye la autoridad del pilar.
3. Si mañana hay que borrar una ciudad, se borra sin tocar la arquitectura.

**Seis reglas de implementación que evitan el filtro de doorway:**

| # | Regla | Por qué |
|---|---|---|
| 1 | **Una geo-página tiene que poder rankear por sí sola.** Si sólo existe porque "faltaba esa ciudad", no existe. | Cada URL responde a una consulta con demanda propia, no rellena una matriz. |
| 2 | **Nunca se genera la matriz completa `ocasión × ciudad`.** Barcelona tiene boda y empresa; el Empordà sólo boda; Toledo sólo boda. | La matriz completa es la firma visual del doorway. La asimetría es señal de decisión humana. |
| 3 | **Prohibido el listado de ciudades en el footer.** Máximo 3 enlaces geográficos laterales dentro del cuerpo, y sólo a zonas realmente colindantes. | El footer con 40 topónimos es el patrón que los sistemas antispam detectan primero. |
| 4 | **La declaración de desplazamiento es obligatoria y honesta**, en un bloque visible: de dónde sale el artista, qué supone en coste y en qué casos recomendamos no contratarnos. | Convierte la debilidad (no somos de aquí) en la señal de confianza más fuerte de la página. Y es información que ningún competidor de plantilla da. |
| 5 | **Sin `LocalBusiness` schema en páginas de ciudad.** Se usa `Service` con `areaServed`. | `LocalBusiness` afirma un establecimiento. Afirmarlo sin tenerlo es lo único de este documento que puede considerarse engaño. |
| 6 | **Ninguna geo-página se publica el mismo día que otra.** Mínimo 15 días entre publicaciones geográficas. | Ocho páginas de ciudad publicadas el martes es un patrón de generación masiva. Ocho publicadas en cuatro meses es un negocio creciendo. |

**Y la pieza que resuelve el dilema de fondo:** el pilar nacional no compite con sus geo-páginas porque **ataca otra intención**. El pilar responde *"¿qué música va en una boda y cuánto cuesta?"*. La geo-página responde *"¿quién me toca en mi sitio y qué problemas tiene mi sitio?"*. Son dos preguntas distintas del mismo usuario en dos momentos distintos. Si las dos páginas responden lo mismo, hay canibalización y sobra una.

---

## 2. Google Business Profile sin local abierto al público

### 2.1 ¿Se puede? Sí, y es la configuración correcta

Google contempla exactamente este caso: la **empresa de servicio a domicilio (Service Area Business, SAB)**. Es un perfil sin dirección visible que declara zonas de servicio.

**Requisitos y límites reales (directrices vigentes de Perfil de Empresa):**

| Elemento | Regla |
|---|---|
| Dirección | Se **introduce** en el alta (Google la necesita para verificar y para calcular el centroide) pero se **oculta** al público. Puede ser el domicilio fiscal. |
| Apartados de correos / buzones remotos | **Prohibidos.** Motivo directo de suspensión. |
| Coworkings y oficinas virtuales | Zona roja. Sólo válido si hay rótulo permanente y personal en horario declarado. Para Show Up: **no usar**. |
| Zonas de servicio | Hasta **20**, por ciudad, código postal o región. |
| Radio | El borde del área declarada **no debe superar las 2 horas de viaje** desde la ubicación real. |
| Fichas | **Una sola.** Una ficha por ciudad servida es infracción explícita y la vía más rápida a la suspensión en cadena. |
| Verificación | Vídeo, cada vez más habitual desde 2025. Hay que poder grabar continuo: exterior/entrada → espacio de trabajo → material rotulado → equipo o documentación con el nombre del negocio. |

**El límite de 2 horas es el dato que cambia el plan.** Show Up sirve a toda España, pero **el GBP no puede declararlo**. Si la base está en Barcelona, el área declarable llega razonablemente a Girona, Tarragona, Lleida, Zaragoza y Andorra. Ni Madrid ni Sevilla. Declarar "España" en un SAB es una de las causas típicas de reverificación y suspensión.

> **Conclusión: el GBP cubre tu comarca. El resto de España lo cubre el SEO orgánico. Son dos canales distintos y no se solapan.** Quien te diga que con la ficha vas a salir en el pack de Sevilla te está vendiendo humo.

### 2.2 Categoría

**Principal: `Agencia de espectáculos`** (equivalente ES de *Entertainment agency*).

Es la que mejor describe el negocio real —intermediación artística— y la que Google asocia a las consultas de contratación.

Verificar en el panel el literal exacto antes de guardar; el catálogo español cambia de nombre con frecuencia y algunas categorías tardan meses en traducirse.

**Secundarias (3–5, no más):**

- `Agencia de representación artística` / *Talent agency*
- `Servicio de entretenimiento`
- `Servicio de DJ`
- `Servicio para bodas`

**Categorías que NO se ponen y por qué:**

| Categoría | Motivo del veto |
|---|---|
| `Empresa organizadora de eventos` / *Event management company* | Trae leads de organización integral (catering, decoración, montaje) que no se sirven. Rebaja la relevancia semántica para "contratar artista" y ensucia las métricas de conversión. |
| `Grupo de música` / `Músico` | Show Up no es el artista. Además compite con las fichas de los propios artistas, que sí deben tenerla. |
| `Sala de conciertos`, `Local de eventos` | Implican establecimiento físico visitable. Falso. |

**Regla de oro del nombre:** el nombre de la ficha es `Show Up Events`. Punto. Ni `Show Up Events - Grupos de música para bodas Barcelona`. El *keyword stuffing* en el nombre es la primera causa de suspensión en España y además es denunciable por cualquier competidor con dos clics.

### 2.3 Qué se gana realmente, y qué no

**Lo que NO se gana — y hay que decirlo antes:**

En este vertical, **el pack local casi nunca se dispara**. Consultas como `grupos musicales para bodas Barcelona` devuelven a Bodas.net, Zankyou y agregadores: Google ha clasificado la intención como *búsqueda de proveedor en directorio*, no como *búsqueda de establecimiento cercano*. No hay tres alfileres en un mapa porque el usuario no va a ir a ningún sitio.

Por tanto: **la ficha no te da la keyword transaccional geográfica.** Esa se gana con la geo-página orgánica. Quien construya el plan local alrededor del GBP está optimizando un canal que en este sector apenas existe.

**Lo que sí se gana, y justifica hacerlo el día 1:**

1. **Búsqueda de marca.** Cuando alguien oye el nombre en una boda y busca `show up events`, el panel de conocimiento a la derecha con fotos, teléfono y reseñas es la diferencia entre parecer una empresa y parecer una web. Coste: cero.
2. **Reseñas como activo transversal.** Es el único sitio donde las reseñas son públicas, verificables y no manipulables por ti. Alimentan E-E-A-T, alimentan el cierre comercial y son citables en la web (con enlace a la fuente real, nunca como `AggregateRating` inventado — ver `04-arquitectura-seo.md` §6.5).
3. **Maps en la comarca base.** En un radio de ~2 h sí hay opción de aparecer en `agencia de artistas cerca de mí` y similares. Volumen bajo, intención altísima.
4. **Entidad.** La ficha, con web, teléfono y `sameAs` coherentes, es una de las señales con las que Google consolida "Show Up Events" como entidad. Para un dominio nuevo esto acelera la comprensión del sitio.
5. **Publicaciones y fotos** como canal de frescura: cada evento hecho es una foto con geolocalización real. Barato, y es prueba de actividad.

### 2.4 Riesgos, ordenados por probabilidad

| Riesgo | Probabilidad | Mitigación |
|---|---|---|
| Suspensión por reverificación (SAB en el punto de mira desde 2025) | **Alta** | Tener siempre lista la prueba de vídeo: rótulo, espacio de trabajo, material. Documentación fiscal con la dirección declarada. |
| Suspensión por área de servicio desproporcionada | Media | No declarar "España". Máximo 20 áreas, todas dentro de 2 h. |
| Suspensión por nombre con keywords | Media | Nombre limpio. Y no ceder cuando alguien proponga "mejorarlo". |
| Denuncia de competidor | Media | Es un sector con agencias veteranas. Cumplir literalmente. |
| Pérdida de la ficha y de sus reseñas | Baja pero **catastrófica** | Exportar las reseñas trimestralmente. **No construir dependencia comercial de la ficha.** |

### 2.5 Protocolo de alta (día 1) y de mantenimiento

**Alta:**
- [ ] Ficha única, nombre `Show Up Events`, tipo SAB con dirección oculta.
- [ ] Categoría principal `Agencia de espectáculos` + 3 secundarias.
- [ ] Áreas de servicio: la comarca base + provincias limítrofes dentro de 2 h. Nunca más de 20.
- [ ] Descripción de 750 caracteres con el lenguaje del cliente (`bodas`, `eventos de empresa`, `fiestas patronales`, `música en directo`), sin listas de ciudades.
- [ ] Web → `/` (no a una landing de ciudad). Teléfono único, el mismo de `/contacto`.
- [ ] Servicios dados de alta uno a uno: *Música en directo para bodas*, *Artistas para eventos de empresa*, *Orquestas para fiestas patronales*, *Magos*, *Monologuistas*, *DJ*. Cada uno con descripción propia.
- [ ] Mínimo 12 fotos reales de directo, con `alt` y EXIF geolocalizado si es posible.

**Mantenimiento mensual (30 min):**
- 3–4 fotos nuevas de eventos reales.
- 1 publicación (novedad, artista, guía publicada).
- Respuesta al 100 % de las reseñas en <72 h.
- **Petición de reseña sistemática**: se pide 48 h después del evento, por WhatsApp, con enlace directo, al que contrató y al wedding planner si lo hubo. Objetivo realista año 1: **25 reseñas ≥4,7**.

---

## 3. Priorización de mercados

### 3.1 El modelo de puntuación

Se puntúa cada mercado de 0 a 100 con cuatro factores. **El cuarto es eliminatorio.**

| Factor | Peso | Fuente |
|---|---|---|
| **A. Volumen de demanda** | 35 % | Matrimonios INE 2024 por provincia (real) · congresos ICCA 2024 para el vertical empresa |
| **B. Valor del ticket** | 25 % | Gasto medio de boda por CCAA · renta media · densidad de fincas de gama alta |
| **C. Debilidad competitiva del SERP** | 25 % | Quién ocupa el top 10 con modificador geográfico y con qué calidad de página |
| **D. Capacidad real de servir** | 15 %, **eliminatorio** | ¿Hay artista que llegue? ¿Se ha tocado ahí? ¿El desplazamiento deja margen? |

Un mercado con A=100 y D=0 puntúa **cero**. Madrid es el mejor mercado de España y no entra en fase 1 si no hay quien toque en Madrid.

### 3.2 Los datos duros — matrimonios por provincia, 2024

INE, Estadística de Matrimonios 2024, provincia de residencia. Índice normalizado con Madrid = 100.

| # | Provincia | Matrimonios 2024 | Índice | % religiosas | Mes pico | % en may–oct |
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

Total nacional 2024: **175.364 matrimonios**, +1,7 % sobre 2023. 84 % civiles.

**Cuatro lecturas que ningún competidor está usando y que son contenido único por sí solas:**

1. **La brecha civil/religiosa es brutal y cambia el producto.** Girona 6 % religiosas vs. Córdoba 34 % vs. Jaén 41 %. Donde manda la ceremonia civil, la música de ceremonia se contrata (y se vende); donde manda la iglesia, no se contrata ceremonia y el grupo entra en el cóctel. **Es un argumento comercial distinto por provincia, y sale de un dato público que nadie ha mirado.**
2. **El calendario de contratación no es nacional.** Madrid, Barcelona, Toledo, Navarra y Bizkaia pican en **junio**; Sevilla, Murcia, Baleares y Canarias en **octubre**; A Coruña en **agosto**. Si el pico es junio, el brief entra entre septiembre y enero. Si el pico es octubre, entra entre enero y mayo. **Esto define cuándo se publica cada geo-página, no una regla genérica.**
3. **La concentración estacional premia a las provincias del interior.** Segovia concentra el 71 % de sus bodas en 6 meses; Valladolid el 73 %. Volumen bajo pero demanda hiperconcentrada: SERP flojo el resto del año y muy caliente en primavera.
4. **Ticket ≠ volumen.** Estudios de sector 2025 sitúan el gasto medio nacional en ~20.000 € (130 invitados), con Castilla-La Mancha (~32.500 €), Navarra (~27.600 €), La Rioja (~26.200 €) y Asturias (~24.400 €) por encima, y Canarias (~12.400 €), Andalucía (~16.500 €) y Baleares (~17.300 €) por debajo. *Baleares baja porque el dato mide bodas de residentes, no las destination weddings internacionales, que son otro mercado con otro ticket.* **Toledo y Guadalajara tienen volumen medio-bajo y ticket muy alto: son mercados infravalorados por todo el sector.**

### 3.3 El vertical empresa

Congresos internacionales ICCA 2024 (España, 3.ª del mundo con 536):

| Ciudad | Congresos internacionales 2024 |
|---|---|
| Barcelona | 142 (4.ª del mundo) |
| Madrid | 105 |
| Valencia | 51 |
| Resto | España coloca 57 ciudades en el ranking |

Fuera del top 3, el evento de empresa relevante para Show Up (cena de Navidad, convención, aniversario) no sigue al congreso internacional sino a la **densidad de sedes corporativas**: Madrid, Barcelona, Valencia, Bilbao, Sevilla, Málaga y Zaragoza. **El vertical empresa es Madrid y Barcelona, y todo lo demás es residual en año 1.**

### 3.4 El vertical fiesta patronal

Es el vertical con mejor relación esfuerzo/ingreso del plan, y el más regionalizado:

- ~400 formaciones de orquesta de verbena en España, la mayoría de origen gallego.
- Galicia: ~400 orquestas, ~4.000 empleos directos, **>40 M€ por temporada**, casi **2.500 fiestas patronales** entre julio y agosto.
- Cachés: formación pequeña 6.000–8.000 €, media 12.000–15.000 €, gran orquesta hasta 45.000 €. Subidas del 15–30 % en los últimos ejercicios.
- Aviso: la temporada 2025 se leyó como floja en Galicia (menos verbenas parroquiales, concentración en fin de semana, competencia de discomóviles). **El mercado se está concentrando, no creciendo.**

**Decisión:** el vertical fiesta patronal **no se ataca por ciudad**. Se ataca por **comunidad autónoma y por proceso administrativo** (`cómo contrata un ayuntamiento`, `contrato menor actuación musical`, `pliego orquesta fiestas`), porque quien busca es un concejal de festejos y busca el procedimiento, no el topónimo. Geo aquí = CCAA, no municipio.

### 3.5 La lista ordenada, con fase

**Fase 1 — meses 1–6. TRES páginas geográficas. Ni una más.**

| # | Página | Mercado | Puntuación | Publicar en | Justificación |
|---|---|---|---|---|---|
| 1 | `/musica-para-bodas/barcelona` | Barcelona | **88** | Mes 2 | Índice 69 con base operativa propia (D=máximo). Pico en junio ⇒ el brief entra de septiembre a enero, se publica con 6 meses de margen. 91 % civiles ⇒ se vende ceremonia, que es margen extra. |
| 2 | `/musica-para-bodas/emporda` | Alt + Baix Empordà (Girona) | **81** | Mes 4 | Ticket alto y destination wedding europea. **Girona tiene la tasa de bodas civiles más alta de España (94 %)**: todas las ceremonias son contratables. SERP casi vacío: quien rankea son plantillas provinciales de Girona, no páginas de comarca. A 1 h 15 de Barcelona: cero problema de desplazamiento. |
| 3 | `/artistas-para-eventos-de-empresa/barcelona` | Barcelona | **76** | Mes 6 | 142 congresos internacionales; reaprovecha la autoridad geográfica ya construida por la #1 con un segmento distinto. Publicar en junio para llegar posicionado al ciclo de cenas de empresa (septiembre–noviembre). |

**Fase 2 — meses 7–12. Hasta cinco más, y sólo si se cumple el gate del §8.**

| # | Página | Puntuación | Publicar | Nota |
|---|---|---|---|---|
| 4 | `/musica-para-bodas/madrid` | **84** | Mes 7–8 | El mercado #1 de España por goleada (29.390 bodas, 1,44× Barcelona). Sólo entra cuando haya artista que llegue: **es el mercado que hay que ir a comprar**, no esperar. |
| 5 | `/musica-para-bodas/sierra-de-madrid` | **79** | Mes 9 | Corredor de fincas con nombre de mercado propio. Menos competido que "Madrid" y con ticket superior. |
| 6 | `/artistas-para-eventos-de-empresa/madrid` | **77** | Mes 10 | Densidad corporativa máxima. Ciclo de decisión corto. |
| 7 | `/musica-para-bodas/penedes` o `/musica-para-bodas/costa-brava` | **70** | Mes 11 | Segunda zona catalana. Decidir por dónde hayan salido los briefs reales, no por intuición. |
| 8 | `/musica-para-bodas/tarragona` | **66** | Mes 12 | 2.981 bodas, 92 % civiles, a 1 h de la base. Consolida el dominio del corredor mediterráneo catalán. |

**Fase 3 — meses 13–24. Hasta 16 páginas geográficas totales.**

Orden de ataque por puntuación, con la capacidad de servir siempre como filtro:

| Mercado | Puntuación | Qué lo hace atractivo | Qué lo frena |
|---|---|---|---|
| **Valencia** | 72 | 10.185 bodas, 88 % civiles, 51 congresos ICCA, 3 h por AP-7 desde BCN | Competencia local consolidada |
| **Toledo / cigarrales** | 71 | Ticket CLM el más alto de España (~32.500 €), 69 % de bodas en may–oct, receptor natural de la boda madrileña | Volumen medio-bajo (2.556) |
| **Sevilla + Aljarafe** | 69 | 7.858 bodas, **pico en octubre** (calendario complementario al de Cataluña, rellena temporada baja), 26 % religiosas ⇒ mercado de cóctel y fiesta | Desplazamiento caro; competencia local fuerte y muy enraizada |
| **Málaga / Costa del Sol** | 68 | Destination wedding internacional, ticket muy alto, temporada larga | Mercado saturado de agencias; hay que competir en inglés |
| **Bizkaia / Gipuzkoa** | 64 | 92 % civiles, ticket alto, mercado poco atendido por agencias nacionales | Cultura de proveedor local muy cerrada |
| **Navarra / La Rioja** | 62 | Ticket 26.000–27.600 €, **17 % de las bodas en un solo mes (junio)**, SERP casi vacío | Volumen bajo (2.241 / 1.127) |
| **Alicante** | 60 | 6.654 bodas, buen clima, temporada larga | Mercado de precio, ticket bajo |
| **Zaragoza** | 58 | 3.276 bodas, nodo logístico entre BCN y MAD, desplazamiento barato desde ambas | Poca densidad de fincas de gama alta |
| **Baleares** | 55 | Ticket destination altísimo | Logística de isla: instrumentos, ferry, backline alquilado. **Cambia la estructura de costes entera.** Sólo con artista o backline local. |
| **A Coruña / Pontevedra** | 50 | 7.252 bodas sumadas, pico en agosto, sinergia con el vertical verbena | Mercado de orquestas gallegas hipercompetitivo y con precio propio |

**Lo que NO se ataca nunca por geografía:** Canarias (logística prohibitiva sin socio local), Ceuta y Melilla (347 y 291 bodas), y cualquier provincia por debajo de **1.500 matrimonios/año** salvo que exista una zona-marca dentro (Segovia como provincia no; *"bodas en Segovia y Sierra de Guadarrama"* como corredor de Madrid, quizá).

**Cuántas por fase, en una línea:** 3 → 8 → 16 → 30. Y la última cifra es el mes 30, no el mes 12.

---

## 4. Zona vs. provincia vs. ciudad: la nomenclatura correcta para España

### 4.1 El hallazgo

En bodas, la unidad mental del cliente **no es administrativa: es el sitio**. La pareja no piensa "me caso en la provincia de Girona". Piensa "me caso en una masía del Empordà". El topónimo que usa al buscar es el de **la comarca de la finca**, no el de la capital de provincia.

Esto pasa porque en España el mercado de bodas se organiza por **corredores de fincas**: agrupaciones de 15–60 espacios con una estética, un rango de precio y una logística comunes, que las parejas comparan entre sí. Ese corredor tiene nombre propio, y ese nombre es la keyword.

### 4.2 Las cuatro unidades geográficas y cuándo usar cada una

| Unidad | Cuándo se usa | Ejemplo de URL | Riesgo |
|---|---|---|---|
| **Comarca / corredor de fincas** | **Por defecto en bodas.** Cuando el nombre existe en el mercado y hay ≥25 fincas | `/musica-para-bodas/emporda` | Que el nombre no tenga volumen real: verificar antes |
| **Ciudad** | **Por defecto en empresa.** Y en bodas sólo en las grandes capitales, donde la ciudad *es* el mercado | `/musica-para-bodas/barcelona` | Competencia máxima |
| **Provincia** | **Excepcional.** Sólo cuando la provincia es la marca del mercado y no hay comarca dominante | `/musica-para-bodas/toledo` | Suele ser el atajo perezoso: 90 % de las veces hay una unidad mejor |
| **Comunidad autónoma** | **Sólo en el vertical fiesta patronal / ayuntamiento**, donde la unidad relevante es el procedimiento administrativo | `/orquestas-para-fiestas-patronales/galicia` | Excesivamente amplio para bodas |

### 4.3 El mapa de zonas-marca de España

Las que tienen nombre propio consolidado en el mercado de bodas. **Esta tabla es el inventario de mercados geográficos posibles del proyecto para los próximos cinco años.**

| Zona | Provincia(s) | Tipo | Nomenclatura correcta | Notas |
|---|---|---|---|---|
| **Empordà** (Alt y Baix) | Girona | Masías y mas | `Empordà` — con accent grave, es catalán | Ticket alto, destination europea. Distinguir Alt/Baix en el cuerpo, no en la URL |
| **Costa Brava** | Girona | Costa / hoteles | `Costa Brava` | Marca turística: más volumen internacional, menos intención de boda local |
| **Penedès** | Barcelona/Tarragona | Bodegas y viñedos | `Penedès` | Enoturismo. Encaja con cuarteto y jazz, no con verbena |
| **Maresme / Garraf** | Barcelona | Costa próxima a BCN | `Maresme`, `Garraf` | Muy dependientes de BCN, no merecen URL propia todavía |
| **Sierra de Madrid** (Guadarrama) | Madrid | Fincas de sierra | `Sierra de Madrid` — **no** "Sierra de Guadarrama" | Es el nombre comercial, no el geográfico. Google entiende los dos; el cliente usa el primero |
| **La Moraleja / norte de Madrid** | Madrid | Fincas periurbanas | No usar como zona SEO | Es un barrio, no un mercado de búsqueda |
| **Cigarrales de Toledo** | Toledo | Fincas históricas | `Toledo` en URL, `cigarrales` en el cuerpo | El cigarral es la palabra de autoridad local: la usa quien sabe |
| **Sierra de Gredos / Valle del Jerte** | Ávila, Cáceres | Rural de alto ticket | `Gredos` | Volumen bajo, ticket alto. Fase 4 |
| **Aljarafe** | Sevilla | Haciendas | `Aljarafe` — la palabra es *hacienda*, no *finca* | La hacienda sevillana es un tipo de espacio propio con su vocabulario |
| **La Axarquía / Costa del Sol** | Málaga | Destination internacional | `Costa del Sol` | Requiere versión en inglés para competir de verdad |
| **Ribera del Duero** | Burgos, Valladolid, Soria | Bodegas | `Ribera del Duero` | Enoturismo, volumen bajo, ticket alto |
| **La Rioja Alavesa** | Álava | Bodegas de autor | `Rioja Alavesa` | SERP casi vacío, ticket muy alto, volumen mínimo |
| **Rías Baixas** | Pontevedra | Pazos | `Rías Baixas` — la palabra es *pazo* | Sinergia directa con el vertical verbena |
| **Huerta de Murcia / Valle de Ricote** | Murcia | Fincas | No prioritario | Ticket bajo |
| **La Alpujarra** | Granada, Almería | Rural | No prioritario | Volumen insuficiente |

### 4.4 Las siete reglas de nomenclatura

1. **Se usa el nombre que usa el cliente, no el que usa el INE.** `Sierra de Madrid` gana a `Sierra de Guadarrama`. `Empordà` gana a `comarca del Alt Empordà`.
2. **Se respeta la grafía local, incluidos acentos y lengua cooficial.** `Empordà`, `Penedès`, `Rías Baixas`. El slug va sin diacríticos (`/emporda`), el H1 y el cuerpo con ellos. Es señal de que quien escribe conoce el sitio.
3. **Se usa el vocabulario del espacio local, y es lo que más diferencia.** Masía y mas en Cataluña. Hacienda y cortijo en Andalucía occidental. Cigarral en Toledo. Pazo en Galicia. Caserío en el País Vasco. Alquería en Valencia. **Un texto que dice "finca" en Sevilla y "finca" en Girona es un texto que no ha estado en ninguno de los dos sitios.**
4. **Nunca se solapan dos unidades que compitan.** Si existe `/emporda`, no se crea `/girona`: canibalizan. Se elige la que tenga más intención comercial, y la otra se resuelve dentro del cuerpo con un H2.
5. **La zona se declara en `Service.areaServed` con `@type: AdministrativeArea`**, no `City`. `City` para Barcelona; `AdministrativeArea` para el Empordà.
6. **Umbral mínimo para que una zona merezca URL: ≥25 espacios de boda listados en el directorio de referencia del sector.** Por debajo de eso el mercado no existe y no hay long tail que capturar.
7. **En empresa la zona no aplica.** Nadie busca "evento de empresa en el Penedès". Ahí manda la ciudad y sólo la ciudad.

---

## 5. Anatomía de una página de ciudad que no es contenido duplicado

### 5.1 El objetivo de la plantilla

Que **el 75 % del texto sea imposible de reutilizar** en otra ciudad, y que el 25 % restante (bloques de servicio, CTAs, FAQ estructural) esté claramente marcado como plantilla y colocado **por debajo** del contenido único.

Extensión objetivo: **1.400–2.000 palabras**. Menos no compite; más se convierte en relleno y baja el ratio de unicidad.

### 5.2 La plantilla, sección a sección

```
┌─ ZONA 100 % ÚNICA — primeras 400 palabras, above the fold ─┐
│  1. H1 + entradilla                                       │
│  2. Bloque de contexto local con dato duro                │
│  3. Los sitios: espacios reales, nombrados                │
├─ ZONA MIXTA — 60 % única ────────────────────────────────┤
│  4. Restricciones reales de la zona                       │
│  5. Qué formato encaja aquí (y cuál no)                   │
│  6. El caso propio                                        │
│  7. Quién toca aquí                                       │
├─ ZONA PLANTILLA — reutilizable, siempre abajo ───────────┤
│  8. Desplazamiento y honestidad                           │
│  9. Precio con ajuste local                               │
│ 10. Cómo funciona (3 pasos)                               │
│ 11. FAQ: 3 locales + 2 genéricas                          │
│ 12. Cierre + brief precargado                             │
│ 13. Enlaces laterales (máx. 3)                            │
└───────────────────────────────────────────────────────────┘
```

---

**1 · H1 + entradilla** — 100 % único · ~80 palabras

- **H1:** `Música en directo para bodas en el Empordà`. Keyword exacta, sin adornos.
- **Entradilla:** dos o tres frases que demuestren conocimiento **en la primera línea**, no en el párrafo cuatro. Prohibido abrir con "El Empordà es una comarca situada en...".

> *Ejemplo:* "En el Empordà casi nadie se casa por la iglesia: el 94 % de las bodas de Girona son civiles, la tasa más alta de España. Eso significa que aquí la ceremonia sí se contrata —y es donde más se nota si eliges bien. Llevamos músicos a masías del Alt y el Baix Empordà, y sabemos en cuáles hay que cortar a la una."

**2 · Contexto local con dato duro** — 100 % único · ~200 palabras · H2

Aquí va el dato de mercado que nadie más publica. **Fuente obligatoria: INE 2024 por provincia.** Tres ángulos disponibles, se eligen dos:

| Ángulo | Qué se dice | Por qué es útil de verdad |
|---|---|---|
| Civil vs. religiosa | "X % de las bodas de la provincia son civiles" | Determina si hay ceremonia contratable |
| Calendario | "El mes pico aquí es octubre, no junio como en Madrid" | Determina cuándo hay que reservar y qué disponibilidad queda |
| Concentración | "El 69 % de las bodas se celebran entre mayo y octubre" | Determina con cuánta antelación hay que cerrar |

Y se traduce a consecuencia práctica: *"pico en junio ⇒ si estás leyendo esto en marzo para junio del año que viene, vas bien; si es para este junio, quedan tres fechas."*

**3 · Los sitios** — 100 % único · ~350 palabras · H2 `Dónde se casa la gente aquí`

**Es la sección que decide si la página existe.** Entre 6 y 12 espacios reales, nombrados, agrupados por tipo de problema musical que plantean:

> **Masías con vecinos cerca** — Mas X, Mas Y. Limitador de decibelios y corte a la 1:00 en exterior. Aquí el formato que aguanta es el trío acústico; la banda completa se queda en el 60 % de su volumen útil y no compensa lo que cuesta.
>
> **Espacios grandes sin límite acústico** — Finca Z. Aquí sí entra la banda de siete, y de hecho el espacio se come a un dúo.
>
> **Ceremonias en exterior sobre grava o césped** — hace falta tarima o los tacones y los pies de micro se hunden. Suena a chiste hasta que pasa.

**Reglas duras de esta sección:**
- Espacios **reales y verificables**. Sin inventarse ninguno.
- Se nombra el espacio pero **no se enlaza por defecto** (se enlaza sólo a los que hay relación real, y se les avisa: es la semilla de link building del §7).
- No se dice "trabajamos con" si no es verdad. Se dice "hemos tocado en", "hemos visitado" o "nos han contado".
- **Prohibido copiar la descripción de la web de la finca.** Se escribe qué implica *musicalmente*, que es lo que nadie más escribe.

**4 · Restricciones reales** — 60 % único · ~200 palabras · H2

Ordenanzas de ruido, horarios de corte, acceso de furgoneta, carga y descarga, potencia eléctrica disponible, meteorología por mes. Es información **operativa** que sólo tiene quien ha montado ahí.

> *"En municipios pequeños del Baix Empordà las ordenanzas cortan el exterior a la 1:00 en verano. En algunos, la licencia de la propia finca es más restrictiva que la ordenanza. Pregunta esto antes de firmar el catering, no después: hemos visto rediseñar el timing entero de una boda por no haberlo preguntado."*

**5 · Qué formato encaja aquí** — 60 % único · ~200 palabras · H2

Recomendación de formación en función de lo anterior. **Aquí es obligatorio recomendar en contra de algo** — es tono de marca y es la señal de utilidad que más pesa.

**6 · El caso propio** — 100 % único · ~250 palabras · H2

Un evento real: sitio, fecha aproximada, número de invitados, qué se contrató, qué salió mal y cómo se resolvió. **Con fotos propias**, nombre de archivo descriptivo (`trio-acustico-boda-masia-baix-emporda-2025.webp`) y `alt` que describa la escena real.

Sin caso propio, **esta sección se sustituye por una declaración honesta** —no se deja vacía ni se rellena con humo:

> *"Todavía no hemos tocado en el Empordà: nuestras últimas doce bodas han sido en el Vallès y el Maresme. Lo que sabemos de aquí es de haber visitado seis masías y de hablar con dos wedding planners de la zona. Si buscas a alguien que lleve veinte bodas hechas en el Baix Empordà, hay agencias en Palafrugell que lo tienen. Si quieres que te digamos qué formato aguanta tu masía, eso sí lo sabemos."*

Eso convierte la debilidad en la prueba de honestidad más potente de la web, y es exactamente el tono de la plataforma de marca. Y activa el nivel 1 de la regla de admisión (§6).

**7 · Quién toca aquí** — 60 % único · ~120 palabras · H2

2–3 artistas del catálogo con enlace a su ficha y **una frase de por qué encajan en esta zona concreta**. No la parrilla entera.

**8 · Desplazamiento y honestidad** — plantilla con datos locales · ~100 palabras · H2

De dónde sale el artista, cuánto son de coche, si se cobra desplazamiento y desde dónde, y si hay dietas o alojamiento. **Se dice el número.** Nadie en el sector lo hace y es la duda #1 del cliente.

**9 · Precio con ajuste local** — plantilla + ajuste · ~120 palabras · H2

Rango real por formato, con la corrección de esta zona si la hay. Enlace al `/musica-para-bodas/cuanto-cuesta` nacional. **Nunca en schema `Offer`** (§6.5 del doc 04).

**10 · Cómo funciona** — plantilla pura · ~80 palabras

Los tres pasos de la marca. Idéntico en todas las páginas: es la parte que *debe* ser igual.

**11 · FAQ** — 3 locales + 2 plantilla · ~250 palabras · `FAQPage` schema

Las tres locales son obligatorias y específicas:
- *¿Hay límite de ruido en las masías del Empordà?*
- *¿Con cuánta antelación hay que reservar para septiembre en el Empordà?*
- *¿Cuánto cobráis de desplazamiento hasta el Baix Empordà?*

**12 · Cierre + brief precargado** — plantilla · CTA con anchor de marca (`Cuéntanos la tuya`), nunca con keyword (regla 3 del §3.1 del doc 04). El formulario llega con la zona precargada.

**13 · Enlaces laterales** — máximo **3**, sólo a zonas realmente colindantes, con anchor descriptivo. Nunca un mapa de España, nunca una lista alfabética.

### 5.3 El porcentaje de unicidad: la cifra y cómo se mide

| Métrica | Umbral | Cómo se mide |
|---|---|---|
| **Unicidad global del texto** | **≥ 75 %** | Solapamiento de n-gramas (shingles de 8 palabras) entre la página nueva y cada geo-página existente. Se hace con un script antes de publicar, no a ojo |
| **Unicidad de las primeras 400 palabras** | **100 %** | Ni una frase reutilizada. Cero. |
| **Unicidad del `<title>` y la meta** | 100 % | No basta con cambiar el topónimo: cambia también el gancho |
| **Imágenes propias** | ≥ 4 por página, **0 de stock** | Una foto de banco de imágenes en una página de ciudad es la confesión de que no has estado |
| **Datos locales verificables** | ≥ 5 | Espacios nombrados, cifra INE, ordenanza, distancia, mes pico |
| **Enlaces salientes a entidades locales** | 1–3 | A la web de una finca, a la ordenanza municipal, al ayuntamiento. Enlazar hacia fuera a fuentes reales es señal de contenido real |

**Por qué se sube del 60 % al 75 %:** el 60 % del plan anterior permite que 4 de cada 10 párrafos sean plantilla. Con tres páginas eso pasa desapercibido; con quince, el patrón es visible para cualquier sistema de detección de contenido escalado. Y en un dominio sin autoridad no hay margen para que "pase desapercibido". **75 % es el número que permite escalar a 30 sin cambiar de estrategia a mitad de camino.**

---

## 6. La regla de admisión

### 6.1 Veredicto sobre la regla anterior

> *"Sin evento real hecho ahí, no hay página."*

**Dirección correcta. Formulación defectuosa por dos motivos:**

1. **Es bloqueante y circular.** No se puede entrar en Madrid porque no hay evento en Madrid, y no hay evento en Madrid porque no hay página en Madrid. Aplicada literalmente, la regla congela el proyecto en su comarca de origen para siempre. Y Madrid es el mercado #1 de España con 29.390 bodas.
2. **Es insuficiente.** Un evento hecho en Cuenca no convierte a Cuenca en un mercado. Puede haber evento y no haber ni demanda de búsqueda, ni densidad de espacios, ni capacidad de repetir. La prueba es **necesaria pero no suficiente**.

### 6.2 La regla nueva: cuatro obligatorios + dos de cuatro

Una unidad geográfica merece página propia si cumple **los cuatro requisitos eliminatorios** y **al menos dos de los cuatro de refuerzo**.

**Eliminatorios — los cuatro, sin excepción:**

| # | Requisito | Umbral verificable | Cómo se comprueba |
|---|---|---|---|
| **E1** | **Demanda de búsqueda con modificador geográfico** | La consulta `[servicio] + [topónimo]` devuelve ≥3 resultados comerciales dedicados al topónimo | Inspección manual del SERP + Keyword Planner. **Si el top 10 son sólo directorios nacionales sin página de esa ciudad, la búsqueda no existe con volumen suficiente** |
| **E2** | **Densidad de espacios** | ≥25 espacios de boda listados en la zona, o ≥1 palacio de congresos / ≥50 sedes corporativas para empresa | Recuento en el directorio de referencia del sector |
| **E3** | **Capacidad de servir sin destrozar el margen** | Desplazamiento ≤3 h por carretera desde donde vive el artista, o artista con base en la zona. Coste de desplazamiento ≤12 % del caché | Cálculo real por artista, no promedio |
| **E4** | **Conocimiento de campo documentado** | **≥6 datos locales verificables**, de los cuales ≥3 no son de fuente pública (hay que haber hablado con alguien o haber ido) | Ficha de investigación firmada antes de escribir una línea (plantilla en §6.4) |

**De refuerzo — al menos dos de estos cuatro:**

| # | Requisito |
|---|---|
| **R1** | **Evento propio hecho ahí**, con fotos y —si se puede— frase del cliente. *(La regla antigua, ahora en su sitio: es el refuerzo más valioso, no el billete de entrada)* |
| **R2** | **Aliado local real**: finca, wedding planner, sala o técnico de sonido de la zona con quien exista relación de trabajo verificable |
| **R3** | **Artista con vínculo con la zona**: vive ahí, es de ahí, o ha tocado ahí con otro proyecto |
| **R4** | **Ticket o mercado excepcional**: gasto medio de la CCAA ≥25.000 €, o índice de volumen ≥20 (Madrid=100) |

### 6.3 Los tres niveles de existencia geográfica

No todo mercado merece URL. Hay tres estados, y esto es lo que resuelve el bloqueo circular:

| Nivel | Qué es | Requisitos | Ejemplo |
|---|---|---|---|
| **0 · Mención** | La zona aparece **dentro** del pilar o de otra geo-página: un H3, una fila de tabla, un párrafo. **Sin URL propia.** | Ninguno | El Maresme dentro de `/musica-para-bodas/barcelona` |
| **1 · Página de conocimiento** | URL propia, plantilla completa, **pero con la sección 6 sustituida por la declaración honesta** de que aún no se ha tocado ahí | E1–E4 + 2 de refuerzo, **sin exigir R1** | `/musica-para-bodas/madrid` antes del primer evento en Madrid |
| **2 · Página con prueba** | La plantilla completa, con caso propio y fotos | E1–E4 + R1 obligatorio | `/musica-para-bodas/barcelona` |

**La regla del ascenso:** una página de nivel 1 tiene **9 meses** para convertirse en nivel 2. Si a los 9 meses no hay un evento real en esa zona, la página **se despublica y se redirige 301 al pilar**. Sin discusión ni prórroga. Esto es lo que impide que "nivel 1" se convierta en la excusa para clonar 30 páginas sin sustancia.

### 6.4 Cómo se fabrica la prueba antes de tenerla

Aquí está la jugada que el plan anterior no contemplaba: **si la prueba local es el activo que da derecho a la página, la prueba se compra.**

Antes de publicar una geo-página de nivel 1 en un mercado prioritario:

1. **Se hace un evento a precio de coste en la zona objetivo.** Una boda de un amigo, un evento de una asociación, un showcase en una finca. El margen de esa noche es cero; lo que se compra son las fotos, el caso y el testimonio. **En Madrid, con 29.390 bodas al año, ese evento a pérdida es la inversión de marketing más barata que existe.**
2. **Se visitan 5–6 espacios de la zona en un solo día.** Presentación, tarjeta, foto, y las tres preguntas que generan el contenido único: ¿a qué hora cortáis?, ¿qué formatos habéis tenido y cuál funcionó?, ¿qué problema se repite con los grupos? Salen los datos de E4 y las semillas de R2 y del §7 a la vez.
3. **Se localiza un artista con vínculo real** (R3). Es lo que hace sostenible el mercado a largo plazo y lo que resuelve E3 de verdad.

Regla operativa: **un viaje de campo por mercado nuevo, antes de escribir.** Si no se puede hacer el viaje, ese mercado no está listo. La geografía en SEO no se investiga desde la silla.

### 6.5 Ficha de admisión (obligatoria, se archiva)

```
MERCADO: ______________________  Unidad: [ciudad|comarca|provincia|CCAA]
Ocasión: [boda|empresa|fiesta patronal]

ELIMINATORIOS
E1 Demanda geográfica ......... [ ]  Evidencia (top 10 revisado el __/__/__):
E2 Densidad de espacios ....... [ ]  Nº de espacios contados: ____  Fuente:
E3 Capacidad de servir ........ [ ]  Artista: ______  Km: ____  % desplaz./caché: ___%
E4 Conocimiento de campo ...... [ ]  6 datos locales, 3 no públicos:
    1. ______________________________  (fuente:            )
    2. ______________________________  (fuente:            )
    3. ______________________________  (fuente:            )
    4. ______________________________  (fuente:            )
    5. ______________________________  (fuente:            )
    6. ______________________________  (fuente:            )

REFUERZO (≥2)
R1 Evento propio [ ]   R2 Aliado local [ ]   R3 Artista vinculado [ ]   R4 Ticket/volumen [ ]

NIVEL ASIGNADO: [0 · 1 · 2]     Fecha límite de ascenso a nivel 2: __/__/____
Fotos propias disponibles: ____   Espacios nombrables: ____
Firma: ______________  Fecha: __/__/____
```

---

## 7. Señales locales sin oficina

### 7.1 La verdad sobre las citations españolas

Las citations —el NAP replicado en directorios— **valen mucho menos de lo que la industria del SEO local vende**, y para un SAB sin dirección pública valen todavía menos: la mitad de su función es confirmar una dirección que aquí no se publica.

**Lo que sí hacen:**
- Consistencia de entidad: 12 fuentes independientes diciendo el mismo nombre y el mismo teléfono ayudan a Google a consolidar la entidad.
- Alguna visita residual desde directorios con tráfico propio.

**Lo que no hacen:**
- No mueven el ranking orgánico. Los enlaces de directorio son `nofollow` o de autoridad irrelevante.
- No te meten en el pack local, porque en este vertical el pack local casi no se dispara.

**Decisión: se hacen 12, en 2 tardes, y no se vuelve a tocar el tema.** Cualquier presupuesto en "500 citations" es dinero quemado.

**Las 12, por orden de utilidad real:**

| # | Directorio | Por qué |
|---|---|---|
| 1 | **Google Business Profile** | El único que importa de verdad |
| 2 | **Apple Business Connect** | Mapas de iPhone. Gratis, cinco minutos, casi nadie en el sector lo tiene |
| 3 | **Bing Places** | Alimenta a Bing y, cada vez más, a asistentes generativos |
| 4 | Páginas Amarillas | Marca reconocida, tráfico propio |
| 5 | QDQ | Fuerte en SEO local, ~75 % de su tráfico es orgánico |
| 6 | Cylex España | Buena indexación |
| 7 | Yelp España | Poco uso en España, pero consolida NAP |
| 8 | Axesor / eInforma | Datos societarios. Señal de negocio real, no de tráfico |
| 9 | LinkedIn Company Page | Imprescindible para el vertical empresa |
| 10 | Instagram Business | Es donde vive la prueba visual de este sector |
| 11 | **Bodas.net** (perfil, aunque sea el básico) | Es el SERP entero de bodas. Aunque no se pueda ganar, hay que estar dentro |
| 12 | **Zankyou** | Idem, con más peso internacional en destination wedding |

**Regla NAP:** nombre `Show Up Events`, un solo teléfono (el mismo de `/contacto` y del GBP), sin prefijos locales por provincia, un solo email. Idéntico carácter por carácter. Se guarda en un documento maestro y no se improvisa nunca.

### 7.2 Lo que sí mueve la aguja: enlaces locales reales

En orden de valor por unidad de esfuerzo:

**1 · Fincas, masías, haciendas y espacios (el mejor activo del proyecto)**

Un enlace desde una finca del Empordà en su página de *proveedores recomendados* es un enlace temáticamente perfecto, geográficamente perfecto y editorial. Vale más que doscientos directorios.

*Cómo se consigue:* después de tocar ahí. Se envía a la finca (a) las fotos profesionales de la noche en su espacio, con derecho de uso, y (b) una ficha corta de *"qué formatos funcionan en este espacio"* que ellos pueden publicar. **Se da valor primero.** El enlace se pide después, y con anchor variado (nombre de marca, "música en directo", URL desnuda), nunca todos iguales.

*Objetivo año 1: **6 enlaces de espacios**.* Es poco. Es suficiente.

**2 · Wedding planners**

Menos enlaces, pero traen leads directos y cualificados. Una wedding planner de la zona con la que se trabaje bien vale más que 20 páginas de ciudad.

*Objetivo año 1: 3 relaciones reales, 2 enlaces.*

**3 · Prensa local y comarcal**

El ángulo que funciona **no es** "nueva empresa de contratación de artistas" —eso no lo publica nadie—. El ángulo son **los datos**. Con los datos del INE de este documento se construyen notas de prensa comarcales genuinamente noticiables:

> *"El 94 % de las bodas de Girona ya son civiles, la tasa más alta de España: cómo ha cambiado eso la música de las bodas del Empordà."*

Eso lo publica un digital comarcal. Y es verdad, y es dato público, y nadie lo ha contado. **Ese es el link building honesto: se genera la noticia, no se compra el enlace.**

*Objetivo año 1: 3 apariciones en medios comarcales.*

**4 · Ayuntamientos y prensa de fiestas**

Cuando se toque en una fiesta patronal: el programa de fiestas del ayuntamiento, la web municipal y el digital local. Enlaces `.es` institucionales de altísima confianza. **Hay que pedirlos activamente antes del evento**, porque después nadie actualiza el programa.

**5 · Las webs de los propios artistas**

Cada artista del catálogo con enlace editorial desde su sección de contratación. **Nunca en el footer** (patrón de red) y con anchors variados. Es el enlace más fácil del proyecto y el que primero hay que cerrar.

**6 · Asociaciones y clusters**

Asociaciones de empresarios de bodas, clusters de turismo MICE, gremios de espectáculos. Cuota anual baja, enlace institucional permanente.

### 7.3 Plan de adquisición, trimestre a trimestre

| Trimestre | Objetivo | Acciones |
|---|---|---|
| **T1** | Base de entidad | GBP + 12 citations. Documento maestro de NAP. Enlaces desde las webs de los artistas (todos). |
| **T2** | Primeros enlaces locales | Viaje de campo a la zona #2. 5 fincas visitadas. Primera nota de prensa con datos INE de la comarca. |
| **T3** | Prueba social | Sistema de reseñas rodando (objetivo 12 reseñas). 2 enlaces de finca cerrados. 1 wedding planner aliada. |
| **T4** | Consolidación | 6 enlaces de espacio acumulados. 3 apariciones en prensa comarcal. 25 reseñas. Auditoría de consistencia NAP. |

**Total realista año 1: 15–20 dominios enlazantes.** Suena poco. Son todos reales, todos temáticamente relevantes, ninguno penalizable, y sitúan al proyecto por delante del 90 % de las plantillas que hoy ocupan el SERP geográfico de este sector.

---

## 8. Escalado: de 3 ciudades a 30 sin que se caiga el castillo

### 8.1 Por qué se caen los castillos

Los proyectos geográficos no mueren por publicar muchas páginas. Mueren por tres cosas, en este orden:

1. **Se publican más rápido de lo que se puede investigar.** La página 12 se escribe sin viaje de campo, y a partir de ahí todas son plantilla.
2. **Se publican en bloque.** Ocho URLs el mismo día es un patrón de generación masiva.
3. **No se poda.** Las páginas que no funcionan se quedan, el ratio de páginas útiles del dominio cae, y arrastra a las buenas.

### 8.2 Las cuatro fases y sus puertas

Ninguna fase empieza hasta que la anterior pasa **su gate completo**. El gate se evalúa en Search Console, no por sensación.

| Fase | Meses | Páginas geo | Gate para pasar a la siguiente |
|---|---|---|---|
| **1 · Prueba** | 1–6 | **3** | ≥2 de las 3 con impresiones crecientes 3 meses seguidos · ≥1 con clics de orgánico · ≥1 brief atribuido a una geo-página |
| **2 · Validación** | 7–12 | **8** | ≥5 de 8 en top 20 para su keyword geográfica · ≥4 briefs geo acumulados · CTR medio ≥2 % · **la plantilla ya se ejecuta en <6 h de trabajo** |
| **3 · Expansión** | 13–24 | **16** | ≥10 de 16 con tráfico · CAC por brief geo inferior al de Ads · ≥1 mercado nuevo con evento propio · proceso documentado |
| **4 · Escala** | 25–36 | **30** | Sólo si el mes 24 cierra con ≥15 briefs geo/año y un equipo capaz de sostener 2 mercados nuevos por trimestre |

**Ritmo máximo de publicación, en cualquier fase: 2 geo-páginas por mes, nunca dos en la misma semana.** Es la restricción que hace que el patrón parezca lo que es —un negocio creciendo— y no lo que no es.

### 8.3 Qué hay que industrializar para que la fase 3 sea posible

En la fase 1 cada página se hace a mano y tarda dos semanas. Si en la fase 3 sigue tardando dos semanas, no hay fase 3. **Lo que se industrializa es el proceso de investigación, nunca el texto.**

| Activo | Qué es | Cuándo se construye |
|---|---|---|
| **Ficha de admisión** (§6.5) | Formulario que fuerza a tener los datos antes de escribir | Fase 1 |
| **Guion del viaje de campo** | Las 8 preguntas que se hacen en cada finca, siempre las mismas. Salida: 6 datos locales garantizados | Fase 1 |
| **Base de datos de espacios** | Hoja con: espacio, zona, tipo, aforo, hora de corte, límite dB, acceso, potencia, contacto, si hemos tocado. **Es el activo más valioso del proyecto a 3 años, más que las páginas** | Desde el día 1 |
| **Base de datos de ordenanzas** | Horarios de corte de música por municipio de las zonas activas | Fase 2 |
| **Script de unicidad** | Comprueba solapamiento de 8-gramas contra todas las geo-páginas antes de publicar. Bloquea si <75 % | Fase 2 |
| **Kit fotográfico por evento** | Protocolo: 20 fotos por noche, nombradas con la convención, geolocalizadas. Sin fotos no hay página de nivel 2 | Fase 1 |
| **Calendario de publicación por mes pico** | Cada mercado se publica **5–6 meses antes de su pico de contratación**, que es distinto por provincia (§3.2) | Fase 2 |

### 8.4 La poda: qué se hace con lo que no funciona

Auditoría **semestral** de todas las geo-páginas:

| Situación a los 9 meses de publicada | Acción |
|---|---|
| Tráfico + briefs | Se amplía: más espacios, segundo caso, FAQ nueva |
| Impresiones sí, clics no | Problema de `title`/meta. Se reescribe la entrada. Otros 6 meses |
| Impresiones planas o en caída | **Contenido insuficiente.** Se reescribe entera o se fusiona con la zona vecina |
| Nivel 1 sin ascender a nivel 2 | **301 al pilar.** Sin prórroga |
| Cero impresiones a los 12 meses | **301 al pilar y fuera del sitemap.** No se conserva "por si acaso" |

> **Una geo-página muerta no es neutra: consume crawl budget, baja el ratio de páginas útiles del dominio y es una prueba a favor del que quiera argumentar que esto es una granja.** Se borra.

### 8.5 Cuándo se acelera de verdad — y cuándo no

**Se acelera cuando se cumplen las tres a la vez:**
1. Una geo-página ya publicada llega a top 5 en su keyword principal (prueba de que la plantilla gana al SERP).
2. Hay artistas con base en ≥3 zonas distintas (prueba de que la capacidad de servir escala).
3. La producción de una geo-página completa baja de **6 horas** sin bajar de 75 % de unicidad.

**No se acelera nunca por:**
- Que un competidor tenga 40 landings. Las tiene porque las clonó, y eso deja de funcionar cada core update.
- Que haya presupuesto. El cuello de botella no es dinero: es investigación de campo y fotos reales.
- Que la IA permita generar 30 textos en una tarde. Es exactamente el escenario que la política de *scaled content abuse* está diseñada para castigar. **La IA sirve para estructurar y editar los datos de la ficha de admisión; no para inventar los datos.**

### 8.6 Los KPIs geográficos

| KPI | Cómo se mide | Objetivo año 1 |
|---|---|---|
| **Briefs desde geo-páginas** | GA4, `/brief/gracias` con página de origen | **≥6** |
| Impresiones geográficas | Search Console, filtro por carpeta de geo-páginas | Crecimiento MoM ≥15 % desde el mes 5 |
| Keywords geo en top 20 | Search Console, consultas con topónimo | ≥10 |
| Ratio de unicidad medio | Script propio | ≥75 % |
| Dominios enlazantes locales | Ahrefs / Search Console | 15–20 |
| Reseñas GBP | Panel GBP | 25 con ≥4,7 |
| **Coste por brief geo vs. coste por lead en Ads** | Contabilidad | El SEO geo tiene que ser más barato en el mes 12. Si no, el modelo no escala y hay que revisarlo |

---

## 9. Apéndice: schema geográfico

**En página de ciudad** — `Service` con `City`:

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

**En página de zona/comarca** — `AdministrativeArea`, nunca `City`:

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Contratación de música en directo para bodas",
  "provider": { "@id": "https://showupevents.es/#organization" },
  "areaServed": { "@type": "AdministrativeArea", "name": "Empordà",
    "containedInPlace": { "@type": "AdministrativeArea", "name": "Girona" } },
  "url": "https://showupevents.es/musica-para-bodas/emporda"
}
```

**Prohibido en geo-páginas:** `LocalBusiness`, `Place` con `address`, `geo` con coordenadas de una ciudad donde no hay establecimiento. Afirmar presencia física falsa es lo único de este documento que puede considerarse engaño y no se hace.

---

## Fuentes

- [INE · Estadística de Matrimonios, tabla 37641: matrimonios por provincia de residencia, mes y forma de celebración](https://www.ine.es/jaxiT3/Tabla.htm?t=37641) — datos 2024, extraídos vía API el 31/07/2026
- [INE · MNP Estadística de Matrimonios, últimos datos](https://www.ine.es/dyngs/INEbase/es/operacion.htm?c=Estadistica_C&cid=1254736176999&menu=ultiDatos&idp=1254735573002)
- [Google · Gestionar las zonas de servicio de empresas de servicios locales e híbridas](https://support.google.com/business/answer/9157481?hl=es)
- [Google · Requisitos de las empresas y directrices sobre propiedad](https://support.google.com/business/answer/13763036?hl=es)
- [Google · Lineamientos para la representación de tu empresa en Google](https://support.google.com/business/answer/3038177?hl=es-419)
- [Google · Gestionar tu categoría empresarial](https://support.google.com/business/answer/7249669?hl=es)
- [RicketyRoo · Location Pages: What Crosses the Line to Doorway Abuse & Spammy Content?](https://ricketyroo.com/blog/location-page-spam/)
- [Laura Alfonso · Incremento de las desverificaciones y suspensiones en las fichas Google Business Profile](https://www.lauraalfonso.com/ficha-gbp/suspensiones-verificaciones/)
- [Hosteltur · España coloca 57 ciudades en el ranking ICCA de turismo de congresos](https://www.hosteltur.com/170520_espana-coloca-57-ciudades-en-el-ranking-icca-de-turismo-de-congresos.html)
- [Nexotur · ICCA publica su lista de ciudades líderes en turismo de congresos en 2024](https://nexotur.com/icca-publica-su-lista-de-ciudades-lideres-en-turismo-de-congresos-en-2024/)
- [CaixaBank Research · Vamos de verbena: las cifras de las orquestas de verano](https://blog.caixabank.es/blogcaixabank/orquestas-verano-dimension-economica/)
- [El Economista · España en fiestas: el impacto millonario de la industria de las verbenas de verano](https://www.eleconomista.es/actualidad/noticias/13504850/08/25/espana-en-fiestas-el-impacto-millonario-de-la-industria-de-las-verbenas-de-verano.html)
- [Diario de Pontevedra · Las orquestas gallegas entran en "recesión"](https://www.diariodepontevedra.es/articulo/galicia/orquestas-entran-recesion/202506021447301393409.html)
- [OKDiario · Este es el dinero que cuesta una boda en España en 2025](https://okdiario.com/economia/este-dinero-que-cuesta-boda-espana-2025-muy-poca-gente-lo-imagina-14726541) — gasto medio por CCAA
- [Felizia · Cuánto cuesta una boda en España 2025](https://felizia.es/blog/bodas/cuanto-cuesta-una-boda-en-espana-2025)
- [SE Ranking · Los 15 mejores directorios locales para SEO en 2025](https://seranking.com/es/blog/directorios-locales/)
- [Romuald Fons · SEO Local: guía para posicionar en el Local Pack](https://romualdfons.com/seo-local-desde-cero/)
