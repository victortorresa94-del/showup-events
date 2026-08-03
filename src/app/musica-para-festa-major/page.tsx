import type { Metadata } from 'next'
import Link from 'next/link'
import { BotonPrimario, Entradilla, Seccion, TituloSeccion } from '@/components/Seccion'
import { SITE } from '@/lib/site'

/*
 * HUB DEL CLÚSTER PRIORITARIO (docs/07 §4.2, cluster C · prioridad 1).
 *
 * Cambio de brief de agosto de 2026, dos correcciones sobre el plan original:
 *  · La URL era `/orquestas-y-charangas-para-fiestas`. Pasa a
 *    `/musica-para-festa-major` porque de momento solo se sirve Cataluña y
 *    el término del sector aquí es «festa major», no «fiestas patronales».
 *    Se mantiene el eje de docs/07 §D3: en fiestas manda la FORMACIÓN,
 *    porque quien compra lleva veinte años tecleando el nombre del formato.
 *  · NO se publica ninguna cifra. Donde iba la tabla de horquillas va la
 *    sección «Qué decide lo que cuesta»: mismo contenido útil, misma
 *    intención de búsqueda capturada, cero números.
 *
 * Forma (docs/07 §C4): página tipográfica, sin foto a sangre. LCP = <h1>.
 * Tono (docs/06 §15, «Fiestas»): oficio y logística. Nunca condescendencia
 * con lo rural, nunca «modernizar las fiestas».
 */

export const metadata: Metadata = {
  title: 'Orquestas y grupos para la festa major',
  description:
    'Orquestra de ball, grups de versions, havaneres, cercavila. Qué formación va en cada tramo del programa de una festa major en Cataluña, qué significa llave en mano y qué decide lo que cuesta.',
  alternates: { canonical: '/musica-para-festa-major' },
}

/* FAQ sin una sola cifra: captura la intención de «cuánto cuesta» por la
   vía del criterio, no del número (restricción de cliente, agosto 2026). */
const FAQ: { p: string; r: string }[] = [
  {
    p: '¿Qué diferencia hay entre una cercavila y un ball de nit?',
    r: 'La cercavila es el formato de calle: la música va andando, el público la sigue o la mira pasar, y suena a plena luz del día, sin escenario ni equipo de sonido. El ball de nit es lo contrario: escenario montado, sonido y luces, público quieto delante y una formación que trabaja por pases con descansos. Son dos oficios distintos y casi nunca los hace la misma gente el mismo día, porque el desgaste de una cercavila de dos horas al sol se nota en la voz de la noche.',
  },
  {
    p: '¿Qué es una orquestra de ball y en qué se diferencia de un grup de versions?',
    r: 'Una orquestra de ball está pensada para que la gente baile agarrada y suelta durante toda la noche, con un repertorio que va del bolero y el pasodoble a lo que sonó el año pasado, y organiza la noche en pases largos: normalmente un ball de tarda para el público mayor y un ball de nit que acaba de madrugada. Un grup de versions hace un concierto: una hora y media o dos de pie, con un repertorio más cerrado y un público más joven que viene a escuchar canciones que se sabe. En un programa bien armado caben los dos, en tramos distintos.',
  },
  {
    p: '¿Qué significa que una orquestra vaya «llave en mano»?',
    r: 'Que trae su propio escenario, el equipo de sonido, las luces y el técnico que lo maneja, y que monta y desmonta por su cuenta. El ajuntament o la comissió solo tiene que garantizar el espacio, la acometida eléctrica con la potencia acordada y los permisos. Es la fórmula más cómoda para un municipio que no tiene escenario propio, y también la que más condiciona el presupuesto, porque dentro del mismo contrato viajan un camión, un montaje y un equipo técnico además de los músicos.',
  },
  {
    p: '¿Qué decide lo que cuesta una actuación de festa major?',
    r: 'Seis cosas, siempre las mismas: cuántos músicos suben al escenario, cuánto dura la actuación y en cuántos pases se reparte, la distancia desde la base del grupo y si hay que dormir fuera, si el sitio ya tiene sonido y luces o hay que llevarlo todo, si hace falta escenario propio, y la fecha. Un sábado de agosto no vale lo mismo que un jueves de junio, porque la agenda del grupo es finita y esa noche solo se puede vender una vez. Con esos seis datos se da un presupuesto cerrado por escrito, sin partidas que aparezcan después.',
  },
  {
    p: '¿Con cuánta antelación hay que cerrar la música de una festa major?',
    r: 'El grueso de la contratación municipal en Cataluña se cierra entre enero y abril para las festes majors de julio y agosto, porque el pressupost se aprueba a final del año anterior y el programa se decide en invierno. Quien llama en mayo se encuentra las mejores fechas cogidas. Dicho esto, en junio y julio siempre se mueve algo: si te ha fallado un grupo a tres semanas vista, se resuelve más veces de las que parece.',
  },
]

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-5 max-w-lectura leading-relaxed text-gris">{children}</p>
}

