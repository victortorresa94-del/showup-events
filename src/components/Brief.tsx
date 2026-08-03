'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { CLAVE_BORRADOR } from '@/components/CampoNoche'
import { artistaPorSlug } from '@/data/artistas'
import { SITE } from '@/lib/site'

/**
 * Brief de 7 pasos, una pregunta por pantalla.
 *
 * Reglas que vienen de los documentos y que conviene no tocar sin leerlos:
 *  · UNA sola URL; el paso vive en el hash, nunca en query string, para no
 *    generar variantes rastreables (docs/seo/04 §11).
 *  · Solo el paso 7 es obligatorio (docs/06 §12). Todo lo demás se puede saltar.
 *  · El paso 5 llega precargado con lo escrito en el hero: a nadie se le pide
 *    que escriba dos veces.
 *  · «No lo sé todavía» está SIEMPRE disponible en presupuesto. Es la opción
 *    que evita que la gente abandone por no saber una cifra.
 */

type Datos = {
  celebra: string
  fecha: string
  donde: string
  ubicacion: string
  gente: string
  quePase: string
  presupuesto: string
  nombre: string
  email: string
  telefono: string
  extra: string
}

const VACIO: Datos = {
  celebra: '',
  fecha: '',
  donde: '',
  ubicacion: '',
  gente: '',
  quePase: '',
  presupuesto: '',
  nombre: '',
  email: '',
  telefono: '',
  extra: '',
}

const CELEBRA = [
  'Fiestas de la ciudad o del pueblo',
  'Algo de empresa',
  'Una boda',
  'Una sala o un local',
  'Algo privado',
  'Otra cosa',
]
const UBICACION = ['Interior', 'Exterior', 'Las dos cosas', 'Ni idea todavía']
const GENTE = ['Menos de 50', '50-100', '100-200', '200-500', 'Más de 500', 'Ni idea']
const PRESUPUESTO = [
  'Menos de 1.500 €',
  '1.500-3.000 €',
  '3.000-6.000 €',
  '6.000-12.000 €',
  'Más de 12.000 €',
  'No lo sé todavía',
]

const TOTAL = 7

