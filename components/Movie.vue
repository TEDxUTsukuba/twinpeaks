<template>
    <div class="youtube-frame">
        <youtube ref="youtube" @playing="playing"
        :video-id="vId"
        :player-vars="aPlay"
        >
        </youtube>
    </div>
</template>

<script>
import Vue from 'vue';
import VueYoutube from 'vue-youtube';

Vue.use(VueYoutube);

export default {
  data(){
    return {
      isImageModalActive: false,
      isCardModalActive: false
    }
  },
  props: {
    vId: String,
    aPlay: String
  },
  computed: {
    player() {
      return this.$refs.youtube.player
    }
  },
  methods: {
    async playVideo() {
      await this.player.playVideo()
    },
    playing() {
    }
  }
}
</script>

<style scoped>
h2{
  color: red
}
p{
  color: red
}
.youtube-frame {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  padding: 0;
}

iframe {
  width: 960px;
  height: 540px;
}

</style>
