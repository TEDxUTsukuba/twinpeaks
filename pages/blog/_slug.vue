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
            <!-- <span v-for="tag in article.tags" :key="tag">
              <span class="tag">{{ tag }}</span>&nbsp;
            </span> -->
          </div>
        </div>
      </div>
    </section>
    <section :class="{ 'section': true, 'articleSerif': isArticleSerif }">
      <aside class="is-family-sans-serif has-text-right has-text-grey">
        <!-- <button @click="isArticleSerif=!isArticleSerif">Change</button> -->
        <b-field>
          <b-switch v-model="isArticleSerif">
            {{ $t('button.displayserif')}}
          </b-switch>
        </b-field>
        <p class="has-text-grey">Note: This article was originally published <a :href="article.original_link" target="_blank">here <i class="mdi mdi-open-in-new" /></a></p>
      </aside>
      <div class="content" style="margin: 5vh 0 10vh 0;">
        <!-- <button @click="copySelectedText()">copy</button> -->
        <nuxt-content :document="article" />
      </div>
      <footer>
        <!-- <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button button is-medium is-rounded" data-via="tedxutsukuba" data-related="" data-show-count="false"><i class="mdi mdi-twitter" /> Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> -->
        <div class="notification is-dark" style="margin: 5vh 0;">
          {{ $t('blog.disclaimer') }}
        </div>
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li><nuxt-link to="/">Home</nuxt-link></li>
            <li><nuxt-link to="/blog">Blog</nuxt-link></li>
            <li class="is-active"><nuxt-link class="has-text-light" :to="`/articles/${$route.params.slug}`" aria-current="page">{{ article.title }}</nuxt-link></li>
          </ul>
        </nav>
      </footer>
    </section>
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      text: 'sasas',
      isArticleSerif: true
    }
  },
  async asyncData({ $content, params, app }) {
    // const article = await $content(`${app.i18n.locale}/blog/${params.slug}`).fetch();
    const article = await $content(`blog/${params.slug}`).fetch();

    return {
      article
    };
  },
  mounted() {
    // document.addEventListener('mouseup', event => {
    //   if (event.target === this.$refs.target || event.target.contains(this.$refs.target))
    //     console.log(this.text)
        // this.copySelectedText();
    // });
  },
  methods: {
    // copySelectedText() {
    //   console.log(window.getSelection().toString());
    //   this.$buefy.notification.open({
    //     message: `copied`,
    //     position: 'is-top-right',
    //     duration: 5000,
    //   })
    // }
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
  line-height: 200%;
}
.nuxt-content {
  p, ul, li, th, td {
    color: #ddd !important;
  }
  h1, h2, h3, h4, h5, h6, strong, em {
    color: #fff !important;
  }
  p {
    line-height: 2.5rem;
  }
  a {
    color: hsl(217, 71%, 53%);
  }
  h1, h2, h3, h4, h5, h6 {
    padding-top: 3rem;
    padding-bottom: 1.5rem;
  }
  blockquote p, blockquote strong, blockquote em {
    color: #666 !important;
  }
  span.icon {
    display: none;
    // width: 1em;
    // height: 1em;
    // position: relative;
    // background-color: #7957d5;
    // margin-right: 10px;
    // // transform: rotate(45deg);
    // &:hover {
    //   background-color: #fff;
    // }
  }
  table {
    background-color: #333;
  }
  hr {
    background-color: #333;
  }
}
.articleSerif {
  font-family: 'Hiragino Mincho', '游明朝', 'Times New Roman', Times, serif;
}
</style>