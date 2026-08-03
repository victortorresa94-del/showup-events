/**
 * Configuración canónica del sitio.
 *
 * Regla de marca de docs/07 §D6 — la marca tiene DOS superficies:
 *  · `nombre`      → dentro de la web (H1, cuerpo, voz). Solo "Show Up".
 *  · `descriptor`  → fuera de la web (title, schema, perfiles, prensa).
 *
 * "Show Up" es un phrasal verb inglés de altísima frecuencia con homónimos
 * en todo el mundo: sin el descriptor, un desambiguador de entidades no
 * puede saber qué somos. Con él, siempre idéntico, sí.
 */
export const SITE = {
  nombre: 'Show Up',
  razonSocial: 'Show Up Events',
  descriptor: 'Show Up Events · Música en directo y artistas para eventos',
  dominio: 'https://showupevents.es',
  email: 'hola@showupevents.es',
  // Número trackeado desde el día uno (docs/07 §7.4): el primer lead orgánico
  // llega por teléfono, no por formulario. Sin esto es invisible en Analytics.
  telefono: '+34600000000',
  telefonoVisible: '600 000 000',
  idioma: 'es-ES',
} as const

// Sin «Precios»: no se publican tarifas (decisión de negocio, agosto 2026).
export const NAV = [
  { href: '/artistas', texto: 'Artistas' },
  { href: '/musica-para-festa-major', texto: 'Festa major' },
  { href: '/como-funciona', texto: 'Cómo funciona' },
] as const

/** Ámbito de servicio actual. Solo Cataluña de momento. */
export const AMBITO = {
  nombre: 'Cataluña',
  frase: 'Servimos en toda Cataluña.',
} as const

/** El claim en dos capas — docs/06 §0.1 */
export const CLAIM = {
  gesto: 'Dinos qué noche quieres.',
  promesa: 'Aparecemos nosotros. Quedas bien tú.',
} as const

export function urlAbsoluta(ruta: string) {
  return new URL(ruta, SITE.dominio).toString()
}
