<template>
  <section id="wrapper-dark">
    <section class="section is-halfheight has-text-centered">
      <i class="mdi mdi-book-multiple has-text-primary is-size-1" /> 
      <h1 class="title is-1 is-spaced">{{ $t('header.blog.item' )}}</h1>
      <h1 class="subtitle has-text-grey-light">{{ $t('blog.subtitle')}}</h1>
    </section>
    <section class="section">
      <div v-for="article in articles" :key="article.id">
        <hr>
        <div class="columns">
          <div class="column is-8">
            <!-- <span v-if="article.lang == 'ja'" class="tag is-danger">JA</span>
            <span v-if="article.lang == 'en'" class="tag is-info">EN</span> -->
            <nuxt-link :to="localePath(article.path)" @click.native="countGA(article.id)">
              {{ article.title }}
            </nuxt-link>
          </div>
          <div class="column has-text-right">
            <span class="has-text-grey-light">{{ article.author }}, {{ article.created }}</span>
          </div>
        </div>
      </div>
      <hr>
    </section>
  </section>
</template>

<script>
export default {
  async asyncData({ $content, app }) {
    const articles = await $content(`blog`)
      // .limit(10)
      .sortBy('created', 'desc')
      .fetch();

    return {
      articles
    };
  },
  methods: {
    countGA(id) {
      console.log(id)
      this.$gtag(
        'event', 'readBlogArticle', {
          'event_category': 'button',
          'event_label': id,
          'value': '1'
        }
      )
    }
  }
}
</script>

<style scoped>
hr {
  height: 1px;
}
a {
  color: #fff;
  font-weight: bold;
}
</style>