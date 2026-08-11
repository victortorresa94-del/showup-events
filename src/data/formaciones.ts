/**
 * Clúster de formaciones — páginas nacionales por tipo de formación.
 *
 * DOS RESTRICCIONES DE NEGOCIO (decisión del cliente, agosto 2026):
 *
 *  1. NO SE PUBLICAN PRECIOS. Ninguna cifra, en ninguna página. En su lugar
 *     se publica `queDetermina`: qué mueve el precio arriba o abajo. Sigue
 *     capturando la intención de «cuánto cuesta» y es igual de citable, pero
 *     sin comprometer cifras. Ver docs/08-restricciones-de-negocio.md.
 *
 *  2. SOLO SE SIRVE CATALUÑA. Por eso el vocabulario es el del territorio:
 *     festa major (no «fiestas patronales»), orquestra, cercavila (no
 *     «pasacalles»), havaneres. No se traducen: es el nombre real de la cosa,
 *     y es lo que la gente teclea.
 */
export type Formacion = {
  slug: string
  nombre: string
  h1: string
  title: string
  description: string
  entradilla: string
  queEs: string
  cuandoFunciona: string[]
  cuandoNo: string[]
  queDetermina: string[]
  relacionadas: string[]
  /**
   * Vídeo de ambiente de la formación. OPCIONAL a propósito: solo lo tienen
   * las que hemos podido ilustrar sin mentir.
   *
   * QUÉ ES Y QUÉ NO ES: ilustra el FORMATO —qué pinta tiene una cercavila,
   * qué pinta tiene un bolo de versiones—, no a un artista nuestro. Por eso
   * vive aquí, en el clúster de producto, y NUNCA en una ficha de artista ni
   * junto a un nombre propio: ahí dejaría de ser ilustración y pasaría a ser
   * una afirmación que hoy no podemos sostener (docs/09 §0).
   */
  video?: { archivo: string; poster: string; alt: string }
}

