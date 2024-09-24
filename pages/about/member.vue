<template>
  <!-- Members -->
  <section class="hero">
    <section class="section" id="members">
      <div class="container has-text-right has-text-centered-mobile">
        <h1 class="title is-0 is-spaced">
          {{ $t("about.utsukuba.members.title") }}
        </h1>
        <h1 class="subtitle is-5 has-text-white">
          {{ $t("about.utsukuba.members.subtitle") }}
        </h1>
      </div>
    </section>
    <section class="section-wide">
      <div class="columns is-multiline is-mobile">
        <div
          id="thumbnails"
          class="column is-3-fullhd is-4-widescreen is-4-desktop is-6-tablet is-12-mobile"
          v-for="(member, index) in members"
          :key="index"
          style="display: inline-block; vertical-align: top;"
        >
          <div class="nmp-dark">
            <header class="card-header" v-if="!$ua.isFromSmartphone()">
              <p class="card-header-title"></p>
            </header>
            <div
              class="card-image"
              v-if="!$ua.isFromSmartphone()"
              style="width: 100%;"
            >
              <figure class="image is-3by2" style="overflow: hidden;">
                <img
                  v-if="member.portrait"
                  class="portrait"
                  :src="member.portrait.responsiveImage.src"
                  :alt="member.firstName"
                  style="object-fit: cover;"
                />
                <img
                  v-else
                  class="portrait"
                  src="~/assets/u_logo_banner.png"
                  :alt="member.firstName"
                  style="object-fit: cover;"
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="media is-vcentered">
                <div class="media-left" v-if="$ua.isFromSmartphone()">
                  <figure class="image is-48x48 is-square">
                    <img
                      v-if="member.portrait"
                      :src="member.portrait.responsiveImage.src"
                      :alt="member.firstName"
                      style="object-fit: cover; border-radius: 50%;"
                    />
                    <img
                      v-else
                      src="~/assets/team/default.png"
                      :alt="member.firstName"
                      style="object-fit: cover; border-radius: 50%;"
                    />
                  </figure>
                </div>
                <div class="media-content" style="min-height: 46px">
                  <p class="title is-4 has-text-grey">
                    <span v-if="$i18n.locale == 'en'"
                      >{{ member.firstName }} {{ member.middleName }}
                      {{ member.lastName }}</span
                    >
                    <span v-if="$i18n.locale == 'ja'"
                      >{{ member.lastName }} {{ member.middleName }}
                      {{ member.firstName }}</span
                    >
                  </p>
                  <p
                    class="subtitle is-size-7 has-text-primary is-family-narrow pb-1"
                  >
                    {{ member.jobTitleOrRole }}
                  </p>
                </div>
              </div>

              <div class="text">
                <p
                  class="midashi is-size-7 has-text-weight-bold has-text-grey"
                  v-if="member.homeState"
                >
                  {{ $t("about.utsukuba.members.from") }}
                  <span
                    class="is-size-7 has-text-weight-normal has-text-grey-light"
                    >{{ member.homeState }}</span
                  >
                </p>

                <p
                  class="midashi is-size-7 has-text-weight-bold has-text-grey"
                  v-if="member.college"
                >
                  {{ $t("about.utsukuba.members.college") }}
                  <span
                    class="is-size-7 has-text-weight-normal has-text-grey-light"
                    >{{ member.college }}</span
                  >
                </p>

                <!-- <p class="midashi is-size-7 has-text-weight-bold has-text-grey" v-if="member.tedtalk_headline_en || member.tedtalk_headline_ja">
                    {{ $t('about.utsukuba.members.favouritetedtalk') }}
                    <span class="has-text-weight-normal is-size-7 has-text-grey-light" v-if="member.tedtalk_headline_en && $i18n.locale == 'en'">{{ member.tedtalk_headline_en.length > 35 ? toUpperCamel(member.tedtalk_headline_en.substr(0, 35)) + '…' : toUpperCamel(member.tedtalk_headline_en) }}</span>
                    <span class="has-text-weight-normal is-size-7 has-text-grey-light" v-if="member.tedtalk_headline_ja && $i18n.locale == 'ja'">{{  member.tedtalk_headline_ja.length > 20 ? member.tedtalk_headline_ja.substr(0, 20) + '…' : member.tedtalk_headline_ja }}</span>
                  </p> -->
              </div>
              <div class="has-text-right mt-4">
                <nuxt-link
                  :to="localePath(`/about/${member.id}`)"
                  class="button is-rounded is-small is-gradient"
                  >{{ $t("button.readmore") }}</nuxt-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
<script>
import { request, gql } from "~/lib/datocms";
export default {
  async asyncData({ params, i18n }) {
    const data = await request({
      query: gql`
      {
        members: allMembers(filter: {isActive: {eq: "true"}}, locale: ${i18n.locale}, orderBy: order_ASC, first: 100) {
          id
          lastName
          firstName
          middleName
          jobTitleOrRole
          homeState
          college
          portrait {
            responsiveImage(imgixParams: {fm: jpg, w: 320}) {
              src
            }
          }
        }
      }
    `
    });
    return { ready: !!data, ...data };
  },
  head() {
    return {
      meta: [{ hid: "robots", name: "robots", content: "noindex" }]
    };
  }
};
</script>
