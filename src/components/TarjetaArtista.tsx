import Link from 'next/link'
import type { Artista } from '@/data/artistas'

/**
 * Ficha alta y a sangre. NUNCA en rejilla de cuatro columnas (docs/01 §9):
 * la cuadrícula delata el catálogo corto, el carrusel de fichas altas no.
 *
 * El bloque de foto es hoy un marcador de posición con la luz de la casa
 * (contraluz cálido sobre negro). Al sustituirlo por fotografía real,
 * mantener `foto-casa` y el velo inferior.
 */
export function TarjetaArtista({ artista }: { artista: Artista }) {
  return (
    <Link
      href={`/artistas/${artista.slug}`}
      className="group relative flex h-[26rem] w-[17rem] shrink-0 flex-col justify-end overflow-hidden rounded-lg hairline sm:h-[30rem] sm:w-[20rem]"
    >
      <div
        aria-hidden="true"
        className="grano absolute inset-0 transition-transform duration-500 ease-salida group-hover:scale-[1.03]"
        style={{
          background:
            'radial-gradient(120% 90% at 78% 18%, rgba(255,176,32,0.42) 0%, rgba(232,69,43,0.16) 34%, rgba(10,10,10,0) 68%), linear-gradient(200deg, #1c1712 0%, #0A0A0A 62%)',
        }}
      />
      <div aria-hidden="true" className="velo-inferior absolute inset-0" />

      <div className="relative p-5">
        <p className="text-[11px] uppercase tracking-[0.18em] text-rojo">{artista.formacion}</p>
        <h3 className="mt-2 font-editorial text-3xl leading-none">{artista.nombre}</h3>
        <p className="mt-3 text-sm leading-snug text-gris">{artista.titular}</p>
      </div>
    </Link>
  )
}
