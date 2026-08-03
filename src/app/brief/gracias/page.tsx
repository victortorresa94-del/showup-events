import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Recibido',
  robots: { index: false, follow: false },
}

export default function Gracias() {
  return (
    <div className="contenedor flex min-h-[70vh] items-center py-20">
      <div className="max-w-2xl">
        <h1 className="font-editorial text-4xl leading-tight sm:text-5xl lg:text-6xl">
          Recibido. Ahora empieza lo nuestro.
        </h1>

        <p className="mt-8 text-lg leading-relaxed text-hueso/85">
          Te escribimos <strong className="text-hueso">en menos de 24 h</strong> con dos o tres
          nombres y por qué cada uno. Si es fin de semana puede que sea el lunes por la mañana:
          preferimos decírtelo a quedar bien ahora y mal el martes.
        </p>

        <p className="mt-6 leading-relaxed text-gris">
          Si tu evento es en menos de dos semanas, no esperes al email: llámanos al{' '}
          <a href={`tel:${SITE.telefono}`} className="text-hueso underline underline-offset-4">
            {SITE.telefonoVisible}
          </a>
          .
        </p>

        <p className="mt-6 font-editorial text-2xl italic text-gris">
          Mientras tanto no hace falta que hagas nada. En serio.
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-6">
          <Link
            href="/artistas"
            className="rounded-full hairline px-6 py-3 transition-colors hover:border-white/35"
          >
            Ver artistas
          </Link>
          <Link href="/brief" className="text-sm text-gris underline underline-offset-4 hover:text-hueso">
            ¿Se te ha olvidado algo? Añádelo aquí
          </Link>
        </div>
      </div>
    </div>
  )
}
