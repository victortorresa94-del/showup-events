'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

/**
 * El buscador. Es el gesto de marca y, desde ahora, el objeto más importante
 * de la primera pantalla.
 *
 * Va en CLARO sobre la foto oscura a propósito: en una pantalla nocturna, lo
 * único luminoso es donde va el ojo. Es lo que hace que esto se lea como un
 * producto de booking y no como un cartel bonito.
 *
 * Dos detalles que no son decorativos:
 *  · Ningún placeholder menciona un estilo musical (docs/06 §1): enseñan qué
 *    respuesta queremos —contexto, gente, hora, miedo— y desactivan la idea de
 *    que hay que llegar sabiendo qué grupo pedir.
 *  · El texto viaja por sessionStorage, nunca por query string (docs/seo/04
 *    §11), para no generar variantes rastreables del brief.
 */
const PLACEHOLDERS = [
  'Festa major, viernes noche, plaza con escenario. Viene gente de 8 a 80 años…',
  'Cena de empresa, 70 personas, hotel. El año pasado a las once no quedaba nadie…',
  'Boda el 12 de septiembre, masía cerca de Girona, unos 130. Que se baile hasta tarde…',
]

const ATAJOS = [
  { texto: 'Festa major', valor: 'Festa major del pueblo, con escenario en la plaza. ' },
  { texto: 'Evento de empresa', valor: 'Cena de empresa. ' },
  { texto: 'Boda', valor: 'Boda. ' },
  { texto: 'Fiesta privada', valor: 'Fiesta privada. ' },
]

export const CLAVE_BORRADOR = 'showup:noche'

export function CampoNoche({
  id = 'campo-noche',
  conAtajos = true,
}: {
  id?: string
  conAtajos?: boolean
}) {
  const router = useRouter()
  const [texto, setTexto] = useState('')
  const [indice, setIndice] = useState(0)
  const [enFoco, setEnFoco] = useState(false)

  useEffect(() => {
    if (enFoco || texto) return
    const t = setInterval(() => setIndice((i) => (i + 1) % PLACEHOLDERS.length), 4500)
    return () => clearInterval(t)
  }, [enFoco, texto])

  function ir(valor: string) {
    if (valor.trim()) {
      try {
        sessionStorage.setItem(CLAVE_BORRADOR, valor.trim())
      } catch {
        // Modo privado: el brief arranca vacío y ya está.
      }
    }
    router.push('/brief')
  }

  return (
    <div className="w-full">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          ir(texto)
        }}
        className="mx-auto w-full max-w-3xl"
      >
        <label htmlFor={id} className="sr-only">
          Cuéntanos qué noche quieres
        </label>

        <div className="flex flex-col gap-2 rounded-2xl bg-crema p-2 shadow-[0_24px_70px_-20px_rgba(0,0,0,0.85)] sm:flex-row sm:items-center sm:rounded-full sm:p-2.5">
          <input
            id={id}
            type="text"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            onFocus={() => setEnFoco(true)}
            onBlur={() => setEnFoco(false)}
            placeholder={PLACEHOLDERS[indice]}
            className="min-w-0 flex-1 truncate bg-transparent px-5 py-4 text-tinta placeholder:text-tintaSuave/70 focus:outline-none sm:py-3"
          />
          <button
            type="submit"
            className="shrink-0 rounded-xl bg-rojo px-7 py-4 font-semibold text-negro transition-colors hover:bg-rojo-oscuro sm:rounded-full sm:py-3.5"
          >
            Ver quién encaja
          </button>
        </div>
      </form>

      {conAtajos && (
        <div className="mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-2.5">
          {ATAJOS.map((a) => (
            <button
              key={a.texto}
              type="button"
              onClick={() => ir(a.valor)}
              className="rounded-full border border-white/20 bg-white/[0.06] px-4 py-2 text-sm text-hueso backdrop-blur-sm transition-colors hover:border-white/40 hover:bg-white/10"
            >
              {a.texto}
            </button>
          ))}
        </div>
      )}

      <p className="mt-6 text-center text-sm text-hueso/60">
        2 minutos. En 24 h tienes dos o tres nombres, con vídeo y con precio.
      </p>
    </div>
  )
}
