/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
      },
      textShadowWidth: {
        0: "0.5px",
        1: "1px",
        2: "2px",
        3: "3px",
      },
      textStrokeWidth: {
        0: "0.5px",
        1: "1px",
        2: "2px",
        3: "3px",
      },
      boxShadow: {
        Black: '0 5px #000000',
        BlackSecond: '0 5px #231E2B',
        White: '0 5px #FFFFFF',
        PurplePrimary: '0 5px #C58BFB',
        PurpleSecond: '0 5px #7B3FB1',
        PurpleThird: '0 5px #AD7FD6',
        PurpleFourth: '0 5px #08143E',
        PurpleFifth: '0 5px #6A1AB4',
        PurpleSixth: '0 5px #EAD3FF',
        BluePrimary: '0 5px #240069',
        BlueSecond: '0 5px #0855A1',
        BlueThird: '0 5px #3199FF',
        PinkPrimary: '0 5px #EE43DE',
        GreenPrimary: '0 5px #43B75D',
        YellowPrimary: '0 5px #FFE500',
        YellowSecond: '0 5px #C8E600',
        YellowSecondOne: '0 2px #C8E600',
        YellowThird: '0 5px #FADA46',
        YellowFourth: '0 5px #FFD140',
        YellowFifth: '0 5px #FFD048',
      },
      colors: {
        Black: '#000000',
        BlackSecond: '#231E2B',
        White: '#FFFFFF',
        PurplePrimary: '#C58BFB',
        PurpleSecond: '#7B3FB1',
        PurpleThird: '#AD7FD6',
        PurpleFourth: '#08143E',
        PurpleFifth: '#6A1AB4',
        PurpleSixth: '#EAD3FF',
        BluePrimary: '#240069',
        BlueSecond: '#0855A1',
        BlueThird: '#3199FF',
        PinkPrimary: '#EE43DE',
        GreenPrimary: '#43B75D',
        YellowPrimary: '#FFE500',
        YellowSecond: '#C8E600',
        YellowThird: '#FADA46',
        YellowFourth: '#FFD140',
        YellowFifth: '#FFD048',
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const newUtilities = {};
      Object.entries(theme("textShadowWidth")).forEach(([key, value]) => {
        newUtilities[`.text-shadow-${key}`] = {
          "text-shadow": `-${value} 0 var(--tw-text-shadow-color), ${value} 0 var(--tw-text-shadow-color), 0 -${value} var(--tw-text-shadow-color), 0 ${value} var(--tw-text-shadow-color)`,
        };
      });
      Object.entries(theme("textStrokeWidth")).forEach(([key, value]) => {
        newUtilities[`.text-stroke-${key}`] = {
          "-webkit-text-stroke-width": value,
          "paint-order": "stroke fill",
        };
      });
      Object.entries(theme("colors")).forEach(([key, value]) => {
        newUtilities[`.text-stroke-${key}`] = {
          "-webkit-text-stroke-color": value,
        };
        newUtilities[`.text-shadow-${key}`] = {
          "--tw-text-shadow-color": value,
        };
      });
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};

