/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          DEFAULT: '#0F2A3D',
          50: '#F4F8FB',
          100: '#E6EEF4',
          200: '#C9DCE8',
          300: '#9FBACC',
          400: '#6E93B0',
          500: '#4A6F8C',
          600: '#365771',
          700: '#243F54',
          800: '#0F2A3D',
          900: '#08192A',
        },
        teal: {
          DEFAULT: '#2BA39A',
          50: '#EAF7F5',
          100: '#D0EEEB',
          200: '#A4DDD7',
          300: '#6FC7BD',
          400: '#43B0A4',
          500: '#2BA39A',
          600: '#1F847C',
          700: '#1B6B65',
          800: '#175551',
          900: '#103E3B',
        },
        cream: {
          DEFAULT: '#FBFAF6',
          50: '#FFFFFF',
          100: '#FBFAF6',
          200: '#F5F2EA',
          300: '#EDE7D8',
        },
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'blob-drift': {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(20px,-16px) scale(1.05)' },
          '66%': { transform: 'translate(-16px,12px) scale(0.97)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(.2,.8,.3,1) both',
        'fade-in': 'fade-in 0.6s ease-out both',
        float: 'float 5s ease-in-out infinite',
        'blob-drift': 'blob-drift 14s ease-in-out infinite',
        shimmer: 'shimmer 6s linear infinite',
      },
    },
  },
  plugins: [],
};
