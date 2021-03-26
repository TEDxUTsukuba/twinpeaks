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
      head() {
        return {
          htmlAttrs: {
            lang: this.$i18n.locale
          },
          meta: [
            {
              property: 'og:locale',
              content: this.$i18n.locale
            }
          ]
        };
      },
      link: [
        {
          rel: "canonical",
          href: 'https://www.tedxutsukuba.com' + `${this.$route.path}`,
        },
      ],
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
