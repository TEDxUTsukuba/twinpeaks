<template>
  <div id="wrap">
    <div id="wrap-layer">
      <section class="hero is-fullheight has-text-white">
        <div class="hero-body has-text-centered">
          <div class="container has-text-centered">
            <h1 class="title is-1 has-text-white">
              TED Talks
            </h1>
            <h1 class="subtitle is-4 has-text-white has-text-weight-light">
              Random Watchlist
            </h1>
            <div class="ted-embed-wrap" style="max-width:854px; margin: 5vh auto;">
              <div style="position:relative;height:0;padding-bottom:56.25%">
                <iframe
                  :src="`https://embed.ted.com/talks/lang/${radio}/${items[0].link}`" 
                  width="854"
                  height="480"
                  style="position:absolute;left:0;top:0;width:100%;height:100%"
                  frameborder="0"
                  scrolling="no"
                  allowfullscreen>
                </iframe>
              </div>
            </div>
            <i v-if="$ua.isFromSmartphone()" class="mdi mdi-chevron-down" style="font-size: 2rem;"/>
            <i v-else class="mdi mdi-chevron-down" style="font-size: 5rem;"/>
          </div>
        </div>
      </section>

      <section class="section has-text-light">
        <hr>
        <div v-for="item in tedtalkList" :key="item.title_ja">
          <nav class="level">
            <div class="level-left">
              <div class="level-item is-size-5">
                <h2 v-if="radio === 'ja'">{{ item.title_ja }}</h2>
                <h2 v-else-if="radio === 'zh-cn'">{{ item.title_zh_cn }}</h2>
                <h2 v-else class="has-text-weight-medium">{{ item.title_en }}</h2>
              </div>
              <div class="level-item">
                <p v-if="radio === 'ja'">{{ item.speaker_ja }}</p>
                <p v-else-if="radio === 'zh-cn'">{{ item.speaker_zh_cn }}</p>
                <p v-else>{{ item.speaker_en }}</p>
              </div>
            </div>
            <div class="level-right">
              <!-- <div class="level-item" v-if="!$ua.isFromSmartphone()">
                <p>{{ item.conference }}</p>
              </div> -->
              <div class="level-item">
                <a class="button is-rounded is-white is-outlined" :href="`https://www.ted.com/talks/${item.link}?language=${radio}`" target="_blank" rel="noopener noreferrer">Watch</a>
              </div>
            </div>
          </nav>
          <hr>
        </div>
      </section>

      <footer class="footer has-background-black has-text-centered" style="background-color: rgba(0, 0, 0, 0.1);">
        <nuxt-link to="/">
          <img src="~/assets/logo.png" style="max-width: 320px; width: 60%;">
        </nuxt-link>
        <p>TEDxUTsukuba &copy; All Rights Reserved. </p>
      </footer>

      <nav class="navbar is-fixed-bottom is-black" role="navigation" aria-label="main navigation">
        <div class="navbar-menu is-active">
          <div class="navbar-start">
            <nuxt-link class="navbar-item" to="/">
              <img
                src="~/assets/logo.png"
                alt="Lightweight UI components for Vue.js based on Bulma"
              >
            </nuxt-link>
          </div>
          <div class="navbar-end">
            <!-- <div class="navbar-item is-active">
              <p class="is-size-7 has-text-grey-light mb-6">表示言語 | Display Language | 显示语言</p>
            </div> -->
            <div class="navbar-item">
              <div class="block">
                <b-field position="is-centered">
                  <b-radio-button
                    v-model="radio"
                    name="name"
                    type="is-danger"
                    native-value="ja"
                    >
                    日本語
                  </b-radio-button>
                  <b-radio-button
                    v-model="radio"
                    name="name"
                    type="is-info"
                    native-value="en"
                    >
                    English
                  </b-radio-button>
                  <b-radio-button
                    v-model="radio"
                    name="name"
                    type="is-success"
                    native-value="zh-cn"
                    >
                    简体中文
                  </b-radio-button>
                </b-field>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import tedtalkList from '@/contents/tedtalks.json'