export function Brief() {
  const router = useRouter()
  const params = useSearchParams()
  const slugArtista = params.get('artista')
  const artista = slugArtista ? artistaPorSlug(slugArtista) : undefined

  const [paso, setPaso] = useState(1)
  const [datos, setDatos] = useState<Datos>(VACIO)
  const [enviando, setEnviando] = useState(false)

  // Precarga de lo escrito en el hero + restauración del borrador.
  useEffect(() => {
    try {
      const guardado = sessionStorage.getItem('showup:brief')
      if (guardado) {
        const { paso: p, datos: d } = JSON.parse(guardado)
        setDatos({ ...VACIO, ...d })
        setPaso(p ?? 1)
        return
      }
      const delHero = sessionStorage.getItem(CLAVE_BORRADOR)
      if (delHero) setDatos((d) => ({ ...d, quePase: delHero }))
    } catch {
      // Sin almacenamiento se empieza de cero. No es motivo para romper nada.
    }
  }, [])

  // Guardado automático: volver y encontrarlo donde lo dejaste.
  useEffect(() => {
    try {
      sessionStorage.setItem('showup:brief', JSON.stringify({ paso, datos }))
    } catch {}
  }, [paso, datos])

  function set<K extends keyof Datos>(k: K, v: Datos[K]) {
    setDatos((d) => ({ ...d, [k]: v }))
  }

  function siguiente() {
    setPaso((p) => Math.min(p + 1, TOTAL))
  }

  function anterior() {
    setPaso((p) => Math.max(p - 1, 1))
  }

  async function enviar(e: React.FormEvent) {
    e.preventDefault()
    setEnviando(true)
    try {
      await fetch('/api/brief', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...datos, artista: slugArtista ?? null }),
      })
      sessionStorage.removeItem('showup:brief')
      sessionStorage.removeItem(CLAVE_BORRADOR)
    } catch {
      // Aunque falle el envío no se deja al usuario en un callejón:
      // la página de gracias da el teléfono.
    }
    router.push('/brief/gracias')
  }

  return (
    <div className="contenedor min-h-[80vh] py-14 lg:py-20">
      <div className="mx-auto max-w-2xl">
        {/* Progreso */}
        <div className="mb-10">
          <div className="flex items-center justify-between text-sm text-gris">
            <span>
              Pregunta {paso} de {TOTAL}
              {paso === 5 && <span className="text-rojo"> — esta es la buena</span>}
            </span>
            {paso > 1 && (
              <button type="button" onClick={anterior} className="hover:text-hueso">
                ← Atrás
              </button>
            )}
          </div>
          <div className="mt-3 h-0.5 w-full bg-white/10">
            <div
              className="h-full bg-rojo transition-all duration-500 ease-salida"
              style={{ width: `${(paso / TOTAL) * 100}%` }}
            />
          </div>
        </div>

        {artista && paso === 1 && (
          <p className="mb-8 rounded-lg hairline bg-superficie px-5 py-4 text-sm text-gris">
            Preguntas por <span className="text-hueso">{artista.nombre}</span>. Si al final encaja
            mejor otro, te lo diremos.
          </p>
        )}

        <form onSubmit={enviar}>
          {paso === 1 && (
            <Pregunta titulo="¿Qué celebras?" ayuda="Para hacernos una idea del ambiente.">
              <Opciones opciones={CELEBRA} valor={datos.celebra} onChange={(v) => { set('celebra', v); siguiente() }} />
            </Pregunta>
          )}

          {paso === 2 && (
            <Pregunta titulo="¿Cuándo es?" ayuda="Si aún bailáis con la fecha, no pasa nada.">
              <input
                type="date"
                value={datos.fecha}
                onChange={(e) => set('fecha', e.target.value)}
                className="w-full rounded-lg hairline bg-superficie px-4 py-3.5 text-hueso focus:outline-none"
              />
              <div className="mt-4 flex flex-wrap gap-3">
                {['Tengo el mes, no el día', 'Aún no lo sé'].map((o) => (
                  <button
                    key={o}
                    type="button"
                    onClick={() => { set('fecha', o); siguiente() }}
                    className="rounded-full hairline px-5 py-2.5 text-sm text-gris transition-colors hover:border-white/30 hover:text-hueso"
                  >
                    {o}
                  </button>
                ))}
              </div>
            </Pregunta>
          )}

          {paso === 3 && (
            <Pregunta
              titulo="¿Dónde?"
              ayuda="El sitio manda más de lo que parece. Una plaza abierta no admite lo mismo que un salón."
            >
              <input
                type="text"
                value={datos.donde}
                onChange={(e) => set('donde', e.target.value)}
                placeholder="Plaza del ayuntamiento, Tafalla (Navarra)"
                className="w-full rounded-lg hairline bg-superficie px-4 py-3.5 text-hueso placeholder:text-gris/70 focus:outline-none"
              />
              <div className="mt-5">
                <Opciones opciones={UBICACION} valor={datos.ubicacion} onChange={(v) => set('ubicacion', v)} />
              </div>
            </Pregunta>
          )}

          {paso === 4 && (
            <Pregunta
              titulo="¿Cuánta gente sois?"
              ayuda="A ojo vale. Solo queremos saber si cabe una charanga o hace falta una orquesta entera."
            >
              <Opciones opciones={GENTE} valor={datos.gente} onChange={(v) => { set('gente', v); siguiente() }} />
            </Pregunta>
          )}

          {paso === 5 && (
            <Pregunta
              titulo="¿Qué quieres que pase?"
              ayuda="Esta es la importante. Si solo contestas a una, que sea esta. No hace falta que sepas de música: cuéntanos la escena."
            >
              <textarea
                rows={6}
                value={datos.quePase}
                onChange={(e) => set('quePase', e.target.value)}
                placeholder="Que la gente no se siente en toda la noche. Y que mis padres tampoco se vayan pronto."
                className="w-full resize-none rounded-lg hairline bg-superficie px-4 py-3.5 text-hueso placeholder:text-gris/70 focus:outline-none"
              />
            </Pregunta>
          )}

          {paso === 6 && (
            <Pregunta
              titulo="Presupuesto"
              ayuda="Nos ahorra proponerte cosas que no vienen a cuento. Y no, no subimos el precio porque digas una cifra alta."
            >
              <Opciones
                opciones={PRESUPUESTO}
                valor={datos.presupuesto}
                onChange={(v) => { set('presupuesto', v); siguiente() }}
              />
              <p className="mt-5 text-sm text-gris">
                Si no lo sabes, marca «no lo sé». Te mandamos opciones en tres alturas y decides
                viendo precios reales.
              </p>
            </Pregunta>
          )}

          {paso === 7 && (
            <Pregunta titulo="¿Cómo te llamamos?" ayuda="Última. Ya está.">
              <div className="space-y-4">
                <Campo label="Tu nombre" required value={datos.nombre} onChange={(v) => set('nombre', v)} placeholder="Marta" />
                <Campo label="Email" required type="email" value={datos.email} onChange={(v) => set('email', v)} placeholder="marta@…" />
                <Campo label="Teléfono" value={datos.telefono} onChange={(v) => set('telefono', v)} placeholder="Por si es más rápido llamarte" />
                <div>
                  <label className="block text-sm text-gris" htmlFor="extra">
                    ¿Algo más que debamos saber?
                  </label>
                  <textarea
                    id="extra"
                    rows={3}
                    value={datos.extra}
                    onChange={(e) => set('extra', e.target.value)}
                    placeholder="El año pasado contratamos una orquesta y no llegó el escenario a tiempo. Ese es todo el contexto."
                    className="mt-2 w-full resize-none rounded-lg hairline bg-superficie px-4 py-3 text-hueso placeholder:text-gris/70 focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={enviando || !datos.nombre || !datos.email}
                className="mt-8 w-full rounded-full bg-rojo px-8 py-4 font-semibold text-negro transition-colors hover:bg-rojo-oscuro disabled:cursor-not-allowed disabled:opacity-40"
              >
                {enviando ? 'Enviando…' : 'Vamos allá'}
              </button>
              <p className="mt-4 text-sm text-gris">
                Esto no es un alta en nada. Es un correo que empieza una conversación.
              </p>
            </Pregunta>
          )}

          {/* Saltar: solo el paso 7 es obligatorio. */}
          {paso < TOTAL && (
            <div className="mt-10 flex items-center gap-6">
              <button
                type="button"
                onClick={siguiente}
                className="rounded-full bg-hueso px-7 py-3 font-semibold text-negro transition-opacity hover:opacity-90"
              >
                Seguir
              </button>
              <button type="button" onClick={siguiente} className="text-sm text-gris hover:text-hueso">
                Saltar esta
              </button>
            </div>
          )}
        </form>

        <p className="mt-14 border-t border-white/10 pt-6 text-sm text-gris">
          ¿Tu evento es esta semana? No esperes al email:{' '}
          <a href={`tel:${SITE.telefono}`} className="text-hueso underline underline-offset-4">
            {SITE.telefonoVisible}
          </a>
        </p>
      </div>
    </div>
  )
}

