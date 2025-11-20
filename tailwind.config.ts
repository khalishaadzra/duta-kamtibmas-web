import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0f172a", // Slate 900
          light: "#1e293b", // Slate 800
        },
        secondary: {
          DEFAULT: "#3b82f6", // Blue 500
          hover: "#2563eb", // Blue 600
        },
        accent: {
          DEFAULT: "#f59e0b", // Amber 500
        },
        background: {
          DEFAULT: "#f8fafc", // Slate 50
        },
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
