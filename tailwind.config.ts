import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        burgundy: {
          50: "#f9f1f3",
          100: "#f4e4e7",
          200: "#e9ccd3",
          300: "#d9aab6",
          400: "#c58194",
          500: "#a45766",
          600: "#954257",
          700: "#7c3648",
          800: "#67303d",
          900: "#572c36",
          950: "#311419",
        },
        navy: {
          50: "#f0f5fb",
          100: "#dce8f5",
          200: "#c0d7ed",
          300: "#94bde0",
          400: "#619ccf",
          500: "#3d7fbd",
          600: "#2b65a0",
          700: "#245182",
          800: "#21456c",
          900: "#1e3a5a",
          950: "#174a7c",
        },
        gold: {
          50: "#fbf8f1",
          100: "#f6efd8",
          200: "#eedb9d",
          300: "#e5c463",
          400: "#ddb43f",
          500: "#d4a520",
          600: "#bd8a18",
          700: "#9c6b17",
          800: "#815419",
          900: "#6c4519",
          950: "#3f2409",
        },
        green: {
          50: "#f2f9f1",
          100: "#e0f1df",
          200: "#c3e4c1",
          300: "#97d093",
          400: "#67b561",
          500: "#479a40",
          600: "#347d30",
          700: "#2a6328",
          800: "#244f23",
          900: "#1f421f",
          950: "#0e240e",
        },
        orange: {
          50: "#fff6ed",
          100: "#ffebd4",
          200: "#ffd2a9",
          300: "#ffb272",
          400: "#fd8a3b",
          500: "#fc6a15",
          600: "#ed4e09",
          700: "#c43a0b",
          800: "#9c3010",
          900: "#7e2a10",
          950: "#441307",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { transform: "translateY(20px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        slideRight: {
          from: { transform: "translateX(-20px)", opacity: "0" },
          to: { transform: "translateX(0)", opacity: "1" },
        },
        slideLeft: {
          from: { transform: "translateX(20px)", opacity: "0" },
          to: { transform: "translateX(0)", opacity: "1" },
        },
        zoomIn: {
          from: { transform: "scale(0.95)", opacity: "0" },
          to: { transform: "scale(1)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          from: { backgroundPosition: "200% 0" },
          to: { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        fadeIn: "fadeIn 0.5s ease-out",
        slideUp: "slideUp 0.5s ease-out",
        slideRight: "slideRight 0.5s ease-out",
        slideLeft: "slideLeft 0.5s ease-out",
        zoomIn: "zoomIn 0.5s ease-out",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 8s ease-in-out infinite",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "65ch",
            color: "var(--tw-prose-body)",
            p: {
              marginTop: "1.25em",
              marginBottom: "1.25em",
            },
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config

