<template>
  <section id="wrapper-dark" class="font-awesome">
    <section class="section is-halfheight has-text-centered" id="trigger">
      <i class="mdi mdi-information has-text-primary is-size-1" /> 
      <h1 class="title is-1 is-spaced">{{ $t('about.utsukuba.title')}}</h1>
      <h1 class="subtitle has-text-grey-light">{{ $t('about.utsukuba.subtitle')}}</h1>
      <br>
      <span v-if="$i18n.locale == 'en'" class="tag has-text-weight-bold">{{ $t('button.partialtranslation') }}</span>
    </section>
    

    <!-- University of Tsukuba -->

    <section class="section" id="utsukuba">
      <h1 class="title is-0" v-html="$t('about.university.title')"></h1>
      <article v-html="$t('about.university.description')"></article>
      <p class="has-text-right">
        <a v-if="$i18n.locale == 'en'" href="https://www.tsukuba.ac.jp/en" target="_blank">Official Website <i class="mdi mdi-open-in-new" /></a>
        <a v-if="$i18n.locale == 'ja'" href="https://www.tsukuba.ac.jp/" target="_blank">公式サイト <i class="mdi mdi-open-in-new" /></a>
        <br>
        <a href="https://youtu.be/PTRhU_RnayM" target="_blank">Graduate School Official Trailer (YouTube) <i class="mdi mdi-open-in-new" /></a> 
      </p>
    </section>

    <section class="hero">
      <figure class="image is-2by1" v-if="$ua.isFromSmartphone()">
        <img src="~/assets/wallpapers/yukinasan.jpg" style="object-fit: cover; object-position: center 8%; filter: contrast(75%) saturate(125%);">
      </figure>
      <figure class="image is-3by1" v-else>
        <img src="~/assets/wallpapers/yukinasan.jpg" style="object-fit: cover; object-position: center 48%; filter: contrast(75%) saturate(125%);">
      </figure>
    </section>
    

    <!-- TEDxUTsukuba -->

    <section class="section" id="tedxutsukuba">
      <h1 class="title is-0">TEDxUTsukuba</h1>
      <article v-html="$t('about.utsukuba.description.3')"></article>
    </section>

    <section class="hero">
      <figure class="image is-2by1" v-if="$ua.isFromSmartphone()">
        <img src="~/assets/wallpapers/tedxutsukubalive.jpg" style="object-fit: cover; filter: saturate(125%) brightness(110%) contrast(75%);">
      </figure>
      <figure class="image is-3by1" v-else>
        <img src="~/assets/wallpapers/tedxutsukubalive.jpg" style="object-fit: cover; filter: saturate(125%) brightness(110%) contrast(75%);">
      </figure>
    </section>


    <!-- Social Capital -->

    <section class="section" id="socialcapital">
      <h1 class="title is-0">Social Capital</h1>
      <article v-html="$t('about.utsukuba.description.5')"></article>
    </section>
    <section class="section">
      <Movie :vId='weAreTEDxUTsukuba' aPlay=true></Movie>
    </section>
    <!-- <section class="hero is-medium bg-red">
      <div class="hero-body">
        <section class="section has-text-right">
          <h1 class="title is-2">{{ $t('about.utsukuba.description.4')}}</h1>
        </section>
      </div>
    </section> -->


    <!-- Members -->

    <section class="hero" style="background-color: #dbdee5;">
      <section class="section" id="members">
        <div class="container has-text-right has-text-centered-mobile">
          <h1 class="title is-0 is-spaced">{{ $t('about.utsukuba.members.title')}}</h1>
          <h1 class="subtitle is-5 has-text-grey-light">{{ $t('about.utsukuba.members.subtitle')}}</h1>
        </div>
      </section>
      <section class="section-wide">
        <div class="columns is-multiline is-mobile">
          <div
            id="thumbnails"
            class="column is-3-fullhd is-4-widescreen is-4-desktop is-6-tablet is-12-mobile"
            v-for="(member, index) in memberList" :key="index"
            style="display: inline-block; vertical-align: top;"
          >
            <div class="nmp-light">
              <header class="card-header" v-if="member.showImageOnTop && !$ua.isFromSmartphone()">
                <p class="card-header-title">
                </p>
              </header>
              <div class="card-image" v-if="!$ua.isFromSmartphone()" style="width: 100%;">
                <figure v-if="member.showImageOnTop" class="image is-4by3" style="overflow: hidden;">
                  <img class="portrait" :src="getJsonImgUrl(`${member.id}.jpg`)" :alt="member.given_name_en + member.family_name_en" style="object-fit: cover;">
                </figure>
              </div>
              <div class="card-content">
                <div class="media is-vcentered">
                  <div class="media-left" v-if="$ua.isFromSmartphone()">
                    <figure class="image is-48x48 is-square">
                      <img v-if="member.hasImage" :src="getJsonImgUrl(`${member.id}.jpg`)" :alt="member.given_name_en + member.family_name_en" style="object-fit: cover; border-radius: 50%;">
                      <img v-else src="~/assets/team/default.png" :alt="member.given_name_en + member.family_name_en" style="object-fit: cover; border-radius: 50%;">
                    </figure>
                  </div>
                  <div class="media-content">
                    <span v-if="$i18n.locale == 'en'">
                      <h1 class="title is-4 has-text-dark">
                        {{ member.given_name_en }} {{ member.family_name_en}}
                      </h1>
                      <p class="subtitle is-6 is-size-7-touch has-text-grey">
                        {{ member.role }}
                      </p>
                    </span>
                    <span v-if="$i18n.locale == 'ja'">
                      <h1 class="title is-4 has-text-dark">
                        {{ member.family_name_ja }} {{ member.given_name_ja }}
                      </h1>
                      <p class="subtitle is-size-6 is-size-7-touch has-text-grey">
                        {{ member.role }}
                      </p>
                    </span>
                  </div>
                </div>

                <div class="text">
                  <p class="midashi is-size-7 has-text-weight-bold has-text-primary">
                    {{ $t('about.utsukuba.members.from') }}
                    <span class="is-size-7 has-text-weight-normal has-text-grey-dark" v-if="$i18n.locale == 'en'">{{ member.home_state_en }}</span>
                    <span class="is-size-7 has-text-weight-normal has-text-grey-dark" v-if="$i18n.locale == 'ja'">{{ member.home_state_ja }}</span>
                  </p>

                  <p class="midashi is-size-7 has-text-weight-bold has-text-primary" v-if="member.college_ja">
                    {{ $t('about.utsukuba.members.college') }}
                    <span class="is-size-7 has-text-weight-normal has-text-grey-dark" v-if="$i18n.locale == 'en'">{{ member.college_en }}</span>
                    <span class="is-size-7 has-text-weight-normal has-text-grey-dark" v-if="$i18n.locale == 'ja'">{{ member.college_ja }}</span>
                  </p>
                  
                  <p class="midashi is-size-7 has-text-weight-bold has-text-primary" v-if="member.tedtalk_headline_en || member.tedtalk_headline_ja">
                    {{ $t('about.utsukuba.members.favouritetedtalk') }}
                    <span class="has-text-grey-dark has-text-weight-normal is-size-7" v-if="member.tedtalk_headline_en && $i18n.locale == 'en'">{{ member.tedtalk_headline_en.length > 35 ? toUpperCamel(member.tedtalk_headline_en.substr(0, 35)) + '…' : toUpperCamel(member.tedtalk_headline_en) }}</span>
                    <span class="has-text-grey-dark has-text-weight-normal is-size-7" v-if="member.tedtalk_headline_ja && $i18n.locale == 'ja'">{{  member.tedtalk_headline_ja.length > 20 ? member.tedtalk_headline_ja.substr(0, 20) + '…' : member.tedtalk_headline_ja }}</span>
                  </p>
                </div>
              </div>
              <footer class="card-footer">
                <nuxt-link :to="localePath(`/about/${member.id}`)" class="card-footer-item is-size-7">{{ $t('button.readmore') }}</nuxt-link>
              </footer>
            </div>
          </div>
        </div>
      </section>
    </section>


    <!-- Team -->

    <section class="section" id="team">
      <div class="container has-text-right">
        <h1 class="title is-0 is-spaced">{{ $t('about.utsukuba.team.title')}}</h1>
        <h1 class="subtitle is-5 has-text-grey-light">{{ $t('about.utsukuba.team.subtitle')}}</h1>
      </div>
    </section>
    <section class="section" id="team-content">
      <!-- <div class="columns is-mobile is-multiline">
        <div v-for="(job, index) in jobs" :key="job.id" class="column is-3-desktop is-6-tablet is-6-mobile">
          <div :class="`notification has-background-${job.color}`">
            <p class="has-text-weight-bold" v-if="$i18n.locale == 'en'">{{ job.name_en }}</p>
            <p class="has-text-weight-bold" v-if="$i18n.locale == 'ja'">{{ job.name_ja }}</p>
          </div>
        </div>
      </div> -->
      <div class="is-block">
        <b-carousel :indicator-inside="false" :repeat="true" indicator-style="is-lines" :autoplay="false" animated="fade">
          <b-carousel-item v-for="(team, i) in teams" :key="i">
            <figure class="image is-5by3">
              <img :src="getJsonImgUrl(`intro/${team.name.toLowerCase()}.png`)" style="object-fit: cover" />
            </figure>
          </b-carousel-item>
          <template #indicators="props">
            <span class="tag has-text-weight-bold is-medium is-dark has-text-centered" style="width: 100%;">
              {{ teams[props.i].displayname }}
            </span>
        </template>
        </b-carousel>
      </div>
    </section>


    <!-- Team Carousel -->

    <section class="section is-halfheight">
      <div class="section has-text-centered">
        <h1 class="title is-2 is-spaced">{{ $t('about.utsukuba.join.title')}}</h1>
        <h1 class="subtitle is-5 has-text-grey-light">{{ $t('about.utsukuba.join.subtitle')}}</h1>
        <nuxt-link :to="localePath('/events')" class="button is-rounded is-gradient">新歓イベントを探す</nuxt-link>
      </div>
      <div class="section">
        <div class="columns is-multiline">
          <div class="column is-one-third-desktop">
            <figure class="image is-16by9">
              <img src="~/assets/others/venue_team_2018.jpg" alt="venue">
            </figure>
          </div>
          <div class="column is-one-third-desktop">
            <figure class="image is-16by9">
              <img src="~/assets/others/IMG_9801.jpg" alt="Members 2019">
            </figure>
          </div>
          <div class="column is-one-third-desktop">
            <figure class="image is-16by9">
              <img src="~/assets/others/tech_team_2018.jpg" alt="tech">
            </figure>
          </div>
        </div>
      </div>


      <!-- Contact -->
    
      <div class="section has-text-centered">
        <h1 class="title is-2 is-spaced">{{ $t('about.utsukuba.contactus.title')}}</h1>
        <h1 class="subtitle is-5 has-text-grey-light">{{ $t('about.utsukuba.contactus.subtitle')}}</h1>   
        <h1 class="subtitle has-text-grey-light">{{ $t('about.utsukuba.contactus.description')}}</h1>   
        <div class="columns">
          <div class="column">
            <a href="mailto:tedxutsukuba&#64;gmail.com">
              <div class="nmp-card-red">
                <i class="mdi mdi-email" style="font-size: 2rem;" /><br>tedxutsukuba&#64;gmail.com
              </div>
            </a>
          </div>
            <div class="column">
              <a href="www.twitter.com/tedxutsukuba">
                <div class="nmp-card-red">
                  <i class="mdi mdi-twitter" style="font-size: 2rem;" /><br>@tedxutsukuba
                </div>
              </a>
            </div>
        </div>
      </div>
    </section>
    <br><br>

        <!-- <vue-instagram token="accessTokenHere" :count="5" :tags="['hashtag1', 'hashtag2']" mediaType="image">
          <template slot="feeds" slot-scope="props">
            <li class="fancy-list"> {{ props.feed.link }} </li>
          </template>
          <template slot="error" slot-scope="props">
            <div class="fancy-alert"> {{ props.error.error_message }} </div>
          </template>
        </vue-instagram> -->
  </section>
