<template>
  <section id="wrapper-dark">
    <section class="section" id="trigger">
      <div class="nmp-card has-text-centered-mobile has-text-left">
        <h1 class="title is-1 is-spaced">{{ $t('events.title') }}</h1>
        <h1 class="subtitle has-text-grey-light">{{ $t('events.subtitle') }}</h1>
      </div>
      
      <div class="columns is-mobile is-multiline" id="#content">
        <div v-for="(event, index) in eventList" :key="event.id" class="column is-4-fullhd is-4-widescreen is-6-desktop is-6-tablet is-12-mobile">
          <div class="column nmp-card-dark">
            <h1 class="title is-4">{{ event.name }}</h1>
            <p class="subtitle is-size-6">
              {{ new Date(event.date).toLocaleDateString().replace(/-/g, '/') }}
              <span class="is-size-7" v-if="event.from">{{ event.from }}</span><span class="is-size-7" v-if="event.to"> - {{ event.to }}</span>
            </p>
            <p class="is-size-7" v-if="$i18n.locale == 'ja'" v-html='event.summary_ja'></p>
            <p class="is-size-7" v-if="$i18n.locale == 'en'" v-html='event.summary_en'></p>
            <p v-if="isUpcoming(event.date) < 0" style="margin-top: 10px;">
              <span class="tag is-danger" v-if="$i18n.locale == 'en'">Ended)</span>
              <span class="tag is-danger" v-if="$i18n.locale == 'ja'">開催終了</span>
            </p>

          </div>
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
      eventList: {}
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
  methods: {
    isUpcoming(eventDate) {
      // 現在の日付との差分を取得
      const diff = new Date(eventDate).getTime() - new Date().getTime()
      console.log(diff)
      return diff
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