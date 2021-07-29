<template>
  <section class="has-background-black">
    <section :class="this.$ua.isFromSmartphone() ? 'hero is-halfheight' : 'hero is-fullheight'" id="second">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-0"><span class="neon">Back when <br class="is-hidden-touch">we were <span class="neon-emphasis">kids</span></span></h1>
          <p class="outro-copy is-size-3 is-size-4-mobile has-text-weight-semibold has-text-grey-light">
            we were burning cigars with the white plastics tips ‘til we saw the sun and we said crazy things like I refuse to look back thinking days were better just because they’re younger days I don’t know what’s ‘round the corner way I feel right now I swear we’ll never change back when we were kids swore we would never die
          </p>
        </div>
      </div>
    </section>

    <section :class="this.$ua.isFromSmartphone() ? 'hero is-halfheight' : 'hero is-fullheight'">
      <div class="hero-body">
        <div class="container has-text-centered">
          <p>Teaser Movie Comes Here</p>
          <figure class="image is-16by9">
            <iframe class="has-ratio" src="https://www.youtube.com/embed/Y56lpXvXbs0?start=72&cc_load_policy=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </figure>
        </div>
      </div>
    </section>

    <section :class="this.$ua.isFromSmartphone() ? 'hero is-halfheight' : 'hero is-fullheight'">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-1">
            <span class="neon">
              XX. XX. 2021
              <br>
              [ Place ]
              <br>
              Early Bird Tickets
              <br>
              <span class="neon-emphasis">On Sale</span>
            </span>
          </h1>
          <div class="columns is-vcentered mt-6">
            <div class="column">
              <a class="is-size-4 neon" href="/">Download <br class="is-hidden-touch">Wallpapers</a>
            </div>
            <div class="column">
              <a class="is-size-4 neon" href="/">Buy Tickets</a>
            </div>
            <div class="column">
              <button @click="isCardModal = true" style="padding: 0; border: none; background: none; cursor: pointer;">
                <p id="share" class="is-size-4 neon">Share <br class="is-hidden-touch">with friends</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <b-modal v-model="isCardModal" class="px-6">
      <div class="card has-text-centered py-6 has-background-primary" style="overflow: hidden;">
        <a class="mx-4">
          <i class="has-text-white mdi mdi-twitter" style="font-size: 3em;" alt="Share on Twitter" />
        </a>
        <a class="mx-4">
          <i class="has-text-white mdi mdi-facebook" style="font-size: 3em;" alt="Share on Facebook" />
        </a>
        <a class="mx-4" href="https://social-plugins.line.me/lineit/share?url=https%3A%2F%2Fwww.tedxutsukuba.com%2Fconferences%2F2021">
          <LineIcon style="width: 3rem;" alt="Share on LINE" />
        </a>
        <script src="https://www.line-website.com/social-plugins/js/thirdparty/loader.min.js" async="async" defer="defer"></script>
        <script type="text/javascript">LineIt.loadButton();</script>
      </div>
    </b-modal>

  </section>
</template>


<style lang="postcss" scoped>
.container {
  @media screen and (max-width: 1024px) {
    padding: 5vw;
  }
}

h1.is-0 {
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 5rem !important;
  }
  white-space: auto;
}
.neon {
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
  @media screen and (max-width: 720px) {
    text-stroke-width: 0.03em;
    -webkit-text-stroke-width: 0.03em;
    filter: saturate(2) drop-shadow(0 0 1rem yellow);
  }
  text-transform: uppercase;
  text-stroke-width: 0.03em;
  -webkit-text-stroke-width: 0.03em;
  text-stroke-color: #ec6800;
  -webkit-text-stroke-color: #ec6800;
  filter: saturate(2) drop-shadow(0 0 1rem yellow);
  color: transparent;
  letter-spacing: 0.3rem;
  animation: text-blink 5s linear infinite;
  animation-iteration-count: 6;
}
.neon-emphasis {
  @media screen and (max-width: 720px) {
    text-stroke: 0.03em gold;
    -webkit-text-stroke: 0.03em gold;
  }
  text-stroke: 0.03em gold;
  -webkit-text-stroke: 0.03em gold;
  filter: saturate(2) drop-shadow(0 0 1rem #ec6800);
  animation: text-flash 3s linear infinite;
  animation-iteration-count: 10;
}
.neon-blue {
  @extend .neon;
  text-stroke-color: #fff;
  -webkit-text-stroke-color: #fff;
}
@keyframes text-flash {
  0%  {opacity: 1;}
  20% {opacity: 1;}
  22% {opacity: 0.6;}
  24% {opacity: 1;}
  50% {opacity: 1;}
  52% {opacity: 0.6;}
  54% {opacity: 1;}
  56% {opacity: 0.6;}
  58% {opacity: 1;}
  96% {opacity: 1;}
  98% {opacity: 0.2;}
  100%{opacity: 1;}
}
@keyframes text-blink {
  0% {opacity: 1;}
  20%{opacity: 0.6;}
  24%{opacity: 1;}
}
p.outro-copy {
  visibility: hidden;
}
p.metal {
  background: linear-gradient(315deg, #f89b9e 0%, #8AE9B3 74%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.fadeIn {
  animation: fadeIn 4s;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>

<script>
import LineIcon from '@/assets/svg/line-icon.svg'

export default {
  components: {
    LineIcon
  },
  data() {
    return {
      visible: false,
      isVideoActive: true,
      isMuted: true,
      isCardModal: false
    }
  },
  head: {
    title: '2021 | TEDxUTsukuba',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 
        hid: 'description', 
        name: 'description', 
        content: 'TEDxUTsukuba 2021'
      },
      { 
        hid: 'twitter:card', 
        name: 'twitter:card', 
        content: 'summary_large_image' 
      },
      { 
        hid: 'twitter:site', 
        name: 'twitter:site', 
        content: '@tedxutsukuba' 
      },
      { 
        hid: 'twitter:creator', 
        name: 'twitter:creator', 
        content: '@tedxutsukuba' 
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'TEDxUTsukuba 2021'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://tedxutsukuba.com/events/2020'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: "TEDxUTsukuba 2021"
      },
      {
        hid: 'og:author',
        property: 'og:author',
        content: 'Haruki Kinoshita and TEDxUTsukuba website team'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://www.tedxutsukuba.com/u_logo_banner.png'
      },
      { 
        hid: 'og:site_name', 
        name: 'og:site_name', 
        content: 'TEDxUTsukuba Official Website' 
      }
    ]
  },
  methods: {
    openModal(){
      this.isCardModal = true;
    },
  }
}
</script>