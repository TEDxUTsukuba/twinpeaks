<template>
  <section id="wrapper" style="width: 100vw;">
      <section class="hero is-white">
        <!-- <img src="~/assets/wallpapers/tokyo.svg" style="height: 100vh;"> -->
      </section>
    <!-- <div class="columns is-mobile"> -->
      <!-- <img
          src="~/assets/wallpapers/speaker_ex1.jpg"
          alt="Lightweight UI components for Vue.js based on Bulma"
      >
      <h1 class="title textoverflow">Social Capital</h1> -->
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
                  <article class="is-size-4 has-text-weight-bold">
                    {{ $t('intro.headline') }}
                  </article>
                  <hr>
                  <article class="is-size-5">
                    {{ $t('intro.description') }}
                  </article>
                  <br>
                  <nuxt-link to="/inspire"><button class="button is-large is-white is-rounded is-outlined">Discover</button></nuxt-link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section class="section">
          <h1 class="title is-1 has-text-centered">
            Featured Talks
          </h1>
          <h1 class="subtitle has-text-centered">
            おすすめのトーク
          </h1>
          <div class="columns is-multiline">
            <card
              title="天才になる呪い"
              speaker="山田玲司"
              icon="github"
            >
              2020 / Personal growth
            </card>
            <card
              title="私は靴を履かないバーテンダー"
              speaker="松島壮志"
              icon="cellphone-link"
            >
              2020 / Personal growth
            </card>
            <card
              title="数学とコンピュータの融合による新しい折り紙の世界"
              speaker="三谷純"
              icon="alert-decagram"
            >
              2017 / Science
            </card>
          </div>
      </section>

    <section class="hero" style="background-color: #5B08B9;">
      <div class="hero-body has-text-white">
        <section class="section">
            <h1 class="title is-1 has-text-white has-text-centered">
              Our response to COVID-19
            </h1>

            <article>
              From the very beginning of the outbreak, TEDxUTsukuba has always been following the guidelines from university officials and local authorities.
            </article>
            <!-- <div>
              <img src="http://www.tsukuba.ac.jp/en/application/themes/tsukuba/images/logo_footer.png">
            </div> -->

            <div class="content has-text-white">
              <b-collapse :open="false" position="is-bottom" aria-id="contentIdForA11y1">
                <a class="button is-white is-rounded is-outlined" slot="trigger" slot-scope="props" aria-controls="contentIdForA11y1">
                    <b-icon :icon="!props.open ? 'menu-down' : 'menu-up'"></b-icon>
                    {{ !props.open ? 'Read more' : 'Read less' }}
                </a>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus.
                </p>
                <h3 class="has-text-white">About Event Info</h3>
                <p>
                    Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
                </p>

                <ul>
                  <li>検温等の実施</li>
                  <li>検温等の実施</li>
                  <li>検温等の実施</li>
                </ul>
                <h3 class="has-text-white">About meeting</h3>
                <p>
                    Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
                </p>
                <h3 class="has-text-white">See also</h3>
                <a class="button is-medium is-white is-rounded is-outlined" href="https://www.city.tsukuba.lg.jp/shisei/1010123/index.html">つくば市 / City of Tsukuba</a>
                <a class="button is-medium is-white is-rounded is-outlined" href="http://www.tsukuba.ac.jp/about/antidisaster/covid-19-list.html">筑波大学 / University of Tsukuba</a>
              </b-collapse>

            </div>
          </section>
      </div>
    </section>

    <section class="section">
      <div class="columns">
        <div class="column is-6-desktop is-full-mobile">
          <Flip
            :title = "$t('notice.left.title')"
            :description = "$t('notice.left.description')"
            :detail = "$t('notice.left.detail')"
            imageUrl = "imageUrl"
           />
        </div>
        <div class="column is-6-desktop is-full-mobile">
          <Flip
            :title = "$t('notice.right.title')"
            :description = "$t('notice.right.description')"
            :detail = "$t('notice.right.detail')"
            imageUrl = "imageUrl"
           />
         </div>
       </div>
    </section>
    <!-- <div class="text-divider"></div> -->
    <section class="section">
        <h1 class="title is-1 has-text-centered">
          {{ $t('social.title')}}
        </h1>
        <p class="has-text-centered">
          <a class="icon-circle" href="https://www.facebook.com/tedxutsukuba/">
            <font-awesome-icon :icon="['fab', 'facebook-square']" />
          </a>
          <a class="icon-circle" href="https://www.instagram.com/tedxutsukuba/">
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </a>
          <a class="icon-circle" href="https://www.twitter.com/tedxutsukuba/">
            <font-awesome-icon :icon="['fab', 'twitter']" />
          </a>
        </p>
    </section>
    <section class="section">

        <div class="columns content is-centered has-text-left">
          <nuxt-link to="/" style="width: 33%;">
            <div class="column reflection" style="margin: 20px; padding: 40px; min-height: 320px;">
              <div class="font-awesome">
                <h1 class="title is-2 is-size-4-mobile">{{ $t('rcm.left.title') }}</h1>
                <h1 class="title is-5 is-size-6-mobile">{{ $t('rcm.left.description') }}</h1>
              </div>
            </div>
          </nuxt-link>
          <nuxt-link to="/" style="width: 33%;">
            <div class="column reflection" style="margin: 20px; padding: 40px; min-height: 320px;">
              <div class="font-awesome">
                <h1 class="title is-2 is-size-4-mobile">{{ $t('rcm.center.title') }}</h1>
                <h1 class="title is-5 is-size-6-mobile">{{ $t('rcm.center.description') }}</h1>
              </div>
            </div>
          </nuxt-link>
          <nuxt-link to="/" style="width: 33%;">
            <div class="column reflection" style="margin: 20px; padding: 40px; min-height: 320px;">
              <div class="font-awesome">
                <h1 class="title is-2 is-size-4-mobile">{{ $t('rcm.right.title') }}</h1>
                <h1 class="title is-5 is-size-6-mobile">{{ $t('rcm.right.description') }}</h1>
              </div>
            </div>
          </nuxt-link>
        </div>
    </section>

  </section>
</template>

<script>
import Card from '~/components/Card'
import Flip from '~/components/Flip'

export default {
  name: 'HomePage',

  components: {
    Card, Flip
  }
}
</script>


<style lang="scss" scoped>
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
  .icon-circle {
    /* color: #0a265c */
    /* color: #002366; */
    color: #5B08B9;
    font-size: 48px;
    margin: 10px;
  }
  .text-divider {
    background-color: #5B08B9;
    margin: 0 auto;
    width: 80%;
    height: 2px;
  }
  .reflection {
    background-color: white;
    border: 10px solid #5B08B9;
    .title {
      color: #5B08B9;
    }
    &:hover {
      background-color: #5B08B9;
      border: 10px solid #5B08B9;
      .title {
        color: white;
      }
    }
  }
</style>
