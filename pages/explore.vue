<template>
  <section id="wrapper-dark">
    <section id="app" class="section has-text-white">
      <h1 class="title has-text-left">{{ $t('2020.participance.pass.title') }}</h1>
      <input class="input" v-model="pass" placeholder="Type password" style="width: 320px">
      <!-- {{ pass }} -->
      <!-- <button v-on:click="toggle_switch()">Toggle Button</button> -->
      <div v-if="pass !== 'jijimuge'">
        <p>{{ $t('2020.participance.pass.inputpassword') }}</p>
      </div>
      <div v-else>
        <p>ログイン</p>
        <p>工事中！</p>
        <!-- <Movie id="teaser" :vId='videoId1' :aPlay='autoplay' :classname="large"></Movie> -->
      </div>
    </section>
    <section class="section">
      <h1 class="title">お役立ちリンク集 | Useful Links</h1>
        <h2 class="title is-4">規約・ガイドライン</h2>
        <div v-for="item in usefulLinks.general" :key="item.title" class="item">
          <a :href="item.url" class="has-text-light has-text-weight-bold">{{ item.title }}</a>
          <span :class="`tag is-${item.filetype}`">{{ item.filetype }}</span>
          <p class="has-text-grey-light is-size-7">{{ item.desc }}</p>
        </div>
        <h2 class="title is-4">情報収集・コミュニティ</h2>
        <div v-for="item in usefulLinks.community" :key="item.title" class="item">
          <a :href="item.url" class="has-text-light has-text-weight-bold">{{ item.title }}</a>
          <span :class="`tag is-${item.filetype}`">{{ item.filetype }}</span>
          <p class="has-text-grey-light is-size-7">{{ item.desc }}</p>
        </div>
        <h2 class="title is-4">アセット</h2>
        <div v-for="item in usefulLinks.assets" :key="item.title" class="item">
          <a :href="item.url" class="has-text-light has-text-weight-bold">{{ item.title }}</a>
          <span :class="`tag is-${item.filetype}`">{{ item.filetype }}</span>
          <p class="has-text-grey-light is-size-7">{{ item.desc }}</p>
        </div>
        <h2 class="title is-4">翻訳</h2>
        <div v-for="item in usefulLinks.translation" :key="item.title" class="item">
          <a :href="item.url" class="has-text-light has-text-weight-bold">{{ item.title }}</a>
          <span :class="`tag is-${item.filetype}`">{{ item.filetype }}</span>
          <p class="has-text-grey-light is-size-7">{{ item.desc }}</p>
        </div>
        <h2 class="title is-4">ライセンスホルダー向け</h2>
        <div v-for="item in usefulLinks.portal" :key="item.title" class="item">
          <a :href="item.url" class="has-text-light has-text-weight-bold">{{ item.title }}</a>
          <span :class="`tag is-${item.filetype}`">{{ item.filetype }}</span>
          <p class="has-text-grey-light is-size-7">{{ item.desc }}</p>
        </div>
    </section>
  </section>
</template>

<script>
 export default {
   components: {

  },
  data() {
   return {
    pass: ''
   }
  },
  methods: {
   toggle_switch: function() {
    this.isActive = !this.isActive
   }
  },
  asyncData() {
    const usefulLinks = require(`~/contents/usefulLinks.json`)
    return {
      usefulLinks
    }
  }
 }
</script>

<style lang="scss" scoped>
  span.tag {
    color: white;
    font-weight: bold;
  }
  span.is-website {
    background-color: #666666;
  }
  span.is-pdf {
    background-color:#ff6666;
  }
  span.is-data {
    background-color: #6666ff;
  }
  h2.title {
    margin-top: 5rem;
    color: white;
  }
  .item {
    margin-bottom: 1.5rem;
  }
</style>