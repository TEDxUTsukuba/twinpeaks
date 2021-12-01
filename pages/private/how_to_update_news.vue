<template>
<div class="has-background-white has-text-dark">
  <section class="section content">
    <b-notification
      type="is-warning"
      has-icon
      role="alert">
      <b>OBSOLETE</b><br>
      このページは2021年10月をもって更新を停止します。最新のドキュメントは <a href="https://tedxutsukuba-knowledgebase.herokuapp.com/">KnowledgeBase</a> にてご覧ください。<br>
      This page will no longer be updated as of October 2021. Visit <a href="https://tedxutsukuba-knowledgebase.herokuapp.com/">KnowledgeBase</a> to read the latest document.
    </b-notification>
    <div class="has-text-centered" style="margin-top: 5rem;">
      <h1 class="title is-1">
        お知らせを追加する
      </h1>
      <h1 class="subtitle">
        How to update news
      </h1>
      <p>
        <nuxt-link to="/" class="has-text-info">トップページ</nuxt-link>や<nuxt-link to="news" class="has-text-info">お知らせのページ</nuxt-link>に最新情報を追加するための簡単なステップを説明します。
      </p>
    </div>
    <hr v-if="$ua.isFromSmartphone()">
    <b-notification type="is-danger" :closable="false" has-icon v-if="$ua.isFromSmartphone()">
      このページはPCやタブレットでの閲覧に最適化されています。This page is optimized for PCs and tablets. 
    </b-notification>
    <div>
      <hr>
      下記URLから管理画面にアクセスしてください。<br>ログインに必要なメールアドレスとパスワードは「U_アカウント情報」のドキュメントに記載されています。<br>
      <a href="https://edit.tedxutsukuba.com" class="has-text-info has-text-weight-bold" target="_blank">edit.tedxutsukuba.com</a>
      <hr>
      編集の手順を説明したスライドを作ってみました！<br>
    </div>
    <div id="teaser" style="margin-top: 3vh;">
      <figure class="image is-16by9">
        <iframe class="has-ratio" src="https://docs.google.com/presentation/d/e/2PACX-1vTXWOi21MoFS5Ndn-D6zw5M9AXKP17rCyHTUFb0mSOdqw_6AYMEKhRzH1ojV68ij6oeDcbnEEhVIbA6/embed?start=false&loop=false&delayms=3000" frameborder="0" width="800" height="450" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
      </figure>
    </div>
    <hr>
    <div>
      TEDxUTsukubaのウェブサイトを訪れた人の多くが最初に目にするトップページ。最新情報を定期的に発信していくことはとても大事です。「でもTwitterとかFacebookの方がタイムリーに見てもらえるのでは？」短時間にたくさんの人に閲覧・拡散してもらえるのはSNSの強みですよね。それに対してウェブサイトのお知らせは、Twitterのピン留め投稿とかInstagramのストーリーハイライトみたいに、長いスパンで見てもらうことを意図した「アーカイブ」としての意味合いが強いと思います。でもそれだけじゃ会社のプレスリリースみたいで味気ない。やっぱり読んでいて楽しいコンテンツじゃないとね。
      <a href="https://tedxnagoyau.com/articles/news/interview_with_the_designer_of_the_keyvisual" target="_blank" class="has-text-info is-size-7">TEDxNagoyaU</a>のNewsが、お知らせとブログのミックスみたいな感じで私はすごい好きです。価値あるアイディアを発信するってこういうことかも！
    </div>
  </section>
</div>
</template>

<script>
export default {
  head: {
    title: 'お知らせをを追加する',
    description: 'トップページ・お知らせのページにの最新情報を追加するための簡単なステップを説明します。',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 
        hid: 'og:description', 
        name: 'og:description', 
        content: "トップページ・お知らせのページにの最新情報を追加するための簡単なステップを説明します。" 
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
        content: 'お知らせを追加する'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://www.tedxutsukuba.com/private/how_to_update_news'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://www.tedxutsukuba.com/ogp/twitter_summary.png'
      }
    ]
  }
}
</script>
