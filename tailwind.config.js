/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/react-tailwindcss-select/dist/index.esm.js',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.js',
  ],
  theme: {
    extend: {
      animation: {
        'spin-fast': 'spin 0.5s linear infinite',
      },
      colors: {
        darkslateblue: {
          100: '#006A50',
          200: '#E9F7F0',
          300: '#E9F7F0',
        },
        black: '#000',
        whitesmoke: {
          100: '#fafaf5',
          200: '#f7f7f7',
          300: '#f5f5f5',
        },
        white: '#fff',
        aqua: '#42f5ff',
        gray: {
          100: '#fcfcfc',
          200: '#8b8b8b',
          300: 'rgba(255, 255, 255, 0.33)',
          border: '#DEDEDE',
        },
        gainsboro: '#e3e3e3',
        salmon: '#d76147',
        dimgray: '#707070',
        darksalmon: '#ffb5a5',
        'salmon-light': '#ffcec3',
        pink: {
          100: '#ffc8be',
          200: '#ffc3b5',
        },
        silver: '#c4c4c4',
        lightgray: {
          100: '#d6d6d6',
          200: 'rgba(214, 214, 214, 0.33)',
        },
        lightskyblue: '#afcaff',
        cornflowerblue: '#E9F7F0',

        plum: '#d7beff',
        lightsteelblue: '#bec1ff',
        lightblue: '#beebff',
        wheat: '#ffe7be',
        aquamarine: '#b9ffc6',
        moccasin: '#ffe8b9',
        paleturquoise: '#b9faff',
        peachpuff: '#ffd1b9',
        lightpink: '#ffb9be',
        lightgreen: '#b9ffb9',
      },
      fontFamily: {
        ubuntu: 'Ubuntu',
        lato: 'Lato',
        inter: 'Inter',
      },
      borderRadius: {
        '6xl': '25px',
        '8xs': '5px',
        '6xs': '7px',
        '3xs': '10px',
        '26xl': '45px',
        xl: '20px',
        lgi: '19px',
        '41xl': '60px',
      },
      boxShadow: {
        'all-side': '0px 0px 4px rgba(0, 0, 0, 0.14)',
      },
      gridTemplateColumns: {
        14: 'repeat(14, minmax(0, 1fr))',
      },
    },
    // Reduced font sizes (25% smaller)
    // fontSize: {
    //   sm: '12px',                  // 14px * 0.75 to text-xs md:text-sm
    //   base: '12px',                // 16px * 0.75 to text-sm md:text-base
    //   lg: '14px',                  // 18px * 0.75 to text-sm
    //   xl: '16px',                  // 20px * 0.75 to text-sm md:text-base
    //   '5xl': '18px',               // 24px * 0.75 to text-base md:text-lg
    //   '8xl': '22px',               // 27px * 0.75 to text-[22px]
    //   '6xl': '20px',               // 25px * 0.75 to text-xl
    //   '11xl': '24px',              // 30px * 0.75 to text-2xl
    //   '21xl': '30px',              // 40px * 0.75 to text-3xl
    //   '23xl': '32px',              // 42px * 0.75 to text-[32px]
    //   '31xl': '38px',              // 50px * 0.75 to text-[38px]
    //   '51xl': '52px',              // 70px * 0.75 to text-[52px]
    //   '61xl': '60px',              // 80px * 0.75 to text-[60px]
    // },
  },
  corePlugins: {
    preflight: true,
  },
  plugins: [require('tailwindcss-debug-screens')],
}
