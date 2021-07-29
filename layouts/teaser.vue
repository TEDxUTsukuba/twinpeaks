<template>
  <div>
    <Header />
    <nuxt class="nuxt" />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
export default {
  components: {
    Header, Footer
  },
}
</script>

<style lang="scss">
  .nuxt {
    padding-top: 3.25rem !important;
    @media screen and (min-width: 1024px) {
      padding-top: 5.25rem !important;
    }
  }
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600;800&display=swap');
  section, p, a, span, h1 {
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
    font-feature-settings: "palt";
  }
</style>