export default {
  layout: 'fullscreen',
  components: {
    
  },
  data(){
    return {
      tedtalkList: tedtalkList,
      // Default Language Setting
      radio: 'ja',
      isActive: false,
      // Talks
      items: [
        {
          title_ja: "失われた民主的議論の技術",
          title_en: "The lost art of democratic debate",
          title_zh_cn: "失落了的民主辩论艺术",
          speaker_ja: "マイケル・サンデル",
          speaker_en: "Micheal Sandel",
          speaker_zh_cn: "Micheal Sandel",
          conference: "TED2010",
          link: "michael_sandel_the_lost_art_of_democratic_debate",
          date_nominated: "2021/03/28"
        },
        {
          title_ja: "新しい経済の通貨：信頼",
          title_en: "The currency of the new economy is trust",
          title_zh_cn: "新型经济的货币是信用",
          speaker_ja: "レイチェル・ボッツマン",
          speaker_en: "Racheal Botsman",
          speaker_zh_cn: "Racheal Botsman",
          conference: "TEDGlobal 2012",
          link: "rachel_botsman_the_currency_of_the_new_economy_is_trust",
          date_nominated: "2016/07/20"
        },
        {
          title_ja: "集団の創造性をマネジメントする",
          title_en: "How to manage for collective creativity",
          title_zh_cn: "如何管理集体创造力",
          speaker_ja: "リンダ・ヒル",
          speaker_en: "Linda Hill",
          speaker_zh_cn: "Linda Hill",
          conference: "TEDGlobal 2012",
          link: "linda_hill_how_to_manage_for_collective_creativity",
          date_nominated: "2016/07/20"
        }
      ]
    }
  },
  methods: {
    popup_en() {
      this.$buefy.notification.open('Something happened')
    }
  }
}
</script>

