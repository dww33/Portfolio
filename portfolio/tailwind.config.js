/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textDecoration: ['hover', 'focus'],  // 确保可以在悬浮或聚焦时使用
      textUnderlineOffset: {
        '3': '3px',  // 根据需要定义不同的偏移值
        '5': '5px'
      },
      colors: {
        custom1: '#D1D1CD',
        custom2: '#1A262D',
        custom3: '#2D5A5A',
        custom4: '#1C3742',
        custom5: '#902818',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
