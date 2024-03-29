<template>
  <section id="wrapper-dark">
    <section class="section is-halfheight has-text-centered">
      <i class="mdi mdi-information has-text-primary is-size-1" />
      <h1 class="title is-1 is-spaced">{{ $t("about.tedandtedx.title") }}</h1>
      <h1 class="subtitle has-text-grey-light">
        {{ $t("about.tedandtedx.subtitle") }}
      </h1>
    </section>
    <section class="hero" id="ted">
      <section class="section" id="ted-without-background">
        <h1 class="title is-0 has-text-white">{{ $t("about.ted.title") }}</h1>
        <article v-if="$i18n.locale == 'en'">
          <span class="em">TED</span> is a nonprofit organization devoted to
          <span class="em">Ideas Worth Spreading</span>. Started as a four-day
          conference in California 30 years ago, TED has grown to support its
          mission with multiple initiatives. The two annual TED Conferences
          invite
          <span class="em">the world’s leading thinkers and doers</span> to
          speak for <span class="em">18 minutes or less</span>. Many of these
          talks are then made available, free, at TED.com. TED speakers have
          included Bill Gates, Jane Goodall, Elizabeth Gilbert, Sir Richard
          Branson, Nandan Nilekani, Philippe Starck, Ngozi Okonjo-Iweala, Sal
          Khan, Daniel Kahneman and John Maeda, who earned his Ph.D. at the
          University of Tsukuba.
        </article>
        <article v-if="$i18n.locale == 'ja'">
          <span class="em">TED</span>は、非営利団体であり、<span class="em"
            >価値あるアイデアを広める</span
          >ことを目的としています。30年前にカリフォルニアで開催された4日間のカンファレンスから始まって以来、発展を続け、現在は複数の取り組みを通してその使命を支えています。年に2回開催されるTEDカンファレンスでは、<span
            class="em"
            >世界の様々な分野の第一人者</span
          >を招き、<span class="em">18分以内に収まるトーク</span
          >を行ってもらいます。これらのトークの多くは、TED.comで無料で公開されています。これまでに、ビル・ゲイツ、アル・ゴア、エリザベス・ギルバート、ジェフ・ホーキンス、レイ・カーツワイル、新井紀子、伊藤穰一、石井菜穂子、筑波大学の卒業生であるジョン・マエダなどがTEDに登壇しています。
        </article>
        <br />
        <article v-if="$i18n.locale == 'en'">
          <span class="em">The annual TED Conference</span> takes place each
          spring in Vancouver, British Columbia. TED’s media initiatives include
          <span class="em">TED.com</span>, where new TED Talks are posted daily;
          <span class="em">the Open Translation Project</span>, which provides
          subtitles and interactive transcripts as well as translations from
          volunteers worldwide; the educational initiative
          <span class="em">TED-Ed</span>. TED has established the annual
          <span class="em">TED Prize</span>, where exceptional individuals with
          a wish to change the world get help translating their wishes into
          action; <span class="em">TEDx</span>, which supports individuals or
          groups in hosting local, self- organized TED-style events around the
          world, and the <span class="em">TED Fellows program</span>, helping
          world-changing innovators from around the globe to amplify the impact
          of their remarkable projects and activities.
        </article>
        <article v-if="$i18n.locale == 'ja'">
          <span class="em">TEDカンファレンス</span
          >は、毎年春にカナダ・バンクーバーで開催されています。TEDの取り組みには、毎日新しいTED
          Talksが掲載されるプラットフォーム<span class="em">TED.com</span
          >、世界中のボランティアが翻訳と文字起こしを行い字幕を提供する<span
            class="em"
            >オープン・トランスレーション・プロジェクト</span
          >、教育分野における取り組み<span class="em">TED-Ed</span
          >などがあります。TEDは、世界を変えたいという願いを持つ優れた人々が行動を起こすことを支援する<span
            class="em"
            >TED Prize</span
          >や、個人やグループが世界各地で開催するTEDスタイルのイベントを支援する<span
            class="em"
            >TEDx</span
          >、世界を変えるイノベーターたちが、彼らの素晴らしいプロジェクトや活動の影響力を増幅させるための支援を行う<span
            class="em"
            >TED Fellowsプログラム</span
          >などを毎年開催しています。
        </article>
      </section>
    </section>

    <section class="hero is-light" id="ted-stats">
      <section class="section">
        <div class="columns is-mobile is-multiline">
          <div class="column has-text-centered is-12-mobile is-4-tablet">
            <div>
              <p class="title is-size-1 has-text-primary">3600+</p>
              <p
                class="subtitle is-family-narrow has-text-dark has-text-weight-bold"
              >
                Talks
              </p>
            </div>
          </div>
          <div class="column has-text-centered is-6-mobile is-4-tablet">
            <div>
              <p class="title is-size-1 has-text-primary">116</p>
              <p
                class="subtitle is-family-narrow has-text-dark has-text-weight-bold"
              >
                Languages
              </p>
            </div>
          </div>
          <div class="column has-text-centered is-6-mobile is-4-tablet">
            <div>
              <p class="title is-size-1 has-text-primary">1.5M</p>
              <p
                class="subtitle is-family-narrow has-text-dark has-text-weight-bold"
              >
                Views per day
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>

    <section class="hero" id="tedx">
      <section class="section" id="tedx-without-background">
        <h1 class="title is-0 has-text-white">{{ $t("about.tedx.title") }}</h1>
        <article v-if="$i18n.locale == 'en'">
          In the spirit of <span class="em">ideas worth spreading</span>, TEDx
          is a program of
          <span class="em">local, self-organized events</span> that bring people
          together to share a TED-like experience. At a TEDx event, TED Talks
          video and live speakers combine to spark
          <span class="em">deep discussion</span> and
          <span class="em">connection</span>. These local, self-organized events
          are branded TEDx, where
          <span class="em">x = independently organized TED event</span>. The TED
          Conference provides general guidance for the TEDx program, but
          individual TEDx events are self-organized. (Subject to certain rules
          and regulations.)
        </article>
        <article v-if="$i18n.locale == 'ja'">
          TEDxは、<span class="em">価値あるアイデアを広める</span
          >という精神に基づいて、TEDのような体験を共有するために、<span
            class="em"
            >地域や大学</span
          >で<span class="em">自主的なイベント</span
          >を開催するというプログラムです。TEDxイベントでは、TEDトークのビデオと登壇者によって、少人数のグループでの<span
            class="em"
            >深い議論</span
          >と<span class="em">つながり</span
          >が生まれます。TEDカンファレンスはTEDxプログラムの総合的なガイダンスを提供していますが、私たちのイベントを含む個々のTEDxイベントは一定のルールと制限の下に自主的に組織されています。
        </article>
      </section>
    </section>

    <section class="hero has-background-primary">
      <section class="section">
        <div class="columns is-mobile is-multiline">
          <div class="column has-text-centered is-12-mobile is-4-tablet">
            <div>
              <p class="title is-size-1 has-text-light">100,000+</p>
              <p
                class="subtitle is-family-narrow has-text-grey-light has-text-weight-bold"
              >
                Talks
              </p>
            </div>
          </div>
          <div class="column has-text-centered is-6-mobile is-4-tablet">
            <div>
              <p class="title is-size-1 has-text-light">170+</p>
              <p
                class="subtitle is-family-narrow has-text-grey-light has-text-weight-bold"
              >
                Countries
              </p>
            </div>
          </div>
          <div class="column has-text-centered is-6-mobile is-4-tablet">
            <div>
              <p class="title is-size-1 has-text-light">3000+</p>
              <p
                class="subtitle is-family-narrow has-text-grey-light has-text-weight-bold"
              >
                Events every year
              </p>
            </div>
          </div>

          <div class="column has-text-centered is-6-mobile is-3-tablet">
            <div></div>
          </div>
        </div>
      </section>
    </section>

    <section class="section has-text-centered">
      <h1 class="title is-0 has-text-white">{{ $t("about.ted.watch") }}</h1>
      <figure class="image is-16by9">
        <iframe
          class="has-ratio"
          src="https://embed.ted.com/talks/john_maeda_designing_for_simplicity"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </figure>
      <div class="divider" />
      <p class="is-family-narrow has-text-primary">
        {{ $t("about.ted.event") }}
      </p>
      <p class="title">{{ $t("about.ted.talktitle") }}</p>
      <p class="subtitle">{{ $t("about.ted.speaker") }}</p>
      <a class="button is-rounded is-gradient" href="https://www.ted.com/talks"
        >{{ $t("about.ted.watchmoreted")
        }}<i class="mdi mdi-open-in-new" style="margin-left: 0.25rem;"
      /></a>
      <div class="divider" />
      <figure class="image is-16by9">
        <iframe
          class="has-ratio"
          src="https://embed.ted.com/talks/takaharu_tezuka_the_best_kindergarten_you_ve_ever_seen"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </figure>
      <div class="divider" />
      <p class="is-family-narrow has-text-primary">
        {{ $t("about.tedx.event") }}
      </p>
      <p class="title">{{ $t("about.tedx.talktitle") }}</p>
      <p class="subtitle">{{ $t("about.tedx.speaker") }}</p>
      <a
        class="button is-rounded is-gradient"
        target="_blank"
        href="https://www.ted.com/watch/tedx-talks"
        >{{ $t("about.tedx.watchmoretedx")
        }}<i class="mdi mdi-open-in-new" style="margin-left: 0.25rem;"
      /></a>
    </section>

    <section class="section has-text-centered">
      <h1 class="title is-0 has-text-white">{{ $t("about.ted.listen") }}</h1>
      <div class="columns is-multiline">
        <div class="column is-6-fullhd is-12 has-text-centered">
          <iframe
            class="podcast"
            src="https://open.spotify.com/embed-podcast/show/1VXcH8QHkjRcTCEd88U3ti"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
        <div class="column is-6-fullhd is-12 has-text-centered">
          <iframe
            class="podcast apple"
            src="https://embed.podcasts.apple.com/us/podcast/ted-talks-daily/id160904630?itsct=podcast_box&amp;itscg=30200&amp;theme=light"
            height="450px"
            frameborder="0"
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
            allow="autoplay *; encrypted-media *;"
            style="width: 100%; max-width: 660px; overflow: hidden; border-radius: 10px; background: transparent;"
          ></iframe>
        </div>
      </div>
      <a
        class="button is-rounded is-gradient"
        target="_blank"
        href="https://audiocollective.ted.com/"
        >{{ $t("about.ted.listenmore")
        }}<i class="mdi mdi-open-in-new" style="margin-left: 0.25rem;"
      /></a>
    </section>

    <section class="section">
      <h1 class="title is-0 has-text-white">{{ $t("about.ted.join") }}</h1>
      <div class="columns is-multiline">
        <div class="column is-6">
          <div class="nmp-card-red">
            <div class="block">
              <p class="title is-size-4">{{ $t("events.othertedx.quote") }}</p>
              <p v-html="$t('events.othertedx.description')" />
            </div>
            <div class="block has-text-right">
              <a
                class="button is-rounded is-white"
                href="https://www.ted.com/tedx/events?autocomplete_filter=Japan&year=Year&month=Month&commit=Submit"
                target="_blank"
                >{{ $t("button.discover") }}<i class="mdi mdi-open-in-new"
              /></a>
            </div>
          </div>
        </div>
        <div class="column is-6">
          <div class="nmp-card-red">
            <div class="block">
              <p class="title is-size-4">{{ $t("about.membership.quote") }}</p>
              <p v-html="$t('about.membership.description')" />
            </div>
            <div class="block has-text-right">
              <a
                class="button is-rounded is-white"
                href="https://www.ted.com/membership"
                target="_blank"
                >{{ $t("button.discover") }}<i class="mdi mdi-open-in-new"
              /></a>
            </div>
          </div>
        </div>
      </div>
      <br />
    </section>
    <section
      class="section wrapper-dark hero"
      v-if="new Date(allConferences[0].date) > new Date()"
    >
      <h2 class="title is-0 has-text-white">
        {{ $t("top.nextTedxutsukubaEvent") }}
      </h2>
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
                  v-on:click="click_ticket()"
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
  </section>
