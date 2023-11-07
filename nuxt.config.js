require("dotenv").config();
const { NUXT_ENV_DATOCMS_API_TOKEN, BASE_URL, BASE_OGP } = process.env;
const BASE_NAME = "TEDxUTsukuba";
const BASE_DESC =
  'TEDxUTsukubaは "Ideas worth spreading" というTEDの理念のもとに、筑波大学の学生を中心として独自に運営されているコミュニティです。教養から科学、地域の話題から世界規模の問題に至るまで、様々なトピックスに焦点を当ててきました。';
const BASE_DESC_EN =
  "TEDxUTsukuba is an independently-organized TEDx community at the University of Tsukuba. Managed by passionate volunteers both in and around the campus, TEDxUTsukuba has shed light on relevant topics - from liberal arts to science, local stories to global issues. ";
const BASE_AUTHOR = "木下晴貴 | Haruki Kinoshita";
const BASE_SITE_NAME = "TEDxUTsukuba Official Website";
const DEPLOY_URL = "https://www.tedxutsukuba.com";

export default {
  /*
   ** Headers of the page
   */
  env: {
    NUXT_ENV_DATOCMS_API_TOKEN,
    BASE_NAME,
    BASE_DESC,
    BASE_DESC_EN,
    BASE_URL,
    BASE_OGP,
    BASE_AUTHOR,
    BASE_SITE_NAME,
    DEPLOY_URL
  },
  ssr: "true",
  target: "static",

  head: {
    title: BASE_NAME + " | Spread Globally, Connect Locally.",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: BASE_DESC
      },
      {
        hid: "author",
        property: "author",
        content: BASE_AUTHOR
      },
      {
        hid: "og:title",
        property: "og:title",
        content: BASE_NAME + " | Spread Globally, Connect Locally."
      },
      {
        hid: "og:description",
        property: "og:description",
        content: BASE_DESC
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "website"
      },
      {
        hid: "og:url",
        property: "og:url",
        content: BASE_URL
      },
      {
        hid: "og:author",
        property: "og:author",
        content: BASE_AUTHOR
      },
      {
        hid: "og:image",
        property: "og:image",
        content: BASE_URL + BASE_OGP + "/skyscraper.png"
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: BASE_SITE_NAME
      },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary_large_image"
      },
      {
        hid: "twitter:site",
        name: "twitter:site",
        content: "@tedxutsukuba"
      },
      {
        hid: "twitter:creator",
        name: "twitter:creator",
        content: "@tedxutsukuba"
      },
      {
        hid: "google:notranslate",
        name: "google",
        content: "notranslate"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "red",
    height: "5px"
  },

  /*
   ** Global CSS
   */
  css: [
    {
      src: "~/assets/style/style.scss",
      lang: "scss"
    }
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    /*
    {
      src: "~/plugins/vue-scrollmagic.js",
      ssr: false
    },*/
    {
      src: "~/plugins/vue-konva",
      ssr: false
    },
    {
      src: "~/plugins/datocms",
      ssr: false
    },
    {
      src: "~/plugins/vue-horizontal",
      ssr: false
    }
  ],

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    ["@nuxtjs/google-gtag", { id: "G-3LMEVG6TMY" }],
    [
      "nuxt-buefy",
      {
        css: true,
        materialDesignIcons: true
      }
    ],
    "nuxt-user-agent",
    [
      "@nuxtjs/i18n",
      {
        baseUrl: DEPLOY_URL,
        langDir: "locales/",
        vueI18nLoader: true,
        // sitemap.xml生成時のディレクトリに影響
        strategy: "prefix_except_default",
        locales: [
          {
            code: "ja",
            iso: "ja_JP",
            file: "ja.json"
          },
          {
            code: "en",
            iso: "en-US",
            file: "en.json"
          }
        ],
        differentDomains: false,
        defaultLocale: "ja",
        vueI18n: {
          fallbackLocale: "ja"
        }
        // detectBrowserLanguage: {
        //   useCookie: true,
        //   cookieKey: 'i18n_redirected',
        // //   alwaysRedirect: false,
        //   onlyOnRoot: true,  // recommended
        // },
        // // seo: true,
      }
    ],
    [
      "nuxt-canonical",
      {
        baseUrl: DEPLOY_URL
      }
    ],
    "@nuxtjs/axios",
    "nuxt-svg-loader",
    "@nuxtjs/sitemap",
    "cookie-universal-nuxt"
  ],

  // fontawesome: Removed, file size too large

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  sitemap: {
    path: "/sitemap.xml",
    hostname: DEPLOY_URL,
    i18n: true,
    i18n: {
      locales: ["ja", "en"],
      routesNameSeparator: "___"
    },
    exclude: [
      "/ja/**",
      "/private/**",
      "**/private/**",
      "**/draft",
      "**/talks_old",
      "**/event_old",
      "**/loading",
      "**/tedtalks",
      "**/member"
    ],
    routes: ["2017", "2021", "2022", "2023"]
      .map(year => {
        // TODO CMSから取得
        return ["en", ""].map(lang => {
          return {
            url: `${lang}/conferences/${year}/`,
            links: [
              {
                lang: "en",
                url: `en/conferences/${year}/`
              },
              {
                lang: "ja",
                url: `conferences/${year}/`
              }
            ]
          };
        });
      })
      .flat()
      .concat([
        {
          url: `en/salon/2023-1/`,
          links: [
            {
              lang: "en",
              url: `en/salon/2023-1/`
            },
            {
              lang: "ja",
              url: `salon/2023-1/`
            }
          ]
        },
        {
          url: `/salon/2023-1/`,
          links: [
            {
              lang: "en",
              url: `en/salon/2023-1/`
            },
            {
              lang: "ja",
              url: `salon/2023-1/`
            }
          ]
        }
      ])
  },

  /*
   ** Build configuration
   */
  build: {
    analyze: true,
    extractCSS: true,
    // HardSourceWebpackPlugin ビルド時間短縮
    // hardSource: true,
    /*
     ** You can extend webpack config here
     */
    // Safari 無限リロード対策
    filenames: {
      app: ({ isDev }) => (isDev ? "[name].[hash].js" : "[chunkhash].js"),
      chunk: ({ isDev }) => (isDev ? "[name].[hash].js" : "[chunkhash].js")
    },
    extend(config, ctx) {
      // Google Sheets API で最新情報を取得
      (config.node = {
        fs: "empty",
        googleapis: "empty",
        child_process: "empty"
      }),
        (config.resolve.alias["vue"] = "vue/dist/vue.common");
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          stylesheet: {
            name: "stylesheet",
            test: /\.css$/,
            chunks: "all",
            enforce: false,
            reuseExistingChunk: true,
            minSize: 10000,
            maxSize: 20000
          },
          pages: {
            name: "pages",
            test: /pages/,
            chunks: "all",
            enforce: false,
            reuseExistingChunk: true,
            minSize: 10000,
            maxSize: 50000
          },
          vendor: {
            test: /node_modules/,
            name: "vendor",
            chunks: "all",
            enforce: false,
            reuseExistingChunk: true,
            minSize: 10000,
            maxSize: 50000
          }
        }
      }
    }
  },
  router: {
    scrollBehavior: function(to, from, savedPosition) {
      return { x: 0, y: 0 };
    }
  },
  server: {
    port: 3000,
    host: "0.0.0.0" // デフォルト: localhost
  }
};
