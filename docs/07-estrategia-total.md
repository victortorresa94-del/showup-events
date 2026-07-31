# Show Up Events — Estrategia total de posicionamiento

> **Este documento manda sobre todos los anteriores.** Síntesis de los seis informes del equipo (`docs/seo/01` a `06`), con los conflictos entre disciplinas resueltos.
> `docs/04-arquitectura-seo.md` queda **DEROGADO**: se escribió antes del cambio de eje y ordena bodas primero. No se usa.

---

## 1. Lo que ha cambiado, en un párrafo

Entramos pensando que esto era una web de contratar artistas con las bodas como motor. **No lo es.** El equipo ha demostrado con SERPs reales que las bodas son un muro —Bodas.net rankea con 250 palabras porque tiene quince años, reseñas verificadas y precios propietarios— y que el dinero está donde nadie ha mirado: **ayuntamientos, comisiones de fiestas y verbenas**. Y la coincidencia afortunada: **ese hueco es exactamente vuestra agenda de contactos**. Txarangas, charangas y orquestas. No hay que elegir entre lo que se puede ganar y lo que se sabe servir.

---

## 2. Las siete decisiones que gobiernan todo

### D1 · El eje es el ayuntamiento, no la boda
Cinco de las ocho mejores celdas de la matriz de demanda son municipales: ticket de 3.000 a 45.000 €, recurrencia anual, SERP ocupado por agregadores huecos y PDFs. Las tres celdas top —orquesta × ayuntamiento, monologuista × empresa, txaranga × ayuntamiento— son las que ya sabéis servir.

**Asignación de esfuerzo año 1: 60 % fiestas · 30 % bodas · 10 % empresa.**

### D2 · Bodas se publica en el mes 9-10, no en el mes 1
No por poco importante: por indefendible hoy. Publicar ese pilar sin autoridad previa es quemarlo. Baja del puesto 1 al 12 en el orden de publicación.

### D3 · El eje de la URL lo fija la pericia del comprador
- **Boda y empresa** → manda la **ocasión**. Quien organiza no sabe qué es un cuarteto.
- **Fiestas y verbenas** → manda la **formación**. La comisión lleva veinte años tecleando "contratar charanga".

### D4 · El modificador geográfico nunca vive en raíz
No existe `/navarra`. Existe `/orquestas-para-fiestas-patronales/navarra`. Y **un eje geográfico distinto por segmento**: territorio (CCAA) para fiestas, comarca para bodas, ciudad para empresa, ninguno para bares y privados.

**Regla de la URL geográfica única:** para un mismo territorio y segmento, **una sola URL**. El tipo de artista se resuelve con H2 dentro. `segmento × territorio × tipo de artista` está **prohibido siempre** — es la explosión combinatoria que mata estos proyectos.

### D5 · El municipio es una fila, no una URL
`/fiestas-patronales/[municipio]` **jamás**. Son 8.131 municipios y ~16.900 fiestas, y además `fiestas de [pueblo]` es consulta de quien va a la fiesta, no de quien la contrata: gana siempre el ayuntamiento. El hiperlocal se convierte en **la tabla de 40-80 municipios con fecha y mes de cierre de contratación** que hace única a la página de territorio.

> *Corrección: yo defendí lo contrario antes de tener los datos. El técnico y el de local coinciden de forma independiente en que era un error, y llevan razón.*

### D6 · La marca no se cambia; se le pone apellido donde leen las máquinas
`Show Up` es un phrasal verb inglés de altísima frecuencia con homónimos por todo el mundo: el peor escenario para un desambiguador de entidades.

- **Fuera de la web** (perfiles, schema, prensa, `<title>`): `Show Up Events · Música en directo y artistas para eventos`. Obligatorio y literal, siempre igual.
- **Dentro de la web** (H1, cuerpo, voz de marca): `Show Up`. El descriptor está **prohibido** ahí.

### D7 · Se escribe para ser citado, no solo para ser clicado
El contenido de precios tiene solo 10-30 % de clic disponible porque el AI Overview se lo come. **No es un motivo para no escribirlo: es el motivo para escribirlo distinto.** Se redacta para que la máquina lo extraiga y lo atribuya. Métrica de éxito: citas, no sesiones.

---

## 3. Los conflictos entre disciplinas, resueltos

Mi trabajo aquí. Seis especialistas produjeron seis verdades parciales; estas son las llamadas.

