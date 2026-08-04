/**
 * Logo de marca, implementado como tipografía real + SVG en vez de imagen.
 *
 * El concepto salió de una generación (public/img/logo-concepto.jpg): wordmark
 * condensado en dos líneas apiladas y un triángulo rojo apuntando arriba, que
 * se lee a la vez como botón de play y como haz de foco. Y como el nombre
 * significa «aparecer», el triángulo apunta hacia arriba: algo que sube.
 *
 * Se construye en código, no se importa el PNG, por tres razones prácticas:
 * escala sin pixelarse, pesa cero bytes de red, y la alineación entre el
 * triángulo y la caja de texto es exacta — un generativo siempre la baila.
 */
export function Logo({
  variante = 'apilado',
  className = '',
}: {
  variante?: 'apilado' | 'linea'
  className?: string
}) {
  const marca = (
    <svg
      viewBox="0 0 24 22"
      aria-hidden="true"
      className="h-[0.78em] w-auto shrink-0 text-rojo"
      fill="currentColor"
    >
      <path d="M10.27 1.5a2 2 0 0 1 3.46 0l9.34 16.5a2 2 0 0 1-1.73 3H2.66a2 2 0 0 1-1.73-3z" />
    </svg>
  )

  if (variante === 'linea') {
    return (
      <span className={`inline-flex items-center gap-2.5 ${className}`}>
        {marca}
        <span className="font-display text-[1em] uppercase leading-none tracking-tight">
          Show Up
        </span>
      </span>
    )
  }

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      {marca}
      <span className="font-display text-[1em] uppercase leading-[0.82] tracking-tight">
        Show
        <br />
        Up
      </span>
    </span>
  )
}
