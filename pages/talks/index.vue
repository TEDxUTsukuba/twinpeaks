<template>
  <section id="wrapper-dark">
    <section class="section has-text-centered is-halfheight">
      <i class="mdi mdi-youtube has-text-primary is-1" /> 
      <h1 class="title is-1 is-spaced">{{ $t('talks.title') }}</h1>
      <h1 class="subtitle has-text-grey-light">{{ $t('talks.subtitle') }}</h1>
    </section>
    <section class="section-wide">
      <div class="columns is-multiline">
        <div
          id="thumbnails"
          class="column is-one-third-fullhd is-half-widescreen is-half-desktop is-half-tablet"
          v-for="(talk, index) in talks" :key="index"
          style="display: inline-block; vertical-align: top;"
        >
          <div class="nmp-dark">
            <header class="card-header">
              <p class="card-header-title has-text-primary is-family-narrow">
                {{ talk.eventName }}
              </p>
            </header>
            <div class="card-image">
              <Movie :vId="talk.youtubeId" />
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <h1 class="title is-4">
                    {{ talk.talkTitle }}
                  </h1>
                  <h1 class="subtitle is-5" v-if="$i18n.locale == 'en'">
                    {{ talk.firstName }} {{ talk.middleName }} {{ talk.lastName }}
                  </h1>
                  <h1 class="subtitle is-5" v-else>
                    {{ talk.lastName }} {{ talk.middleName }} {{ talk.firstName }}
                  </h1>
                </div>
              </div>
              <br>
              <div class="content">
                <b-collapse animation="fade" :open="false" aria-id="contentIdForA11y1">
                  <span class="" slot="trigger" slot-scope="props" aria-controls="contentIdForA11y1">
                    <p class="is-size-7 has-text-grey-light" v-if="!props.open && $i18n.locale == 'ja'">{{ talk.description | substrBefore(75) }}…</p>
                    <p class="is-size-7 has-text-grey-light" v-if="!props.open && $i18n.locale == 'en'">{{ talk.description | substrBefore(75) }}…</p>
                    <p class="is-size-7 has-text-grey-light" v-if="props.open && $i18n.locale == 'ja'">{{ talk.description }}</p>
                    <p class="is-size-7 has-text-grey-light" v-if="props.open && $i18n.locale == 'en'">{{ talk.description }}</p>
                    <br>
                    <b-button class="button is-gradient is-rounded is-outlined is-small" :icon-left="!props.open ? 'chevron-down' : 'chevron-up'">{{ !props.open ? $t('button.readmore') : $t('button.readless') }}</b-button>
                  </span>
                </b-collapse>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container has-text-centered">
        <h1 class="title is-2 is-spaced">パートナー募集中</h1>
        <h1 class="subtitle is-5 has-text-grey-light">理念に賛同し、イベントを一緒に作り上げていただけるパートナーを募集しています。</h1>
        <div class="nmp-card-dark">下記連絡先までお問い合わせください。<br>tedxutsukuba&#64;gmail.com</div>
      </div>
    </section>
  </section>
</template>

<script>
import Meta from '~/assets/mixins/meta'
import Movie from '~/components/Movie';
import { request, gql } from '~/lib/datocms'

export default {
  mixins: [Meta],
  components: {
    Movie
  },
  async asyncData({ params, i18n }) {
    const data = await request({
      query: gql`
        {
          talks: allSpeakers(locale: ${i18n.locale}, filter: {eventName: {neq: "Live2019"}}, orderBy: eventName_DESC) {
            firstName
            middleName
            lastName
            eventName
            talkTitle
            description
            youtubeId
          }
        }
      `
    })
    return { ready: !!data, ...data }
  },
  data() {
    return {
      locale: this.$i18n.locale,
      meta: {
        title: this.$i18n.t('talks.title'),
        description: this.$i18n.t('talks.subtitle')
      },
    }
  },
  filters: {
    substrBefore(text, value) {
     return text.length > value ? text.slice(0, value) : text;
    },
    substrAfter(text) {
     return text.length > 50 ? text.substr(50) : text;
    }
  }
}
</script>

<style lang="scss">

</style>