### C1 · Bares y salas → **fuera como canal de captación**
- *Demanda:* el SERP de "música en directo + ciudad" es 100 % editorial de ocio. Google decidió que esa consulta significa "dónde voy a escuchar". Outbound puro.
- *Autoridad:* pero el hostelero sí busca su problema — SGAE, licencia, decibelios.
- *Local:* descartado, con evidencia. Máximo tres guías nacionales.

**Resolución:** el segmento **no es canal de captación de clientes**. Se publican **3 guías operativas nacionales** (licencia de música en directo, SGAE en un local, límites de decibelios y horarios) en el **mes 12 o después**, y **nunca con variante por ciudad**. Sirven para autoridad temática y para citas de IA, no para leads.

### C2 · La jugada de los músicos → **entra, y es distinta de la anterior**
`/para-artistas` ataca lo que busca el **músico**: `cómo conseguir bolos`, `cuánto cobrar por un bolo`, `cómo facturar un bolo`. Competencia casi nula. No es captación de clientes: **engorda la agenda de contactos, que es el activo real del negocio**, mientras construye autoridad temática en música en vivo.

Es la recomendación menos obvia de todo el trabajo y probablemente de las más rentables.

### C3 · Precios: bajo clic vs. mayor oportunidad
No se contradicen. **El pilar de precios se escribe para el AI Overview, no contra él.** Frases-respuesta autocontenidas, cifras concretas con contexto, tablas HTML reales. Y siempre con la horquilla acompañada del *porqué*, que es lo que un agregador con medias nacionales no puede dar.

### C4 · Dirección de arte vs. Core Web Vitals
El técnico resuelve la tensión que anticipé, y a favor de las dos partes:
- **El LCP nunca es el vídeo, y en móvil no hay vídeo.**
- **El grano va en CSS, no incrustado en la imagen** — ahorra ~40 % del peso, porque el ruido destroza la compresión AVIF.
- **Los pilares y las guías no llevan foto a sangre**: su LCP es el `<h1>`, 1,6 s.

**Enmienda a `docs/03-direccion-de-arte.md`:** la receta de grano pasa a ser capa CSS; la fotografía a pantalla completa queda reservada a home, fichas de artista y páginas de territorio. Las páginas de contenido son tipográficas.

### C5 · Magos y monologuistas: el problema del tráfico infantil
El mercado de magos en España es mayoritariamente infantil. Atacar `contratar mago` en genérico trae tráfico no servible y ensucia la señal temática del dominio.

**Resolución:** slugs siempre cualificados — `/magos-para-eventos`, `/monologuistas-para-eventos`, `/humoristas-para-eventos`. Y una regla de escritura dura: **la palabra `animación` no se usa nunca, ni siquiera para descartarla.** Los modelos aprenden por coocurrencia, no por polaridad: escribir "no hacemos animación infantil" te asocia con animación infantil.

### C6 · La home sigue siendo una pregunta
La tensión marca-SEO era falsa. Un dominio nuevo **no puede ganar keywords transaccionales con la home**, así que la home queda liberada para ser el gesto de marca. El contexto semántico lo aportan el `<title>` y el subtítulo visible.

---

## 4. La estructura total

### 4.1 · Mapa de clusters

```
A · MARCA Y CONVERSIÓN        La home, el brief, quiénes somos
B · TRANSVERSAL               Precios, catálogo, cómo funciona
C · FIESTAS  ★ prioridad 1    Ayuntamientos, comisiones, verbenas
D · FORMACIONES               Páginas nacionales por tipo de artista
E · EMPRESA                   Cenas de Navidad, convenciones
F · BODAS      → mes 9-10     El pilar que hoy no se puede defender
G · PARA ARTISTAS             Capta músicos, no clientes
H · GUÍAS Y OBSERVATORIO      El activo defendible
```

### 4.2 · Árbol de URLs

