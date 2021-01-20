
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    // title: process.env.npm_package_name || '',
    title: "TEDxUTsukuba | A hub for Tsukuba's ideas",
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
        content: '@tedxutsukuba' 
      },
      { 
        hid: 'twitter:creator', 
        name: 'twitter:creator', 
        content: '@tedxutsukuba' 
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
        content: 'https://www.tedxutsukuba.com'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '価値あるアイディアを、つくばから。"Ideas worth spreading" というTEDの理念のもとに、筑波大学の学生を中心として独自に運営されているコミュニティです。'
      },
      {
        hid: 'og:author',
        property: 'og:author',
        content: 'Haruki Kinoshita and TEDxUTsukuba website team'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://www.tedxutsukuba.com/u_logo_banner.png'
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
  loading: { color: '#000' },
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
    // Doc: https://buefy.github.io/#/documentation
    [
      '@nuxtjs/google-analytics', { id: 'UA-104320074-1' }
    ],
    // {
    //   src: '~/plugins/webfontloader.js', 
    //   ssr: false,
    //   mode: 'client'
    // },
    [
      'nuxt-buefy',
      {
        css: true,
        materialDesignIcons: false
      }
    ],
    // 'nuxt-fontawesome',
    // Doc: https://axios.nuxtjs.org/usage
    'nuxt-user-agent',
    'nuxt-i18n',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    [
      'nuxt-webfontloader',
      {
        google: {
          families: ['Noto+Sans+CJK+JP&display=swap:400,700'],
        }
      }
    ],
    'nuxt-svg-loader',
    [
      '@nuxtjs/sitemap',
      { 
        path: '/sitemap.xml',
        hostname: 'https://www.tedxutsukuba.com',
        exclude: [
          '/explore', '/inspire', '/talks_old'
        ]
      }
    ]
  ],
  // webfontloader: {
  //   google: {
  //     families: ['Noto+Sans+JP']
  //   }
  // },
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
    component: 'fa'
  //  imports: [
  //    {
  //      set: '@fortawesome/free-brands-svg-icons',
  //      icons: ['fab']
  //    },
  //    {
  //      set: '@fortawesome/free-solid-svg-icons',
  //      icons: ['fas']
  //    },
  //    {
  //      set: '@fortawesome/free-regular-svg-icons',
  //      icons: ['far']
  //    },
  //   ]
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
  generate: {
    fallback: true  // 404を表示
  },
  server: {
    port: 3000, // デフォルト: 3000
    host: '0.0.0.0' // デフォルト: localhost
  }
}
