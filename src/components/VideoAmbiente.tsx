'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

/**
 * Vídeo de ambiente: la foto primero, el vídeo después.
 *
 * SIRVE PARA LOS DOS SITIOS donde hay vídeo en la web —el fondo del hero y la
 * banda de las páginas de formación— porque el problema es el mismo: un vídeo
 * no puede costarle a nadie la primera pantalla.
 *
 * LA REGLA QUE NO SE ROMPE: el póster es un `next/image` y **el LCP sigue
 * siendo una imagen**. La enmienda C4 de docs/07 quitó el vídeo del hero por
 * Core Web Vitals y sigue vigente en lo que importa. El vídeo entra por encima
 * con fundido solo cuando ya puede reproducirse; si tarda o no llega, la
 * página es exactamente la de antes y nadie se entera.
 *
 * El póster es siempre un fotograma del propio vídeo, nunca otra foto: así el
 * arranque no se lee como un salto, se lee como que la imagen se pone en marcha.
 *
 * Tres casos en los que el vídeo NI SE DESCARGA:
 *  · `prefers-reduced-motion` — docs/03 §6 dice «sin excepciones».
 *  · `saveData` — quien lleva el ahorro de datos no paga 2 MB de decorado.
 *  · Fuera de pantalla, cuando `prioridad` es false: en una página de
 *    formación el vídeo está a media página y mucha gente no llega. Se pide
 *    cuando se acerca, no antes.
 */
export function VideoAmbiente({
  video,
  poster,
  alt,
  prioridad = false,
  className = '',
  claseMedia = '',
}: {
  video: string
  poster: string
  alt: string
  /** true solo en el hero: es lo primero que se ve, se pide ya. */
  prioridad?: boolean
  className?: string
  claseMedia?: string
}) {
  const [pedirVideo, setPedirVideo] = useState(false)
  const [visible, setVisible] = useState(false)
  const contenedor = useRef<HTMLDivElement>(null)
  const reproductor = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const conexion = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection
    if (conexion?.saveData) return

    if (prioridad) {
      setPedirVideo(true)
      return
    }

    const nodo = contenedor.current
    if (!nodo || typeof IntersectionObserver === 'undefined') {
      setPedirVideo(true)
      return
    }

    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setPedirVideo(true)
          observador.disconnect()
        }
      },
      { rootMargin: '300px' },
    )
    observador.observe(nodo)
    return () => observador.disconnect()
  }, [prioridad])

  // Si el vídeo ya estaba en caché, `canplay` puede haber saltado antes de que
  // montáramos el listener. Lo comprobamos a mano.
  useEffect(() => {
    if (pedirVideo && reproductor.current && reproductor.current.readyState >= 3) {
      setVisible(true)
    }
  }, [pedirVideo])

  return (
    <div ref={contenedor} className={`absolute inset-0 overflow-hidden ${className}`}>
      <Image
        src={poster}
        alt={alt}
        fill
        priority={prioridad}
        sizes="100vw"
        className={`object-cover object-center ${claseMedia}`}
      />

      {pedirVideo && (
        <video
          ref={reproductor}
          src={video}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          onCanPlay={() => setVisible(true)}
          className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ${
            visible ? 'opacity-100' : 'opacity-0'
          } ${claseMedia}`}
        />
      )}
    </div>
  )
}
