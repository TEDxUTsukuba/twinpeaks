<template>
  <section id="wrapper-dark">
    <section class="section" id="trigger">
      <div class="nmp-card has-text-centered-mobile has-text-left">
        <h1 class="title is-1 is-spaced">{{ $t('events.title') }}</h1>
        <h1 class="subtitle has-text-grey-light">{{ $t('events.subtitle') }}</h1>
      </div>
    </section>
    <section class="section">
      <h2 class="title has-text-centered has-text-primary">{{ $t('events.main') }}</h2>
      <div class="columns is-mobile has-text-centered">
        <div class="column">
          <nuxt-link to="/events/2020">
            <figure class="image">
              <img src="/carousel/2020jijimuge.png">
            </figure>
            <br>
            <p class="title">TEDxUTsukuba 2020</p>
            <p class="subtitle">JIJIMUGE</p>
            <span class="tag is-dark" v-if="$i18n.locale == 'en'">Ended</span>
            <span class="tag is-dark" v-if="$i18n.locale == 'ja'">開催終了</span>
          </nuxt-link>
        </div>
        <div class="column">
          <nuxt-link to="/events/2019">
            <figure class="image">
              <img src="/carousel/2019cophilaction.png">
            </figure>
            <br>
            <p class="title">TEDxUTsukuba 2019</p>
            <p class="subtitle">CoPhilAction</p>
            <span class="tag is-dark" v-if="$i18n.locale == 'en'">Ended</span>
            <span class="tag is-dark" v-if="$i18n.locale == 'ja'">開催終了</span>
          </nuxt-link>
        </div>
      </div>
    </section>
    <section class="section">
      <h2 class="title has-text-centered has-text-primary">{{ $t('events.other') }}</h2>
      <div v-for="(event, index) in eventList" :key="event.id" class="" id="#content">
        <div :class="`nmp-card-${changeColor(event.date)}`" style="margin-bottom: 1rem;">
          <a :href="`./${event.id}`">
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
                  <span class="tag is-light" v-if="$i18n.locale == 'en'">Upcoming</span>
                  <span class="tag is-light" v-if="$i18n.locale == 'ja'">近日開催</span>         
                </p>
                <p v-else>
                  <span class="tag is-dark" v-if="$i18n.locale == 'en'">Ended</span>
                  <span class="tag is-dark" v-if="$i18n.locale == 'ja'">開催終了</span>
                </p>
                <button class="button is-white is-gradient is-rounded is-small" style="margin-top: 10px;">
                  {{ $t('button.readmore') }}
                </button>
              </div>
            </div>
          </a>
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
      dataLoadFinish: false
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
    const api_url = "https://script.google.com/macros/s/AKfycbzLxjNxZLZ5izrM5boDp0nM396uyzReduC7nr2axZepkPhXUJwS9sP3_rn3268EOP49bw/exec";
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