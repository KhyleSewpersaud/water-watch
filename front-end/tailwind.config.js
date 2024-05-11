/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'beige': '#E5DDC5',
        'lightbeige': '#F1EEDC',
        'lightblue': '#3CAACE',
        'terq': '#3ACAFA',
        'darkblue': '#074173',
        'brown': '#70675A',
        'grey': '#9F9F9F'
      },
      fontFamily: {
        display: ["Rubik", "sans-serif"]
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          'beige': '#E5DDC5',
          'lightbeige': '#F1EEDC',
          'lightblue': '#3CAACE',
          'terq': '#3ACAFA',
          'darkblue': '#074173',
          'brown': '#70675A',
          'grey': '#9F9F9F'
        },
      },
    ],
    darkTheme: "false", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: "", // The element that receives theme color CSS variables
  },
}

