<template>
  <section id="wrapper-dark" style="min-height: 100vh;">
    <div v-if="!survey_completed" class="has-background-info p-4 has-text-centered">
      <a href="https://www.google.com/forms/about/" target="_blank" class="has-text-white has-text-weight-bold">
        アンケートにご協力ください
      </a>
    </div>
    <section class="section">
      <h1 class="title pt-6">{{ user }} さん、ようこそ</h1>
      <p class="subtitle pb-6">TEDxUTsukuba 2021 Participant Portal</p>
      <div class="nmp-card-dark">
        <p class="title is-size-5">ワークショップ</p>
        <p class="subtitle">{{ user }}さんのルームは <span class="has-text-warning has-text-weight-bold">{{ workshop }}</span> です</p>
        <a class="button is-white is-outlined" href="https://zoom.us/" target="_blank">アクセス</a>
      </div>
      <div class="nmp-card-dark mt-5">
        <p class="title is-size-5">アフターパーティー</p>
        <a class="button is-white is-outlined" href="https://zoom.us/" target="_blank">アクセス</a>
      </div>
       <div class="nmp-card-dark mt-6">
        <p class="title is-size-5">ご登録情報</p>
        <p>ID: {{ id }}</p>
        <p>メールアドレス: someone@example.com</p>
        <p>区分: 学生</p>
       </div>
       <div class="has-text-centered mt-6 has-text-weight-bold">
         &copy; TEDxUTsukuba 2021
       </div>
    </section>
  </section>
</template>

<script>
export default {
  layout: "fullscreen",
  data() {
    return {
      user: "User",
      id: this.$route.params.id,
      workshop: "ルームA",
      survey_completed: false
    }
  }
}
</script>