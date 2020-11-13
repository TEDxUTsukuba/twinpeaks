<template>
  <section id="wrapper-dark" class="font-awesome">
    <section class="hero is-medium is-black">
      <div class="hero-body has-text-white has-text-left">
        <div class="container has-text-centered">
          <h1 class="title is-1 is-spaced">{{ $t('about.title')}}</h1>
          <h1 class="subtitle is-5 has-text-grey-light">{{ $t('about.subtitle')}}</h1>
        </div>
      </div>
    </section>
    <section class="section has-text-grey-lighter">
      <div class="columns">
        <div class="column is-two-thirds-fullhd is-half-desktop">
          <div class="nmp-card-dark">
            <p>{{ $t('about.description.1')}}</p>
          </div>
          <div class="nmp-card-dark">
            <p>{{ $t('about.description.2')}}</p>
          </div>
        </div>
        <div class="column">
          <div class="is-square side-cut">
            <img src="~/assets/sample1.jpg">
          </div>
        </div>
      </div>
      <div class="columns reverse-row-order">
        <div class="column is-one-third-fullhd is-half-desktop">
          <figure class="is-square">
            <img src="">
          </figure>
        </div>
        <div class="column">
          <div class="nmp-card-dark">
            <p>{{ $t('about.description.3')}}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="hero is-medium bg-red">
      <div class="hero-body">
        <section class="section has-text-right">
          <h1 class="title is-2">{{ $t('about.description.4')}}</h1>
        </section>
      </div>
    </section>
    <section class="hero is-medium is-black">
      <div class="hero-body has-text-white has-text-left">
        <div class="container has-text-centered">
          <h1 class="title is-1 is-spaced">{{ $t('about.team.title')}}</h1>
          <h1 class="subtitle is-5 has-text-grey-light">{{ $t('about.team.subtitle')}}</h1>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="columns is-mobile is-multiline is-vcentered">
        <div
          id="thumbnails"
          class="column is-3-fullhd is-4-widescreen is-4-desktop is-6-tablet is-12-mobile"
          v-for="(member, index) in memberList" :key="index"
          style="display: inline-block; vertical-align: top;"
        >
          <div class="nmp-dark">
            <header class="card-header">
              <p class="card-header-title">
                <!-- <span class="tag is-white">
                  {{ talk.category_1 }}
                </span>
                <span class="tag is-white">
                  {{ talk.category_2 }}
                </span> -->
              </p>
            </header>
            <!-- <div class="card-image" v-if="member.imageUrl.length">
              <figure class="image is-3-desktop is-6-tablet is-6-mobileby2">
                <img src="https://bulma.io/images/placeholders/480x320.png" alt="Placeholder image">
              </figure>
            </div> -->
            <div class="card-content">
              <span v-if="$i18n.locale == 'en'">
                <h1 class="title is-4">
                  {{ member.en.name }}
                </h1>
                <h1 class="subtitle is-5">
                  {{ member.en.role }}
                </h1>
              </span>
              <span v-if="$i18n.locale == 'ja'">
                <h1 class="title is-4">
                  {{ member.ja.name }}
                </h1>
                <h1 class="subtitle is-5">
                  {{ member.ja.role }}
                </h1>
              </span>

            </div>
            <div class="card-content">
              
              <p class="midashi is-size-7 has-text-weight-bold">{{ $t('about.team.from') }}</p>
              <p class="is-size-7 has-text-weight-bold" v-if="$i18n.locale == 'en'">{{ member.en.from }}</p>
              <p class="is-size-7 has-text-weight-bold" v-if="$i18n.locale == 'ja'">{{ member.ja.from }}</p>

              <p class="midashi is-size-7 has-text-weight-bold">{{ $t('about.team.keywords') }}</p>
              <p class="is-size-7 has-text-weight-bold">{{ member.keyword1 }}, {{ member.keyword2 }}, {{ member.keyword3 }}</p>
              
              <p class="midashi is-size-7 has-text-weight-bold">{{ $t('about.team.favouritetedtalk') }}</p>
              <a class="is-size-7 has-text-weight-bold" :href="getTedLinkUrl(member.favouritetedtalklink)">{{ member.favouritetedtalk }} <font-awesome-icon v-if="member.favouritetedtalk" :icon="['fas', 'external-link-alt']" style="color: white;" /></a>

              <!-- <span class="has-text-right">
                <b-collapse :open="false" position="is-bottom" aria-id="contentIdForA11y1">
                  <a class="button is-gradient is-rounded is-outlined" slot="trigger" slot-scope="props" aria-controls="contentIdForA11y1">
                    <b-icon :icon="!props.open ? 'menu-down' : 'menu-up'"></b-icon>
                      {{ !props.open ? 'Read more' : 'Read less' }}
                  </a>
                  <p class="is-size-7 has-text-left">
                    <a class="has-text-white is-size-4 fb" href="https://www.instagram.com/tedxutsukuba/">
                      <font-awesome-icon :icon="['fab', 'facebook-square']" />
                    </a>
                  </p>
                </b-collapse>
              </span> -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="hero is-medium is-black">
      <div class="hero-body has-text-white has-text-left">
        <div class="container has-text-centered">
          <h1 class="title is-1 is-spaced">{{ $t('about.join.title')}}</h1>
          <h1 class="subtitle is-5 has-text-grey-light">{{ $t('about.join.subtitle')}}</h1>
        </div>
      </div>
    </section>
    <section class="section has-text-white">
      <div class="columns is-mobile is-multiline">
        <div v-for="(job, index) in jobs" :key="job.id" class="column is-3-desktop is-6-tablet is-6-mobile">
          <div :class="`notification has-background-${job.color}`">
            <p class="has-text-weight-bold">{{ job.name }}</p>
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
          <p>{{ $t('about.join.contactus')}}</p>
          <div class="nmp-card-dark has-text-weight-bold" style="font-size: 1rem;">
            <font-awesome-icon :icon="['fas', 'envelope']" style="color: white;" /> tedxutsukuba&#64;gmail.com<br>
            <font-awesome-icon :icon="['fab', 'twitter']" style="color: white;" /> @tedxutsukuba
          </div>
        </div>

        <vue-instagram token="accessTokenHere" :count="5" :tags="['hashtag1', 'hashtag2']" mediaType="image">
          <template slot="feeds" slot-scope="props">
            <li class="fancy-list"> {{ props.feed.link }} </li>
          </template>
          <template slot="error" slot-scope="props">
            <div class="fancy-alert"> {{ props.error.error_message }} </div>
          </template>
        </vue-instagram>
      </div>
    </section>
  </section>
</template>


<script>
import Modal from '~/components/Modal.vue'
// import VueInstagram from 'vue-instagram'
import jobs from '~/contents/jobs.json'
export default {
  components: {
    Modal, VueInstagram
  },
  data() {
    return {
      showContent: false,
      postItem: "",
      jobs: jobs
    }
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
      return require(`~/assets/partners/2020/logo/${value}.jpg`)
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
    memberList() {
      return this.$store.getters[
        'member/showAllMembers'
      ](this.year)
    }
  }
}
</script>

<style lang="scss">
  .nmp-dark {
    border-radius: 18px !important;
  }
  p.midashi {
    margin-top: 0.5rem;
    color: #E62B1E;
    font-weight: bold;
  }
</style>