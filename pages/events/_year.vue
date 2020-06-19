<template>
  <div id="app">
    <div class="">
      <img
        :src = "topImg"
        style="width: 100vw;"
      />
      <Events
        :eventYear= "thisEventYear"
      >
      </Events>
      <a :href="`http://localhost:3000/_nuxt/assets/speakers/${$route.params.year}/sp_${$route.params.year}_1.jpg`">hey</a>
    </div>
  </div>
</template>

<script>
    import Events from '~/components/Events.vue'

    export default {
      components: {
        Events
      },
      data () {
        return {
          thisEventYear: this.$route.params.year,
          topImg: require(`~/assets/banner/${this.$route.params.year}.jpg`)
        }
      }
      // asyncData ({ params }) {
      //   return ArticleApi.getArticle(params.id).then((response) => {
      //     console.log(response)
      //     return { result: response[0] }
      //   }).catch((error) => {
      //     console.log(error)
      //   })
      // }
    }
</script>

<style scoped>
.itemContainer{
    display: flex;
}
</style>
