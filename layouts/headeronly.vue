<template>
  <div>
    <Header :headerColor="headerColor" />
    <nuxt class="nuxt" />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
export default {
  components: {
    Header
  },
  created() {
    if (this.$route.path.includes('private')) this.headerColor = 'darksilver'
    else this.headerColor = 'black'
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