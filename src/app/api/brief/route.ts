import { NextResponse } from 'next/server'

/**
 * Recepción del brief.
 *
 * Hoy solo registra en consola: falta decidir el destino real (CRM, email o
 * ambos). Lo que sí queda montado desde el día uno es la ATRIBUCIÓN, porque
 * es la parte que luego no se puede reconstruir:
 *
 *  · `lp_entrada` — la primera página que vio esta persona. Se lee de la
 *    cookie de primer contacto, no de la última página, para no atribuirle
 *    todo el mérito a la home (docs/seo/04 §11).
 *  · `comoNosHasEncontrado` — la pregunta que ninguna herramienta responde
 *    (docs/07 §7.5). El primer lead orgánico va a llegar del contenido de
 *    ayuntamientos y buena parte entrará por teléfono; sin este dato el
 *    clúster que primero da dinero parece que no convierte.
 */
export const runtime = 'nodejs'

export async function POST(request: Request) {
  let cuerpo: Record<string, unknown>

  try {
    cuerpo = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'json_invalido' }, { status: 400 })
  }

  const { nombre, email } = cuerpo as { nombre?: string; email?: string }

  if (!nombre?.trim() || !email?.trim()) {
    return NextResponse.json({ ok: false, error: 'faltan_datos' }, { status: 400 })
  }

  const cookies = request.headers.get('cookie') ?? ''
  const lpEntrada = /(?:^|;\s*)lp_entrada=([^;]+)/.exec(cookies)?.[1]

  const lead = {
    ...cuerpo,
    lpEntrada: lpEntrada ? decodeURIComponent(lpEntrada) : null,
    referer: request.headers.get('referer'),
    recibidoEn: new Date().toISOString(),
  }

  // TODO(negocio): enviar a CRM + aviso por email. Decidir herramienta.
  console.log('[brief] lead recibido', lead)

  return NextResponse.json({ ok: true })
}
