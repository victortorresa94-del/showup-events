import Image from 'next/image'
import Link from 'next/link'
import type { Artista } from '@/data/artistas'

/**
 * Ficha alta y a sangre. NUNCA en rejilla de cuatro columnas (docs/01 §9):
 * la cuadrícula delata el catálogo corto, el carrusel de fichas altas no.
 *
 * La foto lleva el tratamiento de la casa (`foto-casa`) y el grano por CSS,
 * nunca incrustado en el fichero (enmienda C4 de docs/07). El texto se apoya
 * siempre sobre el velo inferior, jamás directamente sobre la imagen.
 */
export function TarjetaArtista({
  artista,
  prioridad = false,
}: {
  artista: Artista
  prioridad?: boolean
}) {
  return (
    <Link
      href={`/artistas/${artista.slug}`}
      className="group relative flex h-[26rem] w-[17rem] shrink-0 flex-col justify-end overflow-hidden rounded-lg hairline sm:h-[30rem] sm:w-[20rem]"
    >
      <div className="grano absolute inset-0 overflow-hidden">
        <Image
          src={artista.imagen}
          alt={artista.imagenAlt}
          fill
          sizes="(max-width: 640px) 17rem, 20rem"
          priority={prioridad}
          className="foto-casa object-cover transition-transform duration-500 ease-salida group-hover:scale-[1.03]"
        />
      </div>
      <div aria-hidden="true" className="velo-inferior absolute inset-0" />

      <div className="relative p-5">
        <p className="text-[11px] uppercase tracking-[0.18em] text-rojo">{artista.formacion}</p>
        <h3 className="mt-2 font-editorial text-3xl leading-none">{artista.nombre}</h3>
        <p className="mt-3 text-sm leading-snug text-gris">{artista.titular}</p>
      </div>
    </Link>
  )
}
