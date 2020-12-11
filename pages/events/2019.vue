<template>
  <section id="wrapper-dark" class="font-awesome">   
    <section class="hero is-medium bg-cophilaction">
      <div class="hero-body has-text-left">
        <div class="container has-text-centered">
          <h1 class="title is-1">CoPhilAction</h1>
          <h1 class="subtitle is-4">TEDxUTsukuba 2019</h1>
        </div>
      </div>
    </section>

    <section class="hero">
      <div class="container">
        <b-carousel 
          :autoplay="false" indicator-custom
          :indicator-inside="false" 
          :overlay="gallery" 
          :icon-size="iconSize"
          :pause-info-type="pauseInfoType"
          @click="switchGallery(true)">
          <b-carousel-item v-for="(item, i) in 3" :key="i">
            <a class="image">
              <img :src="getImgUrl(i)">
            </a>
          </b-carousel-item>
          <span v-if="gallery" @click="switchGallery(false)" class="modal-close is-large"/>
          <template slot="indicators" slot-scope="props">
            <figure class="al image" :draggable="false">
              <img :draggable="false" :src="getImgUrl(props.i)" :title="props.i">
            </figure>
          </template>
        </b-carousel>
      </div>
    </section>

    <section class="section">
      <h1 class="title is-0">
        <span class="">{{ $t('2019.speaker.title') }}</span>
      </h1>
      <h1 class="subtitle has-text-white has-text-right">
        {{ $t('2019.speaker.description') }}
      </h1>
      <Card
        :title = "$t('2019.speaker.sp1.name')"
        :subtitle = "$t('2019.speaker.sp1.position')"
        :description = "$t('2019.speaker.sp1.description')"
        :image_url = "src_sp1"
      >
      </Card>
      <Card
        :title = "$t('2019.speaker.sp2.name')"
        :subtitle = "$t('2019.speaker.sp2.position')"
        :description = "$t('2019.speaker.sp2.description')"
        :image_url = "src_sp2"
      >
      </Card>
      <Card
        :title = "$t('2019.speaker.sp3.name')"
        :subtitle = "$t('2019.speaker.sp3.position')"
        :description = "$t('2019.speaker.sp3.description')"
        :image_url = "src_sp3"
      >
      </Card>
      <Card
        :title = "$t('2019.speaker.sp4.name')"
        :subtitle = "$t('2019.speaker.sp4.position')"
        :description = "$t('2019.speaker.sp4.description')"
        :image_url = "src_sp4"
      >
      </Card>
      <Card
        :title = "$t('2019.speaker.sp5.name')"
        :subtitle = "$t('2019.speaker.sp5.position')"
        :description = "$t('2019.speaker.sp5.description')"
        :image_url = "src_sp5"
      >
      </Card>
    </section>
    <section class="hero has-text-centered">
      <section class="section">
        <h1 class="title is-0">
          <span class="">{{ $t('2019.concept.title') }}</span>
        </h1>
        <h1 class="subtitle has-text-white has-text-right">
          {{ $t('2019.concept.description') }}
        </h1>
        <figure class="image">
          <img src="~/assets/2019/concept/cophilaction_silver.png" alt="CoPhilAction">
        </figure>
        <div class="nmp-card-dark">
          テクノロジーが進歩し、物質的な豊かさを享受できるようになった現代において、家族や仲間との強い繋がりが個人の幸せに占める割合は、相対的に低下している。
          <br>
          地縁や血縁、職場での付き合いが「しがらみ」として遠ざけられるようになる一方で、SNSの普及や非正規雇用の拡大により、うわべだけの人間関係が増加しつつある。
          <br><br>
          ムラ社会ニッポン特有の「同調圧力」といった悪弊が徐々に廃れていくとともに、個人主義や競争社会への賛辞が、日夜を問わず世間を賑わせてきたのが現実だ。
          <br>
          しかし、テクノロジーのあくなき追求の先に待ち受けていた人工知能の登場は、皮肉にも私たちに「人間とは何か」という問いとの対峙を要請するのであった。
          <br><br>
          古代エジプトでピラミッドが建造され、バスティーユ牢獄で市民革命の火蓋が切られたように、文明の進歩の原動力は「人間関係」の中にこそ見いだすことができるはずだ。
          <br>
          そして令和という新たな時代を生きる私たちに求められるのは、これまで人間関係を築く上での障壁となってきた文化や思想、価値観の違いを、強みへと変えようとする気概ではないだろうか。
          <br><br>
          「共に」を意味する接頭辞に、Phila「愛」とAction「行動」を合わせた CoPhilAction には、互いを認め合う「愛」が「行動」を生み、未来を切り拓くという理念が現れている。
          <br>
          多様な人とアイディアが交わる TEDxUTsukuba という大きな社会実験の場に集い、あなたらしい CoPhilAction のカタチを、自由に思い描いてほしい。
        </div>
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
            {{ $t('2019.concept.statement1') }}<br>
            {{ $t('2019.concept.statement2') }}<br>
            {{ $t('2019.concept.statement3') }}
          </article>
        </div>
      </b-collapse>
    </section> -->

    <section class="hero bg-red">
      <div class="hero-body">
        <section class="section">
          <h1 class="title is-0">
            <span class="">{{ $t('2019.participance.title') }}</span>
          </h1>
          <h1 class="subtitle has-text-white has-text-right">
            {{ $t('2019.participance.description') }}
          </h1>
          <div class="columns">
            <div class="column is-5">
              <div class="nmp-card-red">
                <div class="header" style="margin-bottom: 1rem;">
                  <span class="tag is-white is-medium"><font-awesome-icon :icon="['far', 'clock']" /> {{ $t('2019.participance.free.time') }}</span>
                </div>
                <div class="">
                  <h1 class="title is-2 has-text-white">{{ $t('2019.participance.free.title') }}</h1>
                  <p>{{ $t('2019.participance.free.intro') }}</p>
                  <br>
                  <ul>
                    <li><font-awesome-icon :icon="['fas', 'check-square']" style="color: white;" /> {{ $t('2019.participance.free.charge') }}</li>
                    <li><font-awesome-icon :icon="['fas', 'check-square']" style="color: white;" /> {{ $t('2019.participance.free.reservation') }}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="column is-7">
              <div class="nmp-card-red">
                <div class="header" style="margin-bottom: 1rem;">
                  <span class="tag is-white is-medium"><font-awesome-icon :icon="['far', 'clock']" /> {{ $t('2019.participance.premium.time') }}</span>
                </div>
                <div class="">
                  <h1 class="title is-2 has-text-white">{{ $t('2019.participance.premium.title') }}</h1>
                  <p>{{ $t('2019.participance.premium.intro') }}</p>
                  <br>
                  <ul>
                    <li><font-awesome-icon :icon="['fas', 'check-square']" style="color: white;" /> {{ $t('2019.participance.premium.charge') }}</li>
                    <li><font-awesome-icon :icon="['fas', 'check-square']" style="color: white;" /> {{ $t('2019.participance.premium.reservation') }}</li>
                  </ul>
                  <br>
                  <div class="columns is-multiline is-vcentered">
                    <div class="column is-12-tablet is-half-desktop has-text-right-mobile">
                      <p class="is-size-7" v-if="$i18n.locale == 'en'">{{ $t('2019.participance.premium.airmeet') }}</p>
                      <p class="is-size-7" v-if="$i18n.locale == 'ja'">{{ $t('2019.participance.premium.airmeet') }}</p>
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
import Movie from '~/components/Movie'
import Image_sp1 from '~/assets/speakers/2020/speaker-01.png'
import Image_sp2 from '~/assets/speakers/2020/speaker-02.png'
import Image_sp3 from '~/assets/speakers/2020/speaker-03.png'
import Image_sp4 from '~/assets/speakers/2020/speaker-04.png'
import Image_sp5 from '~/assets/speakers/2020/speaker-04.png'

