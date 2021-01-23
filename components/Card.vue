<template>
    <div class="columns is-multiline is-variable is-centered is-vcentered">
      <div class="card-image column is-12-mobile is-3-tablet is-4-desktop is-3-widescreen is-3-fullhd">
        <div class="image-box">
          <figure class="image is-1by1" ref="imageref">
            <img class="nmp-card-image" :src="image_url" :alt="title">
          </figure>
          <!-- <div class="speaker-name-overlap">
            <h1 class="title is-2 ja has-text-centered-mobile" v-if="$i18n.locale == 'ja'">{{ title }}</h1>
            <h1 class="title is-2 en has-text-centered-mobile" v-if="$i18n.locale == 'en'">{{ title }}</h1>
          </div> -->
        </div>
      </div>
      <div class="column has-text-centered-mobile">
        <h1 class="title is-2 ja">{{ title }}</h1>
          <h1 class="subtitle is-size-6 has-text-primary">{{ subtitle }}</h1>
          <p class="has-text-left has-text-light" style="text-align: justify;">
            {{ description }}
          </p>
          <div class="section" style="padding: 0;">
            <!-- <span>{{ $t('2020.speaker.share') }}</span><br> -->
            <!-- <a :href="getShareUrl(title)" class="is-size-4 tw icon" target="_blank"><font-awesome-icon :icon="['fab', 'twitter']" /></a> -->
            <!-- <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.tedxutsukuba.com%2F&amp;src=sdkpreparse" class="is-size-4 fb fb-xfbml-parse-ignore"><font-awesome-icon :icon="['fab', 'facebook']" /></a> -->
            <!-- <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> -->
          </div>
          <!-- <div class="content has-text-centered">
            <b-icon
              :icon="icon"
              size="is-large"
              type="is-primary"
            />
          </div> -->
        </div>
      <!-- <footer class="card-footer">
      <footer class="card-footer">
        <div class="card-footer-item">
          <span>
            <slot />
          </span>
        </div>
      </footer> -->
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
      required: true
    },
    description: {
      type: String,
      required: false
    },
    image_url: {
      type: String,
      required: true
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

div.speaker-name-overlap {
  position: absolute; 
  background-color: white; 
  // top: calc(height - 20px);
  right: 0;
  padding: 20px;
}
</style>