/* El vocabulario del sector es uno de los tres activos defendibles del plan
   (docs/07 §6.3): no existe fuente pública que lo defina con criterio. */
const FORMACIONES = [
  {
    nombre: 'Cercavila',
    que: 'La calle, de día',
    texto:
      'El equivalente catalán del pasacalles: la música se mueve, el público se mueve con ella y no hay ni escenario ni equipo. Suele abrir la jornada acompañando a los gegants i capgrossos, con grallers y percusión, y se cierra en la plaza del ajuntament. Se contrata por horas de calle y por recorrido, no por pases, y el recorrido hay que verlo antes: una cuesta larga con la formación andando cambia lo que se puede tocar.',
  },
  {
    nombre: 'Sardanes amb cobla',
    que: 'Media mañana o mediodía',
    texto:
      'La cobla es una formación fija de once músicos con instrumentos propios —tenora, tible, flabiol— y no admite recorte: no existe la media cobla. Va sentada, hace audición con un número de sardanes acordado y el público baila en corro. Es el tramo del programa que más agradece la gente mayor del pueblo y el que más se nota si desaparece.',
  },
  {
    nombre: 'Cantada d’havaneres',
    que: 'Atardecer',
    texto:
      'Tres o cuatro voces con guitarra y acordeón, sillas puestas y rom cremat al final. Nació en la costa —el Empordà y el Maresme la tienen en el calendario desde siempre— pero se programa igual de bien tierra adentro. Es el acto que reúne a la vez a los abuelos y a los niños, y el que mejor funciona el sábado antes de la cena, nunca compitiendo con el ball de nit.',
  },
  {
    nombre: 'Grup de versions',
    que: 'La noche joven',
    texto:
      'Concierto de hora y media o dos horas, público de pie, repertorio de canciones que la gente se sabe. Va bien antes de la orquestra o en el escenario de la zona joven, y necesita sonido de concierto de verdad: aquí el equipo pequeño se nota enseguida. Cuando el grupo tira de rumba catalana, la plaza responde a la primera.',
  },
  {
    nombre: 'Orquestra de ball',
    que: 'El ball de nit',
    texto:
      'La formación grande: sección de viento, voces, coreografía y vestuario, casi siempre con escenario, sonido, luces y técnico propios. Trabaja por pases —ball de tarda para el público mayor, ball de nit hasta bien entrada la madrugada y a menudo una sessió final más de discoteca— y su oficio real es leer la plaza y cambiar el orden sobre la marcha. Es el contrato más caro del programa y el que más logística arrastra.',
  },
  {
    nombre: 'Correfoc, castellers i gegants',
    que: 'Lo que condiciona el resto',
    texto:
      'No son música contratada, pero mandan sobre el programa: un correfoc obliga a cortar calles y a retirar la megafonía del recorrido, una diada castellera pide plaza despejada a mediodía y silencio, y los gegants marcan la hora de la cercavila. Cuando alguien monta el horario sin contar con ellos, lo que se solapa siempre es la música.',
  },
]

