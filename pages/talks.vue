<template>
  <section id="wrapper">
    <section class="section">
      <div class="columns is-multiline">
        <div
          id="thumbnails"
          class="column is-one-third-desktop is-half-tablet"
          v-for="(talk, index) in talkList" :key="index"
          style="display: inline-block; vertical-align: top;"
        >
          <div class="nmp-light">
            <header class="card-header">
              <p class="card-header-title">
                <span class="tag is-white">
                  {{ talk.category_1 }}
                </span>
                <span class="tag is-white">
                  {{ talk.category_2 }}
                </span>
              </p>
            </header>
            <div class="card-image">
              <youtube
                :video-id="talk.youtube_id"
                ref="youtube"
                @playing="playing"
              >
              </youtube>
            </div>
            <div class="card-content">
              <h1 class="title is-4">
                {{ talk.title }}
              </h1>
              <h1 class="subtitle is-6">
                {{ talk.speaker_name }}
              </h1>
              <b-collapse :open="false" position="is-bottom" aria-id="contentIdForA11y1">
                <span slot="trigger" slot-scope="props" aria-controls="contentIdForA11y1">
                  <b-icon :icon="!props.open ? 'menu-down' : 'menu-up'"></b-icon>
                    {{ !props.open ? 'Read more' : 'Read less' }}
                </span>
                <p class="is-size-7">
                  {{ talk.description_ja }}
                </p>
              </b-collapse>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<style lang="scss" scoped>
  div#thumbnails {
    padding: 1vw;
    // @media screen and (max-width: 640px) {
    //   width: 100%;
    // }
    // @media screen and (min-width: 641px) and (max-width: 1024px) {
    //   width: 50%;
    // }
    // @media screen and (min-width: 1025px) and (max-width: 1280px) {
    //   width: 33%;
    // }
    // @media screen and (min-width: 1216px) {
    //   width: 25%;
    // }
  }
</style>

<script>
import Vue from 'vue';
import VueYoutube from 'vue-youtube';

Vue.use(VueYoutube);

export default {
  props: {
    year: {
      type: String,
      required: true
    }
  },
  computed: {
    talkList() {
      return this.$store.getters[
        'talk/showAllTalks'
      ](this.year)
    },
    player() {
      return this.$refs.youtube.player
    }
  }
}
</script>

<!--
<template>
  <section>
    <TalkDetail year="2019" />
  </section>
</template>

<script>
import TalkDetail from '~/components/TalkDetail.vue'
export default {
  components: {
    TalkDetail
  }
}
</script> -->
