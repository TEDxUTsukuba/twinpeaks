<template>
  <section id="wrapper-dark">
    <section class="hero hero-article is-medium has-text-white" :style="`background-image: radial-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url(${article.thumbnail})`">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-2">
            <span id="title">
              {{ article.title }}
            </span>
          </h1>
          <br>
          <p class="has-text-weight-bold">{{ article.author }}</p>
          <p>{{ article.created }} <span v-if="article.last_modified" class="is-size-7">(最終更新: {{ article.last_modified }})</span></p>
          <i class="mdi mdi-tag" />
          <span v-for="tag in article.tags">
            {{ tag }}&nbsp;
          </span>
        </div>
      </div>
    </section>
    <section class="section">
      <nuxt-content class="has-text-light" :document="article" />
    </section>
  </section>
</template>

<script>
export default {
  components: {},
  async asyncData({ $content, params }) {
    const article = await $content(`articles/${params.slug}`).fetch();

    return {
      article
    };
  }
};
</script>

<style scoped>
.hero-article {
  background-size: cover;
  background-position: center;
}
#title {
  padding: 0.5rem 1rem;
  background-color: #fff;
  color: #000;
}

</style>