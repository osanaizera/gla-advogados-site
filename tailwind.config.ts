import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gla: {
          blue: '#1A2B5E',
          'blue-light': '#2B3F8C',
          red: '#CC2936',
          'red-light': '#E63946',
          white: '#FFFFFF',
          'gray-50': '#F4F6F9',
          'gray-100': '#E8EBF2',
          'gray-600': '#4A5568',
          'gray-900': '#1C1C1C',
        }
      },
    },
  },
  plugins: [],
}
export default config