/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        stage: {
          950: '#0E0A2A',
          900: '#1B1446',
          800: '#251C5C',
          700: '#302672',
          600: '#40358C',
          500: '#5A4FA8',
          400: '#8A82C4',
          300: '#B7B1E0',
          200: '#DAD6F2',
          100: '#EFEDFA',
        },
        primary: {
          DEFAULT: 'rgb(var(--primary) / <alpha-value>)',
          light: 'rgb(var(--primary-light) / <alpha-value>)',
          dark: 'rgb(var(--primary-dark) / <alpha-value>)',
          ink: 'rgb(var(--primary-ink) / <alpha-value>)',
        },
        success: { 300: '#86EFAC', 400: '#4ADE80', 500: '#22C55E', 600: '#16A34A', 900: '#14532D' },
        warning: { 300: '#FCD34D', 400: '#FBBF24', 500: '#F59E0B', 600: '#D97706', 900: '#78350F' },
        danger: { 300: '#FCA5A5', 400: '#F87171', 500: '#EF4444', 600: '#DC2626', 900: '#7F1D1D' },
      },
      keyframes: {
        'pop-up': {
          '0%': { opacity: '0', transform: 'translateY(12px) scale(0.8)' },
          '30%': { opacity: '1', transform: 'translateY(-8px) scale(1.1)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.92)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        flicker: {
          '0%,100%': { transform: 'scale(1) rotate(-3deg)' },
          '50%': { transform: 'scale(1.15) rotate(3deg)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(1)', opacity: '0.6' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
        'rise': {
          '0%': { transform: 'scaleY(0)' },
          '100%': { transform: 'scaleY(1)' },
        },
        shake: {
          '0%,100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-6px)' },
          '75%': { transform: 'translateX(6px)' },
        },
      },
      animation: {
        'pop-up': 'pop-up 0.6s cubic-bezier(.2,.9,.3,1.2) both',
        'fade-up': 'fade-up 0.5s ease-out both',
        'scale-in': 'scale-in 0.35s ease-out both',
        flicker: 'flicker 0.8s ease-in-out infinite',
        float: 'float 4s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 1.6s ease-out infinite',
        rise: 'rise 0.9s cubic-bezier(.2,.9,.3,1) both',
        shake: 'shake 0.3s ease-in-out',
      },
    },
  },
  plugins: [],
};
