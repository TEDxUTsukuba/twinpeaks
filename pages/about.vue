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
          <div class="nmp-card-red">
            <p>{{ $t('about.description.1')}}</p>
          </div>
          <div class="nmp-card-red">
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
          <div class="nmp-card-light">
            <p>{{ $t('about.description.3')}}</p>
          </div>
          <div class="nmp-card">
            <p class="has-text-weight-bold">{{ $t('about.description.4')}}</p>
          </div>
        </div>
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
      <div class="columns is-mobile is-multiline">
        <div
          id="thumbnails"
          class="column is-3-fullhd is-3-widescreen is-3-desktop is-4-tablet"
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
            <div class="card-image" v-if="member.imageUrl.length">
              <figure class="image is-3by2">
                <img src="https://bulma.io/images/placeholders/480x320.png" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <h1 class="title is-4">
                <span v-if="$i18n.locale == 'en'">{{ member.en.name }}</span>
                <span v-if="$i18n.locale == 'ja'">{{ member.ja.name }}</span>
              </h1>
              <h1 class="subtitle is-5">
                <span v-if="$i18n.locale == 'en'">{{ member.en.role }}</span>
                <span v-if="$i18n.locale == 'ja'">{{ member.ja.role }}</span>
              </h1>
              
              <p class="midashi">{{ $t('about.team.from') }}</p>
              <span class="nakami" v-if="$i18n.locale == 'en'">{{ member.en.from }}</span>
              <span v-if="$i18n.locale == 'ja'" class="nakami">{{ member.ja.from }}</span>

              <p class="midashi">{{ $t('about.team.keywords') }}</p>
              <span class="nakami">{{ member.keyword1 }}, {{ member.keyword2 }}, {{ member.keyword1 }}</span>
              
              <p class="midashi">{{ $t('about.team.favouritetedtalk') }}</p>
              <a class="nakami" :href="member.favouritetedtalklink">{{ member.favouritetedtalk }} <font-awesome-icon :icon="['fas', 'external-link-alt']" style="color: white;" /></a>

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
      <div class="columns is-multiline">
        <div class="column is-3">
          <div class="nmp-card has-background-info">
            <p class="has-text-weight-bold">Curation</p>
          </div>
        </div>
        <div class="column is-3">
          <div class="nmp-card-red">
            <p class="has-text-weight-bold">Website</p>
          </div>
        </div>
        <div class="column is-3">
          <div class="nmp-card-red">
            <p class="has-text-weight-bold">Graphic Design</p>
          </div>
        </div>
        <div class="column is-3">
          <div class="nmp-card-red">
            <p class="has-text-weight-bold">Photography</p>
          </div>
        </div>
      
        <div class="column is-3">
          <div class="nmp-card has-background-info">
            <p class="has-text-weight-bold">Talk Design</p>
          </div>
        </div>
        <div class="column is-3">
          <div class="nmp-card has-background-info">
            <p class="has-text-weight-bold">Performance Production</p>
          </div>
        </div>
        <div class="column is-3">
          <div class="nmp-card has-background-info">
            <p class="has-text-weight-bold">Workshop</p>
          </div>
        </div>
        <div class="column is-3">
          <div class="nmp-card has-background-success">
            <p class="has-text-weight-bold">Partnering</p>
          </div>
        </div>
        <div class="column is-3">
          <div class="nmp-card has-background-warning">
            <p class="has-text-weight-bold">Promotion</p>
          </div>
        </div>
        <div class="column is-3">
          <div class="nmp-card has-background-warning">
            <p class="has-text-weight-bold">Customer Services</p>
          </div>
        </div>
        <div class="column is-3">
          <div class="nmp-card has-background-link">
            <p class="has-text-weight-bold">Venue Setup</p>
          </div>
        </div>
        <div class="column is-3">
          <div class="nmp-card has-background-link">
            <p class="has-text-weight-bold">HR Management</p>
          </div>
        </div>
      </div>
    </section>
    <section class="hero is-medium is-black">
      <div class="hero-body has-text-white has-text-left">
        <div class="container has-text-centered">
          <p>お問い合わせはお気軽に</p>
          <div class="nmp-card-dark" style="font-size: 2rem;">
            <font-awesome-icon :icon="['fas', 'envelope']" style="color: white;" /> tedxutsukuba&#64;gmail.com<br>
            <font-awesome-icon :icon="['fab', 'twitter']" style="color: white;" /> @tedxutsukuba
          </div>
        </div>
      </div>
    </section>
  </section>
</template>


<script>
import Modal from '~/components/Modal.vue'
export default {
  components: {
    Modal
  },
  data() {
    return {
      showContent: false,
      postItem: ""
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
  .midashi {
    margin-top: 0.5rem;
    color: #E62B1E;
    font-weight: bold;
  }
  .nakami {
    color: lightgray;
    font-weight: bold;
  }
</style>