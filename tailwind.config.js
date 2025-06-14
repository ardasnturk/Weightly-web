/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Light theme colors
        light: {
          primary: "#22c55e",
          "primary-light": "#dcfce7",
          "primary-dark": "#15803d",
          background: "#f9fafb",
          surface: "#ffffff",
          card: "#ffffff",
          text: "#1f2937",
          "text-secondary": "#374151",
          "text-muted": "#6b7280",
          border: "#e5e7eb",
          "border-light": "#f3f4f6",
          success: "#22c55e",
          "success-light": "#dcfce7",
          warning: "#f59e0b",
          "warning-light": "#fef3c7",
          error: "#ef4444",
          "error-light": "#fecaca",
          info: "#3b82f6",
          "info-light": "#dbeafe",
          accent: "#fbbf24",
          overlay: "rgba(0, 0, 0, 0.5)",
          shadow: "#000000",
        },
        // Dark theme colors
        dark: {
          primary: "#22c55e",
          "primary-light": "#16a34a",
          "primary-dark": "#15803d",
          background: "#111827",
          surface: "#1f2937",
          card: "#374151",
          text: "#f9fafb",
          "text-secondary": "#e5e7eb",
          "text-muted": "#9ca3af",
          border: "#4b5563",
          "border-light": "#374151",
          success: "#22c55e",
          "success-light": "#16a34a",
          warning: "#f59e0b",
          "warning-light": "#d97706",
          error: "#ef4444",
          "error-light": "#dc2626",
          info: "#3b82f6",
          "info-light": "#2563eb",
          accent: "#fbbf24",
          overlay: "rgba(0, 0, 0, 0.7)",
          shadow: "#000000",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "bounce-gentle": "bounceGentle 2s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        bounceGentle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
