<template>
  <div :id="id">
    <div class="columns">
      <div class="column wallpaper-wrapper">
        <img class="wallpaper" src="https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?cs=srgb&dl=pexels-fauxels-3184302.jpg&fm=jpg">
      </div>
      <aside class="column container is-5" style="display: flex; justify-content: middle; align-items: center;">
        <div>
          <p class="is-uppercase">N days to go</p><br>
          <h1 class="title is-3">{{ eventData.name }}</h1>
        </div>
      </aside>
    </div>
    <div class="columns">
      <div class="column is-7">
        <h1 class="is-size-4"><i class="mdi mdi-export-variant" /></h1>
      </div>
      <div class="column is-5 has-text-centered" v-if="eventData.isSignupRequired == true">
        <a :href="eventData.signup_url" target="_blank" class="level-item button is-white is-gradient is-rounded is-fullwidth">Sign up</a>
        <!-- <span class="is-size-7 has-text-grey-light">Sign up before {{ new Date(eventData.signup_deadline).toLocaleDateString().replace(regex, '/') }}</span> -->
      </div>
    </div>
    <hr style="margin: 0.5rem 0 1rem 0;">
    <div class="columns is-variable is-5">
      <div class="container column is-7">
          <p v-if="$i18n.locale == 'ja'" v-html='eventData.description_ja'></p>
          <p v-if="$i18n.locale == 'en'" v-html='eventData.description_en'></p>
          <hr>
          Share With Friends
          <br>
          <a href="" target="_blank" class="is-size-4 has-text-dark"><i class="mdi mdi-twitter" /></a>
          <!-- <a href="https://twitter.com/intent/tweet?button_hashtag=TEDxUTsukuba&ref_src=twsrc%5Etfw" class="button is-rounded" data-show-count="false"><i class="mdi mdi-twitter" />Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> -->
          <a href="" target="_blank" class="is-size-4 has-text-dark"><i class="mdi mdi-facebook" /></a>
          <a href="" target="_blank" class="is-size-4 has-text-dark"><i class="mdi mdi-link-variant" /></a>
      </div>
      <aside class="container column is-5">
        <p class="is-size-5">{{ new Date(eventData.date).toLocaleDateString().replace(regex, '/') }}</p>
        <p class=""><span v-if="eventData.from">{{ eventData.from }}</span><span v-if="eventData.to"> - {{ eventData.to }}</span></p>
        <a href="" class="is-size-6">Add to Calendar</a>
        <hr>
        <p v-if="eventData.type === 'virtual'" class="is-size-5">
          Virtual Event<br>
          <span class="is-size-6">Webcast</span><br>
          <a :href="eventData.webcast_url" target="_blank" class="is-size-6">{{ eventData.webcast }}</a>
        </p>
        <p v-else-if="eventData.type === 'hybrid'" class="is-size-5">
          Hybrid Event<br>
          <span class="is-size-6">Webcast</span><br>
          <a :href="eventData.webcast_url" target="_blank" class="is-size-6">Open in {{ eventData.webcast }}</a><br>
          <span class="is-size-6">{{ eventData.location }}</span><br>
          <a :href="eventData.googlemaps" target="_blank" class="is-size-6">Open in Google Maps</a>
        </p>
        <p v-else>
          <span class="is-size-6">{{ eventData.location }}</span><br>
          <a :href="eventData.googlemaps" target="_blank" class="is-size-6">Open in Google Maps</a>
        </p>
        <hr>
        <p v-if="eventData.isFree == true" class="is-size-5 mb-6">
          Free
        </p>
        <p v-else class="is-size-6 mb-6">
          Adult: JPY {{ eventData.fee_adult}}<br>
          Student: JPY {{ eventData.fee_student }}
        </p>
        <br><br>
      </aside>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Meta from '~/assets/mixins/eventmixin'

export default {
  mixins: [Meta],
  components: {
  },
  data () {
    return {
      eventData: {},
      // eventData: [],
      // eventData: '',
      isModalActive: false,
      id: this.$route.params.event,
      regex: /-/g,
      meta: {
        title: '',
        description: '',
        type: '',
        url: '',
        image: '',
      },
    }
  },
  // methods: {
  //   getData (apiUrl) {
  //     // this.$jsonp(url, dataObj, timeout) で使える。 Vueコンポーネント内だとthisで呼び出せる。
  //     this.$jsonp("https://script.google.com/macros/s/AKfycbzLxjNxZLZ5izrM5boDp0nM396uyzReduC7nr2axZepkPhXUJwS9sP3_rn3268EOP49bw/exec",{ callbackName: "callbackFunction" })
  //     .then(json => {
  //       // Success.
  //       this.eventData = json
  //     }).catch(err => {
  //       // Failed.
  //     })
  //   }
  // },
  computed: {
  },
  mounted() {
    // console.log(this.$route.params.event)
    const api_url = 'https://script.google.com/macros/s/AKfycbzLxjNxZLZ5izrM5boDp0nM396uyzReduC7nr2axZepkPhXUJwS9sP3_rn3268EOP49bw/exec' + '?id=' + this.$route.params.event;
    axios.get(api_url, {
      crossDomain: true
    }).then(response => this.eventData = response.data[0]);
  }
  // async asyncData({ $axios }) {
  //   try {
  //     const api_url = 'https://script.google.com/macros/s/AKfycbzLxjNxZLZ5izrM5boDp0nM396uyzReduC7nr2axZepkPhXUJwS9sP3_rn3268EOP49bw/exec?id=${}';
  //     const res = await $axios.$get(api_url, {
  //       crossDomain: true
  //     })
  //     return {
  //       eventData: res[1]
  //     }
  //   }catch(error) {
  //     console.log('Error occurred while getting data')
  //   }
  // }
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
