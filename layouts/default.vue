<template>
  <section>
    <Header />
    <nuxt class="nuxt" />
    <Footer />
  </section>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'
export default {
  components: {
    Header, Footer
  },
  data () {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' }
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  section {
    font-family: 'Helvetica Neue', 'NotoSansCJKJP', sans-serif;
  }
  .nuxt {
    padding-top: 3.25rem !important;
    @media screen and (min-width: 1024px) {
      padding-top: 5.25rem !important;
    }
  }
  .is-1 {
    font-size: 5rem !important;
  }
</style>