</template>


<script>
import axios from 'axios';
import Modal from '~/components/Modal.vue'
// import VueInstagram from 'vue-instagram'
import Movie from '~/components/Movie.vue'
import jobs from '~/references/jobs.json'
import externalLink from '@/assets/svg/external-link-alt-solid.svg'

export default {
  components: {
    Modal, externalLink, Movie
  },
  data() {
    return {
      isImageModalActive: false,
      memberList: {},
      // memberListRemainder: {},
      showContent: false,
      showOthers: true,
      postItem: "",
      jobs: jobs,
      weAreTEDxUTsukuba: 'ZbIEuwjpxp0',
      sgcl: '7PQWXvgYZ4Y',
      regexTED: new RegExp(/https:\/\/www.ted.com.talks\//),
      regexYouTube: new RegExp(/https:\/\/youtu.be\//),
      regexLang: new RegExp(/\?[\w\=]+/),
      teams: [
        { name: 'Enja', displayname: 'Enja' }, 
        { name: 'Partner', displayname: 'Partner' },
        { name: 'PR', displayname: 'PR' },
        { name: 'Tech', displayname: 'Tech' },
        { name: 'International', displayname: 'Int\'\l' }
      ]
    }
  },
  head: {
    title: 'About TEDxUTsukuba | TEDxUTsukuba',
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
    openModal (partner) {
      this.showContent = true
      this.postItem = partner
    },
    closeModal () {
      this.showContent = false
    },
    getJsonImgUrl(value) {
      return require(`~/assets/team/${value}`)
    },
    getTedLinkUrl(value) {
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
    // const api_url = "https://script.google.com/macros/s/AKfycbxp6NqJLbjD4pdjqloabrjwRxN_hhXZ9nv1O3cRtdtkraiiZEfeKt9lUgubcCMbw0g17g/exec";
    axios({
      method: 'GET',
      url: 'https://script.google.com/macros/s/AKfycbxpjvd9ZpQGthMxvuS7py21Eik4mUXiv-H61RxtFfP6le1ocTfUU8rixqqklfzP3dZu7w/exec',
      params: { summary: 'true' }, 
      crossDomain: true
    }).then(response => {
      this.memberList = response.data.filter(el => el.isActive);
      // if (this.$ua.isFromSmartphone()) {
      //   this.memberList = response.data;
      // } else {
      //   this.memberList = response.data
      // }
    });
  }
}
</script>

<style lang="scss" scoped>
  h1.is-0 {
    color: #bcc5cd;
    background: -webkit-linear-gradient(27deg, #95afc7, #bd97c7);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(47deg, #95afc7, #bd97c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    &.has-text-white {
      color: white;
    }
  }

  .nmp-dark {
    // border-radius: 18px !important;
  }
  p.midashi {
    margin-bottom: 0;
    color: #E62B1E;
    font-weight: bold;
  }
  div.text {
    margin-top: .75rem;
  }
  h1.subtitle + p.midashi {
    margin-top: 0;
  }
  a {
    color: white;
    word-break: break-all;
  }
  .portrait {
    &:hover {
      transform: translate(0, 30px) scale(1.3);
    }
    transition: 0.2s linear;
    // 親要素に overflow: hidden;
  }
  .indicator-item.is-active {
    .tag {
      background-color: #c6251a !important;
    }
  }
</style>