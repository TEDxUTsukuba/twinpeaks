<template>
  <div :id="id">
    {{ eventData }}
    <div v-for="(event, index) in eventData" :key="index">
      <div class="columns">
        <div class="column wallpaper-wrapper">
          <img class="wallpaper" src="https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?cs=srgb&dl=pexels-fauxels-3184302.jpg&fm=jpg">
        </div>
        <aside class="column container is-5" style="display: flex; justify-content: middle; align-items: center;">
          <p class="is-uppercase">3 days to go</p><br>
          <h1 class="title is-3">{{ event.name }}</h1>
          {{ $route.params.id }}
        </aside>
      </div>
      <div class="columns">
        <div class="column is-7">
          <h1 class="is-size-4"><i class="mdi mdi-export-variant" /></h1>
        </div>
        <div class="column is-5 ">
          <a :href="event.signup.url" class="level-item button is-white is-gradient is-rounded is-fullwidth">Sign up</a>
        </div>
      </div>
      <hr style="margin: 0.5rem 0 1rem 0;">
      <div class="columns is-variable is-5">
        <div class="container column is-7">
            <p v-if="$i18n.locale == 'ja'" v-html='event.description.long_ja'></p>
            <p v-if="$i18n.locale == 'en'" v-html='event.description.long_en'></p>
            <hr>
            Share With Friends
            <br>
            <a href="" class="is-size-4 has-text-dark"><i class="mdi mdi-twitter" /></a>
            <a href="" class="is-size-4 has-text-dark"><i class="mdi mdi-facebook" /></a>
            <a href="" class="is-size-4 has-text-dark"><i class="mdi mdi-link-variant" /></a>
        </div>
        <aside class="container column is-5">
          <p class="is-size-5">{{ event.date.day.replace(regex, '/') }}</p>
          <p class=""><span v-if="event.date.from">{{ event.date.from }}</span><span v-if="event.date.to"> - {{ event.date.to }}</span></p>
          <a href="" class="is-size-6">Add to Calendar</a>
          <hr>
          <p v-if="event.type === 'virtual'" class="is-size-5">
            Virtual Event<br>
            <span class="is-size-6">Webcast</span><br>
            <a :href="event.webcast.webcast_url" class="is-size-6">{{ event.webcast.name }}</a>
          </p>
          <p v-else-if="event.type === 'hybrid'" class="is-size-5">
            Hybrid Event<br>
            <span class="is-size-6">Webcast</span><br>
            <a :href="event.webcast.webcast_url" class="is-size-6">Open in {{ event.webcast.name }}</a><br>
            <span class="is-size-6">{{ event.location.name }}</span><br>
            <a :href="event.location.googlemaps" class="is-size-6">Open in Google Maps</a>
          </p>
          <p v-else>
            <span class="is-size-6">{{ event.location.name }}</span><br>
            <a :href="event.location.googlemaps" class="is-size-6">Open in Google Maps</a>
          </p>
        </aside>
      </div>
    </div>
  </div>
</template>

<script>
import vuex from 'vuex'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  components: {
  },
  data () {
    return {
      isModalActive: false,
      id: this.$route.params.event,
      regex: /-/g,
    }
  },
  computed: {
    // eventData() {
    //   return this.$store.getters['upcomingeventfromjson/findById'](Number(this.$route.params.event))
    // }
  },
  methods: {
    getCurrentUrl() {
      if (process.browser) {
        return window.location.href
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .columns {
    margin: 0 !important;
  }
  .column.is-7 {   
    @media screen and (min-width: 769px) {
      padding-left: 6vw;
      padding-right: 3vw;
    }
  }
  .column.wallpaper-wrapper {
    padding: 0;
    .wallpaper {
      padding-left: 0 !important;
    }
  }
  .column.is-5 {
    @media screen and (min-width: 760px) {
      padding-left: 3vw;
      padding-right: 6vw;
    }
  }
  .wallpaper {
    filter: contrast(75%);
    width: 100%;
    padding: 0;
    height: 25vh;
    object-fit: cover;
  }
</style>