</template>

<script>
import { request, gql } from "~/lib/datocms";
import Meta from "~/assets/mixins/meta";

import Movie from "~/components/Movie.vue";
export default {
  mixins: [Meta],
  components: {
    Movie
  },
  data() {
    return {
      locale: this.$i18n.locale,
      meta: {
        title: this.$i18n.t("about.tedandtedx.title"),
        description: this.$i18n.t("about.tedandtedx.subtitle")
      },
      videoId1: "d0NHOpeczUU",
      videoId2: "JSP7GPU3Eic",
      videoId3: "-FOCpMAww28",
      videoId4: "xHsXfmHaBUo"
    };
  },
  async asyncData({ params, i18n }) {
    // console.log(i18n.locale)
    const conference_data = await request({
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

    return { ...conference_data };
  },
  /*
  mounted() {
    const scene1 = this.$scrollmagic
      .scene({
        triggerElement: "#wrapper-dark",
        triggerHook: 0.75,
        offset: 0,
        reverse: false
      })
      .setTween("#ted-without-background", {
        css: {
          opacity: 1
        }
      });
    const scene2 = this.$scrollmagic
      .scene({
        triggerElement: "#ted-stats",
        triggerHook: 0.75,
        offset: 0,
        reverse: false
      })
      .setTween("#tedx-without-background", {
        css: {
          opacity: 1
        }
      });
    this.$scrollmagic.addScene(scene1);
    this.$scrollmagic.addScene(scene2);
  },*/
  methods: {
    click_ticket: function() {
      this.$gtag("event", "click_ticket", {
        page_path: "ted-and-tedx"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
iframe.podcast {
  width: 100%;
  max-width: 660px;
  &.apple {
    min-height: 450px !important;
  }
}

#ted {
  background: url("~@/assets/wallpapers/dot.png");
  background-repeat: no-repeat;
  background-size: cover;
}
#ted-without-background,
#tedx-without-background {
  opacity: 1;
  transition: all 0.5s;
}
#tedx {
  background: url("~@/assets/wallpapers/x.png");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
