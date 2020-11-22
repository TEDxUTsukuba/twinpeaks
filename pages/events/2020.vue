<template>
  <section id="wrapper-dark" class="font-awesome">
    
    <section class="hero is-medium is-dark bg-jijimuge">
      <div class="hero-body has-text-white has-text-left">
        <div class="container has-text-centered">
          <h1 class="title is-1">JIJIMUGE</h1>
          <h1 class="subtitle is-4">TEDxUTsukuba 2020</h1>
        </div>
      </div>
    </section>
 
    <section class="section">
      <h1 class="title is-0">
        <span class="">{{ $t('2020.speaker.title') }}</span>
      </h1>
      <h1 class="subtitle has-text-white has-text-right">
        {{ $t('2020.speaker.description') }}
      </h1>
      <Card
        :title = "$t('2020.speaker.sp1.name')"
        :subtitle = "$t('2020.speaker.sp1.position')"
        :description = "$t('2020.speaker.sp1.description')"
        :image_url = "src_sp1"
      >
      </Card>
      <Card
        :title = "$t('2020.speaker.sp2.name')"
        :subtitle = "$t('2020.speaker.sp2.position')"
        :description = "$t('2020.speaker.sp2.description')"
        :image_url = "src_sp2"
      >
      </Card>
      <Card
        :title = "$t('2020.speaker.sp3.name')"
        :subtitle = "$t('2020.speaker.sp3.position')"
        :description = "$t('2020.speaker.sp3.description')"
        :image_url = "src_sp3"
      >
      </Card>
      <Card
        :title = "$t('2020.speaker.sp4.name')"
        :subtitle = "$t('2020.speaker.sp4.position')"
        :description = "$t('2020.speaker.sp4.description')"
        :image_url = "src_sp4"
      >
      </Card>
    </section>
    <section class="hero has-text-centered">
      <section class="section">
        <h1 class="title is-0">
          <span class="">{{ $t('2020.concept.title') }}</span>
        </h1>
        <h1 class="subtitle has-text-white has-text-right">
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
        <a class="button is-medium is-gradient is-rounded" slot="trigger" slot-scope="props" aria-controls="contentIdForA11y1" style="margin: 3rem auto;">
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

    <section class="hero bg-red">
      <div class="hero-body">
        <section class="section">
          <h1 class="title is-0">
            <span class="">{{ $t('2020.participance.title') }}</span>
          </h1>
          <h1 class="subtitle has-text-white has-text-right">
            {{ $t('2020.participance.description') }}
          </h1>
          <div class="columns">
            <div class="column is-5">
              <div class="nmp-card-red">
                <div class="header" style="margin-bottom: 1rem;">
                  <span class="tag is-white is-medium"><font-awesome-icon :icon="['far', 'clock']" /> {{ $t('2020.participance.free.time') }}</span>
                </div>
                <div class="">
                  <h1 class="title is-2 has-text-white">{{ $t('2020.participance.free.title') }}</h1>
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
              <div class="nmp-card-red">
                <div class="header" style="margin-bottom: 1rem;">
                  <span class="tag is-white is-medium"><font-awesome-icon :icon="['far', 'clock']" /> {{ $t('2020.participance.premium.time') }}</span>
                </div>
                <div class="">
                  <h1 class="title is-2 has-text-white">{{ $t('2020.participance.premium.title') }}</h1>
                  <p>{{ $t('2020.participance.premium.intro') }}</p>
                  <br>
                  <ul>
                    <li><font-awesome-icon :icon="['fas', 'check-square']" style="color: white;" /> {{ $t('2020.participance.premium.charge') }}</li>
                    <li><font-awesome-icon :icon="['fas', 'check-square']" style="color: white;" /> {{ $t('2020.participance.premium.reservation') }}</li>
                  </ul>
                  <br>
                  <div class="columns is-multiline is-vcentered">
                    <div class="column is-12-tablet is-half-desktop has-text-right-mobile">
                      <p class="is-size-7" v-if="$i18n.locale == 'en'">{{ $t('2020.participance.premium.airmeet') }}</p>
                      <img src="~/assets/partners/2020/logo/AM_Full_Logo/PNG/AM_Logo_Dark_WM.png" width="200px" style="background-color: white; padding: 15px;"> 
                      <p class="is-size-7" v-if="$i18n.locale == 'ja'">{{ $t('2020.participance.premium.airmeet') }}</p>
                    </div>
                    <div class="column is-12-tablet is-half-desktop has-text-right">
                      <a class="button is-large is-white is-outlined is-rounded" href="https://tiget.net/events/109783">{{ $t('2020.participance.premium.tiget') }}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  </section>
</template>

<script>
import Card from '~/components/Card'
import Image_sp1 from '~/assets/speakers/2020/speaker-01.png'
import Image_sp2 from '~/assets/speakers/2020/speaker-02.png'
import Image_sp3 from '~/assets/speakers/2020/speaker-03.png'
import Image_sp4 from '~/assets/speakers/2020/speaker-04.png'

export default {
  components: {
    Card
  },
  data(){
    return {
      src_sp1: Image_sp1,
      src_sp2: Image_sp2,
      src_sp3: Image_sp3,
      src_sp4: Image_sp4,
      animated: 'true',
      interval: '5000',
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
        content: 'https://www.tedxutsukuba.com/sns_banner.png'
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
    getImgUrl(value) {
      if (window.innerWidth <= 1080) {
        return this.statementMobileImages[value]
      } else {
        return this.statementImages[value]
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
  }
}
</script>

<style scoped>
  .notification {
    background-color: white;
  }
  .is-active .al img {
    filter: grayscale(0%);
  }
  .al img {
      filter: grayscale(100%);
  }
</style>