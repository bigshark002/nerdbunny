/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textStrokeWidth: {
        '0': '0.5px',
        '1': '1px',
        '2': '2px',
        '3': '3px',
      },
      colors: {
        Black: '#000000',
        White: '#FFFFFF',
        PurplePrimary: '#C58BFB',
        PurpleSecond: '#7B3FB1',
        PurpleThird: '#AD7FD6',
        BluePrimary: '#240069',
        BlueSecond: '#0855A1',
        BlueThird: '#3199FF',
        PinkPrimary: '#EE43DE',
        GreenPrimary: '#43B75D',
        YellowPrimary: '#FFE500',
        YellowSecond: '#C8E600',
      }
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const newUtilities = {}
      Object.entries(theme('textStrokeWidth')).forEach(([key, value]) => {
        newUtilities[`.text-stroke-${key}`] = {
          '-webkit-text-stroke-width': value,
        }
      })
      Object.entries(theme('colors')).forEach(([key, value]) => {
        newUtilities[`.text-stroke-${key}`] = {
          '-webkit-text-stroke-color': value,
        }
      })
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}

