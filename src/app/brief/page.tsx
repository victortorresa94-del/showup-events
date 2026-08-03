import type { Metadata } from 'next'
import { Suspense } from 'react'
import { Brief } from '@/components/Brief'

// noindex, follow — es una URL de conversión, no de captación (docs/seo/04 §5).
export const metadata: Metadata = {
  title: 'Dinos qué noche quieres',
  robots: { index: false, follow: true },
}

export default function PaginaBrief() {
  return (
    <Suspense fallback={<div className="contenedor py-24 text-gris">Cargando…</div>}>
      <Brief />
    </Suspense>
  )
}
