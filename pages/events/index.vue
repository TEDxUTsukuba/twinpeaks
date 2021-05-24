<template>
  <section id="wrapper-dark">
    <section class="section is-halfheight has-text-centered" id="trigger">
        <i class="mdi mdi-calendar-multiple has-text-primary is-1" /> 
        <h1 class="title is-1 is-spaced">{{ $t('events.title') }}</h1>
        <h1 class="subtitle has-text-grey-light">{{ $t('events.subtitle') }}</h1>
    </section>
    <section class="section">
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
              <p class="card-header-title has-text-right">
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
    </section>
    <section class="section">
      <h2 class="title has-text-centered has-text-primary">{{ $t('events.other') }}</h2>
      <div v-for="(event, index) in eventList" :key="index" class="" id="#content">
        <div :class="`nmp-card-${changeColor(event.date)}`" style="margin-bottom: 1rem;">
          <!-- <nuxt-link :to="`./${event.id}`"> -->
            <div class="columns">
              <div class="column is-5">
                <h1 class="title is-4">{{ event.name }}</h1>
                <p class="subtitle is-size-6">
                  {{ new Date(event.date).toLocaleDateString().replace(/-/g, '/') }}
                  <span class="is-size-7" v-if="event.from">{{ event.from }}</span><span class="is-size-7" v-if="event.to"> - {{ event.to }}</span>
                </p>
              </div>
              <div class="column">
                <p class="is-size-7" v-if="$i18n.locale == 'ja'">{{ event.summary_ja }}</p>
                <p class="is-size-7" v-if="$i18n.locale == 'en'">{{ event.summary_en }}</p>
              </div>
              <div class="column is-2-tablet has-text-right is-flex" style="justify-content: space-between; flex-direction: column; margin-top: auto;">
                <p v-if="isUpcoming(event.date) > 0">
                  <span class="tag is-light">{{ $t('events.upcoming') }}</span>      
                </p>
                <p v-else>
                  <span class="tag is-dark">{{ $t('events.ended') }}</span>
                </p>
                <!-- <button class="button is-white is-gradient is-rounded is-small" style="margin-top: 10px;">
                  {{ $t('button.readmore') }}
                </button> -->
              </div>
            </div>
          <!-- </nuxt-link> -->
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import axios from 'axios';

export default {
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
        content: "Explore our upcoming events that bring people together to learn, talk, and collaborate." 
      },
      { 
        hid: 'og:description', 
        name: 'og:description', 
        content: "Explore our upcoming events that bring people together to learn, talk, and collaborate." 
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
        content: 'https://www.tedxutsukuba.com/twitter_summary.png'
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
    }
  },
  mounted(){
    const api_url = "https://script.google.com/macros/s/AKfycbzEOXQ3-iyyjdQs4FrraL7pRnl0vtUXkK2oVzvVh8qOoCA9-XjsgtBFX6M-tCThZ9tSJg/exec";
    axios.get(api_url, {
      crossDomain: true
    }).then(response => this.eventList = response.data);
  // const scene1 = this.$scrollmagic
  //   .scene({
  //     triggerElement: '#trigger',
  //     triggerHook: 0.75,
  //     offset: 0,
  //     reverse: false
  //   })
  //   .setTween('#content', {
  //     css: {
  //       opacity: 1
  //     }
  //   })
  //   this.$scrollmagic.addScene(scene1)
   },
   computed: {
    // 日付が新しい順に並び替え
    sortItems() {
      return this.eventList.sort((a, b) => {
          return (a.date < b.date) ? -1 : (a.date > b.date) ? 1 : 0;
        });;
    },
  }
}
</script>

<style scoped>
  /* #content {
    opacity: 0;
    transition: all 1s;
  } */
</style>