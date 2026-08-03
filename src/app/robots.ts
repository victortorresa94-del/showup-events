import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/site'

/**
 * Se deja pasar a TODOS los crawlers, incluidos los de entrenamiento
 * (docs/seo/03 §4.3): esta empresa no vende contenido, vende que aparezca
 * un artista. Que un modelo aprenda quiénes somos es el objetivo, no el riesgo.
 *
 * ⚠️ Esto no basta por sí solo: Cloudflare bloquea crawlers de IA por defecto
 * en dominios nuevos. Hay que desactivarlo en el panel y verificarlo en logs
 * a los 7 días (docs/07 §7.1). Sin eso, este fichero no sirve de nada.
 *
 * Nota sobre las facetas: el `Disallow` de /artistas con parámetros NO se pone
 * el día 1. Primero tiene que poder leerse el `noindex` de esas páginas; el
 * Disallow entra en el mes 3 (docs/seo/04 §6).
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/brief/gracias'],
      },
    ],
    sitemap: `${SITE.dominio}/sitemap.xml`,
    host: SITE.dominio,
  }
}
