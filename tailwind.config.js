/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-base": "#08090F",
        "bg-surface": "#0E1018",
        "bg-elevated": "#141722",
        "bg-hover": "#1A1E2C",
        "bg-active": "#222737",
        "border-subtle": "#1F2130",
        "border-default": "#2D3043",
        "border-strong": "#3F4359",
        "text-primary": "#E8EAF0",
        "text-secondary": "#ADB2C0",
        "text-muted": "#747B8F",
        "text-faint": "#515668",
        "accent-green": {
          DEFAULT: "#00FF6A",
          hover: "#29FF85",
          active: "#00D658",
          muted: "#145230",
          text: "#5DE89E",
        },
        "accent-cyan": {
          DEFAULT: "#00E5FF",
          hover: "#33EBFF",
          active: "#00BFD6",
          muted: "#173D44",
          text: "#5DC9D9",
        },
        severity: {
          critical: "#F2362E",
          high: "#FF8C1A",
          medium: "#FFD000",
          low: "#3B8BDB",
          info: "#6C7590",
        },
      },
      fontFamily: {
        mono: ["JetBrains Mono", "Fira Code", "SF Mono", "monospace"],
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "system-ui", "sans-serif"],
        display: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      boxShadow: {
        "glow-green-sm": "0 0 8px hsla(142,100%,50%,0.2)",
        "glow-green-md": "0 0 16px hsla(142,100%,50%,0.25), 0 0 4px hsla(142,100%,50%,0.4)",
        "glow-green-lg": "0 0 30px hsla(142,100%,50%,0.2), 0 0 60px hsla(142,100%,50%,0.1)",
        "glow-cyan-sm": "0 0 8px hsla(187,100%,50%,0.2)",
        "glow-cyan-md": "0 0 16px hsla(187,100%,50%,0.25), 0 0 4px hsla(187,100%,50%,0.4)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        glitch: {
          "0%, 100%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
        },
        typing: {
          "from": { width: "0" },
          "to": { width: "100%" },
        },
        "pulse-green": {
          "0%, 100%": { boxShadow: "0 0 0 0 hsla(142,100%,50%,0.4)" },
          "50%": { boxShadow: "0 0 0 8px hsla(142,100%,50%,0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s cubic-bezier(0.16,1,0.3,1) forwards",
        blink: "blink 1s step-end infinite",
        glitch: "glitch 0.3s ease-in-out",
        "pulse-green": "pulse-green 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
