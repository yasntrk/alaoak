/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF7F0',
        'ivory-2': '#F3EEE2',
        surface: '#FFFFFF',
        ink: '#26251F',
        muted: '#5C574A',
        forest: { DEFAULT: '#2E5D34', deep: '#1F4A2B' },
        gold: { DEFAULT: '#9E7523', soft: '#B9892E' },
        line: '#E3DCCB',
      },
      fontFamily: {
        serif: ['Fraunces', 'ui-serif', 'Georgia', 'Cambria', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        content: '1180px',
      },
      letterSpacing: {
        eyebrow: '0.22em',
      },
      boxShadow: {
        card: '0 1px 2px rgba(38,37,31,0.04), 0 12px 32px -12px rgba(38,37,31,0.14)',
        'card-hover': '0 2px 4px rgba(38,37,31,0.05), 0 24px 48px -16px rgba(38,37,31,0.22)',
        gold: '0 0 0 1px rgba(158,117,35,0.25), 0 10px 30px -10px rgba(158,117,35,0.35)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        breathe: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'pulse-node': {
          '0%, 100%': { opacity: '0.55', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.25)' },
        },
      },
      animation: {
        breathe: 'breathe 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
