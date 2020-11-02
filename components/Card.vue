<template>
  <div class="column">
    <div class="nmp-light columns is-gapless is-multiline">
      <div class="card-image column is-12-tablet is-5-desktop is-4-widescreen is-3-fullhd">
        <div class="image-box">
          <figure class="image is-1by1">
            <img class="nmp-card-image" :src="image_url" alt="Placeholder image">
          </figure>
        </div>
      </div>
      <div class="column">
        <div class="card-content has-text-centered has-text-right-desktop">
          <p class="title is-size-1 has-text-centered-mobile">{{ title }}</p>
          <p class="subtitle">{{ subtitle }}</p>
          <p class="has-text-left">
            {{ description }}
          </p>
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

<style scoped>
p.title {
  font-weight: 300;
  font-family: sans-serif;
  letter-spacing: 20px;
  margin-right: -20px;
}
p.subtitle {
  color: #E62B1E;
}
</style>
