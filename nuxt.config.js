import getRoutes from "./utils/getRoutes";
import getMeta from "./utils/getMeta";

const meta = getMeta();

export default {
  content: {
    nestedProperties: ['author.name'],
    liveEdit: true
  },
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'RIVRE OF SOMA',
    htmlAttrs: {
      lang: 'en'
    },
    script: {
      src: 'https://unpkg.com/vue-paypal-checkout@2.0.0/dist/vue-paypal-checkout.min.js'
    },
    meta: [
      ...meta,
      {
        charset: "utf-8"
      },
      {
        name: "HandheldFriendly",
        content: "True"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        property: "og:site_name",
        content: "Bob Ross"
      },
      {
        hid: "description",
        name: "description",
        content: "Articles focused on the beautiful art of landscape painting.",
      },
      {
        property: "og:image:width",
        content: "740"
      },
      {
        property: "og:image:height",
        content: "300"
      },
      {
        name: "twitter:site",
        content: "@bobross"
      },
      {
        name: "twitter:card",
        content: "summary_large_image"
      },
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        hid: "canonical",
        rel: "canonical",
        href: process.env.BASE_URL,
      },
      {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
      }
    ],
    script: [{
        src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
        type: "text/javascript"
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
        type: "text/javascript"
      },
      {
        src: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js",
        type: "text/javascript"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'jquery',
    '@/assets/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{
    src: '@/plugins/paypal.client.js',
    ssr: false
  }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
<<<<<<< HEAD
    '@nuxt/image',
=======
    '@nuxt/image'
>>>>>>> parent of c4602d2... color modes added light and dark modes first to work light mode current work
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // '@forked-prs/nuxt-infinite-scroll-module'
    // "@nuxtjs/sitemap",
<<<<<<< HEAD
    '@nuxtjs/color-mode'
=======
    '@nuxtjs/color-mode',
    '@nuxt/svg'

>>>>>>> parent of bc5fc21... monochrome dark and light done ex icons
  ],

  colorMode: {
  preference: 'system', // default value of $colorMode.preference
  fallback: 'light', // fallback value if not system preference found
  hid: 'nuxt-color-mode-script',
  globalName: '__NUXT_COLOR_MODE__',
  componentName: 'ColorScheme',
  classPrefix: '',
  classSuffix: '-mode',
  storageKey: 'nuxt-color-mode'
},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  sitemap: {
    hostname: 'https://www.rivreofsoma.com/',
    routes() {
      return getRoutes();
    },
    vendor: ['vue-paypal-checkout']
  },
}
