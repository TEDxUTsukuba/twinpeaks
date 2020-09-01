<template>
  <div class="column is-4-tablet is-4-desktop">
    <div class="card">
      <div class="column is-full-tablet is-4-mobile is-inline-block">
        <div class="card-image">
          <figure class="image is-16by9">
            <img src="https://bulma.io/images/placeholders/640x360.png" alt="Placeholder image">
          </figure>
        </div>
      </div>
      <div class="column is-full-tablet is-7-mobile is-inline-block">
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
    icon: {
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
