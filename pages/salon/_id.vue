<template>
  <section id="wrapper-dark">

    <!-- イベント概要 -->
    <section class="section has-text-centered-mobile">
      <h1 class="subtitle is-4 is-family-narrow has-text-primary">TEDxUTsukuba {{ salon.name }}</h1>
      <h1 class="title is-1">{{ salon.theme }}</h1>
      <p v-if="salon.date"><span class="is-family-narrow">Date</span>: 
        {{ formatDate(salon.date, $i18n.locale) }}
        <span v-if="salon.startTime">{{ formatTime(salon.startTime) }}</span><span v-if="salon.endTime"> - {{ formatTime(salon.endTime) }}</span>
      </p>
      <p v-if="salon.eventDelivery"><span class="is-family-narrow">Event Delivery</span>: {{ salon.eventDelivery }}</p>
      <p v-if="salon.location"><span class="is-family-narrow">Place</span>: {{ salon.location }}</p>
      <a v-if="salon.webcastUrl" class="button is-rounded is-gradient mt-4" :href="salon.webcastUrl" target="_blank"><span v-if="salon.webcastService">{{ salon.webcastService }}で</span>{{ $t('about.ted.watch')}}</a>
    </section>

    <!-- テーマアート -->
    <section class="section" v-if="salon.themeArtwork">
      <figure class="image">
        <!-- <datocms-image :data="salon.themeArtwork.responsiveImage" :alt="salon.name" style="position: initial;"/> -->
        <img :src="salon.themeArtwork.url" :alt="salon.name" style="position: initial; max-width: 640px;" class="mx-auto" />
      </figure>
    </section>

    <!-- オーガナイザーの情報とメッセージ -->
    <section class="section" v-if="salon.messageFromOrganizer">
      <article class="has-text-white notes" v-html="salon.messageFromOrganizer" />
      <p class="mt-3 has-text-right">TEDxUTsukuba {{ salon.name }}<br>Organizer<br>{{ salon.organizer }}</p>
    </section>
    

    <!-- イベントのテーマ -->
    <section class="hero has-background-primary" v-if="salon.theme">
      <section class="section">
        <h1 class="title is-0 has-text-white">
          {{ $t('2017.concept.title') }}
        </h1>
        <h1 class="title is-3 has-text-white">
          {{ salon.theme }}
        </h1>
        <article class="has-text-white has-text-centered-mobile mb-4" v-html="salon.themeStatement" />
      </section>
    </section>

    <!-- 当日のタイムテーブル -->
    <section class="hero" v-if="salon.timetable">
      <div class="hero-body">
        <section class="section">
          <h1 class="title is-0">{{ $t('2020.participance.title') }}</h1>
          <div v-for="(item, index) in salon.timetable" :key="index" style="max-width: 560px;" class="mx-auto mb-5">
            <div class="nmp-dark p-4">
              <div class="">
                <span class="tag is-white"><i class="mdi mdi-clock" />
                  {{ item.startAt.toString().substr(0, 2) }}:{{ item.startAt.toString().substr(2, 2) }}
                  <span v-if="item.endAt"> - {{ item.endAt.toString().substr(0, 2) }}:{{ item.endAt.toString().substr(2, 2) }}</span>
                </span>
              </div>
              <div class="mt-3">
                <p class="title is-size-5" v-if="$i18n.locale == 'ja'">{{ item.title_ja }}</p>
                <p class="title is-size-5" v-else>{{ item.title_en }}</p>
                <p v-if="item.description_ja" class="is-size-7">{{ item.description_ja }}</p>
                <p v-if="item.description_en" class="is-size-7">{{ item.description_en }}</p>
                <a v-if="item.link_url" :href="item.link_url" class="is-size-7">
                  <span v-if="$i18n.locale == 'en'">{{ item.link_text_en }}</span>
                  <span v-else>{{ item.link_text_ja }}</span>
                </a>
              </div>
              <figure class="image my-5" v-if="item.image">
                <img :src="item.image" />
              </figure>
            </div>   
          </div>
         <article class="is-size-7 pt-5 notes" v-html="salon.timetableNotes" />
        </section>
      </div>
    </section>

    <!-- 参加方法 -->
    <section v-if="salon.webcastUrl || salon.hasTicket" class="hero">
      <div class="hero-body">
        <section class="section">
          <h1 class="title is-0">{{ $t('about.ted.join') }}</h1>

          <!-- チケット(有料無料問わず)制度の場合 -->
          <div v-if="salon.hasTicket" class="mb-4">
            <p class="mb-3 notes">
              Price: <strong>JPY {{ salon.ticketPrice }}</strong> <span v-if="salon.ticketPriceStudent">(Student: <strong>{{ salon.ticketPriceStudent}}</strong>)</span>
            </p>

            <!-- チケットがAvailableにセットされている場合 -->
            <div v-if="salon.isTicketAvailable">
              <!-- チケットを入手するサイトが登録されている場合 -->
              <a v-if="salon.ticketSellingPageUrl" class="button is-gradient is-rounded my-3" :href="salon.ticketSellingPageUrl" target="_blank">
                <i class="mdi mdi-ticket is-size-4" />
                <span style="padding-left: 0.25rem;">{{ $t('2020.participance.premium.tiget') }}</span>
              </a>
            </div>
            <!-- チケットがAvailableにセットされていない場合 -->
            <div v-else>
              <span class="tag is-success">Tickets will be available on {{ formatDate(salon.ticketReleaseDate) }}</span>
            </div>

            <article class="is-size-7 pt-5 notes" v-html="salon.ticketNotes" />
          </div>
        </section>
      </div>
    </section>
    
    <!-- 会場 -->
    <section class="hero bg-venue" v-if="salon.location" id="venue-title" :style="salon.locationImage ? `background-image: url(${salon.locationImage.url});` : ''">
      <div class="hero-body">
        <section class="section" id="venue">
          <h1 class="title is-0 has-text-white">
            {{ $t('2017.venue.title') }}
          </h1>
          <h1 class="title is-3 has-text-white">
            {{ salon.location }}
          </h1>
          <p class="has-text-white">
            {{ salon.locationDescription }}
          </p>
          <hr>
          <p class="is-size-7 has-text-white">
            {{ salon.locationAccess }}
          </p>
          <p  class="is-size-7 pt-5 notes" v-html="salon.locationNotes" />
        </section>
      </div>
    </section>

    <!-- 会場の地図 -->
    <section v-if="salon.locationGooglemapsEmbed">
      <figure class="image is-3by1">
        <iframe class="has-ratio" :src="salon.locationGooglemapsEmbed" width="100%" rameborder="0" style="margin: 0 auto; border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </figure>
    </section>


    <section class="section notes" v-if="salon.additionalNotes">
      <article class="has-text-white is-size-7 pt-5 notes" v-html="salon.additionalNotes" />
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
        salon(locale: ${i18n.locale}, filter: {name: {eq: "${params.id}"}}) {
          name
          date
          doorOpeningTime
          startTime
          endTime
          organizer
          theme
          themeArtwork {
            url
            responsiveImage (imgixParams: {w: "800", fit: crop, crop: top}) {
              src
              width
              height
            }
          }
          themeStatement(markdown: true)
          location
          locationAccess
          locationDescription
          locationGooglemapsEmbed
          locationImage {
            url
          }
          hasTicket
          ticketPrice
          isTicketAvailable
          ticketPriceStudent
          ticketReleaseDate
          ticketSellingPageUrl
          timetable
          locationNotes(markdown: true)
          ticketNotes(markdown: true)
          programmeNotes(markdown: true)
          additionalNotes(markdown: true)
        }
      }
    `,
    preview: true
    }, )
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
        title: "TEDxUTsukuba " + this.salon.name,
        description: this.salon.socialMediaDescription || this.salon.themeStatement,
        meta: [
          {
            hid: 'og:title',
            property: 'og:title',
            content: "TEDxUTsukuba " +  this.salon.name
          },
          {
            property: 'og:locale',
            content: this.$i18n.locale
          },
          {
            hid: 'og:description',
            property: 'og:description',
            content: this.salon.socialMediaDescription || this.salon.themeStatement,
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