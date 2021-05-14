<template>
  <div>
    <Header />
    <nuxt class="nuxt" />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
export default {
  components: {
    Header
  }
}
</script>

<style lang="scss">
  .nuxt {
    padding-top: 3.25rem !important;
    @media screen and (min-width: 1024px) {
      padding-top: 5.25rem !important;
    }
  }
</style>