/**
 * Clúster D — páginas nacionales por tipo de formación. Sin eje geográfico.
 *
 * Dos decisiones de arquitectura que vienen de docs/07 y no se tocan:
 *
 *  · `txarangas` y `charangas-para-fiestas` son DOS URLs, nunca canonical
 *    cruzado. El solapamiento de SERP es bajo y por razones estructurales:
 *    otro comprador (peña o quintos vs. comisión), otro formato (día completo
 *    vs. pases) y otro precio. `xaranga` va como H2 dentro de txarangas,
 *    no como tercera URL.
 *
 *  · El tipo de artista es un eje temático NACIONAL. El territorio es un eje
 *    geográfico por segmento. No se multiplican: `/charangas/navarra` no
 *    existe ni existirá (docs/07 §4.3).
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
  precio: string
  relacionadas: string[]
}

export const FORMACIONES: Formacion[] = [
  {
    slug: 'charangas-para-fiestas',
    nombre: 'Charangas',
    h1: 'Charangas para fiestas patronales',
    title: 'Charangas para fiestas patronales',
    description:
      'Qué hace una charanga, en qué se diferencia de una orquesta de verbena, qué cuesta contratarla por día y cómo encaja en el programa de fiestas. Charangas en toda España.',
    entradilla:
      'La charanga es música de calle. No sube a un escenario: mueve a la gente de un sitio a otro y no para en todo el día.',
    queEs:
      'Una charanga es una formación de viento y percusión que toca andando, sin amplificación y sin escenario. Suele contratarse por día o por medio día, no por pases, y su trabajo es acompañar el pasacalles, la diana, el encierro o la comida popular. Se contrata por días completos porque su valor está en la continuidad: la charanga es lo que impide que la fiesta se pare entre acto y acto.',
    cuandoFunciona: [
      'Pasacalles, dianas, encierros y comidas populares dentro del programa de fiestas.',
      'Peñas y cuadrillas que quieren música propia durante todo el día.',
      'Bodas del norte, para el tramo entre la ceremonia y el banquete.',
    ],
    cuandoNo: [
      'Verbena de noche con escenario: eso es una orquesta, no una charanga. Son dos productos distintos y con precios distintos.',
      'Sitios con límite de decibelios. Una charanga al aire libre no baja de volumen: es acústica.',
      'Eventos de empresa en interior. No es su terreno.',
    ],
    precio: 'De 800 a 2.500 € por día, según número de músicos y desplazamiento.',
    relacionadas: ['txarangas', 'orquestas-para-verbenas'],
  },
  {
    slug: 'txarangas',
    nombre: 'Txarangas',
    h1: 'Txarangas para fiestas',
    title: 'Txarangas para fiestas',
    description:
      'Qué es una txaranga, en qué se diferencia de una charanga, quién la contrata en Navarra y Euskadi y qué cuesta un día completo de calle.',
    entradilla:
      'Txaranga es la palabra que se usa en Navarra, Euskadi y parte de Aragón. No es solo una cuestión de idioma: cambia quién la contrata y cómo.',
    queEs:
      'Una txaranga es la misma familia musical que una charanga —viento, percusión y calle— pero con una diferencia que importa a la hora de contratar: en Navarra y Euskadi quien paga muchas veces no es el ayuntamiento, sino la peña, la cuadrilla o los quintos, que lo hacen de su bolsillo y cierran contrato mucho antes, a menudo en marzo. Eso cambia el precio, el formato y el calendario. En Galicia la misma figura se llama xaranga.',
    cuandoFunciona: [
      'Fiestas patronales en Navarra, Euskadi, La Rioja y el alto Aragón.',
      'Peñas y quintos que contratan directamente para todos los días de fiestas.',
      'Programas de varios días seguidos, que es como se contrata de verdad en el norte.',
    ],
    cuandoNo: [
      'Contrataciones de última hora en temporada. En el norte las txarangas buenas se cierran con meses de antelación.',
      'Eventos de interior con aforo pequeño.',
      'Cuando lo que se busca es verbena de noche: para eso hace falta una orquesta.',
    ],
    precio: 'De 900 a 2.800 € por día. Los programas de varios días salen mejor de precio.',
    relacionadas: ['charangas-para-fiestas', 'orquestas-para-verbenas'],
  },
  {
    slug: 'orquestas-para-verbenas',
    nombre: 'Orquestas de verbena',
    h1: 'Orquestas para verbenas y fiestas patronales',
    title: 'Orquestas para verbenas y fiestas patronales',
    description:
      'Qué incluye una orquesta de verbena llave en mano —escenario, sonido, luces y técnico—, cuánto cuesta y qué necesita el municipio para que pueda montar.',
    entradilla:
      'La orquesta es la noche. Llega con su camión, monta su escenario, trae su técnico y hace tres pases. No hay que coordinar a nadie más.',
    queEs:
      'Una orquesta de verbena es un espectáculo completo, no solo un grupo de música: incluye habitualmente camión-escenario, equipo de sonido, iluminación y técnico propio. Es lo que en el sector se llama llave en mano, y es la razón por la que un municipio sin infraestructura puede montar una verbena sin alquilar nada más. Se contrata por noche, con dos o tres pases hasta la madrugada.',
    cuandoFunciona: [
      'Verbenas de fiestas patronales con plaza abierta y público de todas las edades.',
      'Municipios sin escenario propio: el suyo va incluido.',
      'Programas de varias noches con precio cerrado.',
    ],
    cuandoNo: [
      'Plazas sin acceso para camión de doce metros. Si no entra el camión, no hay orquesta.',
      'Salones cerrados de menos de 200 personas: el formato les queda enorme.',
      'Bodas. Es otro producto, con otro repertorio y otro volumen.',
    ],
    precio:
      'De 6.000 a 30.000 € por noche según el tamaño de la orquesta y si el escenario va incluido.',
    relacionadas: ['charangas-para-fiestas', 'grupos-de-versiones'],
  },
  {
    slug: 'grupos-de-versiones',
    nombre: 'Grupos de versiones',
    h1: 'Grupos de versiones para eventos',
    title: 'Grupos de versiones para eventos',
    description:
      'Cuándo conviene un grupo de versiones frente a una orquesta o un DJ, qué formaciones existen y qué cuesta cada una.',
    entradilla:
      'El formato más versátil y el más pedido. Y también el que más se contrata mal, porque el tamaño de la banda tiene que encajar con el de la sala.',
    queEs:
      'Un grupo de versiones toca canciones conocidas con formación de banda, normalmente entre cuatro y siete músicos, en pases de 45 a 60 minutos. A diferencia de la orquesta de verbena, no trae escenario propio ni hace la noche entera: se contrata para un tramo concreto, casi siempre el del baile.',
    cuandoFunciona: [
      'Bodas de 80 a 250 personas, en la parte de baile.',
      'Fiestas de empresa donde hay que romper el hielo.',
      'Fiestas de ciudad con escenario ya montado.',
    ],
    cuandoNo: [
      'Ceremonias y cócteles de fondo: una banda entera se come la conversación.',
      'Salones de menos de 60 personas con techo bajo.',
      'Noches completas de verbena: no aguantan tres pases con el mismo material.',
    ],
    precio: 'De 1.800 a 3.500 € un cuarteto; una banda de seis o siete, de 3.500 a 6.000 €.',
    relacionadas: ['orquestas-para-verbenas', 'bandas-tributo'],
  },
  {
    slug: 'bandas-tributo',
    nombre: 'Bandas tributo',
    h1: 'Bandas tributo para fiestas y eventos',
    title: 'Bandas tributo para fiestas y eventos',
    description:
      'Cuándo un tributo funciona mejor que un grupo de versiones, qué tributos tienen tirón real en España y qué cuesta contratarlos.',
    entradilla:
      'Un tributo vende cartel. Es la diferencia entre poner «música en directo» en el programa y poner un nombre que la gente reconoce.',
    queEs:
      'Una banda tributo interpreta el repertorio de un artista o grupo concreto, normalmente con puesta en escena reconocible. Para una comisión de fiestas tiene una ventaja clara sobre un grupo de versiones: se puede anunciar en el cartel y convoca por sí mismo.',
    cuandoFunciona: [
      'Fiestas patronales que quieren un cabeza de cartel sin pagar caché de artista original.',
      'Salas con programación y público que va a ver algo concreto.',
      'Eventos de empresa con temática o aniversario.',
    ],
    cuandoNo: [
      'Bodas donde la mitad de los invitados no conoce al grupo homenajeado.',
      'Cócteles y ceremonias.',
      'Programas donde ya hay una orquesta esa misma noche: compiten entre sí.',
    ],
    precio: 'De 2.500 a 9.000 € según el tributo y la producción que lleve.',
    relacionadas: ['grupos-de-versiones', 'orquestas-para-verbenas'],
  },
  {
    slug: 'monologuistas-para-eventos',
    nombre: 'Monologuistas',
    h1: 'Monologuistas para eventos de empresa',
    title: 'Monologuistas para eventos de empresa',
    description:
      'Cómo se contrata un monólogo para una cena de empresa, cuánto dura, qué necesita para funcionar y qué cuesta.',
    entradilla:
      'El monólogo es lo que pones cuando quieres que la gente se ría sin que nadie lo pase mal. Y depende más del sitio que del humorista.',
    queEs:
      'Un monologuista actúa entre 30 y 50 minutos, con micro y foco, para un público sentado. En eventos de empresa es el formato más eficaz del postre: no obliga a nadie a participar, no necesita montaje y cabe en cualquier salón. La condición es que haya silencio: si el servicio sigue en marcha durante el monólogo, no funciona.',
    cuandoFunciona: [
      'Cenas de empresa y de Navidad, en el momento del postre.',
      'Convenciones y entregas de premios, como corte entre bloques.',
      'Público de más de 30 personas con jerarquía en la sala.',
    ],
    cuandoNo: [
      'Verbenas y plazas al aire libre: el monólogo necesita silencio y techo.',
      'Grupos de menos de 30 personas: se queda frío.',
      'Cuando el servicio de cena no se puede parar.',
    ],
    precio: 'De 800 a 2.500 € según el nombre y el desplazamiento.',
    relacionadas: ['magos-para-eventos', 'humoristas-para-eventos'],
  },
  {
    slug: 'humoristas-para-eventos',
    nombre: 'Humoristas',
    h1: 'Humoristas para fiestas y eventos',
    title: 'Humoristas para fiestas y eventos',
    description:
      'Qué diferencia hay entre un humorista y un monologuista a la hora de contratar, y en qué tipo de evento funciona cada uno.',
    entradilla:
      'En el sector no son sinónimos. El monologuista trae un texto; el humorista trae un nombre que la gente ya conoce.',
    queEs:
      'La distinción es práctica, no académica: se contrata a un humorista cuando el nombre en sí convoca —televisión, redes, gira propia— y a un monologuista cuando lo que se compra es el formato. Cambia el caché, cambia la antelación necesaria y cambia dónde encaja dentro del programa.',
    cuandoFunciona: [
      'Fiestas patronales que quieren un acto de noche que no sea musical.',
      'Grandes eventos de empresa con presupuesto para un nombre reconocible.',
      'Programas donde hace falta variar y no poner música toda la semana.',
    ],
    cuandoNo: [
      'Aforos pequeños: el caché no sale.',
      'Sitios sin condiciones de sonido y silencio.',
      'Contrataciones con poca antelación: las agendas de los nombres conocidos van con un año.',
    ],
    precio: 'Muy variable según el nombre. De 2.000 € a cifras de cabeza de cartel.',
    relacionadas: ['monologuistas-para-eventos'],
  },
  {
    slug: 'magos-para-eventos',
    nombre: 'Magos',
    h1: 'Magos para eventos de empresa y bodas',
    title: 'Magos para eventos de empresa y bodas',
    description:
      'Diferencia entre magia de cerca y magia de escenario, en qué momento del evento encaja cada una y qué cuesta.',
    entradilla:
      'Hay dos formatos distintos y se contratan de forma distinta. Elegir mal es la causa número uno de que un mago no funcione.',
    queEs:
      'La magia de cerca se hace mesa por mesa, en grupos pequeños, sin escenario ni sonido: sirve para llenar los huecos —el cóctel, el postre— y no exige que nadie se calle. La magia de escenario es un espectáculo para toda la sala a la vez, con su montaje y su horario. No son intercambiables.',
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
    precio: 'De 600 a 1.800 € la magia de cerca; el espectáculo de escenario, desde 1.500 €.',
    relacionadas: ['monologuistas-para-eventos'],
  },
]

export function formacionPorSlug(slug: string) {
  return FORMACIONES.find((f) => f.slug === slug)
}
