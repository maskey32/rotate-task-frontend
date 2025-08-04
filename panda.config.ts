import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  theme: {
    extend: {
      tokens: {
        colors: {
          brand: {},
          critical: {},
          warning: {},
          sidebar: {},
        },
        fonts: {
          publicSans: { value: 'var(--font-public-sans), system-ui, sans-serif' }
        },
        shadows: {
          card: { value: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)' },
          dropdown: { value: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }
        },
        radii: {}
      },
      semanticTokens: {
        colors: {
          bg: {},
          text: {},
          secondary: {},
        },
      },
    },
  },
  globalCss: {
    'html, body': {
      fontFamily: 'publicSans'
    }
  },
  outdir: "styled-system",
  jsxFramework: "react",
});

