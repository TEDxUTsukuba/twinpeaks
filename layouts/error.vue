<template>
  <section class="section has-text-centered" style="padding: 30vh 0;">
    <h1 class="title is-1">Oops!</h1>
    <h1 class="subtitle">the page you're looking for doesn't exist or unavailable. </h1>
  </section>
</template>

<script>
import Logo from '@/assets/logo/u_white.svg'
export default {
  components: {
    Logo
  },
  props: [
    {
      error: {
        type: Object,
        default: null
      }
    }
  ],
  layout: ''
}
</script>