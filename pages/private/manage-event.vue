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
        イベントを追加する
      </h1>
      <h1 class="subtitle">
        How to add an event
      </h1>
      <p>
        <nuxt-link to="/events/" class="has-text-info">イベント一覧ページ</nuxt-link>に個別のイベントページを追加するための簡単なステップを説明します。
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
    </div>
    <p class="notification">
      <ul>
        <li>最終更新: 2021/03/23</li>
        <li>執筆者: 木下晴貴</li>
        <li>連絡先: harukikinoshita&#64;outlook.com</li>
      </ul>
    </p>
  </section>
</div>
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
        content: 'https://www.tedxutsukuba.com/private/manage-event'
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
