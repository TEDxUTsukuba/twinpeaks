<template>
  <section id="wrapper-dark">
    <section class="section is-halfheight has-text-centered">
      <i class="mdi mdi-file-document has-text-primary is-size-1" /> 
      <h1 class="title is-1 is-spaced">{{ $t('article.title' )}}</h1>
      <!-- <h1 class="subtitle has-text-grey-light">{{ $t('article.subtitle')}}</h1> -->
    </section>
    <section class="section">
      <!-- <div class="block">
          <b-checkbox v-model="selectedCategory" native-value="partner_interview">Partner Interview</b-checkbox>
          <b-checkbox v-model="selectedCategory" native-value="others">Others</b-checkbox>
      </div> -->
      <div class="columns is-variable is-6 is-multiline is-centered">
        <div class="column is-4-widescreen is-6-desktop is-6-tablet" v-for="(article, index) in articles" :key="index">
          <div class="nmp-dark">
            <header class="card-header">
              <p class="card-header-title">
                <span class="is-size-7 has-text-grey">{{ formatDate(article.updatedAt) }}</span>
              </p>
            </header>
            <div class="card-image">
              <figure class="image is-5by3" v-if="article.thumbnail">
                <datocms-image :data="article.thumbnail.responsiveImage" :alt="article.thumbnail.alt" style="position: initial;"/>
              </figure>
              <figure class="image is-5by3" v-else>
                <img src="~/assets/u_logo_banner.png" alt="No Image">
              </figure>
            </div>
            <div class="card-content">
              <h2 class="title is-size-5">{{ article.title }}</h2>
              <p class="has-text-grey-light">{{ article.summary }}</p>
              <br>
              <nav class="level is-mobile">
                <div class="level-left">
                  <p class="level-left">
                  </p>
                </div>
                <div class="level-right">
                  <p class="level-item">
                    <nuxt-link class="button is-rounded is-gradient" :to="localePath(`/articles/${article.id}`)">{{ $t('button.readmore') }}</nuxt-link>
                  </p>
                </div>
              </nav>
            </div>
          </div>
        </div>
     </div>
    </section>
  </section>  
</template>


<script>
import { request, gql } from '~/lib/datocms'
import { Image } from "vue-datocms";
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'

export default {
  data() {
    return {
      selectedCategory: []
    }
  },
  components: {
    "datocms-image": Image
  },
  async asyncData({ params, i18n }) {
    const data = await request({
      query: gql`
        {
          articles: allArticles(locale: ${i18n.locale}, filter: {isPublished: {eq: "false"}}, orderBy: updatedAt_DESC) {
            id
            title
            category
            summary
            updatedAt
            thumbnail {
              responsiveImage(imgixParams: {fit: crop, crop: top, h: 300, w: 500}) {
                alt
                src
              }
            }
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
    return {
      title: 'Articles | TEDxUTsukuba',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          hid: 'description', 
          name: 'description', 
          content: 'TEDxUTsukubaでは、イベントを通して教養から科学、地域の話題から世界規模の問題に至るまで、様々なトピックスに焦点を当ててきました。We have shed light on relevant topics - from liberal arts to science, local stories to global issues.'
        },
      ]
    }
  },
  methods: {
    formatDate(date) {
      return format(parseISO(date), 'yyyy/MM/dd')
    },
    sortByCategory() {
      console.log(this.selectedCategory);
      this.articles = this.articles.filter(el => this.selectedCategory.includes(el.category))
      console.log(this.articles);
    }
  }
}
</script>