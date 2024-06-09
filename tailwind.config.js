/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        title: 'clamp(1.438rem, 1.263rem + 0.87vw, 2rem)',
        text: 'clamp(1.125rem, 1.086rem + 0.19vw, 1.25rem)',
        temp: 'clamp(1.875rem, 0.288rem + 6.77vw, 6rem)',
        location: 'clamp(1.063rem, 0.99rem + 0.31vw, 1.25rem)',
        weather: 'clamp(0.938rem, 0.817rem + 0.51vw, 1.25rem)',
        time: 'clamp(1.063rem, 0.875rem + 0.8vw, 1.25rem)',
        temps: 'clamp(1rem, 0.904rem + 0.41vw, 1.25rem)'
      },
      padding: {
        main: 'clamp(1.375rem, 0.87rem + 2.52vw, 3rem)',
        forecastX: 'clamp(0.75rem, 0.365rem + 1.64vw, 1.75rem)',
        weather: 'clamp(0.625rem, 0.385rem + 1.03vw, 1.25rem)',
        forecastY: 'clamp(0.313rem, -0.144rem + 1.95vw, 1.5rem)',
        stats: 'clamp(1.25rem, 1.095rem + 0.78vw, 1.75rem)',
        info: 'clamp(1.25rem, 1.017rem + 1.17vw, 2rem)'
      },
      margin: {
        block: 'clamp(4.375rem, 2.627rem + 8.74vw, 10rem)'
      },
      maxWidth: {
        max: 'clamp(18.75rem, -3280.875rem + 12600vw, 26.625rem)'
      },
      width: {
        image: 'clamp(9.375rem, 7.433rem + 9.71vw, 15.625rem)'
      },
      height: {
        image: 'clamp(12.5rem, 11.298rem + 5.13vw, 15.625rem)'
      },

      gap: {
        x: 'clamp(1rem, -3rem + 5.33vw, 1.5rem)'
      },

      screens: {
        wl: { max: '1200px' },
        ws: { max: '900px' },
        'h-900': { raw: '(max-width: 900px) and (height > 840px)' }
      }
    }
  },
  plugins: []
}
