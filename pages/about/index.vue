<template>
  <section id="wrapper-dark" class="font-awesome">
    <section class="section hero is-fullheight">
      <div class="divider" />
        <div v-if="member.given_name_en" class="columns is-multiline reverse-row-order is-centered is-variable is-6">
          <div v-if="member.hasImage == true" class="column is-5-tablet is-4-desktop">
            <div style="max-width: 320px; margin: 0 auto;">
              <figure class="image is-1by1">
                <img class="portrait" :src="getJsonImgUrl(member.id)" :alt="member.given_name_en + member.family_name_en">
              </figure>
            </div>
          </div>
          <div class="column">
            <h1 class="title is-1 is-spaced has-text-centered-mobile">
              <span v-if="$i18n.locale == 'en'">{{ member.given_name_en }} {{ member.family_name_en }}</span>
              <span v-if="$i18n.locale == 'ja'">{{ member.family_name_ja }} {{ member.given_name_ja }}</span>
            </h1>
            <p class="subtitle is-size-5 has-text-grey-light has-text-centered-mobile">
              {{ member.role }}
            </p>
            <br>
            <div class="text">
              <p class="midashi has-text-weight-bold has-text-primary">
                {{ $t('about.utsukuba.members.period') }}
              </p>
              <p class="has-text-weight-normal has-text-light">{{ member.first_main_event }} <span v-if="member.last_main_event">- {{ member.last_main_event }}</span></p>
              <p class="midashi has-text-weight-bold has-text-primary">
                {{ $t('about.utsukuba.members.from') }}
              </p>
              <p class="has-text-weight-normal has-text-light" v-if="$i18n.locale == 'en'">{{ member.home_state_en }}</p>
              <p class="has-text-weight-normal has-text-light" v-if="$i18n.locale == 'ja'">{{ member.home_state_ja }}</p>

              <p class="midashi has-text-weight-bold has-text-primary" v-if="member.college_ja">
                {{ $t('about.utsukuba.members.college') }}
              </p>
              <p class="has-text-weight-normal has-text-light" v-if="$i18n.locale == 'en'">{{ member.college_en }}</p>
              <p class="has-text-weight-normal has-text-light" v-if="$i18n.locale == 'ja'">{{ member.college_ja }}</p>
              
              <p class="midashi has-text-weight-bold has-text-primary" v-if="member.keyword1" style="line-height: 1;">{{ $t('about.utsukuba.members.keywords') }}</p>
              <p style="margin-top: .5rem;">
                <span v-if="member.keyword1" class="tag is-dark is-medium">{{ member.keyword1 }}</span>
                <span v-if="member.keyword2" class="tag is-dark is-medium">{{ member.keyword2 }}</span>
                <span v-if="member.keyword3" class="tag is-dark is-medium">{{ member.keyword3 }}</span>
              </p>
              
              <p class="midashi has-text-weight-bold has-text-primary" v-if="member.message">
                {{ $t('about.utsukuba.members.message') }}
              </p>
              <p class="has-text-weight-normal has-text-light">
                {{ member.message }}
              </p>

              <p class="midashi has-text-weight-bold has-text-primary" v-if="member.tedtalk || member.tedtalk_alt">
                {{ $t('about.utsukuba.members.favouritetedtalk') }}
              </p>
              <p class="has-text-weight-normal has-text-light" v-if="$i18n.locale == 'en'">{{ toUpperCamel(member.tedtalk_headline_en) }}</p>
              <p class="has-text-weight-normal has-text-light" v-if="$i18n.locale == 'ja'">{{ member.tedtalk_headline_ja }}</p>
            </div>
            <div class="divider" />
            <div>
              <figure class="image is-16by9 ted-embed-wrap">
                <iframe v-if="member.tedtalk"
                  :src="`https://embed.ted.com/talks/lang/${locale}/${member.tedtalk.replace(regexTED, '')}`" 
                  width="854"
                  height="480"
                  style="position:absolute;left:0;top:0;width:100%;height:100%"
                  frameborder="0"
                  scrolling="no"
                  allowfullscreen>
                </iframe>
                <iframe v-if="member.tedtalk_alt"
                  :src="`https://youtube.com/embed/${member.tedtalk_alt.replace(regexYouTube, '')}`"
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
            </div>
          </div>
          <div class="divider" />
          <div class="column is-12 has-text-centered">
            <nuxt-link class="button is-medium is-rounded is-gradient" to="./utsukuba#members">{{ $t('button.seeothers', { 0: $t('about.utsukuba.members.title').toLowerCase() } ) }}</nuxt-link>
          </div>
        </div>
        <div v-else>
          <p class="has-text-centered has-text-grey is-size-4">Loading...</p>
        </div>
        <div class="has-text-centered">
        </div>
    </section>
   
  </section>
