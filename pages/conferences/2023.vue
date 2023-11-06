<template>
  <section id="wrapper-dark">
    <!-- イベント概要 -->
    <section class="section has-text-centered-mobile">
      <h1 class="subtitle is-4 is-family-narrow has-text-primary">
        TEDxUTsukuba {{ conference.name }}
      </h1>
      <h1 class="title is-1">{{ conference.theme }}</h1>
      <p v-if="conference.date">
        <span class="is-family-narrow">Date</span>:
        {{ formatDate(conference.date, $i18n.locale) }}
        <span v-if="conference.startTime">{{
          formatTime(conference.startTime)
        }}</span
        ><span v-if="conference.endTime">
          - {{ formatTime(conference.endTime) }}</span
        >
      </p>
      <p v-if="conference.eventDelivery">
        <span class="is-family-narrow">Event Delivery</span>:
        {{ conference.eventDelivery }}
      </p>
      <p v-if="conference.location">
        <span class="is-family-narrow">Place</span>: {{ conference.location }}
      </p>
      <a
        v-if="conference.webcastUrl"
        class="button is-rounded is-gradient mt-4"
        :href="conference.webcastUrl"
        target="_blank"
        ><span v-if="conference.webcastService"
          >{{ conference.webcastService }}で</span
        >{{ $t("about.ted.watch") }}</a
      >
      <img
        width="150px"
        class="portrait"
        src="~/assets/2023/15150.webp"
        style="object-fit: cover;"
      />
    </section>

    <!-- テーマアート -->
    <section class="section" v-if="conference.themeArtwork">
      <figure class="image">
        <!-- <datocms-image :data="conference.themeArtwork.responsiveImage" :alt="conference.name" style="position: initial;"/> -->
        <img
          :src="conference.themeArtwork.url"
          :alt="conference.name"
          style="position: initial; max-width: 640px;"
          class="mx-auto"
        />
      </figure>
      <div
        v-if="conference.hasTicket"
        class="mb-4"
        style="text-align: center; margin-top: 30px;"
      >
        <div style="color: white;">
          <p style="font-size: 1.5rem; !important">Price(JPY)</p>
          <div
            class="ticket-price"
            style="display: flex; flex-direction: row; align-items: center; justify-content: center; gap: 6px;"
          >
            <p style="font-size: 2rem; font-weight: bold; margin-bottom: 0;">
              {{ conference.ticketPrice }}円
            </p>
            <p
              v-if="conference.ticketPriceStudent"
              style="font-size: 1.5rem; margin-top: 0; color: white;"
            >
              (Student:
              <strong style="color: white;"
                >{{ conference.ticketPriceStudent }}円</strong
              >)
            </p>
          </div>
        </div>
        <!-- チケットがAvailableにセットされている場合 -->
        <div v-if="conference.isTicketAvailable">
          <!-- チケットを入手するサイトが登録されている場合 -->
          <a
            v-if="conference.ticketSellingPageUrl"
            style="font-size: 1.3rem;"
            class="button is-gradient is-rounded my-3"
            :href="conference.ticketSellingPageUrl"
            v-on:click="click_ticket()"
            target="_blank"
          >
            <i class="mdi mdi-ticket is-size-4" />
            <span style="padding-left: 0.25rem;">{{
              $t("2020.participance.premium.tiget")
            }}</span>
          </a>
        </div>
        <!-- チケットがAvailableにセットされていない場合 -->
        <div v-else>
          <span class="tag is-success"
            >Tickets will be available on
            {{ formatDate(conference.ticketReleaseDate) }}</span
          >
        </div>

        <article class="is-size-7 pt-5 notes" v-html="conference.ticketNotes" />
      </div>
    </section>

    <!-- オーガナイザーの情報とメッセージ -->
    <section class="section" v-if="conference.messageFromOrganizer">
      <article
        class="has-text-white notes"
        v-html="conference.messageFromOrganizer"
      />
      <p class="mt-3 has-text-right">
        TEDxUTsukuba {{ conference.name }}<br />Organizer<br />{{
          conference.organizer
        }}
      </p>
    </section>

    <!-- スピーカー情報 -->
    <section class="section" id="card-0" v-if="conference.speakers[0]">
      <h1 class="title is-0">{{ $t("2020.speaker.title") }}</h1>
      <div v-for="(speaker, index) in conference.speakers" :key="index">
        <div class="columns is-multiline is-centered is-vcentered mb-6">
          <div
            class="card-image column is-12-mobile is-3-tablet is-4-desktop is-3-widescreen is-3-fullhd"
          >
            <div class="image-box">
              <figure class="image is-1by1" v-if="speaker.portrait">
                <img
                  class="nmp-card-image"
                  :src="speaker.portrait.url"
                  style="object-fit: cover;"
                />
                <!-- <datocms-image :data="speaker.portrait.responsiveImage" /> -->
              </figure>
            </div>
          </div>
          <div class="column has-text-centered-mobile">
            <h1 class="title is-2 ja" v-if="$i18n.locale == 'en'">
              {{ speaker.firstName }} {{ speaker.middleName }}
              {{ speaker.lastName }}
            </h1>
            <h1 class="title is-2 ja" v-else>
              {{ speaker.lastName }} {{ speaker.middleName }}
              {{ speaker.firstName }}
            </h1>
            <h1
              class="subtitle is-size-5 has-text-primary is-family-narrow"
              v-show="speaker.jobTitleOrRole"
            >
              {{ speaker.jobTitleOrRole }}
            </h1>
            <p class="has-text-left" style="text-align: justify;">
              {{ speaker.description }}
            </p>
            <br />

            <!-- トーク動画 -->
            <!-- TEDxのYouTubeで動画が公開されたらDatoCMSにURLを追加する -->
            <a
              v-if="speaker.youtubeId"
              class="button is-gradient is-rounded"
              :href="`https://www.youtube.com/watch?v=${speaker.youtubeId}`"
              target="_blank"
            >
              <i class="mdi mdi-youtube is-size-4" />
              <span style="padding-left: 0.25rem;">{{
                $t("about.ted.watch")
              }}</span>
            </a>
          </div>
        </div>
      </div>

      <!-- パフォーマー情報 -->
      <div v-for="(performer, index) in conference.performers" :key="index">
        <div class="columns is-multiline is-centered is-vcentered mb-6">
          <div
            class="card-image column is-12-mobile is-3-tablet is-4-desktop is-3-widescreen is-3-fullhd"
          >
            <div class="image-box">
              <figure class="image is-1by1" v-if="performer.portrait">
                <img
                  class="nmp-card-image"
                  :src="performer.portrait.url"
                  style="object-fit: cover;"
                />
                <!-- <datocms-image :data="speaker.portrait.responsiveImage" /> -->
              </figure>
            </div>
          </div>
          <div class="column has-text-centered-mobile">
            <h1 class="title is-2 ja">{{ performer.name }}</h1>
            <h1
              class="subtitle is-size-5 has-text-primary is-family-narrow"
              v-show="performer.jobTitleOrRole"
            >
              {{ performer.jobTitleOrRole }}
            </h1>
            <p class="has-text-left" style="text-align: justify;">
              {{ performer.description }}
            </p>
          </div>
        </div>
      </div>
      <article class="is-size-7 pt-5 notes" v-html="conference.enjaNotes" />
    </section>

    <!-- イベントのテーマ -->
    <section class="hero has-background-primary" v-if="conference.theme">
      <section class="section">
        <h1 class="title is-0 has-text-white">
          {{ $t("2017.concept.title") }}
        </h1>
        <h1 class="title is-3 has-text-white">
          {{ conference.theme }}
        </h1>
        <article
          class="has-text-white has-text-centered-mobile mb-4"
          v-html="conference.themeStatement"
        />
      </section>
    </section>

    <!-- 当日のタイムテーブル -->
    <section class="hero" v-if="conference.timetable">
      <div class="hero-body">
        <section class="section">
          <h1 class="title is-0">{{ $t("2020.participance.title") }}</h1>
          <div
            v-for="(item, index) in conference.timetable"
            :key="index"
            style="max-width: 560px;"
            class="mx-auto mb-5"
          >
            <div class="nmp-dark p-4">
              <div class="">
                <span class="tag is-white"
                  ><i class="mdi mdi-clock" />
                  {{ item.startAt.toString().substr(0, 2) }}:{{
                    item.startAt.toString().substr(2, 2)
                  }}
                  <span v-if="item.endAt">
                    - {{ item.endAt.toString().substr(0, 2) }}:{{
                      item.endAt.toString().substr(2, 2)
                    }}</span
                  >
                </span>
              </div>
              <div class="mt-3">
                <p class="title is-size-5" v-if="$i18n.locale == 'ja'">
                  {{ item.title_ja }}
                </p>
                <p class="title is-size-5" v-else>{{ item.title_en }}</p>
                <p v-if="item.description_ja" class="is-size-7">
                  {{ item.description_ja }}
                </p>
                <p v-if="item.description_en" class="is-size-7">
                  {{ item.description_en }}
                </p>
                <a v-if="item.link_url" :href="item.link_url" class="is-size-7">
                  <span v-if="$i18n.locale == 'en'">{{
                    item.link_text_en
                  }}</span>
                  <span v-else>{{ item.link_text_ja }}</span>
                </a>
              </div>
              <figure class="image my-5" v-if="item.image">
                <img :src="item.image" />
              </figure>
            </div>
          </div>
          <article
            class="is-size-7 pt-5 notes"
            v-html="conference.timetableNotes"
          />
        </section>
      </div>
    </section>

    <!-- 参加方法 -->
    <section v-if="conference.webcastUrl || conference.hasTicket" class="hero">
      <div class="hero-body">
        <section class="section">
          <h1 class="title is-0">{{ $t("about.ted.join") }}</h1>

          <!-- オンサイトイベントを除き、ウェブキャストの情報を表示 -->
          <div v-if="conference.eventDelivery !== 'Onsite'" class="mb-4">
            <h2 class="title">{{ $t("event.talk") }}</h2>
            <p class="mb-3">
              {{ $t("event.webcast_desc", [conference.webcastService]) }}
            </p>

            <!-- ウェブキャストのリンクが登録されている場合 -->
            <a
              v-if="conference.webcastUrl"
              class="button is-gradient is-rounded mb-3"
              :href="conference.webcastUrl"
              target="_blank"
            >
              <i class="mdi mdi-projector-screen is-size-4" />
              <span style="padding-left: 0.25rem;">{{
                $t("about.ted.watch")
              }}</span>
            </a>
            <article
              class="is-size-7 pt-5 notes"
              v-html="conference.webcastNotes"
            />
          </div>

          <!-- チケット(有料無料問わず)制度の場合 -->
          <div v-if="conference.hasTicket" class="mb-4">
            <p class="mb-3 notes">
              Price: <strong>JPY {{ conference.ticketPrice }}</strong>
              <span v-if="conference.ticketPriceStudent"
                >(Student: <strong>{{ conference.ticketPriceStudent }}</strong
                >)</span
              >
            </p>

            <!-- チケットがAvailableにセットされている場合 -->
            <div v-if="conference.isTicketAvailable">
              <!-- チケットを入手するサイトが登録されている場合 -->
              <a
                v-if="conference.ticketSellingPageUrl"
                class="button is-gradient is-rounded my-3"
                :href="conference.ticketSellingPageUrl"
                target="_blank"
                v-on:click="click_ticket()"
              >
                <i class="mdi mdi-ticket is-size-4" />
                <span style="padding-left: 0.25rem;">{{
                  $t("2020.participance.premium.tiget")
                }}</span>
              </a>
            </div>
            <!-- チケットがAvailableにセットされていない場合 -->
            <div v-else>
              <span class="tag is-success"
                >Tickets will be available on
                {{ formatDate(conference.ticketReleaseDate) }}</span
              >
            </div>

            <article
              class="is-size-7 pt-5 notes"
              v-html="conference.ticketNotes"
            />
          </div>
        </section>
      </div>
    </section>

    <!-- 会場 -->
    <section
      class="hero bg-venue"
      v-if="conference.location"
      id="venue-title"
      :style="
        conference.locationImage
          ? `background-image: url(${conference.locationImage.url});`
          : ''
      "
    >
      <div class="hero-body">
        <section class="section" id="venue">
          <h1 class="title is-0 has-text-white">
            {{ $t("2017.venue.title") }}
          </h1>
          <h1 class="title is-3 has-text-white">
            {{ conference.location }}
          </h1>
          <p class="has-text-white">
            {{ conference.locationDescription }}
          </p>
          <hr />
          <p class="is-size-7 has-text-white">
            {{ conference.locationAccess }}
          </p>
          <p class="is-size-7 pt-5 notes" v-html="conference.locationNotes" />
        </section>
      </div>
    </section>

    <!-- 会場の地図 -->
    <section v-if="conference.locationGooglemapsEmbed">
      <figure class="image is-3by1">
        <iframe
          loading="lazy"
          class="has-ratio"
          :src="conference.locationGooglemapsEmbed"
          width="100%"
          rameborder="0"
          style="margin: 0 auto; border:0;"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </figure>
    </section>

    <section class="section notes" v-if="conference.additionalNotes">
      <article
        class="has-text-white is-size-7 pt-5 notes"
        v-html="conference.additionalNotes"
      />
    </section>
  </section>
