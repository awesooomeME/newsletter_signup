/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
    },
    colors: {
      tomato: 'hsl(4, 100%, 67%)',
      dark_slate_gray: 'hsl(234, 29%, 20%)',
      charcoal_gray: 'hsl(235, 18%, 26%)',
      gray: 'hsl(231, 7%, 60%)',
      white: 'hsl(0, 0%, 100%)'
    },
    fontWeight: {
      normal: '400',
      heavy: '700'
    }, 
    screens: {
      desktop: '700px'
    }
  },
  plugins: [],
}
