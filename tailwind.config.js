/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    borderRadius: {
 
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'xl': '0.6rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      '4xl': '2rem',
      'full': '9999px',
      'full': '9999px',
      'large': '12px',
    },
    fontSize: {
      'smmmmm': '0.3rem',
      'smmmm': '0.5rem',
      'smmm': '0.65rem',
      'smm': '0.75rem',
      'sm': '0.8rem',
      's': '0.9rem',
      'base': '1rem',
      'ex': '1.12em',
      'xl': '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '2.852rem',
      '6xl': '3.052rem',
      '7xl': '3.492rem',
      'Axl': '28rem',
    },
    screens: {
 
      'xss':'120px',
      'xs': '320px',
      'xm': '530px',
      'sm': '640px',
      'md': '768px',
      'dd': '860px',
      'ds': '920px',
      'ss': '940px',
      'sl': '1048px',
      'xf': '1130px',
      'xl': '1180px',
      'lg': '1280px',
      'lgi': '1400px',
      '2xl': '1536px',
      '4xl': '2800px',
    },
 
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "newsletter": "url('/assets/images/newsletter-bg.svg')",
        "create-trip-bg": "url('/assets/images/create-trip-bg.svg')",
        "barcelona-bg": "url('/assets/images/barcelona-bg.svg')",
        "slider": "url('/assets/images/slider.svg')",
      },
     
    },
  },
 
  plugins: [],
};