import Link from 'next/link'

export function Seccion({
  children,
  className = '',
  id,
}: {
  children: React.ReactNode
  className?: string
  id?: string
}) {
  // Aire abundante: el lujo aquí no lo da el detalle, lo da el vacío (doc 03 §5).
  return (
    <section id={id} className={`py-20 lg:py-32 ${className}`}>
      {children}
    </section>
  )
}

export function TituloSeccion({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="max-w-3xl font-editorial text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
      {children}
    </h2>
  )
}

export function Entradilla({ children }: { children: React.ReactNode }) {
  return <p className="mt-6 max-w-lectura text-lg leading-relaxed text-gris">{children}</p>
}

export function BotonPrimario({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="inline-block rounded-full bg-rojo px-7 py-3.5 font-semibold text-negro transition-colors hover:bg-rojo-oscuro"
    >
      {children}
    </Link>
  )
}
