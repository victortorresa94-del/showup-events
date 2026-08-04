'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Logo } from '@/components/Logo'
import { CLAIM, NAV, SITE } from '@/lib/site'

export function Cabecera() {
  const [abierto, setAbierto] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-negro/85 backdrop-blur-md">
      <div className="contenedor flex h-16 items-center justify-between gap-6 lg:h-20">
        <Link
          href="/"
          className="text-2xl lg:text-[26px]"
          aria-label={`${SITE.nombre} — inicio`}
        >
          <Logo />
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-gris transition-colors hover:text-hueso"
                >
                  {item.texto}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          {/* El claim funcionando de botón — docs/06 §11. */}
          <Link
            href="/brief"
            className="hidden rounded-full bg-rojo px-5 py-2.5 text-sm font-semibold text-negro transition-colors hover:bg-rojo-oscuro lg:inline-block"
          >
            {CLAIM.gesto.replace('.', '')}
          </Link>

          <button
            type="button"
            onClick={() => setAbierto((v) => !v)}
            aria-expanded={abierto}
            aria-controls="menu-movil"
            className="flex h-11 w-11 items-center justify-center rounded lg:hidden"
          >
            <span className="sr-only">{abierto ? 'Cerrar menú' : 'Abrir menú'}</span>
            <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true" fill="none">
              {abierto ? (
                <path d="M4 4l14 14M18 4L4 18" stroke="currentColor" strokeWidth="1.75" />
              ) : (
                <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.75" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {abierto && (
        <div id="menu-movil" className="border-t border-white/10 lg:hidden">
          <nav aria-label="Móvil" className="contenedor py-5">
            <ul className="flex flex-col gap-1">
              {[...NAV, { href: '/nosotros', texto: 'Nosotros' }].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setAbierto(false)}
                    className="block py-3 text-lg"
                  >
                    {item.texto}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/brief"
              onClick={() => setAbierto(false)}
              className="mt-4 block rounded-full bg-rojo px-6 py-3.5 text-center font-semibold text-negro"
            >
              Ver quién encaja
            </Link>
            <p className="mt-5 text-sm text-gris">
              ¿Prefieres hablarlo?{' '}
              <a href={`tel:${SITE.telefono}`} className="text-hueso underline underline-offset-4">
                {SITE.telefonoVisible}
              </a>
            </p>
          </nav>
        </div>
      )}
    </header>
  )
}
