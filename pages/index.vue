<template>
  <section style="width: 100vw;">
      <section class="hero is-white">
        <img src="~/assets/wallpapers/tokyo.svg" style="height: 100vh;">
      </section>
      <section class="hero">
        {{ $t('message') }}
    </section>
    <!-- <div class="columns is-mobile"> -->
      <!-- <img
          src="~/assets/wallpapers/speaker_ex1.jpg"
          alt="Lightweight UI components for Vue.js based on Bulma"
      >
      <h1 class="title textoverflow">Social Capital</h1> -->
      <section class="hero is-medium" style="background-color: red;">
        <div class="hero-body has-text-white">
          <div class="wide" style="width: 80vw; margin: 0 auto;">
            <div class="columns is-centered">
              <div class="column is-5-desktop is-6-tablet is-full-mobile">
                <h1 class="title has-text-white is-1">
                  Ideas<br>Worth<br>Spreading
                </h1>
              </div>
              <div class="column is-7-desktop is-6-tablet is-full-mobile">
                <article class="is-size-3 has-text-weight-bold">
                  {{ $t('msg_intro') }}
                </article>
                <hr>
                <article class="is-size-4">
                  Managed by passionate volunteers both in and around the campus, TEDxUTsukuba has shed light on relevant topics - from liberal arts to science, local stories to global issues.
                </article>
                <br>
                <nuxt-link to="/inspire"><button class="button is-large is-white is-rounded is-outlined">Discover</button></nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="wide" style="width: 80vw; margin: 0 auto;">
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
        </div>
      </section>

    <section class="hero is-medium" style="background-color: #5B08B9;">
      <div class="hero-body has-text-white">
        <div class="wide" style="width: 80vw; margin: 0 auto; max-width: 1280px;">

            <h1 class="title is-1 has-text-white has-text-centered">
              Our response to COVID-19
            </h1>
            <h1 class="subtitle has-text-white has-text-centered">
              新型コロナウイルスへの対応
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
          </div>
      </div>
    </section>
    <section class="section">
      <div class="wide" style="width: 80vw; margin: 0 auto;">
      <div class="columns">
        <div class="column is-6-desktop is-full-mobile">
          <Flip
            title_ja = "パートナー企業募集"
            title_en = "Apply for Partners"
            description_en = "irure quorum esse amet multos noster irure legam veniam quorum esse quid tamen fugiat quorum eram tempor nisi ipsum multos veniam culpa export elit elit eram labore elit eram duis fugiat irure aute veniam summis quorum elit aliqua legam multos tempor fore irure ipsum summis nisi fugiat aute aliqua culpa minim quid dolore duis aute ipsum enim elit quorum labore"
            description_ja = "日本国民は、正当に選挙された国会における代表者を通じて行動し、われらとわれらの子孫のために、諸国民との協和による成果と、わが国全土にわたつて自由のもたらす恵沢を確保し、政府の行為によつて再び戦争の惨禍が起ることのないやうにすることを決意し、ここに主権が国民に存することを宣言し、この憲法を確定する。そもそも国政は、国民の厳粛な信託によるものであつて、その権威は国民に由来し、その権力は国民の代表者がこれを行使し、その福利は国民がこれを享受する。これは人類普遍の原理であり、この憲法は、かかる原理に基くものである。われらは、これに反する一切の憲法、法令及び詔勅を排除する。"
            imageUrl = "imageUrl"
           />
        </div>
        <div class="column is-6-desktop is-full-mobile">
          <Flip
            title_ja = "一緒に活動しませんか？"
            title_en = "Be a part of us"
            description_en = "irure quorum esse amet multos noster irure legam veniam quorum esse quid tamen fugiat quorum eram tempor nisi ipsum multos veniam culpa export elit elit eram labore elit eram duis fugiat irure aute veniam summis quorum elit aliqua legam multos tempor fore irure ipsum summis nisi fugiat aute aliqua culpa minim quid dolore duis aute ipsum enim elit quorum labore"
            description_ja = "日本国民は、正当に選挙された国会における代表者を通じて行動し、われらとわれらの子孫のために、諸国民との協和による成果と、わが国全土にわたつて自由のもたらす恵沢を確保し、政府の行為によつて再び戦争の惨禍が起ることのないやうにすることを決意し、ここに主権が国民に存することを宣言し、この憲法を確定する。そもそも国政は、国民の厳粛な信託によるものであつて、その権威は国民に由来し、その権力は国民の代表者がこれを行使し、その福利は国民がこれを享受する。これは人類普遍の原理であり、この憲法は、かかる原理に基くものである。われらは、これに反する一切の憲法、法令及び詔勅を排除する。"
            imageUrl = "imageUrl"
           />
         </div>
       </div>
     </div>
    </section>
    <!-- <div class="text-divider"></div> -->
    <section class="section">
      <div class="wide" style="width: 80vw; margin: 0 auto;">
        <div class="columns content is-centered has-text-left">
          <nuxt-link to="/">
            <div class="column reflection" style="margin: 20px; padding: 40px; min-height: 320px;">
              <div class="font-awesome">
                <h1 class="title is-2">Interested in joining the TEDxUTsukuba partnership?</h1>
              </div>
            </div>
          </nuxt-link>
          <nuxt-link to="/">
            <div class="column reflection" style="margin: 20px; padding: 40px; min-height: 320px;">
              <div class="font-awesome">
                <h1 class="title is-2">Sign up for a volunteer, make a special event happen.</h1>
              </div>
            </div>
          </nuxt-link>
          <nuxt-link to="/">
            <div class="column reflection" style="margin: 20px; padding: 40px; min-height: 320px;">
              <div class="font-awesome">
                <h1 class="title is-2">Be part of the event experience, become a volunteer.</h1>
              </div>
            </div>
          </nuxt-link>
        </div>
        <a class="icon-circle">
          <font-awesome-icon :icon="['fab', 'facebook-square']" />
        </a>
        <a class="icon-circle">
          <font-awesome-icon :icon="['fab', 'instagram']" />
        </a>
        <a class="icon-circle">
          <font-awesome-icon :icon="['fab', 'twitter']" />
        </a>
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
