import type { Config } from 'tailwindcss'

// Tokens de docs/03-direccion-de-arte.md (dirección A · «Sala a oscuras»),
// con la enmienda C4 de docs/07: el grano vive en CSS, no incrustado.
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        negro: '#0A0A0A',
        superficie: '#141416',
        hueso: '#F5F1EA', // nunca blanco puro: sobre negro vibra y cansa
        gris: '#8B8B8F',
        rojo: {
          DEFAULT: '#E8452B',
          oscuro: '#C4351E',
        },
      },
      fontFamily: {
        // Sistema de dos voces + texto (doc 03 §2)
        display: ['var(--font-display)', 'Impact', 'sans-serif'],
        editorial: ['var(--font-editorial)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        contenedor: '1440px',
        lectura: '68ch',
      },
      transitionTimingFunction: {
        salida: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}

export default config
