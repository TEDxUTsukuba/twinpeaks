<template>
  <div class="slideshow-wrap">
    <ul class="slideshow" id="slides-before">
      <li class="slideshow-item" v-for="(talk, index) in talkList" :key="index">
        <div class="card has-background-dark">
          <!-- <div class="card-image">
            <Movie :vId='talk.youtube_id'></Movie>
          </div> -->
          <div class="card-content">
            <h1 class="title is-4">
              {{ talk.title }}
            </h1>
            <h1 class="subtitle is-5 has-text-grey" v-if="$i18n.locale == 'ja'">
              {{ talk.speaker_name }}
            </h1>
            <h1 class="subtitle is-5 has-text-grey" v-if="$i18n.locale == 'en'">
              {{ talk.speaker_name_alt }}
            </h1>
          </div>
        </div>
      </li>
    </ul>
    <ul class="slideshow" id="slides-after">
      <li class="slideshow-item" v-for="(talk, index) in talkList" :key="index">
        <div class="card has-background-dark">
          <div class="card-image">
            <Movie :vId='talk.youtube_id'></Movie>
          </div>
          <div class="card-content">
            <h1 class="title is-4">
              {{ talk.title }}
            </h1>
            <h1 class="subtitle is-5 has-text-grey" v-if="$i18n.locale == 'ja'">
              {{ talk.speaker_name }}
            </h1>
            <h1 class="subtitle is-5 has-text-grey" v-if="$i18n.locale == 'en'">
              {{ talk.speaker_name_alt }}
            </h1>
          </div>
        </div>
      </li>
    </ul>
  </div>
          <!-- <div class="card has-background-dark">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">{{ event.title }}</p>
                <p class="subtitle is-size-7 has-text-primary">
                  <span class="has-text-weight-bold">{{ new Date(event.date.from).toLocaleDateString() }}</span><br>
                  <span class="is-size-7">{{ new Date(event.date.from).toLocaleTimeString() }}</span>
                  <span v-if="event.date.to" class="is-size-7"> - {{ new Date(event.date.to).toLocaleTimeString() }}</span>
                </p>
              </div>
              <div class="media-right">
                <span class="tag is-white is-uppercase">{{event.type}}</span>
              </div>
            </div>
            <div class="content">
              <p class="is-size-7">
                {{ event.description.short_ja }}
              </p>
              <p class="has-text-right">
                <a :href="event.url" class="button is-white is-gradient is-rounded is-small">Read more</a>
              </p>
            </div>
          </div>
        </div> -->
</template>



<script>
import Movie from '~/components/Movie';

export default {
  components: {
    Movie
  },
  data() {
    return {
    }
  },
  methods: {
    getJsonImgUrl(value) {
      // return require(`~/assets/partners/2020/carousel_${value}.jpg`)
      return require(`~/assets/partners/2020/logo/1.jpg`)
    }
  },
  computed: {
    talkList() {
      return this.$store.getters[
        'talk/getRandomTalks'
      ]()
    }
  }
}
</script>

<style lang="scss">
  .slideshow-item {
    /* 横スクロール用 */
    display: inline-block;
    word-break: break-all;
    width: 23.5vw;
    margin-right: 1vw;
  }
  .slideshow-item:nth-child(1) {
    margin-left: 1.5vw;
  }
  @media screen and (max-width: 768px) {
    .slideshow-item {
      width: 80vw;
      padding: 0;
    }
  }
</style>