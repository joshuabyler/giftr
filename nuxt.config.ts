// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    // baseURL: 'https://joshuabyler.github.io/sheets/'
  },
  devtools: { enabled: true },
  css: ['@/assets/styles/tailwind.css', '@/assets/styles/main.scss'],
  compatibilityDate: '2024-11-03',
  nitro: {
    preset: 'github-pages'
  },
  modules: ['@pinia/nuxt', '@nuxt/ui'],
  runtimeConfig: {
    public: {
      GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
      SPREAD_SHEET_ID: process.env.SPREAD_SHEET_ID
    }
  },
  ssr: true,
  ui: {
    global: true
  }
});
