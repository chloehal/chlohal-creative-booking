import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        serif: ['"Funnel Display"', "serif"],
        sans: ['"Google Sans"', "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("daisyui")],
  daisyui: {
    themes: [
      {
        silverocean: {
          "primary": "oklch(45% 0.04 286.286)",
          "primary-content": "oklch(98% 0.005 285.823)",
          "secondary": "oklch(83% 0.128 66.29)",
          "secondary-content": "oklch(26% 0.079 36.259)",
          "accent": "oklch(80% 0.114 19.571)",
          "accent-content": "oklch(25% 0.092 26.042)",
          "neutral": "oklch(14% 0 0)",
          "neutral-content": "oklch(98% 0 0)",
          "base-100": "oklch(98% 0 0)",
          "base-200": "oklch(97% 0 0)",
          "base-300": "oklch(92% 0 0)",
          "base-content": "oklch(20% 0 0)",
          "info": "oklch(74% 0.16 232.661)",
          "info-content": "oklch(29% 0.066 243.157)",
          "success": "oklch(79% 0.209 151.711)",
          "success-content": "oklch(26% 0.065 152.934)",
          "warning": "oklch(85% 0.199 91.936)",
          "warning-content": "oklch(28% 0.066 53.813)",
          "error": "oklch(71% 0.202 349.761)",
          "error-content": "oklch(28% 0.109 3.907)",
          "--rounded-box": "0.5rem",
          "--rounded-btn": "0.5rem",
          "--rounded-badge": "0.5rem",
          "--border-btn": "1px",
        },
      },
    ],
  },
} satisfies Config;
