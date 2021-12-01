<template>
  <section>
    <Header />
    <nuxt class="nuxt pb-0" />
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
  computed: {
    currentPath() {
      return this.$route.path
    },
    currentName() {
      const sans_locale = this.$route.path.replace(/\/en/, '')
      return sans_locale[1].toUpperCase() + sans_locale.slice(2) + " | " + process.env.BASE_NAME
    }
  },
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale
      },
      title: this.currentName,
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.currentName
        },
        {
          property: 'og:locale',
          content: this.$i18n.locale
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: `${process.env.BASE_URL}${this.currentPath}`
        }
      ]
    };
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