```
/                                          Home · la pregunta
/brief                                     noindex · una URL, paso en el hash
/brief/gracias                             noindex, nofollow
/artistas                                  Catálogo · SSG+ISR
/artistas/[slug]                           Ficha · vídeo primero
/precios                                   Pilar transversal ★
/como-funciona
/nosotros
/contacto

── C · FIESTAS ────────────────────────────────────────────────
/orquestas-y-charangas-para-fiestas              HUB del cluster
/orquestas-y-charangas-para-fiestas/cuanto-cuesta          ★ pieza nº 2
/guias/como-contrata-un-ayuntamiento-una-actuacion         ★ pieza nº 1
/guias/como-se-programa-una-fiesta-mayor
/orquestas-para-fiestas-patronales/navarra                 Territorio 1
/orquestas-para-fiestas-patronales/aragon                  Territorio 2
/orquestas-para-fiestas-patronales/castilla-y-leon         Territorio 3
   └── (tope duro: 8 URLs de territorio en 24 meses, verificado en build)

── D · FORMACIONES (nacionales, sin geo) ──────────────────────
/charangas-para-fiestas
/txarangas                                 URL propia, nunca canonical cruzado
/orquestas-para-verbenas
/grupos-de-versiones
/bandas-tributo
/duos-y-solistas-para-eventos
/cuartetos-de-cuerda-para-bodas
/musicos-para-ceremonias
/dj-para-bodas-y-eventos
/magos-para-eventos
/monologuistas-para-eventos
/humoristas-para-eventos

── E · EMPRESA ────────────────────────────────────────────────
/artistas-para-eventos-de-empresa                          PILAR
/artistas-para-eventos-de-empresa/cuanto-cuesta
/artistas-para-eventos-de-empresa/[ciudad]                 Eje CIUDAD · mes 6+

── F · BODAS (mes 9-10) ───────────────────────────────────────
/musica-para-bodas                                         PILAR
/musica-para-bodas/cuanto-cuesta
/musica-para-bodas/[comarca]                               Eje COMARCA

── G · PARA ARTISTAS ──────────────────────────────────────────
/para-artistas
/para-artistas/cuanto-cobrar-por-un-bolo
/para-artistas/como-conseguir-bolos
/para-artistas/como-facturar-un-bolo

── H · OBSERVATORIO ───────────────────────────────────────────
/observatorio                              Índice Show Up del Caché
/observatorio/contratacion-musical-municipal
/guias/[slug]                              Vocabulario del sector
```

### 4.3 · Lo que nunca se crea

| Patrón | Por qué |
|---|---|
| `/fiestas-patronales/[municipio]` | 8.131 páginas finas. Consulta de asistente, no de contratante. |
| `/charangas/navarra` + `/orquestas/navarra` + `/txarangas/navarra` | Cuatro páginas diciendo lo mismo con sinónimos. Patrón exacto de granja. |
| `/musica-para-bodas/[comarca]/[formacion]` | Tercer nivel de combinación. Definición de página finita. |
| `/artistas?tipo=…` indexado | Faceta. `noindex, follow` + canonical a `/artistas`. |
| Listado de topónimos en el footer | Lo primero que detectan los sistemas antispam. Máximo 3 enlaces geo laterales en el cuerpo. |
| Cualquier URL con la palabra `animacion` | Contamina la clasificación de entidad. |

### 4.4 · Decisiones técnicas que no se discuten

- **Dominio:** `showupevents.es`. El ccTLD es la única señal de país que queda desde que Search Console retiró la segmentación internacional.
- **Sin hreflang.** Se usan topónimos oficiales dentro del castellano.
- **Ninguna página indexable se renderiza por petición.** SSG + revalidación por webhook.
- **Facetas: no se crea el enlace.** Filtros como `<button>` + `replaceState`.
- **`noindex` legible antes que `Disallow`.** El `Disallow` de facetas se activa en el mes 3, no el día 1, o Google no puede leer el `noindex`.
- **Presupuesto de rendimiento bloqueante en CI**, en KB y ms por tipo de página.

---

## 5. Orden de publicación

La estacionalidad manda sobre el volumen. **El ciclo de contratación municipal se cierra entre enero y abril** para las fiestas de julio y agosto: para llegar posicionado hay que publicar en **septiembre-octubre**.

| # | Pieza | Debilidad rival | Por qué aquí |
|---|---|---|---|
| 1 | Cómo contrata un ayuntamiento una actuación | **10/10** | Cero competencia comercial, ~80 % de clic, imán de enlaces `.es` municipales |
| 2 | Cuánto cuesta una orquesta / txaranga para las fiestas | **10/10** | **Nadie en todo el nicho publica un precio** |
| 3 | Txarangas y charangas por territorio | 9,5 | Dos SERPs distintos, ventaja gratis sin explotar |
| 4 | Guía de programación de fiestas del pueblo | 9,5 | Lo lee quien firma |
| 5 | Orquesta de verbena por territorio | 9 | Ticket 6.000-30.000 € |
| 6-7 | Monologuista corporativo + cena de Navidad | 9 | Los tres primeros resultados son blogs de hotel y listículos |
| 8-10 | Tributos, magos empresa, grupos de versiones | 8 | |
| 11 | Observatorio (primera edición) | — | Activo defendible y motor de enlaces |
| **12** | **Bodas** | 3 | Solo con autoridad ya construida |

