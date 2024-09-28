/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'xs':'360px',
        'sm': '640px',  // Default small size
        'md': '768px',  // Default medium size
        'lg': '1024px', // Default large size
        'xl': '1280px', // Default extra large size
        '2xl': '1536px', // Default 2x large size
        '3xl': '1800px', // Custom size for large desktops
        
      },
    },
  },
  plugins: [],
}

