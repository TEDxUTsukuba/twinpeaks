<template>
  <section id="wrapper-dark">
    <section class="section has-text-centered-mobile">
      <h1 class="subtitle is-4 is-family-narrow has-text-primary">TEDxUTsukuba{{ conference.name }}</h1>
      <h1 class="title is-1">{{ conference.theme }}</h1>
      <p v-if="conference.date"><span class="is-family-narrow">Date</span>: 
        {{ formatDate(conference.date, $i18n.locale) }}
        <span v-if="conference.startTime">{{ formatTime(conference.startTime) }}</span><span v-if="conference.endTime"> - {{ formatTime(conference.endTime) }}</span>
      </p>
      <p v-if="conference.location"><span class="is-family-narrow">Place</span>: {{ conference.location }}</p>
      <a v-if="conference.webcastUrl" class="button is-rounded is-gradient mt-4" :href="conference.webcastUrl" target="_blank"><span v-if="conference.webcastService">{{ conference.webcastService }}で</span>{{ $t('about.ted.watch')}}</a>
    </section>

    <section class="section" v-if="conference.themeArtwork">
      <figure class="image">
        <datocms-image :data="conference.themeArtwork.responsiveImage" :alt="conference.name" style="position: initial;"/>
        <!-- <img :src="conference.themeArtwork.url" :alt="conference.name" style="position: initial;"/> -->
      </figure>
    </section>
    
    <section class="section" id="card-0" v-if="conference.speakers[0]">  
      <h1 class="title is-0">{{ $t('2020.speaker.title') }}</h1>
      <div v-for="(speaker, index) in conference.speakers" :key="index">
        <div class="columns is-multiline is-centered is-vcentered mb-6">
          <div class="card-image column is-12-mobile is-3-tablet is-4-desktop is-3-widescreen is-3-fullhd">
            <div class="image-box">
              <figure class="image is-1by1" v-if="speaker.portrait">
                <img class="nmp-card-image" :src="speaker.portrait.url" style="object-fit: cover;" />
                <!-- <datocms-image :data="speaker.portrait.responsiveImage" /> -->
              </figure>
            </div>
          </div>
          <div class="column has-text-centered-mobile">
            <h1 class="title is-2 ja" v-if="$i18n.locale == 'en'">{{ speaker.firstName }} {{ speaker.middleName }} {{ speaker.lastName }}</h1>
            <h1 class="title is-2 ja" v-else>{{ speaker.lastName }} {{ speaker.middleName }} {{ speaker.firstName }}</h1>
              <h1 class="subtitle is-size-5 has-text-primary is-family-narrow" v-show="speaker.jobTitleOrRole">{{ speaker.jobTitleOrRole }}</h1>
              <p class="has-text-left" style="text-align: justify;">
                {{ speaker.description }}
              </p>
              <br>
              <a class="button is-gradient is-rounded" :href="`https://www.youtube.com/watch?v=${speaker.youtubeId}`" target="_blank">
                <i class="mdi mdi-youtube is-size-4" />
                <span style="padding-left: 0.25rem;">{{ $t('about.ted.watch') }}</span>
              </a>
          </div>
        </div>
      </div>
    </section>

    <section class="hero has-background-primary" v-if="conference.theme">
      <section class="section">
        <h1 class="title is-0 has-text-white">
          {{ $t('2017.concept.title') }}
        </h1>
        <h1 class="title is-3 has-text-white">
          "{{ conference.theme }}"
        </h1>
        <p class="has-text-white has-text-centered-mobile mb-4" v-html="conference.themeStatement" />
      </section>
    </section>

    <section class="hero" v-if="conference.timetable">
      <div class="hero-body">
        <section class="section">
          <h1 class="title is-0">{{ $t('2020.participance.title') }}</h1>
          <div v-for="(item, index) in conference.timetable" :key="index" style="max-width: 560px;" class="mx-auto">
            <div class="nmp-dark p-4">
              <div class="">
                <span class="tag is-dark"><i class="mdi mdi-clock" />
                  {{ item.startAt.toString().substr(0, 2) }}:{{ item.startAt.toString().substr(2, 2) }}
                  <span v-if="item.endAt"> - {{ item.endAt.toString().substr(0, 2) }}:{{ item.endAt.toString().substr(2, 2) }}</span>
                </span>
              </div>
              <div class="mt-2">
                <h1 class="title is-4" v-if="$i18n.locale == 'ja'">{{ item.title_ja }}</h1>
                <h1 class="title is-4" v-else>{{ item.title_en }}</h1>
                <p v-if="item.description">{{ item.description }}</p>
              </div>
              <figure class="image my-5" v-if="item.image">
                <img :src="item.image" />
              </figure>
            </div>   
          </div>
        </section>
      </div>
    </section>

    <section class="hero" id="venue-title" v-if="conference.location">
    <!-- <section class="hero bg-venue" id="venue-title" :style="`background: url(${conference.locationImage.url});`"> -->
      <div class="hero-body">
        <section class="section" id="venue">
          <h1 class="title is-0 has-text-white">
            {{ $t('2017.venue.title') }}
          </h1>
          <h1 class="title is-3 has-text-white">
            {{ conference.location }}
          </h1>
          <p class="has-text-white">
            {{ conference.locationDescription }}
          </p>
          <hr>
          <p class="is-size-7 has-text-white">
            {{ conference.locationAccess }}
          </p>
        </section>
      </div>
    </section>
    <section v-if="conference.locationGooglemapsEmbed">
      <figure class="image is-3by1">
        <iframe class="has-ratio" :src="conference.locationGooglemapsEmbed" width="100%" rameborder="0" style="margin: 0 auto; border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </figure>
    </section>



  </section>
