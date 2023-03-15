module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        'phone': '400px',
        'tablet': '1100px',
        'laptop': '1280px',
        'desktop': '1580px',
      },
      fontFamily: {
        abc: ["Fira Code", "monospace"]
      },
    },
  },
  plugins: [],
};
