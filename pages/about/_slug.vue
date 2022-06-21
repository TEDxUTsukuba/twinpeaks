<template>
  <section id="wrapper-dark" class="font-awesome">
    <section class="section hero is-fullheight">
      <div class="columns is-multiline reverse-row-order is-centered is-variable is-6 mt-5">
        <div v-if="member.portrait" class="column is-5-tablet is-4-desktop mb-4">
          <div style="max-width: 320px; margin: 0 auto;">
            <figure class="image is-1by1">
              <img class="portrait" :src="member.portrait.responsiveImage.src">
            </figure>
          </div>
        </div>
        <div class="column">
          <h1 class="title is-1 is-spaced has-text-centered-mobile">
            <span v-if="$i18n.locale == 'en'">{{ member.firstName }} {{ member.middleName }} {{ member.lastName }}</span>
            <span v-if="$i18n.locale == 'ja'">{{ member.lastName }} {{ member.middleName }} {{ member.firstName }}</span>
          </h1>
          <p class="subtitle is-size-4 has-text-grey-light has-text-centered-mobile">
            {{ member.jobTitleOrRole }}
          </p>
          <br>
          <div class="text">
            <p class="midashi has-text-weight-bold has-text-primary">
              {{ $t('about.utsukuba.members.from') }}
            </p>
            <p class="has-text-weight-normal has-text-light">{{ member.homeState }}</p>

            <p class="midashi has-text-weight-bold has-text-primary" v-if="member.college">
              {{ $t('about.utsukuba.members.college') }}
            </p>
            <p class="has-text-weight-normal has-text-light">{{ member.college }}</p>
            
            <p class="midashi has-text-weight-bold has-text-primary" v-if="member.noXNoLife">
              {{ $t('about.utsukuba.members.noXNoLife') }}
            </p>
            <p class="has-text-weight-normal has-text-light">{{ member.noXNoLife }}</p>
            
            <p class="midashi has-text-weight-bold has-text-primary" v-if="member.message">
              {{ $t('about.utsukuba.members.message') }}
            </p>
            <p class="has-text-weight-normal has-text-light">
              {{ member.message }}
            </p>

            <p class="midashi has-text-weight-bold has-text-primary" v-if="member.messageFrom">
              {{ $t('about.utsukuba.members.messageFromYourColleague') }}
            </p>

            <p class="has-text-weight-normal has-text-light" v-if="member.messageFromYourColleague">
              {{ member.messageFromYourColleague }}
            </p> 

            <nuxt-link :to="member.messageFrom.id" v-if="member.messageFrom">
              <div class="media mt-3 p-3" style="border: 1px solid #444; border-radius: 8px;">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img :src="member.messageFrom.portrait.responsiveImage.src" class="is-rounded">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="is-size-7 has-text-weight-bold">{{ member.messageFrom.firstName }}</p>
                  <p class="is-size-7">{{ member.messageFrom.jobTitleOrRole }}</p>
                </div>
              </div>
            </nuxt-link>

            <p class="mt-6 midashi has-text-weight-bold has-text-primary" v-if="member.favouriteTedTalk || member.favouriteTedTalkYoutube">
              {{ $t('about.utsukuba.members.favouritetedtalk') }}
            </p>
          </div>
        </div>
      </div>
      <div class="has-text-centered">
        <figure class="image is-16by9 ted-embed-wrap">
          <iframe v-if="member.favouriteTedTalk"
            :src="`https://embed.ted.com/talks/lang/${locale}/${member.favouriteTedTalk.replace(regexTED, '')}`" 
            width="854"
            height="480"
            style="position:absolute;left:0;top:0;width:100%;height:100%"
            frameborder="0"
            scrolling="no"
            allowfullscreen>
          </iframe>
          <iframe v-if="member.favouriteTedTalkYoutube"
            :src="`https://youtube.com/embed/${member.favouriteTedTalkYoutube.replace(regexYouTube, '')}`"
            title="YouTube video player"
            allow="accelerometer;clipboard-write;gyroscope;picture-in-picture" 
            width="854"
            height="480"
            style="position:absolute;left:0;top:0;width:100%;height:100%"
            frameborder="0"
            scrolling="no"
            allowfullscreen>
          </iframe>
        </figure>
        <nuxt-link class="button is-medium is-rounded is-gradient mt-6" to="./utsukuba">{{ $t('button.back', { 0: $t('about.utsukuba.members.title').toLowerCase() } ) }}</nuxt-link>
      </div>
    </section>
  </section>
</template>


<script>
import Meta from '~/assets/mixins/meta'
import { request, gql } from '~/lib/datocms'
import Movie from '~/components/Movie.vue'
import externalLink from '@/assets/svg/external-link-alt-solid.svg'

export default {
  mixins: [Meta],
  components: {
    Movie, externalLink
  },
  data() {
    return {
      regexTED: new RegExp(/https:\/\/www.ted.com.talks\//),
      regexYouTube: new RegExp(/https:\/\/youtu.be\//),
      regexLang: new RegExp(/\?[\w\=]+/),
      locale: this.$i18n.locale,
      id: this.$route.query.id,
    }
  },
  async asyncData({ params, i18n }) {
    const data = await request({
      query: gql`
      {
        member(locale: ${i18n.locale}, filter: {id: {eq: ${params.slug}}}) {
          college
          favouriteTedTalk
          favouriteTedTalkYoutube
          firstName
          homeState
          jobTitleOrRole
          lastName
          middleName
          message
          messageFromYourColleague
          messageFrom {
            firstName 
            middleName 
            lastName
            id
            jobTitleOrRole
            portrait {
              responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 48, h: 48}) {
                src
              }
            }
          }
          noXNoLife
          portrait {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, h: 320}) {
              src
            }
          }
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
        title: this.member.lastName + " " + this.member.middleName + " " + this.member.firstName + " | TEDxUTsukuba",
        meta: [
          {
            hid: 'og:title',
            property: 'og:title',
            content: this.member.lastName + " " + this.member.middleName + " " + this.member.firstName + " | TEDxUTsukuba"
          },
          {
            property: 'og:locale',
            content: this.$i18n.locale
          },
          {
            hid: 'og:description',
            property: 'og:description',
            content: this.member.jobTitleOrRole + " | " + this.member.message
          },
          {
            hid: 'og:image',
            property: 'og:image',
            content: this.member.portrait ? this.member.portrait.responsiveImage.src : "https://www.tedxutsukuba.com/ogp/twitter_summary.png"
          },
          { 
            hid: 'twitter:card', 
            name: 'twitter:card', 
            content: 'summary' 
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
    addLangQuery(value) {
      if (this.$i18n.locale == 'ja') {
        return value + '?language=ja'
      } else {
        return value + '?language=en'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  p.midashi {
    margin-top: 1.5rem;
    margin-bottom: 0;
    color: #E62B1E;
    font-weight: bold;
  }
  h1.subtitle + p.midashi {
    margin-top: 0;
  }
  a {
    color: white;
    word-break: break-all;
  }
  #gallery {
    opacity: 0;
    transition: all 1s;
  }
  .portrait {
    margin: 0 auto;
    object-fit: cover;
    border-radius: 50%;
  }
  .reverse-row-order {
    flex-direction: row-reverse;
  }
  .ted-embed-wrap {
    filter: drop-shadow(0px 12px 28px rgba(0,0,0,0.6));
  }
</style>