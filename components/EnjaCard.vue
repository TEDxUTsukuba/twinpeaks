<template>
  <div class="columns is-multiline is-centered is-vcentered">
    <div class="card-image column is-12-mobile is-3-tablet is-4-desktop is-3-widescreen is-3-fullhd">
      <div class="image-box">
        <figure class="image is-1by1" ref="imageref">
          <img class="nmp-card-image" :src="image_url" :alt="title" style="object-fit: cover;">
        </figure>
      </div>
    </div>
    <div class="column has-text-centered-mobile">
      <h1 class="title is-1 ja">{{ title }}</h1>
        <h1 class="subtitle is-size-5 has-text-primary is-family-narrow">{{ subtitle }}</h1>
        <p class="has-text-left" style="text-align: justify;">
          {{ description }}
        </p>
        <br>
        <a class="button is-gradient is-rounded" :href="youtubeId">
          <i class="mdi mdi-youtube is-size-4" />
          <span style="padding-left: 0.25rem;">{{ $t('about.ted.watch') }}</span>
        </a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getShareUrl(value) {
      return `http://twitter.com/share?url=https://tedxutsukuba.com&related=tedxutsukuba&hashtags=jijimuge,${value}`
    }
  },
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: false
    },
    description: {
      type: String,
      required: false
    },
    image_url: {
      type: String,
      required: false
    },
    youtubeId: {
      type: String,
      required: false
    }
  },
}
</script>

<style lang="scss" scoped>
h1.title {
  color: white !important;
  font-weight: 300;
  font-family: sans-serif;
  &.ja {
    // letter-spacing: 14px;
    // margin-right: -14px;
    @media screen and (max-width: 1080px) {
      letter-spacing: 0;
      margin-right: 0;
    }
  }
}

div.columns + div.columns {
  margin-top: 2vh;
}
</style>
