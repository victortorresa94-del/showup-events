'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * Vídeo de ambiente: la foto primero, el vídeo después. Uno o varios.
 *
 * SIRVE PARA LOS DOS SITIOS donde hay vídeo en la web —el fondo del hero y la
 * banda de las páginas de formación— porque el problema es el mismo: un vídeo
 * no puede costarle a nadie la primera pantalla.
 *
 * CON VARIOS CLIPS ES UNA CADENA, NO UN CARRUSEL. En el hero se encadenan la
 * plaza de noche, la txaranga de día, el grupo de rock y el monologuista. No
 * es variedad decorativa: es el argumento de la casa —«tenemos de todo»—
 * contado sin una sola palabra, que es como se cuenta bien.
 *
 * LA REGLA QUE NO SE ROMPE: el póster es un `next/image` y **el LCP sigue
 * siendo una imagen**. La enmienda C4 de docs/07 quitó el vídeo del hero por
 * Core Web Vitals y sigue vigente en lo que importa. El vídeo entra por encima
 * con fundido solo cuando ya puede reproducirse; si tarda o no llega, la
 * página es exactamente la de antes y nadie se entera.
 *
 * Y NO SE DESCARGAN LOS CUATRO DE GOLPE. Serían casi 6 MB en la primera
 * pantalla. Solo se pide el primero; cada siguiente se carga en la capa oculta
 * un segundo antes de que le toque salir. Quien se va a los diez segundos ha
 * pagado un clip, no cuatro.
 *
 * Tres casos en los que no se descarga NINGUNO:
 *  · `prefers-reduced-motion` — docs/03 §6 dice «sin excepciones».
 *  · `saveData` — quien lleva el ahorro de datos no paga decorado.
 *  · Fuera de pantalla, cuando `prioridad` es false.
 */

/** Margen antes del final para empezar a cargar el clip siguiente. */
const ANTICIPACION = 1.2

export function VideoAmbiente({
  videos,
  poster,
  alt,
  prioridad = false,
  className = '',
  claseMedia = '',
}: {
  /** Uno o varios. Con más de uno se encadenan en bucle. */
  videos: string[]
  poster: string
  alt: string
  /** true solo en el hero: es lo primero que se ve, se pide ya. */
  prioridad?: boolean
  className?: string
  claseMedia?: string
}) {
  const [pedirVideo, setPedirVideo] = useState(false)
  const [visible, setVisible] = useState(false)

  // Dos capas que se turnan. `activa` dice cuál se ve; `fuentes` qué hay
  // cargado en cada una. Encadenar con un solo <video> obliga a cambiar el
  // src en caliente, y eso parpadea en negro entre clip y clip.
  const [activa, setActiva] = useState<0 | 1>(0)
  const [fuentes, setFuentes] = useState<[string | null, string | null]>([
    videos[0] ?? null,
    null,
  ])

  const contenedor = useRef<HTMLDivElement>(null)
  const capas = useRef<(HTMLVideoElement | null)[]>([null, null])
  const indice = useRef(0)
  const preparando = useRef(false)

  const unico = videos.length <= 1

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
    if (pedirVideo && capas.current[0] && capas.current[0].readyState >= 3) {
      setVisible(true)
    }
  }, [pedirVideo])

  /** Carga el clip siguiente en la capa que no se ve y lo arranca en silencio. */
  const prepararSiguiente = useCallback(() => {
    if (unico || preparando.current) return
    preparando.current = true

    const oculta = (activa === 0 ? 1 : 0) as 0 | 1
    const proximo = videos[(indice.current + 1) % videos.length]

    setFuentes((previas) => {
      const nuevas: [string | null, string | null] = [...previas]
      nuevas[oculta] = proximo
      return nuevas
    })
  }, [activa, unico, videos])

  /** Cambia de capa: el clip nuevo ya está reproduciéndose debajo. */
  const relevar = useCallback(() => {
    if (unico) return
    const oculta = (activa === 0 ? 1 : 0) as 0 | 1
    const nodo = capas.current[oculta]
    if (!nodo) return

    void nodo.play().catch(() => {})
    indice.current = (indice.current + 1) % videos.length
    preparando.current = false
    setActiva(oculta)
  }, [activa, unico, videos.length])

  function alAvanzar(capa: 0 | 1) {
    if (capa !== activa || unico) return
    const nodo = capas.current[capa]
    if (!nodo || !nodo.duration) return
    if (nodo.duration - nodo.currentTime <= ANTICIPACION) prepararSiguiente()
  }

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

      {pedirVideo &&
        ([0, 1] as const).map((capa) =>
          fuentes[capa] ? (
            <video
              key={`${capa}-${fuentes[capa]}`}
              ref={(nodo) => {
                capas.current[capa] = nodo
              }}
              src={fuentes[capa] ?? undefined}
              poster={poster}
              autoPlay={capa === activa}
              muted
              loop={unico}
              playsInline
              preload="auto"
              aria-hidden="true"
              onCanPlay={() => {
                if (capa === activa) setVisible(true)
              }}
              onTimeUpdate={() => alAvanzar(capa)}
              onEnded={() => {
                if (capa === activa) relevar()
              }}
              className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ease-salida ${
                capa === activa && visible ? 'opacity-100' : 'opacity-0'
              } ${claseMedia}`}
            />
          ) : null,
        )}
    </div>
  )
}
