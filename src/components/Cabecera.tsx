'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Logo } from '@/components/Logo'
import { CLAIM, NAV, SITE } from '@/lib/site'

/**
 * Cabecera.
 *
 * TRES DECISIONES, Y NINGUNA ES DECORATIVA.
 *
 * 1. NO HAY BARRA NEGRA. Arriba del todo la cabecera es transparente: el hero
 *    es lo mejor que tiene la web y una franja opaca le come los primeros 80
 *    píxeles justo donde la foto respira. Al bajar aparece cristal —desenfoque
 *    y saturación, no una plancha de color— porque a partir de ahí la cabecera
 *    flota sobre contenido claro y oscuro alternándose y necesita separarse.
 *
 * 2. DOS REGISTROS TIPOGRÁFICOS, NO UNO. Los enlaces del menú son etiquetas:
 *    versalitas con tracking abierto, el mismo recurso que ya usan los
 *    antetítulos de sección. El botón, en cambio, es una FRASE QUE ALGUIEN
 *    DICE —«Dinos qué noche quieres»— y por eso va en caja baja. Poner en
 *    versalitas una frase de veinticinco caracteres la convierte en un muro y
 *    mata justo lo que la hace funcionar: que suena a alguien hablando.
 *
 * 3. SUBRAYADO QUE CRECE, NO COLOR QUE CAMBIA. El hover del menú se apoya en
 *    una línea que se abre desde la izquierda. Sobre un fondo que a veces es
 *    vídeo y a veces es papel, un cambio de color no siempre se ve; una línea
 *    sí.
 *
 * Sobre foto, el copy pequeño lleva `texto-sobre-foto`: el velo del hero está
 * calculado para el centro, no para las esquinas de arriba.
 */
export function Cabecera() {
  const [abierto, setAbierto] = useState(false)
  const [desplazado, setDesplazado] = useState(false)

  useEffect(() => {
    const alHacerScroll = () => setDesplazado(window.scrollY > 16)
    alHacerScroll()
    window.addEventListener('scroll', alHacerScroll, { passive: true })
    return () => window.removeEventListener('scroll', alHacerScroll)
  }, [])

  // Con el menú móvil abierto hace falta fondo sí o sí: si no, los enlaces
  // caen encima de la foto y no se lee ninguno.
  const conFondo = desplazado || abierto

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        conFondo
          ? 'border-b border-white/[0.08] bg-negro/40 backdrop-blur-2xl backdrop-saturate-150'
          : 'border-b border-transparent'
      }`}
    >
      <div className="contenedor flex h-16 items-center justify-between gap-6 lg:h-20">
        <Link
          href="/"
          className="text-2xl transition-opacity hover:opacity-80 lg:text-[26px]"
          aria-label={`${SITE.nombre} — inicio`}
        >
          <Logo />
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="texto-sobre-foto group relative block py-1 text-[12px] font-medium uppercase tracking-[0.16em] text-hueso/70 transition-colors hover:text-hueso"
                >
                  {item.texto}
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-rojo transition-transform duration-300 ease-salida group-hover:scale-x-100"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/brief"
            className="group hidden items-center gap-2 rounded-full bg-rojo px-5 py-2.5 text-[15px] font-medium leading-none text-negro transition-colors duration-200 hover:bg-rojo-oscuro lg:inline-flex"
          >
            {CLAIM.gesto.replace('.', '')}
            <span
              aria-hidden="true"
              className="transition-transform duration-300 ease-salida group-hover:translate-x-0.5"
            >
              →
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setAbierto((v) => !v)}
            aria-expanded={abierto}
            aria-controls="menu-movil"
            className="-mr-2 flex h-11 w-11 items-center justify-center rounded text-hueso lg:hidden"
          >
            <span className="sr-only">{abierto ? 'Cerrar menú' : 'Abrir menú'}</span>
            <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true" fill="none">
              {abierto ? (
                <path d="M4 4l14 14M18 4L4 18" stroke="currentColor" strokeWidth="1.75" />
              ) : (
                <path d="M3 7h16M3 15h16" stroke="currentColor" strokeWidth="1.75" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {abierto && (
        <div id="menu-movil" className="border-t border-white/[0.08] lg:hidden">
          <nav aria-label="Móvil" className="contenedor py-6">
            <ul className="flex flex-col">
              {[...NAV, { href: '/nosotros', texto: 'Nosotros' }].map((item) => (
                <li key={item.href} className="border-b border-white/[0.08]">
                  <Link
                    href={item.href}
                    onClick={() => setAbierto(false)}
                    className="block py-4 text-[13px] font-medium uppercase tracking-[0.16em] text-hueso"
                  >
                    {item.texto}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/brief"
              onClick={() => setAbierto(false)}
              className="mt-6 block rounded-full bg-rojo px-6 py-3.5 text-center text-[15px] font-medium text-negro"
            >
              {CLAIM.gesto.replace('.', '')}
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
