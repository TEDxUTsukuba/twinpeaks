<template>
  <section id="wrapper-dark">
    <section class="hero hero-article is-halfheight has-text-white" :style="`background-image: radial-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url(${article.thumbnail})`">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-2">
            <span id="title">
              {{ article.title }}
            </span>
          </h1>
          <div style="margin-left: 1rem;">
            <p class="has-text-weight-bold">{{ article.author }}</p>
            <p>{{ article.created }} <span v-if="article.last_modified" class="is-size-7">(最終更新: {{ article.last_modified }})</span></p>
            <span v-for="tag in article.tags">
              <span class="tag">{{ tag }}</span>&nbsp;
            </span>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li><nuxt-link to="/articles">Article</nuxt-link></li>
          <li class="is-active"><nuxt-link :to="`/articles/${$route.params.slug}`" aria-current="page">{{ article.title }}</nuxt-link></li>
        </ul>
      </nav>
      <hr>
      <div class="content">
        <nuxt-content :document="article" />
      </div>
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

<style lang="scss">
.hero-article {
  background-size: cover;
  background-position: center;
}
#title {
  padding: 0.5rem 1rem;
  background-color: #fff;
  color: #000;
}
.nuxt-content {
  h1, h2, h3, h4, h5, h6, p, ul, li, strong, em, th, td {
    color: #ddd;
  }
  blockquote p {
    color: #666 !important;
  }
  span.icon {
    width: 1em;
    height: 1em;
    position: relative;
    background-color: #7957d5;
    margin-right: 10px;
    // transform: rotate(45deg);
    &:hover {
      background-color: #fff;
    }
  }

}
</style>