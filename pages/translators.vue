<template>
  <section id="wrapper-dark">
    <section class="section">
      <div class="nmp-card">
        <h1 class="title is-1 is-spaced">
          TED translators について
        </h1>
        <h1 class="subtitle">
          About TED translators
        </h1>
      </div>
    </section>
    <section class="hero">
      <div class="hero-body has-text-centered">
        <Movie id="teaser" :vId='videoId'></Movie>
      </div>
    </section>
    <section class="section has-text-white">
      <article>
        主に英語のTEDトークに世界の各言語で字幕をつけてアイデアを広めます。世界中で多くのボランティアが参加しているクラウドソーシング・プロジェクトです。TED のアイデアに賛同する、熱意ある人なら、誰でも参加できます。外国語が得意な人、映像翻訳をやってみたい人、翻訳経験のある人は「翻訳」で参加できます。翻訳元言語の高い語学力が必要になります。外国語が得意でない人も、TEDxトークの字幕作成に必須の日本語の「文字起こし」で活躍できます。
      </article>
      <br>
      <ul>
        <li><a href="https://www.ted.com/people/translators">Translate - TED.com (English)</a></li>
        <li><a href="https://translations.ted.com/TED_Translators_%E3%81%B8%E3%81%AE%E7%99%BB%E9%8C%B2">TED Translators への登録 - TED Translators Wiki (日本語)</a></li>
      </ul>
    <hr>
      <article>
        また、上記のプロジェクトとは別に、本ウェブサイトの翻訳に関しても、皆さまのご協力を必要としています。まだ翻訳されていない文章を新たに翻訳する、あるいは、修正が必要と思われる箇所を指摘するという形で、より良いウェブサイトの制作にお力添えいただけますと幸いです。
      </article>
      <br>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSeGADXgQymefKwe_HPvna2hufR9IBRYjPhUDC1gRnehCNU35Q/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">Translation Feedback Form</a>
    </section>
  </section>
</template>

<script>
import Movie from '~/components/Movie'

export default {
  components: {
    Movie
  },
  data(){
    return {
      videoId: 'QKIka2lDpIc'
    }
  }
}
</script>