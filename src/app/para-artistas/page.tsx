import type { Metadata } from 'next'
import Link from 'next/link'
import { BotonPrimario, Entradilla, Seccion, TituloSeccion } from '@/components/Seccion'
import { SITE, urlAbsoluta } from '@/lib/site'

/**
 * La jugada menos obvia del plan y probablemente de las más rentables
 * (docs/07 §C2).
 *
 * Quien busca con volumen en este vertical no es el hostelero: es el MÚSICO
 * — «cómo conseguir bolos», «cuánto cobrar por un bolo», «cómo facturar un
 * bolo» — con competencia casi nula. Esta sección no capta clientes: engorda
 * la agenda de contactos, que es el activo real del negocio, y de paso
 * construye autoridad temática en música en vivo.
 *
 * Página tipográfica, sin foto a sangre: su LCP es el <h1>.
 */
export const metadata: Metadata = {
  title: 'Para artistas',
  description:
    'Si tocas en Cataluña y quieres más bolos, apúntate a la agenda de Show Up. Cómo trabajamos con los artistas, qué pedimos y qué no, y cómo se cobra.',
  alternates: { canonical: '/para-artistas' },
}

const COMO_TRABAJAMOS = [
  {
    titulo: 'Te vemos tocar antes',
    texto:
      'No entramos a nadie por dossier. Vamos a un bolo, o pedimos vídeo sin editar del último. Es lo que nos permite decirle a un cliente «a este lo hemos visto», y es lo que hace que se fíe.',
  },
  {
    titulo: 'No te mandamos a sitios donde no encajas',
    texto:
      'Si sois seis y el cliente tiene un salón de sesenta personas, te lo decimos a ti y se lo decimos a él. Preferimos perder un bolo que quemarte en una sala que no era la tuya.',
  },
  {
    titulo: 'El caché lo pones tú',
    texto:
      'No negociamos tu precio a la baja con el cliente por nuestra cuenta. Si el presupuesto no llega, te lo contamos y decides tú si entras o no.',
  },
  {
    titulo: 'Contrato y papeles resueltos',
    texto:
      'Contrato firmado, condiciones por escrito y la gestión con el ayuntamiento o la finca la hacemos nosotros. Tú te presentas y tocas.',
  },
  {
    titulo: 'Exclusividad, ninguna',
    texto:
      'Estar en nuestra agenda no te impide trabajar con quien quieras ni cerrar tus propios bolos. Faltaría más.',
  },
]

const GUIAS = [
  {
    href: '/para-artistas/cuanto-cobrar-por-un-bolo',
    titulo: 'Cuánto cobrar por un bolo',
    texto: 'Qué factores marcan tu caché y cómo no venderte por debajo sin quedarte fuera.',
  },
  {
    href: '/para-artistas/como-conseguir-bolos',
    titulo: 'Cómo conseguir bolos',
    texto: 'Ayuntamientos, comissions de festes, salas y agencias: quién contrata y cuándo.',
  },
  {
    href: '/para-artistas/como-facturar-un-bolo',
    titulo: 'Cómo facturar un bolo',
    texto: 'Alta, IVA, retención y qué papeles te va a pedir un ayuntamiento.',
  },
]

export default function ParaArtistas() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Para artistas',
    url: urlAbsoluta('/para-artistas'),
    description:
      'Cómo trabaja Show Up con los artistas de su agenda: criterio de entrada, contrato, caché y ausencia de exclusividad.',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Seccion>
        <div className="contenedor">
          <h1 className="max-w-4xl font-display text-5xl uppercase leading-[0.9] sm:text-6xl lg:text-7xl">
            ¿Tocas? Hablemos.
          </h1>
          <p className="mt-8 max-w-lectura font-editorial text-2xl italic leading-snug text-hueso/90">
            Nuestro trabajo depende de tener buenos artistas a mano. Así que esta página va en serio.
          </p>
          <Entradilla>
            Show Up mueve orquestas, grupos de versiones, havaneres, cercaviles, magos y
            monologuistas por toda Cataluña. Si haces alguna de esas cosas y quieres más fechas,
            queremos verte tocar.
          </Entradilla>
          <div className="mt-10">
            <BotonPrimario href="/contacto">Escríbenos</BotonPrimario>
          </div>
        </div>
      </Seccion>

      <Seccion className="border-t border-white/10 bg-superficie/40">
        <div className="contenedor">
          <TituloSeccion>Cómo trabajamos con vosotros</TituloSeccion>
          <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-x-16">
            {COMO_TRABAJAMOS.map((c) => (
              <div key={c.titulo} className="border-t border-white/15 pt-5">
                <h2 className="text-lg font-semibold">{c.titulo}</h2>
                <p className="mt-3 leading-relaxed text-gris">{c.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </Seccion>

      <Seccion>
        <div className="contenedor">
          <TituloSeccion>Cosas que nos preguntáis mucho</TituloSeccion>
          <Entradilla>
            Las escribimos porque casi nadie las ha escrito bien, y porque a nosotros nos las
            preguntan cada semana.
          </Entradilla>

          <div className="mt-12 grid gap-px overflow-hidden rounded-lg bg-white/10 sm:grid-cols-3">
            {GUIAS.map((g) => (
              <Link
                key={g.href}
                href={g.href}
                className="group bg-negro p-7 transition-colors hover:bg-superficie"
              >
                <h3 className="font-editorial text-2xl leading-snug transition-colors group-hover:text-rojo">
                  {g.titulo}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gris">{g.texto}</p>
              </Link>
            ))}
          </div>
          <p className="mt-8 text-sm text-gris">Las estamos escribiendo. Van saliendo.</p>
        </div>
      </Seccion>

      <Seccion className="border-t border-white/10">
        <div className="contenedor">
          <TituloSeccion>Mándanos algo y te decimos</TituloSeccion>
          <p className="mt-8 max-w-lectura leading-relaxed text-gris">
            Un vídeo de directo sin editar vale más que un dossier de veinte páginas. Cuéntanos qué
            formación sois, de dónde salís, qué formatos hacéis y dónde habéis tocado este año. Si
            encajáis te lo decimos, y si no encajáis también — con el porqué.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <BotonPrimario href="/contacto">Escríbenos</BotonPrimario>
            <a
              href={`mailto:${SITE.email}`}
              className="text-hueso underline underline-offset-4 hover:text-rojo"
            >
              {SITE.email}
            </a>
          </div>
        </div>
      </Seccion>
    </>
  )
}
