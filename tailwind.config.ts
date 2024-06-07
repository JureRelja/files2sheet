import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // prettier-ignore
        white: "#ffffff",
        accent: "#63D471",
        background: "#233329",
        black: "#000000",
        gray: "#FAFAFA",
      },
    },
  },
  plugins: [],
};
export default config;
