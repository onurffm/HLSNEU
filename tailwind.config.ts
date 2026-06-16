import type { Config } from "tailwindcss";

// Farben & Fonts laufen bewusst über CSS-Variablen in app/globals.css
// (z.B. bg-[var(--blau)]). Daher hier nur die Content-Pfade + Font-Familien.
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
