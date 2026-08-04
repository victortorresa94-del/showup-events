/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    const cabeceras = [
      {
        // El brief y sus endpoints nunca se indexan (doc 07 §4.2).
        source: '/api/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex' }],
      },
    ]

    /*
     * Cualquier despliegue que NO sea producción va con noindex en todo el
     * sitio. Es una salvaguarda de la estrategia, no una manía: una preview
     * pública indexada con datos de muestra compite con el dominio real,
     * reparte señales entre dos URLs y mete en el índice artistas que no
     * existen. Y limpiarlo después cuesta meses.
     *
     * Se levanta solo cuando VERCEL_ENV sea "production" sobre el dominio
     * definitivo (docs/07 §4.4: showupevents.es).
     */
    if (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== 'production') {
      cabeceras.push({
        source: '/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      })
    }

    return cabeceras
  },
}

export default nextConfig
