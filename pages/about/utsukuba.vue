<template>
  <section id="wrapper-dark" class="font-awesome">
    <section class="section" id="trigger">
      <div class="nmp-card">
        <h1 class="title is-1 is-spaced">{{ $t('about.utsukuba.title')}}</h1>
        <h1 class="subtitle is-5">{{ $t('about.utsukuba.subtitle')}}</h1>
      </div>
      <hr>
    </section>
    <section class="section" id="tedxutsukuba">
      <h1 class="title">TEDxUTsukuba</h1>
      <article v-html="$t('about.utsukuba.description.3')"></article>
    </section>
    <section class="section">
      <div class="columns" id="gallery">
        <div class="column is-one-third">
          <figure class="is-4by3">
            <img src="~/assets/sample2.jpg" alt="Audience attending our annual event" style="width: 100%; object-fit: cover;">
          </figure>
        </div>
        <div class="column is-one-third">
          <figure class="is-4by3">
            <img src="~/assets/sample3.jpg" alt="TEDxUTsukuba attendees and staffs" style="width: 100%; object-fit: cover;">
          </figure>
        </div>
        <div class="column is-one-third">
          <figure class="is-4by3">
            <img src="~/assets/sample1.jpg" alt="A speaker standing on the stage" style="width: 100%; object-fit: cover;">
          </figure>
        </div>
      </div>
    </section>
    <section class="section" id="socialcapital">
      <h1 class="title">Social Capital</h1>
      <article v-html="$t('about.utsukuba.description.5')"></article>
    </section>
    <section class="hero">
      <Movie id="teaser" :vId='videoId' :aPlay='autoplay'></Movie>
    </section>
    <!-- <section class="hero is-medium bg-red">
      <div class="hero-body">
        <section class="section has-text-right">
          <h1 class="title is-2">{{ $t('about.utsukuba.description.4')}}</h1>
        </section>
      </div>
    </section> -->
    <section class="hero is-medium is-black">
      <div class="hero-body has-text-white has-text-left">
        <div class="container has-text-centered">
          <h1 class="title is-1 is-spaced">{{ $t('about.utsukuba.team.title')}}</h1>
          <h1 class="subtitle is-5 has-text-grey-light">{{ $t('about.utsukuba.team.subtitle')}}</h1>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="columns is-mobile is-multiline">
        <div
          id="thumbnails"
          class="column is-3-fullhd is-4-widescreen is-4-desktop is-6-tablet is-12-mobile"
          v-for="(member, index) in memberList" :key="member.tedtalk"
          style="display: inline-block; vertical-align: top;"
        >
          <div class="nmp-dark">
            <header class="card-header" v-if="member.imageFileName">
              <p class="card-header-title">
                <!-- <span class="tag is-white">
                  {{ talk.category_1 }}
                </span>
                <span class="tag is-white">
                  {{ talk.category_2 }}
                </span> -->
              </p>
            </header>
            <div class="card-image" v-if="member.imageFileName">
              <figure class="image is-3-desktop is-6-tablet is-6-mobileby2" style="overflow: hidden;">
                <img class="portrait" :src="getJsonImgUrl(member.imageFileName)" :alt="member.given_name_en + member.family_name_en">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <span v-if="$i18n.locale == 'en'">
                  <h1 class="title is-4">
                    {{ member.given_name_en }} {{ member.family_name_en}}
                  </h1>
                  <h1 class="subtitle is-6">
                    {{ member.role_en }}
                  </h1>
                </span>
                <span v-if="$i18n.locale == 'ja'">
                  <h1 class="title is-4">
                    {{ member.family_name_ja }}{{ member.given_name_ja }}
                  </h1>
                  <h1 class="subtitle is-6">
                    {{ member.role_ja }}
                  </h1>
                </span>
              </div>
                <br>

              <div class="content">
              
                <p class="midashi is-size-7 has-text-weight-bold has-text-primary">
                  {{ $t('about.utsukuba.team.from') }}
                  <span class="is-size-7 has-text-weight-normal has-text-light" v-if="$i18n.locale == 'en'">{{ member.home_state_en }}</span>
                  <span class="is-size-7 has-text-weight-normal has-text-light" v-if="$i18n.locale == 'ja'">{{ member.home_state_ja }}</span>
                </p>

                <p class="midashi is-size-7 has-text-weight-bold has-text-primary" v-if="member.college_ja">
                  {{ $t('about.utsukuba.team.college') }}
                  <span class="is-size-7 has-text-weight-normal has-text-light" v-if="$i18n.locale == 'en'">{{ member.college_en }}</span>
                  <span class="is-size-7 has-text-weight-normal has-text-light" v-if="$i18n.locale == 'ja'">{{ member.college_ja }}</span>
                </p>

                <p class="midashi is-size-7 has-text-weight-bold has-text-primary" v-if="member.keyword1" style="line-height: 1;">{{ $t('about.utsukuba.team.keywords') }}</p>
                <p class="is-size-7 has-text-weight-normal has-text-light">{{ member.keyword1 }}<span v-if="member.keyword2">, </span>{{ member.keyword2 }}<span v-if="member.keyword3">, </span>{{ member.keyword3 }}</p>
                
                <p class="midashi is-size-7 has-text-weight-bold has-text-primary" v-if="member.tedtalk">{{ $t('about.utsukuba.team.favouritetedtalk') }}</p>
                <a class="is-size-7 has-text-weight-normal has-text-light is-uppercase" v-if="member.tedtalk" :href="getTedLinkUrl(member.tedtalk)" target="_blank" rel="noopener noreferrer">{{ member.tedtalk.replace(regexTitle, '').replace(regexLang, '').replace(/_/g, ' ') }}<externalLink v-if="member.tedtalk" style="width: 0.75rem; margin-left: 0.75rem;" /></a>
                
                <p class="midashi is-size-7 has-text-weight-bold has-text-primary" v-if="member.tedtalk_alt">{{ $t('about.utsukuba.team.favouritetedtalk') }}</p>
                <a class="is-size-7 has-text-weight-normal has-text-light" v-if="member.tedtalk_alt" :href="member.tedtalk_alt" target="_blank" rel="noopener noreferrer">YouTube<externalLink v-if="member.tedtalk_alt" style="width: 0.75rem; margin-left: 0.75rem;" /></a>
                
                <p class="card-item has-text-right">
                  <a v-if="member.tedaccount" :href="member.tedaccount" target="_blank" rel="noopener noreferrer"><span class="tag is-dark has-text-primary has-text-weight-bold">TED</span></a>
                </p>
              </div>
  
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="hero is-medium is-black">
      <div class="hero-body has-text-white has-text-left">
        <div class="container has-text-centered">
          <h1 class="title is-1 is-spaced">{{ $t('about.utsukuba.join.title')}}</h1>
          <h1 class="subtitle is-5 has-text-grey-light">{{ $t('about.utsukuba.join.subtitle')}}</h1>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="columns is-mobile is-multiline">
        <div v-for="(job, index) in jobs" :key="job.id" class="column is-3-desktop is-6-tablet is-6-mobile">
          <div :class="`notification has-background-${job.color}`">
            <p class="has-text-weight-bold" v-if="$i18n.locale == 'en'">{{ job.name_en }}</p>
            <p class="has-text-weight-bold" v-if="$i18n.locale == 'ja'">{{ job.name_ja }}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="columns is-multiline">
        <div class="column is-half-tablet is-one-quarter-desktop">
          <figure class="image is-16by9">
            <img src="~/assets/others/venue_team_2018.jpg">
          </figure>
        </div>
        <div class="column is-half-tablet is-one-quarter-desktop">
          <figure class="image is-16by9">
            <img src="~/assets/others/IMG_9801.jpg">
          </figure>
        </div>
        <div class="column is-half-tablet is-one-quarter-desktop">
          <figure class="image is-16by9">
            <img src="~/assets/others/IMG_9800.jpg">
          </figure>
        </div>
        <div class="column is-half-tablet is-one-quarter-desktop">
          <figure class="image is-16by9">
            <img src="~/assets/others/tech_team_2018.jpg">
          </figure>
        </div>
      </div>
    </section>
    <section class="hero is-medium is-black">
      <div class="hero-body has-text-white has-text-left">
        <div class="container has-text-centered">
          <h1 class="title is-1 is-spaced">{{ $t('about.utsukuba.contactus.title')}}</h1>
          <h1 class="subtitle is-5 has-text-grey-light">{{ $t('about.utsukuba.contactus.subtitle')}}</h1>
        </div>
      </div>
    </section>
    <section class="section">
        <div class="container has-text-centered">
          <div class="nmp-card-dark has-text-weight-bold" style="font-size: 1rem;">
            <font-awesome-icon :icon="['fas', 'envelope']" style="color: white;" /> tedxutsukuba&#64;gmail.com<br>
            <font-awesome-icon :icon="['fab', 'twitter']" style="color: white;" /> @tedxutsukuba
          </div>
        </div>

        <!-- <vue-instagram token="accessTokenHere" :count="5" :tags="['hashtag1', 'hashtag2']" mediaType="image">
          <template slot="feeds" slot-scope="props">
            <li class="fancy-list"> {{ props.feed.link }} </li>
          </template>
          <template slot="error" slot-scope="props">
            <div class="fancy-alert"> {{ props.error.error_message }} </div>
          </template>
        </vue-instagram> -->
    </section>
  </section>