<style lang="scss" scoped>
  div#wrap {
    background-color: #FC466B;
    background: linear-gradient(319deg, #fc5f7f 0%, #3e0aff 100%);
    // background-color: #663dff;
    // background-image: linear-gradient(319deg, #663dff 0%, #aa00ff 37%, #cc4499 100%);
    // background-color: #ff1493;
    // background-image: linear-gradient(319deg, #ff1493 0%, #0000ff 37%, #ff8c00 100%);
    background-attachment: fixed;
  }
  div#wrap-layer {
    background-color: #5a0dff;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg fill-opacity='0.14'%3E%3Cpath fill='%238918f8' d='M486 705.8c-109.3-21.8-223.4-32.2-335.3-19.4C99.5 692.1 49 703 0 719.8V800h843.8c-115.9-33.2-230.8-68.1-347.6-92.2C492.8 707.1 489.4 706.5 486 705.8z'/%3E%3Cpath fill='%23ab24f0' d='M1600 0H0v719.8c49-16.8 99.5-27.8 150.7-33.5c111.9-12.7 226-2.4 335.3 19.4c3.4 0.7 6.8 1.4 10.2 2c116.8 24 231.7 59 347.6 92.2H1600V0z'/%3E%3Cpath fill='%23c931e9' d='M478.4 581c3.2 0.8 6.4 1.7 9.5 2.5c196.2 52.5 388.7 133.5 593.5 176.6c174.2 36.6 349.5 29.2 518.6-10.2V0H0v574.9c52.3-17.6 106.5-27.7 161.1-30.9C268.4 537.4 375.7 554.2 478.4 581z'/%3E%3Cpath fill='%23e33fe1' d='M0 0v429.4c55.6-18.4 113.5-27.3 171.4-27.7c102.8-0.8 203.2 22.7 299.3 54.5c3 1 5.9 2 8.9 3c183.6 62 365.7 146.1 562.4 192.1c186.7 43.7 376.3 34.4 557.9-12.6V0H0z'/%3E%3Cpath fill='%23fc4cd9' d='M181.8 259.4c98.2 6 191.9 35.2 281.3 72.1c2.8 1.1 5.5 2.3 8.3 3.4c171 71.6 342.7 158.5 531.3 207.7c198.8 51.8 403.4 40.8 597.3-14.8V0H0v283.2C59 263.6 120.6 255.7 181.8 259.4z'/%3E%3Cpath fill='%23fd50c7' d='M1600 0H0v136.3c62.3-20.9 127.7-27.5 192.2-19.2c93.6 12.1 180.5 47.7 263.3 89.6c2.6 1.3 5.1 2.6 7.7 3.9c158.4 81.1 319.7 170.9 500.3 223.2c210.5 61 430.8 49 636.6-16.6V0z'/%3E%3Cpath fill='%23fe54b5' d='M454.9 86.3C600.7 177 751.6 269.3 924.1 325c208.6 67.4 431.3 60.8 637.9-5.3c12.8-4.1 25.4-8.4 38.1-12.9V0H288.1c56 21.3 108.7 50.6 159.7 82C450.2 83.4 452.5 84.9 454.9 86.3z'/%3E%3Cpath fill='%23fe58a3' d='M1600 0H498c118.1 85.8 243.5 164.5 386.8 216.2c191.8 69.2 400 74.7 595 21.1c40.8-11.2 81.1-25.2 120.3-41.7V0z'/%3E%3Cpath fill='%23fd5b91' d='M1397.5 154.8c47.2-10.6 93.6-25.3 138.6-43.8c21.7-8.9 43-18.8 63.9-29.5V0H643.4c62.9 41.7 129.7 78.2 202.1 107.4C1020.4 178.1 1214.2 196.1 1397.5 154.8z'/%3E%3Cpath fill='%23fc5f7f' d='M1315.3 72.4c75.3-12.6 148.9-37.1 216.8-72.4h-723C966.8 71 1144.7 101 1315.3 72.4z'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
    // background-color: #fc5f7f;
    // background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg fill-opacity='0.38'%3E%3Cpath fill='%23ff7871' d='M486 705.8c-109.3-21.8-223.4-32.2-335.3-19.4C99.5 692.1 49 703 0 719.8V800h843.8c-115.9-33.2-230.8-68.1-347.6-92.2C492.8 707.1 489.4 706.5 486 705.8z'/%3E%3Cpath fill='%23ff8f61' d='M1600 0H0v719.8c49-16.8 99.5-27.8 150.7-33.5c111.9-12.7 226-2.4 335.3 19.4c3.4 0.7 6.8 1.4 10.2 2c116.8 24 231.7 59 347.6 92.2H1600V0z'/%3E%3Cpath fill='%23ffa44f' d='M478.4 581c3.2 0.8 6.4 1.7 9.5 2.5c196.2 52.5 388.7 133.5 593.5 176.6c174.2 36.6 349.5 29.2 518.6-10.2V0H0v574.9c52.3-17.6 106.5-27.7 161.1-30.9C268.4 537.4 375.7 554.2 478.4 581z'/%3E%3Cpath fill='%23ffb837' d='M0 0v429.4c55.6-18.4 113.5-27.3 171.4-27.7c102.8-0.8 203.2 22.7 299.3 54.5c3 1 5.9 2 8.9 3c183.6 62 365.7 146.1 562.4 192.1c186.7 43.7 376.3 34.4 557.9-12.6V0H0z'/%3E%3Cpath fill='%23ffcc00' d='M181.8 259.4c98.2 6 191.9 35.2 281.3 72.1c2.8 1.1 5.5 2.3 8.3 3.4c171 71.6 342.7 158.5 531.3 207.7c198.8 51.8 403.4 40.8 597.3-14.8V0H0v283.2C59 263.6 120.6 255.7 181.8 259.4z'/%3E%3Cpath fill='%23ffd624' d='M1600 0H0v136.3c62.3-20.9 127.7-27.5 192.2-19.2c93.6 12.1 180.5 47.7 263.3 89.6c2.6 1.3 5.1 2.6 7.7 3.9c158.4 81.1 319.7 170.9 500.3 223.2c210.5 61 430.8 49 636.6-16.6V0z'/%3E%3Cpath fill='%23ffe038' d='M454.9 86.3C600.7 177 751.6 269.3 924.1 325c208.6 67.4 431.3 60.8 637.9-5.3c12.8-4.1 25.4-8.4 38.1-12.9V0H288.1c56 21.3 108.7 50.6 159.7 82C450.2 83.4 452.5 84.9 454.9 86.3z'/%3E%3Cpath fill='%23ffeb49' d='M1600 0H498c118.1 85.8 243.5 164.5 386.8 216.2c191.8 69.2 400 74.7 595 21.1c40.8-11.2 81.1-25.2 120.3-41.7V0z'/%3E%3Cpath fill='%23fff558' d='M1397.5 154.8c47.2-10.6 93.6-25.3 138.6-43.8c21.7-8.9 43-18.8 63.9-29.5V0H643.4c62.9 41.7 129.7 78.2 202.1 107.4C1020.4 178.1 1214.2 196.1 1397.5 154.8z'/%3E%3Cpath fill='%23ffff66' d='M1315.3 72.4c75.3-12.6 148.9-37.1 216.8-72.4h-723C966.8 71 1144.7 101 1315.3 72.4z'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
  }
  section.section {
    font-family: BlinkMacSystemFont, -apple-system, 'Hiragino Kaku Gothic Pro', 'Open Sans', sans-serif;
  }
  hr {
    height: 1px;
    background-color: rgba(255, 255, 255, 0.2);
  }
  .navbar-menu {
    background-color: #0a0a0a;
  }
  @media screen and (max-width: 1024px) {
    .navbar-start {
      display: none;
    }
  }
  .mdi {
    animation:1s ease-in 1s 5 alternate forwards running fuwafuwa;
  }
  @keyframes fuwafuwa {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .ted-embed-wrap {
    filter: drop-shadow(0px 12px 28px rgba(0,0,0,0.6));
  }
  .container {
    padding: 2rem 2rem;
  }
</style>