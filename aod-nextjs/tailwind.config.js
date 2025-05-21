/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        josefin: ['var(--font-josefin-sans)'],
      },
      colors: {
        primary: {
          DEFAULT: '#000000',
          hover: '#333333',
        },
        secondary: {
          DEFAULT: '#f5f5f5',
          hover: '#e0e0e0',
        },
      },
      backgroundImage: {
        'hero-pattern': "url('/images/1_HomeIMG.webp')",
        'cat-sillas': "url('/images/2_CatSillas.webp')",
        'cat-escritorios': "url('/images/3_CatEscritorio.webp')",
        'cat-mesas': "url('/images/4_CatMesas.webp')",
        'cat-almacenamiento': "url('/images/5_CatAlmacenamiento.webp')",
        'conocenos': "url('/images/6_Conocenos.webp')",
        'disenio-desarrollo': "url('/images/7_DiseñoDesarrollo.webp')",
        'producto-pre': "url('/images/8_ProductoPre.webp')",
        'portada-cat': "url('/images/9_PortadaCat.webp')",
        'portada-sillas': "url('/images/10_PortadaSeccionSillas.webp')",
      },
    },
  },
  plugins: [],
} 