/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'roboto-regular': ['Roboto-regular'],
      'roboto-medium': ['Roboto-medium'],
      'roboto-bold': ['Roboto-bold'],
      'yellowtail': ['Yellowtail']
    },
    extend: {
      backgroundImage: {
        'shop-single': "url('./src/assets/images/abc.png')",
        'hero': "url('./src/assets/images/hero.png')",
        'customer': "url('./src/assets/images/customer-bg.png')",
        'econis': "url('./src/assets/images/econis.png')",
        'form-section': "url('./src/assets/images/form.png')",
        'shop-page': "url('./src/assets/images/shop-bg.png')",
        'about-page': "url('./src/assets/images/about-bg.png')",
        'not-found': "url('./src/assets/images/not_found.png')",
      }
    },
    colors: {
      'primary': '#274C5B',
      'secondary': "#7EB693",
      'yellow': '#EFD372',
      'gray': '#D4D4D4',
      'transparent': 'transparent',
      'white': 'white',
      'section-bg': '#F9F8F8',
      'for-text': '#525C60',
      'cards-bg': '#F9F8F8',
      'border': '#DEDDDD',
      'report-bg': '#F1F1F1',
      'product-bg': '#F1F8F4',
    }
  },
  plugins: [],
}