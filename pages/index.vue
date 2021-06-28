<template>
  <section id="wrapper-gradient" style="margin: 0; padding: 0;">
    <section style="padding-top: 8vh; padding-bottom: 2vh;">
      <AnimatedScenery />
    </section>
    <!-- <div id="top-carousel-wrapper" class="top-carousel-wrapper columns is-gapless is-vcentered has-background-black" style="margin-bottom: 0;">
      <div class="column is-12-touch">
        <Carousel id="top-carousel" />
      </div>
      <div class="column is-4-widescreen is-5-fullhd vertical-center has-text-centered" id="top-carousel-wrapper-logo-section">
        <img src="~/assets/logo/u_bgblack_oneline.png" width="60%" alt="TEDxUTsukuba Logo">
      </div>
    </div> -->
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
          {{ $t('event.title1') }}<br class="is-hidden-tablet">{{ $t('event.title2') }}<br class="is-hidden-tablet">{{ $t('event.title3') }}
        </h1>
        <h1 class="subtitle is-5 has-text-weight-normal has-text-white">
          {{ $t('event.subtitle1') }}<br class="is-hidden-mobile">{{ $t('event.subtitle2') }}
        </h1>
        <br>
        <nuxt-link :to="localePath('/events/2020')" class="button is-gradient is-rounded">{{ $t('button.discover') }}</nuxt-link>
      </section>
    </div> -->
      
    <section class="hero my-6">
      <div class="hero-body" id="intro">
        <section class="section">
          <div class="columns is-mobile is-multiline is-variable is-0">
              <div class="column is-5-widescreen is-4-desktop is-4-tablet is-10-mobile" @mouseover="myMouseOver" @mouseleave="myMouseLeave">
                <img src="~/assets/logo/motto.png" class="motto" style="padding-right: 50px; max-width: 400px;" alt="Ideas Worth Spreading">
              </div>
              <div class="column is-7-widescreen is-8-desktop is-8-tablet is-full-mobile">
                  <h1 v-if="$i18n.locale == 'ja'" class="title is-2 is-size-4-mobile has-text-weight-bold has-text-white">
                    <span v-html="$t('intro.headline1')" />
                    <br class="is-hidden-mobile">
                    <span v-html="$t('intro.headline2')" />
                  </h1>
                  <h1 v-if="$i18n.locale == 'en'" class="title is-2 is-size-4-mobile has-text-weight-light has-text-white">
                    <span v-html="$t('intro.headline1')" />
                    <br class="is-hidden-mobile">
                    <span v-html="$t('intro.headline2')" />
                  </h1>
                  <br>
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

    <section>
      <PopularArticles /> 
    </section>

    <section class="section pt-0">
      <b-carousel :pause-info="false" :indicator-inside="false" :arrow="false" :indicator="true" animated="fade" interval=5000>
        <b-carousel-item v-for="(feedback, i) in feedbacks" :key="i">
          <div class="has-text-centered p-4">
            <p class="has-text-left"><i class="mdi mdi-format-quote-open is-size-1 has-text-grey-light" /></p>
            <p class="is-size-3 has-text-weight-bold has-text-centered px-6">{{ feedback.text }}</p>
            <p class="has-text-right"><i class="mdi mdi-format-quote-close is-size-1 has-text-grey-light" /></p>
            <p class="has-text-centered has-text-weight-light">{{ feedback.event }}</p>
          </div>
        </b-carousel-item>
      </b-carousel>
      
    </section>


    <section id="notice" class="hero">
      <section class="section">
        <h1 class="title is-2 has-text-centered has-text-dark mt-2 mb-6">
          {{ $t('news.title') }}
        </h1>
        <vue-horizontal class="columns">
          <div class="item column is-12-mobile is-6-tablet is-6-desktop" v-for="(notice, index) in notices" :key="index">
            <div class="nmp-light my-4">
              <header class="card-header">
                <p class="card-header-title">
                  <span class="is-size-7 has-text-grey">{{ formatDate(notice.updatedAt) }}</span>
                </p>
              </header>
              <div class="card-image">
                <!-- <datocms-image :data="notice.image.responsiveImage" :alt="notice.image.responsiveImage.alt" /> -->
                <figure class="image is-5by3">
                  <img :src="notice.image.url" :alt="notice.image.alt" style="object-fit: cover"/>
                </figure>
              </div>
              <div class="card-content">
                <h2 class="title is-size-5 has-text-dark">{{ notice.title }}</h2>
                <p class="has-text-grey">{{ notice.shortDescription }}</p>
                <br>
                <nav class="level is-mobile">
                  <div class="level-left">
                    <p class="level-left">
                    </p>
                  </div>
                  <div class="level-right">
                    <p class="level-item">
                      <nuxt-link class="button is-rounded is-gradient" :to="localePath(`/news/${notice.id}`)">{{ $t('button.readmore') }}</nuxt-link>
                    </p>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </vue-horizontal>
        <div class="has-text-centered pt-4">
          <nuxt-link :to="localePath('/news')" class="button is-white is-rounded">{{ $t('button.archive') }}</nuxt-link>
        </div>
      </section>
    </section>
  </section>
</template>

<script>
// import Carousel from '~/components/Carousel'
import PopularArticles from '~/components/PopularArticles'
import { request, gql } from '~/lib/datocms'
import { Image } from "vue-datocms";
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'
import VueHorizontal from 'vue-horizontal'
import $cookies from "cookie-universal-nuxt";
import AnimatedScenery from '~/components/AnimatedScenery'
// import LogoAnimation from '~/components/LogoAnimation'

export default {
  components: {
    PopularArticles, "datocms-image": Image, VueHorizontal, AnimatedScenery
    // Carousel
  },
  data() {
    return {
      jijimugeLiveStream: 'yJpcvqCC0ww',
      teaser: 'q_Es52kl6FQ',
      weAreTEDxUTsukuba: 'ZbIEuwjpxp0',
      todayDate: Date.now(),
      eventDate: Date(2020, 11, 29, 0, 0, 0),
      isAlertActive: true,
      feedbacks: [
        { text: "夢を実行に移すには不安やリスクはつきものですが、第一線で活躍されている皆さんの話を伺って、背中を押されました。", event: 'TEDxUTsukuba 2017 "moving"' },
        { text: "ふだん外国の方と接する機会が少ないため、イベントを通して文化の壁や、異文化を理解する面白さに出会うことができました。", event: 'TEDxUTsukuba 2019 "CoPhilAction"' }
      ]
    }
  },
  async asyncData({ params, i18n }) {
    // console.log(i18n.locale)
    const data = await request({
      query: gql`
        {
          notices: allNotices(first: "6", locale: ${i18n.locale}, orderBy: updatedAt_DESC) {
            id
            title
            shortDescription
            _firstPublishedAt
            updatedAt
            image {
              alt
              url
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
    // const isVideoPlayed = this.$cookies.get("isVideoPlayed");
  },
  methods: {
    formatDate(date) {
      return format(parseISO(date), 'PPP')
    },
    myMouseOver() {
      document.getElementById("rocket").classList.add("rocket-launch");
    },
    myMouseLeave() {
      document.getElementById("rocket").classList.remove("rocket-launch");
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
  #notice {
    opacity: 1;
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


