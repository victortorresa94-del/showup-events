import type { Metadata } from 'next'
import Link from 'next/link'
import { TarjetaArtista } from '@/components/TarjetaArtista'
import { BotonPrimario, Entradilla, Seccion, TituloSeccion } from '@/components/Seccion'
import { ARTISTAS } from '@/data/artistas'

export const metadata: Metadata = {
  title: 'Artistas',
  description:
    'Orquestas, charangas, grupos de versiones, magos y monologuistas que ya han tocado con nosotros. En cada ficha ponemos para qué noche sirve cada uno. Y para cuál no.',
  alternates: { canonical: '/artistas' },
}

export default function PaginaArtistas() {
  return (
    <>
      <Seccion>
        <div className="contenedor">
          {/*
            Sin contador, sin paginación visible, sin "X artistas" (docs/01 §9).
            Ninguna cifra que se pueda leer como inventario.
          */}
          <h1 className="max-w-3xl font-display text-5xl uppercase leading-[0.9] sm:text-6xl lg:text-7xl">
            Algunos de los que se suben
          </h1>
          <Entradilla>
            Cada uno está aquí porque lo hemos visto tocar, no porque nos mandara un dossier. Entra
            en cualquier ficha: primero el vídeo de un bolo de verdad, y debajo para qué noche sirve
            — y para cuál no.
          </Entradilla>
        </div>
      </Seccion>

      <section className="pb-20 lg:pb-28">
        <div className="contenedor">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ARTISTAS.map((a) => (
              <div key={a.slug} className="flex justify-center sm:justify-start">
                <TarjetaArtista artista={a} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Seccion className="border-t border-white/10 bg-superficie/40">
        <div className="contenedor">
          <TituloSeccion>¿No está el que buscas?</TituloSeccion>
          <p className="mt-8 max-w-2xl font-editorial text-3xl italic leading-tight sm:text-4xl">
            Perfecto. Ahí es donde empieza nuestro trabajo.
          </p>
          <p className="mt-8 max-w-lectura leading-relaxed text-gris">
            Lo que ves aquí es una muestra, no un inventario. Dinos qué tienes en la cabeza y lo
            buscamos, lo escuchamos y te decimos si merece la pena. Si toca en España, llegamos.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <BotonPrimario href="/brief">Pídelo</BotonPrimario>
            <Link href="/precios" className="text-hueso underline underline-offset-4">
              Ver precios orientativos
            </Link>
          </div>
        </div>
      </Seccion>
    </>
  )
}
