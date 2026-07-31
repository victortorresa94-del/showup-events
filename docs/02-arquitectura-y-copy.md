# Show Up Events — Arquitectura de la web y copy deck

> Modelo **híbrido**: el catálogo es visible y navegable, pero el brief es el motor de conversión.

---

## Mapa del sitio

```
/                     Home
/artistas             Catálogo (filtrado por tipo de noche)
/artistas/[slug]      Ficha de artista
/brief                Formulario multi-paso "Dinos qué noche quieres"
/como-funciona        Los tres movimientos, en detalle
/nosotros             Quiénes somos + por qué existimos
/contacto             Contacto directo (para los que no quieren formulario)
```

**Navegación principal:** `Artistas` · `Cómo funciona` · `Nosotros` — y a la derecha, siempre, el CTA sólido: **`Dinos qué noche quieres`**.

---

## HOME — secciones en orden

### 1. Hero
El elemento decisivo de toda la web. **No es un buscador con filtros. Es una pregunta.**

- **Titular:** `Dinos qué noche quieres.`
- **Subtítulo:** `Encontramos al artista que la llena. Música, magia, monólogo — o lo que haga falta.`
- **Entrada única en línea (el gesto de marca):** un campo de texto grande, tipo conversación, con placeholder rotativo real:
  - *"Boda en septiembre, 120 personas, masía en el Empordà…"*
  - *"Cena de empresa, 60 personas, algo que no aburra…"*
  - *"Fiesta mayor del pueblo, escenario grande, público de todas las edades…"*
- **CTA primario:** `Empezar` → arranca el brief con lo ya escrito precargado.
- **CTA secundario, discreto:** `Ver artistas` (respeta al que viene a mirar).
- **Fondo:** vídeo/foto de directo real, alto contraste, grano. Nada de stock de "gente feliz en una boda".

> Regla de oro del hero: **cero cifras, cero logos de clientes, cero "+50 eventos"**. La primera pantalla solo hace una cosa: preguntar.

### 2. Los tres movimientos
Franja horizontal, numerada, muy tipográfica.

| | |
|---|---|
| **01 · Cuéntanos la noche** | El sitio, la gente, la hora. En tus palabras, no en un formulario de 20 campos. |
| **02 · Te proponemos** | Dos o tres opciones. Con el porqué de cada una. No cuarenta fichas. |
| **03 · Aparecemos** | Contrato, rider, horarios y montaje. El día del evento no llamas a nadie. |

### 3. Artistas destacados
El catálogo asomando, **sin parecer un directorio**.

- Carrusel horizontal de **fichas altas y profundas** (retrato a sangre, nombre, una línea de qué hace, y para qué noche sirve).
- **Nunca un grid de 4 columnas** — delataría el catálogo corto.
- Sin contador, sin paginación visible.
- Cierre de sección: `Ver todos los artistas` →

### 4. La puerta grande
Bloque a pantalla completa, contraste invertido. Es la sección que resuelve el catálogo corto:

> ## ¿No está el que buscas?
> **Es literalmente nuestro trabajo.** Dinos qué tienes en la cabeza y lo encontramos: tributo, banda de versiones, cuarteto de cuerda, mago de cerca, monologuista, DJ. Si toca en España, llegamos.
>
> `[ Pídelo ]`

### 5. Tipos de noche
Entrada al catálogo **por ocasión, no por categoría de artista**. Es el eje de la marca aplicado a la navegación.

`Bodas` · `Empresa` · `Fiestas de ciudad` · `Salas y locales` · `Privados`

### 6. Prueba social
Cuando la haya. Formato **cita larga y concreta**, no carrusel de estrellas.
- Nombre, evento, ciudad, fecha.
- Frase que diga algo real: *"Nos cambiaron el grupo dos semanas antes porque el sitio era más pequeño de lo previsto. Acertaron."*
- **Si aún no hay testimonios, esta sección no existe.** Un testimonio inventado o genérico mata la marca. Se sustituye por una galería de fotos de directos reales.

### 7. FAQ corta
Las cinco objeciones reales: cuánto cuesta, con cuánta antelación, qué pasa si falla el artista, si se puede escuchar antes, qué incluye el precio.

### 8. Cierre
Repetición del hero, a pantalla completa, sin ruido: `Dinos qué noche quieres.` + campo + `Empezar`.

---

## /brief — el formulario

Multi-paso, **una pregunta por pantalla**, barra de progreso, guardado automático. Todas las preguntas en lenguaje humano.

1. **¿Qué celebras?** → boda / empresa / fiesta de ciudad / sala / privado / otra cosa
2. **¿Cuándo?** → fecha o "aún no lo sé"
3. **¿Dónde?** → población + interior/exterior
4. **¿Cuánta gente?** → rangos, no un número exacto
5. **¿Qué quieres que pase?** → texto libre, la pregunta clave. Placeholder: *"que la gente no se siente en toda la noche"*
6. **Presupuesto** → rangos amplios + "no lo sé todavía" **siempre disponible**
7. **¿Cómo te llamamos?** → nombre, email, teléfono

**Reglas:**
- El campo del hero precarga el paso 5 — no se le pide a nadie que escriba dos veces.
- Solo el paso 7 es obligatorio.
- Confirmación con **promesa concreta y verificable**: `Te escribimos en menos de 24 h con dos o tres nombres.` Si no se puede cumplir, se cambia la promesa, no se incumple.

---

## /artistas/[slug] — ficha de artista

Profundidad para que 6 artistas parezcan un catálogo sólido:

1. Retrato a sangre + nombre + una línea
2. **Vídeo de directo** (lo primero que se ve, no enterrado)
3. `Para qué noche sirve` — el bloque diferencial: en qué contexto funciona y en cuál no
4. Formaciones posibles (dúo / trío / banda completa) y qué cambia en cada una
5. Repertorio o muestra de repertorio
6. Dónde han tocado
7. Requisitos técnicos, en cristiano
8. CTA: `Pregunta por [nombre]` → brief precargado con ese artista

---

## Copy: prohibiciones

Ninguna de estas palabras aparece en la web:

`increíble` · `único` · `mágico` (salvo hablando literalmente de magia) · `inolvidable` · `experiencia 360` · `proveedor` · `solución integral` · `sin compromiso` · `los mejores artistas` · `amplia experiencia`

---

## Notas de conversión

- **Un solo CTA primario** en toda la web: el brief. Todo lo demás es secundario.
- El brief es accesible desde cualquier sección sin volver a la home.
- La ficha de artista **nunca** es un callejón sin salida: siempre lleva al brief.
- Móvil primero: el campo del hero debe ser cómodo con el pulgar y no disparar zoom en iOS (font-size ≥ 16px).
