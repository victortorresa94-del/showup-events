---
name: showup-events
description: Equipo, reglas y orden de trabajo del proyecto Show Up Events (web de contratación de artistas para eventos en Cataluña). Úsala SIEMPRE que se toque cualquier cosa de este repositorio - páginas, copy, diseño, datos de artistas, SEO, el asistente de búsqueda o el despliegue. Contiene las restricciones de negocio que no se negocian, qué skill convocar para cada decisión y qué hay que cumplir antes de dar una página por terminada.
---

# Show Up Events · equipo y forma de trabajar

Empresa real, recién registrada, que busca y contrata artistas para eventos en
Cataluña. La web no cierra contrataciones: **genera reuniones**. Todo lo que se
construya aquí se juzga por si acerca o aleja una llamada.

---

## Lo que no se negocia

1. **No se publican precios.** Ni cifras, ni rangos, ni «desde». En su lugar se
   publica *qué determina* el presupuesto. Coste documentado en `docs/08`.
2. **Solo Cataluña**, de momento.
3. **No hay espectáculo infantil.** Y la palabra «animación» no se usa nunca,
   ni siquiera para excluirla — los modelos aprenden por coocurrencia
   (`docs/07 §C6`).
4. **No se inventa nada publicable.** Ni artistas, ni actuaciones, ni premios,
   ni disponibilidad de una fecha. Si no se puede demostrar, no se escribe.
5. **Vocabulario del territorio**, sin traducir: festa major, cercavila,
   comissió de festes, ball de tarda, havaneres, bolo, pases, rider.
6. **Público general, no nicho de diseño.** Profesional y moderno; nunca
   moderno a costa de que no se entienda.
7. **Ni toda la web oscura ni toda clara.** Alternancia deliberada, oscuro
   donde hay foto y promesa, claro donde hay que leer.

---

## El equipo

Cada decisión tiene un responsable. Convocar la skill **antes** de escribir, no
para validar lo ya escrito.

| Ámbito | Skill | Cuándo se convoca |
|---|---|---|
| Sector | `music-industry-spain` | Quién decide una contratación, cómo compra un ajuntament, vocabulario y ciclos |
| Marca y copy | `risto-mejide-brand-architect` | Cualquier titular, claim, tono o nombre de sección |
| Oferta | `alex-hormozi-offer-architect` | Garantías, promesas, CTA, qué se ofrece y con qué condiciones |
| SEO / GEO | `romuald-fons-seo-king` | URLs, clústeres, títulos, qué contenido existe y cuál no |
| Diseño | `ui-ux-app-elite-team` | Revisión obligatoria de toda página antes de darla por buena |
| Conversión | `neurodesign-persuasion-lab` | Jerarquía, carga cognitiva, fricción, por qué una banda no funciona |
| Fotografía | `gpt-image-2-prompter` + `photography-composition-lighting` + `film-reference-visual-language` + `iterative-image-refinement` | Toda imagen que entre en el repo |
| Legal y fiscal | `fiscalidad-musica-espana` + `jugadas-fiscales-victor` | Contenido sobre contratación, facturación, pago a músicos |
| Seguimiento del lead | `cold-email-mastery` + `follow-up-sequences` + `email-subject-lines` + `outreach-funnel-design` | Todo lo que pasa **después** de que alguien deja sus datos |
| Asistente de búsqueda | `claude-api` + `dotcsv-ai-whisperer` | El chat de `/buscar` y su prompt |
| Higiene de sesión | `token-optimization-cc` | Sesiones largas |

Generación de imagen: **Aura MCP con `gpt-image-2`**. Siempre `estimateOnly`
antes de gastar, y siempre se le enseña el resultado a Víctor antes de
construir con él.

## Personal humano que hace falta

No todo lo resuelve el repositorio. Bloqueos abiertos en `ROADMAP.md` fase 0:
artistas reales con derechos de imagen, datos fiscales, un teléfono y un correo
con alguien detrás, y quien conteste los leads dentro de las 24 h que promete
la web.

---

## El orden de trabajo

Se sigue `ROADMAP.md` de arriba abajo. Las tres reglas de orden:

1. **Nada se diseña antes de tener escrito su trabajo** — a qué pregunta
   responde esa banda y con qué prueba.
2. **Nada se publica que no sea verdad.**
3. **Ninguna página se cierra sin panel de diseño y de neurodiseño.**

---

## Una banda está terminada cuando

- Responde a una pregunta concreta que la persona se hace en ese punto del
  scroll, y esa pregunta está escrita.
- Aporta una **prueba**, no una afirmación. Si solo afirma, sobra.
- No la puede sustituir otra banda de la web sin que se note.
- No repite un bloque que ya vive en otra página.
- Tiene algo que mirar, o hay una razón escrita de por qué no lo tiene.
- Funciona en un móvil sin explicación.

Cuidado con la enmienda C4 de `docs/07`: dice *sin foto a sangre* fuera de home,
fichas y territorio. **No dice sin imágenes.** Se ha estado leyendo mal.

---

## Jerarquía documental

`docs/07-estrategia-total.md` manda sobre todo lo demás y deroga `docs/04`.

| Documento | Qué contiene |
|---|---|
| `docs/01` | Plataforma de marca, claim en dos capas |
| `docs/02` | Arquitectura y copy (parcialmente superado por 07) |
| `docs/03` | Dirección de arte |
| `docs/05` | Oferta y conversión |
| `docs/06` | Copy deck definitivo |
| `docs/07` | **Estrategia total. Manda.** |
| `docs/08` | Restricciones de negocio |
| `docs/09` | Auditoría del estado actual |
| `docs/seo/01-06` | Entregables de los especialistas |

Claim: gesto **«Dinos qué noche quieres.»** · promesa **«Aparecemos nosotros.
Quedas bien tú.»**

---

## Detalles técnicos que se olvidan

- Next 16 (App Router), React 19, Tailwind 3. Todo el código y los comentarios
  en castellano, igual que el resto del repo.
- El texto del buscador viaja por `sessionStorage`, **nunca** por query string
  (`docs/seo/04 §11`).
- Las previews que no son producción llevan `X-Robots-Tag: noindex` desde
  `next.config.mjs`. No tocar.
- El grano es CSS (`.grano`), nunca incrustado en la imagen.
- Rama de trabajo: `claude/showup-events-platform-p1ogxe`.
- `npm run typecheck` y `npm run build` antes de cualquier commit.
