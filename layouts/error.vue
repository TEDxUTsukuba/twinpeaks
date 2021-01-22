<template>
  <section class="section has-text-centered" id="all">
    <figure>
      <img src="404.png" alt="Page Not Found" />
    </figure>
    <p class="has-text-weight-light is-size-4" v-if="$i18n.locale == 'en'">The page you're looking for doesn't exist or unavailable. </p>
    <p class="has-text-weight-light is-size-4" v-if="$i18n.locale == 'ja'">お探しのページは見つかりません。</p>
    <hr>
    <p>Need a little break? Watch <a href="https://youtu.be/8S0FDjFBj8o" target="_blank" rel="noopener noreferrer">this</a>.</p>

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
