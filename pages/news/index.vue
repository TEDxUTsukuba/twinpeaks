<template>
  <section id="wrapper-dark">
    <section class="section is-halfheight has-text-centered">
      <i class="mdi mdi-file-document has-text-primary is-size-1" /> 
      <h1 class="title is-1 is-spaced">{{ $t('news.title' )}}</h1>
      <h1 class="subtitle has-text-grey-light">{{ $t('news.subtitle')}}</h1>
    </section>
    <section class="section">
      <div class="columns is-variable is-6 is-multiline is-centered">
        <div class="column is-6-tablet" v-for="(notice, index) in notices" :key="index">
          <div class="nmp-dark">
            <header class="card-header">
              <p class="card-header-title">
                <span class="has-text-grey is-family-narrow">{{ formatDate(notice.updatedAt) }}</span>
              </p>
            </header>
            <div class="card-image">
              <!-- <datocms-image :data="notice.image.responsiveImage" :alt="notice.image.responsiveImage.alt" /> -->
              <figure class="image is-5by3">
                <datocms-image :data="notice.image.responsiveImage" :alt="notice.image.alt" style="position: initial; object-fit:"/>
              </figure>
            </div>
            <div class="card-content">
              <h2 class="title is-size-5">{{ notice.title }}</h2>
              <p class="has-text-grey-light">{{ notice.shortDescription }}</p>
              <br>
              <nav class="level is-mobile">
                <div class="level-left">
                  <p class="level-left">
                  </p>
                </div>
                <div class="level-right">
                  <p class="level-item">
                    <nuxt-link class="button is-rounded is-gradient" :to="localePath(`/news/${notice.id}`)">{{ $t('button.readmore') }}</nuxt-link>
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
import Meta from '~/assets/mixins/meta'

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
          notices: allNotices(locale: ${i18n.locale}, orderBy: updatedAt_DESC) {
            id
            title
            shortDescription
            updatedAt
            image {
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
  },
  methods: {
    formatDate(date) {
      return format(parseISO(date), 'PPP')
    }
  }
}
</script>