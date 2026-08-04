# Roadmap · Show Up Events

> Orden de trabajo. Se sigue de arriba abajo: una fase no empieza hasta que la
> anterior está cerrada. Lo que rompe este orden es lo que ha producido la web
> que tenemos hoy — bandas correctas sueltas dentro de páginas sin trabajo
> asignado.
>
> · Diagnóstico del estado actual: [`docs/09-auditoria-de-la-web.md`](docs/09-auditoria-de-la-web.md)
> · Estrategia que manda sobre todo lo demás: [`docs/07-estrategia-total.md`](docs/07-estrategia-total.md)
> · Equipo y cómo se trabaja: [`.claude/skills/showup-events/SKILL.md`](.claude/skills/showup-events/SKILL.md)

---

## Las tres reglas de orden

1. **Nada se diseña antes de tener escrito su trabajo.** Cada página y cada
   banda tiene una línea que dice a qué pregunta responde y con qué prueba. Sin
   esa línea no se abre el editor. Es exactamente lo que le faltaba a la banda
   de ocasiones de la home.
2. **Nada se publica que no sea verdad.** Ni un artista, ni una actuación, ni
   un plazo que no tengamos a quién asignar.
3. **Ninguna página se da por buena sin pasar el panel.** `ui-ux-app-elite-team`
   para la forma y `neurodesign-persuasion-lab` para la decisión. Los dos, antes
   de commit, no después.

---

## Fase 0 · Verdad publicable — **BLOQUEANTE**

Nada de lo demás importa mientras la web afirme cosas que no son.

- [ ] Decidir el modelo de roster: real / híbrido / solo formaciones
      (`docs/09 §0`). Recomendación: híbrido ya, real en cuanto haya acuerdos.
- [ ] Confirmar qué artistas del Drive son de verdad nuestros y con qué
      derechos de imagen (carpeta `WEB`, `fotos dani_web`).
- [ ] Reescribir el copy del roster para que sea cierto con lo que haya.
      Muere «Estos ya se han subido con nosotros» si no se han subido.
- [ ] Rellenar los `[pendiente]` de `/aviso-legal` y `/privacidad`: razón
      social, NIF, domicilio.
- [ ] Teléfono y correo reales, con alguien detrás.

**Terminado cuando** cualquier frase de la web se pueda defender delante de un
ajuntament que la comprueba.

---

## Fase 1 · Esqueleto — que cada página tenga un trabajo

- [ ] Mapa de páginas definitivo: ruta, a quién sirve, qué pregunta responde,
      a dónde empuja. Una tabla, en `docs/10-mapa-de-paginas.md`.
- [ ] Matar los duplicados (`docs/09 §3`): un solo componente de cierre
      «¿No está el que buscas?», la garantía enunciada en home y desarrollada
      en `/como-funciona`, y no al revés.
- [ ] Resolver `/contacto` vs `/brief`: `/contacto` es teléfono y correo para
      quien no quiere escribir. Punto.
- [ ] Quitar o reintegrar `/como-funciona#salas` — hoy contradice `docs/07 §C1`.
- [ ] Reescribir «Contratas un nombre. Aparece un equipo.» o matarla.

**Terminado cuando** ninguna banda de la web sea reemplazable por otra sin que
se note.

---

## Fase 2 · Workflow — una sola espina dorsal

El buscador promete buscar. Tiene que buscar.

- [ ] `/buscar`: resultados a la izquierda al instante, conversación a la
      derecha. En móvil, resultados con la conversación en cajón inferior.
- [ ] Mockup del asistente antes de conectarlo: pantallas, estados y las
      preguntas, revisadas como copy y no como producto técnico.
- [ ] Conectar `src/lib/busqueda.ts` (ya hecho) y `/api/recomendar` (ya hecho,
      con guion de reserva si no hay clave de API).
- [ ] Redirigir el buscador del hero y el botón de cabecera a `/buscar`.
- [ ] Retirar el formulario de 7 pasos.
- [ ] La ficha del lead llega a alguien: correo o CRM. Sin esto la fase no vale.
- [ ] `ANTHROPIC_API_KEY` en Vercel. Sin ella la web funciona, pero con guion
      fijo en vez de conversación.

**Terminado cuando** se puede recorrer de la home a «te llamamos» sin pasar por
ninguna pantalla que pida algo que ya has dicho.

---

## Fase 3 · Forma — la UI que hoy no está

Aquí es donde entra el trabajo visual de verdad. Antes no, porque diseñar
bandas sin trabajo asignado es lo que produjo el problema.

- [ ] Sistema visual escrito: cuándo lleva foto una banda, de qué tamaño, con
      qué tratamiento. Corregir la lectura de la enmienda C4: *sin foto a
      sangre* no significa *sin imágenes*.
- [ ] Rehacer las bandas 3, 4, 6 y 7 de la home (`docs/09 §2`).
- [ ] Dar forma a `/musica-para-festa-major`: 439 líneas de buen contenido sin
      una sola imagen.
- [ ] Foto y prueba en las 8 páginas de `/[formacion]`.
- [ ] Pasada de accesibilidad y de Core Web Vitals con las imágenes dentro.
- [ ] Panel de diseño + panel de neurodiseño sobre el conjunto, no por página.

**Terminado cuando** se puede enseñar la web en el móvil de alguien sin
explicarle nada.

---

## Fase 4 · Contenido que posiciona

- [ ] Bodas, según `docs/07 §D2` (mes 9-10, no antes).
- [ ] Resto de guías del clúster de ayuntamientos.
- [ ] Estrategia local por comarcas de fase 1.
- [ ] Decisión sobre catalán y versiones `ca` de las 4 páginas que dan dinero,
      antes de la ventana de contratación municipal (`docs/08`).

---

## Fase 5 · Después del lead

La web genera reuniones. Lo que pasa después decide si sirvieron de algo.

- [ ] Secuencia de seguimiento del lead: primer correo, recordatorio, cierre.
- [ ] Medición: de dónde vino, qué preguntó, qué se le propuso, qué pasó.
- [ ] `comoNosHasEncontrado` explotado de verdad (`docs/07 §7.5`).

---

## Referencias propias — pendiente de Víctor

Víctor ya ha hecho varias webs y alguna sirve. Lo que necesito de cada una para
poder reutilizarla en vez de reinventar:

- URL o repositorio.
- Qué funcionó ahí que quiera repetir aquí (una frase basta).
- Si hay sistema de componentes, tokens o configuración de despliegue que
  merezca la pena heredar.

Sirve para **velocidad, no para dirección**: la dirección de arte de Show Up ya
está decidida en `docs/03` y no se renegocia por parecerse a otro proyecto.

---

## Estado a 4 de agosto de 2026

| Fase | Estado |
|---|---|
| 0 · Verdad publicable | Sin empezar — **bloquea todo** |
| 1 · Esqueleto | Sin empezar |
| 2 · Workflow | Fontanería hecha, interfaz no |
| 3 · Forma | Sin empezar |
| 4 · Contenido | Solo la guía de ayuntamientos |
| 5 · Después del lead | Sin empezar |
