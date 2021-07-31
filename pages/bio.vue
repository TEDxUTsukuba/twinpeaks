<template>
  <section class="hero is-fullheight" style="min-height: 100vh; max-height: 100vh;">
    <div class="hero-body">
      <div class="container px-6">
        <div class="has-text-centered mb-6 mx-auto" style="width: 25vw; max-width: 360px; min-width: 180px;">
          <nuxt-link to="/">
            <Logo />
          </nuxt-link>
        </div>
        <div class="columns is-multiline has-text-centered is-centered mb-5">
          <div class="column is-6-tablet is-3-desktop p-2" v-for="(item, index) in items" :key="index" :style="`background: ${item.color}`">
            <a :href="item.link" class="social-media-link">
              <i :class="`mdi mdi-${item.name} is-size-1 has-text-white`" />
            </a>
          </div>
        </div>
        <nuxt-link class="heading is-size-6 button is-dark has-text-grey has-text-centered mx-auto" to="/" style="max-width: 360px;">Website</nuxt-link>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .column {
    background-clip: content-box !important;
    border-radius: 18px;
    height: 15vh;
  }
  a.social-media-link {
    width: 100%; height: 100%; display: flex; justify-content: center; align-items: center;
  }
</style>

<script>
import Logo from '~/assets/logo/u_bgblack_oneline.svg'
export default {
  layout: 'fullscreen',
  components: {
    Logo
  },
  data() {
    return {
      items: [
        {
          name: "facebook",
          color: "#1877f2",
          link: "https://www.facebook.com/tedxutsukuba"
        },
        {
          name: "twitter",
          color: "#1DA1F2",
          link: "https://www.twitter.com/tedxutsukuba"
        },
        {
          name: "instagram",
          color: "linear-gradient(225deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);",
          link: "https://www.instagram.com/tedxutsukuba"
        },
        {
          name: "youtube",
          color: "#c4302b",
          link: "https://youtube.com/playlist?list=PL3l-aBonu6U7_2-IZqh0xeP5o571ixU_r"
        },
        // {
        //   name: "earth",
        //   color: "#475569",
        //   link: "https://www.tedxutsukuba.com"
        // }
      ]
    }
  }
}
</script>