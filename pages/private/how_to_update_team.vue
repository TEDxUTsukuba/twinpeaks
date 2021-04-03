<template>
  <section class="section content">
    <div class="has-text-centered" style="margin-top: 5rem;">
      <h1 class="title is-1">
        チームを更新する
      </h1>
      <h1 class="subtitle">
        How to update team
      </h1>
      <p>
        <nuxt-link to="/about/utsukuba">チーム紹介のページ</nuxt-link>に個別のイベントページを追加するための簡単なステップを説明します。
      </p>
    </div>
    <hr>
    <img src="/sample/Screenshot_2021-04-03 TEDxUTsukuba A Hub for Tsukuba's Ideas.png" style="box-shadow: 0px 10px 20px rgba(0,0,0,0.4);" alt="Event Info Image">
    <hr>
    <h1 class="title has-text-centered">
      Basic Usage
    </h1>
    <div class="notification">
      <h1 class="is-size-5">Open Google Sheets</h1>
      <a class="has-text-link" href="https://docs.google.com/spreadsheets/d/1WTm0XrjQ_fYoQgM-BmD0Il6zG4xrogzhz9sAJx-c1y8/edit?usp=sharing" target="_blank" rel="noopener noreferrer">TEDxUTsukuba Members Public Data</a>
      <p>
        下記のいずれかのGoogleアカウントで、このGoogleスプレッドシートにアクセスしてください。
      </p>
      <ul>
        <li>tedxtsukuba&#64;gmail.com</li>
        <li>tedxutsukuba&#64;gmail.com</li>
      </ul>
      <p>
        なお編集権限があるのは下記のアカウントと木下のアカウントのみですが、閲覧は誰でもできます。
      </p>
    </div>
    <div class="notification">
      <h1 class="is-size-5">Add Contents</h1>
      <p>
        各セルに情報を追加してください。お気に入りのTEDトークは、TED.comにアップロードされている動画に関しては、TED.comのリンクを<code>tedtalk</code>に記入するようにしてください。TED.comには無く、YouTubeにしか掲載されていないトークを載せたい場合は、<code>tedtalk</code>は空欄にして<code>tedtalk_alt</code>に記入してください。
      </p>
    </div> 
    <div class="notification">
      <h1 class="is-size-5">Add Portrait</h1>
      <p>
        お手数ですが、画像は下記メールアドレス宛に送付してください。その際に、ファイル名を名前にするなどして、誰が誰だかわかるようにしておいてください。
      </p>
    </div> 
    <p class="">
      <ul>
        <li>最終更新: 2021/04/03</li>
        <li>執筆者: 木下晴貴</li>
        <li>連絡先: harukikinoshita&#64;outlook.com</li>
      </ul>
    </p>
  </section>
</template>

<script>
export default {
  head: {
    title: 'イベントを追加する',
    description: 'イベント一覧ページに個別のイベントページを追加するための簡単なステップを説明します。',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 
        hid: 'og:description', 
        name: 'og:description', 
        content: "イベント一覧ページに個別のイベントページを追加するための簡単なステップを説明します。" 
      },
      { 
        hid: 'twitter:card', 
        name: 'twitter:card', 
        content: 'summary' 
      },
      { 
        hid: 'twitter:site', 
        name: 'twitter:site', 
        content: '@tedxutsukuba' 
      },
      { 
        hid: 'twitter:creator', 
        name: 'twitter:creator', 
        content: '@tedxutsukuba' 
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'イベントを追加する'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://www.tedxutsukuba.com/private/how_to_add_an_event'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://www.tedxutsukuba.com/twitter_summary.png'
      }
    ]
  }
}
</script>
