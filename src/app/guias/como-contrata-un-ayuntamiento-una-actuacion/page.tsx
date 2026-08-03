import type { Metadata } from 'next'
import Link from 'next/link'
import { BotonPrimario, Seccion } from '@/components/Seccion'
import { SITE } from '@/lib/site'

/*
 * PIEZA Nº 1 DEL PLAN DE PUBLICACIÓN (docs/07 §5).
 * Debilidad del rival 10/10: cero competencia comercial, ~80 % de clic
 * disponible y el mejor imán de enlaces `.cat` / `.es` municipales que hay.
 *
 * Forma — docs/07 §C4:
 *  · Página tipográfica. Sin foto a sangre ni gradiente pesado: el LCP es
 *    el <h1>, objetivo 1,6 s.
 *  · Cuerpo siempre dentro de `max-w-lectura`.
 *
 * Tono — docs/06 §15, columna «Fiestas»: oficio y logística sin perder el
 * calor. Cero condescendencia con lo rural. Se habla de igual a igual con
 * quien firma el decret.
 *
 * DOS RESTRICCIONES DE CLIENTE (cambio de brief, agosto 2026):
 *  1. NO se publica ninguna cifra en euros en todo el sitio. Ni cachés ni
 *     horquillas ni umbrales legales. Donde iría una cifra va el criterio
 *     que la determina y una remisión a la fuente oficial. Afecta también
 *     al JSON-LD: las FAQ van sin números.
 *  2. De momento solo se sirve Cataluña. El vocabulario del sector es el
 *     de aquí —festa major, comissió de festes, cercavila— y no se traduce:
 *     es el nombre real de la cosa.
 */

export const metadata: Metadata = {
  title: 'Cómo contrata un ayuntamiento una actuación',
  description:
    'Contrato menor, quién firma, cómo se justifica el gasto, qué papeles pide un ajuntament catalán y cuánto tarda el pago de una actuación de festa major. Escrita por quien tramita estos expedientes cada temporada.',
  alternates: { canonical: '/guias/como-contrata-un-ayuntamiento-una-actuacion' },
}

/*
 * FAQPage con preguntas de secretaría e interventor, no de folleto.
 * Se escribe para ser citado, no solo clicado (docs/07 §D7): cada respuesta
 * se entiende entera fuera de la página. Sin una sola cifra en euros.
 */
const FAQ: { p: string; r: string }[] = [
  {
    p: '¿Un ayuntamiento puede contratar una orquestra sin sacar un concurso público?',
    r: 'Sí, por dos vías. Si el importe no llega al umbral del contrato menor de servicios que fija la Ley 9/2017 de Contratos del Sector Público, la actuación se tramita como contrato menor: informe de necesidad, retención de crédito y decret que aprueba el gasto. Si lo supera, la vía habitual es el procedimiento negociado sin publicidad por exclusividad artística, que la propia ley permite cuando el contrato solo puede encomendarse a un intérprete determinado. Lo que nunca cabe es partir un mismo espectáculo en varias facturas menores para no pasar del umbral: eso es fraccionamiento y lo tumba la Intervenció.',
  },
  {
    p: '¿Cuál es el límite de un contrato menor para una actuación musical?',
    r: 'El límite aplicable es el de los contratos de servicios, que está en el artículo 118 de la Ley 9/2017 y se cuenta siempre sobre la base imponible, sin IVA. Dos cautelas que se olvidan mucho: la cifra se ha modificado por ley más de una vez, así que hay que comprobarla cada temporada; y muchos ajuntaments la rebajan en sus bases d’execució del pressupost o por instrucción de Alcaldía. Manda el techo de la casa, no el de la ley. Además, el contrato menor no puede durar más de un año ni prorrogarse.',
  },
  {
    p: '¿Quién firma el contrato de una actuación en un ayuntamiento?',
    r: 'El órgano de contratación de un municipio es la Alcaldía para los contratos de cuantía ordinaria, y el Ple para los de mayor cuantía. Como una verbena de festa major no llega nunca a ese tramo, en la práctica firma siempre l’alcalde o l’alcaldessa, a veces por delegación expresa en el regidor o la regidora de Festes, mediante decret o resolució. La regidoria negocia y propone, pero no adjudica: el papel que vale es la resolución firmada, no el correo del regidor.',
  },
  {
    p: '¿Qué documentación pide un ayuntamiento para pagar una actuación?',
    r: 'El paquete estándar son cinco documentos: alta de creditors con los datos bancarios acreditados por el banco, certificado de estar al corriente con la Agencia Tributaria y otro con la Seguridad Social, declaración responsable de no estar incurso en prohibición de contratar, póliza de responsabilidad civil en vigor con el recibo del año pagado, y la factura con el número de expediente y los códigos DIR3. En Cataluña la factura electrónica entra por e-FACT, y estar inscrito en el RELI o en el ROLECE ahorra tener que aportar buena parte de esos certificados. Según el montaje piden además el certificado de montaje del escenario firmado por técnico competente y el boletín de la instalación eléctrica.',
  },
  {
    p: '¿Cuánto tarda un ayuntamiento en pagar una actuación?',
    r: 'La ley da 30 días naturales para conformar la factura desde que se registra y otros 30 para pagarla desde esa conformidad: 60 días como tope legal. En la práctica, lo normal en una festa major de agosto son entre 45 y 90 días, porque la factura entra en agosto y la conformidad se firma cuando vuelve de vacaciones el técnico de Cultura. Si a los 30 días de registrarla nadie la ha conformado, se puede reclamar por escrito e intereses de demora; con un cliente que repite cada año conviene reclamar antes por teléfono que por burofax.',
  },
  {
    p: '¿Qué diferencia hay entre que te contrate el ayuntamiento y que te contrate la comissió de festes?',
    r: 'Cambia quién responde del dinero. El ajuntament es una administración: hay expediente, crédito reservado y un plazo legal de pago, pero también más papel y ningún pago en efectivo. La comissió de festes o la colla es una asociación que suele funcionar con una subvención municipal y con la barra: decide en una reunión, cierra rápido y paga antes, pero si la recaudación falla no hay Intervenció que responda. Con comissió se trabaja siempre con contrato privado firmado por el presidente, señal por adelantado y el resto antes de subir al escenario.',
  },
]

