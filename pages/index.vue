<template>
  <section id="wrapper-dark" style="width: 100vw;">
      
    <!-- <div class="columns is-mobile"> -->
      <!-- <img
          src="~/assets/wallpapers/speaker_ex1.jpg"
          alt="Lightweight UI components for Vue.js based on Bulma"
      >
      <h1 class="title textoverflow">Social Capital</h1> -->
      
      <div style="background: black;">
          <div class="top-photoframe">
            <nuxt-link :to="localePath('/events/2020')"><img src = "~/assets/wallpapers/jijimuge.jpg" /></nuxt-link>
            <Movie v-if="isEventDate" :vId='videoId1' :aPlay='autoplay'></Movie>
          </div>
          <section class="section has-text-centered has-text-weight-light has-text-white">
            <h1 class="title is-1 is-spaced">
              {{ $t('event.title1') }}<br class="mobile-br">{{ $t('event.title2') }}
            </h1>
            <h1 class="subtitle is-3 has-text-weight-normal has-text-white">
              {{ $t('event.subtitle') }}
            </h1>
            <br><br>
            <nuxt-link :to="localePath('/events/2020')" class="button is-gradient is-rounded is-medium">{{ $t('button.discover') }}</nuxt-link>
            <br><br>
            <a class="has-text-white" href="webcal:~/assets/event.ics" download>{{ $t('event.download') }}</a>
          </section>
      </div>

      <section class="hero bg-red">
        <div class="hero-body has-text-white">
          <section class="section">
            <div class="columns is-multiline is-centered">
              <div class="column is-5-widescreen is-full-desktop is-full-tablet is-full-mobile">
                <h1 class="title is-1 has-text-white is-size-5-mobile">
                  Ideas<br>Worth<br>Spreading
                </h1>
              </div>
              <div class="column is-7-widescreen is-full-desktop is-full-tablet is-full-mobile">
                <div class="nmp-card-red">
                  <article class="is-size-5 has-text-weight-bold">
                    {{ $t('intro.headline') }}
                  </article>
                  <hr>
                  <article class="is-size-6">
                    {{ $t('intro.description') }}
                  </article>
                  <br><br>
                  <div class="has-text-right">
                    <nuxt-link :to="localePath('/about')"><button class="button is-medium is-white is-rounded is-outlined">{{ $t('intro.button') }}</button></nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="section">
            <Movie id="teaser" :vId='videoId3' :aPlay='autoplay' :classname="large"></Movie>
          </section>
          <!-- <section class="section">
            <div class="columns is-mobile is-multiline">
              <div class="column is-3-tablet is-6-mobile">
                <figure class="image is-square">
                  <img class="image-box" src="https://bulma.io/images/placeholders/480x480.png">
                </figure>
              </div>
              <div class="column is-3-tablet is-6-mobile">
                <figure class="image is-square">
                  <img class="image-box" src="https://bulma.io/images/placeholders/480x480.png">
                </figure>
              </div>
              <div class="column is-3-tablet is-6-mobile">
                <figure class="image is-square">
                  <img class="image-box" src="https://bulma.io/images/placeholders/480x480.png">
                </figure>
              </div>
              <div class="column is-3-tablet is-6-mobile">
                <figure class="image is-square">
                  <img class="image-box" src="https://bulma.io/images/placeholders/480x480.png">
                </figure>
              </div>
            </div>
          </section> -->
        </div>
      </section>

      <!-- <section class="section">
          <h1 class="title is-1 is-0 has-text-centered">
            <span class="highlighter">Featured Talks</span>
          </h1>
          <div class="columns is-multiline">
            <card
              title="天才になる呪い"
              speaker="山田玲司"
              image_url="/_nuxt/assets/speakers/2019/sp_2019_3-1.jpg"
            >
              2020 / Personal growth
            </card>
            <card
              title="私は靴を履かないバーテンダー"
              speaker="松島壮志"
              image_url="/_nuxt/assets/speakers/2019/sp_2019_1.jpg"
            >
              2020 / Personal growth
            </card>
            <card
              title="数学とコンピュータの融合による新しい折り紙の世界"
              speaker="三谷純"
              image_url="/_nuxt/assets/speakers/2019/sp_2019_1.jpg"
            >
              2017 / Science
            </card>
          </div>
          <a class="button is-large nmp-button-light">Watch more talks</a>
      </section> -->

    <section class="section">
      <h1 class="title is-0">
        <span class="">{{ $t('news.title') }}</span>
      </h1>
      <div class="columns">
        <div class="column is-5-desktop">
          <Flip
            :title = "$t('notice.left-top.title')"
            :description = "$t('notice.left-top.description')"
            :detail = "$t('notice.left-top.detail')"
            :link = "$t('notice.left-top.link')"
            imageUrl = "/_nuxt/assets/speakers/2019/sp_2019_1.jpg"
           />
        </div>
        <div class="column is-7-desktop">
          <Flip
            :title = "$t('notice.left-bottom.title')"
            :description = "$t('notice.left-bottom.description')"
            :detail = "$t('notice.left-bottom.detail')"
            :link = "$t('notice.left-bottom.link')"
            imageUrl = ""
          />
        </div>
      </div>
      <div class="columns">
        <div class="column is-7-desktop">
          <Flip
            :title = "$t('notice.right-top.title')"
            :description = "$t('notice.right-top.description')"
            :detail = "$t('notice.right-top.detail')"
            :link = "$t('notice.right-top.link')"
            imageUrl = ""
          />
        </div>
        <div class="column is-5-desktop">
          <Flip
            :title = "$t('notice.right-bottom.title')"
            :description = "$t('notice.right-bottom.description')"
            :detail = "$t('notice.right-bottom.detail')"
            :link = "$t('notice.right-bottom.link')"
            imageUrl = ""
          />
        </div>
      </div>
    </section>
    <!-- <div class="text-divider"></div> -->
  </section>
</template>

<script>
import Card from '~/components/Card'
import Flip from '~/components/Flip'
import Movie from '~/components/Movie'
// const Card = () => import('~/components/Card')
// const Flip = () => import('~/components/Flip')
// const Movie = () => import('~/components/Movie')

export default {
  name: 'HomePage',

  components: {
    Card, Flip, Movie
  },
  data() {
    return {
      videoId1: 'ujhrcXJCBUw',
      videoId2: 'q_Es52kl6FQ',
      videoId3: 'ZbIEuwjpxp0',
      todayDate: Date.now(),
      eventDate: Date(2020, 11, 29, 0, 0, 0)
    }
  },
  methods: {
    compareDate () {
      if (todayDate < eventDate) {
        this.isEventDate = 'true'
      } else {
        this.isEventDate = 'false'
      }
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
    font-weight: 400 !important;
  }

  .bounce_box {
    background-color: #fff;
    border-radius: 25px;
    padding: 3rem 6rem;
  }
  .text-divider {
    background-color: #5B08B9;
    margin: 0 auto;
    width: 80%;
    height: 2px;
  }
</style>
