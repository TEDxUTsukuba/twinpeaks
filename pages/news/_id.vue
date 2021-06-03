<template>
  <section id="wrapper-dark">
    <section class="section is-halfheight has-text-centered">
      <i class="mdi mdi-file-document has-text-primary is-1" /> 
      <h1 class="title is-1 is-spaced">{{ $t('news.title' )}}</h1>
      <h1 class="subtitle has-text-grey-light">{{ $t('news.subtitle' )}}</h1>
    </section>
    <section class="hero has-background-primary">
      <section class="section">
        <div class="columns is-vcentered is-variable is-6">
          <div class="column is-4-desktop is-6-tablet">
            <img :src="notice.image.url" :alt="notice.image.alt" style="filter: drop-shadow(0px 7px 29px rgba(100, 50, 50, 0.6));" />
          </div>
          <div class="column is-8-desktop is-6-tablet has-text-centered-mobile">
            <h2 class="title is-2 has-text-centered-mobile">{{ notice.title }}</h2>
            <p class="has-text-grey-lighter is-italic is-family-serif">{{ notice.shortDescription }}</p>
          </div>
        </div>
      </section>
    </section>
    <section class="hero content">
      <section class="section">
        <div class="columns is-multiline is-variable is-6">
          <div class="column is-4-desktop is-12-tablet">
             <p class="has-text-grey-lighter has-text-centered-mobile">
              <span class="has-text-weight-bold">{{ formatDate(notice._firstPublishedAt) }}</span><br class="is-hidden-mobile">
              <span>{{ $t('news.updatedAt' )}} {{ formatDate(notice.updatedAt) }}</span>
            </p>
            <br>
            <a class="no-decollation has-text-grey" :href="`https://www.facebook.com/sharer/sharer.php?u=https://www.tedxutsukuba.com${this.$route.path}`" target="_blank" rel="nofollow noopener noreferrer" style="margin-right: .5rem;"><i class="mdi mdi-facebook" /> Facebook</a><br class="is-hidden-touch">
            <a class="no-decollation has-text-grey" :href="`http://twitter.com/share?url=www.tedxutsukuba.com${this.$route.path}&text=${notice.title}&via=tedxutsukuba&related=tedxutsukuba`" target="_blank" style="margin-right: .5rem;"><i class="mdi mdi-twitter" /> Twitter</a><br class="is-hidden-touch">
            <a class="no-decollation has-text-grey" :href="`http://line.me/R/msg/text/?www.tedxutsukuba.com${this.$route.path}`" target="_blank" style="margin-right: .5rem;"><i class="mdi mdi-message" /> Line</a>
            <div class="divider" />
          </div>
          <div class="column is-8-desktop is-12-tablet">
            <article class="has-text-light" v-html="notice.longDescription" />
            <p v-if="notice.longDescription.length == 0 && $i18n.locale == 'ja'">このお知らせには本文がありません。</p>
            <p v-if="notice.longDescription.length == 0 && $i18n.locale == 'en'">This news has no content. </p>
          </div>
        </div>
      </section>
    </section>
  </section>  
</template>


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
    // console.log(i18n.locale)
    const data = await request({
      query: gql`
      {
        notice(locale: ${i18n.locale}, filter: {id: {eq: "${params.id}"}}) {
          image {
            alt
            url
          }
          _firstPublishedAt
          shortDescription
          longDescription(markdown: true)
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
  },
  methods: {
    formatDate(date) {
      return format(parseISO(date), 'PPP')
    }
  }
}
</script>