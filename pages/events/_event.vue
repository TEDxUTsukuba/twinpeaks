<template>
  <div :id="id">
    <div class="columns">
      <div class="column wallpaper-wrapper">
        <img class="wallpaper" v-if="eventData.thumbnail" :src="`/sample/${eventData.thumbnail}.jpg`">
      </div>
      <aside class="column container is-5" style="display: flex; justify-content: middle; align-items: center;">
        <div>
          <p class="is-uppercase">{{ getDaysTogo(eventData.date) }}</p><br>
          <h1 class="title is-3">{{ eventData.name }}</h1>
        </div>
      </aside>
    </div>
    <div class="columns">
      <div class="column is-7">
        <!-- <h1 class="is-size-4"><i class="mdi mdi-export-variant" /></h1> -->
      </div>
      <!-- 申込必要の場合のみ描画 -->
      <div class="column is-5 has-text-centered" v-if="eventData.isSignupRequired == true">
        <!-- 申込開始日より前 -->
        <b-tooltip v-if="eventData.signup_open !== undefined && isBefore(eventData.signup_open) > 0" :label="`Registration will be open in ${new Date(eventData.signup_open).toLocaleDateString()}`" position="is-top" type="is-primary" style="width: 100%;">
          <a class="level-item button is-white is-gradient is-rounded is-fullwidth" disabled>Sign up</a>
        </b-tooltip>
        <!-- 申込終了日より前 -->
        <b-tooltip v-else-if="isBefore(eventData.signup_close) > 0" :label="`Registration ends in ${new Date(eventData.signup_close)}`" position="is-top" type="is-primary" style="width: 100%;">
          <a :href="eventData.signup_url" target="_blank" rel="noopener noreferrer" class="level-item button is-white is-gradient is-rounded is-fullwidth">Sign up</a>
        </b-tooltip>
        <!-- 申込終了日がなく、開催日より前 -->
        <b-tooltip v-else-if="eventData.signup_close === undefined && isBefore(eventData.date) > 0" label="Sign up now!" position="is-top" type="is-primary" style="width: 100%;">
          <a :href="eventData.signup_url" target="_blank" rel="noopener noreferrer" class="level-item button is-white is-gradient is-rounded is-fullwidth">Sign up</a>
        </b-tooltip>
        <!-- 申込終了日より後 -->
        <b-tooltip v-else-if="isBefore(eventData.signup_close) < 0" :label="`Registration closed in ${new Date(eventData.signup_close).toLocaleDateString()}`" position="is-top" type="is-primary" style="width: 100%;">
          <a class="button is-white is-gradient is-rounded is-fullwidth" disabled>Sign up</a>
        </b-tooltip>
        <!-- 申込終了日がなく、開催日より後 -->
        <b-tooltip v-else label="Registration closed" position="is-top" type="is-primary" style="width: 100%;">
          <a class="button is-white is-gradient is-rounded is-fullwidth" disabled>Sign up</a>
        </b-tooltip>
      </div>
    </div>
    <hr style="margin: 0.5rem 0 1rem 0;">
    <div class="columns is-variable is-5">
      <div class="container column is-7">
          <p v-if="$i18n.locale == 'ja'" v-html='eventData.description_ja'></p>
          <p v-if="$i18n.locale == 'en'" v-html='eventData.description_en'></p>
          <br>
          <p v-if="$i18n.locale == 'ja'" v-html='eventData.description_en'></p>
          <p v-if="$i18n.locale == 'en'" v-html='eventData.description_ja'></p>
          <div v-if="eventData.external_url"><hr><a :href="eventData.external_url">{{ eventData.external_url }}</a></div>
          <hr>
          Share With Friends
          <br>
          <a v-if="$i18n.locale == 'ja'" :href="`https://twitter.com/intent/tweet?text=${eventData.name}に参加しよう！&url=https://tedxutsukuba.com/events/${eventData.id}`" target="_blank" rel="noopener noreferrer" class="is-size-4 has-text-dark" data-show-count="false"><i class="mdi mdi-twitter" /></a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          <a v-if="$i18n.locale == 'en'" :href="`https://twitter.com/intent/tweet?text=Join ${eventData.name}&url=https://tedxutsukuba.com/events/${eventData.id}`" target="_blank" rel="noopener noreferrer" class="is-size-4 has-text-dark" data-show-count="false"><i class="mdi mdi-twitter" /></a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          <!-- <a href="https://twitter.com/intent/tweet?button_hashtag=TEDxUTsukuba&ref_src=twsrc%5Etfw" class="button is-rounded" data-show-count="false"><i class="mdi mdi-twitter" />Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> -->
          <!-- <a href="" target="_blank" rel="noopener noreferrer" class="is-size-4 has-text-dark"><i class="mdi mdi-facebook" /></a> -->
          <!-- <a href="" target="_blank" rel="noopener noreferrer" class="is-size-4 has-text-dark"><i class="mdi mdi-link-variant" /></a> -->
      </div>
      <aside class="container column is-5">
        <p class="is-size-5">{{ new Date(eventData.date).toLocaleDateString().replace(regex, '/') }}</p>
        <p class=""><span v-if="eventData.from">{{ eventData.from }}</span><span v-if="eventData.to"> - {{ eventData.to }}</span></p>
        <!-- <a href="" class="is-size-6">Add to Calendar</a>
        <no-ssr>
          <add-to-calendar
            :title="eventData.name" 
            :location="eventData.location || eventData.webcast_url" 
            start=""
            to=""
            :details="eventData.summary_ja + '<br>' + eventData.summary_en + '<br><br>www.tedxutsukuba.com/events'" 
            inline-template>
            <div>
              <google-calendar id="google-calendar">
                <i class="mdi mdi-google" />
              </google-calendar>  
              <microsoft-calendar id="microsoft-calendar">
                <i class="mdi mdi-microsoft-outlook" />
              </microsoft-calendar>
              <office365-calendar id="office365-calendar">
                <i class="mdi mdi-microsoft-office" />
              </office365-calendar>
            </div>
          </add-to-calendar>
        </no-ssr> -->
        <hr>
        <div v-if="eventData.type === 'virtual'">
          <p class="is-size-5">Virtual Event</p>
          <p>{{ eventData.webcast }}</p>
          <a :href="eventData.webcast_url" target="_blank" rel="noopener noreferrer" class="is-size-6">Join webcast</a>
        </div>
        <div v-else-if="eventData.type === 'hybrid'">
          <p class="is-size-5">Hybrid Event</p>
          <p>{{ eventData.webcast }}</p>
          <a :href="eventData.webcast_url" target="_blank" rel="noopener noreferrer" class="is-size-6">Join webcast</a><br>
          <span class="is-size-6" v-if="$i18n.locale == 'ja'">{{ eventData.location_ja }}</span><br>
          <span class="is-size-6" v-if="$i18n.locale == 'en'">{{ eventData.location_en }}</span><br>
          <a :href="eventData.googlemaps" target="_blank" rel="noopener noreferrer" class="is-size-6">Open in Google Maps</a>
        </div>
        <div v-else>
          <p class="is-size-5">Location</p>
          <p v-if="$i18n.locale == 'ja'">{{ eventData.location_ja }}</p>
          <p v-if="$i18n.locale == 'en'">{{ eventData.location_en }}</p>
          <a :href="eventData.googlemaps" target="_blank" rel="noopener noreferrer" class="is-size-6">Open in Google Maps</a>
        </div>
        <hr>
        <p v-if="eventData.isFree === false" class="is-size-6 mb-6">
          Adult: JPY {{ eventData.fee_adult.toLocaleString() }}<br>
          Student: JPY {{ eventData.fee_student.toLocaleString() }}
        </p>
        <p v-else class="is-size-5 mb-6">
          Free
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
  head: {
    title: 'Event detail | TEDxUTsukuba',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 
        hid: 'description', 
        name: 'description', 
        content: "TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. Our event is called TEDxUTsukuba, where x = independently organized TED event. " 
      },
      { 
        hid: 'twitter:card', 
        name: 'twitter:card', 
        content: 'summary' 
      },
      { 
        hid: 'twitter:site', 
        name: 'twitter:site', 
        content: '@tedxutsukuba' 
      },
      { 
        hid: 'twitter:creator', 
        name: 'twitter:creator', 
        content: '@tedxutsukuba' 
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Event | TEDxUTsukuba'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://tedxutsukuba.com/events'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://www.tedxutsukuba.com/u_logo_banner.jpg'
      }
    ]
  },
  filters: {
    currencydecimal (value) {
      return 
    }
  },
  methods: {
    getDaysTogo(eventDate){
      const diff = new Date(eventDate).getTime() - new Date().getTime();
      if (diff < 8640000) {
        return '開催終了 | Ended'
      } else {
        return (Math.floor(diff/(1000*60*60*24)) + 1).toString() + ' days to go'
      }
    },
    isBefore(eventDate) {
      // 現在の日付との差分を取得
      const diff = new Date(eventDate).getTime() - new Date().getTime()
      // console.log(diff)
      return diff
    }
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
  },
  computed: {
  },
  mounted() {
    // console.log(this.$route.params.event)
    const api_url = 'https://script.google.com/macros/s/AKfycbzLxjNxZLZ5izrM5boDp0nM396uyzReduC7nr2axZepkPhXUJwS9sP3_rn3268EOP49bw/exec' + '?id=' + this.$route.params.event;
    axios.get(api_url, {
      crossDomain: true
    }).then(response => this.eventData = response.data[0]);
  }
  // async asyncData({ $axios, params }) {
  //   try {
  //     const api_url = `https://script.google.com/macros/s/AKfycbzLxjNxZLZ5izrM5boDp0nM396uyzReduC7nr2axZepkPhXUJwS9sP3_rn3268EOP49bw/exec?id=${params.event}`;
  //     const res = await $axios.$get(api_url, {
  //       crossDomain: true
  //     })
  //     return {
  //       eventData: res
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
    filter: brightness(95%);
    width: 100%;
    padding: 0;
    height: 30vh;
    object-fit: cover;
  }
</style>
