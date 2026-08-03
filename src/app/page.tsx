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
    'Orquestas, charangas, txarangas, grupos, magos y monologuistas para fiestas patronales, eventos de empresa y bodas en toda España. Nos cuentas la noche y te proponemos dos o tres nombres en 24 h.',
  alternates: { canonical: '/' },
}

const MOVIMIENTOS = [
  {
    n: '01',
    titulo: 'Cuéntanos la noche',
    texto:
      'El sitio, la gente, la hora a la que se sirve el postre y lo que quieres que pase. Escríbelo como se lo contarías a un amigo. No hay veinte campos: hay una conversación.',
  },
  {
    n: '02',
    titulo: 'Te proponemos',
    texto:
      'Dos o tres nombres, no cuarenta fichas. Cada uno con por qué encaja en tu noche —y, si hace falta, con por qué el que tú tenías en la cabeza no. Preferimos decírtelo antes de que lo pagues.',
  },
  {
    n: '03',
    titulo: 'Aparecemos',
    texto:
      'Contrato, rider, horarios, montaje y prueba de sonido. El día del evento tú tienes cosas que hacer. Llamarnos no es una de ellas.',
  },
]

const EQUIPO = [
  {
    tiempo: 'Antes de decidir',
    piezas: [
      ['La Escucha', 'Leemos tu brief y te llamamos si algo no cuadra.'],
      ['La Terna', 'Dos o tres nombres, cada uno con su porqué.'],
      ['El Descarte', 'Y por qué hemos dejado fuera al que parecía obvio.'],
      ['La Prueba', 'Vídeo de directo real, y material sin editar si lo pides.'],
    ],
  },
  {
    tiempo: 'Al cerrar',
    piezas: [
      ['El Contrato', 'Firmado con el artista, con penalización y obligación de aviso.'],
      ['El Rider Resuelto', 'Lo que necesitan, traducido a lo que tiene tu sitio.'],
      ['La Llamada al Sitio', 'Accesos, corriente, decibelios y hora de cierre los hablamos nosotros.'],
      ['Los Papeles', 'Facturas, seguros y SGAE cuando hace falta.'],
    ],
  },
  {
    tiempo: 'El día',
    piezas: [
      ['La Escaleta', 'A qué hora monta, prueba, empieza y acaba. Por escrito.'],
      ['La Prueba de Sonido', 'Con la sala vacía, cuadrada con el catering.'],
      ['El Suplente', 'Identificado y reservado desde que firmas. No desde que hay un problema.'],
      ['El Móvil del Día', 'Un número nuestro que contesta de principio a fin.'],
    ],
  },
]

