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
        '1/2dvw': '50dvw',
        '1/3dvw': '33.33dvw',
        '2/3dvw': '66.66dvw',
        '1/4dvw': '25dvw',
        '3/4dvw': '75dvw',
        '1/5dvw': '20dvw',
        '2/5dvw': '40dvw',
        '3/5dvw': '60dvw',
        '4/5dvw': '80dvw',
        '1/8dvw': '12.5dvw',
        '3/8dvw': '37.5dvw',
        '5/8dvw': '62.5dvw',
        '7/8dvw': '87.5dvw',
        '1/10dvw': '10dvw',
        '3/10dvw': '30dvw',
        '5/10dvw': '50dvw',
        '7/10dvw': '70dvw',
        '9/10dvw': '90dvw',
        '1/2dvh': '50dvh',
        '1/3dvh': '33.33dvh',
        '2/3dvh': '66.66dvh',
        '1/4dvh': '25dvh',
        '3/4dvh': '75dvh',
        '1/5dvh': '20dvh',
        '2/5dvh': '40dvh',
        '3/5dvh': '60dvh',
        '4/5dvh': '80dvh',
        '1/8dvh': '12.5dvh',
        '3/8dvh': '37.5dvh',
        '5/8dvh': '62.5dvh',
        '7/8dvh': '87.5dvh',
        '1/10dvh': '10dvh',
        '16-9dvh': '56.25dvw',
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
