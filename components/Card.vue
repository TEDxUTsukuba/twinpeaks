<template>
  <div class="column is-4-tablet is-4-desktop">
    <div class="nmp-light">
      <div class="card-image">
        <figure class="image is-3by2">
          <img class="nmp-card-image" :src="image_url" alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content">
        <p class="title is-4">{{ title }}</p>
        <p class="subtitle">{{ speaker }}</p>
        <!-- <div class="content has-text-centered">
          <b-icon
            :icon="icon"
            size="is-large"
            type="is-primary"
          />
        </div> -->
      </div>
      <footer class="card-footer">
        <div class="card-footer-item">
          <span>
            <slot />
          </span>
        </div>
      </footer>
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
    speaker: {
      type: String,
      required: true
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
  font-weight: 500;
}
p.subtitle {
  color: #5B08B9;
}
</style>
