<template>
  <section id="wrapper-dark" class="font-awesome">
    <section class="section">
      <!-- {{ $route.params.slug }} -->
      <!-- {{ memberList }} -->
        <div
          v-for="(member, index) in memberList" :key="index"
        >
          <div v-if="member.id == $route.params.slug" class="columns is-multiline is-centered is-variable is-6">
            <div v-if="member.isImage" class="column is-5-tablet is-4-desktop">
              <div style="max-width: 320px; margin: 0 auto;">
                <figure class="image is-1by1">
                  <img class="portrait" :src="getJsonImgUrl(member.id)" :alt="member.given_name_en + member.family_name_en">
                </figure>
              </div>
            </div>
            <div class="column is-7-tablet is-8-desktop">
              <h1 class="title is-2 is-spaced has-text-centered-mobile" style="margin-top: 5vh;">
                <span v-if="$i18n.locale == 'en'">{{ member.given_name_en }} {{ member.family_name_en }}</span>
                <span v-if="$i18n.locale == 'ja'">{{ member.family_name_ja }} {{ member.given_name_ja }}</span>
              </h1>
              <p class="subtitle is-size-5 has-text-grey-light has-text-centered-mobile">
                {{ member.role }} ({{ member.first_main_event }} - {{ member.last_main_event }})
              </p>

              <div class="text">
                <p class="midashi is-size-7 has-text-weight-bold has-text-primary">
                  {{ $t('about.utsukuba.members.from') }}
                </p>
                <p class="is-size-7 has-text-weight-normal has-text-light" v-if="$i18n.locale == 'en'">{{ member.home_state_en }}</p>
                <p class="is-size-7 has-text-weight-normal has-text-light" v-if="$i18n.locale == 'ja'">{{ member.home_state_ja }}</p>

                <p class="midashi is-size-7 has-text-weight-bold has-text-primary" v-if="member.college_ja">
                  {{ $t('about.utsukuba.members.college') }}
                </p>
                <p class="is-size-7 has-text-weight-normal has-text-light" v-if="$i18n.locale == 'en'">{{ member.college_en }}</p>
                <p class="is-size-7 has-text-weight-normal has-text-light" v-if="$i18n.locale == 'ja'">{{ member.college_ja }}</p>
                
                <p class="midashi is-size-7 has-text-weight-bold has-text-primary" v-if="member.keyword1" style="line-height: 1;">{{ $t('about.utsukuba.members.keywords') }}</p>
                <p class="is-size-7 has-text-weight-normal has-text-light">{{ member.keyword1 }}<span v-if="member.keyword2">, </span>{{ member.keyword2 }}<span v-if="member.keyword3">, </span>{{ member.keyword3 }}</p>
                
                <p class="midashi is-size-7 has-text-weight-bold has-text-primary" v-if="member.tedtalk || member.tedtalk_alt">
                  {{ $t('about.utsukuba.members.favouritetedtalk') }}
                </p>
                <a class="is-size-7 has-text-weight-normal has-text-light is-uppercase" v-if="member.tedtalk" :href="getTedLinkUrl(member.tedtalk)" target="_blank" rel="noopener noreferrer">{{ member.tedtalk.replace(regexTED, '').replace(regexLang, '').replace(/_/g, ' ') }}<externalLink v-if="member.tedtalk" style="width: 0.75rem; margin-left: 0.75rem;" /></a>
                <a class="is-size-7 has-text-weight-normal has-text-light" v-if="member.tedtalk_alt" :href="member.tedtalk_alt" target="_blank" rel="noopener noreferrer">YouTube<externalLink v-if="member.tedtalk_alt" style="width: 0.75rem; margin-left: 0.75rem;" /></a>
              </div>
  
              <div v-if="member.tedtalk" class="ted-embed-wrap" style="max-width:854px; margin: 5vh auto;">
                <div style="position:relative;height:0;padding-bottom:56.25%">
                  <iframe
                    :src="`https://embed.ted.com/talks/lang/${locale}/${member.tedtalk.replace(regexTED, '')}`" 
                    width="854"
                    height="480"
                    style="position:absolute;left:0;top:0;width:100%;height:100%"
                    frameborder="0"
                    scrolling="no"
                    allowfullscreen>
                  </iframe>
                </div>
              </div>

              <Movie id="teaser" v-if="member.tedtalk_alt" :vId="member.tedtalk_alt.replace(regexYouTube, '')" style="margin: 5vh auto;" /> 

            </div>
          </div>
        </div>
    </section>
   
  </section>
</template>


<script>
import axios from 'axios';
import Movie from '~/components/Movie.vue'

export default {
  components: {
    Movie
  },
  data() {
    return {
      memberList: {},
      regexTED: new RegExp(/https:\/\/www.ted.com.talks\//),
      regexYouTube: new RegExp(/https:\/\/youtu.be\//),
      regexLang: new RegExp(/\?[\w\=]+/),
      locale: this.$i18n.locale
    }
  },
  head: {
    title: 'Member | TEDxUTsukuba',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 
        hid: 'description', 
        name: 'description', 
        content: 'TEDxUTsukubaは2016年に設立されたTEDxコミュニティ。筑波大学の一般学生団体であり、学生や卒業生を中心として運営されています。これまでに4回のメインカンファレンスを含む数々のTEDxイベントを開催しており、登壇者には筑波大学の教員や学生、卒業生を中心に、多彩なアイディアを持つ方々をお招きしています。'
      },
    ]
  },
  methods: {
    getJsonImgUrl(value) {
      // return require(`~/assets/partners/2020/carousel_${value}.jpg`)
      return require(`~/assets/team/${value}.jpg`)
    },
    getTedLinkUrl(value) {
      if (this.$i18n.locale == 'ja') {
        return value + '?language=ja'
      } else {
        return value + '?language=en'
      }
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
    const api_url = "https://script.google.com/macros/s/AKfycbxp6NqJLbjD4pdjqloabrjwRxN_hhXZ9nv1O3cRtdtkraiiZEfeKt9lUgubcCMbw0g17g/exec"
    axios.get(api_url, {
      crossDomain: true
    }).then(response => this.memberList = response.data);

  }
}
</script>

<style lang="scss" scoped>
  p.midashi {
    margin-top: 1rem;
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
  #tedxutsukuba, #socialcapital, #team-content {
    opacity: 0;
    transition: all 0.5s;
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
</style>