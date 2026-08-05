'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

/**
 * Fondo del hero: foto primero, vídeo después.
 *
 * EL ORDEN NO ES CAPRICHOSO. La enmienda C4 de docs/07 dejó el hero sin vídeo
 * por Core Web Vitals, y sigue vigente en lo que importa: **el LCP tiene que
 * ser una imagen**. Así que el póster es un `next/image` con `priority` —el
 * navegador lo pide en el primer viaje— y el vídeo entra por encima solo
 * cuando ya puede reproducirse. Si el vídeo tarda o no llega, la primera
 * pantalla es exactamente la de siempre y nadie se entera.
 *
 * El póster es un fotograma del propio vídeo, no otra foto: así el cambio no
 * se ve como un salto, se ve como que la imagen se pone en marcha.
 *
 * Dos casos en los que el vídeo NO se descarga siquiera:
 *  · `prefers-reduced-motion`: hay gente a la que el movimiento le sienta mal.
 *    docs/03 §6 dice «sin excepciones», y esta no lo es.
 *  · `saveData`: quien va con el ahorro de datos puesto no tiene por qué
 *    pagar 1,6 MB de decorado.
 */
export function FondoHero({ className = '' }: { className?: string }) {
  const [pedirVideo, setPedirVideo] = useState(false)
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const conexion = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection
    if (conexion?.saveData) return

    setPedirVideo(true)
  }, [])

  // Si el vídeo ya estaba en caché, `canplay` puede haber saltado antes de
  // montar el listener. Lo comprobamos a mano al montarlo.
  useEffect(() => {
    if (pedirVideo && ref.current && ref.current.readyState >= 3) setVisible(true)
  }, [pedirVideo])

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <Image
        src="/img/hero-fiesta.jpg"
        alt="Gente de todas las edades cantando y con los brazos en alto en la calle durante una festa major, bajo guirnaldas de bombillas"
        fill
        priority
        sizes="100vw"
        className="foto-viva object-cover object-center"
      />

      {pedirVideo && (
        <video
          ref={ref}
          src="/video/hero-fiesta.mp4"
          poster="/img/hero-fiesta.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          onCanPlay={() => setVisible(true)}
          className={`foto-viva absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ${
            visible ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
    </div>
  )
}
