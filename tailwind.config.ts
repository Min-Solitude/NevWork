import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFC107",
      },
      boxShadow: {
        "sd-primary": "2px 4px 12px rgba(0,0,0,.08)",
      },
    },
  },
  plugins: [],
};
export default config;
