export default defineNuxtConfig({
  compatibilityDate: "2025-01-05",
  devtools: { enabled: process.env.DEVTOOLS === "true" || false },
  ssr: process.env.SSR === "true" || false,
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxt/image",
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/test-utils/module",
  ],
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
});