export const FORMACIONES: Formacion[] = [
  {
    slug: 'orquestas-para-festa-major',
    nombre: 'Orquestas de festa major',
    h1: 'Orquestas para festa major',
    title: 'Orquestas para festa major en Cataluña',
    description:
      'Qué incluye una orquesta de festa major, en qué se diferencia de un grupo de versiones, qué necesita el municipio para que pueda montar y qué determina el presupuesto.',
    entradilla:
      'La orquesta es la noche entera. Llega con su camión, monta su escenario, trae su técnico y hace los pases hasta la madrugada. No hay que coordinar a nadie más.',
    queEs:
      'Una orquesta de festa major es un espectáculo completo, no solo un grupo de música: incluye habitualmente camión-escenario, equipo de sonido, iluminación y técnico propio. Es lo que en el sector se llama llave en mano, y es la razón por la que un municipio sin infraestructura puede montar una noche de baile sin alquilar nada por separado. Se contrata por noche, con dos o tres pases, y en Cataluña suele convivir en el programa con el ball de tarda para la gente mayor.',
    cuandoFunciona: [
      'Nit de festa major en plaza abierta, con público de todas las edades a la vez.',
      'Municipios sin escenario propio: el suyo va incluido.',
      'Programas de varias noches, donde el precio por noche mejora.',
    ],
    cuandoNo: [
      'Plazas sin acceso para camión de doce metros. Si no entra el camión, no hay orquesta.',
      'Espacios cerrados de menos de 200 personas: el formato les queda enorme.',
      'Bodas. Es otro producto, con otro repertorio y otro volumen.',
    ],
    queDetermina: [
      'El número de músicos y de personal técnico que sube al escenario.',
      'Si hace falta camión-escenario o el municipio ya tiene tarima montada.',
      'La potencia eléctrica disponible: si no llega, hay que sumar generador.',
      'El número de pases y la hora de cierre que marque la licencia.',
      'La fecha: los fines de semana de julio y agosto son los primeros en cerrarse.',
    ],
    relacionadas: ['grupos-de-versiones', 'havaneres'],
  },
  {
    slug: 'grupos-de-versiones',
    nombre: 'Grupos de versiones',
    h1: 'Grupos de versiones para festa major y eventos',
    title: 'Grupos de versiones para festa major y eventos',
    description:
      'Cuándo conviene un grup de versions frente a una orquesta, qué formaciones existen, en qué espacios funciona cada una y qué determina el presupuesto.',
    entradilla:
      'El formato más versátil y el más pedido. También el que más se contrata mal, porque el tamaño de la banda tiene que encajar con el de la plaza.',
    queEs:
      'Un grupo de versiones —grup de versions— toca canciones conocidas con formación de banda, normalmente entre cuatro y siete músicos, en pases de 45 a 60 minutos. A diferencia de la orquesta, no trae escenario propio ni cubre la noche entera: se contrata para un tramo concreto, casi siempre el del baile. En una festa major es habitual que abra la noche antes de la orquesta, o que la sustituya en municipios pequeños donde no cabe una producción grande.',
    cuandoFunciona: [
      'Nits de festa major en municipios que ya tienen tarima y sonido.',
      'Fiestas de empresa donde hay que romper el hielo entre departamentos.',
      'Bodas de 80 a 250 personas, en la parte de baile.',
    ],
    cuandoNo: [
      'Ceremonias y cócteles de fondo: una banda entera se come la conversación.',
      'Espacios de menos de 60 personas con techo bajo.',
      'Noches completas de baile: no aguantan tres pases con el mismo repertorio.',
    ],
    queDetermina: [
      'Cuántos músicos suben: un cuarteto y un septeto no juegan en la misma liga.',
      'Si el sitio ya tiene sonido y luces o hay que llevarlo todo.',
      'La distancia y si la hora de final obliga a dormir fuera.',
      'El número y la duración de los pases.',
    ],
    relacionadas: ['orquestas-para-festa-major', 'bandas-tributo'],
    video: {
      archivo: '/video/grupo-rock.mp4',
      poster: '/img/grupo-rock.jpg',
      alt: 'Un guitarrista tocando en un escenario al aire libre de noche, visto desde el lateral, con el público delante',
    },
  },
  {
    slug: 'havaneres',
    nombre: 'Havaneres',
    h1: 'Grupos de havaneres para festa major',
    title: 'Grupos de havaneres para festa major y actos de pueblo',
    description:
      'Cómo funciona una cantada de havaneres, qué es el rom cremat, en qué momento del programa encaja y qué determina el presupuesto.',
    entradilla:
      'La havanera no es un concierto: es un acto. Se hace pronto, se hace sentado y casi siempre acaba con rom cremat.',
    queEs:
      'Una cantada de havaneres la interpreta un grupo de tres a cinco voces con guitarra, acordeón o bajo, en un formato acústico y de volumen contenido. Es una tradición muy asentada en la costa catalana y en buena parte del interior, y ocupa un hueco muy concreto del programa de festa major: primera hora de la noche, público sentado, de todas las edades. Muchos grupos incluyen la preparación del rom cremat como parte del acto.',
    cuandoFunciona: [
      'Actos de tarde-noche de festa major, antes de que empiece el baile.',
      'Municipios de costa, donde es prácticamente obligatorio en el programa.',
      'Actos de gente mayor y homenajes, donde una orquesta sería excesiva.',
    ],
    cuandoNo: [
      'Como sustituto del baile de noche. No lo es: la gente escucha, no baila.',
      'Espacios ruidosos o con paso de gente. Necesita atención.',
      'Público que no conoce la tradición: fuera de contexto no se sostiene.',
    ],
    queDetermina: [
      'El número de voces y de músicos del grupo.',
      'Si se incluye la preparación del rom cremat y para cuánta gente.',
      'Si hace falta equipo de sonido o el espacio ya lo tiene.',
      'La fecha: en verano los grupos buenos van muy cerrados en la costa.',
    ],
    relacionadas: ['orquestas-para-festa-major', 'cercaviles'],
  },
  {
    slug: 'cercaviles',
    nombre: 'Cercaviles',
    h1: 'Música de calle y cercaviles',
    title: 'Música de calle y cercaviles para festa major',
    description:
      'Qué formaciones hacen cercavila, cómo se contrata la música de calle de una festa major y qué determina el presupuesto.',
    entradilla:
      'La cercavila es lo que impide que la fiesta se pare entre acto y acto. No sube a ningún escenario: mueve a la gente por el pueblo.',
    queEs:
      'La cercavila es el recorrido musical por las calles del municipio, y la hacen formaciones de viento y percusión que tocan andando, sin amplificación. Acompaña a gegants i capgrossos, abre el pregón o enlaza dos actos del programa. Se contrata por recorrido o por jornada, no por pases, y su valor está en la continuidad: es el hilo que cose el día.',
    cuandoFunciona: [
      'Recorridos de festa major, acompañamiento de gegants y actos de calle.',
      'Programas de varios días donde hay que llenar las horas entre actos.',
      'Municipios con casco antiguo, donde el recorrido a pie tiene sentido.',
    ],
    cuandoNo: [
      'Noche de baile con escenario: eso es una orquesta o un grupo de versiones.',
      'Espacios con límite de decibelios: es música acústica al aire libre y no baja de volumen.',
      'Interiores. No es su terreno.',
    ],
    queDetermina: [
      'Cuántos músicos van en la formación.',
      'La duración del recorrido y si hay uno o varios al día.',
      'Los días seguidos contratados: un programa completo mejora el precio por jornada.',
      'La orografía del recorrido y si hace falta transporte entre puntos.',
    ],
    relacionadas: ['havaneres', 'orquestas-para-festa-major'],
    video: {
      archivo: '/video/txaranga.mp4',
      poster: '/img/txaranga.jpg',
      alt: 'Una txaranga tocando por una calle de piedra de un pueblo, con trombón y bombardino, mientras los vecinos miran desde la acera',
    },
  },
  {
    slug: 'bandas-tributo',
    nombre: 'Bandas tributo',
    h1: 'Bandas tributo para festa major y eventos',
    title: 'Bandas tributo para festa major y eventos',
    description:
      'Cuándo un tributo funciona mejor que un grupo de versiones, cómo encaja en un cartel de festa major y qué determina el presupuesto.',
    entradilla:
      'Un tributo vende cartel. Es la diferencia entre poner «música en directo» en el programa y poner un nombre que la gente reconoce.',
    queEs:
      'Una banda tributo interpreta el repertorio de un artista o grupo concreto, con puesta en escena reconocible. Para una comissió de festes tiene una ventaja clara sobre un grupo de versiones: se puede anunciar en el cartel y convoca por sí mismo, lo que ayuda a justificar el gasto ante el pueblo.',
    cuandoFunciona: [
      'Festes majors que quieren un cabeza de cartel sin pagar caché de artista original.',
      'Salas con programación y público que va a ver algo concreto.',
      'Eventos de empresa con temática o aniversario.',
    ],
    cuandoNo: [
      'Bodas donde media lista de invitados no conoce al grupo homenajeado.',
      'Cócteles y ceremonias.',
      'Noches en las que ya hay orquesta: compiten entre sí por el mismo público.',
    ],
    queDetermina: [
      'La producción que lleve: luces, vestuario y pantallas suben el presupuesto.',
      'El número de músicos.',
      'Si el tributo tiene tirón propio en la zona.',
      'La fecha y la distancia.',
    ],
    relacionadas: ['grupos-de-versiones', 'orquestas-para-festa-major'],
  },
  {
    slug: 'monologuistas-para-eventos',
    nombre: 'Monologuistas',
    h1: 'Monologuistas para eventos de empresa',
    title: 'Monologuistas para eventos de empresa y festa major',
    description:
      'Cómo se contrata un monólogo para una cena de empresa o un acto de festa major, cuánto dura, qué necesita para funcionar y qué determina el presupuesto.',
    entradilla:
      'El monólogo es lo que pones cuando quieres que la gente se ría sin que nadie lo pase mal. Y depende más del sitio que del humorista.',
    queEs:
      'Un monologuista actúa entre 30 y 50 minutos, con micro y foco, para un público sentado. En eventos de empresa es el formato más eficaz del postre: no obliga a nadie a participar, no necesita montaje y cabe en cualquier sala. La condición es que haya silencio: si el servicio sigue en marcha durante el monólogo, no funciona.',
    cuandoFunciona: [
      'Cenas de empresa y de Navidad, en el momento del postre.',
      'Convenciones y entregas de premios, como corte entre bloques.',
      'Actos de festa major bajo techo, cuando se quiere variar del formato musical.',
    ],
    cuandoNo: [
      'Plazas al aire libre: el monólogo necesita silencio y techo.',
      'Grupos de menos de 30 personas: se queda frío.',
      'Cuando el servicio de cena no se puede parar.',
    ],
    queDetermina: [
      'Si el nombre tiene recorrido en televisión o en salas.',
      'La duración y si además hace de presentador del acto.',
      'La distancia y el horario del bolo.',
      'Si se pide material adaptado a la empresa.',
    ],
    relacionadas: ['magos-para-eventos', 'humoristas-para-eventos'],
    video: {
      archivo: '/video/monologuista.mp4',
      poster: '/img/monologuista.jpg',
      alt: 'Un monologuista con micrófono en un escenario pequeño, visto desde el público entre las cabezas de la gente',
    },
  },
  {
    slug: 'humoristas-para-eventos',
    nombre: 'Humoristas',
    h1: 'Humoristas para festa major y eventos',
    title: 'Humoristas para festa major y eventos',
    description:
      'Qué diferencia hay entre un humorista y un monologuista a la hora de contratar, y en qué tipo de acto funciona cada uno.',
    entradilla:
      'En el sector no son sinónimos. El monologuista trae un texto; el humorista trae un nombre que la gente ya conoce.',
    queEs:
      'La distinción es práctica, no académica: se contrata a un humorista cuando el nombre en sí convoca —televisión, redes, gira propia— y a un monologuista cuando lo que se compra es el formato. Cambia el presupuesto, cambia la antelación necesaria y cambia dónde encaja dentro del programa.',
    cuandoFunciona: [
      'Festes majors que quieren un acto de noche que no sea musical.',
      'Grandes eventos de empresa con presupuesto para un nombre reconocible.',
      'Programas largos donde hace falta variar y no poner música toda la semana.',
    ],
    cuandoNo: [
      'Aforos pequeños: no salen las cuentas.',
      'Espacios sin condiciones de sonido y silencio.',
      'Contrataciones con poca antelación: las agendas de los nombres conocidos van con un año.',
    ],
    queDetermina: [
      'El recorrido mediático del nombre. Es el factor que más pesa, con diferencia.',
      'La antelación con la que se cierra.',
      'La duración del bolo y si incluye presentación del acto.',
      'La distancia y el alojamiento.',
    ],
    relacionadas: ['monologuistas-para-eventos'],
  },
  {
    slug: 'magos-para-eventos',
    nombre: 'Magos',
    h1: 'Magos para eventos de empresa y bodas',
    title: 'Magos para eventos de empresa y bodas',
    description:
      'Diferencia entre magia de cerca y magia de escenario, en qué momento del evento encaja cada una y qué determina el presupuesto.',
    entradilla:
      'Hay dos formatos distintos y se contratan de forma distinta. Elegir mal es la causa número uno de que un mago no funcione.',
    queEs:
      'La magia de cerca se hace mesa por mesa, en grupos pequeños, sin escenario ni sonido: sirve para llenar los huecos —el cóctel, el postre— y no exige que nadie se calle. La magia de escenario es un espectáculo para toda la sala a la vez, con su montaje y su horario. No son intercambiables, y confundirlas es lo que hace que un buen mago parezca malo.',
    cuandoFunciona: [
      'Cenas de empresa con tiempos muertos entre servicios.',
      'Cócteles de boda mientras se hacen las fotos.',
      'Eventos de 40 a 150 personas repartidas en mesas, en el caso de la magia de cerca.',
    ],
    cuandoNo: [
      'Público de pie sin mesas: la magia de cerca necesita grupos quietos.',
      'Más de 150 personas para un solo mago de cerca: no le da tiempo y media sala se queda fuera.',
      'Exteriores con viento o poca luz.',
    ],
    queDetermina: [
      'El formato: cerca o escenario. Son dos productos distintos.',
      'Cuántas horas y cuántas mesas hay que cubrir.',
      'Si hace falta un segundo mago para llegar a todo el aforo.',
      'La distancia y el horario.',
    ],
    relacionadas: ['monologuistas-para-eventos'],
  },
]

export function formacionPorSlug(slug: string) {
  return FORMACIONES.find((f) => f.slug === slug)
}
