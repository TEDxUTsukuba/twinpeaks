<template>
  <section id="wrapper-dark">
    <section class="section is-medium has-text-centered">
      <i class="mdi mdi-book-multiple has-text-primary is-1" /> 
      <h1 class="title is-1 is-spaced">Blog</h1>
      <h1 class="subtitle has-text-grey-light">Blog List</h1>
    </section>
    <section class="section">
      <div v-for="article in articles">
        <nuxt-link :to="article.path">{{ article.title }}</nuxt-link> {{ article.created }}
      </div>
    </section>
  </section>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content("articles")
      .limit(10)
      .fetch();

    return {
      articles
    };
  }
}
</script>