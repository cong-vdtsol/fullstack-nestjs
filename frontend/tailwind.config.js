/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "backgroundAuth": "url('https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg')"
      },
      spacing: {
        '100': '45rem',
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // <== disable this!
  },
};
