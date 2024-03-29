import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/canvaComponents/**/*.{js,ts,jsx,tsx,mdx}',
    './src/documentComponents/**/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      width: {
        'box': '647px',
      },
      colors: {
        lightBrown: "#dda15e",
        regularBrown: "#bc6c25",
        orangeV: "#bc6c25",
        bgColor: "#fefae0",
        weirdGreen: "#606c38"
      }
    },
  },
  plugins: [],
}
export default config
