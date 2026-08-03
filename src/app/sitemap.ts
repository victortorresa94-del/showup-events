import type { MetadataRoute } from 'next'
import { ARTISTAS } from '@/data/artistas'
import { SITE } from '@/lib/site'

// Solo entra lo indexable. El brief y su página de gracias nunca (docs/seo/04 §5).
const ESTATICAS: { ruta: string; prioridad: number }[] = [
  { ruta: '/', prioridad: 1 },
  { ruta: '/orquestas-y-charangas-para-fiestas', prioridad: 0.9 },
  { ruta: '/guias/como-contrata-un-ayuntamiento-una-actuacion', prioridad: 0.9 },
  { ruta: '/precios', prioridad: 0.8 },
  { ruta: '/artistas', prioridad: 0.7 },
  { ruta: '/como-funciona', prioridad: 0.5 },
  { ruta: '/nosotros', prioridad: 0.4 },
  { ruta: '/contacto', prioridad: 0.4 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const ahora = new Date()

  return [
    ...ESTATICAS.map((p) => ({
      url: `${SITE.dominio}${p.ruta}`,
      lastModified: ahora,
      changeFrequency: 'monthly' as const,
      priority: p.prioridad,
    })),
    ...ARTISTAS.map((a) => ({
      url: `${SITE.dominio}/artistas/${a.slug}`,
      lastModified: ahora,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]
}
