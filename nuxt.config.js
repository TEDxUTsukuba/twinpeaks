
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    // title: process.env.npm_package_name || '',
    title: "TEDxUTsukuba | A hub for Tsukuba",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { 
        hid: 'twitter:card', 
        name: 'twitter:card', 
        content: 'summary_large_image' 
      },
      { 
        hid: 'twitter:site', 
        name: 'twitter:site', 
        content: 'tedxutsukuba' 
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'TEDxUTsukuba'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://tedxutsukuba.com'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '価値あるアイディアを、つくばから。Ideas worth spreading. '
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://teraoka.netlify.app/_nuxt/img/bba6327.png'
      },
      { 
        hid: 'og:site_name', 
        name: 'og:site_name', 
        content: 'TEDxUTsukuba Official Website' 
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    { src: '~/assets/style.scss', lang: 'scss' }
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    'nuxt-fontawesome',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-webfontloader',
    'nuxt-i18n'
  ],
  webfontloader: {
    google: {
      families: ['Noto+Sans+JP']
    }
  },
  i18n: {
    strategy: 'prefix_and_default',
    locales: [
      { code: 'ja', iso: 'ja_JP', file: 'ja.json' },
      { code: 'en', iso: 'en-US', file: 'en.json' },
    ],
    defaultLocale: 'ja',
    vueI18n: {
      fallbackLocale: 'ja'
    },
    vueI18nLoader: true,
    lazy: true,
      // 言語ファイル(.json)のディレクトリを記載
    langDir: 'locales/',
  },
  fontawesome: {
   imports: [
     {
       set: '@fortawesome/free-brands-svg-icons',
       icons: ['fab']
     },
     {
       set: '@fortawesome/free-solid-svg-icons',
       icons: ['fas']
     },
     {
       set: '@fortawesome/free-regular-svg-icons',
       icons: ['far']
     },
    ]
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  server: {
    port: 3000, // デフォルト: 3000
    host: '0.0.0.0' // デフォルト: localhost
  }
}
