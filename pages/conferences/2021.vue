<template>
  <section class="has-background-primary">
    <section :class="this.$ua.isFromSmartphone() ? 'hero is-info is-fullheight' : 'hero is-info is-fullheight'" id="second">
      <div class="hero-body">
        <div class="container has-text-centered" style="position: relative;">
          <h1 class="is-0 has-text-centered has-text-weight-semibold mb-5">The World is a<br>Playground.</h1>
          <!-- <h1 class="is-0 has-text-centered has-text-weight-semibold"><span class="has-background-white has-text-itf px-5">Playground</span></h1> -->
          <p class="outro-copy is-size-3 is-size-5-mobile has-text-weight-semibold">
            we were burning cigars with the white plastics tips ‘til we saw the sun and we said crazy things like I refuse to look back thinking days were better just because they’re younger days
          </p>
        </div>
      </div>
      <PlaygroundSquare class="fadeIn" :width="$ua.isFromSmartphone() ? '50vw': '50vh'" strokecolor="#1EB8CB" style="position: absolute; top: 10vh; right: -20vw;"/>
      <PlaygroundCircle class="expand" :width="$ua.isFromSmartphone() ? '35vw': '35vh'" fillcolor="#E5C300" style="position: absolute; top: 15vh; left: -5vw;"/>
      <PlaygroundHexagon class="rotate" :width="$ua.isFromSmartphone() ? '25vw': '25vh'" fillcolor="#f25278" style="position: absolute; bottom: 5vh; left: 15vw;"/>
      <BuildBackBetter class="" height="70vh" fillcolor="#fff" opacity="0.5" style="position: absolute; top: 110vh; left:5vw; transform:rotate(-30deg);"/>
    </section>

    <section class="hero is-info is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <p>Teaser Movie Comes Here</p>
          <div class="column is-offset-3-desktop is-9-desktop">
            <figure class="image is-16by9">
              <iframe class="has-ratio" src="https://www.youtube.com/embed/Y56lpXvXbs0?start=72&cc_load_policy=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </figure>
          </div>
        </div>
      </div>
    </section>

    <section class="hero is-large is-white">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-1 has-text-info">
              XX. XX. 2021
              <br>
              Early Bird Tickets
              <br>
              <span class="has-text-primary">On Sale</span>
          </h1>

          <button @click="isCardModal = true" style="padding: 0; border: none; background: none; cursor: pointer;">
            <p id="share" class="is-size-4 has-text-bold has-text-info">Share with friends</p>
          </button>
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


<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600;800&display=swap');
  section, p, a, span, h1 {
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
    font-feature-settings: "palt";
  }

  .container {
    @media screen and (max-width: 1024px) {
      padding: 15vw 5vw;
    }
    z-index: 10;
  }
.is-0 {
  line-height: 1;
  padding-top: 0 !important;
}
.is-itf {
  background-color: #1EB8CB;
  color: #fff;
}
.has-text-itf {
  color: #1EB8CB !important;
}
.is-info {
  background-color: #0000dd;
  color: #fff;
}
.has-text-info {
  color: #0000dd !important;
}

.expand {
  animation: 6s ease-in-out expand infinite;
}

.rotate {
  animation: 8s linear rotate infinite;
}

@keyframes expand {
  10%, 90% {
    transform: scale(1);
  }
  40%, 60% {
    transform: scale(1.2);
  }
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
@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); } 
}
@keyframes line {
  0%{stroke-dashoffset:3000;fill-opacity: 0;}
	30% {fill-opacity: 0;}
	35% {fill-opacity: 1;}
	100%{stroke-dashoffset:0;fill-opacity: 1;}
}

.fadeIn {
  animation: fadeIn 4s;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(-100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>

<script>
import LineIcon from '@/assets/svg/line-icon.svg'
import PlaygroundSquare from '~/components/teaser/Square.vue'
import PlaygroundCircle from '~/components/teaser/Circle.vue'
import PlaygroundHexagon from '~/components/teaser/Hexagon.vue'
import BuildBackBetter from '~/components/teaser/BuildBackBetter.vue'

export default {
  components: {
    LineIcon, PlaygroundSquare, PlaygroundCircle, PlaygroundHexagon, BuildBackBetter
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