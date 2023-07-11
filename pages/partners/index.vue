<template>
  <section id="wrapper-dark">
    <section class="section has-text-centered is-halfheight">
      <i class="mdi mdi-handshake has-text-primary is-size-1" />
      <h1 class="title is-1 is-spaced">{{ $t("partners.title") }}</h1>
      <h1 class="subtitle has-text-grey-light">
        {{ $t("partners.subtitle") }}
      </h1>
    </section>
    <section class="section">
      <!-- Tier 1 -->
      <div class="columns is-multiline is-mobile">
        <div
          class="column is-4-tablet is-full-mobile"
          v-for="(partner, index) in partners.filter(el => el.tier === '1')"
          :key="index"
        >
          <div class="nmp-dark has-text-centered">
            <figure class="image is-1by1 my-5" v-if="partner.logo">
              <img :src="partner.logo.url" :alt="partner.name" />
            </figure>
            <div>
              <p class="has-text-weight-bold is-size-5 mb-2">
                {{ partner.name }} <span v-if="$i18n.locale == 'ja'">様</span>
              </p>
              <a
                v-if="partner.url"
                class="button is-rounded is-white is-outlined is-small mb-4"
                :href="partner.url"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ $t("button.visitwebsite") }}
              </a>
            </div>
            <div
              class="is-inline-block has-text-centered mb-2 has-background-primary"
              v-if="partner.instagram || partner.facebook || partner.twitter"
            >
              <a
                v-if="partner.instagram"
                :href="partner.instagram"
                target="_blank"
                rel="noopener noreferrer"
                ><i class="mdi mdi-instagram has-text-white is-size-4"
              /></a>
              <a
                v-if="partner.facebook"
                :href="partner.facebook"
                target="_blank"
                rel="noopener noreferrer"
                ><i class="mdi mdi-facebook has-text-white is-size-4"
              /></a>
              <a
                v-if="partner.twitter"
                :href="partner.twitter"
                target="_blank"
                rel="noopener noreferrer"
                ><i class="mdi mdi-twitter has-text-white is-size-4"
              /></a>
            </div>
          </div>
        </div>
      </div>
      <!-- Tier 2 -->
      <div class="columns is-multiline is-mobile">
        <div
          class="column is-3-tablet is-6-mobile"
          v-for="(partner, index) in partners.filter(el => el.tier === '2')"
          :key="index"
        >
          <div class="nmp-dark has-text-centered">
            <figure class="image is-1by1 my-5" v-if="partner.logo">
              <img :src="partner.logo.url" :alt="partner.name" />
            </figure>
            <div>
              <p class="has-text-weight-bold is-size-6 mb-2">
                {{ partner.name }} <span v-if="$i18n.locale == 'ja'">様</span>
              </p>
              <a
                v-if="partner.url"
                class="button is-rounded is-white is-outlined is-small mb-4"
                :href="partner.url"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ $t("button.visitwebsite") }}
              </a>
            </div>
            <div
              class="is-inline-block has-text-centered mb-2 has-background-primary"
              v-if="partner.instagram || partner.facebook || partner.twitter"
            >
              <a
                v-if="partner.instagram"
                :href="partner.instagram"
                target="_blank"
                rel="noopener noreferrer"
                ><i class="mdi mdi-instagram has-text-white is-size-4"
              /></a>
              <a
                v-if="partner.facebook"
                :href="partner.facebook"
                target="_blank"
                rel="noopener noreferrer"
                ><i class="mdi mdi-facebook has-text-white is-size-4"
              /></a>
              <a
                v-if="partner.twitter"
                :href="partner.twitter"
                target="_blank"
                rel="noopener noreferrer"
                ><i class="mdi mdi-twitter has-text-white is-size-4"
              /></a>
            </div>
          </div>
        </div>
      </div>
      <!-- Tier 3 -->
      <div class="columns is-multiline is-mobile">
        <div
          class="column is-2-tablet is-6-mobile"
          v-for="(partner, index) in partners.filter(el => el.tier === '3')"
          :key="index"
        >
          <div class="nmp-dark has-text-centered">
            <figure class="image is-1by1 my-5" v-if="partner.logo">
              <img :src="partner.logo.url" :alt="partner.name" />
            </figure>
            <div>
              <p class="has-text-weight-bold is-size-6 mb-2">
                {{ partner.name }} <span v-if="$i18n.locale == 'ja'">様</span>
              </p>
              <a
                v-if="partner.url"
                class="button is-rounded is-white is-outlined is-small mb-4"
                :href="partner.url"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ $t("button.visitwebsite") }}
              </a>
            </div>
            <div
              class="is-inline-block has-text-centered mb-2 has-background-primary"
              v-if="partner.instagram || partner.facebook || partner.twitter"
            >
              <a
                v-if="partner.instagram"
                :href="partner.instagram"
                target="_blank"
                rel="noopener noreferrer"
                ><i class="mdi mdi-instagram has-text-white is-size-4"
              /></a>
              <a
                v-if="partner.facebook"
                :href="partner.facebook"
                target="_blank"
                rel="noopener noreferrer"
                ><i class="mdi mdi-facebook has-text-white is-size-4"
              /></a>
              <a
                v-if="partner.twitter"
                :href="partner.twitter"
                target="_blank"
                rel="noopener noreferrer"
                ><i class="mdi mdi-twitter has-text-white is-size-4"
              /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container has-text-centered">
        <h1 class="title is-2 is-spaced">パートナー募集中</h1>
        <h1 class="subtitle is-5 has-text-grey-light">
          理念に賛同し、イベントを一緒に作り上げていただけるパートナーを募集しています。
        </h1>
        <div class="nmp-card-dark">
          下記連絡先までお問い合わせください。<br />contact&#64;tedxutsukuba.com
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import Meta from "~/assets/mixins/meta";
import { request, gql } from "~/lib/datocms";
export default {
  mixins: [Meta],
  components: {},
  async asyncData({ params, i18n }) {
    const data = await request({
      query: gql`
        {
          partners: allPartners(locale: ${i18n.locale}, filter: {currentlyPartnering: {eq: "true"}}) {
            id
            instagram
            facebook
            logo {
              url(imgixParams: {w: "512", h: "512", fit: crop})
            }
            twitter
            tier
            name
            url
          }
        }
      `
    });
    return { ready: !!data, ...data };
  },
  data() {
    return {
      locale: this.$i18n.locale,
      meta: {
        title: this.$i18n.t("partners.title"),
        description: this.$i18n.t("partners.subtitle"),
        twitter_card_type: "summary"
      }
    };
  }
};
</script>

<style lang="scss"></style>
