<template>
  <section id="wrapper-dark">
    <section class="hero is-medium">
      <div class="hero-body has-text-centered">
        <h1 class="title is-3 is-spaced">
          {{ $t('notice.left-top.title') }}
        </h1>
        <h1 class="subtitle">
          {{ $t('notice.left-top.description') }}
        </h1>
      </div>
    </section>
    <section class="section has-text-white">
      <article>
        <br>
        TEDxUTsukubaで過去にチケットサービスとして使用していたPeatix（ピーティックス）において、2020年10月16日～17日において第三者からの不正アクセスを受けたことが報告されました。これにより、「氏名」「メールアドレス」「暗号化されたパスワード」等のユーザーの個人情報が最大６７７万件引き出された事実が判明しております。（なお、クレジットカード情報および金融機関口座情報などの決済関連情報、イベント参加履歴、参加者向けアンケートフォーム機能で取得したデータ、住所、電話会社などの情報が引き出された事実は確認されていないようです。）その他については現在調査中とのことです。詳細は以下のURLをご覧ください。
        <br><br>
        <a href="https://peatix.com/event/1721625?utm_source=curated&utm_medium=ptxtop&utm_campaign=curated-events">Peatixへの不正アクセス事象に関するお詫びとお知らせ</a>
        <br><br>
        過去にこのサービスでチケットを利用した皆様には、ご心配をおかけすることになってしまい申し訳ございません。
        つきましては、本件に該当する方々は念のためPeatixやPeatixと同じパスワードを設定した他社サービス全てのパスワードの変更をお願いいたします。
        また、弊団体およびTEDxTsukubaで開催されたイベントにおいて、Peatixを利用したイベントは以下の通りです。
        <br>
        <div class="content">
          <ul>
            <li>2017年度　TEDxUTsukuba「moving」</li>
            <li>2017年度　TEDxUTsukuba「joyn’」</li>
          </ul>
        </div>
        なお、本件で不明な点がございましたら以下までお問い合わせください。
        <br><br>
        〔お問い合わせ先〕
        <br>
        <span class="has-text-weight-bold">Peatix Japan株式会社</span>
        <br>
        Email:　cs&#64;peatix.com
        <br>
        <span class="has-text-weight-bold">TEDxUTsukuba</span>
        <br>
        Email:　tedxutsukuba&#64;gmail.com
        <br><br>
        TEDxUTsukuba オーガナイザー
        <br>
        Coleen Melecio
      </article>
    </section>
    <section class="section has-text-white">
      <article>
          Peatix, which is a ticket service we used at TEDxUTsukuba in the past, attacked by a third party from October 16th to 17th, 2020. It was reported that up to 6.77 million personal information such as "name", "email address", and " password" have been extracted. (It seems that the fact that payment-related information such as credit card information and financial institution account information, event participation history, data acquired by the questionnaire form function for participants, address, telephone company, etc. was extracted has not been confirmed. It is said that other matters are currently under investigation. Please see the following URL for details.
          <br><br>
          <a href="https://peatix.com/event/1721625?utm_source=curated&utm_medium=ptxtop&utm_campaign=curated-events">Peatixへの不正アクセス事象に関するお詫びとお知らせ</a>
          <br><br>
          We apologize for any inconvenience caused by this incident. It is officially advised to change the passwords of other services that have the same passwords as Peatix. 
          <br><br>
          The following events held by our organization used Peatix: 
          <br>
          <div class="content">
            <ul>
              <li>2017　TEDxUTsukuba「moving」</li>
              <li>2016　TEDxUTsukuba「joyn’」</li>
            </ul>
          </div>
          For further information please contact the following:
          <br><br>
          <span class="has-text-weight-bold">Peatix Japan</span>
          <br>
          Email:　cs&#64;peatix.com 
          <br>
          <span class="has-text-weight-bold">TEDxUTsukuba</span>
          <br>
          Email:　tedxutsukuba&#64;gmail.com 
          <br><br>
          TEDxUTsukuba Organizer
          <br>
          Coleen Melecio
      </article>
    </section>
  </section>
</template>

<script>
export default {
  head() {
    return {
      meta: [
        { 
        hid: 'twitter:card', 
        name: 'twitter:card', 
        content: 'summary_large_image' 
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
          content: '2018年以前のTEDxUTsukubaにご参加くださった皆さまへ'
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://tedxutsukuba.com/notice/2020/11/22'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Peatixの不正アクセス事象に関するご確認のお願い'
        },
        {
          hid: 'og:author',
          property: 'og:author',
          content: 'Haruki Kinoshita and TEDxUTsukuba website team'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://www.tedxutsukuba.com/20201122.jpg'
        },
        { 
          hid: 'og:site_name', 
          name: 'og:site_name', 
          content: 'Notice' 
        }
      ]
    }
  }
}
</script>
