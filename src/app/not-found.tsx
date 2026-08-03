import Link from 'next/link'

export default function NoEncontrada() {
  return (
    <div className="contenedor flex min-h-[70vh] items-center py-20">
      <div className="max-w-xl">
        <p className="font-display text-6xl text-rojo">404</p>
        <h1 className="mt-4 font-editorial text-4xl leading-tight sm:text-5xl">
          Aquí no hay nada. Todavía.
        </h1>
        <p className="mt-6 leading-relaxed text-gris">
          Puede que la página se llamara de otra forma, o puede que aún no la hayamos escrito. Si
          buscabas un artista o un tipo de formación concreto, dínoslo y lo buscamos.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/brief"
            className="rounded-full bg-rojo px-6 py-3 font-semibold text-negro hover:bg-rojo-oscuro"
          >
            Pídelo
          </Link>
          <Link href="/" className="rounded-full hairline px-6 py-3 hover:border-white/35">
            Volver al principio
          </Link>
        </div>
      </div>
    </div>
  )
}
