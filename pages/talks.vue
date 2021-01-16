<template>
  <section id="wrapper-dark">
    <section class="hero is-large">
      <div class="hero-body has-text-centered">
        <div class="container">
          <h1 class="title is-1 is-spaced">{{ $t('talks.title') }}</h1>
          <h1 class="subtitle has-text-grey-light">{{ $t('talks.subtitle') }}</h1>
          <br>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="columns is-multiline">
        <div
          id="thumbnails"
          class="column is-one-third-fullhd is-half-widescreen is-half-desktop is-half-tablet"
          v-for="(talk, index) in talkList" :key="index"
          style="display: inline-block; vertical-align: top;"
        >
          <div class="nmp-dark">
            <header class="card-header">
              <p class="card-header-title">
                <!-- <span class="tag is-white">
                  {{ talk.category_1 }}
                </span>
                <span class="tag is-white">
                  {{ talk.category_2 }}
                </span> -->
              </p>
            </header>
            <div class="card-image">
              <Movie :vId='talk.youtube_id'></Movie>
              <!-- <youtube
                :video-id="talk.youtube_id"
                ref="youtube"
                @playing="playing"
              >
              </youtube> -->
            </div>
            <div class="card-content">
              <h1 class="title is-4">
                {{ talk.title }}
              </h1>
              <h1 class="subtitle is-5">
                {{ talk.speaker_name }}
              </h1>
              <span class="has-text-right">
                <b-collapse :open="false" position="is-bottom" aria-id="contentIdForA11y1">
                  <a class="button is-gradient is-rounded is-outlined" slot="trigger" slot-scope="props" aria-controls="contentIdForA11y1">
                    <!-- <b-icon :icon="!props.open ? 'menu-down' : 'menu-up'"></b-icon> -->
                      {{ !props.open ? 'Read more' : 'Read less' }}
                  </a>
                  <p class="is-size-7 has-text-left">
                    {{ talk.description_ja }}<br>
                    <!-- <a class="has-text-white is-size-4 fb" href="https://www.instagram.com/tedxutsukuba/">
                      <font-awesome-icon :icon="['fab', 'facebook-square']" />
                    </a> -->
                  </p>
                </b-collapse>
              </span>
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
// import VueYoutube from 'vue-youtube';
import Movie from '~/components/Movie';

// Vue.use(VueYoutube);

export default {
  components: {
    Movie
  },
  data() {
    return {
      videoId1: 'Ot4n4txl4Ko'
    }
  },
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

