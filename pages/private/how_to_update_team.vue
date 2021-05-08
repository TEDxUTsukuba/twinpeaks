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
        <nuxt-link to="/about/utsukuba">チーム紹介のページ</nuxt-link>を更新するための簡単なステップを説明します。
      </p>
    </div>
    <hr v-if="$ua.isFromSmartphone()">
    <b-notification type="is-danger" :closable="false" has-icon v-if="$ua.isFromSmartphone()">
      このページはPCやタブレットでの閲覧に最適化されています。This page is optimized for PCs and tablets. 
    </b-notification>
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
        下記の凡例を参考に、セルに情報を追加してください。
      </p>
      <div class="table-container">
        <table class="table is-size-7">
          <tr>
            <td>family_name_{ja/en}</td>
            <td>苗字 {日本語表記/英語表記}</td>
            <td></td>
          </tr>
          <tr>
            <td>given_name_{ja/en}</td>
            <td>名前 {日本語表記/英語表記}</td>
            <td></td>
          </tr>
          <tr>
            <td>role</td>
            <td>役割</td>
            <td>チーム名でもよいですが、具体的に curator とか書いた方がいいかも。</td>
          </tr>
          <tr>
            <td>college_{ja/en}</td>
            <td>所属学類または研究群 {日本語表記/英語表記}</td>
            <td>参考: <a class="is-size-7 has-text-primary" href="https://www.tsukuba.ac.jp/about/outline-je/" target="_blank" rel="noopener noreferrer">組織，職名の日英表記トップ</a></td>
          </tr>
          <tr>
            <td>home_state_{ja/en}</td>
            <td>出身の都道府県・州など {日本語表記/英語表記}</td>
            <td>自分が "home" と呼びたい場所を書いてください。</td>
          </tr>
          <tr>
            <td>keyword</td>
            <td>自分を表す3つのキーワード</td>
            <td>自分の「好きな物」を書いてしまう人がいますが...そうではない</td>
          </tr>
          <tr>
            <td>tedtalk</td>
            <td>オススメしたいTED/TEDxトークのリンク</td>
            <td>(TED.comで公開されている場合)</td>
          </tr>
          <tr>
            <td>tedtalk_alt</td>
            <td>オススメしたいTED/TEDxトークのリンク</td>
            <td>(YouTubeにしかない場合)</td>
          </tr>
        </table>
      </div>
      <p><strong>TED</strong>トークのほとんどはTED.comとYouTubeの両方で公開されています。一方で<strong>TEDx</strong>トークは主にYouTubeで公開されており、ごく一部のトークのみTED.comで公開されています。<br><br>
      <strong>TEDとYouTubeの両方で公開されているトークをオススメしたい場合</strong>
      <ul>
        <li>TED.comのURLを<code>tedtalk</code>に貼り付ける</li>
        <li><code>tedtalk_alt</code>と<code>tedtalk_alt_meta</code>は空欄にする</li>
      </ul>
      <strong>YouTubeにしか掲載されていないトークをオススメしたい場合</strong>
      <ul>
        <li>YouTubeで、共有ボタン<i class="mdi mdi-share" />から<code>https://youtu.be/</code>で始まるURLを取得し、<code>tedtalk_alt</code>に貼り付ける*</li>
        <li><code>tedtalk_alt_meta</code>にスピーカーの名前とトークのタイトルを記入する（日本語・英語どちらでもOK）</li>
        <li><code>tedtalk</code>は空欄にする</li>
      </ul>
      * <code>https://www.youtube.com/</code>で始まるURLは使わないようにしてください。
      </p>
    </div> 
    <div class="notification">
      <h1 class="is-size-5">Add Portrait</h1>
      <p>
        お手数ですが、画像はSlackまたはメールで送付してください。その際に、ファイル名を名前にするなどして、誰が誰だかわかるようにしておいてください。
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
    title: 'チームを更新する',
    description: 'チーム紹介のページを更新するための簡単なステップを説明します。',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 
        hid: 'og:description', 
        name: 'og:description', 
        content: "チーム紹介のページを更新するための簡単なステップを説明します。" 
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
        content: 'チームを更新する'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://www.tedxutsukuba.com/private/how_to_update_team'
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
