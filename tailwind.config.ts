import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./config/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#1a1a1a",
          light: "#2a2a2a",
          dark: "#111111",
        },
        ivory: {
          DEFAULT: "#f5f0e8",
          light: "#faf7f2",
          dark: "#e8e2d8",
        },
        gold: {
          DEFAULT: "#b8860b",
          light: "#d4a534",
          dark: "#8a7345",
          muted: "#a0926b",
        },
        stone: {
          DEFAULT: "#e8e2d8",
          light: "#f0ece4",
          dark: "#d4cec4",
        },
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
        cormorant: ["var(--font-cormorant)", "Garamond", "serif"],
      },
      fontSize: {
        hero: [
          "clamp(2.5rem, 6vw, 4.5rem)",
          { lineHeight: "1.1", letterSpacing: "-0.02em" },
        ],
        "section-heading": [
          "clamp(1.75rem, 4vw, 3rem)",
          { lineHeight: "1.2", letterSpacing: "-0.01em" },
        ],
        subheading: ["clamp(1.25rem, 2.5vw, 1.75rem)", { lineHeight: "1.3" }],
        body: ["clamp(1rem, 1.8vw, 1.125rem)", { lineHeight: "1.7" }],
        label: [
          "clamp(0.75rem, 1.2vw, 0.875rem)",
          { lineHeight: "1.5", letterSpacing: "0.15em" },
        ],
      },
      spacing: {
        section: "clamp(4rem, 10vw, 8rem)",
        "section-sm": "clamp(3rem, 6vw, 5rem)",
      },
      maxWidth: {
        content: "1200px",
        narrow: "720px",
        wide: "1400px",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-slow": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "fade-in-slow":
          "fade-in-slow 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "slide-up":
          "slide-up 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