export default {
  components: {
    Card, Movie
  },
  data(){
    return {
      src_sp1: Image_sp1,
      src_sp2: Image_sp2,
      src_sp3: Image_sp3,
      src_sp4: Image_sp4,
      src_sp5: Image_sp5,
      animated: 'true',
      interval: '5000',
      iconSize: 'is-large',
      pauseInfoType: 'is-dark',
      showContent: false,
      postItem: "",
      iconSize: 'is-large',
      gallery: false,
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
      speakers: [
            { id:1, title: "私は靴を履かないバーテンダー", name: "松島壮志", url: '/_nuxt/assets/speakers/2019/sp_2019_1.jpg' },
            { id:2, title: "私は靴を履かないバーテンダー", name: "山田玲司", url: '/_nuxt/assets/speakers/2019/sp_2019_2.jpg' },
            { id:3, title: "私は靴を履かないバーテンダー", name: "Leonid Dimaano / Annet Nakkazi", url: '/_nuxt/assets/speakers/2019/sp_2019_3-1.jpg' },
            { id:4, title: "私は靴を履かないバーテンダー", name: "Carol Inugai Dixon", url: '/_nuxt/assets/speakers/2019/sp_2019_4.jpg' }
          ],
          topImg: require(`~/assets/speakers/2019/sp_2019_1.jpg`),

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
        content: 'TEDxUTsukuba 2019 CoPhilAction'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://tedxutsukuba.com/events/2019'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Join us for our annual event on Nov. 10, 2019.'
      },
      {
        hid: 'og:author',
        property: 'og:author',
        content: 'Haruki Kinoshita and TEDxUTsukuba website team'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://www.tedxutsukuba.com/sns_banner_2019.png'
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
  }
}
</script>


<style scoped>
.bg-cophilaction {
  background-image: linear-gradient( 135deg, #81FFEF 10%, #F067B4 100%);
}
.itemContainer{
    display: flex;
}
img#top {
  width: 100vw;
  height: 40vh;
  object-fit: cover;
  object-position: center;
}
.textoverflow {
  color: white;
  font-size: 6rem;
  font-family: 'Helvetica Neue', 'Arial', sans-serif;
  left: 10vw;
  position: absolute;
  top: 25vh;
}
.is-red {
  background-color: red;
  color: white;
}
</style>
