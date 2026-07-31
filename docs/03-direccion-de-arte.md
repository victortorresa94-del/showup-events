# Show Up Events — Dirección de arte

> **Dirección aprobada: A · «Sala a oscuras»**, con un injerto tipográfico editorial tomado de B.

---

## 1. El concepto

**La sala, un minuto antes de que empiece.**

Negro profundo, una foto de directo real ocupando la pantalla, luz cálida de foco entrando por un lado, y encima un titular grande y limpio. No es una web "de música": es una web que hace sentir la noche que estás comprando.

**Por qué esta y no otra:**
- La foto manda sobre la parrilla. Con catálogo corto, eso es supervivencia.
- El negro con un solo acento cálido se lee como **profesional** por defecto, no como juvenil ni como fiesta. Es el registro de un teatro, no el de una discoteca.
- Aguanta el móvil mucho mejor que una maqueta editorial de tres columnas.

---

## 2. El matiz tipográfico (lo que nos llevamos de B)

**Decisión: sistema de dos voces.**

La condensada sola tira hacia "cartel de festival" y puede leerse como juvenil. La serif editorial sola tira hacia "revista" y exige fotografía impecable. **Juntas dan exactamente lo que buscamos: profesional + moderno, sin edad.**

| Rol | Tipografía | Dónde se usa |
|---|---|---|
| **Display** | Grotesque condensada, peso bold, mayúsculas, tracking apretado | Solo el titular del hero y los números de sección (01/02/03). Nada más. |
| **Editorial** | Serif de contraste alto, en cursiva para el énfasis | Titulares de sección, citas de clientes, la palabra acentuada dentro de una frase. Es la voz que aporta oficio y confianza. |
| **Texto** | Grotesque neutra, humanista, muy legible | Todo el cuerpo, navegación, formularios, fichas. |

**Regla dura:** en una misma pantalla **nunca** aparecen display condensada y serif editorial en el mismo nivel jerárquico. La condensada grita una vez; la serif habla el resto del tiempo.

**Candidatas concretas** (a confirmar en implementación, todas con licencia web viable):
- Display: *Anton*, *Archivo Expanded/Condensed* o *Oswald* — condensada, gratuita, robusta en móvil.
- Editorial: *Instrument Serif*, *Fraunces* o *Playfair Display* — cursiva de contraste alto.
- Texto: *Inter*, *Geist* o *Söhne* — neutra, alta legibilidad, números tabulares.

> **Nota de público:** el público es general, no un nicho de diseño. Cada decisión se valida contra *"¿esto le parecería serio a una madre de la novia de 58 años y moderno a una responsable de RRHH de 34?"*. Si solo cumple una de las dos, se cae.

---

## 3. Paleta

| Token | Hex | Uso |
|---|---|---|
| `--negro` | `#0A0A0A` | Fondo base de toda la web |
| `--negro-superficie` | `#141416` | Tarjetas, campos, capas elevadas |
| `--hueso` | `#F5F1EA` | Texto principal. **No blanco puro** — el blanco puro sobre negro vibra y cansa |
| `--gris` | `#8B8B8F` | Texto secundario, placeholders |
| `--rojo` | `#E8452B` | Acento único: CTA, números, subrayados |
| `--rojo-oscuro` | `#C4351E` | Estado hover del acento |
| `--ambar` | `#FFB020` | Solo como luz dentro de la fotografía, **nunca como color de interfaz** |

**Reglas:**
- **Un solo acento.** El rojo se gana su fuerza siendo escaso: si está en todas partes, no señala nada. Objetivo: menos del 5% de la superficie de cualquier pantalla.
- **Cero degradados** en interfaz. Los degradados que se ven son la luz real de la fotografía.
- El ámbar no es un color de marca, es una propiedad de las fotos.

---

## 4. Fotografía — la regla que sostiene todo

La foto es el 70% del diseño. Si la foto es mala, esta dirección se cae. Por eso:

**Sí:**
- Directos reales, con público visible o insinuado.
- Contraluz: el artista silueteado contra el foco. **Resuelve un problema de negocio**: no depende de que el artista sea fotogénico ni de tener derechos de imagen impecables.
- Grano de película visible, alto contraste, negros empastados.
- Momentos, no posados. Manos levantadas, un micro, un gesto a media acción.

**No:**
- Stock de "gente feliz brindando en una boda".
- Fotos claras, planas, bien iluminadas de frente.
- Cualquier imagen donde se vea que la sala está medio vacía.

**Receta de tratamiento** (aplicable en CSS o en edición):
```
contrast(1.25) saturate(0.75) brightness(0.8)
+ capa de grano en overlay al 6-8%
+ viñeteado radial suave hacia el negro de fondo
+ degradado negro sólido en el borde donde vaya el texto
```
El texto **nunca** se apoya directamente sobre la foto sin ese degradado. Contraste mínimo 4.5:1 medido, no estimado.

---

## 5. Layout y espacio

- **Rejilla de 12 columnas**, contenedor máximo 1440 px, canalón generoso.
- **Alineación a la izquierda** en el hero. Centrar el titular resta seriedad y complica el móvil.
- **Aire abundante.** El lujo aquí no lo da el detalle, lo da el vacío. Secciones separadas por al menos 120 px en escritorio.
- **Radios pequeños:** 8 px en campos y tarjetas, píldora completa solo en el botón principal. Nada de esquinas muy redondeadas — infantilizan.
- **Bordes de 1 px al 10% de blanco** para separar superficies, en lugar de sombras. Las sombras no existen sobre negro.

---

## 6. Movimiento

Discreto y con propósito. El movimiento aquí transmite **solvencia**, no diversión.

- Entradas por *fade + 12 px hacia arriba*, escalonadas 60 ms, disparadas al entrar en viewport.
- Duración 400-600 ms, curva `cubic-bezier(0.22, 1, 0.36, 1)`.
- El hero puede llevar un vídeo en bucle, silenciado, muy oscurecido, de máximo 6 s y menos de 2 MB. **Con imagen estática de respaldo**: si no carga rápido, no se pone.
- **Cero parallax, cero scrolljacking, cero contadores animados.** Son los tres tics que hacen que una web parezca de 2019.
- `prefers-reduced-motion` respetado siempre: sin excepciones.

---

## 7. Componentes clave

**Campo del hero** — el gesto de marca. Alto (64 px), fondo `--negro-superficie`, borde 1 px, placeholder rotativo con transición suave cada 4 s (se detiene al hacer foco). Botón `Empezar` sólido en rojo, dentro del campo a la derecha. En móvil el botón pasa debajo, a ancho completo, y `font-size: 16px` para no disparar el zoom de iOS.

**Tarjeta de artista** — vertical, retrato a sangre con el tratamiento fotográfico de la casa, degradado inferior, nombre en serif editorial, una línea de "para qué noche sirve" en gris. Al hover: la foto escala 1.03 y sube el contraste. **Nunca en grid de 4 columnas** — carrusel horizontal o rejilla de 2-3 como máximo.

**Botón principal** — píldora roja, texto negro (no blanco: sobre rojo el negro tiene más contraste y se lee más caro). Un único botón primario por pantalla.

---

## 8. Accesibilidad — no negociable

Sobre fondo negro es donde más webs "bonitas" fallan.

- Contraste mínimo AA (4.5:1) para texto, 3:1 para elementos de interfaz. Verificado, no supuesto.
- Foco visible siempre: anillo de 2 px en `--rojo` con 2 px de separación.
- El rojo **nunca** es el único portador de información: siempre acompañado de texto o icono.
- Área táctil mínima de 44×44 px.
- Todo navegable con teclado, incluido el carrusel de artistas.

---

## 9. El test de las tres preguntas

Antes de dar por buena cualquier pantalla:

1. **¿Se ve profesional?** ¿Le confiaría un evento de 200 personas alguien que no sabe nada de diseño?
2. **¿Se ve moderno?** ¿Podría ser de 2026 o parece de hace cinco años?
3. **¿Se ve nuestra?** Tapa el logo. ¿Podría ser de un competidor? Si sí, falta trabajo.
