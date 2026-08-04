# 09 · Auditoría de la web que hay hoy

> Estado: 4 de agosto de 2026. Rama `claude/showup-events-platform-p1ogxe`.
> Este documento no propone nada nuevo: mira lo que existe y dice qué se queda,
> qué se rehace y qué se mata. De aquí sale la lista de trabajo del ROADMAP.

---

## 0. El bloqueo que va antes que el diseño

**Los seis artistas publicados son inventados.** `src/data/artistas.ts` contiene
seis actos de muestra —Les Dotze, Orquestra Miramar, Fanfàrria del Bages, Ramon
Prats, Marc Vela, Cor de Cala— con biografía, repertorio, sitios donde han
tocado y fotos generadas. La home los presenta bajo el titular **«Estos ya se
han subido con nosotros»**, y las fichas dicen **«están aquí porque los hemos
visto tocar»**.

Eso es una afirmación falsa sobre una empresa real, en una web pública, sobre
actuaciones que no han existido. No es un problema de diseño ni de tono: es la
clase de cosa que un ayuntamiento comprueba antes de adjudicar, y que no se
arregla después. Mientras siga así, no tiene sentido pulir la tipografía de esa
sección.

Tres salidas, por orden de preferencia:

1. **Roster real.** Publicar solo artistas con los que exista acuerdo y
   material propio. Es lo que hay que perseguir, y el material de Drive
   (Alfred García, Serginhio Moreira, MNerea y la carpeta `logos e imagenes`)
   es el punto de partida, pendiente de confirmar cuáles son de verdad
   nuestros y con qué derechos de imagen.
2. **Híbrido honesto.** Los reales con nombre y foto; el resto del catálogo
   descrito por **tipo de formación**, sin nombre propio inventado. Las páginas
   de `/[formacion]` ya hacen esto y funcionan: explican el producto sin
   prometer un artista concreto.
3. **Cero nombres.** Solo formaciones. Es la opción menos atractiva
   visualmente, pero es publicable mañana sin mentir.

Recomendación: **2 ahora, 1 en cuanto lleguen los acuerdos.** El copy pasa de
«estos ya se han subido con nosotros» a algo que sea cierto con los que haya.

---

## 1. Inventario de rutas

| Ruta | Qué es | Veredicto |
|---|---|---|
| `/` | Home | Rehacer bandas (§2) |
| `/artistas` | Listado del roster | Bloqueada por §0 |
| `/artistas/[slug]` | Ficha profunda | Estructura buena, contenido bloqueado por §0 |
| `/[formacion]` (×8) | Clúster de producto | **Lo mejor que hay.** Falta foto y prueba |
| `/musica-para-festa-major` | Página de territorio/ocasión | Fuerte de contenido, muerta de forma (439 líneas sin una imagen) |
| `/como-funciona` | Proceso + garantía + precio | Rehacer: solapa con home y contiene material muerto |
| `/nosotros` | Criterio y ámbito | Correcta y corta. Mantener |
| `/contacto` | Teléfono, correo, brief | Se solapa con `/brief`. Fusionar |
| `/brief` + `/brief/gracias` | Formulario de 7 pasos | Sustituir por `/buscar` (§4) |
| `/para-artistas` | Captación de oferta | Correcta. No tocar todavía |
| `/guias/como-contrata-un-ayuntamiento…` | Guía larga | Activo SEO real. Mantener y replicar |
| `/aviso-legal`, `/privacidad` | Legales | **Con `[pendiente]` en los datos fiscales.** Bloqueante para publicar |
| `not-found` | 404 | Correcta |

Faltan, según `docs/07`: bodas (mes 9-10), el resto de guías del clúster de
ayuntamientos, y una página de casos/trabajos que hoy no puede existir por §0.

---

## 2. La home, banda a banda

El criterio con el que juzgo cada una:

> **Una banda se gana el sitio si responde a la pregunta que la persona se está
> haciendo en ese punto del scroll, y lo hace con una prueba, no con una
> afirmación.** La que solo afirma, sobra.

| # | Banda | Pregunta que responde | Cómo lo hace | Veredicto |
|---|---|---|---|---|
| 1 | Hero + buscador | «¿esto qué es?» | Foto de plaza + el gesto + buscador centrado | **Se queda.** Único arreglo: el buscador debe llevar a resultados, no a un formulario |
| 2 | Artistas | «¿tenéis algo?» | Carrusel de fichas altas con foto | **Forma correcta, contenido falso** (§0) |
| 3 | Tres pasos | «¿cómo funciona esto?» | Tres columnas de texto con un número grande | **Rehacer.** Afirma, no prueba. Sin imagen, sin cara, sin nada que mirar |
| 4 | Ocasiones | «¿esto sirve para lo mío?» | Cuatro cajas de una línea, sin imagen | **Matar o rehacer de cero** — ver abajo |
| 5 | Garantía | «¿y si me falláis?» | Una frase grande + la letra pequeña | **La mejor banda de la web.** Se queda intacta |
| 6 | Puerta grande | «¿y si quiero algo que no tenéis?» | Tres párrafos seguidos | **El mejor argumento del negocio, en el peor formato.** Rehacer |
| 7 | Cierre | — | Repite el H1 del hero y repite el buscador | **Reducir.** Hoy es un eco |