const OCASIONES = [
  {
    href: '/musica-para-festa-major',
    titulo: 'Festa major',
    texto: 'Cercavila de día, havaneres al caer la tarde y baile hasta las tres.',
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
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="grano absolute inset-0"
          style={{
            background:
              'radial-gradient(85% 75% at 82% 22%, rgba(255,176,32,0.5) 0%, rgba(232,69,43,0.2) 30%, rgba(10,10,10,0) 63%), linear-gradient(190deg, #1a1510 0%, #0A0A0A 58%)',
          }}
        />
        <div aria-hidden="true" className="velo-texto absolute inset-0" />

        <div className="contenedor relative flex min-h-[calc(100svh-4rem)] flex-col justify-center py-20 lg:min-h-[calc(100svh-5rem)]">
          <div className="aparece">
            {/*
              El H1 lleva SOLO el gesto de marca. El descriptor de entidad
              vive en el <title>, nunca aquí (docs/07 §D6).
            */}
            <h1 className="max-w-4xl font-display text-[3.1rem] uppercase leading-[0.86] tracking-tight sm:text-7xl lg:text-8xl">
              Dinos qué noche
              <br />
              quieres.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-hueso/80">
              Orquestas, grupos, havaneres, magos y monologuistas en toda Cataluña. Tú cuentas la
              noche; nosotros te damos dos o tres nombres y respondemos de que aparezcan.
            </p>

            <div className="mt-10">
              <CampoNoche />
            </div>

            <p className="mt-8 text-sm text-gris">
              ¿Prefieres mirar primero?{' '}
              <Link href="/artistas" className="text-hueso underline underline-offset-4">
                Ver artistas
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── TRES MOVIMIENTOS ───────────────────────────────────────────── */}
      <Seccion className="border-t border-white/10">
        <div className="contenedor">
          <TituloSeccion>Tres pasos. Solo el primero es tuyo.</TituloSeccion>
          <div className="mt-14 grid gap-10 lg:grid-cols-3 lg:gap-12">
            {MOVIMIENTOS.map((m) => (
              <div key={m.n} className="border-t border-white/15 pt-6">
                <span className="font-display text-4xl text-rojo">{m.n}</span>
                <h3 className="mt-3 text-xl font-semibold">{m.titulo}</h3>
                <p className="mt-3 leading-relaxed text-gris">{m.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </Seccion>

      {/* ── EL EQUIPO INVISIBLE ────────────────────────────────────────── */}
      <Seccion className="bg-superficie/40">
        <div className="contenedor">
          <TituloSeccion>Contratas un nombre. Aparece un equipo.</TituloSeccion>
          <Entradilla>
            Esto es lo que pasa entre que firmas y que alguien se sube. No lo cobramos aparte: va
            dentro. Pero conviene que sepas que existe.
          </Entradilla>

          <div className="mt-14 grid gap-12 lg:grid-cols-3">
            {EQUIPO.map((bloque) => (
              <div key={bloque.tiempo}>
                <h3 className="text-xs uppercase tracking-[0.18em] text-rojo">{bloque.tiempo}</h3>
                <dl className="mt-6 space-y-5">
                  {bloque.piezas.map(([nombre, texto]) => (
                    <div key={nombre} className="border-t border-white/10 pt-4">
                      <dt className="font-semibold">{nombre}</dt>
                      <dd className="mt-1 text-sm leading-relaxed text-gris">{texto}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </Seccion>

      {/* ── GARANTÍA ───────────────────────────────────────────────────── */}
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

      {/* ── ARTISTAS ───────────────────────────────────────────────────── */}
      <Seccion className="overflow-hidden">
        <div className="contenedor">
          <TituloSeccion>Estos ya se han subido con nosotros.</TituloSeccion>
          <Entradilla>
            Cada uno está aquí porque lo hemos visto tocar, no porque nos mandara un dossier.
            Míralos con calma: en cada ficha pone para qué noche sirve. Y para cuál no.
          </Entradilla>
        </div>

        {/* Carrusel horizontal, nunca rejilla — docs/01 §9 */}
        <div className="sin-scrollbar mt-12 flex gap-5 overflow-x-auto px-5 pb-4 sm:px-8 lg:px-12">
          {ARTISTAS.map((a) => (
            <TarjetaArtista key={a.slug} artista={a} />
          ))}
        </div>

        <div className="contenedor mt-10">
          <Link
            href="/artistas"
            className="text-hueso underline underline-offset-4 hover:text-rojo"
          >
            Ver todos los artistas →
          </Link>
        </div>
      </Seccion>

      {/* ── LA PUERTA GRANDE ───────────────────────────────────────────── */}
      <Seccion className="border-y border-white/10 bg-superficie/40">
        <div className="contenedor">
          <TituloSeccion>¿No está el que buscas?</TituloSeccion>
          <p className="mt-8 max-w-2xl font-editorial text-3xl italic leading-tight text-hueso sm:text-4xl">
            Perfecto. Ahí es donde empieza nuestro trabajo.
          </p>
          <p className="mt-8 max-w-lectura leading-relaxed text-gris">
            Dinos qué tienes en la cabeza —el tributo que viste en YouTube, una cercavila para el
            día del pregón, una orquesta que traiga su propio escenario, un cuarteto de cuerda para
            la ceremonia, un mago que vaya mesa por mesa, un monologuista que no se pase de la
            raya— y lo buscamos, lo escuchamos y te decimos si merece la pena.
          </p>
          <p className="mt-5 max-w-lectura leading-relaxed text-gris">
            Si toca en Cataluña, llegamos. Y si te dijéramos que sí a todo tampoco te fiarías:
            cuando algo no se puede, también te lo decimos.
          </p>
          <div className="mt-10">
            <BotonPrimario href="/brief">Pídelo</BotonPrimario>
          </div>
        </div>
      </Seccion>

      {/* ── EMPIEZA POR LA OCASIÓN ─────────────────────────────────────── */}
      <Seccion>
        <div className="contenedor">
          <TituloSeccion>Empieza por la ocasión.</TituloSeccion>
          <Entradilla>
            Porque nadie se levanta pensando «hoy necesito un trío acústico». Se levanta pensando
            «tengo las fiestas en agosto».
          </Entradilla>

          <div className="mt-12 grid gap-px overflow-hidden rounded-lg bg-white/10 sm:grid-cols-2">
            {OCASIONES.map((o) => (
              <Link
                key={o.href}
                href={o.href}
                className="group bg-negro p-8 transition-colors hover:bg-superficie"
              >
                <h3 className="font-editorial text-2xl transition-colors group-hover:text-rojo">
                  {o.titulo}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gris">{o.texto}</p>
              </Link>
            ))}
          </div>
        </div>
      </Seccion>

      {/* ── PRUEBA SOCIAL · variante B ─────────────────────────────────── */}
      {/*
        Regla dura de docs/06 §9: esta sección NO muestra testimonios hasta que
        haya uno real con nombre, evento, ciudad y fecha. Una cita inventada
        cuesta la marca entera. Mientras tanto se dice la verdad, que además
        es algo que nadie del sector dice.
      */}
      <Seccion className="border-t border-white/10">
        <div className="contenedor">
          <TituloSeccion>Todavía no te vamos a enseñar testimonios.</TituloSeccion>
          <Entradilla>
            Llevamos poco y preferimos esperar a tenerlos de verdad. Lo que sí podemos enseñarte son
            las noches: fotos de directos nuestros, sin retocar la sala para que parezca más llena de
            lo que estaba.
          </Entradilla>
        </div>
      </Seccion>

      {/* ── CIERRE ─────────────────────────────────────────────────────── */}
      <Seccion className="relative overflow-hidden border-t border-white/10">
        <div
          aria-hidden="true"
          className="grano absolute inset-0"
          style={{
            background:
              'radial-gradient(70% 100% at 50% 100%, rgba(232,69,43,0.22) 0%, rgba(10,10,10,0) 62%)',
          }}
        />
        <div className="contenedor relative">
          <h2 className="font-display text-5xl uppercase leading-[0.88] sm:text-6xl lg:text-7xl">
            Dinos qué noche
            <br />
            quieres.
          </h2>
          <p className="mt-7 max-w-xl leading-relaxed text-gris">
            Escríbelo aquí abajo como te salga. Te contestamos en menos de 24 h con dos o tres
            nombres. A partir de ahí, aparecemos nosotros.
          </p>
          <div className="mt-10">
            <CampoNoche id="campo-noche-cierre" />
          </div>
          <p className="mt-16 font-editorial text-3xl italic leading-tight sm:text-4xl">
            {CLAIM.promesa}
          </p>
        </div>
      </Seccion>
    </>
  )
}