</template>


<script>
import axios from 'axios';
import SteinStore from 'stein-js-client'
import Movie from '~/components/Movie.vue'
import externalLink from '@/assets/svg/external-link-alt-solid.svg'

const store = new SteinStore(process.env.STEIN_API)

export default {
  components: {
    Movie, externalLink
  },
  data() {
    return {
      member: {},
      regexTED: new RegExp(/https:\/\/www.ted.com.talks\//),
      regexYouTube: new RegExp(/https:\/\/youtu.be\//),
      regexLang: new RegExp(/\?[\w\=]+/),
      locale: this.$i18n.locale,
      id: this.$route.query.id,
      meta: {
        title: this.$route.params.slug.charAt(0).toUpperCase() + this.$route.params.slug.slice(1).replace(/_\w/g, function(v) { return ' ' + v.charAt(1).toUpperCase() + v.slice(2); }) + ' | TEDxUTsukuba',
        description: "TEDxUTsukubaは2016年に設立されたTEDxコミュニティ。筑波大学の一般学生団体であり、学生や卒業生を中心として運営されています。これまでに4回のメインカンファレンスを含む数々のTEDxイベントを開催しており、登壇者には筑波大学の教員や学生、卒業生を中心に、多彩なアイディアを持つ方々をお招きしています。",
        type: "website",
        url: "www.tedxutsukuba.com/about/" + this.$route.query.id,
        image: "https://www.tedxutsukuba.com/twitter_summary.png"
      }
    }
  },
  head() {
    return {
      title: this.meta.title,
      meta: [
        { hid: "description", name: "description", content: this.meta.description},
        { hid: "og:description", property: "og:description", content: this.meta.description},
        { hid: "og:title", property: "og:title", content: this.meta.title },
        { hid: "og:type", property: "og:type", content: this.meta.type },
        { hid: "og:url", property: "og:url", content: this.meta.url },
        { hid: "og:image", property: "og:image", content: this.meta.image },
        { name: "twitter:title", content: this.meta.title },
        { name: "twitter:card", content: "summary" },
        { name: "twitter:site", content: "@tedxutsukuba" }
      ]
    }
  },
  created() {
    // console.log("env: " + process.env.STEIN_API)
  },
  methods: {
    getJsonImgUrl(value) {
      // return require(`~/assets/partners/2020/carousel_${value}.jpg`)
      return require(`~/assets/team/${value}.jpg`)
    },
    addLangQuery(value) {
      if (this.$i18n.locale == 'ja') {
        return value + '?language=ja'
      } else {
        return value + '?language=en'
      }
    },
    toUpperCamel(str) {
      const sansHttpsLang = str.replace(this.regexTED, '').replace(this.regexLang, '');
      const upperCameled = sansHttpsLang[0].toUpperCase() + sansHttpsLang.slice(1).replace(/_\w/g, function(v) { return ' ' + v.charAt(1).toUpperCase() + v.slice(2); });
      // Shouldn T => Shouldn't
      const formAbbreviation = upperCameled.replace("n T ", "n't ");
      return formAbbreviation;
    }
  },
  computed: {
    // memberList() {
    //   return this.$store.getters[
    //     'member/showAllMembers'
    //   ](this.year)
    // }
  },
  mounted(){
    const api_url = 'https://script.google.com/macros/s/AKfycbxpjvd9ZpQGthMxvuS7py21Eik4mUXiv-H61RxtFfP6le1ocTfUU8rixqqklfzP3dZu7w/exec?id=' + this.$route.params.slug;
    axios.get(api_url, {
      crossDomain: true
    }).then(response => this.member = response.data[0]);
    // store.read('2021', { search: { id: this.$route.params.slug } }).then(data => {
    //   this.member = data[0]
    //   // console.log(data);
    // })
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