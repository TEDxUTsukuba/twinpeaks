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
            <nuxt-link to="/events/2020"><img src = "~/assets/wallpapers/jijimuge.png" /></nuxt-link>
          </div>
          <section class="section has-text-centered">
            <h1 class="title is-1 is-spaced">
              <span class="has-text-weight-light has-text-white">{{ $t('event.title') }}</span>
            </h1>
            <h1 class="subtitle is-3">
              <span class="has-text-weight-normal has-text-white">{{ $t('event.title2') }}</span>
            </h1>
            <br><br>
            <nuxt-link to="/events/2020" class="button is-white is-rounded is-medium is-outlined">{{ $t('event.button') }}</nuxt-link>
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
                    <nuxt-link to="/about"><button class="button is-medium is-white is-rounded is-outlined">{{ $t('intro.button') }}</button></nuxt-link>
                  </div>
                </div>
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
            imageUrl = "/_nuxt/assets/speakers/2019/sp_2019_1.jpg"
           />
        </div>
        <div class="column is-7-desktop">
          <Flip
            :title = "$t('notice.left-bottom.title')"
            :description = "$t('notice.left-bottom.description')"
            :detail = "$t('notice.left-bottom.detail')"
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
            imageUrl = ""
          />
        </div>
        <div class="column is-5-desktop">
          <Flip
            :title = "$t('notice.right-bottom.title')"
            :description = "$t('notice.right-bottom.description')"
            :detail = "$t('notice.right-bottom.detail')"
            imageUrl = ""
          />
        </div>
      </div>
    </section>
    <!-- <div class="text-divider"></div> -->

    <section class="hero bg-dark">
      <div class="hero-body has-text-centered">
        <section class="section">
        <h1 class="title is-2 has-text-centered">
            <span class="">{{ $t('social.title') }}</span>
          </h1>
          <a class="icon-circle fb" href="https://www.instagram.com/tedxutsukuba/">
            <font-awesome-icon :icon="['fab', 'facebook-square']" />
          </a>
          <a class="icon-circle ig" href="https://www.instagram.com/tedxutsukuba/">
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </a>
          <a class="icon-circle tw" href="https://www.instagram.com/tedxutsukuba/">
            <font-awesome-icon :icon="['fab', 'twitter']" />
          </a>
        </section>

        <section class="section">
          <h1 class="title is-2 has-text-centered">
            <span class="">{{ $t('covid19-info.title') }}</span>
          </h1>
          <p>{{ $t('covid19-info.description')}}</p>
          
          <!-- <div>
            <img src="http://www.tsukuba.ac.jp/en/application/themes/tsukuba/images/logo_footer.png">
          </div> -->

          <div class="content has-text-white">
            <b-collapse :open="false" position="is-bottom" aria-id="contentIdForA11y1">
              <a class="button is-medium is-white is-rounded is-outlined" slot="trigger" slot-scope="props" aria-controls="contentIdForA11y1" style="margin: 3rem auto;">
                  <b-icon :icon="!props.open ? 'menu-down' : 'menu-up'"></b-icon>
                  {{ !props.open ? 'Read more' : 'Read less' }}
              </a>
              <br><br>
              <div class="column has-text-left">
                <h1 class="title is-2">団体の活動</h1>
                <ul>
                  <li>3密を避けた会議やリモートワークを実施しています。</li>
                  <li>日毎に団体メンバーの体温を管理し、体調の優れない者の活動は自粛しています。</li>
                  <li>活動前の機材の消毒や手足の消毒、マスクの着用を行っています。</li>
                  <li>スピーカー・パフォーマー・パートナーの皆さまとは上記に留意しコンタクトを取っています。</li>
                </ul>
                <h1 class="title is-2">団体の活動</h1>
                <ul>
                  <li>例年の対面式のイベントから、オンラインの配信に変更しました。</li>
                  <li>撮影および配信会場では、換気を徹底し十分な空間を確保します。</li>
                  <li>一度に同じ場所に多くの関係者が集まらないよう、時間を分けて作業を行います。</li>
                  <li>スピーカーとのセッション等、マスクを外す必要のある場面ではアクリル板による仕切りを設置します。</li>
                </ul>
                <br>
                <p>今後もTEDxUTsukubaは、感染拡大の抑止と関係者の安全確保を最優先に、政府や自治体の方針も踏まえながら、追加の対応を検討・実施していきます。筑波大学および地方自治体の感染対策も合わせてご確認ください。</p>
                <a class="button is-medium is-white is-rounded is-outlined" href="http://www.tsukuba.ac.jp/about/antidisaster/covid-19-list.html">{{ $t('covid19-info.link.university') }}</a>
                <a class="button is-medium is-white is-rounded is-outlined" href="https://www.city.tsukuba.lg.jp/shisei/1010123/index.html">{{ $t('covid19-info.link.city') }}</a>
                <a class="button is-medium is-white is-rounded is-outlined" href="https://www.pref.ibaraki.jp/shokorodo/chusho/shogyo/2020korona/guideline.html">{{ $t('covid19-info.link.prefecture') }}</a>
              </div>
            </b-collapse>

          </div>
      </section>
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
