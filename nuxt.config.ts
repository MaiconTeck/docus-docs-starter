import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  extends: "@nuxt-themes/docus",
  modules: [
    "vuetify-nuxt-module",
    "@tecksolucoes/teck-components"
  ],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})