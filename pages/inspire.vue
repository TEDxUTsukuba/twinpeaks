<template>
  <section class="section">
    <div>
      {{ browser }}{{ os }}
    </div>
    <youtube :video-id="videoId" ref="youtube" @playing="playing"></youtube>
  </section>
</template>

<style scoped>

</style>


<script>
import Vue from 'vue';
import VueYoutube from 'vue-youtube';

Vue.use(VueYoutube);

export default {
  data() {
    return {
      browser: this.$ua.browser(),
      os: this.$ua.os(),
      videoId: 'lG0Ys-2d4MA',
      posts: [],
    }
  },
  computed: {
    player() {
      return this.$refs.youtube.player
    }
  },
  methods: {
    
  },
  async fetch ({ store }) {
    // this.posts = await store.dispatch('upcomingevent/getSheetsData')
    // await store.dispatch('upcomingevent/addData')
    // await store.dispatch('upcomingevent/updateData')
    // await store.dispatch('upcomingevent/deleteData')
  }
}
</script>
