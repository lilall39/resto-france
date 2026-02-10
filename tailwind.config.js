/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#A25A3C',
        secondary: '#1F3D34',
        background: '#F7F5F2',
        muted: '#ECEAE6',
        text: '#1F1F1F',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      spacing: {
        section: '4rem',   /* py-10 mobile */
        'section-lg': '4rem', /* py-16 desktop via class */
      },
    },
  },
  plugins: [],
};
