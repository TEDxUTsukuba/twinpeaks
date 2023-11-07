<template>
  <section id="wrapper-dark">
    <section class="section has-text-centered-mobile">
      <h1 class="subtitle is-4 is-family-narrow has-text-primary">
        TEDxUTsukuba 2020
      </h1>
      <h1 class="title is-1">JIJIMUGE</h1>
      <p><span class="is-family-narrow">Date</span>: 2020/11/29</p>
      <p><span class="is-family-narrow">Place</span>: YouTube Live & Airmeet</p>
    </section>

    <section>
      <figure class="has-text-centered">
        <img
          src="~/assets/wallpapers/jijimuge-transparent.png"
          alt="Theme Image"
        />
      </figure>
    </section>

    <!-- <div class="columns"> 
          <div class="column is-7 is-centered has-text-centered"> 
            <nuxt-link :to="localePath('/events/2020')"><img src = "~/assets/wallpapers/jijimuge-transparent.png" style="width: 180px; margin-top: 10vh;"></nuxt-link>
            <h1 class="subtitle">TEDxUTsukuba 2020</h1>
            <h1 class="title is-1">JIJIMUGE</h1>
            <p>2020.11.29</p>
            <p>Virtual Hosting Event</p>
          </div>  
          <div class="column is-5 has-text-centered-mobile">
                        
          </div>
        </div> -->

    <section class="section">
      <figure class="is-16by9">
        <Movie :vId="jijimugeLiveStream" :aPlay="autoplay"></Movie>
      </figure>
    </section>

    <section class="section" id="card-0">
      <h1 class="title is-0">
        <span class="">{{ $t("2020.speaker.title") }}</span>
      </h1>
      <h1
        class="subtitle has-text-white has-text-right has-text-centered-mobile"
      >
        {{ $t("2020.speaker.description") }}
      </h1>
      <div class="divider" />
      <Card
        id="card-1"
        :title="$t('2020.speaker.sp1.name')"
        :subtitle="$t('2020.speaker.sp1.position')"
        :description="$t('2020.speaker.sp1.description')"
        :image_url="src_sp1"
        :youtubeId="getYouTubeUrl($t('2020.speaker.sp1.youtubeId'))"
      >
      </Card>
      <Card
        id="card-2"
        :title="$t('2020.speaker.sp2.name')"
        :subtitle="$t('2020.speaker.sp2.position')"
        :description="$t('2020.speaker.sp2.description')"
        :image_url="src_sp2"
        :youtubeId="getYouTubeUrl($t('2020.speaker.sp2.youtubeId'))"
      >
      </Card>
      <Card
        id="card-3"
        :title="$t('2020.speaker.sp3.name')"
        :subtitle="$t('2020.speaker.sp3.position')"
        :description="$t('2020.speaker.sp3.description')"
        :image_url="src_sp3"
        :youtubeId="getYouTubeUrl($t('2020.speaker.sp3.youtubeId'))"
      >
      </Card>
      <Card
        id="card-4"
        :title="$t('2020.speaker.sp4.name')"
        :subtitle="$t('2020.speaker.sp4.position')"
        :description="$t('2020.speaker.sp4.description')"
        :image_url="src_sp4"
        :youtubeId="getYouTubeUrl($t('2020.speaker.sp4.youtubeId'))"
      >
      </Card>
    </section>

    <section class="hero has-background-primary">
      <section class="section">
        <h1 class="title is-0 has-text-white">
          <span class="\">{{ $t("2020.concept.title") }}</span>
        </h1>
        <h1
          class="subtitle has-text-white has-text-right has-text-centered-mobile"
        >
          {{ $t("2020.concept.description") }}
        </h1>
        <br /><br />
        <b-carousel
          :autoplay="true"
          :arrow="arrow"
          :interval="interval"
          :icon-pack="iconPack"
          :icon-prev="iconPrev"
          :icon-next="iconNext"
          :icon-size="iconSize"
          :indicator-inside="indicatorInside"
          :indicator-style="indicatorStyle"
          :pause-info-type="pauseInfoType"
          @click="switchGallery(true)"
        >
          <b-carousel-item v-for="(item, i) in 4" :key="i">
            <a class="image ">
              <img :src="getImgUrl(i)" :alt="`Theme Statement Page ${i}`" />
            </a>
          </b-carousel-item>
          <span @click="switchGallery(false)" class="modal-close is-large" />
        </b-carousel>
      </section>
    </section>

    <section class="hero">
      <div class="hero-body">
        <section class="section">
          <h1 class="title is-0">
            <span class="">{{ $t("2020.participance.title") }}</span>
          </h1>
          <h1
            class="subtitle has-text-white has-text-right has-text-centered-mobile"
          >
            {{ $t("2020.participance.description") }}
          </h1>
          <br /><br />
          <div class="columns">
            <div class="column is-5">
              <div class="nmp-card-dark">
                <div class="header" style="margin-bottom: 1rem;">
                  <span class="tag is-medium"
                    ><i class="mdi mdi-calendar-clock" />
                    {{ $t("2020.participance.free.time") }}</span
                  >
                </div>
                <div class="">
                  <h1 class="title is-3">
                    {{ $t("2020.participance.free.title") }}
                  </h1>
                  <p class="">{{ $t("2020.participance.free.intro") }}</p>
                  <br />
                  <ul>
                    <li>
                      <i class="mdi mdi-check-circle" />
                      {{ $t("2020.participance.free.charge") }}
                    </li>
                    <li>
                      <i class="mdi mdi-check-circle" />
                      {{ $t("2020.participance.free.reservation") }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="column is-7">
              <div class="nmp-card-dark">
                <div class="header" style="margin-bottom: 1rem;">
                  <span class="tag is-medium"
                    ><i class="mdi mdi-calendar-clock" />
                    {{ $t("2020.participance.premium.time") }}</span
                  >
                </div>
                <div class="">
                  <h1 class="title is-3">
                    {{ $t("2020.participance.premium.title") }}
                  </h1>
                  <p class="">{{ $t("2020.participance.premium.intro") }}</p>
                  <br />
                  <ul>
                    <li>
                      <i class="mdi mdi-check-circle" />
                      {{ $t("2020.participance.premium.charge") }}
                    </li>
                    <li>
                      <i class="mdi mdi-check-circle" />
                      {{ $t("2020.participance.premium.reservation") }}
                    </li>
                  </ul>
                  <div class="columns is-multiline is-vcentered">
                    <div class="column has-text-right">
                      <p class="is-size-7" v-if="$i18n.locale == 'en'">
                        {{ $t("2020.participance.premium.airmeet") }}
                      </p>
                      <img
                        src="~/assets/2020/AM_Logo_Light_WM.png"
                        width="150px"
                        style="padding: 15px;"
                        alt="Airmeet Logo"
                      />
                      <p class="is-size-7" v-if="$i18n.locale == 'ja'">
                        {{ $t("2020.participance.premium.airmeet") }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>

    <section class="hero">
      <section id="highlight-title" class="section">
        <h1 class="title is-0">
          <span class="">{{ $t("2020.highlight.title") }}</span>
        </h1>
      </section>
      <div id="highlight" class="columns is-multiline is-mobile is-gapless">
        <div
          v-for="(item, i) in 15"
          :key="i"
          class="column is-4-mobile is-one-fifth-tablet"
        >
          <figure
            :class="`image is-1by1 colorfilter-base-${i % 2}`"
            :hover="isImageModalActive"
          >
            <img
              :src="getHighlightImgUrl(i)"
              alt="TEDxUTsukuba JIJIMUGE Theme"
              style="object-fit: cover; opacity: 1;
  display: block;"
            />
          </figure>
          <b-modal v-model="isImageModalActive">
            <p>sa</p>
            <p class="image is-4by3">
              <img
                :src="getHighlightImgUrl(i)"
                alt="TEDxUTsukuba JIJIMUGE Theme"
              />
            </p>
          </b-modal>
        </div>
      </div>
      <section class="section has-text-centered">
        <a
          class="button is-rounded is-gradient"
          href="https://flic.kr/s/aHsmSNKeT6"
          >{{ $t("2020.highlight.detail") }} <i class="mdi mdi-open-in-new"
        /></a>
      </section>
    </section>
    <section class="hero bg-venue" id="venue-title">
      <div class="hero-body">
        <section class="section" id="venue">
          <h1 class="title is-0 has-text-white">
            <span class="\">{{ $t("2020.venue.title") }}</span>
          </h1>
          <h1 class="title is-3 has-text-white">
            {{ $t("2020.venue.headline") }}
          </h1>
          <p class="has-text-white">
            {{ $t("2020.venue.description") }}
          </p>
          <hr />
          <p class="is-size-7 has-text-white">
            {{ $t("2020.venue.access") }}
          </p>
        </section>
      </div>
    </section>
    <section>
      <figure class="image is-3by1">
        <iframe
          class="has-ratio"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1322.7611665020916!2d140.09744825360198!3d36.10978103487121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x794e4bd21ab2280e!2z562R5rOi5aSn5a2mIOOCqOODs-ODkeODr-ODvOOCueOCv-OCuOOCqg!5e0!3m2!1sja!2sjp!4v1612814392563!5m2!1sja!2sjp"
          width="100%"
          frameborder="0"
          style="margin: 0 auto; border:0;"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </figure>
    </section>
  </section>
</template>

<script>
import Meta from "~/assets/mixins/meta";

import Card from "~/components/EnjaCard";
import Movie from "~/components/Movie";
import Image_sp1 from "~/assets/speakers/2020/speaker-01.png";
import Image_sp2 from "~/assets/speakers/2020/speaker-02.png";
import Image_sp3 from "~/assets/speakers/2020/speaker-03.png";
import Image_sp4 from "~/assets/speakers/2020/speaker-04.png";

export default {
  mixins: [Meta],
  components: {
    Card,
    Movie
  },
  data() {
    return {
      locale: this.$i18n.locale,
      meta: {
        title: 'TEDxUTsukuba 2020 "JIJIMUGE"',
        description: {
          en:
            'Join us on Nov 29, 2020 for TEDxUTsukuba "CoPhilAction", our first virtual conference.',
          ja: '2020年11月29日(日) TEDxUTsukuba "JIJIMUGE" オンラインで開催。'
        },
        image: "/sns_banner_2020.png",
        twitter_card_type: "summary_large_image"
      },
      // width: window.innerWidth,
      // height: window.innerHeight,
      isImageModalActive: false,
      jijimugeLiveStream: "yJpcvqCC0ww",
      src_sp1: Image_sp1,
      src_sp2: Image_sp2,
      src_sp3: Image_sp3,
      src_sp4: Image_sp4,
      animated: "true",
      interval: 5000,
      iconPack: "mdi",
      iconPrev: "chevron-left",
      iconNext: "chevron-right",
      iconSize: "is-large",
      indicatorInside: false,
      indicatorStyle: "is-lines",
      pauseInfoType: "is-dark",
      statementImages: [
        require("~/assets/2020/concept/statement_1_small.png"),
        require("~/assets/2020/concept/statement_2_small.png"),
        require("~/assets/2020/concept/statement_3_small.png"),
        require("~/assets/2020/concept/statement_4_small.png")
      ],
      statementMobileImages: [
        require("~/assets/2020/concept/statement_1_square.png"),
        require("~/assets/2020/concept/statement_2_square.png"),
        require("~/assets/2020/concept/statement_3_square.png"),
        require("~/assets/2020/concept/statement_4_square.png")
      ],
      carousels: [
        {
          maintitle: "JIJIMUGE",
          color: "black"
        },
        {
          title: "Slide 2",
          title: "今、世の中にある様々な境界線が溶けつつあります。",
          description:
            "グローバル化の進展により、ヒト・モノ・情報は自由に行き来し、国境は溶け始めています。",
          color: "black"
        },
        {
          title: "Slide 3",
          description: "",
          color: "black"
        },
        {
          title: "Slide 4",
          description: "",
          color: "black"
        }
      ]
    };
  },
  methods: {
    getYouTubeUrl(value) {
      return `https://youtu.be/${value}`;
    },
    getAspectRatio() {
      if (this.innerWidth > this.innerHeight) {
        console.log("yes");
      }
    },
    getHighlightImgUrl(value) {
      return require(`~/assets/2020/highlight/highlight-2020-${value}.jpg`);
    },
    getImgUrl(value) {
      if (process.client) {
        if (window.innerWidth <= 1080) {
          return this.statementMobileImages[value];
        } else {
          return this.statementImages[value];
        }
      }
    },
    switchGallery(value) {
      this.gallery = value;
      if (value) {
        return document.documentElement.classList.add("is-clipped");
      } else {
        return document.documentElement.classList.remove("is-clipped");
      }
    }
  }
  /*
  mounted() {
    const scene1 = this.$scrollmagic
      .scene({
        triggerElement: '#card-0',
        triggerHook: 0.75,
        offset: 0,
        reverse: false
      })
      .setTween('#card-1', {
        css: {
          opacity: 1
        }
      })
    const scene2 = this.$scrollmagic
      .scene({
        triggerElement: '#card-1',
        triggerHook: 0.75,
        offset: 0,
        reverse: false
      })
      .setTween('#card-2', {
        css: {
          opacity: 1
        }
      })
    const scene3 = this.$scrollmagic
      .scene({
        triggerElement: '#card-2',
        triggerHook: 0.75,
        offset: 0,
        reverse: false
      })
      .setTween('#card-3', {
        css: {
          opacity: 1
        }
      })
    const scene4 = this.$scrollmagic
      .scene({
        triggerElement: '#card-3',
        triggerHook: 0.75,
        offset: 0,
        reverse: false
      })
      .setTween('#card-4', {
        css: {
          opacity: 1
        }
      })
    const scene5 = this.$scrollmagic
      .scene({
        triggerElement: '#highlight-title',
        triggerHook: 0.75,
        offset: 0,
        reverse: false
      })
      .setTween('#highlight', {
        css: {
          opacity: 1
        }
      })
    const scene6 = this.$scrollmagic
      .scene({
        triggerElement: '#venue-title',
        triggerHook: 0.75,
        offset: 0,
        reverse: false
      })
      .setTween('#venue', {
        css: {
          opacity: 1
        }
      })
    this.$scrollmagic.addScene(scene1)
    this.$scrollmagic.addScene(scene2)
    this.$scrollmagic.addScene(scene3)
    this.$scrollmagic.addScene(scene4)
    this.$scrollmagic.addScene(scene5)
    this.$scrollmagic.addScene(scene6)
  }*/
};
</script>

<style lang="scss" scoped>
h1.is-0 {
  color: #bcc5cd;
  background: linear-gradient(135deg, #3494e6, #ec6ead);
  /* background: linear-gradient(45deg, #74ebd5, #acb6e5); */
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  &.has-text-white {
    color: white;
    background: linear-gradient(135deg, #e0eafc, #cfdef3) !important;
    background-clip: text;
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent;
  }
}

#card-1,
#card-2,
#card-3,
#card-4,
#highlight,
#venue {
  opacity: 1;
  transition: all 0.5s;
}
.bg-venue {
  background: url("~@/assets/2020/venue/IMG_9824.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  padding: 30px;
  overflow: hidden;
  position: relative;
  z-index: 0;
}
.bg-venue:before {
  content: "";
  display: block;
  position: absolute;
  background: inherit;
  filter: brightness(75%) contrast(50%) blur(5px);
  top: -20px;
  right: -20px;
  bottom: -20px;
  left: -20px;
  z-index: -1;
}
</style>