function Pregunta({
  titulo,
  ayuda,
  children,
}: {
  titulo: string
  ayuda: string
  children: React.ReactNode
}) {
  return (
    <div className="aparece">
      <h1 className="font-editorial text-4xl leading-tight sm:text-5xl">{titulo}</h1>
      <p className="mt-4 max-w-lectura leading-relaxed text-gris">{ayuda}</p>
      <div className="mt-9">{children}</div>
    </div>
  )
}

function Opciones({
  opciones,
  valor,
  onChange,
}: {
  opciones: readonly string[]
  valor: string
  onChange: (v: string) => void
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {opciones.map((o) => {
        const activo = valor === o
        return (
          <button
            key={o}
            type="button"
            onClick={() => onChange(o)}
            aria-pressed={activo}
            className={`rounded-full border px-5 py-3 text-left transition-colors ${
              activo
                ? 'border-rojo bg-rojo text-negro'
                : 'border-white/15 bg-superficie text-hueso hover:border-white/35'
            }`}
          >
            {o}
          </button>
        )
      })}
    </div>
  )
}

function Campo({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  required,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  placeholder?: string
  type?: string
  required?: boolean
}) {
  const id = `campo-${label.toLowerCase().replace(/\s+/g, '-')}`
  return (
    <div>
      <label htmlFor={id} className="block text-sm text-gris">
        {label} {required && <span className="text-rojo">*</span>}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg hairline bg-superficie px-4 py-3 text-hueso placeholder:text-gris/70 focus:outline-none"
      />
    </div>
  )
}
