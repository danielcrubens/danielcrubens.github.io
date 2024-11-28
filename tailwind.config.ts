import defaultTheme from 'tailwindcss/defaultTheme'
module.exports = {
  mode: 'jit',

  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        'geist mono': ['Geist Mono', 'monospace'],
        sans: ["Geist Mono", ...defaultTheme.fontFamily.sans]
       },
    },
  },
  plugins: [],
}