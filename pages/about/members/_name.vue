<template>
  <section id="wrapper-dark" class="font-awesome">
    <section class="section-wide">
      {{ $route.params.name }}
      <div class="columns is-mobile is-multiline">
        <div
          id="thumbnails"
          class="column is-3-fullhd is-4-widescreen is-4-desktop is-6-tablet is-6-mobile"
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
            <div class="card-image" v-if="member.imageFileName" style="width: 100%;">
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
                  <p class="subtitle is-6 has-text-grey-light">
                    {{ member.role }}
                  </p>
                </span>
                <span v-if="$i18n.locale == 'ja'">
                  <h1 class="title is-4">
                    {{ member.family_name_ja }}{{ member.given_name_ja }}
                  </h1>
                  <p class="subtitle is-size-6 has-text-grey-light">
                    {{ member.role }}
                  </p>
                </span>
              </div>

              <div class="text">
                <p class="midashi is-size-7 has-text-weight-bold has-text-primary">
                  {{ $t('about.utsukuba.members.from') }}
                  <span class="is-size-7 has-text-weight-normal has-text-light" v-if="$i18n.locale == 'en'">{{ member.home_state_en }}</span>
                  <span class="is-size-7 has-text-weight-normal has-text-light" v-if="$i18n.locale == 'ja'">{{ member.home_state_ja }}</span>
                </p>

                <p class="midashi is-size-7 has-text-weight-bold has-text-primary" v-if="member.college_ja">
                  {{ $t('about.utsukuba.members.college') }}
                  <span class="is-size-7 has-text-weight-normal has-text-light" v-if="$i18n.locale == 'en'">{{ member.college_en }}</span>
                  <span class="is-size-7 has-text-weight-normal has-text-light" v-if="$i18n.locale == 'ja'">{{ member.college_ja }}</span>
                </p>

                <p class="midashi is-size-7 has-text-weight-bold has-text-primary" v-if="member.keyword1" style="line-height: 1;">{{ $t('about.utsukuba.members.keywords') }}</p>
                <p class="is-size-7 has-text-weight-normal has-text-light">{{ member.keyword1 }}<span v-if="member.keyword2">, </span>{{ member.keyword2 }}<span v-if="member.keyword3">, </span>{{ member.keyword3 }}</p>
                
                <p class="midashi is-size-7 has-text-weight-bold has-text-primary" v-if="member.tedtalk || member.tedtalk_alt">
                  {{ $t('about.utsukuba.members.favouritetedtalk') }}
                </p>
                <a class="is-size-7 has-text-weight-normal has-text-light is-uppercase" v-if="member.tedtalk" :href="getTedLinkUrl(member.tedtalk)" target="_blank" rel="noopener noreferrer">{{ member.tedtalk.replace(regexTitle, '').replace(regexLang, '').replace(/_/g, ' ') }}<externalLink v-if="member.tedtalk" style="width: 0.75rem; margin-left: 0.75rem;" /></a>
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
   
  </section>
</template>


<script>
import axios from 'axios';

export default {
  components: {
  },
  data() {
    return {
      memberList: {},
      regexTitle: new RegExp(/https:\/\/www.ted.com.talks\//),
      regexLang: new RegExp(/\?[\w\=]+/)
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
    const api_url = "https://script.google.com/macros/s/AKfycbxo9tPL7S_1mOOKs7NVOu7a8Zx3lWDM0wv_UBTgJVv31VscjN9QLgNSPzb0wri-qNDykQ/exec" + '?id=' + this.$route.params.name;
    axios.get(api_url, {
      crossDomain: true
    }).then(response => this.memberList = response.data[0]);

    const browser = this.$ua.browser()
    if (browser !== 'Safari') {
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
      const scene4 = this.$scrollmagic
        .scene({
          triggerElement: '#team',
          triggerHook: 0.75,
          offset: 0,
          reverse: false
        })
        .setTween('#team-content', {
          css: {
            opacity: 1
          }
        })
      this.$scrollmagic.addScene(scene1)
      this.$scrollmagic.addScene(scene2)
      this.$scrollmagic.addScene(scene3)
      this.$scrollmagic.addScene(scene4)
    } else {
      document.getElementById("tedxutsukuba").style.opacity = 1;
      document.getElementById("gallery").style.opacity = 1;
      document.getElementById("socialcapital").style.opacity = 1;
      document.getElementById("team-content").style.opacity = 1;
    }
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
  #tedxutsukuba, #socialcapital, #team-content {
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