### La banda 4, que es la que se ve

Víctor la señaló y tiene razón. Diagnóstico exacto de por qué molesta:

- **Es un menú disfrazado de sección.** Cuatro cajas de texto plano donde la
  única jerarquía es el orden de lectura.
- **Los cuatro enlaces van a cosas distintas** sin avisar: dos a páginas de
  formación (`/monologuistas-para-eventos`, `/grupos-de-versiones`), una a una
  página de territorio (`/musica-para-festa-major`) y una a un formulario
  (`/brief`). Cuatro promesas iguales, cuatro destinos incompatibles.
- **«Bodas» enlaza a grupos de versiones** y «Empresa» a monologuistas: se
  está usando una ocasión como etiqueta de un producto que no la cubre.
- **No aporta prueba.** «Que no se vaya la gente a las once» es una buena
  frase, pero flotando sin imagen ni contexto se lee como relleno.

No es un problema de esa banda: es el síntoma de una regla mal aplicada. La
enmienda C4 de `docs/07` dijo *«nada de foto a sangre fuera de home, fichas de
artista y páginas de territorio»* por Core Web Vitals — y se ejecutó como *«sin
imágenes en ningún sitio»*. No es lo mismo. Una foto de 900 px dentro de una
tarjeta no es una foto a sangre y no toca el LCP.

**Cómo debería quedar:** cuatro accesos con imagen real de ese tipo de evento,
un dato concreto cada uno (no una frase de marca), y los cuatro apuntando al
mismo tipo de destino. Si no hay foto real de las cuatro ocasiones, la banda no
se publica: mejor tres con foto que cuatro con hueco.

---

## 3. Lo que se repite por toda la web

Tres bloques viven duplicados. Cada duplicado es una decisión que nadie tomó:

| Bloque | Dónde aparece | Qué hacer |
|---|---|---|
| «¿No está el que buscas?» | `/`, `/artistas`, `/[formacion]` | Una sola versión, componente compartido, con variante corta para páginas interiores |
| «La Garantía Show Up» | `/`, `/como-funciona` | Home la enuncia; `/como-funciona` la desarrolla. Hoy las dos hacen lo mismo |
| «Contratas un nombre. Aparece un equipo.» | `/como-funciona` | **Se borró de la home por pesada y sigue viva aquí.** Reescribir corta o matar |

Y una contradicción de estrategia: `/como-funciona#salas` mantiene una sección
de **«Salas y locales»** cuando `docs/07 §C1` decidió que los bares quedan
**fuera** como canal. O vuelve a entrar por decisión explícita, o se va.

---

## 4. El workflow: hoy hay cuatro puertas y ninguna manda

Una persona que quiere contratar algo puede hoy:

1. escribir en el buscador del hero → cae en un formulario de 7 pasos;
2. pulsar «Dinos qué noche quieres» en la cabecera → el mismo formulario;
3. ir a `/contacto` → teléfono, correo y un enlace al mismo formulario;
4. llamar por teléfono.

Cuatro entradas, tres de ellas al mismo sitio, y el sitio es un interrogatorio.
De ahí la crítica: *el buscador promete buscar y entrega un formulario*.

**El workflow que toca:** una sola espina dorsal.

```
cualquier página → el buscador → /buscar
                                    ├── izquierda: resultados al instante (local, sin IA)
                                    └── derecha: la conversación que afina y recoge el contacto
                                                        ↓
                                              lead con ficha → llamada
```

`/contacto` deja de competir y pasa a ser lo que debe: teléfono y correo para
quien no quiere escribir. El formulario de 7 pasos desaparece.

Ya está construida la mitad que no se ve —`src/lib/busqueda.ts` (búsqueda
local instantánea) y `src/app/api/recomendar/route.ts` (el asistente, con
guion de reserva si no hay clave de API)—. Falta la interfaz, y va después de
esta auditoría, no antes.

---

## 5. Lo que hace falta de fuera para desbloquear

Nada de esto lo puedo resolver yo desde el repo:

| Qué | Para qué | Bloquea |
|---|---|---|
| Artistas reales + derechos de foto | Sustituir el roster inventado | §0, `/artistas`, home banda 2, casos |
| Datos fiscales (razón social, NIF, domicilio) | `/aviso-legal` y `/privacidad` | Publicar en producción |
| Teléfono y correo reales con seguimiento | La promesa de las 24 h | Toda la conversión |
| Quién contesta los leads, y en cuánto | Que la promesa sea verdad | El asistente |
| Comarcas de fase 1 | Contenido local | Clúster local |
| Fotos reales de eventos propios | Banda 4, `/musica-para-festa-major` | La mitad del rediseño |
| Referencias: las webs que ya hizo Víctor | Reutilizar sistema y componentes | Velocidad, no dirección |
| Decisión sobre catalán | Versiones `ca` de las 4 páginas que dan dinero | Ventana de contratación municipal |

Mientras no lleguen, se puede trabajar con material propio generado y marcado
como tal — pero **nunca presentado como una actuación que ocurrió**.
