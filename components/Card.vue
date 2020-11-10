<template>
  <div class="">
    <div class="nmp-dark columns is-gapless is-multiline">
      <div class="card-image column is-4-tablet is-4-desktop is-4-widescreen is-3-fullhd">
        <div class="image-box">
          <figure class="image is-1by1">
            <img class="nmp-card-image" :src="image_url" alt="Placeholder image">
          </figure>
        </div>
      </div>
      <div class="column">
        <div class="card-content has-text-centered has-text-right-tablet">
          <h1 class="title is-1 ja has-text-centered-mobile" v-if="$i18n.locale == 'ja'">{{ title }}</h1>
          <h1 class="title is-1 en has-text-centered-mobile" v-if="$i18n.locale == 'en'">{{ title }}</h1>
          <h1 class="subtitle is-size-4">{{ subtitle }}</h1>
          <p class="has-text-left is-size-6" style="max-width: 850px; margin-left: auto;">
            {{ description }}
          </p>
          <div class="section" style="">
            <span>{{ $t('2020.speaker.share') }}</span><br>
            <a :href="getShareUrl(title)" class="is-size-4 tw icon" target="_blank"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
            <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.tedxutsukuba.com%2F&amp;src=sdkpreparse" class="is-size-4 fb fb-xfbml-parse-ignore"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a>
            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          </div>
          <!-- <div class="content has-text-centered">
            <b-icon
              :icon="icon"
              size="is-large"
              type="is-primary"
            />
          </div> -->
        </div>
      </div>
      <!-- <footer class="card-footer">
      <!-- <footer class="card-footer">
        <div class="card-footer-item">
          <span>
            <slot />
          </span>
        </div>
      </footer> -->
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
  }
}
</script>

<style lang="scss" scoped>
h1.title {
  font-weight: 300;
  font-family: sans-serif;
  &.ja {
    letter-spacing: 14px;
    margin-right: -14px;
    @media screen and (max-width: 1080px) {
      letter-spacing: 0;
      margin-right: 0;
    }
  }
}

h1.subtitle {
  color: #E62B1E;
  margin-bottom: 3vh;
}
</style>
