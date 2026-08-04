/**
 * Roster. Datos de muestra con la estructura definitiva de la ficha.
 *
 * ÁMBITO: solo Cataluña de momento (decisión de negocio, agosto 2026).
 * Por eso el roster, los ejemplos y el vocabulario son del territorio.
 *
 * La ficha es PROFUNDA a propósito (docs/01 §9): con seis artistas bien
 * contados la página se ve rica; con seis miniaturas en un grid de cuatro
 * columnas se ve vacía. La profundidad tapa el número; la cuadrícula lo delata.
 *
 * `noSirvePara` no es honestidad decorativa: es lo que hace creíble el resto.
 * Nadie se fía de quien nunca dice que no.
 *
 * Sin cifras de caché en ningún campo: no se publican precios.
 */
export type Artista = {
  slug: string
  nombre: string
  titular: string
  formacion: string
  /** Enlaza con FORMACIONES para el listado de la página de formación. */
  formacionSlug: string
  /** Foto de directo con el tratamiento de la casa. Ver docs/03 §4. */
  imagen: string
  imagenAlt: string
  base: string
  paraQueNocheSirve: string
  sirvePara: string[]
  noSirvePara: string[]
  elDetalle: string
  formaciones: { nombre: string; descripcion: string }[]
  repertorio: string[]
  dondeHanTocado: string[]
  tecnico: string
  segmentos: ('festa-major' | 'empresa' | 'bodas' | 'privados')[]
}

