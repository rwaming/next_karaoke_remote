import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        '1/4vw': '25vw',
        '1/2vw': '50vw',
        '3/4vw': '75vw',
        '1/8vw': '12.5vw',
        '3/8vw': '37.5vw',
        '5/8vw': '62.5vw',
        '7/8vw': '87.5vw',
        '1/10vw': '10vw',
        '16-9vh': '56.25vw',
        '1/4vh': '25vh',
        '1/2vh': '50vh',
        '3/4vh': '75vh',
        '1/8vh': '12.5vh',
        '3/8vh': '37.5vh',
        '5/8vh': '62.5vh',
        '7/8vh': '87.5vh',
        '1/10vh': '10vh',
      },
      colors: {
        dark: '#222244',
        light: '#ffffee',
      },
    },
  },
  plugins: [],
}
export default config
