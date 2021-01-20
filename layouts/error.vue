<template>
  <section class="section has-text-centered" id="all">
    <img src="404.png" />
    <p class="has-text-weight-light is-size-4">The page you're looking for doesn't exist or unavailable. </p>
    <hr>
    <p>Need a little break? Watch <a href="https://youtu.be/ToJD5r2SmwI" target="_blank" rel="noopener noreferrer">this</a>.</p>

  </section>
</template>

<script>
export default {
  props: [
    'error'
  ],
  head () {
    return {
      title: 'Page Not Found',
      meta: [
        { hid: 'description', name: 'description', content: 'The page you\'re looking for doesn\'t exist or unavailable.' }
      ]
    }
  }
}
</script>

<style scoped>
@keyframes fadeIn {
    0% {
        opacity:0;
    }
    100% {
        opacity:1;
    }
}
#all {
  animation: 2s fadeIn;
}
</style>