**Fechas innegociables:** cluster de fiestas publicado antes de noviembre. Cluster de empresa en junio. Bodas, mes 9-10.

---

## 6. Los tres activos defendibles

1. **Índice Show Up del Caché** — encuesta anual sobre vuestra propia agenda, segmentada por formación, provincia y temporada. Publicada en CSV bajo **CC BY 4.0**: la licencia *obliga* a atribuir, y la atribución es el KPI. Nunca caché individual, mínimo 5 observaciones por celda, medianas y percentiles, y el artista recibe el informe antes que la prensa.
2. **Observatorio de la Contratación Musical Municipal** — agregando las adjudicaciones de actuaciones que los ayuntamientos publican en sus portales de transparencia. Dato abierto que nadie ha agregado nunca. Es contenido, es prensa local **y es una lista de leads con presupuesto conocido y renovación anual, en el mismo fichero**.
3. **El vocabulario del sector** — no existe ninguna fuente pública española que defina con criterio txaranga vs. charanga, elektrotxaranga, orquesta de verbena vs. grupo de versiones, o monologuista vs. humorista. Es barato de escribir porque el conocimiento ya está en vuestra cabeza, y es citable durante años.

---

## 7. Las cinco cosas del día uno

Antes de escribir una línea de contenido:

1. **Comprobar que Cloudflare no está bloqueando los crawlers de IA.** Lo hace por defecto en dominios nuevos. Sin esto, toda la estrategia GEO es invisible y nadie se entera. Verificar en logs a los 7 días.
2. **Bing Webmaster Tools + IndexNow + Bing Places.** Bing es la puerta de ChatGPT — el 87 % del tráfico de IA. Places verificado multiplica por 3-5 la aparición en recomendaciones locales.
3. **Fijar el descriptor público** en todos los perfiles, exactamente igual en todos.
4. **Número de teléfono trackeado.** El primer lead orgánico llega sobre el mes 5 del contenido de ayuntamientos y **entra por teléfono, no por formulario**. Sin trackeo, el clúster que primero da dinero es invisible en Analytics y se acaba matando lo único que funciona.
5. **La pregunta "¿cómo nos has encontrado?" en el brief.** Es el dato de atribución que ninguna herramienta da.

---

## 8. Qué queda desactualizado

| Documento | Estado |
|---|---|
| `04-arquitectura-seo.md` | **Derogado.** Ordena bodas primero y habla de "ciudades". |
| `02-arquitectura-y-copy.md` | **Parcial.** El mapa del sitio se sustituye por el §4.2 de aquí. El copy y el brief siguen vigentes. |
| `03-direccion-de-arte.md` | **Enmendado** por C4: grano en CSS, foto a sangre solo en home, fichas y territorios. |
| `06-copy-deck-definitivo.md` | **Amplíable.** Necesita dos tonos de "fiestas" (ayuntamiento vs. comisión) y un pilar de precios. Ver §9. |

---

## 9. Lo que hay que decidir con negocio

Nada de esto lo puedo resolver yo solo:

1. **Las horquillas de precio reales.** Todo el pilar de precios —la mayor oportunidad del plan— depende de cifras que solo tenéis vosotros. Sin ellas no se publica: una horquilla inventada destruye la credibilidad que sostiene el resto.
2. **Los territorios de fase 1.** El plan propone Navarra, Aragón y Castilla y León por el peso de la agenda charanguera. Hay que confirmar que **se puede servir de verdad** en esos tres: la capacidad real de servir es criterio eliminatorio.
3. **Validar a mano las 32 búsquedas del anexo del análisis de SERP.** Los volúmenes son estimaciones por observación, no datos de Keyword Planner. El orden de prioridad es sólido; los números hay que confirmarlos antes de gastar.
4. **Los dos compradores del norte.** En Castilla y León paga el ayuntamiento y manda el procedimiento; en Galicia y Asturias paga la comisión y mandan el precio cerrado y la confianza. Son dos copys. ¿Cuál se escribe primero?
