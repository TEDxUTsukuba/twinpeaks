<template>
  <div :id="id">
    {{ data }}
    <div class="columns">
      <div class="column wallpaper-wrapper">
        <img v-if="event.thumbnail" :src="event.thumbnail.url" :alt="event.thumbnail.alt">
      </div>
      <aside class="column section is-5" style="display: flex; justify-content: middle; align-items: center;">
        <div class="is-block block">
          <p class="is-uppercase has-text-primary">{{ getDaysTogo(event.startat) }}</p><br>
          <h1 class="title is-2">{{ event.name }}</h1>
          <div v-if="event.issignuprequired == true">
            <!-- 申込開始日より前 -->
            <!-- <b-tooltip v-if="isBefore(formatDate(event.signupopenat)) < 0" :label="`Registration will be open on ${formatDate(event.signupopenat)}`" position="is-top" type="is-primary" style="width: 100%;">
              <a class="level-item button is-gradient is-rounded is-fullwidth disabled">Sign up</a>
            </b-tooltip>
            <b-tooltip v-else-if="isBefore(event.signupopenat) < 0 && isBefore(event.signupcloseat) < 0" :label="`Registration will be closed on ${formatDate(event.signupcloseat)}.`" position="is-top" type="is-primary" style="width: 100%;">
              <a :href="event.signupUrl" class="level-item button is-gradient is-rounded is-fullwidth">Sign up</a>
            </b-tooltip>
            <b-tooltip v-else :label="`Registration was closed on ${formatDate(event.signupcloseat)}.`" position="is-top" type="is-primary" style="width: 100%;">
              <a class="level-item button is-gradient is-rounded is-fullwidth disabled">Sign up</a>
            </b-tooltip> -->
          </div>
        </div>
      </aside>
    </div>
    <!-- <hr style="margin: 0.5rem 0 1rem 0;"> -->
    <div class="divider" />
    <div class="columns is-variable is-5 reverse-row-order">
      <aside class="container column is-5">
        <hr class="is-hidden-tablet">
          <span class="is-size-4 has-text-weight-bold">{{ formatDate(event.startat) }}</span><br class="is-hidden-mobile">
          <span class="is-size-5"> {{ formatTime(event.startat) }}</span>
          <span class="is-size-5" v-if="event.endat"> - {{ formatTime(event.endat) }}</span>
        <!-- <a href="" class="is-size-6">Add to Calendar</a>
        <no-ssr>
          <add-to-calendar
            :title="event.name" 
            :location="event.location || event.webcast_url" 
            start=""
            to=""
            :details="event.summary_ja + '<br>' + event.summary_en + '<br><br>www.tedxutsukuba.com/events'" 
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
        <div v-if="event.eventtype === 'virtual'">
          <p class="is-size-5">Virtual Event</p>
          <p>{{ event.webcast }}</p>
          <a :href="event.webcastUrl" target="_blank" rel="noopener noreferrer" class="is-size-6">Join webcast</a>
        </div>
        <div v-else-if="event.eventtype === 'hybrid'">
          <p class="is-size-5">Hybrid Event</p>
          <a :href="event.webcastUrl" target="_blank" rel="noopener noreferrer" class="is-size-6">Join webcast</a><br>
          <span class="is-size-6">{{ event.place }}</span><br>
        </div>
        <div v-else>
          <p class="is-size-5">Location</p>
          <span class="is-size-6">{{ event.place }}</span><br>
        </div>
        <hr>
        <p v-if="event.isfree == true" class="is-size-6 mb-6">
          Free
        </p>
        <p v-else class="is-size-6 mb-6">
          Not Free
        </p>
        <p v-if="event.issignuprequired == true" class="is-size-6 mb-6">
        </p>
        <p v-else class="is-size-6 mb-6">
          Sign Up Not Required
        </p>
        <hr class="is-hidden-tablet">
        <div class="divider" />
      </aside>
      <div class="container content column is-7">
        <p v-html="event.description"></p>
        <hr>
        <a :href="`https://www.facebook.com/sharer/sharer.php?u=https://www.tedxutsukuba.com${this.$route.path}`" target="_blank" rel="nofollow noopener noreferrer" class="is-size-4 has-text-dark"><i class="mdi mdi-facebook" /></a>
        <a v-if="$i18n.locale == 'ja'" :href="`https://twitter.com/intent/tweet?text=${event.name}に参加しよう！&via=tedxutsukuba&related=tedxutsukuba&url=www.tedxutsukuba.com/events/${event.id}`" target="_blank" rel="noopener noreferrer" class="is-size-4 has-text-dark" data-show-count="false"><i class="mdi mdi-twitter" /></a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        <a v-if="$i18n.locale == 'en'" :href="`https://twitter.com/intent/tweet?text=Join ${event.name}&&via=tedxutsukuba&related=tedxutsukuba&url=www.tedxutsukuba.com/en/events/${event.id}`" target="_blank" rel="noopener noreferrer" class="is-size-4 has-text-dark" data-show-count="false"><i class="mdi mdi-twitter" /></a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        <br><br>
      </div>
    </div>
  </div>
</template>

<script>
import Meta from '~/assets/mixins/eventmixin'
import { request, gql } from '~/lib/datocms'
import { Image } from "vue-datocms";
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'

export default {
  mixins: [Meta],
  components: {
    "datocms-image": Image
  },
  data () {
    return {
    }
  },
  async asyncData({ params, i18n }) {
    // console.log(i18n.locale)
    const data = await request({
      query: gql`
      {
        event(locale: ${i18n.locale}, filter: {id: {eq: "${params.event}"}}) {
          id
          name
          startat
          endat
          eventtype
          place
          description(markdown: true)
          issignuprequired
          signupopenat
          signupcloseat
          webcastUrl
          isfree
          thumbnail {
            alt
            url
          }
        }
      }
    `
    })
    return { ready: !!data, ...data }
  },
  head: {
    title: this.$route.params.event | 'TEDxUTsukuba',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
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
        return this.$i18n.t('events.ended')
      } else {
        return (Math.floor(diff/(1000*60*60*24)) + 1).toString() + ' days to go'
      }
    },
    isBefore(eventDate) {
      // 現在の日付との差分を取得
      const diff = new Date(eventDate).getTime() - new Date().getTime()
      // console.log(diff)
      return diff
    },
    formatDate(date) {
      return format(parseISO(date), 'yyyy/MM/dd')
    },
    formatTime(date) {
      return format(parseISO(date), 'HH:mm')
    },
  //   getData (apiUrl) {
  //     // this.$jsonp(url, dataObj, timeout) で使える。 Vueコンポーネント内だとthisで呼び出せる。
  //     this.$jsonp("https://script.google.com/macros/s/AKfycbzLxjNxZLZ5izrM5boDp0nM396uyzReduC7nr2axZepkPhXUJwS9sP3_rn3268EOP49bw/exec",{ callbackName: "callbackFunction" })
  //     .then(json => {
  //       // Success.
  //       this.event = json
  //     }).catch(err => {
  //       // Failed.
  //     })
  //   }
  },
  computed: {
  },
  mounted() {
    // console.log(this.$route.params.event)
    // console.log(this.$route.params.event);
    // const api_url = "https://script.google.com/macros/s/AKfycbzEOXQ3-iyyjdQs4FrraL7pRnl0vtUXkK2oVzvVh8qOoCA9-XjsgtBFX6M-tCThZ9tSJg/exec" + '?id=' + this.$route.params.event;
    // axios.get(api_url, {
    //   crossDomain: true
    // }).then(response => this.event = response.data[0]);
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
  .reverse-row-order {
    flex-direction: row-reverse;
  }
</style>