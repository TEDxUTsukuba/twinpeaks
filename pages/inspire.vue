<template>
  <section class="section">
    <h2 class="title is-3 has-text-grey">
      "Just start  <b-icon
        icon="rocket"
        size="is-large"
      />"
    </h2>
    <h3 class="subtitle is-6 has-text-grey">
      Author: <a href="https://github.com/anteriovieira">
        Antério Vieira
        {{ posts }}
      </a>
    </h3>
    <img src="/carousel/thumbnail/2020jijimuge.png">
    <img src="/carousel/thumbnail/2019utsukubalive.png">
    <img src="/carousel/thumbnail/2019cophilaction.jpg">
    <img src="/carousel/thumbnail/staffwanted.jpg">
    <div>
      <youtube :video-id="videoId" ref="youtube" @playing="playing"></youtube>
    </div>
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
