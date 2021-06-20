<template>
  <section class="has-background-black">
    <section class="hero fullheight-without-header vertical-center" v-if="this.$ua.isFromSmartphone()">
      <figure class="image">
        <video v-show="isVideoActive"
          src="~/assets/nograin_short.mp4"  
          autoplay
          muted
          v-on:ended="onEnded"
          width="100%"
        />
        <img v-show="!isVideoActive"
          src="~/assets/u_logo_banner.png"
          width="100%"
          style="position: absolute; top:-100%; left:0; right: 0; bottom:-100%; margin: auto;"
        />
      </figure>
    </section>
    <section class="hero fullheight-without-header vertical-center" v-else>
      <figure class="image" :style="this.$ua.isFromSmartphone() ? '' : 'height: calc(100vw*5/12); width: 100vw; overflow: hidden;'">
        <video v-show="isVideoActive"
          src="~/assets/nograin_short.mp4"  
          autoplay
          :muted="isMuted"
          v-on:ended="onEnded"
          width="100%"
          style="position: absolute; top:-100%; left:0; right: 0; bottom:-100%; margin: auto;"
        />
        <b-button style="position: absolute; right: 10px; bottom: 10px;" class="is-dark" :icon-left="this.isMuted ? 'volume-off' : 'volume-high'" @click="isMuted = !isMuted"></b-button>
        <img v-show="!isVideoActive"
          src="~/assets/u_logo_banner.png"
          width="100%"
          style="position: absolute; top:-100%; left:0; right: 0; bottom:-100%; margin: auto;"
        />
      </figure>
      <p v-show="!isVideoActive" class="has-text-gray">
        Scroll
      </p>
    </section>

    <section class="hero is-fullheight" id="first">
      <div :class="{fadeIn: visible}">
        <div class="hero-body" v-show="visible">
          <div class="container has-text-centered" v-show="visible">
            <h1 class="title is-0" v-show="visible"><span class="neon">We are living <br class="is-hidden-touch">in a <span class="neon-emphasis">playground</span></span></h1>
            <p v-show="visible" class="outro-copy is-size-3 is-size-4-mobile has-text-weight-semibold">
              Days when we’d fight we’d fight ‘til I would give in yeah, perfect disasters we were reaching, reaching for the rafters and on most of the days we were searching for ways to get up and get out of the town that we were raised yeah, ‘cause we were done I remember we were sleeping in cars we were searching for OZ
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="hero is-fullheight" id="second">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-0"><span class="neon">Back when <br class="is-hidden-touch">we were <span class="neon-emphasis">kids</span></span></h1>
          <p class="outro-copy is-size-3 is-size-4-mobile has-text-weight-semibold">
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
            <iframe class="has-ratio" src="https://www.youtube.com/embed/Y56lpXvXbs0?start=16" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </figure>
        </div>
      </div>
    </section>

    <section class="hero is-fullheight">
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


<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap');
section {
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}
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
  @media screen and (max-width: 720px) {
    -webkit-text-stroke-width: 0.03em;
    filter: drop-shadow(0 0 1rem yellow);
  }
  text-transform: uppercase;
  -webkit-text-stroke-width: 0.03em;
  -webkit-text-stroke-color: #ec6800;
  filter: drop-shadow(0 0 0.5rem yellow);
  color: transparent;
  letter-spacing: 0.2rem;
  // color: #bcc5cd;
  // background: linear-gradient(315deg, #fce043 0%, #fb7ba2 74%);
  // /* background: linear-gradient(45deg, #74ebd5, #acb6e5); */
  // background-clip: text;
  // -webkit-background-clip: text;
  // -webkit-text-fill-color: transparent;
}
.neon-emphasis {
  @media screen and (max-width: 720px) {
    -webkit-text-stroke: 0.03em gold;
  }
  -webkit-text-stroke: 0.03em gold;
  filter: drop-shadow(0 0 0.5rem #ec6800);
  animation: text-flash 4s linear infinite;
  animation-iteration-count: 10;
}
.neon-blue {
  @extend .neon;
  -webkit-text-stroke-color: #fff;
}
@keyframes text-flash {
  0%  {opacity: 1;}
  20% {opacity: 1;}
  22% {opacity: 0.6;}
  24% {opacity: 1;}
  26% {opacity: 0.6;}
  28% {opacity: 1;}
  80% {opacity: 1;}
  82% {opacity: 0.6;}
  84% {opacity: 1;}
  100%{opacity: 1;}
}
p.outro-copy {
  color: lightgray;
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
  mounted () {
    // const isVideoPlayed = this.$cookies.get("isVideoPlayed");
    window.addEventListener('scroll', this.onScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    openModal(){
      this.isCardModal = true;
    },
    onEnded() {
      this.isVideoActive = false;
      this.$cookies.set("isVideoPlayed", true, {
        maxAge: 60 * 60 * 24
      });
    },
    onScroll () {
      if (!this.visible) {
        var target = document.getElementById('first');
        var top = target.getBoundingClientRect().top;
        this.visible = top < window.innerHeight - 200;
      }
      // console.log(top);
      // document.getElementById('navbar-top').style.display = "none";
      var elements = document.getElementsByClassName('outro-copy');
      var i;
      for(i=0;i<elements.length;i++){
        elements[i].style.visibility = "visible";
      }
    }
  }
}
</script>