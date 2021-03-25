<template>
  <section id="wrapper-dark">
    <section class="section">
      <div class="nmp-card has-text-centered-mobile has-text-left">
        <h1 class="title is-1 is-spaced">{{ $t('talks.title') }}</h1>
        <h1 class="subtitle has-text-grey-light">{{ $t('talks.subtitle') }}</h1>
        <br>
        <span class="tag has-text-weight-bold">{{ $t('button.partialtranslation') }}</span>
        <a class="text" href="https://docs.google.com/forms/d/e/1FAIpQLSeGADXgQymefKwe_HPvna2hufR9IBRYjPhUDC1gRnehCNU35Q/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer"><small>{{ $t('button.helpustranslate') }}</small></a>
      </div>
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
              <h1 class="subtitle is-5" v-if="$i18n.locale == 'ja'">
                {{ talk.speaker_name }}
              </h1>
              <h1 class="subtitle is-5" v-if="$i18n.locale == 'en'">
                {{ talk.speaker_name_alt }}
              </h1>
              
                <b-collapse animation="fade" :open="false" position="" aria-id="contentIdForA11y1">
                  <span class="" slot="trigger" slot-scope="props" aria-controls="contentIdForA11y1">
                    <p class="is-size-7 has-text-grey-light" v-if="!props.open && $i18n.locale == 'ja'">{{ talk.description_ja | substrBefore(75) }}…</p>
                    <p class="is-size-7 has-text-grey-light" v-if="!props.open && $i18n.locale == 'en'">{{ talk.description_en | substrBefore(75) }}…</p>
                    <p class="is-size-7 has-text-grey-light" v-if="props.open && $i18n.locale == 'ja'">{{ talk.description_ja }}</p>
                    <p class="is-size-7 has-text-grey-light" v-if="props.open && $i18n.locale == 'en'">{{ talk.description_en }}</p>
                    <br>
                    <b-button class="button is-gradient is-rounded is-outlined is-small" :icon-left="!props.open ? 'chevron-down' : 'chevron-up'">{{ !props.open ? $t('button.readmore') : $t('button.readless') }}</b-button>
                  </span>
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
    head: {
    title: 'Talks'
  },
  filters: {
    substrBefore(text, value) {
     return text.length > value ? text.slice(0, value) : text;
    },
    substrAfter(text) {
     return text.length > 50 ? text.substr(50) : text;
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

