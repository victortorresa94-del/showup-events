import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { CampoNoche } from '@/components/CampoNoche'
import { TarjetaArtista } from '@/components/TarjetaArtista'
import { BotonPrimario, Entradilla, Seccion, TituloSeccion } from '@/components/Seccion'
import { ARTISTAS } from '@/data/artistas'
import { CLAIM } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Show Up Events · Música en directo y artistas para eventos',
  description:
    'Orquestas, grupos de versiones, cercaviles, magos y monologuistas para festa major, eventos de empresa y bodas en toda Cataluña. Nos cuentas la noche y te proponemos dos o tres nombres en 24 h.',
  alternates: { canonical: '/' },
}

const MOVIMIENTOS = [
  {
    n: '01',
    titulo: 'Cuéntanos la noche',
    texto:
      'El sitio, la gente y lo que quieres que pase. Escríbelo como se lo contarías a un amigo: no hay veinte campos, hay una conversación.',
  },
  {
    n: '02',
    titulo: 'Te proponemos',
    texto:
      'Dos o tres nombres, no cuarenta fichas. Con por qué encaja cada uno — y, si hace falta, por qué el que tenías en la cabeza no.',
  },
  {
    n: '03',
    titulo: 'Aparecemos',
    texto:
      'Contrato, rider, horarios, montaje y prueba de sonido. El día del evento tú tienes cosas que hacer. Llamarnos no es una de ellas.',
  },
]

const OCASIONES = [
  {
    href: '/musica-para-festa-major',
    titulo: 'Festa major',
    texto: 'Cercavila de día y baile hasta las tres. Con escenario propio si el pueblo no tiene.',
  },
  {
    href: '/monologuistas-para-eventos',
    titulo: 'Empresa',
    texto: 'Que no se vaya la gente a las once. Ese es el encargo real.',
  },
  {
    href: '/grupos-de-versiones',
    titulo: 'Bodas',
    texto: 'Ceremonia, cóctel, cena y lo de después. Cuatro momentos, no uno.',
  },
  {
    href: '/brief',
    titulo: 'Privados',
    texto: 'Cumpleaños, aniversarios, cenas en casa. Formato pequeño, mismo cuidado.',
  },
]

