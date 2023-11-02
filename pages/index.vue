<template>
  <div>
    <section id="top" class="wrapper-dark" style="margin: 0; padding: 0;">
      <section
        class="is-hidden-mobile hero fullheight-without-header has-background-black"
      >
        <!-- <div class="is-fixed has-background-info"> -->
        <video
          muted=""
          autoplay=""
          playsinline=""
          loop=""
          poster=""
          style="object-fit: cover; filter: saturate(50%);"
          class="fullheight-without-header"
        >
          <source src="~/static/nograin_middle_21_9.mp4" />
        </video>
        <!-- </div> -->
        <h1
          class="text-gradient is-uppercase is-0 has-text-weight-bold has-text-left"
          style="position: absolute; bottom: 0; left: 3vw; line-height: 0.9;"
        >
          Ideas<br />Worth<br />Spreading
        </h1>
      </section>
      <section class="is-hidden-tablet has-background-black pb-0">
        <video
          muted=""
          autoplay=""
          playsinline=""
          loop=""
          poster=""
          style="object-fit: cover; filter: saturate(50%); height: 65vh;"
        >
          <source src="~/static/nograin_middle_21_9.mp4" />
        </video>
        <h1
          class="text-gradient is-uppercase is-0 has-text-weight-bold has-text-left"
          style="position: absolute; bottom: 30vh; left: 3vw; line-height: 0.9;"
        >
          Ideas<br />Worth<br />Spreading
        </h1>
      </section>

      <section class="hero has-background-primary">
        <div
          class="hero-body is-flex mx-auto"
          id="intro"
          style="align-items: center; max-width: 1407px;"
        >
          <div>
            <section class="section mt-4">
              <h1
                v-if="$i18n.locale == 'ja'"
                class="title is-size-2-tablet is-size-3-mobile has-text-weight-bold has-text-white"
              >
                <span v-html="$t('intro.headline1')" />
                <br />
                <span v-html="$t('intro.headline2')" />
              </h1>
              <h1
                v-if="$i18n.locale == 'en'"
                class="title is-size-2-tablet is-size-3-mobile has-text-weight-light has-text-white"
              >
                <span v-html="$t('intro.headline1')" />
                <br class="is-hidden-mobile" />
                <span v-html="$t('intro.headline2')" />
              </h1>
              <img
                id="rocket"
                src="~/assets/svg/rocket.png"
                width="100%"
                style="z-index: 0;"
                alt=""
              />
              <article class="is-size-6">
                {{ $t("intro.description") }}
              </article>
              <div class="has-text-right mt-4">
                <nuxt-link :to="localePath('/about/utsukuba')"
                  ><button class="button is-rounded is-white">
                    {{ $t("intro.button") }}
                  </button></nuxt-link
                >
              </div>
              <AnimatedScenery class="py-6" />
            </section>
          </div>
        </div>
      </section>
    </section>

    <section class="wrapper-dark hero">
      <section class="section">
        <h1 class="title is-0 has-text-white">
          {{ $t("news.title") }}
        </h1>
        <vue-horizontal class="columns">
          <div
            class="item column is-12-mobile is-6-tablet is-6-desktop"
            v-for="(notice, index) in notices"
            :key="index"
          >
            <div class="nmp-dark my-4">
              <header class="card-header">
                <p class="card-header-title">
                  <span class="has-text-grey is-family-narrow">{{
                    formatDate(notice.updatedAt)
                  }}</span>
                </p>
              </header>
              <div class="card-image">
                <!-- <datocms-image :data="notice.image.responsiveImage" :alt="notice.image.responsiveImage.alt" /> -->
                <figure class="image is-5by3">
                  <img
                    :src="notice.image.url"
                    :alt="notice.image.alt"
                    style="object-fit: cover"
                    loading="lazy"
                  />
                </figure>
              </div>
              <div class="card-content">
                <h2 class="title is-size-5">{{ notice.title }}</h2>
                <p class="has-text-grey-light">{{ notice.shortDescription }}</p>
                <br />
                <nav class="level is-mobile">
                  <div class="level-left">
                    <p class="level-left"></p>
                  </div>
                  <div v-if="notice.detailUrl" class="level-right">
                    <p class="level-item">
                      <nuxt-link :to="localePath(`/news/${notice.id}`)">{{
                        $t("button.readmore")
                      }}</nuxt-link>
                    </p>
                    <p class="level-item">
                      <a
                        class="button is-rounded is-gradient"
                        :href="notice.detailUrl"
                        >{{ $t("button.details") }}</a
                      >
                    </p>
                  </div>
                  <div v-else class="level-right">
                    <p class="level-item">
                      <nuxt-link
                        class="button is-rounded is-gradient"
                        :to="localePath(`/news/${notice.id}`)"
                        >{{ $t("button.readmore") }}</nuxt-link
                      >
                    </p>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </vue-horizontal>
        <div class="has-text-centered py-4">
          <nuxt-link
            :to="localePath('/news')"
            class="button is-white is-rounded"
            >{{ $t("button.archive") }}</nuxt-link
          >
        </div>
      </section>
    </section>

    <section
      class="section wrapper-dark hero"
      v-if="new Date(allConferences[0].date) > new Date()"
    >
      <h1 class="title is-0 has-text-white">
        {{ $t("top.nextEvent") }}
      </h1>
      <div class="nmp-dark my-4">
        <header class="card-header">
          <p class="card-header-title">
            <span class="has-text-grey is-family-narrow">{{
              allConferences[0].date
            }}</span>
          </p>
        </header>
        <div class="card-image">
          <!-- <datocms-image :data="notice.image.responsiveImage" :alt="notice.image.responsiveImage.alt" /> -->
          <figure class="image is-5by3">
            <img
              :src="allConferences[0].themeArtwork.url"
              :alt="allConferences[0].themeArtwork.url"
              style="object-fit: cover"
              loading="lazy"
            />
          </figure>
        </div>
        <div class="card-content">
          <h2 class="title is-size-5">
            TEDxUTsukuba{{ allConferences[0].name }}
          </h2>
          <br />
          <nav class="level is-mobile">
            <div class="level-left">
              <p class="level-left"></p>
            </div>
            <div class="level-right">
              <p class="level-item">
                <nuxt-link
                  class="button is-rounded is-gradient"
                  :to="localePath(`/conferences/${allConferences[0].name}`)"
                  >{{ $t("button.details") }}</nuxt-link
                >
              </p>
              <div v-if="allConferences[0].isTicketAvailable">
                <!-- チケットを入手するサイトが登録されている場合 -->
                <a
                  v-if="allConferences[0].ticketSellingPageUrl"
                  class="button is-gradient is-rounded my-3"
                  :href="allConferences[0].ticketSellingPageUrl"
                  target="_blank"
                >
                  <i class="mdi mdi-ticket is-size-4" />
                  <span style="padding-left: 0.25rem;">{{
                    $t("2020.participance.premium.tiget")
                  }}</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </section>
    <section v-else class="section pt-0">
      <h1 class="title is-0 has-text-white">
        {{ $t("voice.title") }}
      </h1>
      <b-carousel
        :pause-info="false"
        :indicator-inside="false"
        :arrow="false"
        :indicator="true"
        animated="fade"
        :interval="5000"
      >
        <b-carousel-item v-for="(feedback, i) in feedbacks" :key="i">
          <div class="has-text-centered py-4">
            <p class="has-text-left">
              <i
                class="mdi mdi-format-quote-open is-size-1 has-text-grey-light"
              />
            </p>
            <p
              class="is-size-3 is-size-5-mobile has-text-weight-bold has-text-centered has-text-white px-6"
            >
              {{ feedback.text }}
            </p>
            <p class="has-text-right">
              <i
                class="mdi mdi-format-quote-close is-size-1 has-text-grey-light"
              />
            </p>
            <p
              class="has-text-centered mt-1 mb-4 is-family-narrow has-text-white"
            >
              {{ feedback.event }}
            </p>
          </div>
        </b-carousel-item>
      </b-carousel>
    </section>
  </div>
