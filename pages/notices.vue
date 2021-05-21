<template>
  <section id="wrapper-dark">
    <article>
      {{ notices }}
      <div class="notification" v-for="(notice, index) in notices" :key="index">
        <h1>{{ notice.titleEn }}</h1>
        <h1>{{ notice.titleJa }}</h1>
      </div>
    </article>
  </section>
</template>

<script>
import { request, gql } from '~/lib/datocms'
// import { toHead } from 'vue-datocms'

export default {
  data() {
    return {
    }
  },
  async asyncData({ params }) {
    const data = await request({
      query: gql`
        {
          notices: allNotices(orderBy: updatedAt_DESC) {
            author
            shortDescription
            titleEn
            titleJa
            updatedAt
          }
        }
      `
    })
    // coverImage {
    //           responsiveImage(imgixParams: { fit: crop, ar: "16:9", w: 860 }) {
    //             ...imageFields
    //           }
    //         }
    return { ready: !!data, ...data }
  },
  methods: {
  },
  head() {
    if (!this.ready) {
      return
    }
    // return toHead(this.site.favicon)
  }
}
</script>




          