export default function Home() {
  return (
    <>
      {/* ── HERO ───────────────────────────────────────────────────────── */}
      {/*
        Centrado y con el buscador de protagonista: esto tiene que leerse como
        un producto de booking, no como un cartel. El LCP es la foto, así que
        va con `priority` y sin vídeo (enmienda C4 de docs/07).
      */}
      <section className="relative overflow-hidden bg-negro">
        <div className="grano absolute inset-0 overflow-hidden">
          <Image
            src="/img/hero-plaza.jpg"
            alt="Público de todas las edades cantando y con los brazos en alto en la plaza de un pueblo durante la festa major, con el campanario y las guirnaldas de bombillas al fondo"
            fill
            priority
            sizes="100vw"
            className="foto-viva object-cover object-center"
          />
        </div>
        <div aria-hidden="true" className="velo-hero absolute inset-0" />
        <div aria-hidden="true" className="velo-remate absolute inset-0" />

        <div className="contenedor relative flex min-h-[calc(100svh-4rem)] flex-col items-center justify-center py-24 text-center lg:min-h-[calc(100svh-5rem)]">
          <div className="aparece w-full">
            <p className="texto-sobre-foto text-xs uppercase tracking-[0.22em] text-hueso/75">
              Música en directo y espectáculo · Cataluña
            </p>

            {/*
              El H1 lleva SOLO el gesto de marca. El descriptor de entidad vive
              en el <title>, nunca aquí (docs/07 §D6).
            */}
            <h1 className="texto-sobre-foto mx-auto mt-6 max-w-4xl font-display text-[3.2rem] uppercase leading-[0.86] tracking-tight sm:text-7xl lg:text-8xl">
              Dinos qué noche quieres.
            </h1>

            <p className="texto-sobre-foto mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-hueso/90">
              Orquestas, grupos, magos y monologuistas en toda Cataluña. Tú cuentas la noche;
              nosotros te damos dos o tres nombres y respondemos de que aparezcan.
            </p>

            <div className="mt-12">
              <CampoNoche />
            </div>
          </div>
        </div>
      </section>

      {/* ── ARTISTAS · arriba del todo ─────────────────────────────────── */}
      <Seccion className="overflow-hidden border-t border-white/10">
        <div className="contenedor flex flex-wrap items-end justify-between gap-6">
          <div>
            <TituloSeccion>Estos ya se han subido con nosotros.</TituloSeccion>
            <Entradilla>
              Cada uno está aquí porque lo hemos visto tocar, no porque nos mandara un dossier. En
              cada ficha pone para qué noche sirve. Y para cuál no.
            </Entradilla>
          </div>
          <Link
            href="/artistas"
            className="shrink-0 text-hueso underline underline-offset-4 hover:text-rojo"
          >
            Ver todos →
          </Link>
        </div>

        {/* Carrusel horizontal, nunca rejilla — docs/01 §9 */}
        <div className="sin-scrollbar mt-12 flex gap-5 overflow-x-auto px-5 pb-4 sm:px-8 lg:px-12">
          {ARTISTAS.map((a, i) => (
            <TarjetaArtista key={a.slug} artista={a} prioridad={i === 0} />
          ))}
        </div>
      </Seccion>

      {/* ── TRES PASOS · papel ─────────────────────────────────────────── */}
      <Seccion tono="claro">
        <div className="contenedor">
          <TituloSeccion tono="claro">Tres pasos. Solo el primero es tuyo.</TituloSeccion>
          <div className="mt-14 grid gap-10 lg:grid-cols-3 lg:gap-12">
            {MOVIMIENTOS.map((m) => (
              <div key={m.n} className="border-t border-tinta/15 pt-6">
                <span className="font-display text-4xl text-rojo">{m.n}</span>
                <h3 className="mt-3 text-xl font-semibold text-tinta">{m.titulo}</h3>
                <p className="mt-3 leading-relaxed text-tintaSuave">{m.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </Seccion>

      {/* ── OCASIONES · papel ──────────────────────────────────────────── */}
      <Seccion tono="claro" className="border-t border-tinta/10">
        <div className="contenedor">
          <TituloSeccion tono="claro">Empieza por la ocasión.</TituloSeccion>
          <Entradilla tono="claro">
            Porque nadie se levanta pensando «hoy necesito un trío acústico». Se levanta pensando
            «tengo la festa major en agosto».
          </Entradilla>

          <div className="mt-12 grid gap-px overflow-hidden rounded-xl bg-tinta/12 sm:grid-cols-2">
            {OCASIONES.map((o) => (
              <Link
                key={o.href}
                href={o.href}
                className="group bg-crema p-8 transition-colors hover:bg-cremaSuave"
              >
                <h3 className="font-editorial text-2xl text-tinta transition-colors group-hover:text-rojo">
                  {o.titulo}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-tintaSuave">{o.texto}</p>
              </Link>
            ))}
          </div>
        </div>
      </Seccion>

      {/* ── GARANTÍA · vuelve la noche, y pega ─────────────────────────── */}
      <Seccion>
        <div className="contenedor">
          <div className="rounded-xl hairline bg-superficie p-8 sm:p-12 lg:p-16">
            <h2 className="text-xs uppercase tracking-[0.18em] text-rojo">La Garantía Show Up</h2>
            <p className="mt-6 max-w-3xl font-editorial text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Si el artista no aparece, sube el suplente. Si no sube nadie, te devolvemos todo.
            </p>
            <p className="mt-8 max-w-lectura leading-relaxed text-gris">
              No es una frase de web: está en el contrato. El suplente no se busca cuando hay un
              problema — está reservado desde el día que firmas, y por eso podemos prometerte esto.
            </p>
            <p className="mt-5 max-w-lectura text-sm leading-relaxed text-gris/80">
              Hasta el importe que nos hayas pagado. No cubrimos lo que no controlamos —una
              tormenta, un corte de luz del municipio, un cierre de la administración—, y en esos
              casos te lo decimos igual de claro.
            </p>
          </div>
        </div>
      </Seccion>

      {/* ── LA PUERTA GRANDE · papel ───────────────────────────────────── */}
      <Seccion tono="claro">
        <div className="contenedor">
          <TituloSeccion tono="claro">¿No está el que buscas?</TituloSeccion>
          <p className="mt-8 max-w-2xl font-editorial text-3xl italic leading-tight text-tinta sm:text-4xl">
            Perfecto. Ahí es donde empieza nuestro trabajo.
          </p>
          <p className="mt-8 max-w-lectura leading-relaxed text-tintaSuave">
            Dinos qué tienes en la cabeza —el tributo que viste en YouTube, una cercavila para el
            día del pregón, una orquesta que traiga su propio escenario, un cuarteto de cuerda para
            la ceremonia, un mago que vaya mesa por mesa, un monologuista que no se pase de la
            raya— y lo buscamos, lo escuchamos y te decimos si merece la pena.
          </p>
          <p className="mt-5 max-w-lectura leading-relaxed text-tintaSuave">
            Si toca en Cataluña, llegamos. Y si te dijéramos que sí a todo tampoco te fiarías:
            cuando algo no se puede, también te lo decimos.
          </p>
          <div className="mt-10">
            <BotonPrimario href="/brief">Pídelo</BotonPrimario>
          </div>
        </div>
      </Seccion>

      {/* ── CIERRE ─────────────────────────────────────────────────────── */}
      <Seccion className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="grano absolute inset-0"
          style={{
            background:
              'radial-gradient(75% 110% at 50% 100%, rgba(232,69,43,0.22) 0%, rgba(10,10,10,0) 62%)',
          }}
        />
        <div className="contenedor relative text-center">
          <h2 className="mx-auto max-w-3xl font-display text-5xl uppercase leading-[0.88] sm:text-6xl lg:text-7xl">
            Dinos qué noche quieres.
          </h2>
          <p className="mx-auto mt-7 max-w-xl leading-relaxed text-gris">
            Escríbelo como te salga. Te contestamos en menos de 24 h con dos o tres nombres. A
            partir de ahí, aparecemos nosotros.
          </p>
          <div className="mt-12">
            <CampoNoche id="campo-noche-cierre" conAtajos={false} />
          </div>
          <p className="mt-16 font-editorial text-3xl italic leading-tight sm:text-4xl">
            {CLAIM.promesa}
          </p>
        </div>
      </Seccion>
    </>
  )
}
