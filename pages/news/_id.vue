<template>
  <section id="wrapper-dark">
    <section class="section is-halfheight has-text-centered">
      <i class="mdi mdi-file-document has-text-primary is-1" /> 
      <h1 class="title is-1 is-spaced">個別ページ</h1>
      <h1 class="subtitle has-text-grey-light">だよ</h1>
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
  // async asyncData({ params }) {
  //   const data = await request({
  //     query: gql`
  //       {
  //         notices: allNotices(locale: ja, orderBy: updatedAt_DESC) {
  //           title
  //           shortDescription
  //           updatedAt
  //           image {
  //             responsiveImage(imgixParams: {fit: crop, crop: top, h: 300, w: 500}) {
  //               alt
  //               src
  //             }
  //           }
  //         }
  //       }
  //     `
  //   })
  //   return { ready: !!data, ...data }
  // },
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