/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
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
  plugins: [],
}

