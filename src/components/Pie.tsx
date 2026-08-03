import Link from 'next/link'
import { CLAIM, SITE } from '@/lib/site'

// Ojo: prohibido el listado de topónimos en el pie (docs/07 §4.3).
// Es el primer patrón que detectan los sistemas antispam.
const COLUMNAS = [
  {
    titulo: 'Para tu noche',
    enlaces: [
      { href: '/musica-para-festa-major', texto: 'Festa major' },
      { href: '/artistas', texto: 'Artistas' },
      { href: '/guias/como-contrata-un-ayuntamiento-una-actuacion', texto: 'Contratar desde un ayuntamiento' },
      { href: '/brief', texto: 'Pedir una propuesta' },
    ],
  },
  {
    titulo: 'Formaciones',
    enlaces: [
      { href: '/orquestas-para-festa-major', texto: 'Orquestas' },
      { href: '/grupos-de-versiones', texto: 'Grupos de versiones' },
      { href: '/havaneres', texto: 'Havaneres' },
      { href: '/cercaviles', texto: 'Cercaviles' },
    ],
  },
  {
    titulo: 'Show Up',
    enlaces: [
      { href: '/como-funciona', texto: 'Cómo funciona' },
      { href: '/nosotros', texto: 'Nosotros' },
      { href: '/para-artistas', texto: '¿Eres artista?' },
      { href: '/contacto', texto: 'Contacto' },
    ],
  },
]

export function Pie() {
  return (
    <footer className="border-t border-white/10 bg-negro">
      <div className="contenedor py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <p className="font-display text-3xl uppercase leading-none">Show Up</p>
            <p className="mt-4 max-w-xs font-editorial text-xl italic leading-snug text-hueso">
              {CLAIM.promesa}
            </p>
            <p className="mt-6 text-sm text-gris">
              ¿Buscas otra cosa?{' '}
              <Link href="/brief" className="text-hueso underline underline-offset-4">
                Es literalmente nuestro trabajo.
              </Link>
            </p>
          </div>

          {COLUMNAS.map((col) => (
            <nav key={col.titulo} aria-label={col.titulo}>
              <h2 className="text-xs uppercase tracking-[0.18em] text-gris">{col.titulo}</h2>
              <ul className="mt-5 space-y-3">
                {col.enlaces.map((e) => (
                  <li key={e.href}>
                    <Link
                      href={e.href}
                      className="text-sm text-hueso/85 transition-colors hover:text-rojo"
                    >
                      {e.texto}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-white/10 pt-8 text-sm text-gris sm:flex-row sm:items-center sm:justify-between">
          <p>
            <a href={`tel:${SITE.telefono}`} className="text-hueso hover:text-rojo">
              {SITE.telefonoVisible}
            </a>
            <span className="mx-2 text-white/20">·</span>
            <a href={`mailto:${SITE.email}`} className="text-hueso hover:text-rojo">
              {SITE.email}
            </a>
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/aviso-legal" className="hover:text-hueso">
              Aviso legal
            </Link>
            <Link href="/privacidad" className="hover:text-hueso">
              Privacidad
            </Link>
            <span>© {new Date().getFullYear()} {SITE.razonSocial}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
