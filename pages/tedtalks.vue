<template>
  <div id="wrap">
    <section class="section has-text-white">
      <div class="has-text-centered">
        <h1 class="title is-1 has-text-centered has-text-white">
          TED Talks
        </h1>
        <h1 class="subtitle is-3 has-text-white">
          Random Watchlist
        </h1>
        <br>
        <div class="block">
          <b-field position="is-centered">
            <b-radio-button
              v-model="radio"
              name="name"
              type="is-danger"
              native-value="ja">
              日本語
            </b-radio-button>
            <b-radio-button
              v-model="radio"
              name="name"
              type="is-info"
              native-value="en">
              English
            </b-radio-button>
            <b-radio-button
              v-model="radio"
              name="name"
              type="is-success"
              native-value="zh-cn">
              中文
            </b-radio-button>
          </b-field>
        </div>
      </div>
      <hr>
      <div v-for="item in items" :key="item.title">
        <nav class="level">
          <div class="level-left">
            <div class="level-item is-size-5">
              <h2 v-if="radio === 'ja'">{{ item.title_ja }}</h2>
              <h2 v-else-if="radio === 'zh-cn'">{{ item.title_cn }}</h2>
              <h2 v-else class="has-text-weight-medium">{{ item.title_en }}</h2>
            </div>
            <div class="level-item">
              <p v-if="radio === 'ja'">{{ item.speaker_ja }}</p>
              <p v-else>{{ item.speaker_en }}</p>
            </div>
          </div>
          <div class="level-right">
            <div class="level-item" v-if="!$ua.isFromSmartphone()">
              <p>{{ item.conference }}</p>
            </div>
            <div class="level-item">
              <a class="button is-rounded is-white is-outlined" :href="`${item.link}?language=${radio}`" target="_blank" rel="noopener noreferrer">Watch</a>
            </div>
          </div>
        </nav>
        <hr>
      </div>
      <div style="max-width:854px; margin: 0 auto;">
        <div style="position:relative;height:0;padding-bottom:56.25%">
          <iframe
            src="https://embed.ted.com/talks/lang/ja/michael_sandel_the_lost_art_of_democratic_debate" 
            width="854"
            height="480"
            style="position:absolute;left:0;top:0;width:100%;height:100%"
            frameborder="0"
            scrolling="no"
            allowfullscreen>
          </iframe>
        </div>
      </div>
    </section>
    <footer class="footer has-background-black has-text-centered" style="background-color: rgba(0, 0, 0, 0.1);">
      <nuxt-link to="/">
        <img src="~/assets/logo.png" style="max-width: 320px; width: 60%;">
      </nuxt-link>
      <p>TEDxUTsukuba &copy; All Rights Reserved. </p>
    </footer>
  </div>
</template>

<script>

export default {
  layout: 'fullscreen',
  components: {
    
  },
  data(){
    return {
      radio: 'ja',
      items: [
        {
          title_ja: "失われた民主的議論の技術",
          title_en: "The lost art of democratic debate",
          title_cn: "失落了的民主辩论艺术",
          speaker_ja: "マイケル・サンデル",
          speaker_en: "Micheal Sandel",
          conference: "TED2010",
          link: "https://www.ted.com/talks/michael_sandel_the_lost_art_of_democratic_debate",
          date_nominated: "2021/03/28"
        },
        {
          title_ja: "新しい経済の通貨：信頼",
          title_en: "The currency of the new economy is trust",
          title_cn: "新型经济的货币是信用",
          speaker_ja: "レイチェル・ボッツマン",
          speaker_en: "Racheal Botsman",
          conference: "TEDGlobal 2012",
          link: "https://www.ted.com/talks/rachel_botsman_the_currency_of_the_new_economy_is_trust",
          date_nominated: "2016/07/20"
        },
        {
          title_ja: "集団の創造性をマネジメントする",
          title_en: "How to manage for collective creativity",
          title_cn: "如何管理集体创造力",
          speaker_ja: "リンダ・ヒル",
          speaker_en: "Linda Hill",
          conference: "TEDGlobal 2012",
          link: "https://www.ted.com/talks/linda_hill_how_to_manage_for_collective_creativity",
          date_nominated: "2016/07/20"
        }
      ]
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
  section.section {
    font-family: 'Montserrat', BlinkMacSystemFont, -apple-system, 'Hiragino Kaku Gothic Pro', 'Open Sans', sans-serif;
  }
  .navbar.is-black {
    background-color: #ff0000 !important;
  }
  hr {
    height: 1px;
  }
</style>