import type { Metadata } from 'next'
import Link from 'next/link'
import { BotonPrimario, Entradilla, Seccion, TituloSeccion } from '@/components/Seccion'
import { CLAIM, SITE } from '@/lib/site'

/*
 * Cluster A · marca y conversión (docs/07 §4.2).
 * Página tipográfica: el LCP es el <h1> (docs/07 §C4).
 *
 * Regla de marca de docs/07 §D6: dentro de la web la marca es «Show Up» a
 * secas. El descriptor de entidad vive en el <title>, nunca en el cuerpo.
 *
 * Restricción de cliente (agosto 2026): ninguna cifra en euros, y de momento
 * solo se sirve Cataluña. Se dice aquí, en la página donde toca decir la
 * verdad sobre uno mismo.
 */

export const metadata: Metadata = {
  title: 'Nosotros',
  description:
    'Quiénes somos, cómo elegimos a los artistas que proponemos y por qué decimos que no. Música en directo para festes majors, empresa y bodas en Cataluña.',
  alternates: { canonical: '/nosotros' },
}

export default function Nosotros() {
  return (
    <>
      <section className="border-b border-white/10">
        <div className="contenedor py-16 lg:py-24">
          <p className="text-xs uppercase tracking-[0.2em] text-rojo">Nosotros</p>
          <h1 className="mt-5 max-w-3xl font-editorial text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
            A los nuestros los hemos visto tocar.
          </h1>
          <p className="mt-7 max-w-lectura text-lg leading-relaxed text-hueso/85">
            No somos un buscador de artistas ni un directorio con fichas. Somos la gente que coge el
            teléfono cuando hay que decidir si esa banda cabe en esa plaza, y la que responde de que
            el sábado a las once haya alguien encima del escenario.
          </p>
        </div>
      </section>

      <Seccion>
        <div className="contenedor">
          <TituloSeccion>Cómo elegimos.</TituloSeccion>
          <Entradilla>
            El criterio entero cabe en una frase: si no lo hemos visto tocar delante de gente, no lo
            proponemos. Ni por dossier, ni por vídeo de estudio, ni porque nos lo recomiende un
            amigo.
          </Entradilla>

          <div className="mt-14 grid gap-10 lg:grid-cols-3">
            {[
              [
                'Los vemos en directo',
                'En una sala llena, en una plaza en agosto o en una boda de doscientos. El vídeo de estudio no dice si la banda aguanta cuando el sonido va justo o cuando la plaza está fría a las once.',
              ],
              [
                'Sabemos para qué no sirven',
                'De cada grupo tenemos apuntado dónde funciona y dónde no. Esa segunda lista es la que vale: nadie se fía de quien nunca dice que no.',
              ],
              [
                'Los volvemos a mirar',
                'Las formaciones cambian de gente y de repertorio. Un grupo que estaba bien hace tres años no es una garantía hoy, y por eso volvemos a verlos.',
              ],
            ].map(([titulo, texto]) => (
              <div key={titulo} className="border-t border-white/15 pt-6">
                <h3 className="text-xl font-semibold">{titulo}</h3>
                <p className="mt-3 max-w-lectura leading-relaxed text-gris">{texto}</p>
              </div>
            ))}
          </div>
        </div>
      </Seccion>

      <Seccion className="border-t border-white/10 bg-superficie/40">
        <div className="contenedor">
          <TituloSeccion>Qué te vamos a decir aunque no te guste.</TituloSeccion>
          <ul className="mt-12 max-w-lectura space-y-6 text-gris">
            {[
              'Que el grupo que has visto en un vídeo no encaja en tu sitio, si no encaja. Antes de que lo pagues, no después.',
              'Que la formación que quieres no cabe en el presupuesto que tienes, y qué sí cabe. El primer día.',
              'Que esa fecha ya está cogida, en lugar de colocarte otra cosa parecida y esperar que no lo notes.',
              'Que hay cosas que no controlamos: una tormenta, un corte de luz, un cambio de última hora del ajuntament. Cuando pasa, lo decimos igual de claro.',
            ].map((t) => (
              <li key={t} className="border-t border-white/10 pt-4 leading-relaxed">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </Seccion>

      <Seccion className="border-t border-white/10">
        <div className="contenedor">
          <TituloSeccion>Dónde trabajamos.</TituloSeccion>
          <p className="mt-8 max-w-lectura leading-relaxed text-gris">
            De momento, en Cataluña. Las comarcas donde más plazas llevamos son el Empordà, el
            Penedès, Osona, la Garrotxa, el Maresme, el Vallès, el Bages y el Segrià, y la mayor
            parte de nuestro trabajo son festes majors, actos de ajuntament y comissions de festes,
            más lo que va cayendo de empresa y bodas.
          </p>
          <p className="mt-5 max-w-lectura leading-relaxed text-gris">
            Preferimos decir esto a poner un mapa de España entero y aprender sobre la marcha. Si tu
            evento cae fuera, pregúntanos igual: si llegamos, te lo decimos, y si no, te lo decimos
            también.
          </p>

          <p className="mt-16 max-w-2xl font-editorial text-3xl italic leading-tight sm:text-4xl">
            {CLAIM.promesa}
          </p>

          <div className="mt-12">
            <BotonPrimario href="/brief">Cuéntanos la noche</BotonPrimario>
            <p className="mt-5 text-sm text-gris">
              O escríbenos a{' '}
              <a
                href={`mailto:${SITE.email}`}
                className="underline underline-offset-4 hover:text-hueso"
              >
                {SITE.email}
              </a>{' '}
              ·{' '}
              <Link href="/contacto" className="underline underline-offset-4 hover:text-hueso">
                Contacto
              </Link>
            </p>
          </div>
        </div>
      </Seccion>
    </>
  )
}
