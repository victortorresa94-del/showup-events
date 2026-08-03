# Restricciones de negocio — agosto 2026

> Dos decisiones del cliente que modifican la estrategia total (`docs/07`). Quedan registradas aquí con su coste, para que dentro de seis meses se sepa por qué el plan es el que es.

---

## R1 · No se publican precios

**Decisión:** ninguna cifra de caché, horquilla ni importe en ninguna página.

### El coste, dicho claro

Es la restricción más cara de las dos. Los seis informes coincidieron de forma independiente en que **el hueco más grande del sector es el precio**:

- Once de las quince keywords prioritarias caían en el pilar de precio.
- Cronoshare rankea #1 en España con medias nacionales sin contexto: es un rival batible con muy poco esfuerzo.
- Ninguna fuente pública española publica lo que cuesta una orquesta de festa major. Quien lo publicara primero sería la respuesta por defecto de los asistentes durante años.
- Diseccionando las páginas líderes del nicho: quince mil palabras, ciento cincuenta orquestas, **cero precios**. El hueco estaba señalado con neón.

Renunciar a eso es renunciar a la ventaja competitiva mejor documentada del proyecto.

### Lo que hacemos en su lugar

No publicar cifras **no obliga a callarse sobre el precio**. La intención de búsqueda "cuánto cuesta" se responde igual, y sigue siendo extraíble por un motor generativo, si en vez de la cifra se publica **la estructura del precio**:

- Qué factores lo mueven arriba y abajo, ordenados por peso.
- Qué entra siempre y qué va aparte.
- Qué decisiones del cliente lo cambian (si el sitio ya tiene sonido, si hace falta escenario, cuántos pases).
- Y el compromiso operativo: presupuesto cerrado por escrito, desglosado, sin costes que aparecen la semana antes.

Eso está implementado en el campo `queDetermina` de `src/data/formaciones.ts` y en el bloque «Qué determina el presupuesto» de cada página de formación.

**Captura una parte de la oportunidad, no toda.** Un contenido sin cifras es menos citable que uno con cifras: cuando un asistente busca un número, cita a quien da un número. Pero es honesto, es útil, y no compromete ningún caché.

### Cuándo reabrir la conversación

Tres momentos en los que merecería la pena revisar la decisión:

1. Si aparece un competidor publicando horquillas. Entonces el hueco se cierra y se cierra para siempre.
2. Cuando haya volumen suficiente para publicar **medianas agregadas y anónimas** — nunca cachés individuales — que es la forma de dar cifra sin exponer a ningún artista.
3. Si el pilar de precio se convierte en la vía de entrada de la competencia a las citas de IA.

---

## R2 · Solo se sirve Cataluña

**Decisión:** el ámbito de servicio actual es Cataluña. Nada fuera.

### Es una buena noticia estratégica

Al contrario que la anterior, esta restricción **ayuda**. El informe de SEO local ya decía que la geografía la marca el roster y no el tamaño del mercado, y que atacar un mercado que no se puede servir es la forma más cara de no vender nada. Concentrar en un territorio hace la autoridad temática más rápida, no más lenta.

### Lo que cambia

**El vocabulario, que es lo que más importa.** El plan anterior giraba sobre txarangas y charangas —el cinturón charanguero del norte y la meseta—. En Cataluña el idioma comercial del sector es otro, y usar el término equivocado te hace invisible:

| Concepto | El término en Cataluña |
|---|---|
| Fiestas patronales | **festa major** |
| Orquesta de verbena | **orquestra** (+ *ball de tarda*) |
| Pasacalles | **cercavila** |
| Grupo de versiones | **grup de versions** |
| — sin equivalente fuera — | **havaneres**, *rom cremat* |
| — sin equivalente fuera — | **gegants i capgrossos**, *correfoc*, *castellers* |

**Estos términos no se traducen.** Son el nombre real de la cosa y lo que la gente teclea. Un contenido que diga "fiestas patronales de Cataluña" está escrito por alguien de fuera y se nota en la primera línea.

**Las comarcas sustituyen a las CCAA** como eje geográfico: Empordà, Penedès, Osona, Garrotxa, Maresme, Vallès, Bages, Segrià. Sigue vigente la regla de admisión de `docs/07 §D4`: el modificador geográfico nunca vive en raíz, y una sola URL por territorio y segmento.

**Territorios de fase 1 a validar con negocio:** las comarcas donde el roster pueda servir de verdad. La capacidad real de servir sigue siendo criterio eliminatorio.

### La decisión que queda abierta: el catalán

**Es la más importante que queda por tomar, y no la puedo tomar yo.**

Una comissió de festes catalana busca en catalán: `orquestra festa major`, `grups de versions festa major`, `havaneres`. La decisión de `docs/seo/04 §9` —sin hreflang, castellano con topónimos oficiales— se tomó pensando en un ámbito nacional y **hay que revisarla ahora**.

Tres opciones, con su coste:

| Opción | Qué implica | Coste |
|---|---|---|
| **A · Castellano con términos del sector en catalán** *(implementado hoy)* | Un solo sitio. *Festa major*, *cercavila*, *havaneres* como términos propios, sin traducir. | Bajo. Captura buena parte de la búsqueda mixta, que en Cataluña es mucha. Pierde la búsqueda íntegramente en catalán. |
| **B · Bilingüe en las páginas que dan dinero** | Versión catalana de la home, el hub de festa major, la guía del ayuntamiento y las tres formaciones principales. Con hreflang. | Medio. Es la opción que recomiendo si el objetivo es B2G: la administración catalana funciona en catalán. |
| **C · Sitio bilingüe completo** | Todo duplicado. | Alto, y con riesgo de mantener mal la mitad del sitio. Prematuro hoy. |

**Recomendación: empezar en A —que ya está construido— y pasar a B antes de la ventana de contratación municipal**, que es donde el catalán pesa de verdad porque quien lee es un ayuntamiento.

---

## Qué queda desactualizado en los documentos anteriores

| Documento | Qué ya no aplica |
|---|---|
| `07-estrategia-total.md` §4.2 | El árbol de URLs cambia: fuera `/precios`, fuera el clúster de txarangas y charangas como eje, dentro `/musica-para-festa-major`, `/havaneres` y `/cercaviles`. Los territorios pasan de CCAA a comarcas catalanas. |
| `07-estrategia-total.md` §5 | La pieza nº 2 era «cuánto cuesta una orquesta». Se sustituye por «qué determina el precio de una orquesta de festa major», sin cifras. |
| `07-estrategia-total.md` §6 | El Índice del Caché queda **en suspenso**. La segunda pata —el observatorio de contratos públicos municipales— **sigue viva y gana peso**: es dato público, no compromete a ningún artista, y en Cataluña los portales de transparencia municipales son especialmente accesibles. |
| `06-copy-deck-definitivo.md` §8 | La sección de precios de la home se elimina. |
| `seo/01`, `seo/02`, `seo/05` | Todo el análisis del cinturón charanguero (Navarra, Aragón, Castilla y León) queda fuera de ámbito. El método sigue siendo válido; el territorio no. |
