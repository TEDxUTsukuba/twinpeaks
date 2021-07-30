<template>
  <section class="has-background-primary" style="overflow: hidden !important; position: relative !important;">
    <section :class="this.$ua.isFromSmartphone() ? 'hero is-info is-fullheight' : 'hero is-info is-fullheight'" id="second" style="overflow-x:">
      <div class="hero-body">
        <div class="container has-text-centered" style="position: relative;">
          <h1 class="is-0 has-text-centered has-text-weight-semibold mb-6">The world is a<br>playground.</h1>
          <div class="has-text-centered mx-auto" style="max-width: 840px;">
            <countdown :time="time" :transform="transformSlotProps" v-slot="{ days, hours, minutes, seconds }">
              <div class="columns is-multiline is-mobile is-variable is-2">
                <div class="column is-3 has-text-centered">
                  <div class="box">
                    <p class="title is-size-1 is-size-4-mobile has-text-info">{{ days }}</p>
                    <p class="subtitle heading has-text-black">Days</p>
                  </div>
                </div>
                <div class="column is-3 has-text-centered">
                  <div class="box">
                    <p class="title is-size-1 is-size-4-mobile has-text-info">{{ hours }}</p>
                    <p class="subtitle heading has-text-black">hours</p>
                  </div>
                </div>
                <div class="column is-3 has-text-centered">
                  <div class="box">
                    <p class="title is-size-1 is-size-4-mobile has-text-info">{{ minutes }}</p>
                    <p class="subtitle heading has-text-black">minutes</p>
                  </div>
                </div>
                <div class="column is-3 has-text-centered">
                  <div class="box">
                    <p class="title is-size-1 is-size-4-mobile has-text-info">{{ seconds }}</p>
                    <p class="subtitle heading has-text-black">seconds</p>
                  </div>
                </div>
              </div>
            </countdown>
          </div>
        </div>
      </div>
      <PlaygroundSquare class="fadeIn" :width="$ua.isFromSmartphone() ? '50vw': '50vh'" strokecolor="#1EB8CB" style="position: absolute; top: 10vh; right: -10vw;"/>
      <PlaygroundCircle class="expand" :width="$ua.isFromSmartphone() ? '35vw': '35vh'" fillcolor="#E5C300" style="position: absolute; top: 15vh; left: -5vw;"/>
      <PlaygroundHexagon class="rotate" :width="$ua.isFromSmartphone() ? '25vw': '25vh'" fillcolor="#f25278" style="position: absolute; top: 70vh; left: 15vw;"/>
      <BuildBackBetter class="flash" height="70vh" fillcolor="#fff" opacity="0.5" style="position: absolute; top: 165vh; left:5vw; transform:rotate(-30deg);"/>
    </section>

    <section class="hero is-halfheight is-info has-text-centered">
      <div class="hero-body">
        <div class="container">
          <p class="outro-copy is-size-3 is-size-4-mobile has-text-weight-semibold">
            The world is a playground. You know that when you are a kid, but somewhere along the ways, everyone forgets it.
            <br>
            <span class="pt-4 has-text-grey-light is-size-4 is-size-5-mobile">- Yes Man (2008)</span>
          </p>
          <button @click="showStatement = !showStatement" class="mt-6 button is-medium is-white is-rounded">Read Statement</button>
        </div>
      </div>
    </section>

    <section class="hero is-info is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="column is-offset-3-desktop is-9-desktop">
            <figure class="image is-16by9">
              <iframe class="has-ratio" src="https://www.youtube.com/embed/MAUMzkIe1fg?cc_load_policy=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </figure>
          </div>
        </div>
      </div>
    </section>

    <section class="hero is-info is-halfheight has-text-centered">
      <div class="hero-body">
        <div class="container">
          <h2 class="title is-1 has-text-white has-text-left-desktop mb-6">
            Save the date.<br>
            Stay tuned.
          </h2>
          <br>
          <div class="has-text-left-desktop mb-4">
            <a 
              class="button is-white is-rounded mx-1 mb-2"
              href="https://www.google.com/calendar/render?action=TEMPLATE&text=TEDxUTsukuba2021&dates=20211101/20211102&ctz=Japan&details=TEDxUTsukuba+Annual+Main+Conference&sprop=https://www.tedxutsukuba.com/"
              target="_blank"
            >
              <i class="mdi mdi-google mr-1 has-text-info" />
              Google Calendar
            </a>
            <a
              class="button is-white is-rounded mx-1 mb-2"
              href="https://outlook.live.com/owa/?path=/calendar/action/compose&subject=TEDxUTsukuba2021&startdt=2021-11-01&enddt=2021-11-02&allday=true&body=TEDxUTsukuba+Annual+Main+Conference"
              target="_blank"
            >
              <i class="mdi mdi-microsoft-outlook mr-1 has-text-info" />
              Outlook
            </a>
          </div>
          <div class="has-text-left-desktop">
            <span class="mr-4">Follow us on</span><br class="is-hidden-tablet">
            <a class="mx-2" href="https://www.facebook.com/tedxutsukuba" target="_blank">
              <i class="has-text-white mdi mdi-facebook is-size-2" alt="Facebook" />
            </a>
            <a class="mx-2" href="https://www.instagram.com/tedxutsukuba" target="_blank">
              <i class="has-text-white mdi mdi-instagram is-size-2" alt="Instagram" />
            </a>
            <a class="mx-2" href="https://www.twitter.com/tedxutsukuba" target="_blank">
              <i class="has-text-white mdi mdi-twitter is-size-2" alt="Twitter" />
            </a>
          </div>
        </div>
      </div>
      <!-- <Quote class="pb-6" width="50vw" fillcolor="#fff" opacity="0.5" style="transform: rotate(-30deg);" /> -->
    </section>

    <section class="hero is-info is-halfheight has-text-centered has-text-right-desktop">
      <div class="hero-body">
        <div class="container">
          <h2 class="title is-1 has-text-white mb-6">
            Invite your friends.<br>
            Join us together.
          </h2>
        <button @click="isCardModal = true" style="padding: 0; border: none; background: none; cursor: pointer;">
          <p id="share" class="is-size-4 has-text-bold has-text-white">Share on Social Media</p>
        </button>
        </div>
      </div>
    </section>

    <section class="hero is-info is-halfheight has-text-centered">
      <div class="hero-body">
        <div class="container">
          This virtual conference is presented by TEDxUTsukuba on our own responsibility. <br>Each and every staff follows enhanced precautions against COVID-19, and acknowledges the risk associated with face-to-face activities. 
        </div>
      </div>
    </section>


    <b-modal v-model="isCardModal" class="px-6">
      <div class="card has-text-centered py-6 has-background-primary" style="overflow: hidden;">
        <a class="mx-4" href="https://www.facebook.com/sharer/sharer.php?u=https://www.tedxutsukuba.com/conferences/2021">
          <i class="has-text-white mdi mdi-facebook" style="font-size: 3em;" alt="Share on Facebook" />
        </a>
        <a class="mx-4" href="https://twitter.com/intent/tweet?text=Stay+tuned+for+TEDxUTsukuba+2021&via=tedxutsukuba&related=tedxutsukuba&url=www.tedxutsukuba.com/conferences/2021">
          <i class="has-text-white mdi mdi-twitter" style="font-size: 3em;" alt="Share on Twitter" />
        </a>
        <a class="mx-4" href="https://social-plugins.line.me/lineit/share?url=https%3A%2F%2Fwww.tedxutsukuba.com%2Fconferences%2F2021">
          <LineIcon style="width: 3rem;" alt="Share on LINE" />
        </a>
        <script src="https://www.line-website.com/social-plugins/js/thirdparty/loader.min.js" async="async" defer="defer"></script>
        <script type="text/javascript">LineIt.loadButton();</script>
      </div>
    </b-modal>

    <b-modal v-model="showStatement" full-screen>
      <div class="has-text-centered is-info" style="overflow: hidden; min-height: 100vh; padding-top: 5rem; margin: auto;">
        <Statement fill="#fff" :width="this.$ua.isFromSmartphone() ? '80vw' : ''" :height="this.$ua.isFromSmartphone() ? '' : '75vh'" />
        <div class="has-text-centered" style="margin-top: 2vh;">
          <button @click="showStatement = !showStatement" class="button is-rounded is-outlined is-white">Close</button>
        </div>
      </div>
    </b-modal>
  </section>