const PROGRAMA = [
  ['Mañana', 'Cercavila amb gegants i capgrossos', 'Grallers i percussió. Formación de calle, sin equipo.'],
  ['Mediodía', 'Audició de sardanes', 'Cobla. Sentada, con público en corro.'],
  ['Tarde', 'Ball de tarda', 'Orquestra, primer pase. Público mayor, baile agarrado.'],
  ['Atardecer', 'Cantada d’havaneres amb rom cremat', 'Voces y guitarra. Sillas y todas las edades.'],
  ['Noche', 'Grup de versions', 'Concierto de pie. Sonido de concierto, no de megafonía.'],
  ['Madrugada', 'Ball de nit i sessió', 'Orquestra al completo. Aquí es donde se decide si el año que viene repites.'],
]

const QUE_DECIDE_EL_PRECIO = [
  [
    'Cuánta gente sube',
    'El número de músicos es el factor que más pesa, y no crece en línea recta: una formación grande arrastra además más furgonetas, más dietas y más habitaciones.',
  ],
  [
    'Cuánto dura y en cuántos pases',
    'No es lo mismo un concierto seguido que una noche repartida en tres pases con descansos, que ocupa a la banda desde la tarde hasta la madrugada y bloquea el día entero.',
  ],
  [
    'La distancia y si hay que dormir',
    'Un bolo a media hora de la base del grupo y otro al otro lado del país son dos contratos distintos aunque la actuación sea idéntica. Cuando acaba de madrugada, casi siempre hay noche de hotel.',
  ],
  [
    'Si el sitio ya tiene sonido y luces',
    'Si la plaza tiene equipo y técnico, el grupo va y toca. Si no lo tiene, dentro del contrato viaja también el equipo y quien lo maneja, y eso se nota en el presupuesto y en las horas de montaje.',
  ],
  [
    'Si hace falta escenario',
    'Una actuación llave en mano incluye la estructura, su certificado de montaje y el tiempo de montaje y desmontaje. Si el ajuntament pone escenario propio, esa partida desaparece del presupuesto.',
  ],
  [
    'La fecha',
    'Un sábado de agosto o el día grande de la festa major no valen lo mismo que un jueves de junio: la agenda de un grupo es finita y esa noche solo se puede vender una vez.',
  ],
]

