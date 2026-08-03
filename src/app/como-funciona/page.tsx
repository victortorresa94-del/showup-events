import type { Metadata } from 'next'
import Link from 'next/link'
import { BotonPrimario, Entradilla, Seccion, TituloSeccion } from '@/components/Seccion'
import { SITE } from '@/lib/site'

/*
 * Cluster B · transversal (docs/07 §4.2).
 * Página tipográfica, sin foto a sangre: el LCP es el <h1> (docs/07 §C4).
 *
 * Aquí viven las anclas de «Salas y locales» y «Privados», que por decisión
 * de docs/06 §7 NO tienen URL propia: son secciones de esta página.
 *
 * Restricción de cliente de agosto de 2026: ninguna cifra en euros en el
 * sitio. Donde tocaba hablar de precio se habla de qué lo determina.
 */

export const metadata: Metadata = {
  title: 'Cómo funciona',
  description:
    'Nos cuentas la noche, te proponemos dos o tres nombres en menos de 24 h y respondemos de que aparezcan. Qué hacemos entre que firmas y que alguien se sube al escenario.',
  alternates: { canonical: '/como-funciona' },
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

export default function ComoFunciona() {
  return (
    <>
      <section className="border-b border-white/10">
        <div className="contenedor py-16 lg:py-24">
          <p className="text-xs uppercase tracking-[0.2em] text-rojo">Cómo funciona</p>
          <h1 className="mt-5 max-w-3xl font-editorial text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
            Tres pasos. Solo el primero es tuyo.
          </h1>
          <p className="mt-7 max-w-lectura text-lg leading-relaxed text-hueso/85">
            No hay catálogo que rellenar ni formulario de veinte campos. Nos cuentas la noche con tus
            palabras y en menos de 24 h tienes dos o tres nombres con vídeo, con lo que entra en el
            precio y con el porqué de cada uno.
          </p>
        </div>
      </section>

      <Seccion>
        <div className="contenedor">
          <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
            {MOVIMIENTOS.map((m) => (
              <div key={m.n} className="border-t border-white/15 pt-6">
                <span className="font-display text-4xl text-rojo">{m.n}</span>
                <h2 className="mt-3 text-xl font-semibold">{m.titulo}</h2>
                <p className="mt-3 max-w-lectura leading-relaxed text-gris">{m.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </Seccion>

      {/* ── EL EQUIPO INVISIBLE ────────────────────────────────────────── */}
      <Seccion className="border-t border-white/10 bg-superficie/40">
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

      {/* ── QUÉ DECIDE EL PRECIO ───────────────────────────────────────── */}
      <Seccion>
        <div className="contenedor">
          <TituloSeccion>Lo que cuesta, antes de que lo preguntes.</TituloSeccion>
          <Entradilla>
            No publicamos tarifas: una cifra suelta no dice nada, porque la misma banda cuesta dos
            cosas distintas según dónde toque y qué haya que llevar. Lo que sí te decimos es qué
            mueve la cifra, y luego te la damos cerrada por escrito.
          </Entradilla>

          <ul className="mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
            {[
              ['Cuánta gente sube al escenario', 'Es el factor que más pesa, y arrastra dietas y desplazamientos.'],
              ['Cuánto dura y en cuántos pases', 'Una noche en tres pases ocupa el día entero de la banda.'],
              ['La distancia y si hay que dormir', 'Media hora de carretera o el otro lado del país no son lo mismo.'],
              ['Si el sitio tiene sonido y luces', 'Si no los tiene, en el contrato viaja también el equipo y su técnico.'],
              ['Si hace falta escenario', 'Estructura, certificado de montaje y horas de montaje y desmontaje.'],
              ['La fecha', 'Un sábado de agosto solo se puede vender una vez.'],
            ].map(([titulo, texto]) => (
              <li key={titulo} className="border-t border-white/10 pt-4">
                <h3 className="font-semibold">{titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gris">{texto}</p>
              </li>
            ))}
          </ul>

          <p className="mt-12 max-w-lectura leading-relaxed text-gris">
            Dentro del presupuesto van el caché, el desplazamiento, las dietas y el contrato. El
            equipo de sonido y las luces entran o no según el formato, y eso te lo ponemos por
            escrito antes de firmar, en una línea que se entiende. Si aparece un coste, aparece en el
            presupuesto y no la semana antes.
          </p>
        </div>
      </Seccion>

      {/* ── SALAS · ancla, no URL propia (docs/06 §7) ──────────────────── */}
      <Seccion id="salas" className="scroll-mt-24 border-t border-white/10 bg-superficie/40">
        <div className="contenedor grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="font-editorial text-3xl leading-tight sm:text-4xl">Salas y locales</h2>
            <p className="mt-6 max-w-lectura leading-relaxed text-gris">
              Programar no es rellenar sábados. Si llevas una sala, lo que necesitas es que el aforo
              real y el caché cuadren, que el grupo traiga público y que el nivel de la sala no baje
              en enero. Trabajamos con ciclos, no con bolos sueltos: nos dices qué noches tienes
              flojas y montamos una programación que se sostenga.
            </p>
            <p className="mt-5 max-w-lectura leading-relaxed text-gris">
              Y las cosas aburridas también las hablamos nosotros: licencia, límite de decibelios,
              hora de cierre y los papeles de derechos de autor.
            </p>
          </div>

          <div id="privados" className="scroll-mt-24">
            <h2 className="font-editorial text-3xl leading-tight sm:text-4xl">Privados</h2>
            <p className="mt-6 max-w-lectura leading-relaxed text-gris">
              Cumpleaños, aniversarios, comidas de familia, cenas en casa. Formato pequeño y el mismo
              cuidado: un dúo que se oiga por encima de la conversación sin taparla, un mago que vaya
              mesa por mesa, alguien que toque mientras se sirve el postre.
            </p>
            <p className="mt-5 max-w-lectura leading-relaxed text-gris">
              La diferencia con un evento grande no es el nivel del artista, es el volumen. Y esa es
              justo la conversación que hay que tener antes, no cuando ya están tocando.
            </p>
          </div>
        </div>
      </Seccion>

      {/* ── GARANTÍA ───────────────────────────────────────────────────── */}
      <Seccion className="border-t border-white/10">
        <div className="contenedor">
          <div className="rounded-xl hairline bg-superficie p-8 sm:p-12 lg:p-16">
            <h2 className="text-xs uppercase tracking-[0.18em] text-rojo">La Garantía Show Up</h2>
            <p className="mt-6 max-w-3xl font-editorial text-3xl leading-tight sm:text-4xl">
              Si el artista no aparece, sube el suplente. Si no sube nadie, te devolvemos todo.
            </p>
            <p className="mt-8 max-w-lectura leading-relaxed text-gris">
              No es una frase de web: está en el contrato. El suplente no se busca cuando hay un
              problema — está reservado desde el día que firmas, y por eso podemos prometerte esto.
            </p>
            <p className="mt-5 max-w-lectura text-sm leading-relaxed text-gris/80">
              Hasta el importe que nos hayas pagado. No cubrimos lo que no controlamos —una tormenta,
              un corte de luz del municipio, un cierre de la administración—, y en esos casos te lo
              decimos igual de claro.
            </p>
          </div>

          <div className="mt-14">
            <BotonPrimario href="/brief">Cuéntanos la noche</BotonPrimario>
            <p className="mt-5 text-sm text-gris">
              ¿Organizas una festa major?{' '}
              <Link
                href="/musica-para-festa-major"
                className="underline underline-offset-4 hover:text-hueso"
              >
                Empieza por aquí
              </Link>{' '}
              · ¿Prefieres hablarlo? {SITE.telefonoVisible}
            </p>
          </div>
        </div>
      </Seccion>
    </>
  )
}
