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

<style>
  section {
    font-family: 'Helvetica Neue', 'NotoSansCJKJP', sans-serif;
  }
  .nuxt {
    padding-top: 50px;
  }
  .is-1 {
    font-size: 5rem !important;
  }
</style>
