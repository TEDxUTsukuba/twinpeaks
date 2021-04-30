<template>
  <section id="wrapper-gradient" style="margin: 0; padding: 0;">
    <!-- <div>
      <LogoAnimation id="top-logo" />
    </div> -->
    <div id="top-carousel-wrapper" class="top-carousel-wrapper columns is-gapless is-vcentered has-background-dark" style="margin-bottom: 0;">
      <div class="column is-12-touch">
        <Carousel id="top-carousel" />
      </div>
      <div class="column is-4-widescreen is-5-fullhd vertical-center has-text-centered" id="top-carousel-wrapper-logo-section">
        <img src="~/assets/logo/black_transparent_1.png" width="60%">
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
                <img src="~/assets/logo/motto.png" class="motto" style="padding-right: 50px;">
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
                    <img id="rocket" src="~/assets/svg/rocket.png" width="100%" style="z-index: 0;">
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
        <div class="columns is-multiline reverse-row-order">
          <div class="column is-5-tablet">
            <Flip
              :title = "$t('notice.left-top.title')"
              :description = "$t('notice.left-top.description')"
              :detail = "$t('notice.left-top.detail')"
              :link = "$t('notice.left-top.link')"
              imageUrl = "/_nuxt/assets/speakers/2019/sp_2019_1.jpg"
            />
          </div>
          <div class="column is-7-tablet">
            <Flip
              :title = "$t('notice.left-bottom.title')"
              :description = "$t('notice.left-bottom.description')"
              :detail = "$t('notice.left-bottom.detail')"
              :link = "$t('notice.left-bottom.link')"
              imageUrl = ""
            />
          </div>
          <div class="column is-7-tablet">
            <Flip
              :title = "$t('notice.right-top.title')"
              :description = "$t('notice.right-top.description')"
              :detail = "$t('notice.right-top.detail')"
              :link = "$t('notice.right-top.link')"
              imageUrl = ""
            />
          </div>
          <div class="column is-5-tablet">
            <Flip
              :title = "$t('notice.right-bottom.title')"
              :description = "$t('notice.right-bottom.description')"
              :detail = "$t('notice.right-bottom.detail')"
              :link = "$t('notice.right-bottom.link')"
              imageUrl = ""
            />
          </div>
        </div>
        <p class="has-text-grey-light has-text-right mb-6">{{ $t('notice.last-modified')}}<time datetime="2021-04-05">2021/4/5</time></p>
        <br>
        <div class="has-text-centered">
          <nuxt-link :to="localePath('/notice')" class="button is-white is-rounded">{{ $t('button.archive') }}</nuxt-link>
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
import Flip from '~/components/Flip'
import Carousel from '~/components/Carousel'
import PopularArticles from '~/components/PopularArticles'
// import LogoAnimation from '~/components/LogoAnimation'
// import Movie from '~/components/Movie'
// const Card = () => import('~/components/Card')
// const Flip = () => import('~/components/Flip')
// const Movie = () => import('~/components/Movie')

export default {
  components: {
    Card, Flip, Carousel, PopularArticles
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
  // asyncData(context) {
  //   const isAndroid = context.$ua.isFromAndroidOs()
  //   console.log('isAndroid', isAndroid)
  //   return { isAndroid }
  // },
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
    transition: all 0.5s;
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