</template>


<style lang="scss" scoped>
  section, p, a, span, h1, button {
    font-family: 'Poppins' !important;
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

@media screen and (max-width: 720px) {
  .columns.is-variable.is-2 {
    --columnGap: 0.25rem !important;
  }
  .is-0 {
    font-size: 3rem !important;
  }
  .is-1 {
    font-size: 2.5rem !important;
  }
  .heading {
    font-size: .5rem !important;
  }
  .box {
    padding: .5rem !important;
  }
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
#share {
  border-bottom: 6px solid silver;
  &:hover {
    color: silver !important;
  }
}
.expand {
  animation: 6s ease-in-out expand infinite;
  animation-iteration-count: 8;
}

.rotate {
  animation: 8s linear rotate infinite;
  animation-iteration-count: 6;
}

.flash {
  animation: 4s linear text-blink;
  animation-iteration-count: 12;
}

@keyframes expand {
  10%, 90% {
    transform: scale(1);
  }
  40%, 60% {
    transform: scale(1.2);
  }
}

@keyframes text-blink {
  0%  {opacity: 0.3;}
  50% {opacity: 0.6;}
  100% {opacity: 0.3;}
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
import Quote from '~/components/teaser/Quote.vue'
import Statement from '~/components/teaser/Statement.vue'

export default {
  components: {
    LineIcon, PlaygroundSquare, PlaygroundCircle, PlaygroundHexagon, BuildBackBetter, Quote, Statement
  },
  data() {
    const now = new Date();
    // 月は0ベース
    const eventDate = new Date(2021, 10, 1);
    return {
      visible: false,
      isVideoActive: true,
      isMuted: true,
      isCardModal: false,
      showStatement: false,
      eventDate: eventDate,
      time: eventDate - now,
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
        content: "The World is a Playground. Stay tuned for more updates on TEDxUTsukuba 2021."
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
    formatDate(date) {
      return format(parseISO(date), 'PPP')
    },
    openModal(){
      this.isCardModal = true;
    },
    transformSlotProps(props) {
      const formattedProps = {};
      Object.entries(props).forEach(([key, value]) => {
        formattedProps[key] = value < 10 ? `0${value}` : String(value);
      });
      return formattedProps;
    },
  }
}
</script>