</template>

<script>
import { request, gql } from "~/lib/datocms";
import { Image } from "vue-datocms";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";

export default {
  components: {
    "datocms-image": Image
  },
  async asyncData({ params, i18n }) {
    const data = await request({
      query: gql`
      {
        conference(locale: ${i18n.locale}, filter: {name: {eq: "2023"}}) {
          name
          date
          doorOpeningTime
          startTime
          endTime
          eventDelivery
          messageFromOrganizer(markdown: true)
          organizer
          theme
          themeArtwork {
            url
            responsiveImage (imgixParams: {w: "800", fit: crop, crop: top}) {
              src
              width
              height
            }
          }
          themeStatement(markdown: true)
          location
          locationAccess
          locationDescription
          locationGooglemapsEmbed
          locationImage {
            url
          }
          socialMediaDescription
          speakers {
            firstName
            middleName
            lastName
            jobTitleOrRole
            description
            portrait {
              url
              responsiveImage(imgixParams: {ar: "1:1", fit: crop}) {
                src
              }
            }
            youtubeId
          }
          performers {
            name
            jobTitleOrRole
            description
            portrait {
              url
              responsiveImage(imgixParams: {ar: "1:1", fit: crop}) {
                src
              }
            }
          }
          hasTicket
          ticketPrice
          isTicketAvailable
          ticketPriceStudent
          ticketReleaseDate
          ticketSellingPageUrl
          timetable
          webcastService
          webcastUrl
          locationNotes(markdown: true)
          webcastNotes(markdown: true)
          enjaNotes(markdown: true)
          ticketNotes(markdown: true)
          programmeNotes(markdown: true)
          additionalNotes(markdown: true)
        }
      }
    `
    });
    return { ready: !!data, ...data };
  },
  head() {
    if (!this.ready) {
      return;
    } else {
      return {
        htmlAttrs: {
          lang: this.$i18n.locale
        },
        title: "TEDxUTsukuba " + this.conference.name,
        meta: [
          {
            hid: "description",
            name: "description",
            content: this.conference.socialMediaDescription
          },
          {
            hid: "og:title",
            property: "og:title",
            content: "TEDxUTsukuba " + this.conference.name
          },
          {
            property: "og:locale",
            content: this.$i18n.locale
          },
          {
            hid: "og:description",
            property: "og:description",
            content:
              this.conference.socialMediaDescription ||
              this.conference.themeStatement
          }
        ],
        link: [
          {
            rel: "canonical",
            href: `${process.env.BASE_URL}${this.currentPath}`
          }
        ]
      };
    }
  },
  methods: {
    formatDate(date, locale) {
      return format(parseISO(date), "PPP");
    },
    formatTime(datetime, locale) {
      return format(parseISO(datetime), "HH:mm");
    },
    click_ticket() {
      this.$gtag("event", "click_ticket", {
        page_path: "conf/2023"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.bg-venue {
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
