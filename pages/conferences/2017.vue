<template>
  <section id="wrapper-dark" class="font-awesome">   
    <section class="section has-text-centered-mobile">
      <h1 class="subtitle is-4 is-family-narrow has-text-primary">TEDxUTsukuba 2017</h1>
      <h1 class="title is-1">moving</h1>
      <p><span class="is-family-narrow">Date</span>: 2017/11/26</p>
      <p><span class="is-family-narrow">Place</span>: {{ $t('2017.venue.headline') }}</p>
    </section>

    <section class="section" id="card-0">
      <h1 class="title is-0">
        <span class="">{{ $t('2017.speaker.title') }}</span>
      </h1>
      <h1 class="subtitle has-text-white has-text-right">
      </h1>
      <Card id="card-1"
        :title = "$t('2017.speaker.sp1.name')"
        :subtitle = "$t('2017.speaker.sp1.position')"
        :description = "$t('2017.speaker.sp1.description')"
        :image_url = "src_sp1"
        :youtubeId = "getYouTubeUrl($t('2017.speaker.sp1.youtubeId'))"
      >
      </Card>
      <Card id="card-2"
        :title = "$t('2017.speaker.sp2.name')"
        :subtitle = "$t('2017.speaker.sp2.position')"
        :description = "$t('2017.speaker.sp2.description')"
        :image_url = "src_sp2"
        :youtubeId = "getYouTubeUrl($t('2017.speaker.sp2.youtubeId'))"
      >
      </Card>
      <Card id="card-3"
        :title = "$t('2017.speaker.sp3.name')"
        :subtitle = "$t('2017.speaker.sp3.position')"
        :description = "$t('2017.speaker.sp3.description')"
        :image_url = "src_sp3"
        :youtubeId = "getYouTubeUrl($t('2017.speaker.sp3.youtubeId'))"
      >
      </Card>
      <Card id="card-4"
        :title = "$t('2017.speaker.sp4.name')"
        :subtitle = "$t('2017.speaker.sp4.position')"
        :description = "$t('2017.speaker.sp4.description')"
        :image_url = "src_sp4"
        :youtubeId = "getYouTubeUrl($t('2017.speaker.sp4.youtubeId'))"
      >
      </Card>
    </section>

    <section class="hero has-background-primary">
      <section class="section">
        <h1 class="title is-0 has-text-white">
          <span class="\">{{ $t('2017.concept.title') }}</span>
        </h1>
        <p class="has-text-white has-text-centered-mobile mb-4">
          {{ $t('2017.concept.description') }}
        </p>
        <figure class="image">
          <img src="~/assets/mainvisual/2017/moving logo-white.jpg" alt="TEDxUTsukuba 2017 Logo" />
        </figure>
      </section>
    </section>

    <section class="hero bg-venue" id="venue-title">
      <div class="hero-body">
        <section class="section" id="venue">
          <h1 class="title is-0 has-text-white">
            <span class="\">{{ $t('2017.venue.title') }}</span>
          </h1>
          <h1 class="title is-3 has-text-white">
            {{ $t('2017.venue.headline') }}
          </h1>
          <p class="has-text-white">
            {{ $t('2017.venue.description') }}
          </p>
          <hr>
          <p class="is-size-7 has-text-white">
            {{ $t('2017.venue.access') }}
          </p>
        </section>
      </div>
    </section>
    <section>
      <figure class="image is-3by1">
        <iframe class="has-ratio" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d751.8584752256719!2d140.1029973425484!3d36.11084319663333!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60220c00d219ea4f%3A0x6e9d549281b6f0fd!2sJoint%20research%20building%20A!5e0!3m2!1sen!2sus!4v1641200604176!5m2!1sen!2sus" width="100%" rameborder="0" style="margin: 0 auto; border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </figure>
    </section>
  </section>
</template>

<script>
import Meta from '~/assets/mixins/meta'
import Card from '~/components/EnjaCard'

import Image_sp1 from '~/assets/speakers/2017/sp_2017_1.jpg'
import Image_sp2 from '~/assets/speakers/2017/sp_2017_2.jpg'
import Image_sp3 from '~/assets/speakers/2017/sp_2017_3.jpg'
import Image_sp4 from '~/assets/speakers/2017/sp_2017_4.jpg'

export default {
  mixins: [Meta],
  components: {
    Card
  },
  data(){
    return {
      locale: this.$i18n.locale,
      meta: {
        title: 'TEDxUTsukuba 2017 "moving"',
      },
      src_sp1: Image_sp1,
      src_sp2: Image_sp2,
      src_sp3: Image_sp3,
      src_sp4: Image_sp4,
    }
  },
  methods: {
    getYouTubeUrl(value) {
      return `https://youtu.be/${value}`
    },
    getImgUrl(value) {
      if (process.client) {
        if (window.innerWidth <= 1080) {
          return this.statementMobileImages[value]
        } else {
          return this.statementImages[value]
        }
      }
    },
  }
}
</script>

<style lang="scss" scoped>

</style>