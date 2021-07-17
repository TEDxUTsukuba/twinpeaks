<template>
  <div class="has-background-white has-text-dark">
    <section class="hero is-halfheight" style="background-color: rgb(0, 192, 212);">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-1 has-text-white">
            <!-- <span style="background-color: #00c0d4; padding: 0.5rem 1rem;"> -->
              {{ $t('2020.participance.pass.title') }}
            <!-- </span> -->
          </h1>
        </div>
      </div>
    </section>
    <section class="section">
        <!-- <p v-if="pass !== 'jijimuge'">
          <span class="tag is-info is-primary is-medium">{{ $t('2020.participance.pass.inputpassword') }}</span>
        </p>
        <p v-else>
          <span class="tag is-info is-success is-medium">{{ $t('2020.participance.pass.success') }}</span>
        </p>
        <input class="input" v-model="pass" placeholder="Type password" style="width: 320px; margin-bottom: 3rem;"> -->
        <!-- <button v-on:click="toggle_switch()">Toggle Button</button> -->
        <!-- <div class="has-text-left" v-if="pass == 'jijimuge'"> -->
        <div class="columns is-multiline">
          <div v-for="(item, index) in items" :key="index" class="column is-half">
              <nuxt-link v-if="item.path" :to="item.path">
                <div class="notification is-white" style="box-shadow: rgba(150, 150, 151, 0.4) 0px 7px 20px 0px;">
                  <div class="columns is-vcentered is-mobile">
                    <div class="column is-3-fullhd is-3-widescreen is-3-desktop is-4-tablet is-3-mobile has-text-centered">
                      <i v-if="$ua.isFromSmartphone()" :class="`mdi mdi-${item.icon}`" aria-hidden="true" style="font-size: 2rem; margin: 0; color: #00c0d4;"></i>
                      <i v-else :class="`mdi mdi-${item.icon}`" aria-hidden="true" style="font-size: 4rem; margin: 0; color: #00c0d4;"></i>
                    </div>
                    <div class="column">
                      <p v-if="$i18n.locale == 'ja'" class="title is-size-5">{{ item.title_ja }}</p>
                      <p v-else class="title is-size-5">{{ item.title_en }}</p>
                      <p v-if="$i18n.locale == 'ja'" class="subtitle is-size-7">{{ item.title_en }}</p>
                      <p v-else class="subtitle is-size-7">{{ item.title_ja }}
                      <p style="margin-top: -1rem;"><span v-if="item.isPublished == false" class="tag is-danger has-text-weight-bold">{{ $t('button.unavailable') }}</span></p>
                    </div>
                  </div>
                </div>
              </nuxt-link>
              <a v-if="item.url" :href="item.url" target="_blank">
                <div class="notification is-white" style="box-shadow: rgba(150, 150, 151, 0.4) 0px 7px 20px 0px;">
                  <div class="columns is-vcentered is-mobile">
                    <div class="column is-3-fullhd is-3-widescreen is-3-desktop is-4-tablet is-3-mobile has-text-centered">
                      <i v-if="$ua.isFromSmartphone()" :class="`mdi mdi-${item.icon}`" aria-hidden="true" style="font-size: 2rem; margin: 0; color: #00c0d4;"></i>
                      <i v-else :class="`mdi mdi-${item.icon}`" aria-hidden="true" style="font-size: 4rem; margin: 0; color: #00c0d4;"></i>
                    </div>
                    <div class="column">
                      <p v-if="$i18n.locale == 'ja'" class="title is-size-5">{{ item.title_ja }} <i class="mdi mdi-open-in-new" /></p>
                      <p v-else class="title is-size-5">{{ item.title_en }} <i class="mdi mdi-open-in-new" /></p>
                      <p v-if="$i18n.locale == 'ja'" class="subtitle is-size-7">{{ item.title_en }}</p>
                      <p v-else class="subtitle is-size-7">{{ item.title_ja }}
                      <p style="margin-top: -1rem;"><span v-if="item.isPublished == false" class="tag is-danger has-text-weight-bold">{{ $t('button.unavailable') }}</span></p>
                    </div>
                  </div>
                </div>
              </a>
          </div>
        </div>

        <div class="has-text-left content">
          <p>その他</p>
          <ul>
            <li><nuxt-link to="../tedtalks" class="has-text-info">TEDtalks Random Watchlist</nuxt-link></li>
            <li><nuxt-link to="/private/showroom" class="has-text-info">イケてるTEDxイベントを集めてみた</nuxt-link></li>
          </ul>
        </div>
    </section>
    <section class="hero has-background-light">
      <div class="hero-body">
        <section class="section">
          <h2 class="title is-3">お役立ちリンク集</h2>
            <h3 class="title is-4">規約・ガイドライン</h3>
            <p class="subtitle">対象: 全員</p>
            <div v-for="item in usefulLinks.general" :key="item.title" class="item">
              <a :href="item.url" class="has-text-dark has-text-weight-bold" target="_blank">{{ item.title }} <i class="mdi mdi-open-in-new" /></a>
              <span :class="`tag is-info is-${item.filetype} is-uppercase`">{{ item.filetype }}</span>
              <p class="has-text-grey is-size-7">{{ item.desc }}</p>
            </div>
            <h3 class="title is-4">情報収集・コミュニティ</h3>
            <p class="subtitle">対象: 全員</p>
            <div v-for="item in usefulLinks.community" :key="item.title" class="item">
              <a :href="item.url" class="has-text-dark has-text-weight-bold" target="_blank">{{ item.title }} <i class="mdi mdi-open-in-new" /></a>
              <span :class="`tag is-info is-${item.filetype} is-uppercase`">{{ item.filetype }}</span>
              <p class="has-text-grey is-size-7">{{ item.desc }}</p>
            </div>
            <h3 class="title is-4">プロダクション</h3>
            <p class="subtitle">対象: 主にEnja, Venue, Participantなど演出に関わる人</p>
            <div v-for="item in usefulLinks.production" :key="item.title" class="item">
              <a :href="item.url" class="has-text-dark has-text-weight-bold" target="_blank">{{ item.title }} <i class="mdi mdi-open-in-new" /></a>
              <span :class="`tag is-info is-${item.filetype} is-uppercase`">{{ item.filetype }}</span>
              <p class="has-text-grey is-size-7">{{ item.desc }}</p>
            </div>
            <h3 class="title is-4">アセット</h3>
            <p class="subtitle">対象: PR, デザイン, ウェブ担当者</p>
            <div v-for="item in usefulLinks.assets" :key="item.title" class="item">
              <a :href="item.url" class="has-text-dark has-text-weight-bold" target="_blank">{{ item.title }} <i class="mdi mdi-open-in-new" /></a>
              <span :class="`tag is-info is-${item.filetype} is-uppercase`">{{ item.filetype }}</span>
              <p class="has-text-grey is-size-7">{{ item.desc }}</p>
            </div>
            <h3 class="title is-4">ライセンス</h3>
            <p class="subtitle">対象: ライセンスホルダー</p>
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
  layout: "sidebar",
  data() {
   return {
    pass: '',
    items: [
      {
        title_ja: "デジタル名刺を作成する",
        title_en: "Create your own digital business card",
        icon: 'card-account-details',
        path: '/private/business-card-generator',
      },
      {
        title_ja: 'メンバー情報を追加・更新する',
        title_en: 'Edit member information',
        icon: 'account-box-multiple',
        path: '/private/how_to_update_team',
      },
      {
        title_ja: 'ウェブサイトのお知らせを追加・更新する',
        title_en: 'Edit an update to the news',
        icon: 'file-document-edit',
        path: '/private/how_to_update_news'
      },
      {
        title_ja: 'TEDxUTsukuba.comにイベント情報を追加・更新する',
        title_en: 'Edit event information on TEDxUTsukuba.com',
        icon: 'calendar-edit',
        path: '/private/manage-event',
      },
      {
        title_ja: 'TED.comのイベント情報を編集する',
        title_en: 'Edit event information on TED.com',
        icon: 'calendar-edit',
        url: 'https://organize.ted.com/'
      },
      {
        title_ja: 'ウェブサイトの閲覧回数などを調べる',
        title_en: 'See website analysis',
        icon: 'google-analytics',
        url: 'https://analytics.google.com'
      },
    ]
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