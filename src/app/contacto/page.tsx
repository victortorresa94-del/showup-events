import type { Metadata } from 'next'
import Link from 'next/link'
import { BotonPrimario, Entradilla, Seccion, TituloSeccion } from '@/components/Seccion'
import { SITE } from '@/lib/site'

/*
 * Cluster A · marca y conversión (docs/07 §4.2).
 * Tipográfica, sin foto a sangre: el LCP es el <h1> (docs/07 §C4).
 *
 * El teléfono es el número trackeado de docs/07 §7.4: el primer lead orgánico
 * del clúster de ayuntamientos entra por teléfono, no por formulario. Se pone
 * arriba y se pone grande, no escondido en el pie.
 *
 * Restricción de cliente (agosto 2026): ninguna cifra en euros en el sitio.
 */

export const metadata: Metadata = {
  title: 'Contacto',
  description:
    'Teléfono, correo y el brief de dos minutos. Te contestamos en menos de 24 h con dos o tres nombres. Si tu evento es en menos de dos semanas, llama.',
  alternates: { canonical: '/contacto' },
}

export default function Contacto() {
  return (
    <>
      <section className="border-b border-white/10">
        <div className="contenedor py-16 lg:py-24">
          <p className="text-xs uppercase tracking-[0.2em] text-rojo">Contacto</p>
          <h1 className="mt-5 max-w-3xl font-editorial text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
            Habla con nosotros. Contestamos nosotros.
          </h1>
          <p className="mt-7 max-w-lectura text-lg leading-relaxed text-hueso/85">
            No hay centralita ni tique de soporte. Al otro lado hay dos personas que conocen a los
            grupos por su nombre y que han montado en una plaza en agosto.
          </p>
        </div>
      </section>

      <Seccion>
        <div className="contenedor">
          <div className="grid gap-px overflow-hidden rounded-lg bg-white/10 sm:grid-cols-3">
            <div className="bg-negro p-8">
              <h2 className="text-xs uppercase tracking-[0.18em] text-rojo">Teléfono</h2>
              <p className="mt-4 text-2xl font-semibold">
                <a href={`tel:${SITE.telefono}`} className="hover:text-rojo">
                  {SITE.telefonoVisible}
                </a>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gris">
                De lunes a viernes. Si tu evento es en menos de dos semanas, llama en vez de
                escribir.
              </p>
            </div>

            <div className="bg-negro p-8">
              <h2 className="text-xs uppercase tracking-[0.18em] text-rojo">Correo</h2>
              <p className="mt-4 break-words text-2xl font-semibold">
                <a href={`mailto:${SITE.email}`} className="hover:text-rojo">
                  {SITE.email}
                </a>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gris">
                Cuéntanos la fecha, el sitio y cuánta gente sois. Con eso ya podemos empezar.
              </p>
            </div>

            <div className="bg-negro p-8">
              <h2 className="text-xs uppercase tracking-[0.18em] text-rojo">El brief</h2>
              <p className="mt-4 text-2xl font-semibold">Dos minutos</p>
              <p className="mt-3 text-sm leading-relaxed text-gris">
                Siete preguntas y solo una obligatoria. Es la vía por la que mejor te podemos
                contestar.
              </p>
              <p className="mt-5">
                <Link href="/brief" className="text-hueso underline underline-offset-4 hover:text-rojo">
                  Cuéntanos la noche →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Seccion>

      <Seccion className="border-t border-white/10 bg-superficie/40">
        <div className="contenedor">
          <TituloSeccion>Qué pasa después.</TituloSeccion>
          <Entradilla>
            Te escribimos en menos de 24 h con dos o tres nombres y el porqué de cada uno. Si es fin
            de semana puede que sea el lunes por la mañana: preferimos decírtelo a quedar bien ahora
            y mal el martes.
          </Entradilla>

          <p className="mt-10 max-w-lectura leading-relaxed text-gris">
            Esto no es un alta en nada, es un correo que empieza una conversación. Y no cobramos por
            proponer: si al final no encaja ninguno de los nombres que te damos, no ha pasado nada.
          </p>
        </div>
      </Seccion>

      {/* ── SI ERES AJUNTAMENT O COMISSIÓ ──────────────────────────────── */}
      <Seccion className="border-t border-white/10">
        <div className="contenedor">
          <TituloSeccion>Si llamas desde un ajuntament o una comissió de festes.</TituloSeccion>
          <p className="mt-8 max-w-lectura leading-relaxed text-gris">
            Dinos en la primera llamada tres cosas y te ahorramos dos semanas: las fechas de la festa
            major, si el gasto lo tramita el ajuntament o la comissió, y si la plaza tiene escenario,
            sonido y luces o hay que llevarlo todo. Con eso podemos decirte enseguida qué formaciones
            tienen esa fecha libre.
          </p>
          <p className="mt-5 max-w-lectura leading-relaxed text-gris">
            Los papeles —alta de creditors, certificados de estar al corriente, declaración
            responsable, póliza de responsabilidad civil— los tenemos preparados y los mandamos el
            mismo día que nos los pidáis. Si quieres saber cómo va el expediente por dentro, lo
            contamos entero en la{' '}
            <Link
              href="/guias/como-contrata-un-ayuntamiento-una-actuacion"
              className="text-hueso underline underline-offset-4 hover:text-rojo"
            >
              guía de contratación municipal
            </Link>
            .
          </p>

          <div className="mt-12">
            <BotonPrimario href="/brief">Cuéntanos la noche</BotonPrimario>
          </div>
        </div>
      </Seccion>
    </>
  )
}
