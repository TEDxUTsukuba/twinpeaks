
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    // title: process.env.npm_package_name || '',
    title: "TEDxUTsukuba | A Hub for Tsukuba's Ideas",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 
        hid: 'description', 
        name: 'description', 
        content: '価値あるアイディアを、つくばから。"Ideas worth spreading" というTEDの理念のもとに、筑波大学の学生を中心として独自に運営されているコミュニティです。'
      },
      // TEDxUTsukuba is an independently organised TEDx community managed by passionate students and alumni at the University of Tsukuba. Join us for a wide spectrum of conversations on local stories to global issues.
      {
        hid: 'og:title',
        property: 'og:title',
        content: "TEDxUTsukuba | A Hub for Tsukuba's Ideas"
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '価値あるアイディアを、つくばから。"Ideas worth spreading" というTEDの理念のもとに、筑波大学の学生を中心として独自に運営されているコミュニティです。'
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
        content: 'https://www.tedxutsukuba.com/sns_banner_recruitment.jpg'
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
      src: '~/assets/style.scss',
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
    {
      src: '~/plugins/user-agent-config.js',
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
      '@nuxtjs/google-analytics', { id: 'UA-104320074-1' }
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
            // domain: 'www.tedxutsukuba.com'
          },
          { 
            code: 'en', 
            iso: 'en-US', 
            file: 'en.json',
            // domain: 'www.en.tedxutsukuba.com'
          },
        ],
        // differentDomains: true,
        defaultLocale: 'ja',
        vueI18n: {
          fallbackLocale: 'ja'
        },
        detectBrowserLanguage: {
          useCookie: false,
          cookieKey: 'i18n_redirected',
          onlyOnRoot: true,  // recommended
        },
        // seo: true,
        vueI18nLoader: true,
        lazy: true,
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
      '**/ja/**', '**/private', '**/private/**', '**/inspire', '**/talks_old', '**/event_old', '**/loading'
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
    fallback: true  // 404を表示
  },
  server: {
    port: 3000, // デフォルト: 3000
    host: '0.0.0.0' // デフォルト: localhost
  }
}
