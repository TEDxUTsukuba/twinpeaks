<template>
  <section id="wrapper-gradient" style="margin: 0; padding: 0;">
    <!-- <div>
      <LogoAnimation id="top-logo" />
    </div> -->
    <div id="top-carousel-wrapper" class="top-carousel-wrapper columns is-gapless is-vcentered has-background-black" style="margin-bottom: 0;">
      <div class="column is-12-touch">
        <Carousel id="top-carousel" />
      </div>
      <div class="column is-4-widescreen is-5-fullhd vertical-center has-text-centered" id="top-carousel-wrapper-logo-section">
        <img data-not-lazy src="~/assets/logo/u_bgblack_oneline.png" width="60%" alt="TEDxUTsukuba Logo">
        <!-- <LogoAnimation id="top-logo" /> -->
      </div>
    </div>
    <!-- <div class="bg-jijimuge" style="padding-top: 3.25rem;">  
      <div id="top-photoframe" class="top-photoframe">
        <nuxt-link :to="localePath('/events/2020')">
        <figure class="is-square">
          <img src = "~/assets/wallpapers/jijimuge-transparent-circle.png" />
        </figure>
        </nuxt-link>
      </div>
      <section id="top-title" class="section has-text-centered has-text-weight-light has-text-light" style="padding-bottom: 20vh;">
        <h1 class="title is-1 is-spaced" style="letter-spacing: -1px;">
          {{ $t('event.title1') }}<br class="mobile-br">{{ $t('event.title2') }}<br class="mobile-br">{{ $t('event.title3') }}
        </h1>
        <h1 class="subtitle is-5 has-text-weight-normal has-text-white">
          {{ $t('event.subtitle1') }}<br class="mobile-br">{{ $t('event.subtitle2') }}
        </h1>
        <br>
        <nuxt-link :to="localePath('/events/2020')" class="button is-gradient is-rounded">{{ $t('button.discover') }}</nuxt-link>
      </section>
    </div> -->
      
    <section class="hero">
      <div class="hero-body" id="intro">
        <section class="section">
          <div class="columns is-mobile is-multiline is-centered is-variable is-0">
              <div class="column is-5-widescreen is-4-desktop is-6-tablet is-10-mobile">
                <img data-not-lazy src="~/assets/logo/motto.png" class="motto" style="padding-right: 50px;" alt="Ideas Worth Spreading">
              </div>
              <div class="column is-0-fullhd is-0-widescreen is-0-desktop is-6-tablet is-2-mobile"></div>
              <div class="column is-7-widescreen is-8-desktop is-full-tablet is-full-mobile">
                  <h1 v-if="$i18n.locale == 'ja'" class="title is-2 is-size-4-mobile has-text-weight-light">
                    {{ $t('intro.headline1') }}
                    <br>
                    {{ $t('intro.headline2') }}
                  </h1>
                  <h1 v-if="$i18n.locale == 'en'" class="title is-2 is-size-4-mobile has-text-weight-light">
                    {{ $t('intro.headline1') }}
                    <br class="mobile-br">
                    {{ $t('intro.headline2') }}
                  </h1>
                    <img id="rocket" src="~/assets/svg/rocket.png" width="100%" style="z-index: 0;" alt="">
                  <article class="is-size-6 has-text-light">
                    {{ $t('intro.description') }}
                  </article>
                  <br>
                  <div class="has-text-right">
                    <nuxt-link :to="localePath('/about/utsukuba')"><button class="button is-white is-rounded is-outlined">{{ $t('intro.button') }}</button></nuxt-link>
                  </div>
              </div>
            </div>
        </section>
      </div>
    </section>
      
    <!-- <section class="hero">
      <Movie id="teaser" :vId='weAreTEDxUTsukuba' classname="large" style=""></Movie>
    </section> -->

    <section>
      <PopularArticles /> 
    </section>

    <section id="notice-title" class="section">
      <div id="notice">
        <h1 class="title is-1 has-text-centered">
          <span class="">{{ $t('news.title') }}</span>
        </h1>
        <br>
        <div class="columns is-variable is-6 is-multiline is-centered">
          <div class="column is-4-widescreen is-6-desktop is-6-tablet" v-for="(notice, index) in notices" :key="index">
            <div class="nmp-dark">
              <header class="card-header">
                <p class="card-header-title">
                  <span class="is-size-7 has-text-grey">{{ formatDate(notice.updatedAt) }}</span>
                </p>
              </header>
              <div class="card-image">
                <!-- <datocms-image :data="notice.image.responsiveImage" :alt="notice.image.responsiveImage.alt" /> -->
                <figure class="image is-5by3">
                  <datocms-image :data="notice.image.responsiveImage" :alt="notice.alt" style="position: initial; object-fit:"/>
                </figure>
              </div>
              <div class="card-content">{{ notice.image.responsiveImage.width}}
                <h2 class="title is-size-5">{{ notice.title }}</h2>
                <p class="has-text-grey-light">{{ notice.shortDescription }}</p>
                <!-- <br>
                <nav class="level is-mobile">
                  <div class="level-left">
                    <p class="level-left">
                    </p>
                  </div>
                  <div class="level-right">
                    <p class="level-item">
                      <nuxt-link class="button is-rounded is-gradient" :to="`~/news/`">{{ $t('button.readmore') }}</nuxt-link>
                    </p>
                  </div>
                </nav> -->
              </div>
            </div>
          </div>
        </div>
        <br>
        <div class="has-text-centered">
          <!-- <nuxt-link :to="localePath('/news')" class="button is-white is-rounded">{{ $t('button.archive') }}</nuxt-link> -->
        </div>
      </div>
    </section>

    <!-- <div class="has-text-centered">
      <nuxt-link :to="localePath('/talks')" class="button is-gradient is-rounded">{{ $t('talks.seeAll') }}</nuxt-link>
    </div> -->
    <br><br>
  </section>
