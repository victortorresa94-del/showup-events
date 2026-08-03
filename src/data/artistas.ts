/**
 * Roster. Datos de muestra con la estructura definitiva de la ficha.
 *
 * La ficha es PROFUNDA a propósito (docs/01 §9): con seis artistas bien
 * contados la página se ve rica; con seis miniaturas en un grid de cuatro
 * columnas se ve vacía. La profundidad tapa el número; la cuadrícula lo delata.
 *
 * `noSirvePara` no es honestidad decorativa: es lo que hace creíble el resto.
 * Nadie se fía de quien nunca dice que no.
 */
export type Artista = {
  slug: string
  nombre: string
  titular: string
  formacion: string
  base: string
  paraQueNocheSirve: string
  sirvePara: string[]
  noSirvePara: string[]
  elDetalle: string
  formaciones: { nombre: string; descripcion: string }[]
  repertorio: string[]
  dondeHanTocado: string[]
  tecnico: string
  segmentos: ('fiestas' | 'empresa' | 'bodas' | 'privados')[]
}

export const ARTISTAS: Artista[] = [
  {
    slug: 'las-doce',
    nombre: 'Las Doce',
    titular: 'Del pasodoble al reguetón sin que se note la costura',
    formacion: 'Banda de versiones',
    base: 'Madrid',
    paraQueNocheSirve:
      'Las Doce son para cuando hay que contentar a todo el mundo a la vez y que aun así parezca que hay un criterio detrás. Son seis, cantan tres de ellos y se saben 140 canciones, pero lo que hacen bien de verdad es leer la pista: si la gente mayor sigue sentada a las doce y media, cambian el orden sobre la marcha y no lo notas.',
    sirvePara: [
      'Bodas de 100 a 250 personas, exterior o carpa, cuando la lista de invitados va de los 20 a los 80 años.',
      'Fiestas de pueblo y verbenas con escenario de tablas y público de pie. Es su casa.',
      'Fiestas de empresa grandes en las que hay que romper el hielo entre departamentos que no se hablan.',
    ],
    noSirvePara: [
      'Un cóctel de 40 personas en una terraza. Son seis y suenan a seis: se te comen la conversación. Ahí te proponemos otra cosa y encima te sale más barato.',
      'Una ceremonia. No hacen ceremonia y no van a fingir que sí.',
      'Un evento donde el brief sea «música de fondo elegante». No es lo suyo. Y si insistes, te vamos a decir que no.',
    ],
    elDetalle:
      'Los últimos veinte minutos los hacen sin batería eléctrica, solo percusión y voces, con la gente en corro. Es el momento que la gente graba con el móvil. No lo anuncian, sale solo.',
    formaciones: [
      {
        nombre: 'Sexteto completo',
        descripcion:
          'Voz, coros, guitarra, bajo, teclado y batería. El formato de siempre. Dos pases de 60 minutos.',
      },
      {
        nombre: 'Cuarteto',
        descripcion:
          'Sin teclado ni coros. Baja el volumen y el precio, aguanta salas de hasta 150 personas.',
      },
      {
        nombre: 'Acústico (3)',
        descripcion:
          'Para cóctel o cena previa, con la misma banda que luego se enchufa. Muy socorrido si quieres un solo interlocutor toda la noche.',
      },
    ],
    repertorio: [
      'Rosalía',
      'Manolo García',
      'Estopa',
      'Camilo Sesto',
      'Bad Bunny',
      'Amaral',
      'Los Secretos',
      'Fito',
    ],
    dondeHanTocado: [
      'Fiestas de San Juan · Alcalá de Henares',
      'Feria de Albacete',
      'Sala Porta Caeli · Valladolid',
    ],
    tecnico:
      'Necesitan un escenario de 6×4 m como mínimo y dos líneas de 16A. Si el sitio no tiene equipo, lo llevan ellos. Montan en dos horas y media y hacen prueba de sonido. Si tu finca cierra la música a la una, dínoslo ahora y ajustamos los pases.',
    segmentos: ['fiestas', 'bodas', 'empresa'],
  },
  {
    slug: 'trikitixa-kalean',
    nombre: 'Kalean',
    titular: 'Txaranga de calle. Once metales y ni un minuto de silencio',
    formacion: 'Txaranga',
    base: 'Pamplona',
    paraQueNocheSirve:
      'Kalean no toca en un escenario: toca andando. Es la formación que mueve a la peña desde la plaza hasta el frontón sin que nadie se descuelgue. Once músicos, repertorio de calle y la costumbre de aguantar seis horas de pasacalles con dos descansos cortos.',
    sirvePara: [
      'Fiestas patronales en Navarra, Euskadi y La Rioja, contratadas por peñas, quintos o comisión.',
      'Pasacalles, dianas y encierros. Día completo, no por pases.',
      'Bodas del norte, para el tramo entre la ceremonia y el banquete.',
    ],
    noSirvePara: [
      'Verbena de noche con escenario. Para eso necesitas una orquesta, no una txaranga: son dos productos distintos y te lo diremos antes de que lo pagues.',
      'Cualquier sitio con límite de decibelios. Once metales al aire libre no se bajan de volumen.',
      'Eventos de empresa en interior. No es su terreno.',
    ],
    elDetalle:
      'Se saben las canciones de peña de más de cuarenta pueblos. Si nos dices el tuyo con dos semanas, llegan sabiéndose la vuestra.',
    formaciones: [
      { nombre: 'Txaranga completa (11)', descripcion: 'El formato de fiestas. Día entero de calle.' },
      { nombre: 'Formato reducido (7)', descripcion: 'Para pueblos pequeños y calles estrechas.' },
    ],
    repertorio: ['Repertorio de peña', 'Pasodobles', 'Versiones de calle', 'Kalejira'],
    dondeHanTocado: ['Fiestas de Tafalla', 'Sanfermines · peñas', 'Fiestas de Estella'],
    tecnico:
      'No necesitan sonido ni corriente: es música acústica de calle. Sí necesitan un sitio para dejar las fundas y agua. Si el recorrido pasa por cuesta, avísanos y lo ajustamos.',
    segmentos: ['fiestas', 'bodas'],
  },
  {
    slug: 'orquesta-marabi',
    nombre: 'Orquesta Marabí',
    titular: 'Verbena de las de verdad, con escenario y sonido propios',
    formacion: 'Orquesta de verbena',
    base: 'Valladolid',
    paraQueNocheSirve:
      'Marabí es lo que una comisión de fiestas quiere cuando dice «una orquesta»: llegan con su camión, montan su escenario, traen su técnico y hacen tres pases hasta las cinco. No hay que coordinar a nadie más: la noche entera es suya.',
    sirvePara: [
      'Verbenas de fiestas patronales con plaza abierta y público de todas las edades.',
      'Pueblos que no tienen escenario propio: el suyo va incluido.',
      'Programas de varios días, con precio cerrado por noche.',
    ],
    noSirvePara: [
      'Salones cerrados de menos de 200 personas. El formato les queda enorme.',
      'Bodas. Es otro producto: mucho volumen, mucho escenario y repertorio de verbena.',
      'Plazas sin acceso para camión de 12 metros. Si no entra el camión, no hay orquesta.',
    ],
    elDetalle:
      'El segundo pase lo abren siempre con la canción del pueblo si existe. Se la aprenden. Es un detalle que la comisión nota y el público también.',
    formaciones: [
      {
        nombre: 'Orquesta completa con escenario',
        descripcion: 'Camión-escenario, sonido, luces y técnico. Tres pases. Llave en mano.',
      },
      {
        nombre: 'Orquesta sin escenario',
        descripcion: 'Si el municipio ya tiene escenario montado. Sale bastante más barato.',
      },
    ],
    repertorio: ['Verbena clásica', 'Cumbia', 'Pop español', 'Actualidad', 'Pasodobles'],
    dondeHanTocado: [
      'Fiestas patronales · provincia de Valladolid',
      'Fiestas de Medina del Campo',
      'Ferias de Castilla y León',
    ],
    tecnico:
      'Necesitan acceso para camión de 12 m, 63A de potencia y cuatro horas de montaje. Si el ayuntamiento no llega a esa potencia, se lleva generador y va en el presupuesto desde el principio.',
    segmentos: ['fiestas'],
  },
  {
    slug: 'ramon-prats',
    nombre: 'Ramón Prats',
    titular: 'Monologuista. Cuarenta minutos y ni una broma sobre nadie de la sala',
    formacion: 'Monologuista',
    base: 'Barcelona',
    paraQueNocheSirve:
      'Ramón es el que pones en una cena de empresa cuando quieres que la gente se ría sin que nadie lo pase mal. No baja a la mesa, no señala a nadie, no pide voluntarios. Trabaja sobre el trabajo: reuniones, correos, jefes y el absurdo de la oficina.',
    sirvePara: [
      'Cenas de empresa y de Navidad, en el momento del postre.',
      'Convenciones y entregas de premios, como corte entre bloques.',
      'Público mixto donde hay jerarquía en la sala.',
    ],
    noSirvePara: [
      'Verbenas y plazas al aire libre. El monólogo necesita silencio y techo.',
      'Público de menos de 30 personas. Se queda frío.',
      'Eventos donde el cliente pida «humor gamberro». No es lo suyo y lo dirá él antes que nosotros.',
    ],
    elDetalle:
      'Pide media hora de charla con quien organiza para meter tres o cuatro guiños internos de la empresa. No es material a medida: son cuatro frases, pero cambian la noche.',
    formaciones: [
      { nombre: 'Monólogo 40 min', descripcion: 'El formato estándar para cena de empresa.' },
      { nombre: 'Monólogo + presentación', descripcion: 'Hace también de maestro de ceremonias del acto.' },
    ],
    repertorio: ['Humor de oficina', 'Observacional', 'Actualidad sin política'],
    dondeHanTocado: ['Cenas de empresa · Barcelona y Madrid', 'Convenciones de sector'],
    tecnico:
      'Micro de mano, un foco y silencio. Si la cena sigue sirviéndose durante el monólogo, no funciona: hay que cerrar el servicio antes.',
    segmentos: ['empresa', 'privados'],
  },
  {
    slug: 'marc-vela',
    nombre: 'Marc Vela',
    titular: 'Magia de cerca, mesa por mesa, sin escenario',
    formacion: 'Mago',
    base: 'Valencia',
    paraQueNocheSirve:
      'Marc trabaja en los huecos: el rato entre el cóctel y la cena, o el postre cuando la conversación se apaga. Va mesa por mesa, cinco minutos por grupo, y deja a la gente hablando de lo que acaba de ver. No necesita escenario, ni sonido, ni que nadie se calle.',
    sirvePara: [
      'Cenas de empresa donde hay tiempos muertos que llenar.',
      'Cócteles de boda mientras se hacen las fotos.',
      'Eventos de 40 a 150 personas repartidas en mesas.',
    ],
    noSirvePara: [
      'Público de pie sin mesas. La magia de cerca necesita grupos quietos.',
      'Más de 150 personas: no le da tiempo a pasar por todas y la mitad se queda fuera.',
      'Espectáculo de escenario para toda la sala a la vez. Es otro formato y otro mago.',
    ],
    elDetalle:
      'Empieza siempre por la mesa más fría, no por la más animada. Dice que si funciona ahí, funciona en toda la sala.',
    formaciones: [
      { nombre: 'Magia de cerca 90 min', descripcion: 'Mesa por mesa. El formato habitual.' },
      { nombre: 'Magia de cerca + cierre', descripcion: 'Termina con diez minutos para toda la sala.' },
    ],
    repertorio: ['Cartomagia', 'Magia de objetos', 'Mentalismo ligero'],
    dondeHanTocado: ['Eventos de empresa · Levante', 'Bodas · Comunidad Valenciana'],
    tecnico:
      'No necesita nada: ni sonido, ni luz especial, ni espacio. Solo saber a qué hora quieres que empiece y cuántas mesas hay.',
    segmentos: ['empresa', 'bodas', 'privados'],
  },
  {
    slug: 'la-nocturna',
    nombre: 'La Nocturna',
    titular: 'Sexteto con vientos. De Motown a lo que suena ahora',
    formacion: 'Grupo de versiones',
    base: 'Valencia',
    paraQueNocheSirve:
      'La Nocturna es para la parte de la noche en la que ya se ha cortado la tarta y la gente lleva un rato de pie. La sección de vientos hace que la primera canción se note desde la barra: no hay que convencer a nadie de que se acerque.',
    sirvePara: [
      'Bodas de 90 a 250 personas donde el baile es lo importante.',
      'Cenas de empresa grandes en hotel o finca, en dos pases de 45 minutos.',
      'Fiestas de ciudad con escenario y público de todas las edades.',
    ],
    noSirvePara: [
      'Ceremonias. Son seis y meten mucho aire: para la entrada te proponemos un dúo o un cuarteto de cuerda.',
      'Cócteles largos de fondo. Están hechos para que los miren, no para sonar detrás de una conversación.',
      'Salones de menos de 60 personas. Se comen la sala.',
    ],
    elDetalle:
      'Saben leer una sala donde hay jefes: nada de bajar a hablar con el público ni pedir voluntarios. En empresa eso importa más de lo que parece.',
    formaciones: [
      { nombre: 'Sexteto con vientos', descripcion: 'El formato completo. Dos pases de 45 minutos.' },
      { nombre: 'Trío', descripcion: 'Para salas de menos de 150. Suena mejor y deja sitio para bailar.' },
    ],
    repertorio: ['Motown', 'Funk', 'Pop internacional', 'Actualidad'],
    dondeHanTocado: ['Bodas · Levante', 'Cenas de empresa · Valencia'],
    tecnico:
      'Hora y media de montaje y prueba de sonido con la sala vacía. Si la cena se alarga, la prueba se hace antes, no después: eso lo cuadramos nosotros con el catering.',
    segmentos: ['bodas', 'empresa', 'fiestas'],
  },
]

export function artistaPorSlug(slug: string) {
  return ARTISTAS.find((a) => a.slug === slug)
}