export default function MusicaParaFestaMajor() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map((f) => ({
      '@type': 'Question',
      name: f.p,
      acceptedAnswer: { '@type': 'Answer', text: f.r },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ── CABECERA TIPOGRÁFICA · el LCP es este h1 ───────────────────── */}
      <section className="border-b border-white/10">
        <div className="contenedor py-16 lg:py-24">
          <p className="text-xs uppercase tracking-[0.2em] text-rojo">Fiestas · Cataluña</p>
          <h1 className="mt-5 max-w-4xl font-editorial text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
            Orquestas y grupos para la festa major
          </h1>
          <p className="mt-7 max-w-lectura text-lg leading-relaxed text-hueso/85">
            La festa major —lo que fuera de Cataluña se llama fiestas patronales— no es una noche:
            son dos o tres días con seis tramos distintos y un público que cambia entero cada cuatro
            horas. Aquí está qué formación va en cada tramo, qué significa llave en mano y qué decide
            lo que cuesta.
          </p>
          <div className="mt-10">
            <BotonPrimario href="/brief">Cuéntanos la festa major</BotonPrimario>
          </div>
        </div>
      </section>

      {/* ── LA CALLE Y LA PLAZA ────────────────────────────────────────── */}
      <Seccion>
        <div className="contenedor">
          <TituloSeccion>El día tiene dos mitades, y no se tocan.</TituloSeccion>
          <Entradilla>
            Casi todos los programas que salen mal salen mal por lo mismo: se contrata pensando en la
            música y no en la hora. Y la hora manda.
          </Entradilla>

          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="border-t border-white/15 pt-6">
              <h3 className="text-xs uppercase tracking-[0.18em] text-rojo">La calle, de día</h3>
              <p className="mt-4 text-2xl font-semibold">Cercavila</p>
              <p className="mt-4 leading-relaxed text-gris">
                La música anda. No hay escenario, no hay equipo y el público no está quieto: se
                incorpora, camina un rato y se va. Se contrata por recorrido y por horas de calle, y
                se cuadra con los gegants i capgrossos, que son quienes de verdad marcan el paso. Lo
                que importa aquí es la proyección sin micro, el repertorio corto y aguantar el sol.
              </p>
              <p className="mt-4 leading-relaxed text-gris">
                En otras zonas de España el eje de la calle son la charanga y la txaranga, con su
                propia lógica de pasacalles y peñas. En Cataluña el formato tiene nombre propio y una
                función distinta: acompaña un recorrido con protocolo, no una peña de bar.
              </p>
            </div>

            <div className="border-t border-white/15 pt-6">
              <h3 className="text-xs uppercase tracking-[0.18em] text-rojo">La plaza, de noche</h3>
              <p className="mt-4 text-2xl font-semibold">Orquestra i ball de nit</p>
              <p className="mt-4 leading-relaxed text-gris">
                Aquí la música está quieta y el público también: escenario montado, sonido, luces y
                una formación que trabaja por pases con descansos. La orquestra no hace un concierto,
                hace una noche entera, y su oficio real no es el repertorio sino leer la plaza —si a
                la una la gente mayor sigue sentada, cambia el orden y no lo notas.
              </p>
              <p className="mt-4 leading-relaxed text-gris">
                Un grup de versions sí hace un concierto: hora y media de pie, repertorio cerrado,
                público más joven. Caben los dos en el mismo programa, en tramos distintos y con
                equipos de sonido distintos.
              </p>
            </div>
          </div>
        </div>
      </Seccion>

      {/* ── EL VOCABULARIO ─────────────────────────────────────────────── */}
      <Seccion className="border-t border-white/10 bg-superficie/40">
        <div className="contenedor">
          <TituloSeccion>Cada tramo tiene su formación. Y su nombre.</TituloSeccion>
          <Entradilla>
            No hay ninguna fuente pública que explique esto con criterio, así que lo escribimos
            nosotros. Si algo de lo que pone aquí no cuadra con cómo se hace en tu comarca,
            dínoslo y lo corregimos.
          </Entradilla>

          <div className="mt-14 grid gap-px overflow-hidden rounded-lg bg-white/10 sm:grid-cols-2">
            {FORMACIONES.map((f) => (
              <article key={f.nombre} className="bg-negro p-7 sm:p-8">
                <p className="text-xs uppercase tracking-[0.18em] text-gris">{f.que}</p>
                <h3 className="mt-3 font-editorial text-2xl">{f.nombre}</h3>
                <p className="mt-4 text-sm leading-relaxed text-gris">{f.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </Seccion>

      {/* ── LLAVE EN MANO ──────────────────────────────────────────────── */}
      <Seccion>
        <div className="contenedor">
          <div className="rounded-xl hairline bg-superficie p-8 sm:p-12 lg:p-16">
            <h2 className="text-xs uppercase tracking-[0.18em] text-rojo">Llave en mano</h2>
            <p className="mt-6 max-w-3xl font-editorial text-3xl leading-tight sm:text-4xl">
              Escenario, sonido, luces y el técnico que lo maneja. Vosotros ponéis el espacio, la
              corriente y los permisos.
            </p>
            <p className="mt-8 max-w-lectura leading-relaxed text-gris">
              Es la fórmula que necesita un municipio que no tiene escenario propio, y hay que
              pedirla por escrito con tres datos dentro: la potencia eléctrica que hace falta y con
              qué tipo de acometida, la hora de montaje y desmontaje, y quién firma el certificado de
              montaje de la estructura. Con esos tres, el día 15 no hay conversaciones raras.
            </p>
            <p className="mt-5 max-w-lectura leading-relaxed text-gris">
              Si la plaza ya tiene escenario, equipo y técnico —cada vez más habitual en municipios
              del Vallès, el Bages o el Segrià que han invertido en material propio—, esa partida
              desaparece del contrato y solo va la formación. Conviene decirlo en la primera llamada:
              cambia el presupuesto de arriba abajo.
            </p>
          </div>
        </div>
      </Seccion>

      {/* ── EL PROGRAMA DE UN DÍA ──────────────────────────────────────── */}
      <Seccion className="border-t border-white/10">
        <div className="contenedor">
          <TituloSeccion>Cómo se arma el día grande.</TituloSeccion>
          <Entradilla>
            Este es el esqueleto que funciona en la mayoría de festes majors. No hay que llenarlo
            entero: hay que elegir cuáles de estos tramos son los tuyos y no solapar los dos que
            piden la misma plaza.
          </Entradilla>

          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
              <caption className="sr-only">
                Tramos del programa de un día de festa major y formación que corresponde a cada uno
              </caption>
              <thead>
                <tr className="border-b border-white/20 text-xs uppercase tracking-[0.14em] text-gris">
                  <th scope="col" className="py-3 pr-4 font-medium">
                    Tramo
                  </th>
                  <th scope="col" className="py-3 pr-4 font-medium">
                    Acto
                  </th>
                  <th scope="col" className="py-3 font-medium">
                    Qué formación pide
                  </th>
                </tr>
              </thead>
              <tbody className="text-gris">
                {PROGRAMA.map(([tramo, acto, formacion]) => (
                  <tr key={tramo} className="border-b border-white/10 align-top">
                    <th scope="row" className="py-4 pr-4 font-semibold text-hueso">
                      {tramo}
                    </th>
                    <td className="py-4 pr-4 leading-relaxed text-hueso/85">{acto}</td>
                    <td className="py-4 leading-relaxed">{formacion}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <P>
            Tres cosas que aprendimos a base de plazas: el ball de tarda no es un relleno, es el acto
            que sostiene al público mayor y el que decide si a las once queda gente en la plaza. El
            grup de versions no puede ir justo antes del ball de nit si comparten escenario, porque
            el cambio de equipo se come cuarenta minutos y ahí la plaza se vacía. Y la cercavila de
            la mañana no la puede hacer la misma gente que toca de madrugada: dos horas de calle a
            pleno sol se oyen luego en la voz.
          </P>
        </div>
      </Seccion>

      {/* ── QUÉ DECIDE LO QUE CUESTA ───────────────────────────────────── */}
      {/*
        Aquí iba la tabla de horquillas del pilar de precios. El cliente ha
        decidido en agosto de 2026 que no se publica ninguna cifra en el sitio.
        Se conserva la intención de búsqueda («cuánto cuesta una orquestra para
        la festa major») respondiéndola por criterio, que además es lo que un
        agregador con medias nacionales no puede dar (docs/07 §C3).
      */}
      <Seccion className="border-t border-white/10 bg-superficie/40">
        <div className="contenedor">
          <TituloSeccion>Qué decide lo que cuesta.</TituloSeccion>
          <Entradilla>
            No publicamos tarifas porque una tarifa suelta no significa nada: la misma orquestra
            cuesta dos cosas distintas según dónde toque y qué haya que llevar. Lo que sí podemos
            decirte es exactamente qué mueve la cifra, para que cuando pidas presupuesto sepas qué
            estás comparando.
          </Entradilla>

          <ol className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-x-16">
            {QUE_DECIDE_EL_PRECIO.map(([titulo, texto], i) => (
              <li key={titulo} className="border-t border-white/15 pt-6">
                <span className="font-display text-4xl text-rojo">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 text-xl font-semibold">{titulo}</h3>
                <p className="mt-3 max-w-lectura leading-relaxed text-gris">{texto}</p>
              </li>
            ))}
          </ol>

          <div className="mt-16 max-w-lectura border-t border-white/15 pt-8">
            <p className="font-editorial text-2xl leading-snug">
              Con esos seis datos te damos un presupuesto cerrado por escrito.
            </p>
            <p className="mt-5 leading-relaxed text-gris">
              Cerrado quiere decir cerrado: dentro va el caché, el desplazamiento, las dietas y el
              contrato, y el equipo de sonido y las luces entran o no según el formato, dicho en una
              línea que se entiende. Lo que no vas a ver nunca es una partida que aparece la semana
              antes. Si lo que quieres no cabe en lo que tienes, te lo decimos el primer día y te
              enseñamos qué sí cabe.
            </p>
            <div className="mt-10">
              <BotonPrimario href="/brief">Cuéntanos la noche</BotonPrimario>
            </div>
          </div>
        </div>
      </Seccion>

      {/* ── PREGUNTAS ──────────────────────────────────────────────────── */}
      <Seccion className="border-t border-white/10">
        <div className="contenedor">
          <TituloSeccion>Lo que nos preguntan las comissions.</TituloSeccion>
          <dl className="mt-12 space-y-8">
            {FAQ.map((f) => (
              <div key={f.p} className="border-t border-white/10 pt-6">
                <dt className="max-w-lectura text-lg font-semibold text-hueso">{f.p}</dt>
                <dd className="mt-4 max-w-lectura leading-relaxed text-gris">{f.r}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Seccion>

      {/* ── ENLACES DEL CLÚSTER ────────────────────────────────────────── */}
      <Seccion className="border-t border-white/10 bg-superficie/40">
        <div className="contenedor">
          <TituloSeccion>Seguir por aquí.</TituloSeccion>

          <ul className="mt-12 grid gap-px overflow-hidden rounded-lg bg-white/10 sm:grid-cols-2">
            {[
              [
                '/guias/como-contrata-un-ayuntamiento-una-actuacion',
                'Cómo contrata un ayuntamiento una actuación',
                'Contrato menor, quién firma, qué papeles piden y cuánto tarda el pago. La guía larga.',
              ],
              [
                '/orquestas-para-verbenas',
                'Orquestas para verbenas',
                'La formación grande: pases, escenario propio y cómo se lee una plaza.',
              ],
              [
                '/charangas-para-fiestas',
                'Charangas para fiestas',
                'El formato de calle fuera de Cataluña, por si tu programa lo pide.',
              ],
              [
                '/txarangas',
                'Txarangas',
                'Cómo se llama y cómo funciona el mismo oficio en Navarra y Euskadi.',
              ],
            ].map(([href, titulo, texto]) => (
              <li key={href}>
                <Link href={href} className="group block h-full bg-negro p-7 sm:p-8 hover:bg-superficie">
                  <h3 className="font-editorial text-xl transition-colors group-hover:text-rojo">
                    {titulo}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gris">{texto}</p>
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-12 max-w-lectura leading-relaxed text-gris">
            De momento trabajamos en Cataluña: Empordà, Penedès, Osona, Garrotxa, Maresme, Vallès,
            Bages y Segrià son las comarcas donde más plazas llevamos. Si tu festa major cae fuera,
            dínoslo igual y te decimos con honestidad si llegamos o no.
          </p>
          <p className="mt-6 text-sm text-gris">
            ¿Prefieres hablarlo? {SITE.telefonoVisible} ·{' '}
            <a
              href={`mailto:${SITE.email}`}
              className="underline underline-offset-4 hover:text-hueso"
            >
              {SITE.email}
            </a>
          </p>
        </div>
      </Seccion>
    </>
  )
}
