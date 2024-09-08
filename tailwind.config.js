/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.js"],
  theme: {
    extend: {
       animation: {
        'spin-slow': 'spin 4s linear infinite',
        'spin-super-slow': 'spin 6s linear infinite',
        'wiggle': 'wiggle 3s ease-in-out infinite',
        'wiggle-slow': 'wiggle 4s ease-in-out infinite'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(30deg)' },
          '50%': { transform: 'rotate(-60deg)' },
        }
      }
    },
  },
  plugins: [],
};
