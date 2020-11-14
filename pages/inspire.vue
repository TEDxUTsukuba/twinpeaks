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
      </a>
    </h3>
    <div>
      <youtube :video-id="videoId" ref="youtube" @playing="playing"></youtube>
    </div>
    <img src="~/assets/banner/sns_banner/png">
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
      videoId: 'lG0Ys-2d4MA'
    }
  },
  computed: {
    player() {
      return this.$refs.youtube.player
    }
  }
}
</script>
