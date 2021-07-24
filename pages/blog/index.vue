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
  head: {
    title: 'Blog | TEDxUTsukuba',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 
        hid: 'description', 
        name: 'description', 
        content: 'TEDxUTsukubaでは、イベントを通して教養から科学、地域の話題から世界規模の問題に至るまで、様々なトピックスに焦点を当ててきました。We have shed light on relevant topics - from liberal arts to science, local stories to global issues.'
      },
    ]
  },
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