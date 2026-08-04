/**
 * Logo de marca.
 *
 * LA IDEA (Bierut: primero la idea, después la forma): el nombre significa
 * «aparecer». Así que la palabra UP se despega de la línea base sobre la que
 * se apoya SHOW. La tipografía HACE lo que el nombre dice.
 *
 * POR QUÉ NO HAY ICONO (Scher: la tipografía ES la identidad): el triángulo
 * anterior era un símbolo prestado — decía «vídeo», no decía «nosotros
 * aparecemos». Si el logo necesita un icono para explicar su significado, el
 * icono sobra.
 *
 * POR QUÉ AGUANTA (Haviv: apropiado, memorable, simple): un solo color más el
 * blanco, sin degradados ni efectos, legible a 16 px y reproducible en un
 * sello, en una factura o bordado en una sudadera.
 *
 * Va en código y no como imagen: escala sin pixelarse, pesa cero bytes de red
 * y la relación entre la línea roja y la altura de la caja es exacta.
 */
export function Logo({ className = '' }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-baseline font-display uppercase leading-none tracking-tight ${className}`}
      // El texto real para lectores de pantalla y para copiar/pegar.
      aria-label="Show Up"
    >
      <span aria-hidden="true" className="relative">
        Show
        {/* La línea base sobre la que SHOW se apoya — y de la que UP ya se ha ido. */}
        <span className="absolute inset-x-0 -bottom-[0.1em] block h-[0.075em] rounded-full bg-rojo" />
      </span>
      <span aria-hidden="true" className="ml-[0.1em] -translate-y-[0.28em]">
        Up
      </span>
    </span>
  )
}
