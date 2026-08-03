import type { MetadataRoute } from 'next'
import { ARTISTAS } from '@/data/artistas'
import { FORMACIONES } from '@/data/formaciones'
import { SITE } from '@/lib/site'

// Solo entra lo indexable. El brief y su página de gracias nunca (docs/seo/04 §5).
// Sin /precios: no se publican tarifas.
const ESTATICAS: { ruta: string; prioridad: number }[] = [
  { ruta: '/', prioridad: 1 },
  { ruta: '/musica-para-festa-major', prioridad: 0.9 },
  { ruta: '/guias/como-contrata-un-ayuntamiento-una-actuacion', prioridad: 0.9 },
  { ruta: '/artistas', prioridad: 0.7 },
  // Capta músicos, no clientes: alimenta la agenda, que es el activo real.
  { ruta: '/para-artistas', prioridad: 0.6 },
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
    ...FORMACIONES.map((f) => ({
      url: `${SITE.dominio}/${f.slug}`,
      lastModified: ahora,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...ARTISTAS.map((a) => ({
      url: `${SITE.dominio}/artistas/${a.slug}`,
      lastModified: ahora,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]
}
