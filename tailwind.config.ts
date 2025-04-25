
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        ekalNari: {
          light: "hsl(var(--background))",
          dark: "hsl(var(--foreground))",
          orange: "#00008b", // Updated to dark blue
          orange2: "#00008b", // Consistent color
          purple: "hsl(var(--secondary))",
          teal: "hsl(var(--accent))",
          pink: "hsl(var(--destructive))",
          cream: "hsl(var(--muted))",
          brown: "hsl(var(--muted-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};

export default config;
