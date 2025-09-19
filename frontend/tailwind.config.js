/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {/* ...as is... */},
        success: {/* ...as is... */},
        danger: {/* ...as is... */},
        warning: {/* ...as is... */},
        dark: {
          50:  "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          /** NEW */
          750: "#263043",   // <- between 700 and 800
          800: "#1e293b",
          900: "#0f172a",
        }
      },
      animation: { /* ...as is... */ },
      keyframes: { /* ...as is... */ },
      backgroundImage: { /* ...as is... */ },
    },
  },
  plugins: [],
}
