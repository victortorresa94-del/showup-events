import type { Metadata } from 'next'
import { Seccion } from '@/components/Seccion'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Política de privacidad',
  robots: { index: false, follow: true },
}

export default function Privacidad() {
  return (
    <Seccion>
      <div className="contenedor max-w-lectura">
        <h1 className="font-editorial text-4xl leading-tight sm:text-5xl">
          Política de privacidad
        </h1>
        <p className="mt-6 leading-relaxed text-gris">
          Lo corto: solo pedimos lo que necesitamos para proponerte artistas, no se lo vendemos a
          nadie y puedes pedirnos que lo borremos cuando quieras.
        </p>

        <div className="mt-10 space-y-8 leading-relaxed text-gris">
          <section>
            <h2 className="text-lg font-semibold text-hueso">Quién trata tus datos</h2>
            <p className="mt-3">
              {SITE.razonSocial}. {/* TODO(negocio): NIF y domicilio del responsable. */}
              Puedes contactarnos en{' '}
              <a href={`mailto:${SITE.email}`} className="text-hueso underline underline-offset-4">
                {SITE.email}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-hueso">Qué datos recogemos</h2>
            <p className="mt-3">
              Los que nos das en el formulario: nombre, correo, teléfono si nos lo dejas, y lo que
              nos cuentes sobre tu evento —fecha, lugar, número de asistentes y qué quieres que
              pase—. Registramos también la página por la que entraste, para saber qué contenidos
              nos funcionan.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-hueso">Para qué</h2>
            <ul className="mt-3 space-y-2">
              <li>Estudiar tu petición y proponerte artistas.</li>
              <li>Contactar contigo por correo o teléfono para concretar la propuesta.</li>
              <li>Gestionar la contratación si finalmente sale adelante.</li>
            </ul>
            <p className="mt-3">
              La base legal es la aplicación de medidas precontractuales a petición tuya y, en su
              caso, la ejecución del contrato.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-hueso">Con quién los compartimos</h2>
            <p className="mt-3">
              Con el artista o artistas que te proponemos, y solo lo imprescindible para valorar la
              fecha y las condiciones. Con nuestros proveedores de correo y alojamiento, que actúan
              como encargados del tratamiento. Con nadie más, y nunca para venderlos.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-hueso">Cuánto tiempo los guardamos</h2>
            <p className="mt-3">
              Mientras dure la conversación y, si contratas, durante los plazos legales de
              conservación fiscal y contable. Si no llegamos a trabajar juntos, los eliminamos
              cuando dejan de ser útiles.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-hueso">Tus derechos</h2>
            <p className="mt-3">
              Puedes acceder a tus datos, rectificarlos, suprimirlos, oponerte al tratamiento,
              limitarlo o pedir su portabilidad escribiéndonos a{' '}
              <a href={`mailto:${SITE.email}`} className="text-hueso underline underline-offset-4">
                {SITE.email}
              </a>
              . Si crees que no lo hemos hecho bien, puedes reclamar ante la Agencia Española de
              Protección de Datos.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-hueso">Cookies</h2>
            <p className="mt-3">
              Este sitio no usa cookies publicitarias ni de seguimiento de terceros. Si en algún
              momento incorporamos analítica, se pedirá tu consentimiento antes y se explicará aquí.
              {/* TODO(negocio): actualizar al instrumentar analítica y el número trackeado. */}
            </p>
          </section>
        </div>
      </div>
    </Seccion>
  )
}
