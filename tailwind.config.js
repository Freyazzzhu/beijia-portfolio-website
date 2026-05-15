/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#05070D',
        ink: '#080B12',
        panel: '#0E1420',
        text: '#F4F7FB',
        secondary: '#A7B0C0',
        muted: '#7D8796',
        accent: '#6EA8FE',
        soft: '#9DC5FF',
        deep: '#1E3A5F',
        line: '#7DB7FF',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(110, 168, 254, 0.18)',
        'card-glow': '0 22px 70px rgba(30, 58, 95, 0.28)',
      },
      backgroundImage: {
        'radial-blue':
          'radial-gradient(circle at 50% 0%, rgba(110,168,254,0.18), transparent 34%)',
        'glass-line':
          'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))',
      },
    },
  },
  plugins: [],
};
