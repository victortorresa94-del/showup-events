import type { Metadata } from 'next'
import { Seccion } from '@/components/Seccion'
import { SITE } from '@/lib/site'

// noindex: son páginas obligatorias, no de captación. `follow` para no cortar
// el flujo de enlaces del pie (docs/seo/04 §5).
export const metadata: Metadata = {
  title: 'Aviso legal',
  robots: { index: false, follow: true },
}

export default function AvisoLegal() {
  return (
    <Seccion>
      <div className="contenedor max-w-lectura">
        <h1 className="font-editorial text-4xl leading-tight sm:text-5xl">Aviso legal</h1>

        <div className="mt-10 space-y-8 leading-relaxed text-gris">
          <section>
            <h2 className="text-lg font-semibold text-hueso">Titular del sitio</h2>
            <p className="mt-3">
              Este sitio web es titularidad de {SITE.razonSocial}.
              {/* TODO(negocio): razón social completa, NIF/CIF y domicilio fiscal. */}
            </p>
            <ul className="mt-4 space-y-1">
              <li>Denominación social: [pendiente]</li>
              <li>NIF: [pendiente]</li>
              <li>Domicilio: [pendiente]</li>
              <li>
                Correo:{' '}
                <a href={`mailto:${SITE.email}`} className="text-hueso underline underline-offset-4">
                  {SITE.email}
                </a>
              </li>
              <li>
                Teléfono:{' '}
                <a href={`tel:${SITE.telefono}`} className="text-hueso underline underline-offset-4">
                  {SITE.telefonoVisible}
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-hueso">Objeto</h2>
            <p className="mt-3">
              {SITE.razonSocial} es una empresa de intermediación y producción artística: pone en
              contacto a quien organiza un evento con artistas de música en directo y espectáculo, y
              se encarga de la contratación, la coordinación técnica y la logística de la actuación.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-hueso">Condiciones de uso</h2>
            <p className="mt-3">
              El acceso a este sitio es gratuito y no exige registro. El envío de un formulario no
              constituye contrato ni reserva: es una solicitud de propuesta. Cualquier contratación
              se formaliza por escrito, con presupuesto aceptado y contrato firmado.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-hueso">Propiedad intelectual</h2>
            <p className="mt-3">
              Los textos, el diseño y los contenidos de este sitio son propiedad de{' '}
              {SITE.razonSocial} salvo indicación en contrario. Los nombres, marcas y materiales de
              los artistas pertenecen a sus titulares y se usan con su autorización.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-hueso">Responsabilidad</h2>
            <p className="mt-3">
              La información publicada tiene carácter orientativo. Las condiciones concretas de cada
              actuación —formato, duración, requisitos técnicos y precio— se fijan siempre en el
              presupuesto y en el contrato de cada evento.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-hueso">Legislación aplicable</h2>
            <p className="mt-3">
              Esta relación se rige por la legislación española. Para cualquier controversia serán
              competentes los juzgados y tribunales que correspondan conforme a la normativa
              aplicable en materia de consumidores y usuarios.
            </p>
          </section>
        </div>
      </div>
    </Seccion>
  )
}