</template>

<script>
import { request, gql } from '~/lib/datocms'
import { Image } from "vue-datocms";
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'

export default {
  components: {
    "datocms-image": Image
  },
  async asyncData({ params, i18n }) {
    const data = await request({
      query: gql`
      {
        conference(locale: ${i18n.locale}, filter: {name: {eq: "${params.id}"}}) {
          name
          date
          doorOpeningTime
          startTime
          endTime
          theme
          themeArtwork {
            url
            responsiveImage (imgixParams: {w: "800", fit: crop, crop: top}) {
              src
              width
              height
            }
          }
          themeStatement(markdown: false)
          location
          locationDescription
          locationGooglemapsEmbed
          locationImage {
            url
          }
          socialMediaDescription
          speakers {
            firstName
            middleName
            lastName
            jobTitleOrRole
            description
            portrait {
              url
              responsiveImage(imgixParams: {ar: "1:1", fit: crop}) {
                src
              }
            }
            youtubeId
          }
          timetable
          webcastService
          webcastUrl
        }
      }
    `
    })
    return { ready: !!data, ...data }
  },
  head() {
    if (!this.ready) {
      return 
    } 
    else {
      return {
        htmlAttrs: {
          lang: this.$i18n.locale
        },
        title: "TEDxUTsukuba " + this.conference.name,
        description: this.conference.socialMediaDescription || this.conference.themeStatement,
        meta: [
          {
            hid: 'og:title',
            property: 'og:title',
            content: "TEDxUTsukuba " +  this.conference.name
          },
          {
            property: 'og:locale',
            content: this.$i18n.locale
          },
          {
            hid: 'og:description',
            property: 'og:description',
            content: this.conference.socialMediaDescription || this.conference.themeStatement,
          }
        ],
        link: [
          {
            rel: 'canonical',
            href: `${process.env.BASE_URL}${this.currentPath}`
          }
        ]
      }
    }
  },
  methods: {
    formatDate(date, locale) {
      return format(parseISO(date), 'PPP')
    },
    formatTime(datetime, locale) {
      return format(parseISO(datetime), 'HH:mm')
    }
  }
}
</script>

<style lang="scss" scoped>
.bg-venue{
  background-repeat: no-repeat;
  background-size: cover;
  background-position:center center;
  padding: 30px;
  overflow: hidden;
  position: relative;
  z-index: 0;
}
.bg-venue:before{
  content: "";
  display: block;
  position: absolute;
  background: inherit;
  filter: brightness(75%) contrast(50%) blur(5px);
  top: -20px;
  right: -20px;
  bottom: -20px;
  left: -20px;
  z-index: -1;
}
</style>