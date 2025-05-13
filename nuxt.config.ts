import { appConfig } from "./configs/app-config";
// import tailwindcss from "@tailwindcss/vite";
// import { appEnv } from "./configs/app-env";
import { defineNuxtConfig } from "nuxt/config";
import { getPackage } from "./utils/get-package.util";
import { isProduction } from "./utils/is-production.util";
import Aura from "@primeuix/themes/aura";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: !isProduction() },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  components: true,
  // modules: ['@nuxt/content', '@nuxt/eslint'],
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/eslint",
    "@nuxtjs/i18n",
    "@primevue/nuxt-module",
  ],
  app: {
    head: appConfig.head,
  },

  css: ["~/assets/css/main.css"],

  // vite: {
  //   plugins: [
  //     tailwindcss(),
  //   ],
  // },

  runtimeConfig: {
    public: {
      appName: getPackage().name,
      appVersion: getPackage().version,
    },
  },

  i18n: {
    // lazy: true,
    // langDir: '/locales/',
    // locales: [
    //   {
    //     code: 'en',
    //     name: 'English',
    //     file: 'en.json', // نه مسیر مطلق یا ../
    //     iso: 'en-US',
    //     dir: 'ltr'
    //   },
    //   {
    //     code: 'fa',
    //     name: 'فارسی',
    //     file: 'fa.json',
    //     iso: 'fa-IR',
    //     dir: 'rtl'
    //   }
    // ],
    // defaultLocale: 'fa',
    // strategy: 'prefix_except_default', // URL ها: /en/ , /fa/ , ...
    // detectBrowserLanguage: {
    //   useCookie: true,
    //   cookieKey: 'i18n_redirected',
    //   fallbackLocale: 'fa'
    // },
    // pages: {
    //   index: {
    //     en: '/',
    //     fa: '/'
    //   }
    // }
  },

  // TODO
  //   googleAnalytics: {
  //     id: 'G-2DF34W9FX3'
  // },

  router: {
    // middleware: ['auth'],
    // base: appEnv.NUXT_BASE_URL,
    // trailingSlash: true,
  },

  routeRules: {
    "/": { prerender: isProduction(), static: isProduction() },
  },

  primevue: {
    options: {
      theme: {
        preset: Aura,
      },
    },
    components: {

      include: ["Button", "DataTable", "Dialog", "Carousel", "Drawer"],
    },
  },
});
