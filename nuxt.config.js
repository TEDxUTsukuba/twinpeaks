require('dotenv').config();
const { STEIN_API, NUXT_ENV_DATOCMS_API_TOKEN } = process.env;

export default {
  /*
  ** Headers of the page
  */
  env: {
    STEIN_API, NUXT_ENV_DATOCMS_API_TOKEN
  },
  head: {
    // title: process.env.npm_package_name || '',
    title: "TEDxUTsukuba | Spread Globally, Connect Locally.",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 
        hid: 'description', 
        name: 'description', 
        content: '価値あるアイディアを、つくばから。TEDxUTsukubaは "Ideas worth spreading" というTEDの理念のもとに、筑波大学の学生を中心として独自に運営されているコミュニティです。'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: "TEDxUTsukuba | Spread Globally, Connect Locally."
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '価値あるアイディアを、つくばから。TEDxUTsukubaは "Ideas worth spreading" というTEDの理念のもとに、筑波大学の学生を中心として独自に運営されているコミュニティです。'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://www.tedxutsukuba.com'
      },
      {
        hid: 'og:author',
        property: 'og:author',
        content: 'Haruki Kinoshita and TEDxUTsukuba website team'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://www.tedxutsukuba.com/skyscraper.png'
      },
      { 
        hid: 'og:site_name', 
        property: 'og:site_name', 
        content: 'TEDxUTsukuba Official Website' 
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@tedxutsukuba'
      },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: '@tedxutsukuba'
      },
      {
        hid: 'google:notranslate',
        name: 'google',
        content: 'notranslate'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: 'red',
    height: '5px'
  },

  loadingIndicator: {
    name: 'circle',
    color: 'red',
    background: 'white'
  },
  /*
  ** Global CSS
  */
  css: [
    {
      src: '~/assets/style/style.scss',
      lang: 'scss'
    }
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src: '~/plugins/vue-scrollmagic.js',
      ssr: false
    },
    {
      src: '~/plugins/vue-add-to-calendar.js',
      ssr: false
    },
    // {
    //   src: '~/plugins/generator.js',
    //   ssr: false
    // },
    { 
      src: '~/plugins/vue-konva',
      ssr: false 
    },
    {
      src: '~/plugins/datocms',
      ssr: false
    },
    {
      src: '~/plugins/vue-horizontal',
      ssr: false
    }
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
    [
      '@nuxtjs/google-gtag', { id: 'UA-104320074-1' }
    ],
    // [
    //   'nuxt-webfontloader', {
    //     google: {
    //       families: ['Lato:400,700&text=abcdefghijklmnopqrstuvwxyz0123456789!/-&display:swap']
    //     }
    //   }
    // ],
    [
      'nuxt-buefy',
      {
        css: true,
        materialDesignIcons: true
      }
    ],
    'nuxt-user-agent',
    [ 
      'nuxt-i18n', {
        baseUrl: 'https://www.tedxutsukuba.com',
        // sitemap.xml生成時のディレクトリに影響
        strategy: 'prefix_except_default',
        locales: [
          { 
            code: 'ja', 
            iso: 'ja_JP', 
            file: 'ja.json',
          },
          { 
            code: 'en', 
            iso: 'en-US', 
            file: 'en.json',
          },
        ],
        differentDomains: false,
        defaultLocale: 'ja',
        vueI18n: {
          fallbackLocale: 'ja'
        },
        // detectBrowserLanguage: {
        //   useCookie: true,
        //   cookieKey: 'i18n_redirected',
        // //   alwaysRedirect: false,
        //   onlyOnRoot: true,  // recommended
        // },
        // // seo: true,
        vueI18nLoader: true,
        // lazy: true,
        // 言語ファイル(.json)のディレクトリを記載
        langDir: 'locales/',
      }
    ],
    [
      'nuxt-canonical', 
      {
        baseUrl: 'https://www.tedxutsukuba.com'
      }
    ],
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-svg-loader',
    '@nuxtjs/sitemap',
    '@nuxt/content',
    // 参考: https://blog.mktia.com/generate-ogp-image-automatically/
    // '~/modules/imageGenerator.js'
    // [ 
    //   'nuxt-responsive-loader',
    //   {
    //     name: 'img/[hash:7]-[width].[ext]',
    //     format: 'png'
    //   }
    // ],
    'cookie-universal-nuxt',
  ],

  // fontawesome: {
  //   component: 'fa',
  //   imports: [
  //     {
  //       set: '@fortawesome/free-brands-svg-icons',
  //       icons: ['fab']
  //     },
  //     {
  //       set: '@fortawesome/free-solid-svg-icons',
  //       icons: ['fas']
  //     },
  //     {
  //       set: '@fortawesome/free-regular-svg-icons',
  //       icons: ['far']
  //     },
  //   ]
  // },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://www.tedxutsukuba.com',
    i18n: true,
    i18n: {
      locales: ['ja', 'en'],
      routesNameSeparator: '___'
    },
    exclude: [
      '**/ja/**', '**/private', '**/private/**', '**/draft', '**/talks_old', '**/event_old', '**/loading', '**/tedtalks'
    ],
    // routes(callback) {
    //   const axios = require('axios')
    // }
  },
  /*
  ** Build configuration
  */
  build: {
    // HardSourceWebpackPlugin ビルド時間短縮
    // hardSource: true,
    /*
    ** You can extend webpack config here
    */
    // Safari 無限リロード対策
    filenames: {
      app: ({ isDev }) => isDev ? '[name].[hash].js' : '[chunkhash].js',
      chunk: ({ isDev }) => isDev ? '[name].[hash].js' : '[chunkhash].js'
    },
    extend (config, ctx) {
      // Google Sheets API で最新情報を取得
      config.node = {
        fs: 'empty',
        googleapis: 'empty',
        child_process: 'empty'
      },
      config.resolve.alias['vue'] = 'vue/dist/vue.common'
    }
  },
  generate: {
    fallback: true,  // 404を表示
    routes: [
      'blog/is_slander_certainly_bad',
      'blog/knowledge_is_power_but',
      'blog/johnmaeda',
      'blog/social_distancing_and_stress',
      'blog/tedtalk_recommend',
      'blog/why_letting_go_is_always_an_option_ja',
      'blog/why_letting_go_is_always_an_option_en',
      'about/takuma_goto',
      'about/craig_coleman',
      'about/naoki_kitaoka',
      'about/masato_kai',
      'about/coleen_melecio',
      'about/fukutaro_kawai',
      'about/shoryu_aoyama',
      'about/chiho_numata',
      'about/saaya_kobayashi',
      'about/shuhei_kinoshita',
      'about/seika_takahashi',
      'about/kanade_takahashi',
      'about/kazuki_ikegaya',
      'about/yuki_abe',
      'about/harry'
    ]
  },
  router: {
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },
  server: {
    port: 3000, // デフォルト: 3000
    host: '0.0.0.0' // デフォルト: localhost
  }
}
