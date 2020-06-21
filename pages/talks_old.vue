<template>
  <section class="section">
    <div class="columns is-variable is-6 is-multiline is-centered">
      <div class="column is-one-third" v-for = 'sp in speakers'
      :key = 'sp.id'>
        <div class="card-image">
          <figure class="image is-3by2">
            <img :src = 'sp.url' />
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">{{ sp.title }}</p>
              <p class="subtitle is-6">{{ sp.name }}</p>
            </div>
          </div>
          <div class="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris.
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return {
      speakers: [
        {
          id:14,
          year: 2019,
          eventName: "2019",
          title: "私は靴を履かないバーテンダー",
          name: "松島壮志",
          name_alt: "Takeshi Matsushima",
          position: "",
          url: '/_nuxt/assets/speakers/2019/sp_2019_1.jpg'
        },
        {
          id:13,
          year: 2019,
          eventName: "2019",
          title: "天才になる呪い",
          name: "山田玲司",
          name_alt: "Reiji Yamada",
          position: "",
          url: '/_nuxt/assets/speakers/2019/sp_2019_2.jpg'
        },
        {
          id:12,
          year: 2019,
          eventName: "2019",
          title: "Breaking the invisible walls",
          name: "Leonid Dimaano / Annet Nakkazi",
          name_alt: "レオニド ディマノ / アネット ナカジ",
          position: "",
          url: '/_nuxt/assets/speakers/2019/sp_2019_3-1.jpg'
        },
        {
          id:11,
          year: 2019,
          eventName: "2019",
          title: "Puzzling Pieces",
          name: "Carol Inugai Dixon",
          name_alt: "キャロル 犬飼 ディクソン",
          position: "",
          url: '/_nuxt/assets/speakers/2019/sp_2019_4.jpg'
        },
        // {
        //   id:10,
        //   year: 2019,
        //   eventName: "live2019",
        //   title: "How to deconstruct racism, one headline at a time",
        //   name: "Barathunde Thurston",
        //   name_alt: "バラトゥンド サーストン",
        //   url: ''
        //
        // },
        // {
        //   id:9,
        //   year: 2019,
        //   eventName: "live2019",
        //   title: "What reading slowly taught me about reading",
        //   name: "Jacqueline Woodson",
        //   name_alt: "ジャックリーン ウッドソン",
        //   url: ''
        // },
        {
          id:5,
          year: 2017,
          eventName: "2017",
          title: "",
          name: "西森千咲",
          name_alt: "Chisaki Nishimori",
          position: "筑波大学人間学群心理学類卒業・ITコンサルティング企業勤務",
          url: ''
        },
        {
          id:6,
          year: 2017,
          eventName: "2017",
          title: "",
          name: "的場悠人",
          name_alt: "Yuto Matoba",
          position: "筑波大学人文・文化学群比較文化学類3年",
          url: ''
        },
        {
          id:7,
          year: 2017,
          eventName: "2017",
          title: "",
          name: "渡和由",
          name_alt: "Kazuyoshi Watari",
          position: "筑波大学芸術系准教授",
          url: ''
        },
        {
          id:8,
          year: 2017,
          eventName: "2017",
          title: "",
          name: "木村友輔",
          name_alt: "Yusuke Kimura",
          position: "筑波大学体育専門学群3年",
          url: ''
        },
        {
          id:1,
          year: 2016,
          eventName: "2016",
          title: "Building Bridges through Translation",
          name: "Ginny Tapley Takemori",
          name_alt: "竹森ジニー",
          position: "Literature Translator",
          url: ''
        },
        {
          id:2,
          year: 2016,
          eventName: "2016",
          title: "数学とコンピュータの融合による新しい折り紙の世界",
          name: "三谷純",
          name_alt: "Jun Mitani",
          position: "筑波大学大学院システム情報系情報工学域教授",
          url: ''
        },
        {
          id:3,
          year: 2016,
          eventName: "2016",
          title: "あなたの「当たり前」が当たり前じゃなくなるとき、どうするか？",
          name: "仲井健人",
          name_alt: "Kento Nakai",
          position: "筑波大学大学院人間総合科学研究科障害科学専攻",
          url: ''
        },
        {
          id:4,
          year: 2016,
          eventName: "2016",
          title: "なんで私が自転車でかまどを運ぶのか？",
          name: "山口大空翔",
          name_alt: "Takuto Yamaguchi",
          position: "筑波大学ローカルデザイン研究室修士2年",
          url: ''
        },



      ],
      topImg: require(`~/assets/speakers/2019/sp_2019_1.jpg`)
    }
  }
}
</script>

<style scoped>
.card {
  /* margin: 1.25vw; */
  padding: 0;
}
</style>