</template>


<script>
import axios from 'axios';
import Modal from '~/components/Modal.vue'
// import VueInstagram from 'vue-instagram'
import Movie from '~/components/Movie.vue'
import jobs from '~/contents/jobs.json'
import externalLink from '@/assets/svg/external-link-alt-solid.svg'

export default {
  components: {
    Modal, externalLink, Movie
  },
  data() {
    return {
      memberList: {},
      showContent: false,
      postItem: "",
      jobs: jobs,
      videoId: '7PQWXvgYZ4Y',
      regexTitle: new RegExp(/https:\/\/www.ted.com.talks\//),
      regexLang: new RegExp(/\?[\w\=]+/)
    }
  },
  head: {
    title: 'About TEDxUTsukuba'
  },
  methods: {
    openModal (partner) {
      this.showContent = true
      this.postItem = partner
    },
    closeModal () {
      this.showContent = false
    },
    getImgUrl(value) {
      // value += 50
      // return `https://picsum.photos/id/10${value}/1230/500`
      return this.images[value]
    },
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
    const api_url = "https://script.google.com/macros/s/AKfycbxp6NqJLbjD4pdjqloabrjwRxN_hhXZ9nv1O3cRtdtkraiiZEfeKt9lUgubcCMbw0g17g/exec";
    axios.get(api_url, {
      crossDomain: true
    }).then(response => this.memberList = response.data);

    const scene1 = this.$scrollmagic
      .scene({
        triggerElement: '#trigger',
        triggerHook: 0.75,
        offset: 0,
        reverse: false
      })
      .setTween('#tedxutsukuba', {
        css: {
          opacity: 1
        }
      })
    const scene2 = this.$scrollmagic
      .scene({
        triggerElement: '#tedxutsukuba',
        triggerHook: 0.75,
        offset: 0,
        reverse: false
      })
      .setTween('#gallery', {
        css: {
          opacity: 1
        }
      })
    const scene3 = this.$scrollmagic
      .scene({
        triggerElement: '#gallery',
        triggerHook: 0.75,
        offset: 0,
        reverse: false
      })
      .setTween('#socialcapital', {
        css: {
          opacity: 1
        }
      })
    this.$scrollmagic.addScene(scene1)
    this.$scrollmagic.addScene(scene2)
    this.$scrollmagic.addScene(scene3)
  }
}
</script>

<style lang="scss" scoped>
  .nmp-dark {
    border-radius: 18px !important;
  }
  p.midashi {
    margin-top: 0.5rem;
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
  #tedxutsukuba, #socialcapital {
    opacity: 0;
    transition: all 0.5s;
  }
  #gallery {
    opacity: 0;
    transition: all 1s;
  }
  .portrait {
    &:hover {
      transform: translate(0, 30px) scale(1.3);
    }
    transition: 0.2s linear;
    // 親要素に overflow: hidden;
  }
</style>