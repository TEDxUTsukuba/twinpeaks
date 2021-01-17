<template>
  <section id="wrapper-dark" style="width: 100vw;">
      
    <!-- <div class="columns is-mobile"> -->
      <!-- <img
          src="~/assets/wallpapers/speaker_ex1.jpg"
          alt="Lightweight UI components for Vue.js based on Bulma"
      >
      <h1 class="title textoverflow">Social Capital</h1> -->
      
      <div class="top-photoframe">
        <nuxt-link :to="localePath('/events/2020')"><img src = "~/assets/wallpapers/jijimuge-transparent.png" /></nuxt-link>
      </div>
      <section class="section has-text-centered has-text-weight-light has-text-white">
        <h1 class="title is-1 is-spaced">
          {{ $t('event.title1') }}<br class="mobile-br">{{ $t('event.title2') }}<br class="mobile-br">{{ $t('event.title3') }}
        </h1>
        <h1 class="subtitle is-5 has-text-weight-normal has-text-white">
          {{ $t('event.subtitle1') }}<br class="mobile-br">{{ $t('event.subtitle2') }}
        </h1>
        <br>
        <nuxt-link :to="localePath('/events/2020')" class="button is-gradient is-rounded">{{ $t('button.discover') }}</nuxt-link>
        <!-- <b-message :title="$t('notice.right-bottom.title')" type="is-warning" v-model="isAlertActive" aria-close-label="Close message">
          {{ $t('notice.right-bottom.detail') }} <a href="https://tiget.net/events/109783">{{ $t('2020.participance.premium.tiget') }}</a>
        </b-message> -->
      </section>

      <section class="hero bg-red">
        <div class="hero-body">
          <section class="section">
            <div class="columns is-multiline is-centered is-variable is-8">
                <div class="column is-5-widescreen is-4-desktop is-full-tablet is-full-mobile">
                  <img src="~/assets/logo/motto.png" style="width: 100%; max-width: 480px;">
                </div>
                <div class="column is-7-widescreen is-8-desktop is-full-tablet is-full-mobile">
                  <!-- <div class="nmp-card-red"> -->
                    <h1 v-if="$i18n.locale == 'ja'" class="title is-2 is-size-4-mobile has-text-weight-light">
                      {{ $t('intro.headline1') }}
                      <br>
                      {{ $t('intro.headline2') }}
                    </h1>
                    <h1 v-if="$i18n.locale == 'en'" class="title is-2 is-size-4-mobile has-text-weight-light">
                      {{ $t('intro.headline1') }}
                      <br>
                      {{ $t('intro.headline2') }}
                    </h1>
                    <hr>
                    <br>
                    <article class="is-size-6 has-text-light">
                      {{ $t('intro.description') }}
                    </article>
                    <br>
                    <div class="has-text-right">
                      <nuxt-link :to="localePath('/about')"><button class="button is-white is-rounded is-outlined">{{ $t('intro.button') }}</button></nuxt-link>
                    </div>
                </div>
             </div>
            </section>
        </div>
      </section>

      <section class="hero">
        <div class="columns is-multiline is-vcentered">
          <div class="column is-8-widescreen is-8-desktop is-full-tablet is-full-mobile">
            <Movie id="teaser" :vId='videoId3' classname="large" style="margin-left: 0;"></Movie>
          </div>
          <div class="column is-4-widescreen is-4-desktop is-full-tablet is-full-mobile has-text-centered">
            <img src="~/assets/logo/motto2.png" style="width: 100%; max-width: 280px;">
          </div>
        </div>
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
      <br>
      <h1 class="title is-2 has-text-centered">
        <span class="">{{ $t('news.title') }}</span>
      </h1>
      <br>
      <div class="columns is-multiline" id="notice">
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
      <p class="has-text-grey-light has-text-right">{{ $t('notice.last-modified')}}<time datetime="2020-12-22">2020/12/22</time></p>
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
      videoId1: 'yJpcvqCC0ww',
      videoId2: 'q_Es52kl6FQ',
      videoId3: 'ZbIEuwjpxp0',
      todayDate: Date.now(),
      eventDate: Date(2020, 11, 29, 0, 0, 0),
      isAlertActive: true
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
