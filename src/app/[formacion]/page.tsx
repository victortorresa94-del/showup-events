import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BotonPrimario, Entradilla, Seccion, TituloSeccion } from '@/components/Seccion'
import { TarjetaArtista } from '@/components/TarjetaArtista'
import { ARTISTAS } from '@/data/artistas'
import { FORMACIONES, formacionPorSlug } from '@/data/formaciones'
import { urlAbsoluta } from '@/lib/site'

/**
 * Ruta dinámica de raíz para el clúster de formaciones.
 *
 * `dynamicParams = false` es deliberado (docs/seo/04 §7): fuera de esta lista
 * la ruta devuelve 404, así que nadie puede inventarse una URL de formación
 * ni se generan páginas finas por accidente. Las rutas estáticas del proyecto
 * (/precios, /artistas, /brief…) tienen prioridad sobre este segmento.
 */
export const dynamicParams = false

export function generateStaticParams() {
  return FORMACIONES.map((f) => ({ formacion: f.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ formacion: string }>
}): Promise<Metadata> {
  const { formacion } = await params
  const f = formacionPorSlug(formacion)
  if (!f) return {}

  return {
    title: f.title,
    description: f.description,
    alternates: { canonical: `/${f.slug}` },
  }
}

export default async function PaginaFormacion({
  params,
}: {
  params: Promise<{ formacion: string }>
}) {
  const { formacion } = await params
  const f = formacionPorSlug(formacion)
  if (!f) notFound()

  const relacionadas = f.relacionadas
    .map(formacionPorSlug)
    .filter((x): x is NonNullable<typeof x> => Boolean(x))

  const delRoster = ARTISTAS.filter((a) => a.formacionSlug === f.slug)

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: f.h1,
    description: f.description,
    url: urlAbsoluta(`/${f.slug}`),
    areaServed: { '@type': 'Country', name: 'España' },
    provider: { '@id': urlAbsoluta('/#organizacion') },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/*
        Página de contenido: tipográfica, sin foto a sangre. Su LCP es el <h1>
        y sale en 1,6 s (enmienda C4 de docs/07).
      */}
      <Seccion>
        <div className="contenedor">
          <nav aria-label="Miga de pan" className="mb-8 text-sm text-gris">
            <Link href="/" className="hover:text-hueso">
              Inicio
            </Link>
            <span className="mx-2 text-white/25">/</span>
            <span className="text-hueso">{f.nombre}</span>
          </nav>

          <h1 className="max-w-4xl font-display text-5xl uppercase leading-[0.9] sm:text-6xl lg:text-7xl">
            {f.h1}
          </h1>
          <p className="mt-8 max-w-lectura font-editorial text-2xl italic leading-snug text-hueso/90">
            {f.entradilla}
          </p>
        </div>
      </Seccion>

      <section className="pb-8">
        <div className="contenedor">
          <div className="max-w-lectura">
            <h2 className="font-editorial text-3xl leading-tight sm:text-4xl">
              Qué es, exactamente
            </h2>
            {/*
              Párrafo autocontenido a propósito: es la unidad que extrae un
              motor generativo, y el 44 % de las citas sale del primer tercio
              de la página (docs/seo/03 §3.1).
            */}
            <p className="mt-6 text-lg leading-relaxed text-hueso/85">{f.queEs}</p>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-xs uppercase tracking-[0.18em] text-rojo">Cuándo funciona</h2>
              <ul className="mt-6 space-y-4">
                {f.cuandoFunciona.map((x) => (
                  <li key={x} className="border-t border-white/10 pt-4 leading-relaxed text-gris">
                    {x}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xs uppercase tracking-[0.18em] text-gris">Cuándo no</h2>
              <ul className="mt-6 space-y-4">
                {f.cuandoNo.map((x) => (
                  <li key={x} className="border-t border-white/10 pt-4 leading-relaxed text-gris">
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/*
            No se publican cifras (decisión de negocio). Lo que sí se publica es
            qué mueve el presupuesto: sigue respondiendo a la intención de
            «cuánto cuesta», es igual de citable por un motor generativo y no
            compromete ningún caché. Ver docs/08-restricciones-de-negocio.md.
          */}
          <div className="mt-16 max-w-lectura rounded-lg hairline bg-superficie p-7">
            <h2 className="text-xs uppercase tracking-[0.18em] text-rojo">
              Qué determina el presupuesto
            </h2>
            <ul className="mt-6 space-y-3">
              {f.queDetermina.map((x) => (
                <li key={x} className="flex gap-3 leading-relaxed text-gris">
                  <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-rojo" />
                  {x}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-gris">
              No publicamos tarifas porque cada noche es distinta y una cifra suelta engaña más de
              lo que ayuda.{' '}
              <Link href="/brief" className="text-hueso underline underline-offset-4">
                Cuéntanos la tuya
              </Link>{' '}
              y te pasamos presupuesto cerrado por escrito, con todo desglosado.
            </p>
          </div>
        </div>
      </section>

      {delRoster.length > 0 && (
        <Seccion className="overflow-hidden">
          <div className="contenedor">
            <TituloSeccion>De los nuestros</TituloSeccion>
            <Entradilla>Están aquí porque los hemos visto tocar.</Entradilla>
          </div>
          <div className="sin-scrollbar mt-10 flex gap-5 overflow-x-auto px-5 pb-4 sm:px-8 lg:px-12">
            {delRoster.map((a) => (
              <TarjetaArtista key={a.slug} artista={a} />
            ))}
          </div>
        </Seccion>
      )}

      <Seccion className="border-t border-white/10 bg-superficie/40">
        <div className="contenedor">
          <TituloSeccion>¿No está el que buscas?</TituloSeccion>
          <p className="mt-8 max-w-2xl font-editorial text-3xl italic leading-tight sm:text-4xl">
            Perfecto. Ahí es donde empieza nuestro trabajo.
          </p>
          <p className="mt-8 max-w-lectura leading-relaxed text-gris">
            Cuéntanos la noche que tienes montada y te proponemos dos o tres nombres con el porqué
            de cada uno. Si toca en España, llegamos.
          </p>
          <div className="mt-10">
            <BotonPrimario href="/brief">Dinos qué noche quieres</BotonPrimario>
          </div>

          {relacionadas.length > 0 && (
            <div className="mt-16 border-t border-white/10 pt-8">
              <h2 className="text-xs uppercase tracking-[0.18em] text-gris">Puede que busques</h2>
              <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
                {relacionadas.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/${r.slug}`}
                      className="text-hueso underline underline-offset-4 hover:text-rojo"
                    >
                      {r.h1}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Seccion>
    </>
  )
}
