<template>
  <section id="wrapper-dark">
    <section class="section is-halfheight has-text-centered" id="trigger">
        <i class="mdi mdi-calendar-multiple has-text-primary is-size-1" /> 
        <h1 class="title is-1 is-spaced">{{ $t('events.title') }}</h1>
        <h1 class="subtitle has-text-grey-light">{{ $t('events.subtitle') }}</h1>
    </section>

    <section class="section">
      <div class="columns is-multiline">
        <div v-for="(event, index) in allEvents" :key="index" class="column is-one-third-fullhd is-one-third-widescreen is-half-desktop is-half-tablet" id="#content">
          <div :class="`nmp-${changeColor(event.date)}`">
            <header class="card-header">
              <p class="card-header-title has-text-grey is-size-7" v-if="isUpcoming(event.startat) > 0">{{ $t('events.upcoming') }}</p>      
              <p v-else class="card-header-title has-text-grey-light is-size-7">{{ $t('events.ended') }}</p>
            </header>
            <div class="card-image">
              <figure class="image is-5by3">
                <img :src="event.thumbnail.url" :alt="event.thumbnail.alt" style="object-fit: cover;" />
              </figure>
            </div>         
            <div class="card-content">
              <div class="media block">
                <div class="media-content">
                  <p class="subtitle is-size-6 has-text-grey-light">
                    {{ formatDate(event.startat) }}
                  </p>
                  <h1 class="title is-4">{{ event.name }}</h1>
                </div>
              </div>
              <div class="content block">
                <div class="block" v-if="isUpcoming(event.startat) > 0">
                  <span v-if="event.issignuprequired">
                    <span v-if="isUpcoming(event.signupopenat) > 0" class="tag is-light">
                      {{ formatDate(event.signupopenat)}} から受付開始
                    </span>
                    <span v-else-if="isUpcoming(event.signupopenat) <= 0 && isUpcoming(event.signupcloseat) > 0" class="tag is-red">
                      {{ formatDate(event.signupcloseat)}} までにお申し込みください
                    </span>
                    <span v-else class="tag is-dark">
                      申込期間終了
                    </span>
                  </span>
                  <span v-else class="tag is-dark">
                    申込不要
                  </span>
                </div>
                <div class="block has-text-right">
                  <nuxt-link :to="`/events/${event.id}`" class="button is-small is-rounded is-gradient">{{ $t('button.discover') }}</nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="divider" />
    <section class="section">
      <p>{{ $t('events.othertedx.title') }}</p>
      <h2 class="title is-2">{{ $t('events.othertedx.copy') }}</h2>
      <div class="block">
        <p v-html="$t('events.othertedx.description')" />
      </div>
      <div class="block has-text-right">  
        <a class="button is-rounded is-gradient" target="_blank" :href="`https://www.ted.com/tedx/events?autocomplete_filter=Japan&year=Year&month=Month&commit=Submit`">{{ $t('button.discover')}}<i class="mdi mdi-open-in-new" style="margin-left: 0.25rem;" /></a>
      </div>
    </section>

    <!-- <section class="section">
      <h2 class="title has-text-centered has-text-primary">{{ $t('events.main') }}</h2>
      <div class="columns is-multiline is-mobile">
        <div
          id="thumbnails"
          class="column is-3-widescreen is-half-desktop is-half-tablet is-half-mobile"
          v-for="(event, index) in mainEventList" :key="index"
          style="display: inline-block; vertical-align: top;"
        >
          <div class="nmp-dark">
            <header class="card-header">
              <p class="card-header-title">
                <span v-if="isUpcoming(event.date) < 0" class="is-size-7 has-text-grey">{{ $t('events.ended') }}</span>
                <span v-else class="is-size-7">{{ $t('events.upcoming') }}</span>
              </p>
            </header>
            <div class="card-image has-background-black-bis">
              <figure class="image is-16by9">
                <img v-if="event.imageFilePath" :src="event.imageFilePath" :alt="event.title" style="object-fit: cover;">
                <img v-else src="/defaultimage.png" alt="TEDxUTsukuba Logo">
              </figure>
            </div>
            <div class="card-content has-text-centered">
              <p class="title">{{ event.title }}</p>
              <p class="subtitle">{{ event.theme }}</p>
            </div>
          </div>
        </div>
      </div>
    </section> -->
  </section>
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
  async asyncData({ i18n }) {
    // console.log(i18n.locale)
    const data = await request({
      query: gql`
      {
        allEvents(orderBy: startat_DESC, locale: ${i18n.locale}, first: "10") {
          id
          eventtype
          startat
          endat
          webcastUrl
          signupopenat
          signupcloseat
          signupUrl
          place
          name
          issignuprequired
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
  data() {
    return {
      eventList: {},
      dataLoadFinish: false,
      mainEventList: [
        {
          title: 'TEDxUTsukuba 2020',
          theme: 'JIJIMUGE',
          imageFilePath: require('~/assets/mainvisual/2020/jijimuge.png'),
          date: '2020-11-29T12:00:01+09:00'
        },
        {
          title: 'TEDxUTsukuba 2019',
          theme: 'CoPhilAction',
          imageFilePath: require('~/assets/mainvisual/2019/cophilaction_emblem.png'),
          date: '2019-11-10T12:00:01+09:00'
        },
        {
          title: 'TEDxUTsukuba 2017',
          theme: 'moving',
          imageFilePath: require('~/assets/mainvisual/2017/moving logo-black透過.png'),
          date: '2017-11-26T12:00:01+09:00'
        },
        {
          title: 'TEDxUTsukuba 2016',
          theme: "joyn'",
          imageFilePath: require('~/assets/mainvisual/2016/joyn_white.png'),
          date: '2016-11-27T12:00:01+09:00'
        }
      ],
      subEventList: [
        {
          title: 'TEDxUTsukubaLive',
          theme: 'Bigger than us',
          imageFilePath: require('~/assets/mainvisual/2019Live/tedxutsukubalivewhite.png'),
          date: '2019-04-18T19:00:01+09:00'
        }
      ]
    }
  },
  head: {
    title: 'Event Listing | TEDxUTsukuba',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 
        hid: 'description', 
        name: 'description', 
        content: "Explore our upcoming events that bring people together to listen, learn and talk." 
      },
      { 
        hid: 'og:description', 
        name: 'og:description', 
        content: "Explore our upcoming events that bring people together to listen, learn and talk." 
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
        content: 'https://www.tedxutsukuba.com/events'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://www.tedxutsukuba.com/ogp/twitter_summary.png'
      }
    ]
  },
  methods: {
    isUpcoming(eventDate) {
      // 現在の日付との差分を取得
      const diff = new Date(eventDate).getTime() - new Date().getTime()
      // console.log(diff)
      return diff
    },
    changeColor(eventDate) {
      const diff = new Date(eventDate).getTime() - new Date().getTime()
      if (diff > 0) {
        return 'red'
      } else {
        return 'dark'
      }
    },
    formatDate(date) {
      return format(parseISO(date), 'yyyy/MM/dd HH:mm')
    },
  },
  mounted(){
    // const api_url = "https://script.google.com/macros/s/AKfycbzEOXQ3-iyyjdQs4FrraL7pRnl0vtUXkK2oVzvVh8qOoCA9-XjsgtBFX6M-tCThZ9tSJg/exec";
    // axios.get(api_url, {
    //   crossDomain: true
    // }).then(response => this.eventList = response.data);
  },
   computed: {
    // 日付が新しい順に並び替え
    // sortItems() {
    //   return this.eventList.sort((a, b) => {
    //       return (a.date < b.date) ? -1 : (a.date > b.date) ? 1 : 0;
    //     });;
    // },
  }
}
</script>