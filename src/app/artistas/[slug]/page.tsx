import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BotonPrimario, Seccion } from '@/components/Seccion'
import { ARTISTAS, artistaPorSlug } from '@/data/artistas'
import { urlAbsoluta } from '@/lib/site'

export function generateStaticParams() {
  return ARTISTAS.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const artista = artistaPorSlug(slug)
  if (!artista) return {}

  return {
    title: `${artista.nombre} · ${artista.formacion}`,
    description: `${artista.titular}. Para qué noche sirve y para cuál no, formaciones, repertorio y requisitos técnicos.`,
    alternates: { canonical: `/artistas/${artista.slug}` },
  }
}

export default async function FichaArtista({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const artista = artistaPorSlug(slug)
  if (!artista) notFound()

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MusicGroup',
    name: artista.nombre,
    description: artista.titular,
    url: urlAbsoluta(`/artistas/${artista.slug}`),
    genre: artista.formacion,
    areaServed: { '@type': 'Country', name: 'España' },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ── Cabecera con el tratamiento fotográfico de la casa ─────────── */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div
          aria-hidden="true"
          className="grano absolute inset-0"
          style={{
            background:
              'radial-gradient(90% 80% at 75% 20%, rgba(255,176,32,0.42) 0%, rgba(232,69,43,0.16) 32%, rgba(10,10,10,0) 66%), linear-gradient(195deg, #1a1510 0%, #0A0A0A 60%)',
          }}
        />
        <div aria-hidden="true" className="velo-texto absolute inset-0" />

        <div className="contenedor relative py-20 lg:py-28">
          <nav aria-label="Miga de pan" className="mb-8 text-sm text-gris">
            <Link href="/artistas" className="hover:text-hueso">
              Artistas
            </Link>
            <span className="mx-2 text-white/25">/</span>
            <span className="text-hueso">{artista.nombre}</span>
          </nav>

          <p className="text-xs uppercase tracking-[0.2em] text-rojo">
            {artista.formacion} · {artista.base}
          </p>
          <h1 className="mt-4 font-display text-5xl uppercase leading-[0.9] sm:text-6xl lg:text-7xl">
            {artista.nombre}
          </h1>
          <p className="mt-5 max-w-2xl font-editorial text-2xl italic leading-snug text-hueso/90">
            {artista.titular}
          </p>
        </div>
      </section>

      {/* El vídeo es lo primero que se ve, no algo enterrado (docs/02). */}
      <section className="contenedor pt-12">
        <div className="flex aspect-video w-full items-center justify-center rounded-lg hairline bg-superficie">
          <p className="px-6 text-center text-sm text-gris">
            Vídeo de directo · pendiente de subir
            <br />
            <span className="text-xs">
              Nadie en esta vertical usa vídeo. Aquí es lo primero que se ve.
            </span>
          </p>
        </div>
      </section>

      {/* ── El bloque diferencial ──────────────────────────────────────── */}
      <Seccion>
        <div className="contenedor grid gap-16 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <h2 className="font-editorial text-4xl leading-tight sm:text-5xl">
              Para qué noche sirve
            </h2>
            <p className="mt-8 max-w-lectura text-lg leading-relaxed text-hueso/85">
              {artista.paraQueNocheSirve}
            </p>

            <div className="mt-14">
              <h3 className="text-xs uppercase tracking-[0.18em] text-rojo">Funcionan bien en</h3>
              <ul className="mt-6 space-y-4">
                {artista.sirvePara.map((s) => (
                  <li key={s} className="border-t border-white/10 pt-4 leading-relaxed text-gris">
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/*
              La parte de "dónde no" es la que vende. Nadie se fía de quien
              nunca dice que no (docs/06 §14).
            */}
            <div className="mt-14">
              <h3 className="text-xs uppercase tracking-[0.18em] text-gris">No los pidas para</h3>
              <ul className="mt-6 space-y-4">
                {artista.noSirvePara.map((s) => (
                  <li key={s} className="border-t border-white/10 pt-4 leading-relaxed text-gris">
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-14 rounded-lg hairline bg-superficie p-7">
              <h3 className="text-xs uppercase tracking-[0.18em] text-rojo">El detalle</h3>
              <p className="mt-4 font-editorial text-xl leading-snug">{artista.elDetalle}</p>
            </div>
          </div>

          <aside className="space-y-12">
            <div>
              <h3 className="text-xs uppercase tracking-[0.18em] text-gris">Formaciones</h3>
              <dl className="mt-5 space-y-5">
                {artista.formaciones.map((f) => (
                  <div key={f.nombre} className="border-t border-white/10 pt-4">
                    <dt className="font-semibold">{f.nombre}</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-gris">{f.descripcion}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-[0.18em] text-gris">Del repertorio</h3>
              <p className="mt-5 leading-relaxed text-gris">{artista.repertorio.join(' · ')}</p>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-[0.18em] text-gris">Dónde han tocado</h3>
              <ul className="mt-5 space-y-2 text-sm text-gris">
                {artista.dondeHanTocado.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-[0.18em] text-gris">
                Lo técnico, en cristiano
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-gris">{artista.tecnico}</p>
            </div>
          </aside>
        </div>
      </Seccion>

      {/* La ficha nunca es un callejón sin salida (docs/02). */}
      <Seccion className="border-t border-white/10 bg-superficie/40">
        <div className="contenedor">
          <h2 className="font-editorial text-4xl leading-tight sm:text-5xl">
            Pregunta por {artista.nombre}
          </h2>
          <p className="mt-6 max-w-lectura leading-relaxed text-gris">
            Te abrimos el brief con ellos ya puestos. Si al final encaja mejor otro, te lo diremos.
          </p>
          <div className="mt-10">
            <BotonPrimario href={`/brief?artista=${artista.slug}`}>
              Pregunta por {artista.nombre}
            </BotonPrimario>
          </div>
        </div>
      </Seccion>
    </>
  )
}
