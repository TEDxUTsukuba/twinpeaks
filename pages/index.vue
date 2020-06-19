<template>
  <section style="width: 100vw;">
    <!-- <div class="columns is-mobile"> -->
      <img
          src="~/assets/wallpapers/speaker_ex1.jpg"
          alt="Lightweight UI components for Vue.js based on Bulma"
      >
      <h1 class="title textoverflow">Social Capital</h1>
      <section class="section">
        <div class="container">
          <h1 class="title is-1 has-text-centered">Featured Talks</h1>
          <div class="columns">
            <card
              title="天才になる呪い"
              speaker="山田玲司"
              icon="github"
            >
              Open source on <a href="https://github.com/buefy/buefy">
                GitHub
              </a>
            </card>
            <card
              title="私は靴を履かないバーテンダー"
              speaker="松島壮志"
              icon="cellphone-link"
            >
              Watch now
            </card>
            <card
              title="数学とコンピュータの融合による新しい折り紙の世界"
              speaker="三谷純"
              icon="alert-decagram"
            >
              Built with <a href="https://vuejs.org/">
                Vue.js
              </a> and <a href="http://bulma.io/">
                Bulma
              </a>
            </card>
          </div>
        </div>
      </section>

    <section class="hero is-medium" style="background-color: #5B08B9;">
      <div class="hero-body has-text-white">
        <div class="columns is-centered">
          <div class="column is-10 has-text-centered">
            <h1 class="title is-1 has-text-white">
              Stay safe in your community
            </h1>
            <h1 class="subtitle has-text-white">
              TEDxLondon copy
            </h1>
            <article>
              This week we’ll be joined by award-winning British science journalist and broadcaster Angela Saini to discuss the resurgence of race science, the persistent myths that still exist about race in medicine and how they are manifesting during the coronavirus pandemic.
            </article>
            <div>
              <img src="http://www.tsukuba.ac.jp/en/application/themes/tsukuba/images/logo_footer.png">
            </div>
            <a class="button is-medium is-white is-rounded is-outlined" href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000164708_00001.html">厚生労働省</a>
            <a class="button is-medium is-white is-rounded is-outlined" href="https://www.city.tsukuba.lg.jp/shisei/1010123/index.html">つくば市</a>
            <a class="button is-medium is-white is-rounded is-outlined" href="http://www.tsukuba.ac.jp/about/antidisaster/covid-19-list.html">筑波大学</a>


          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <Flip
        title_ja = "新型コロナウイルスへの対応"
        title_en = "Our response to COVID-19"
        description_en = "irure quorum esse amet multos noster irure legam veniam quorum esse quid tamen fugiat quorum eram tempor nisi ipsum multos veniam culpa export elit elit eram labore elit eram duis fugiat irure aute veniam summis quorum elit aliqua legam multos tempor fore irure ipsum summis nisi fugiat aute aliqua culpa minim quid dolore duis aute ipsum enim elit quorum labore"
        description_ja = "日本国民は、正当に選挙された国会における代表者を通じて行動し、われらとわれらの子孫のために、諸国民との協和による成果と、わが国全土にわたつて自由のもたらす恵沢を確保し、政府の行為によつて再び戦争の惨禍が起ることのないやうにすることを決意し、ここに主権が国民に存することを宣言し、この憲法を確定する。そもそも国政は、国民の厳粛な信託によるものであつて、その権威は国民に由来し、その権力は国民の代表者がこれを行使し、その福利は国民がこれを享受する。これは人類普遍の原理であり、この憲法は、かかる原理に基くものである。われらは、これに反する一切の憲法、法令及び詔勅を排除する。"
        imageUrl = "imageUrl"
       />
    </section>
    <!-- <div class="text-divider"></div> -->
    <section class="section">
      <Flip
        title_ja = "一緒に活動しませんか？"
        title_en = "Be a part of us"
        description_en = "irure quorum esse amet multos noster irure legam veniam quorum esse quid tamen fugiat quorum eram tempor nisi ipsum multos veniam culpa export elit elit eram labore elit eram duis fugiat irure aute veniam summis quorum elit aliqua legam multos tempor fore irure ipsum summis nisi fugiat aute aliqua culpa minim quid dolore duis aute ipsum enim elit quorum labore"
        description_ja = "日本国民は、正当に選挙された国会における代表者を通じて行動し、われらとわれらの子孫のために、諸国民との協和による成果と、わが国全土にわたつて自由のもたらす恵沢を確保し、政府の行為によつて再び戦争の惨禍が起ることのないやうにすることを決意し、ここに主権が国民に存することを宣言し、この憲法を確定する。そもそも国政は、国民の厳粛な信託によるものであつて、その権威は国民に由来し、その権力は国民の代表者がこれを行使し、その福利は国民がこれを享受する。これは人類普遍の原理であり、この憲法は、かかる原理に基くものである。われらは、これに反する一切の憲法、法令及び詔勅を排除する。"
        imageUrl = "imageUrl"
       />
    </section>
    <!-- <div class="text-divider"></div> -->
    <section class="section">
      <div class="container">
        <div class="columns is-centered has-text-left">
          <div class="column is-one-third card">
            <div class="font-awesome">
              <h1 class="title is-1">Interested in joining the TEDxUTsukuba partnership?</h1>
              <a href="">Contact us</a>
            </div>
          </div>
          <div class="column is-one-third card">
            <div class="font-awesome">
              <h1 class="title is-1">Be part of the event experience, become a volunteer.</h1>
              <a href="">Sign up</a>
            </div>
          </div>
          <div class="column is-one-third card">
            <div class="font-awesome">
              <h1 class="title is-1">Be part of the event experience, become a volunteer.</h1>
              <a href="">Sign up</a>
            </div>
          </div>
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


<style scoped>
  .textoverflow {
    color: white;
    font-size: 6rem;
    font-family: 'Helvetica Neue', 'Arial', sans-serif;
    left: 10vw;
    position: absolute;
    top: 30vh;
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
</style>
