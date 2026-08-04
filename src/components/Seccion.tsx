import Link from 'next/link'

/**
 * La web alterna dos mundos, y la alternancia es la marca:
 *
 *  · OSCURO — la noche, la foto, el momento. Hero, artistas, garantía, cierre.
 *  · CLARO  — lo que hay que leer y entender. Los pasos, las ocasiones, el
 *             contenido largo. Sobre papel se lee mejor y descansa la vista.
 *
 * Todo oscuro cansa y hunde el contenido largo, que es justo el que tiene que
 * captar tráfico. El papel no es un color: es donde vive lo que se lee.
 */
export type Tono = 'oscuro' | 'claro'

const FONDOS: Record<Tono, string> = {
  oscuro: 'bg-negro text-hueso',
  claro: 'bg-crema text-tinta',
}

export function Seccion({
  children,
  className = '',
  id,
  tono = 'oscuro',
}: {
  children: React.ReactNode
  className?: string
  id?: string
  tono?: Tono
}) {
  // Aire abundante: el lujo aquí no lo da el detalle, lo da el vacío (doc 03 §5).
  return (
    <section id={id} className={`${FONDOS[tono]} py-20 lg:py-28 ${className}`}>
      {children}
    </section>
  )
}

export function TituloSeccion({
  children,
  tono = 'oscuro',
}: {
  children: React.ReactNode
  tono?: Tono
}) {
  return (
    <h2
      className={`max-w-3xl font-editorial text-4xl leading-[1.05] sm:text-5xl lg:text-6xl ${
        tono === 'claro' ? 'text-tinta' : 'text-hueso'
      }`}
    >
      {children}
    </h2>
  )
}

export function Entradilla({
  children,
  tono = 'oscuro',
}: {
  children: React.ReactNode
  tono?: Tono
}) {
  return (
    <p
      className={`mt-6 max-w-lectura text-lg leading-relaxed ${
        tono === 'claro' ? 'text-tintaSuave' : 'text-gris'
      }`}
    >
      {children}
    </p>
  )
}

export function BotonPrimario({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  // Rojo con texto negro en los dos mundos: sobre rojo el negro tiene más
  // contraste que el blanco y se lee más caro (doc 03 §7).
  return (
    <Link
      href={href}
      className="inline-block rounded-full bg-rojo px-7 py-3.5 font-semibold text-negro transition-colors hover:bg-rojo-oscuro"
    >
      {children}
    </Link>
  )
}
