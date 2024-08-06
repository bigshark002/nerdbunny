/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textShadowWidth: {
        '0': '0.5px',
        '1': '1px',
        '2': '2px',
        '3': '3px',
      },
      textStrokeWidth: {
        '0': '0.5px',
        '1': '1px',
        '2': '2px',
        '3': '3px',
      },
      boxShadow: {
        Black: '0 5px #000000',
        White: '0 5px #FFFFFF',
        PurplePrimary: '0 5px #C58BFB',
        PurpleSecond: '0 5px #7B3FB1',
        PurpleThird: '0 5px #AD7FD6',
        BluePrimary: '0 5px #240069',
        BlueSecond: '0 5px #0855A1',
        BlueThird: '0 5px #3199FF',
        PinkPrimary: '0 5px #EE43DE',
        GreenPrimary: '0 5px #43B75D',
        YellowPrimary: '0 5px #FFE500',
        YellowSecond: '0 5px #C8E600',
        YellowThird: '0 5px #FADA46',
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
        YellowThird: '#FADA46',
      }
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const newUtilities = {}
      Object.entries(theme('textShadowWidth')).forEach(([key, value]) => {
        newUtilities[`.text-shadow-${key}`] = {
          'text-shadow': `-${value} 0 var(--tw-text-shadow-color), ${value} 0 var(--tw-text-shadow-color), 0 -${value} var(--tw-text-shadow-color), 0 ${value} var(--tw-text-shadow-color)`,
        }
      })
      Object.entries(theme('textStrokeWidth')).forEach(([key, value]) => {
        newUtilities[`.text-stroke-${key}`] = {
          '-webkit-text-stroke-width': value,
          'paint-order': 'stroke fill',
        }
      })
      Object.entries(theme('colors')).forEach(([key, value]) => {
        newUtilities[`.text-stroke-${key}`] = {
          '-webkit-text-stroke-color': value,
        }
        newUtilities[`.text-shadow-${key}`] = {
          '--tw-text-shadow-color': value,
        }
      })
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}