const SUMARIO = [
  ['quien-paga', 'Primero: averigua quién te va a pagar'],
  ['contrato-menor', 'El contrato menor, en cristiano'],
  ['por-encima-del-umbral', 'Cuando la actuación se va por encima'],
  ['quien-firma', 'Quién firma de verdad'],
  ['justificar-el-gasto', 'Cómo se justifica el gasto por dentro'],
  ['papeles', 'Los papeles que te van a pedir'],
  ['en-catalan', 'Y todo esto pasa en catalán'],
  ['sgae', 'SGAE, seguros y permisos del espectáculo'],
  ['plazos', 'Los plazos reales, no los del manual'],
  ['comision', 'Ajuntament o comissió de festes'],
  ['errores', 'Los ocho errores que retrasan un pago'],
  ['calendario', 'El calendario del año'],
  ['preguntas', 'Preguntas frecuentes'],
]

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="mt-20 scroll-mt-28 font-editorial text-3xl leading-tight sm:text-4xl">
      {children}
    </h2>
  )
}

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="mt-12 text-lg font-semibold text-hueso">{children}</h3>
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-5 max-w-lectura leading-relaxed text-gris">{children}</p>
}

export default function GuiaContratacionMunicipal() {
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

      {/* ── CABECERA TIPOGRÁFICA · el LCP es este h1 (docs/07 §C4) ──────── */}
      <section className="border-b border-white/10">
        <div className="contenedor py-16 lg:py-24">
          <nav aria-label="Miga de pan" className="mb-8 text-sm text-gris">
            <Link href="/" className="hover:text-hueso">
              Show Up
            </Link>
            <span className="mx-2 text-white/25">/</span>
            <span className="text-hueso">Guías</span>
          </nav>

          <p className="text-xs uppercase tracking-[0.2em] text-rojo">
            Guía · Contratación municipal en Cataluña
          </p>
          <h1 className="mt-5 max-w-4xl font-editorial text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
            Cómo contrata un ayuntamiento una actuación
          </h1>
          <p className="mt-7 max-w-lectura text-lg leading-relaxed text-hueso/85">
            Contrato menor, quién firma, qué papeles hacen falta y por qué a veces se tarda tres
            meses en cobrar. Esto no es teoría de manual: es lo que pasa entre que un regidor de
            Festes dice «us volem per la festa major» y el dinero entra en la cuenta.
          </p>
          <p className="mt-8 text-sm text-gris">
            Última revisión: agosto de 2026 · Lectura, unos 12 minutos
          </p>
        </div>
      </section>

      {/* ── SUMARIO ────────────────────────────────────────────────────── */}
      <div className="border-b border-white/10 bg-superficie/40">
        <div className="contenedor py-10">
          <h2 className="text-xs uppercase tracking-[0.18em] text-gris">En esta guía</h2>
          <ol className="mt-5 grid gap-2 text-sm text-gris sm:grid-cols-2 lg:grid-cols-3">
            {SUMARIO.map(([id, texto], i) => (
              <li key={id}>
                <a href={`#${id}`} className="hover:text-hueso">
                  <span className="mr-2 text-rojo">{String(i + 1).padStart(2, '0')}</span>
                  {texto}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <Seccion>
        <div className="contenedor">
          {/* ── 1 ─────────────────────────────────────────────────────── */}
          <H2 id="quien-paga">Primero: averigua quién te va a pagar</H2>
          <P>
            Antes de hablar de nada hay una pregunta que se hace poco y que decide todo lo demás:
            ¿quién firma el gasto? En una festa major pueden convivir tres bolsillos distintos —el
            ajuntament, la comissió de festes y las entidades del pueblo, desde la colla de diables
            hasta el casal— y cada uno contrata de una manera, paga en un plazo distinto y responde
            con un patrimonio distinto. Preguntarlo en la primera llamada no es desconfiar: es lo que
            hace que en octubre no estés persiguiendo una factura.
          </P>
          <P>
            Cuando paga el ajuntament, entras en el mundo del expediente: hay una partida
            presupuestaria, alguien que fiscaliza y un plazo de pago escrito en la ley. Cuando paga
            la comissió, entras en el mundo del acuerdo: se cierra rápido, se cobra antes y no hay
            nadie fiscalizando nada. Ninguno de los dos es mejor que el otro. Son dos oficios
            distintos, y conviene saber en cuál estás.
          </P>

          {/* ── 2 ─────────────────────────────────────────────────────── */}
          <H2 id="contrato-menor">El contrato menor, en cristiano</H2>
          <P>
            El contrato menor es la figura de la Ley 9/2017 de Contratos del Sector Público que
            permite a una administración comprar algo sin abrir un procedimiento con publicidad,
            plazo de presentación y mesa de contratación. Es la vía por la que se contrata la
            inmensa mayoría de la música que suena en una plaza de este país, y funciona con tres
            papeles: un informe que dice que la actuación hace falta, la reserva del dinero en el
            presupuesto y una resolución que aprueba el gasto. Después, la factura.
          </P>
          <P>
            El umbral aplicable a una actuación es el de los contratos de servicios, no el de obras
            —si alguien te cita el de obras está mirando la casilla equivocada—, y se cuenta siempre
            sobre la base imponible: el IVA no computa. La cifra exacta está en el artículo 118 de la
            ley y se ha movido más de una vez, así que la regla sana es comprobarla cada temporada en
            lugar de fiarse de lo que te dijeron hace tres años. Y sobre todo: muchos ajuntaments la
            rebajan en sus bases d’execució del pressupost o por instrucción de Alcaldía. Pregunta
            siempre cuál es el techo de la casa antes de mandar el presupuesto.
          </P>
          <P>
            Dos límites más que se olvidan: un contrato menor no puede durar más de un año ni
            prorrogarse. Por eso una actuación que se repite cada año no es «el mismo contrato»: es
            un expediente nuevo cada temporada, con sus certificados nuevos.
          </P>

          <H3>El fraccionamiento: el error que más caro sale</H3>
          <P>
            Partir una misma actuación en dos o tres facturas para no pasar del umbral es fraccionar
            el objeto del contrato, y está prohibido. No es un tecnicismo: es lo primero que mira la
            Intervenció cuando ve dos facturas del mismo NIF con dos semanas de diferencia. El
            resultado no es una multa para ti, es un reparo al expediente y una factura parada hasta
            que alguien arregle el papeleo.
          </P>
          <P>
            Sí es legítimo, en cambio, que la orquestra facture su caché y una empresa de sonido
            distinta facture el equipo, siempre que de verdad sean dos contratos con dos objetos y
            dos contratistas. La diferencia entre las dos cosas es real y quien fiscaliza la ve
            enseguida.
          </P>

          {/* ── 3 ─────────────────────────────────────────────────────── */}
          <H2 id="por-encima-del-umbral">Cuando la actuación se va por encima</H2>
          <P>
            Una orquestra de ball con escenario propio, sonido, luces y técnico se sale del contrato
            menor con facilidad, y mucha gente del sector cree que ahí ya no se puede contratar
            directamente. Sí se puede. La ley contempla el procedimiento negociado sin publicidad
            cuando el contrato solo puede encomendarse a un intérprete determinado por razones de
            exclusividad artística. Es exactamente el caso de un grupo concreto: si el programa lleva
            el nombre de la orquestra, no hay dos empresas capaces de ofrecer esa orquestra.
          </P>
          <P>
            Lo que el ajuntament necesita de ti para montar ese expediente es un documento breve: un
            certificado de exclusividad o de representación en el que la empresa que gestiona al
            grupo declare que es titular de los derechos de contratación de esa formación para esa
            fecha y ese territorio. Con eso el técnico redacta la memòria justificativa y el
            expediente se sostiene. Tarda más que un menor —hay informe jurídico y fiscalización
            previa—, así que a partir de ese tramo hay que contar seis u ocho semanas desde el sí
            hasta la firma.
          </P>
          <P>
            Cuando lo que se contrata no es un nombre sino un formato —«una orquestra para el ball de
            nit», «un grup de versions para el divendres»— no hay exclusividad que valga, y la vía es
            un procedimiento abierto o un contrato basado en un acuerdo marco. Ahí hay pliego,
            criterios de valoración y plazo de presentación. Se mira en el perfil del contractant del
            municipio, dentro de la Plataforma de Serveis de Contractació Pública, entre enero y
            marzo.
          </P>

          {/* ── 4 ─────────────────────────────────────────────────────── */}
          <H2 id="quien-firma">Quién firma de verdad</H2>
          <P>
            El órgano de contratación de un municipio es la Alcaldía para los contratos de cuantía
            ordinaria y el Ple para los de mayor cuantía. Como una verbena de festa major no llega
            nunca a ese segundo tramo, en la práctica firma siempre Alcaldía, a veces por delegación
            expresa en el regidor o la regidora de Festes, mediante decret.
          </P>
          <P>
            Pero hay dos figuras que no firman el contrato y sin las cuales no cobras. El secretari o
            la secretària informa de la legalidad del expediente. L’interventor o la interventora
            fiscaliza el gasto: comprueba que hay crédito, que la factura corresponde a lo aprobado y
            que los certificados están en vigor. Cuando alguien te dice «això està aturat a
            Intervenció», te está diciendo que falta un papel o que baila una cifra.
          </P>
          <P>
            Consejo práctico de los que ahorran semanas: pide el nombre y el correo directo del
            técnico o la técnica de Cultura que tramita el expediente, y trata con esa persona. El
            regidor negocia y decide; quien mueve el papel por dentro es el personal técnico, y
            agradece que le llegue todo ordenado a la primera. En municipios pequeños esa persona es
            además quien redacta el programa: si te gana el aprecio, te llama en enero.
          </P>

          {/* ── 5 ─────────────────────────────────────────────────────── */}
          <H2 id="justificar-el-gasto">Cómo se justifica el gasto por dentro</H2>
          <P>
            Esto no lo haces tú, pero conocerlo te permite entender los plazos y no pedir imposibles.
            El recorrido de un expediente de festes, de principio a fin, es este:
          </P>
          <ol className="mt-6 max-w-lectura space-y-4 text-gris">
            {[
              [
                'Informe de necesidad',
                'El técnico o el regidor de Cultura firma un papel que explica por qué hace falta esa actuación y por qué el importe es de mercado. Aquí es donde entra tu presupuesto.',
              ],
              [
                'Retención de crédito',
                'Se reserva el dinero en la partida de festes populars. Si el pressupost municipal está prorrogado, esta es la casilla que se atasca.',
              ],
              [
                'Fiscalización previa',
                'Intervenció comprueba que hay crédito y que el procedimiento elegido es el correcto.',
              ],
              [
                'Resolución de aprobación',
                'El decret d’alcaldia que aprueba el gasto y adjudica. Este es el papel que te tienen que enseñar antes de que tú bloquees la fecha.',
              ],
              [
                'Prestación del servicio',
                'La actuación. Ni un día antes de que exista la resolución, salvo que asumas el riesgo a sabiendas.',
              ],
              [
                'Factura y conformidad',
                'Registras la factura, el técnico firma la conformidad de que la actuación se hizo, Intervenció la fiscaliza y Tresoreria la mete en una relación de pagos.',
              ],
            ].map(([titulo, texto], i) => (
              <li key={titulo} className="border-t border-white/10 pt-4">
                <span className="mr-3 font-display text-2xl text-rojo">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-semibold text-hueso">{titulo}</span>
                <span className="mt-2 block leading-relaxed">{texto}</span>
              </li>
            ))}
          </ol>
          <P>
            La consecuencia práctica es sencilla: entre el sí verbal del regidor y la resolución
            firmada pueden pasar de dos a seis semanas, y hasta que esa resolución no existe, el
            ajuntament no te debe nada. Un correo del regidor no es un contrato. Tampoco es mala
            señal: es el ritmo normal de la casa.
          </P>

          {/* ── 6 ─────────────────────────────────────────────────────── */}
          <H2 id="papeles">Los papeles que te van a pedir</H2>
          <P>
            Este es el paquete estándar. Tenerlo hecho en enero y guardado en una carpeta te ahorra
            la carrera de agosto, cuando medio país está de vacaciones y los certificados tardan.
          </P>

          <div className="mt-8 space-y-px overflow-hidden rounded-lg bg-white/10">
            {[
              [
                'Alta de creditors',
                'La ficha con tus datos fiscales y la cuenta bancaria, sellada por el banco o acompañada de un certificado de titularidad. Sin esto no existes en el sistema contable del ajuntament y no se puede pagar, aunque la factura esté conformada. Se tramita una vez y vale para siempre, salvo cambio de cuenta.',
              ],
              [
                'Certificados de estar al corriente',
                'Uno de la Agencia Tributaria, expedido específicamente a efectos de contratar con la Administración, y otro de la Tesorería General de la Seguridad Social. Caducan, y lo que importa es que estén en vigor el día de la adjudicación, no el día en que los pediste.',
              ],
              [
                'RELI o ROLECE',
                'El Registre Electrònic d’Empreses Licitadores de la Generalitat y el registro estatal de licitadores. Inscribirse cuesta un rato una vez y sustituye a buena parte de la documentación en cada expediente: el técnico consulta el registro y no te pide nada. Si trabajas con ajuntaments cada verano, es la mejor tarde que vas a invertir.',
              ],
              [
                'Declaración responsable',
                'Un folio en el que declaras que no estás incurso en ninguna de las prohibiciones de contratar del artículo 71 de la ley y que tienes capacidad de obrar y la habilitación necesaria. Modelo estándar, se firma y se olvida.',
              ],
              [
                'Póliza de responsabilidad civil',
                'En vigor y con el último recibo pagado —el recibo, no solo la póliza—. La cobertura mínima la fija cada pliego o cada normativa municipal, y sube cuando hay escenario y público de pie en la vía pública. Revisa que la póliza cubra expresamente espectáculos en vía pública: hay pólizas de actividad musical que excluyen justo eso.',
              ],
              [
                'Factura por e-FACT, con expediente y DIR3',
                'Número de expediente y los tres códigos DIR3 del ajuntament: oficina comptable, òrgan gestor y unitat tramitadora. En Cataluña la factura electrónica entra por e-FACT, el punto de entrada del Consorci AOC, integrado con FACe. Pide los tres códigos por correo el mismo día que te adjudican, no la semana que facturas.',
              ],
              [
                'Papeles del montaje',
                'Si llevas escenario propio: certificado de montaje firmado por técnico competente y boletín de la instalación eléctrica. Si el escenario lo pone el ajuntament, pide por escrito quién firma esos certificados antes de decir que sí. Es la conversación que nadie quiere tener el día 14 a las siete de la tarde.',
              ],
            ].map(([titulo, texto]) => (
              <div key={titulo} className="bg-negro p-6 sm:p-8">
                <h3 className="font-semibold text-hueso">{titulo}</h3>
                <p className="mt-3 max-w-lectura text-sm leading-relaxed text-gris">{texto}</p>
              </div>
            ))}
          </div>

          <H3>Los impuestos, que se preguntan poco y descuadran mucho</H3>
          <P>
            Un servicio artístico prestado a un ajuntament lleva IVA, y el tipo depende de qué se
            factura exactamente y de quién lo factura. Es la casilla que con más frecuencia aparece
            mal en las facturas del sector: ciérrala con tu asesoría antes de emitir, no después de
            que Intervenció devuelva el documento. Si quien factura es una persona física, además
            puede corresponder retención de IRPF, y esa retención la practica el ajuntament: lo que
            verás en la cuenta será menos que la base más el IVA. No es un impago, es la retención.
            Explícalo dentro del grupo antes del bolo y te ahorras un mal rato en el reparto.
          </P>

          {/* ── 7 ─────────────────────────────────────────────────────── */}
          <H2 id="en-catalan">Y todo esto pasa en catalán</H2>
          <P>
            Los expedientes, los modelos, las notificaciones del e-NOTUM y los portales de
            transparencia de los ajuntaments catalanes están en catalán. No es un obstáculo —puedes
            dirigirte a la administración en catalán o en castellano y te tienen que atender igual—,
            pero sí es la causa de que alguien de fuera tarde el doble en entender qué le están
            pidiendo. Este es el diccionario mínimo para no perder una semana:
          </P>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
              <caption className="sr-only">
                Equivalencias entre los términos de un expediente municipal en catalán y en
                castellano
              </caption>
              <thead>
                <tr className="border-b border-white/20 text-xs uppercase tracking-[0.14em] text-gris">
                  <th scope="col" className="py-3 pr-4 font-medium">
                    Lo que dice el documento
                  </th>
                  <th scope="col" className="py-3 font-medium">
                    Lo que es
                  </th>
                </tr>
              </thead>
              <tbody className="text-gris">
                {[
                  ['Alta de creditors', 'Alta de terceros: tus datos y tu cuenta en su contabilidad.'],
                  ['Perfil del contractant', 'Donde se publican licitaciones y adjudicaciones.'],
                  ['Seu electrònica · Registre d’entrada', 'Registro electrónico. Ahí se presenta la factura y todo lo demás.'],
                  ['e-NOTUM', 'La notificación electrónica. Si no la abres en plazo, se da por notificada igual.'],
                  ['e-FACT', 'El punto de entrada de facturas electrónicas en Cataluña.'],
                  ['Decret d’alcaldia', 'La resolución que aprueba el gasto y adjudica. El papel que vale.'],
                  ['Memòria justificativa', 'El informe que explica por qué hace falta y por qué ese importe.'],
                  ['Bases d’execució del pressupost', 'Las reglas internas de la casa. Ahí está el techo real del contrato menor.'],
                  ['Comissió de festes', 'La entidad que organiza la festa major, a menudo con subvención municipal.'],
                ].map(([cat, cas]) => (
                  <tr key={cat} className="border-b border-white/10 align-top">
                    <th scope="row" className="py-4 pr-4 font-semibold text-hueso">
                      {cat}
                    </th>
                    <td className="py-4 leading-relaxed">{cas}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── 8 ─────────────────────────────────────────────────────── */}
          <H2 id="sgae">SGAE, seguros y permisos del espectáculo</H2>
          <P>
            Los derechos de autor por la comunicación pública de las obras que sonarán en la plaza
            los paga el organizador del espectáculo, es decir, el ajuntament; no el grupo. La mayoría
            lo tienen resuelto por convenio general con la federación de municipios, que aplica
            tarifas reducidas a los actos de las fiestas. Aun así, hay dos cosas que sí te tocan a ti:
          </P>
          <ul className="mt-6 max-w-lectura space-y-4 text-gris">
            <li className="border-t border-white/10 pt-4">
              <span className="font-semibold text-hueso">Dejarlo por escrito en el contrato.</span>{' '}
              Una línea que diga que los derechos de autor corren por cuenta del organizador evita la
              conversación incómoda de la semana siguiente.
            </li>
            <li className="border-t border-white/10 pt-4">
              <span className="font-semibold text-hueso">Entregar el parte de repertorio.</span> La
              lista de obras interpretadas, firmada, después del concierto. Es lo que permite que el
              dinero de esos derechos llegue a los autores que se han tocado. Se tarda cinco minutos
              y casi nadie lo hace.
            </li>
          </ul>
          <P>
            Sobre permisos: un concierto en la vía pública en Cataluña se encuadra en el reglamento
            de espectáculos públicos y actividades recreativas, y quien tramita la licencia o la
            comunicación previa es el organizador. A ti te pueden pedir la documentación técnica del
            montaje, y en algunos municipios los horarios de finalización están fijados por
            ordenanza: pregunta la hora de cierre antes de cerrar el número de pases, porque cortar
            un ball de nit a media canción lo paga alguien.
          </P>
          <P>
            Y una advertencia sobre el seguro que se aprende cara: la póliza que cubre al grupo no
            cubre el aforo. Si hay vallas, escenario y público de pie, la responsabilidad civil del
            evento es del organizador, y quien monta la estructura responde de la estructura. Cuando
            el escenario lo llevas tú, el certificado de montaje y una póliza que cubra esa
            estructura son innegociables.
          </P>

          {/* ── 9 ─────────────────────────────────────────────────────── */}
          <H2 id="plazos">Los plazos reales, no los del manual</H2>
          <P>
            La ley de morosidad da 30 días naturales para aprobar la factura desde que se registra y
            otros 30 para pagarla desde esa aprobación. Tope legal: 60 días. Ahora, lo que pasa de
            verdad con una festa major de agosto:
          </P>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
              <caption className="sr-only">
                Plazos habituales de un expediente de contratación de festes
              </caption>
              <thead>
                <tr className="border-b border-white/20 text-xs uppercase tracking-[0.14em] text-gris">
                  <th scope="col" className="py-3 pr-4 font-medium">
                    Tramo
                  </th>
                  <th scope="col" className="py-3 pr-4 font-medium">
                    En el manual
                  </th>
                  <th scope="col" className="py-3 font-medium">
                    En la vida real
                  </th>
                </tr>
              </thead>
              <tbody className="text-gris">
                <tr className="border-b border-white/10 align-top">
                  <th scope="row" className="py-4 pr-4 font-semibold text-hueso">
                    Del sí verbal a la resolución
                  </th>
                  <td className="py-4 pr-4">Días</td>
                  <td className="py-4 leading-relaxed">
                    De 2 a 6 semanas en un contrato menor. De 6 a 8 en un negociado.
                  </td>
                </tr>
                <tr className="border-b border-white/10 align-top">
                  <th scope="row" className="py-4 pr-4 font-semibold text-hueso">
                    De la factura a la conformidad
                  </th>
                  <td className="py-4 pr-4">30 días</td>
                  <td className="py-4 leading-relaxed">
                    15 días si el técnico está; hasta 45 si la actuación fue en agosto.
                  </td>
                </tr>
                <tr className="border-b border-white/10 align-top">
                  <th scope="row" className="py-4 pr-4 font-semibold text-hueso">
                    De la conformidad al cobro
                  </th>
                  <td className="py-4 pr-4">30 días</td>
                  <td className="py-4 leading-relaxed">
                    Depende de la relación de pagos y de la tesorería del mes.
                  </td>
                </tr>
                <tr className="border-b border-white/10 align-top">
                  <th scope="row" className="py-4 pr-4 font-semibold text-hueso">
                    Total de una actuación de agosto
                  </th>
                  <td className="py-4 pr-4">60 días</td>
                  <td className="py-4 leading-relaxed text-hueso">
                    De 45 a 90 días. Con cierre de ejercicio de por medio, más.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <P>
            Dos apuntes que valen dinero. El primero: registra la factura por la seu electrònica el
            mismo día, no se la mandes por correo al regidor; el plazo cuenta desde el registro, y un
            correo no deja rastro. El segundo: si el ajuntament acepta anticipar parte del importe,
            tiene que constar en la resolución como pago a cuenta. Un anticipo pactado de palabra no
            existe para Tresoreria.
          </P>

          {/* ── 10 ────────────────────────────────────────────────────── */}
          <H2 id="comision">Ajuntament o comissió de festes</H2>
          <P>Son dos clientes distintos bajo el mismo cartel. La diferencia, sin adornos:</P>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
              <caption className="sr-only">
                Diferencias entre contratar con el ajuntament y con la comissió de festes
              </caption>
              <thead>
                <tr className="border-b border-white/20 text-xs uppercase tracking-[0.14em] text-gris">
                  <th scope="col" className="py-3 pr-4 font-medium">
                    &nbsp;
                  </th>
                  <th scope="col" className="py-3 pr-4 font-medium">
                    Ajuntament
                  </th>
                  <th scope="col" className="py-3 font-medium">
                    Comissió de festes
                  </th>
                </tr>
              </thead>
              <tbody className="text-gris">
                {[
                  [
                    'Quién decide',
                    'La regidoria propone, Alcaldía firma, Intervenció fiscaliza.',
                    'La junta, en una reunión. A veces esa misma noche.',
                  ],
                  [
                    'Papel que vale',
                    'El decret d’adjudicació.',
                    'Un contrato privado firmado por el presidente, con su DNI.',
                  ],
                  [
                    'Cuándo se cierra',
                    'De enero a abril para la festa major de verano.',
                    'Más tarde, y a veces con el programa ya medio hecho.',
                  ],
                  [
                    'Cómo se cobra',
                    'Transferencia contra factura. Nunca en efectivo.',
                    'Señal por adelantado y el resto antes de subir. Con factura igual.',
                  ],
                  [
                    'Plazo de pago',
                    'De 45 a 90 días, con plazo legal detrás.',
                    'El mismo día, si se ha pactado así.',
                  ],
                  [
                    'Qué te juegas',
                    'Papeleo y espera. El dinero está reservado.',
                    'Rapidez a cambio de riesgo: si la barra no recauda, no hay Intervenció.',
                  ],
                ].map(([campo, ayto, comision]) => (
                  <tr key={campo} className="border-b border-white/10 align-top">
                    <th scope="row" className="py-4 pr-4 font-semibold text-hueso">
                      {campo}
                    </th>
                    <td className="py-4 pr-4 leading-relaxed">{ayto}</td>
                    <td className="py-4 leading-relaxed">{comision}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <P>
            Hay un tercer caso, el más habitual en los pueblos del Empordà, el Penedès o la Garrotxa:
            la comissió contrata, pero el dinero sale de una subvención nominativa que le concede el
            ajuntament. Ahí la comissió justifica la subvención con tu factura, así que la factura va
            a nombre de la comissió con su NIF de asociación, y llegará tarde si la subvención se
            paga después de la festa major. Pregunta siempre si la subvención está cobrada o
            pendiente: cambia el calendario entero.
          </P>

          {/* ── 11 ────────────────────────────────────────────────────── */}
          <H2 id="errores">Los ocho errores que retrasan un pago</H2>
          <P>
            Ninguno es grave por sí solo. Todos cuestan entre dos semanas y dos meses.
          </P>
          <ol className="mt-8 max-w-lectura space-y-5 text-gris">
            {[
              'Facturar sin haber tramitado el alta de creditors. La factura entra, se conforma y se queda esperando porque el sistema no tiene dónde pagar. Es el retraso más frecuente y el más evitable de todos.',
              'Poner mal los códigos DIR3 o no poner el número de expediente. La factura electrónica se rechaza sola y muchas veces nadie avisa: te enteras cuando llamas a los cuarenta días.',
              'Emitir la factura al destinatario equivocado. Si contrata la comissió, la factura va a la comissió; si contrata el ajuntament, al ajuntament con su NIF de entidad local. Rehacer una factura ya registrada obliga a una rectificativa y a empezar de cero.',
              'Certificados caducados el día de la adjudicación. Renuévalos en enero y en junio, o inscríbete en el RELI y olvídate. Si el de Hacienda venció en julio, el expediente no se cierra hasta que llegue el nuevo.',
              'Actuar antes de que exista la resolución. Si el gasto no estaba aprobado, la factura entra por la vía del reconocimiento extrajudicial de crédito, que va al Ple y puede tardar meses.',
              'Retención de IRPF mal aplicada o tipo de IVA equivocado. Intervenció devuelve la factura y el reloj vuelve a cero.',
              'La póliza de responsabilidad civil sin el recibo del año en curso. Con la póliza sola no la dan por buena: quieren el justificante de pago.',
              'No entregar el parte de repertorio ni los certificados de montaje. No bloquean el cobro en todos los ajuntaments, pero sí en los que hacen bien su trabajo, que casualmente son los que repiten cada año.',
            ].map((texto, i) => (
              <li key={i} className="border-t border-white/10 pt-4 leading-relaxed">
                <span className="mr-3 font-display text-2xl text-rojo">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {texto}
              </li>
            ))}
          </ol>

          {/* ── 12 ────────────────────────────────────────────────────── */}
          <H2 id="calendario">El calendario del año</H2>
          <P>
            El ciclo de contratación municipal tiene una regularidad casi aburrida, y quien lo
            entiende llama en el mes correcto. Para una festa major d’estiu:
          </P>
          <ul className="mt-6 max-w-lectura space-y-4 text-gris">
            <li className="border-t border-white/10 pt-4">
              <span className="font-semibold text-hueso">Noviembre y diciembre.</span> Se aprueba el
              pressupost municipal del año siguiente. La partida de festes queda fijada aquí; si el
              presupuesto se prorroga, todo el año va con el freno de mano puesto.
            </li>
            <li className="border-t border-white/10 pt-4">
              <span className="font-semibold text-hueso">De enero a abril.</span> El grueso de la
              contratación. Se cierra el programa, se piden presupuestos y se firman los decrets.
              Quien llama en mayo llama tarde.
            </li>
            <li className="border-t border-white/10 pt-4">
              <span className="font-semibold text-hueso">Mayo y junio.</span> Detalles, montajes,
              permisos de ocupación de vía pública, y lo que hay que recolocar porque se ha caído.
              Aquí ya asoma Sant Joan.
            </li>
            <li className="border-t border-white/10 pt-4">
              <span className="font-semibold text-hueso">De julio a septiembre.</span> Las festes
              majors. Y la ventana en la que se decide, mirando la plaza, quién repite el año que
              viene.
            </li>
            <li className="border-t border-white/10 pt-4">
              <span className="font-semibold text-hueso">De octubre a diciembre.</span> Facturas,
              conformidades y pagos. Y el momento tranquilo para hablar del año siguiente con el
              técnico de Cultura, que es cuando de verdad escucha. También cuando se cierran las
              festes majors d’hivern.
            </li>
          </ul>
          <P>
            Un año electoral descoloca el cuadro entero: hasta que no se constituye la corporación no
            hay quien firme delegaciones, y las fiestas de junio de ese año se contratan con prisa. Si
            sabes que hay municipales, adelanta las conversaciones al otoño anterior.
          </P>

          {/* ── 13 ────────────────────────────────────────────────────── */}
          <H2 id="preguntas">Preguntas frecuentes</H2>
          <dl className="mt-10 space-y-8">
            {FAQ.map((f) => (
              <div key={f.p} className="border-t border-white/10 pt-6">
                <dt className="max-w-lectura text-lg font-semibold text-hueso">{f.p}</dt>
                <dd className="mt-4 max-w-lectura leading-relaxed text-gris">{f.r}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-16 max-w-lectura text-sm leading-relaxed text-gris/70">
            Esta guía recoge la práctica habitual de la contratación municipal de actuaciones en
            Cataluña y se revisa cada temporada. No es asesoramiento jurídico: la norma se modifica y
            cada ajuntament tiene sus bases d’execució. Ante la duda, la respuesta buena está en la
            secretaría del municipio. Si detectas algo que ya no funciona así, escríbenos a{' '}
            <a
              href={`mailto:${SITE.email}`}
              className="text-hueso underline underline-offset-4 hover:text-rojo"
            >
              {SITE.email}
            </a>{' '}
            y lo corregimos con tu nombre al lado.
          </p>
        </div>
      </Seccion>

      {/* ── SEGUIR LEYENDO + CTA ───────────────────────────────────────── */}
      <Seccion className="border-t border-white/10 bg-superficie/40">
        <div className="contenedor">
          <h2 className="font-editorial text-3xl leading-tight sm:text-4xl">
            Si ya sabes cómo se contrata, lo siguiente es a quién
          </h2>
          <ul className="mt-10 grid gap-px overflow-hidden rounded-lg bg-white/10 sm:grid-cols-3">
            {[
              [
                '/musica-para-festa-major',
                'Música para la festa major',
                'Qué formación va en cada tramo del programa y qué significa «llave en mano».',
              ],
              [
                '/como-funciona',
                'Cómo trabajamos',
                'Qué hacemos entre que firmas y que alguien se sube al escenario.',
              ],
              [
                '/brief',
                'Cuéntanos la festa major',
                'Fechas, plaza y programa. Te contestamos en menos de 24 h con dos o tres nombres.',
              ],
            ].map(([href, titulo, texto]) => (
              <li key={href}>
                <Link href={href} className="group block h-full bg-negro p-7 hover:bg-superficie">
                  <h3 className="font-editorial text-xl transition-colors group-hover:text-rojo">
                    {titulo}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gris">{texto}</p>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-12">
            <BotonPrimario href="/brief">Cuéntanos la noche</BotonPrimario>
            <p className="mt-5 text-sm text-gris">
              ¿Prefieres hablarlo? {SITE.telefonoVisible} ·{' '}
              <a
                href={`mailto:${SITE.email}`}
                className="underline underline-offset-4 hover:text-hueso"
              >
                {SITE.email}
              </a>
            </p>
          </div>
        </div>
      </Seccion>
    </>
  )
}