</template>

<script>
import Card from '~/components/Card'
import Carousel from '~/components/Carousel'
import PopularArticles from '~/components/PopularArticles'
import { request, gql } from '~/lib/datocms'
import { Image } from "vue-datocms";
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'
// import LogoAnimation from '~/components/LogoAnimation'
// import Movie from '~/components/Movie'
// const Card = () => import('~/components/Card')
// const Flip = () => import('~/components/Flip')
// const Movie = () => import('~/components/Movie')

export default {
  components: {
    Card, Carousel, PopularArticles, "datocms-image": Image
  },
  data() {
    return {
      jijimugeLiveStream: 'yJpcvqCC0ww',
      teaser: 'q_Es52kl6FQ',
      weAreTEDxUTsukuba: 'ZbIEuwjpxp0',
      todayDate: Date.now(),
      eventDate: Date(2020, 11, 29, 0, 0, 0),
      isAlertActive: true,
    }
  },
  async asyncData({ params }) {
    const data = await request({
      query: gql`
        {
          notices: allNotices(orderBy: updatedAt_DESC) {
            title
            shortDescription
            updatedAt
            image {
              responsiveImage(imgixParams: {fit: crop, crop: top, h: 300, w: 500}) {
                alt
                src
              }
            }
          }
        }
      `
    })
    return { ready: !!data, ...data }
  },
  head() {
    if (!this.ready) {
      return
    }
  },
  mounted() {
    const browser = this.$ua.browser()
    if (browser !== 'Safari') {
      // const scene1 = this.$scrollmagic
      //   .scene({
      //     triggerElement: '#top-logo',
      //     triggerHook: 0.5,
      //     offset: 10,
      //     // durationがあるとremove()が有効にならない
      //     reverse: false
      //   })
      //   // SVGのレイヤーにactiveクラスを付与
      //   .setClassToggle("#layer1", "active")
      //   // アニメーションが終わってもclassを削除しない
      //   .reverse(false)

      const scene2 = this.$scrollmagic
        .scene({
          triggerElement: '#top-carousel-wrapper',
          triggerHook: 0.5,
          offset: 0,
          reverse: false
        })
        .setTween('#intro', {
          css: {
            opacity: 1
          }
        })

      const scene3 = this.$scrollmagic
        .scene({
          triggerElement: '#notice-title',
          triggerHook: 0.5,
          offset: 0,
          reverse: false
        })
        .setTween('#notice', {
          css: {
            opacity: 1
          }
        })
        // this.$scrollmagic.addScene(scene1)
        this.$scrollmagic.addScene(scene2)
        this.$scrollmagic.addScene(scene3)
    } else {
      document.getElementById("intro").style.opacity = 1;
      document.getElementById("notice").style.opacity = 1;
    }
  },
  methods: {
    formatDate(date) {
      return format(parseISO(date), 'PPP')
    }
  }
}
</script>


<style lang="scss" scoped>
  .same-height {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -ms-flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
  }

  .textoverflow {
    color: white;
    font-size: 6rem;
    font-family: 'Helvetica Neue', 'Arial', sans-serif;
    left: 10vw;
    position: absolute;
    top: 130vh;
  }
  h1.thin {
    font-weight: 100 !important;
  }
  #intro, #notice {
    opacity: 0;
    transition: all 0.25s;
  }
  #top-carousel {
    transition: all 1s;
    // opacity: 0;
    // transition: fadeIn 2s;
    // max-width: 1024px !important;
    // margin: auto;
  }
  #top-logo {
    width: 100%;
  }
  // @media screen and (min-width: 1024px) {
  //   .top-carousel-wrapper {
  //     padding: 6vh 0 3vh 0;
  //     background: url("~@/assets/wallpapers/ishihiro.jpg") no-repeat center top;
  //     background-size: cover;
  //     background-attachment: fixed;
  //     -webkit-backface-visibility:hidden;
  //     backface-visibility:hidden;
  //     z-index: 0;
  //     overflow: hidden;
  //     position: relative;
  //     .columns {
  //       margin: 0;
  //     }
  //   }
  //   .top-carousel-wrapper:before {
  //     content: "";
  //     display: block;
  //     position: absolute;
  //     background: inherit;
  //     filter: saturate(125%) contrast(60%) blur(5px);
  //     top: -20px;
  //     right: -20px;
  //     bottom: -20px;
  //     left: -20px;
  //     z-index: -1;
  //   }
  // }
  #top-carousel-wrapper-logo-section {
    @media screen and (max-width: 1215px) {
      display: none;
    }
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes SlideIn {
    0% {
      opacity: 0;
      // transform: translate3d(-1920px,0,0);
    }
    100% {
      opacity: 1;
      transform: translate3d(0,0,0);
    }
  }
  .motto {
    width: 100%; max-width: 480px;
    // transform: translate3d(0,0,100px);
  }
  
  
</style>


