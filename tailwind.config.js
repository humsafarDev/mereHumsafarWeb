/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/primereact/**/*.{js,ts,jsx,tsx}", // Include PrimeReact components

  ],
  darkMode: 'class',
  theme: {
    extend: {
      // #058271
      colors: {
        // primary: "#FFFFFF",
        // secondary: "rgb(78,155,202)",
        dark: "black",
        textDark: "#FFFFFF",
        // dgfdb
        primary: {
          DEFAULT: 'var(--color-primary600)',
          200: 'var(--color-primary200)',
          400: 'var(--color-primary400)',
          600: 'var(--color-primary600)',
          700: 'var(--color-primary700)',
          800: 'var(--color-primary800)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary600)', // bg-secondary yahi lega
          200: 'var(--color-secondary200)',
          400: 'var(--color-secondary400)',
          600: 'var(--color-secondary600)',
          700: 'var(--color-secondary700)',
          800: 'var(--color-secondary800)',
        },
        secondarydark: {
          DEFAULT: 'var(--color-secondary-dark600)', // bg-secondary-dark yahi lega
          200: 'var(--color-secondary-dark200)',
          400: 'var(--color-secondary-dark400)',
          600: 'var(--color-secondary-dark600)',
          700: 'var(--color-secondary-dark700)',
          800: 'var(--color-secondary-dark800)',
        },

      },
      fontSize: {
        heading: "2rem",
        subheading: "1.5rem",
      },
      fontWeight: {
        heading: "700",
        subheading: "600",
      },
    },
  },
  plugins: [],
};