</template>

<script>
import { request, gql } from "~/lib/datocms";
import { Image } from "vue-datocms";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import VueHorizontal from "vue-horizontal";
import $cookies from "cookie-universal-nuxt";
import AnimatedScenery from "~/components/AnimatedScenery";
// import LogoAnimation from '~/components/LogoAnimation'

export default {
  components: {
    "datocms-image": Image,
    VueHorizontal,
    AnimatedScenery
  },
  data() {
    return {
      jijimugeLiveStream: "yJpcvqCC0ww",
      teaser: "q_Es52kl6FQ",
      weAreTEDxUTsukuba: "ZbIEuwjpxp0",
      todayDate: Date.now(),
      eventDate: Date(2020, 11, 29, 0, 0, 0),
      isAlertActive: true,
      feedbacks: [
        {
          text:
            "夢を実行に移すには不安やリスクはつきものですが、第一線で活躍されている皆さんの話を伺って、背中を押されました。",
          event: 'TEDxUTsukuba 2017 "moving"'
        },
        {
          text:
            "ふだん外国の方と接する機会が少ないため、イベントを通して文化の壁や、異文化を理解する面白さに出会うことができました。",
          event: 'TEDxUTsukuba 2019 "CoPhilAction"'
        }
      ]
    };
  },
  async asyncData({ params, i18n }) {
    // console.log(i18n.locale)
    const conferene_data = await request({
      query: gql`
        {
          allConferences(orderBy: [date_DESC]) {
            name
            date
            doorOpeningTime
            startTime
            endTime
            eventDelivery
            theme
            themeArtwork {
              url
              responsiveImage(imgixParams: { w: "800", fit: crop, crop: top }) {
                src
                width
                height
              }
            }
            location
            isTicketAvailable
            ticketSellingPageUrl
          }
        }
      `
    });
    const data = await request({
      query: gql`
        {
          notices: allNotices(first: "6", locale: ${i18n.locale}, orderBy: updatedAt_DESC) {
            id
            title
            shortDescription
            _firstPublishedAt
            updatedAt
            detailUrl 
            image {
              alt
              url
            }
          }
        }
      `
    });
    return { ready: !!data && !!conferene_data, ...data, ...conferene_data };
  },
  mounted() {
    const scene1 = this.$scrollmagic
      .scene({
        triggerElement: "#top",
        triggerHook: 1,
        reverse: false
      })
      .setTween("#intro", {
        css: {
          opacity: 1
        }
      });
    this.$scrollmagic.addScene(scene1);
  },
  methods: {
    formatDate(date) {
      return format(parseISO(date), "PPP");
    },
    myMouseOver() {
      document.getElementById("rocket").classList.add("rocket-launch");
    },
    myMouseLeave() {
      document.getElementById("rocket").classList.remove("rocket-launch");
    }
  }
};
</script>

<style lang="scss" scoped>
.same-height {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -ms-flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
}

.textoverflow {
  color: white;
  font-size: 6rem;
  font-family: "Helvetica Neue", "Arial", sans-serif;
  left: 10vw;
  position: absolute;
  top: 130vh;
}
h1.thin {
  font-weight: 100 !important;
}
#top-logo {
  width: 100%;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes SlideIn {
  0% {
    opacity: 0;
    // transform: translate3d(-1920px,0,0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
.motto {
  width: 100%;
  max-width: 480px;
  // transform: translate3d(0,0,100px);
}
#intro {
  opacity: 0;
  transition: all 1s;
}
.text-gradient {
  background: linear-gradient(135deg, #005bbb, #ffd500, #ff0000);
  background-size: 300%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: animated_text 10s ease-in-out infinite;
  -moz-animation: animated_text 10s ease-in-out infinite;
  -webkit-animation: animated_text 10s ease-in-out infinite;
}

@keyframes animated_text {
  0% {
    background-position: 0px 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0px 50%;
  }
}
</style>
