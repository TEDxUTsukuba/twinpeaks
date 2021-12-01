<template>
  <section id="wrapper-dark" class="font-awesome">   
    <section class="section has-text-centered-mobile">
      <h1 class="subtitle is-4 is-family-narrow has-text-primary">TEDxUTsukuba 2017</h1>
      <h1 class="title is-1">moving</h1>
    </section>
  </section>
</template>

<script>
import Meta from '~/assets/mixins/meta'

export default {
  mixins: [Meta],
  data(){
    return {
      locale: this.$i18n.locale,
      meta: {
        title: 'TEDxUTsukuba 2017 "moving"',
      },
    }
  }
}
</script>