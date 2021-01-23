<template>
  <section id="wrapper-dark" class="font-awesome"> 
    <section class="section">
      <div class="nmp-card has-text-centered-mobile has-text-left">
        <h1 class="subtitle is-4">TEDxUTsukuba 2020</h1>
        <h1 class="title is-1">JIJIMUGE</h1>
      </div>
      <hr>
    </section>
    
        <!-- <div class="columns"> 
          <div class="column is-7 is-centered has-text-centered"> 
            <nuxt-link :to="localePath('/events/2020')"><img src = "~/assets/wallpapers/jijimuge-transparent.png" style="width: 180px; margin-top: 10vh;"></nuxt-link>
            <h1 class="subtitle">TEDxUTsukuba 2020</h1>
            <h1 class="title is-1">JIJIMUGE</h1>
            <p>2020.11.29</p>
            <p>Virtual Hosting Event</p>
          </div>  
          <div class="column is-5 has-text-centered-mobile">
                        
          </div>
        </div>
      -->

    <section class="section" id="card-0">
      <h1 class="title is-0">
        <span class="">{{ $t('2020.speaker.title') }}</span>
      </h1>
      <h1 class="subtitle has-text-white has-text-right has-text-centered-mobile">
        {{ $t('2020.speaker.description') }}
      </h1>
      <Card id="card-1"
        :title = "$t('2020.speaker.sp1.name')"
        :subtitle = "$t('2020.speaker.sp1.position')"
        :description = "$t('2020.speaker.sp1.description')"
        :image_url = "src_sp1"
      >
      </Card>
      <Card id="card-2"
        :title = "$t('2020.speaker.sp2.name')"
        :subtitle = "$t('2020.speaker.sp2.position')"
        :description = "$t('2020.speaker.sp2.description')"
        :image_url = "src_sp2"
      >
      </Card>
      <Card id="card-3"
        :title = "$t('2020.speaker.sp3.name')"
        :subtitle = "$t('2020.speaker.sp3.position')"
        :description = "$t('2020.speaker.sp3.description')"
        :image_url = "src_sp3"
      >
      </Card>
      <Card id="card-4"
        :title = "$t('2020.speaker.sp4.name')"
        :subtitle = "$t('2020.speaker.sp4.position')"
        :description = "$t('2020.speaker.sp4.description')"
        :image_url = "src_sp4"
      >
      </Card>
    </section>

    <section class="hero is-black is-large">
      <div class="hero-body has-text-centered">
        <Movie id="teaser" :vId='videoId1' :aPlay='autoplay'></Movie>
      </div>
    </section>

    <section class="hero has-background-primary">
      <section class="section">
        <h1 class="title is-0 has-text-white">
          <span class="\">{{ $t('2020.concept.title') }}</span>
        </h1>
        <h1 class="subtitle has-text-white has-text-right has-text-centered-mobile">
          {{ $t('2020.concept.description') }}
        </h1>
        <br><br>
        <b-carousel
        :autoplay="true"
        :arrow="arrow"
        :repeat="arrowBoth"
        :arrow-hover="arrowHover"
        :interval="interval"
        :icon-pack="iconPack"
        :icon-prev="iconPrev"
        :icon-next="iconNext"
        :icon-size="iconSize"
        :pause-info-type="pauseInfoType"
        @click="switchGallery(true)">
        <b-carousel-item v-for="(item, i) in 4" :key="i">
          <a class="image ">
            <img :src="getImgUrl(i)">
          </a>
        </b-carousel-item>
        <span v-if="gallery" @click="switchGallery(false)" class="modal-close is-large"/>
      </b-carousel>
      </section>
    </section>

    <!-- <section class="section has-text-centered">
      <b-collapse :open="false" position="is-bottom" aria-id="contentIdForA11y1">
        <a class="button is-gradient is-rounded" slot="trigger" slot-scope="props" aria-controls="contentIdForA11y1" style="margin: 3rem auto;">
            <b-icon :icon="!props.open ? 'menu-down' : 'menu-up'"></b-icon>
            {{ !props.open ? 'Read statement' : 'Close' }}
        </a>
        <br><br>
        <div class="column has-text-left">
          <article>
            {{ $t('2020.concept.statement1') }}<br>
            {{ $t('2020.concept.statement2') }}<br>
            {{ $t('2020.concept.statement3') }}
          </article>
        </div>
      </b-collapse>
    </section> -->

    <section class="hero">
      <div class="hero-body">
        <section class="section">
          <h1 class="title is-0">
            <span class="">{{ $t('2020.participance.title') }}</span>
          </h1>
          <h1 class="subtitle has-text-white has-text-right has-text-centered-mobile">
            {{ $t('2020.participance.description') }}
          </h1>
          <br><br>
          <div class="columns">
            <div class="column is-5">
              <div class="nmp-card-light">
                <div class="header" style="margin-bottom: 1rem;">
                  <span class="tag is-medium"><font-awesome-icon :icon="['far', 'clock']" /> {{ $t('2020.participance.free.time') }}</span>
                </div>
                <div class="">
                  <h1 class="title is-3 has-text-dark">{{ $t('2020.participance.free.title') }}</h1>
                  <p>{{ $t('2020.participance.free.intro') }}</p>
                  <br>
                  <ul>
                    <li><font-awesome-icon :icon="['fas', 'check-square']" style="color: white;" /> {{ $t('2020.participance.free.charge') }}</li>
                    <li><font-awesome-icon :icon="['fas', 'check-square']" style="color: white;" /> {{ $t('2020.participance.free.reservation') }}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="column is-7">
              <div class="nmp-card-light">
                <div class="header" style="margin-bottom: 1rem;">
                  <span class="tag is-medium"><font-awesome-icon :icon="['far', 'clock']" /> {{ $t('2020.participance.premium.time') }}</span>
                </div>
                <div class="">
                  <h1 class="title is-3 has-text-dark">{{ $t('2020.participance.premium.title') }}</h1>
                  <p>{{ $t('2020.participance.premium.intro') }}</p>
                  <br>
                  <ul>
                    <li><font-awesome-icon :icon="['fas', 'check-square']" style="color: white;" /> {{ $t('2020.participance.premium.charge') }}</li>
                    <li><font-awesome-icon :icon="['fas', 'check-square']" style="color: white;" /> {{ $t('2020.participance.premium.reservation') }}</li>
                  </ul>
                  <hr>
                  <div class="columns is-multiline is-vcentered">
                    <div class="column has-text-right">
                      <p class="is-size-7" v-if="$i18n.locale == 'en'">{{ $t('2020.participance.premium.airmeet') }}</p>
                      <img src="~/assets/partners/2020/logo/AM_Full_Logo/PNG/AM_Logo_Dark_WM.png" width="150px" style="background-color: white; padding: 15px;"> 
                      <p class="is-size-7" v-if="$i18n.locale == 'ja'">{{ $t('2020.participance.premium.airmeet') }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>

    <section class="hero">
      <section id="highlight-title" class="section">
        <h1 class="title is-0">
          <span class="">{{ $t('2020.highlight.title') }}</span>
        </h1>
      </section>
      <div id="highlight" class="columns is-multiline is-mobile is-gapless">
        <div v-for="(item, i) in 15" :key="i" class="column is-4-mobile is-one-fifth-tablet">
            <figure :class="`image is-1by1 colorfilter-base-${i%2}`" :hover="isImageModalActive">
                <img :src="getHighlightImgUrl(i)" alt="TEDxUTsukuba JIJIMUGE" style="object-fit: cover;" class="colorfilter-image">
            </figure>
          <b-modal v-model="isImageModalActive">
            <p>sa</p>
            <p class="image is-4by3">
              <img :src="getHighlightImgUrl(i)" alt="TEDxUTsukuba JIJIMUGE">
            </p>
          </b-modal>
        </div>
      </div>
      <section class="section has-text-centered">
        <a class="button is-rounded is-gradient" href="https://flic.kr/s/aHsmSNKeT6">{{ $t('2020.highlight.detail') }}</a>
      </section>
    </section>
  </section>
</template>

<script>
import Card from '~/components/Card'
import Movie from '~/components/Movie'
import Image_sp1 from '~/assets/speakers/2020/speaker-01.png'
import Image_sp2 from '~/assets/speakers/2020/speaker-02.png'
import Image_sp3 from '~/assets/speakers/2020/speaker-03.png'
import Image_sp4 from '~/assets/speakers/2020/speaker-04.png'

export default {
  components: {
    Card, Movie
  },
  data(){
    return {
      // width: window.innerWidth,
      // height: window.innerHeight,
      isImageModalActive: false,
      videoId1: 'yJpcvqCC0ww',
      src_sp1: Image_sp1,
      src_sp2: Image_sp2,
      src_sp3: Image_sp3,
      src_sp4: Image_sp4,
      animated: 'true',
      interval: 5000,
      iconSize: 'is-large',
      pauseInfoType: 'is-dark',
      statementImages: [
        require('~/assets/2020/concept/statement_1_small.png'),
        require('~/assets/2020/concept/statement_2_small.png'),
        require('~/assets/2020/concept/statement_3_small.png'),
        require('~/assets/2020/concept/statement_4_small.png')
      ],
      statementMobileImages: [
        require('~/assets/2020/concept/statement_1_square.png'),
        require('~/assets/2020/concept/statement_2_square.png'),
        require('~/assets/2020/concept/statement_3_square.png'),
        require('~/assets/2020/concept/statement_4_square.png')
      ],
      carousels: [
        { 
          maintitle: 'JIJIMUGE',
          color: 'black' 
        },
        { 
          title: 'Slide 2', 
          title: '今、世の中にある様々な境界線が溶けつつあります。',
          description: 'グローバル化の進展により、ヒト・モノ・情報は自由に行き来し、国境は溶け始めています。',
          color: 'black'
        },
        { 
          title: 'Slide 3', 
          description: '',
          color: 'black' 
        },
        { 
          title: 'Slide 4', 
          description: '',
          color: 'black' 
        }
      ],
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
        content: 'TEDxUTsukuba 2020 JIJIMUGE'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://tedxutsukuba.com/events/2020'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '11月29日(日) オンライン開催。'
      },
      {
        hid: 'og:author',
        property: 'og:author',
        content: 'Haruki Kinoshita and TEDxUTsukuba website team'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://www.tedxutsukuba.com/sns_banner_2020.png'
      },
      { 
        hid: 'og:site_name', 
        name: 'og:site_name', 
        content: 'TEDxUTsukuba Official Website' 
      }
    ]
    }
  },
  methods: {
    getAspectRatio() {
      if (this.innerWidth > this.innerHeight) {
        console.log("yes");
      }
    },
    getHighlightImgUrl(value) {
      return require(`~/assets/2020/highlight/highlight-2020-${value}.jpg`)
    },
    getImgUrl(value) {
      if (process.client) {
        if (window.innerWidth <= 1080) {
          return this.statementMobileImages[value]
        } else {
          return this.statementImages[value]
        }
      }
    },
    switchGallery(value) {
      this.gallery = value
      if (value) {
          return document.documentElement.classList.add('is-clipped')
      } else {
          return document.documentElement.classList.remove('is-clipped')
      }
    }
  },
  mounted() {
    const scene1 = this.$scrollmagic
      .scene({
        triggerElement: '#card-0',
        triggerHook: 0.5,
        offset: 0,
        reverse: false
      })
      .setTween('#card-1', {
        css: {
          opacity: 1
        }
      })
    const scene2 = this.$scrollmagic
      .scene({
        triggerElement: '#card-1',
        triggerHook: 0.5,
        offset: 0,
        reverse: false
      })
      .setTween('#card-2', {
        css: {
          opacity: 1
        }
      })
    const scene3 = this.$scrollmagic
      .scene({
        triggerElement: '#card-2',
        triggerHook: 0.5,
        offset: 0,
        reverse: false
      })
      .setTween('#card-3', {
        css: {
          opacity: 1
        }
      })
    const scene4 = this.$scrollmagic
      .scene({
        triggerElement: '#card-3',
        triggerHook: 0.5,
        offset: 0,
        reverse: false
      })
      .setTween('#card-4', {
        css: {
          opacity: 1
        }
      })
    const scene5 = this.$scrollmagic
      .scene({
        triggerElement: '#highlight-title',
        triggerHook: 0.5,
        offset: 0,
        reverse: false
      })
      .setTween('#highlight', {
        css: {
          opacity: 1
        }
      })
    this.$scrollmagic.addScene(scene1)
    this.$scrollmagic.addScene(scene2)
    this.$scrollmagic.addScene(scene3)
    this.$scrollmagic.addScene(scene4)
    this.$scrollmagic.addScene(scene5)
  }
}
</script>

<style scoped>
.bg-jijimuge {
    /* background-image: linear-gradient( 135deg, #F1CA74 10%, #A64DB6 100%); */
    background: url("~@/assets/wallpapers/stage-bg4.png");
    /* background-size: 100%; */
    background-repeat: no-repeat;
    background-position: center;
      @media screen and (max-width: 780px) {
        background: none;
        display: nonte;
  }
}
  .is-active .al img {
    filter: grayscale(0%);
  }
  .al img {
    filter: grayscale(100%);
  }

  #card-1, #card-2, #card-3, #card-4 {
    opacity: 0;
    transition: all 0.25s;
  }
  #highlight {
    opacity: 0;
    transition: all 0.5s;
  }
</style>
