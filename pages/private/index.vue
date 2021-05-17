<template>
  <div>
    <section class="hero has-background-white">
      <div class="hero-body">
        <section class="section">
          <div class="content has-text-centered">
            <h1 class="title is-1">{{ $t('2020.participance.pass.title') }}</h1>
            <!-- <p v-if="pass !== 'jijimuge'">
              <span class="tag is-info is-primary is-medium">{{ $t('2020.participance.pass.inputpassword') }}</span>
            </p>
            <p v-else>
              <span class="tag is-info is-success is-medium">{{ $t('2020.participance.pass.success') }}</span>
            </p>
            <input class="input" v-model="pass" placeholder="Type password" style="width: 320px; margin-bottom: 3rem;"> -->
            <!-- <button v-on:click="toggle_switch()">Toggle Button</button> -->
            <!-- <div class="has-text-left" v-if="pass == 'jijimuge'"> -->
            <div class="has-text-left">
              <p>デジタル名刺を作成する</p>
              <ul>
                <li><nuxt-link to="private/business-card-generator" class="has-text-info">Digital Business Card Generator</nuxt-link></li>
              </ul>
              <br>
              <p>ウェブサイトのニュースを追加・更新する</p>
              <ul>
                <li><nuxt-link to="private/how_to_update_news" class="has-text-info">ニュースを更新する (編集中)</nuxt-link></li>
              </ul>
              <br>
              <p>メンバー情報を追加・更新する</p>
              <ul>
                <li><nuxt-link to="private/how_to_update_team" class="has-text-info">チームを更新する</nuxt-link></li>
              </ul>
              <br>
              <p>イベント（新歓などを含む）の情報を追加・更新する</p>
              <ul>
                <li><nuxt-link to="private/how_to_add_an_event" class="has-text-info">TEDxUTsukubaのイベントページにイベントを追加する</nuxt-link></li>
                <li><a href="https://organize.ted.com/" target="_blank" class="has-text-info">TED.comにイベント情報を追加する <i class="mdi mdi-open-in-new" /></a> <span class="tag is-info">個人のTED Accountでログインが必要 <i class="mdi mdi-login-variant" /></span></li>
              </ul>
              <br>
              <p>ウェブサイトの閲覧回数などを調べる</p>
              <ul>
                <li><a href="https://analytics.google.com" target="_blank" class="has-text-info">Google Analytics <i class="mdi mdi-open-in-new" /></a> <span class="tag is-info">tedxutsukuba&#64;gmail.comでログインが必要 <i class="mdi mdi-login-variant" /></span></li>
              </ul>
              <br>
              <p>Flickrにイベントの画像をアップロードする</p>
              <ul>
                <li><a href="https://www.flickr.com/" target="_blank" class="has-text-info">Flickr <i class="mdi mdi-open-in-new" /></a> <span class="tag is-info">tedxutsukuba&#64;yahoo.comでログインが必要 <i class="mdi mdi-login-variant" /></span></li>
              </ul>
            </div>
          </div>
          </section>
        </div>
    </section>
    <section class="hero has-background-light">
      <div class="hero-body">
        <section class="section">
          <h2 class="title is-3">お役立ちリンク集</h2>
            <h3 class="title is-4">規約・ガイドライン (対象: 全員)</h3>
            <div v-for="item in usefulLinks.general" :key="item.title" class="item">
              <a :href="item.url" class="has-text-dark has-text-weight-bold" target="_blank">{{ item.title }} <i class="mdi mdi-open-in-new" /></a>
              <span :class="`tag is-info is-${item.filetype} is-uppercase`">{{ item.filetype }}</span>
              <p class="has-text-grey is-size-7">{{ item.desc }}</p>
            </div>
            <h3 class="title is-4">プロダクション (対象: 主にEnja, Venue, Participant担当者)</h3>
            <div v-for="item in usefulLinks.production" :key="item.title" class="item">
              <a :href="item.url" class="has-text-dark has-text-weight-bold" target="_blank">{{ item.title }} <i class="mdi mdi-open-in-new" /></a>
              <span :class="`tag is-info is-${item.filetype} is-uppercase`">{{ item.filetype }}</span>
              <p class="has-text-grey is-size-7">{{ item.desc }}</p>
            </div>
            <h3 class="title is-4">情報収集・コミュニティ (対象: 全員)</h3>
            <div v-for="item in usefulLinks.community" :key="item.title" class="item">
              <a :href="item.url" class="has-text-dark has-text-weight-bold" target="_blank">{{ item.title }} <i class="mdi mdi-open-in-new" /></a>
              <span :class="`tag is-info is-${item.filetype} is-uppercase`">{{ item.filetype }}</span>
              <p class="has-text-grey is-size-7">{{ item.desc }}</p>
            </div>
            <h3 class="title is-4">アセット (対象: PR, デザイン, ウェブ担当者)</h3>
            <div v-for="item in usefulLinks.assets" :key="item.title" class="item">
              <a :href="item.url" class="has-text-dark has-text-weight-bold" target="_blank">{{ item.title }} <i class="mdi mdi-open-in-new" /></a>
              <span :class="`tag is-info is-${item.filetype} is-uppercase`">{{ item.filetype }}</span>
              <p class="has-text-grey is-size-7">{{ item.desc }}</p>
            </div>
            <h3 class="title is-4">ライセンス (対象: ライセンスホルダー)</h3>
            <div v-for="item in usefulLinks.license" :key="item.title" class="item">
              <a :href="item.url" class="has-text-dark has-text-weight-bold" target="_blank">{{ item.title }} <i class="mdi mdi-open-in-new" /></a>
              <span :class="`tag is-info is-${item.filetype} is-uppercase`">{{ item.filetype }}</span>
              <p class="has-text-grey is-size-7">{{ item.desc }}</p>
            </div>
            <h3 class="title is-4">翻訳</h3>
            <div v-for="item in usefulLinks.translation" :key="item.title" class="item">
              <a :href="item.url" class="has-text-dark has-text-weight-bold" target="_blank">{{ item.title }} <i class="mdi mdi-open-in-new" /></a>
              <span :class="`tag is-info is-${item.filetype} is-uppercase`">{{ item.filetype }}</span>
              <p class="has-text-grey is-size-7">{{ item.desc }}</p>
            </div>
          </section>
        </div>
    </section>
  </div>
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
    const usefulLinks = require(`~/references/usefulLinks.json`)
    return {
      usefulLinks
    }
  }
 }
</script>

<style lang="scss" scoped>
  span.tag is-info {
    color: white;
    font-weight: bold;
  }
  span.is-website {
    background-color: #999999;
  }
  span.is-pdf {
    background-color:#ff6666;
  }
  span.is-data {
    background-color: #6666ff;
  }
  span.is-community {
    background-color: hsl(171, 100%, 41%);
  }
  span.is-console {
    background-color: hsl(141, 53%, 53%);
  }
  h3.title {
    margin-top: 4rem;
  }
  .item {
    margin-bottom: 1.5rem;
  }
</style>