<template>
  <section id="wrapper-dark">
    <section class="hero is-halfheight has-text-white" :style="`background-size: cover; background-position: center; background-image: radial-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${article.thumbnail.url})`">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-2">
            <span id="title" class="has-text-dark has-background-white px-2 py-1">
              {{ article.title }}
            </span>
          </h1>
          <div>
            <p class="mb-2">{{ formatDate(article._firstPublishedAt) }} <span v-if="article.last_modified" class="is-size-7">(最終更新: {{ formatDate(article.updatedAt) }})</span></p>
            <span class="tag">{{ article.category.replace(/_/g, " ") }}</span>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <article id="article" v-html="article.content" />
    </section>
    <img :src="`https://www.datocms-assets.com/48488/1621396265-ublackonellinebanner.png?txt=${this.article.title}&txt-size=64&txt-color=fff&txt-align=center&txt-pad=48&?txt-font=Helvetica%20Neue,Bold`">
  </section>
</template>

<style lang="scss">
article#article {
  #title {
    line-height: 1.5;
  }
  h1 {
    font-size: 2rem;
    font-weight: bold;
    margin: 3rem auto 1rem auto;
    line-height: 1.5;
  }
  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 2rem auto 1rem auto;
    line-height: 1.5;
  }
  img {
    padding: 3rem 0;
  }
  blockquote {
    font-style: italic;
    margin: 1rem 0 1rem 2rem;
    padding-left: 1rem;
    border-left: 5px solid #bbb;
  }
  strong, em {
    color: #fff;
    font-weight: bold;
  }
}

</style>


<script>
import { request, gql } from '~/lib/datocms'
import { Image } from "vue-datocms";
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'

export default {
  components: {
    "datocms-image": Image
  },
  async asyncData({ params, i18n }) {
    const data = await request({
      query: gql`
      {
        article(locale: ${i18n.locale}, filter: {id: {eq: "${params.id}"}}) {
          thumbnail {
            url
            alt
          }
          category
          _firstPublishedAt
          summary
          content(markdown: true)
          title
          updatedAt
        }
      }
    `
    })
    return { ready: !!data, ...data }
  },
  head() {
    if (!this.ready) {
      return 
    }
    else {
      return {
        meta: [
          {
            hid: 'og:description',
            name: 'og:description',
            content: 'my website description'
          },
          {
            hid: 'og:title',
            name: 'og:title',
            content: this.article.title
          }
        ]
      }
    }
  },
  methods: {
    formatDate(date) {
      return format(parseISO(date), 'PPP')
    }
  }
}
</script>