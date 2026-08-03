'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

/**
 * El gesto de marca. Es lo único que la primera pantalla le pide al visitante.
 *
 * Dos detalles que no son decorativos:
 *  · Ningún placeholder menciona un estilo musical. A propósito (docs/06 §1):
 *    enseñan qué respuesta queremos —contexto, gente, hora, miedo— y desactivan
 *    la idea de que hay que llegar sabiendo qué grupo pedir.
 *  · El texto viaja por sessionStorage, nunca por query string (docs/seo/04 §11),
 *    para no ensuciar URLs ni generar variantes rastreables del brief.
 */
const PLACEHOLDERS = [
  'Fiestas del pueblo, viernes noche, plaza con escenario. Viene gente desde los 8 años hasta los 80, así que ahí lo dejo.',
  'Cena de Navidad de la empresa, 70 personas, hotel en Madrid. El año pasado a las once ya no quedaba nadie y no quiero repetirlo.',
  'Boda el 12 de septiembre en una finca cerca de Cáceres, unos 130. Durante la cena algo tranquilo y luego que se baile hasta tarde.',
]

export const CLAVE_BORRADOR = 'showup:noche'

export function CampoNoche({ id = 'campo-noche' }: { id?: string }) {
  const router = useRouter()
  const [texto, setTexto] = useState('')
  const [indice, setIndice] = useState(0)
  const [enFoco, setEnFoco] = useState(false)
  const areaRef = useRef<HTMLTextAreaElement>(null)

  // El placeholder rota, pero se detiene en cuanto la persona va a escribir.
  useEffect(() => {
    if (enFoco || texto) return
    const t = setInterval(() => setIndice((i) => (i + 1) % PLACEHOLDERS.length), 4000)
    return () => clearInterval(t)
  }, [enFoco, texto])

  function enviar(e: React.FormEvent) {
    e.preventDefault()
    if (texto.trim()) {
      try {
        sessionStorage.setItem(CLAVE_BORRADOR, texto.trim())
      } catch {
        // Modo privado o almacenamiento lleno: el brief arranca vacío y ya está.
      }
    }
    router.push('/brief')
  }

  return (
    <form onSubmit={enviar} className="w-full max-w-2xl">
      <label htmlFor={id} className="block text-sm text-gris">
        Cuéntanoslo con tus palabras. Ya lo ordenamos nosotros.
      </label>

      <div className="mt-3 rounded-lg border border-white/15 bg-superficie/90 backdrop-blur-sm transition-colors focus-within:border-white/35">
        <textarea
          id={id}
          ref={areaRef}
          rows={3}
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          onFocus={() => setEnFoco(true)}
          onBlur={() => setEnFoco(false)}
          placeholder={PLACEHOLDERS[indice]}
          className="w-full resize-none bg-transparent px-4 py-3.5 text-hueso placeholder:text-gris/70 focus:outline-none"
        />
        <div className="flex items-center justify-between gap-3 border-t border-white/10 px-3 py-3 sm:border-0 sm:pt-0">
          <p className="hidden text-xs text-gris sm:block">
            2 minutos. En 24 h tienes dos o tres nombres, con vídeo y con precio.
          </p>
          <button
            type="submit"
            className="w-full rounded-full bg-rojo px-6 py-3 font-semibold text-negro transition-colors hover:bg-rojo-oscuro sm:w-auto"
          >
            Ver quién encaja
          </button>
        </div>
      </div>

      <p className="mt-3 text-xs text-gris sm:hidden">
        2 minutos. En 24 h tienes dos o tres nombres, con vídeo y con precio.
      </p>
    </form>
  )
}
