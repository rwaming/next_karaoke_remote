import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '320px',
      },
      spacing: {
        '1/2vw': '50vw',
        '1/3vw': '33.33vw',
        '2/3vw': '66.66vw',
        '1/4vw': '25vw',
        '3/4vw': '75vw',
        '1/5vw': '20vw',
        '2/5vw': '40vw',
        '3/5vw': '60vw',
        '4/5vw': '80vw',
        '1/8vw': '12.5vw',
        '3/8vw': '37.5vw',
        '5/8vw': '62.5vw',
        '7/8vw': '87.5vw',
        '1/10vw': '10vw',
        '16-9vh': '56.25vw',
        '1/2vh': '50vh',
        '1/3vh': '33.33vh',
        '2/3vh': '66.66vh',
        '1/4vh': '25vh',
        '3/4vh': '75vh',
        '1/5vh': '20vh',
        '2/5vh': '40vh',
        '3/5vh': '60vh',
        '4/5vh': '80vh',
        '1/8vh': '12.5vh',
        '3/8vh': '37.5vh',
        '5/8vh': '62.5vh',
        '7/8vh': '87.5vh',
        '1/10vh': '10vh',
      },
      colors: {
        dark: '#111122',
        light: '#efefdf',
        button1: '#f4f2fa',
        button2: '#eaec88',
        button3: '#8890ef',
      },
    },
  },
  plugins: [],
}
export default config