export const ARTISTAS: Artista[] = [
  {
    slug: 'les-dotze',
    imagen: '/img/les-dotze.jpg',
    imagenAlt: 'El cantante de Les Dotze a contraluz sobre el escenario, con la banda detrás',
    nombre: 'Les Dotze',
    titular: 'Del pasodoble a la rumba sin que se note la costura',
    formacion: 'Grupo de versiones',
    formacionSlug: 'grupos-de-versiones',
    base: 'Vallès Occidental',
    paraQueNocheSirve:
      'Les Dotze son para cuando hay que contentar a todo el mundo a la vez y que aun así parezca que hay un criterio detrás. Son seis, cantan tres de ellos, y lo que hacen bien de verdad es leer la plaza: si la gente mayor sigue sentada a las doce y media, cambian el orden sobre la marcha y no lo notas.',
    sirvePara: [
      'Nits de festa major en municipios que ya tienen tarima y sonido montados.',
      'Bodas de 100 a 250 personas, exterior o carpa, con invitados de 20 a 80 años.',
      'Fiestas de empresa grandes donde hay que romper el hielo entre departamentos.',
    ],
    noSirvePara: [
      'Un cóctel de 40 personas en una terraza. Son seis y suenan a seis: se comen la conversación. Ahí te proponemos otra cosa.',
      'Una ceremonia. No hacen ceremonia y no van a fingir que sí.',
      'Un encargo de «música de fondo elegante». No es lo suyo, y si insistes te vamos a decir que no.',
    ],
    elDetalle:
      'Los últimos veinte minutos los hacen sin batería eléctrica, solo percusión y voces, con la gente en corro. Es el momento que se graba con el móvil. No lo anuncian, sale solo.',
    formaciones: [
      {
        nombre: 'Sexteto completo',
        descripcion: 'Voz, coros, guitarra, bajo, teclado y batería. Dos pases de 60 minutos.',
      },
      {
        nombre: 'Cuarteto',
        descripcion: 'Sin teclado ni coros. Baja el volumen, aguanta espacios de hasta 150 personas.',
      },
      {
        nombre: 'Acústico (3)',
        descripcion:
          'Para cóctel o cena previa, con la misma banda que luego se enchufa. Muy socorrido si quieres un solo interlocutor toda la noche.',
      },
    ],
    repertorio: ['Rumba catalana', 'Estopa', 'Manolo García', 'Els Catarres', 'Pop español', 'Actualidad'],
    dondeHanTocado: [
      'Festa major de Sant Cugat',
      'Festes de Terrassa',
      'Bodas · Vallès y Bages',
    ],
    tecnico:
      'Necesitan una tarima de 6×4 m y dos líneas de 16A. Si el espacio no tiene equipo, lo llevan ellos. Montan en dos horas y media y hacen prueba de sonido. Si el municipio cierra la música a las tres, dínoslo ahora y ajustamos los pases.',
    segmentos: ['festa-major', 'bodas', 'empresa'],
  },
  {
    slug: 'orquestra-miramar',
    imagen: '/img/orquestra-miramar.jpg',
    imagenAlt: 'La Orquestra Miramar sobre su camión-escenario iluminado durante una nit de festa major',
    nombre: 'Orquestra Miramar',
    titular: 'La nit sencera: camión, escenario, luces y técnico incluidos',
    formacion: 'Orquesta de festa major',
    formacionSlug: 'orquestas-para-festa-major',
    base: 'Maresme',
    paraQueNocheSirve:
      'Miramar es lo que una comissió de festes quiere cuando dice «una orquestra»: llegan con su camión, montan su escenario, traen su técnico y hacen ball de tarda y dos pases de noche. No hay que coordinar a nadie más: el día entero es suyo.',
    sirvePara: [
      'Nits de festa major en plaza abierta con público de todas las edades.',
      'Municipios que no tienen escenario propio: el suyo va incluido.',
      'Programas de dos o tres noches seguidas.',
    ],
    noSirvePara: [
      'Espacios cerrados de menos de 200 personas. El formato les queda enorme.',
      'Bodas. Es otro producto: mucho escenario y repertorio de baile.',
      'Plazas sin acceso para camión de doce metros. Si no entra el camión, no hay orquesta.',
    ],
    elDetalle:
      'El ball de tarda lo hacen con formación reducida y repertorio de siempre, y el mismo grupo se transforma para la noche. Para un municipio eso es un solo contrato en vez de dos.',
    formaciones: [
      {
        nombre: 'Orquestra completa con escenario',
        descripcion: 'Camión-escenario, sonido, luces y técnico. Ball de tarda y dos pases de noche.',
      },
      {
        nombre: 'Orquestra sin escenario',
        descripcion: 'Si el municipio ya tiene tarima montada. Sale bastante mejor de precio.',
      },
    ],
    repertorio: ['Ball de tarda', 'Rumba catalana', 'Cumbia', 'Pop español', 'Actualidad'],
    dondeHanTocado: [
      'Festes majors · Maresme y Baix Llobregat',
      'Festa major de Mataró',
      'Fires comarcals',
    ],
    tecnico:
      'Necesitan acceso para camión de 12 m, 63A de potencia y cuatro horas de montaje. Si el ayuntamiento no llega a esa potencia se lleva generador, y va en el presupuesto desde el principio, no como extra.',
    segmentos: ['festa-major'],
  },
  {
    slug: 'fanfarria-del-bages',
    imagen: '/img/fanfarria-del-bages.jpg',
    imagenAlt: 'La Fanfàrria del Bages tocando en una cercavila por las calles estrechas del casco antiguo',
    nombre: 'Fanfàrria del Bages',
    titular: 'Música de calle. Once metales y ni un minuto de silencio',
    formacion: 'Cercavila',
    formacionSlug: 'cercaviles',
    base: 'Bages',
    paraQueNocheSirve:
      'La Fanfàrria no toca en un escenario: toca andando. Es la formación que mueve a la gente de la plaza al pabellón sin que nadie se descuelgue, y la que acompaña a gegants i capgrossos sin que se note el esfuerzo. Once músicos y la costumbre de aguantar una jornada entera con dos descansos cortos.',
    sirvePara: [
      'Cercaviles, acompañamiento de gegants y actos de calle de festa major.',
      'Programas de varios días donde hay que llenar las horas entre actos.',
      'Municipios con casco antiguo, donde el recorrido a pie tiene sentido.',
    ],
    noSirvePara: [
      'Nit de baile con escenario: eso es una orquesta, y son dos productos distintos.',
      'Espacios con límite de decibelios. Once metales al aire libre no bajan de volumen.',
      'Interiores y eventos de empresa. No es su terreno.',
    ],
    elDetalle:
      'Se saben las canciones de más de cuarenta municipios. Si nos dices el tuyo con dos semanas, llegan sabiéndose la vuestra.',
    formaciones: [
      { nombre: 'Fanfàrria completa (11)', descripcion: 'El formato de festa major. Jornada entera.' },
      { nombre: 'Formato reducido (7)', descripcion: 'Para municipios pequeños y calles estrechas.' },
    ],
    repertorio: ['Repertori de carrer', 'Pasodobles', 'Versions', 'Rumba'],
    dondeHanTocado: ['Festa major de Manresa', 'Cercaviles · Bages i Osona', 'Fires de tardor'],
    tecnico:
      'No necesitan sonido ni corriente: es música acústica de calle. Sí necesitan un sitio para dejar las fundas y agua. Si el recorrido tiene cuesta, avísanos y lo ajustamos.',
    segmentos: ['festa-major'],
  },
  {
    slug: 'ramon-prats',
    imagen: '/img/ramon-prats.jpg',
    imagenAlt: 'Ramon Prats con el micro en la mano bajo un único foco, sobre el escenario a oscuras',
    nombre: 'Ramon Prats',
    titular: 'Monologuista. Cuarenta minutos y ni una broma sobre nadie de la sala',
    formacion: 'Monologuista',
    formacionSlug: 'monologuistas-para-eventos',
    base: 'Barcelona',
    paraQueNocheSirve:
      'Ramon es el que pones en una cena de empresa cuando quieres que la gente se ría sin que nadie lo pase mal. No baja a la mesa, no señala a nadie, no pide voluntarios. Trabaja sobre el trabajo: reuniones, correos, jefes y el absurdo de la oficina.',
    sirvePara: [
      'Cenas de empresa y de Navidad, en el momento del postre.',
      'Convenciones y entregas de premios, como corte entre bloques.',
      'Actos de festa major bajo techo, cuando se quiere variar del formato musical.',
    ],
    noSirvePara: [
      'Plazas al aire libre. El monólogo necesita silencio y techo.',
      'Público de menos de 30 personas. Se queda frío.',
      'Encargos de «humor gamberro». No es lo suyo, y lo dirá él antes que nosotros.',
    ],
    elDetalle:
      'Pide media hora de charla con quien organiza para meter tres o cuatro guiños internos. No es material a medida: son cuatro frases, pero cambian la noche.',
    formaciones: [
      { nombre: 'Monólogo 40 min', descripcion: 'El formato estándar para cena de empresa.' },
      { nombre: 'Monólogo + presentación', descripcion: 'Hace también de maestro de ceremonias del acto.' },
    ],
    repertorio: ['Humor de oficina', 'Observacional', 'Actualidad sin política'],
    dondeHanTocado: ['Cenas de empresa · Barcelona', 'Convenciones de sector', 'Actes de festa major'],
    tecnico:
      'Micro de mano, un foco y silencio. Si la cena sigue sirviéndose durante el monólogo, no funciona: hay que cerrar el servicio antes.',
    segmentos: ['empresa', 'festa-major', 'privados'],
  },
  {
    slug: 'marc-vela',
    imagen: '/img/marc-vela.jpg',
    imagenAlt: 'Marc Vela abriendo una baraja en abanico sobre una mesa durante una cena',
    nombre: 'Marc Vela',
    titular: 'Magia de cerca, mesa por mesa, sin escenario',
    formacion: 'Mago',
    formacionSlug: 'magos-para-eventos',
    base: 'Barcelona',
    paraQueNocheSirve:
      'Marc trabaja en los huecos: el rato entre el cóctel y la cena, o el postre cuando la conversación se apaga. Va mesa por mesa, cinco minutos por grupo, y deja a la gente hablando de lo que acaba de ver. No necesita escenario, ni sonido, ni que nadie se calle.',
    sirvePara: [
      'Cenas de empresa donde hay tiempos muertos que llenar.',
      'Cócteles de boda mientras se hacen las fotos.',
      'Eventos de 40 a 150 personas repartidas en mesas.',
    ],
    noSirvePara: [
      'Público de pie sin mesas. La magia de cerca necesita grupos quietos.',
      'Más de 150 personas: no le da tiempo a pasar por todas y media sala se queda fuera.',
      'Espectáculo de escenario para toda la sala a la vez. Es otro formato y otro mago.',
    ],
    elDetalle:
      'Empieza siempre por la mesa más fría, no por la más animada. Dice que si funciona ahí, funciona en toda la sala.',
    formaciones: [
      { nombre: 'Magia de cerca 90 min', descripcion: 'Mesa por mesa. El formato habitual.' },
      { nombre: 'Magia de cerca + cierre', descripcion: 'Termina con diez minutos para toda la sala.' },
    ],
    repertorio: ['Cartomagia', 'Magia de objetos', 'Mentalismo ligero'],
    dondeHanTocado: ['Eventos de empresa · Barcelona', 'Bodas · Penedès i Empordà'],
    tecnico:
      'No necesita nada: ni sonido, ni luz especial, ni espacio. Solo saber a qué hora quieres que empiece y cuántas mesas hay.',
    segmentos: ['empresa', 'bodas', 'privados'],
  },
  {
    slug: 'cor-de-cala',
    imagen: '/img/cor-de-cala.jpg',
    imagenAlt: 'Cor de Cala cantando havaneres bajo una farola junto al puerto, con público sentado',
    nombre: 'Cor de Cala',
    titular: 'Havaneres de las de siempre. Y el rom cremat lo hacen ellos',
    formacion: 'Grupo de havaneres',
    formacionSlug: 'havaneres',
    base: 'Baix Empordà',
    paraQueNocheSirve:
      'Cor de Cala es para la primera hora de la noche, con la gente sentada y de todas las edades. Cuatro voces, guitarra y acordeón, volumen de conversación. No es un concierto: es el acto que hace que un programa de festa major parezca un programa y no una lista de bolos.',
    sirvePara: [
      'Actos de tarde-noche de festa major, antes de que empiece el baile.',
      'Municipios de costa, donde la cantada es casi obligatoria en el programa.',
      'Homenajes y actos de gente mayor, donde una orquesta sería excesiva.',
    ],
    noSirvePara: [
      'Sustituir el baile de noche. La gente escucha, no baila.',
      'Espacios con paso de gente o ruido de barra. Necesita atención.',
      'Público que no conoce la tradición: fuera de contexto no se sostiene.',
    ],
    elDetalle:
      'Preparan el rom cremat en directo mientras cantan la penúltima. Es el momento en que la plaza se calla sola, y no hace falta pedirlo.',
    formaciones: [
      { nombre: 'Cuarteto de voces', descripcion: 'El formato habitual de cantada. Una hora y media.' },
      { nombre: 'Cuarteto + rom cremat', descripcion: 'Incluye la preparación para el público asistente.' },
    ],
    repertorio: ['Havaneres tradicionals', 'Cançó marinera', 'El meu avi', 'Repertori de taverna'],
    dondeHanTocado: ['Festes majors · Costa Brava', 'Cantades · Baix Empordà', 'Actes de barri · Girona'],
    tecnico:
      'Con equipo propio para público de hasta 300 personas. Si es más, hace falta el sonido del municipio. Necesitan sillas para el público: una cantada de pie no funciona.',
    segmentos: ['festa-major', 'privados'],
  },
]

export function artistaPorSlug(slug: string) {
  return ARTISTAS.find((a) => a.slug === slug)
}
