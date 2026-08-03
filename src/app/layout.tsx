import type { Metadata } from 'next'
import { Anton, Instrument_Serif, Inter } from 'next/font/google'
import { SITE, urlAbsoluta } from '@/lib/site'
import { Cabecera } from '@/components/Cabecera'
import { Pie } from '@/components/Pie'
import './globals.css'

// Sistema de dos voces + texto — doc 03 §2.
const display = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display',
  display: 'swap',
})

const editorial = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-editorial',
  display: 'swap',
})

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE.dominio),
  title: {
    // El descriptor vive en el title (superficie de máquina), nunca en el H1.
    default: SITE.descriptor,
    template: `%s · ${SITE.razonSocial}`,
  },
  description:
    'Orquestas, grupos de versiones, havaneres, cercaviles, magos y monologuistas para festa major, eventos de empresa y bodas en toda Cataluña. Nos cuentas la noche y te proponemos dos o tres nombres.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    siteName: SITE.razonSocial,
    url: SITE.dominio,
    images: [
      {
        url: '/img/og-showup.jpg',
        width: 1024,
        height: 768,
        alt: 'Plaza llena durante una nit de festa major, vista desde el lateral del escenario',
      },
    ],
  },
  twitter: { card: 'summary_large_image', images: ['/img/og-showup.jpg'] },
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
}

/**
 * Organization + sameAs. Se mantiene mínimo a propósito: el estudio con grupo
 * de control de Ahrefs no encontró uplift de citas al añadir JSON-LD extra
 * (docs/seo/03 §6). Más schema no es más visibilidad.
 */
function SchemaOrganizacion() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': urlAbsoluta('/#organizacion'),
    name: SITE.razonSocial,
    alternateName: SITE.nombre,
    description: 'Música en directo y artistas para eventos en Cataluña.',
    url: SITE.dominio,
    email: SITE.email,
    telephone: SITE.telefono,
    // Ámbito real de servicio: Cataluña. No se declara España entera
    // porque hoy no se puede servir, y un dato falso en el schema es la
    // forma más barata de perder la confianza de un desambiguador.
    areaServed: { '@type': 'AdministrativeArea', name: 'Cataluña' },
    knowsLanguage: ['es-ES', 'ca-ES'],
    logo: urlAbsoluta('/img/og-showup.jpg'),
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${display.variable} ${editorial.variable} ${sans.variable}`}
    >
      <body className="min-h-screen">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-rojo focus:px-4 focus:py-2 focus:font-semibold focus:text-negro"
        >
          Saltar al contenido
        </a>
        <Cabecera />
        <main id="contenido">{children}</main>
        <Pie />
        <SchemaOrganizacion />
      </body>
    </html>
  )
}
