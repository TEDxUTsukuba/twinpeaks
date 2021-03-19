<template>
  <div :id="id">
    <div v-for="(event, index) in eventData" :key="index">
      <div class="columns">
        <div class="column wallpaper-wrapper">
          <img class="wallpaper" src="https://i.picsum.photos/id/1050/1230/500.jpg?hmac=e4pA3LUhJf21KhPvAyyNuP4rxXK3X0YoaWT04GH_aRM">
        </div>
        <aside class="column container is-5">
          <p class="is-uppercase">3 days to go</p>
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
          <a href="">Add to Calendar</a>
          <hr>
          <p v-if="event.type === 'virtual'" class="is-size-5">
            Virtual Event
          </p>
          <p v-else>
            {{ event.location.name }}
          </p>
          <a :href="event.location.googlemaps" v-if="event.type !== 'virtual'">Open in Google Maps</a>
        </aside>
      </div>
    </div>
  </div>
</template>

<script>

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
    eventData() {
      return this.$store.getters['upcomingeventfromjson/findById'](Number(this.$route.params.event))
    }
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
    filter: brightness(50%);
    width: 100%;
    padding: 0;
    height: 25vh;
    object-fit: cover;
  }
</style>
