<template>
  <section id="wrapper-dark">
    <section class="section has-text-centered is-halfheight">
      <i class="mdi mdi-handshake has-text-primary is-size-1" />
      <h1 class="title is-1 is-spaced">{{ $t("partners.salon.title") }}</h1>
      <h1 class="subtitle has-text-grey-light">
        {{ $t("partners.salon.subtitle") }}
      </h1>
    </section>
    <PartnerList :partners="partners" />
    <section class="section">
      <div class="container has-text-centered">
        <h1 class="title is-2 is-spaced">パートナー募集中</h1>
        <h1 class="subtitle is-5 has-text-grey-light">
          理念に賛同し、イベントを一緒に作り上げていただけるパートナーを募集しています。
        </h1>
        <div class="nmp-card-dark">
          下記連絡先までお問い合わせください。<br />info&#64;tedxutsukuba.com
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import Meta from "~/assets/mixins/meta";
import PartnerList from "~/components/PartnerList";
import { request, gql } from "~/lib/datocms";
export default {
  mixins: [Meta],
  components: { PartnerList },
  async asyncData({ params, i18n }) {
    const data = await request({
      query: gql`
        {
          partners: allPartnerSalons(first: 50, locale: ${i18n.locale}, filter: {currentlyPartnering: {eq: "true"}}) {
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
        title: this.$i18n.t("partners.salon.title"),
        description: this.$i18n.t("partners.salon.subtitle"),
        twitter_card_type: "summary"
      }
    };
  }
};
</script>

<style lang="scss"></style>
