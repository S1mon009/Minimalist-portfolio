import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  app: {
    head: {
      title: "Szymon Skałecki - Portfolio",
      htmlAttrs: {
        lang: "en",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/avatar.jpg" }],
    },
  },
  css: ["~/assets/css/tailwind.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  compatibilityDate: "2025-06-13",
  devtools: { enabled: process.env.DEVTOOLS === "true" || false },
  ssr: process.env.SSR === "true" || false,
  modules: [
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
