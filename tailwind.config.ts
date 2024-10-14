import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        zoomIn: {
          "0%": { opacity: "0", transform: "scale3d(.3,.3,.3)" },
          "50%": { opacity: "1" },
        },
        pulseZalo: {
          "0%": { transform: "scale3d(1,1,1)" },
          "50%": { transform: "scale3d(1.05,1.05,1.05)" },
          "100%": { transform: "scale3d(1,1,1)" },
        },
      },
      animation: {
        zoomIn: "zoomIn 1s infinite",
        pulseZalo: "pulseZalo 1s infinite",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
} satisfies Config;
