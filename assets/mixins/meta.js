export default {
  asyncData(context) {
    return {
      BASE_NAME: context.env.BASE_NAME,
      BASE_DESC: context.env.BASE_DESC,
      BASE_DESC_EN: context.env.BASE_DESC_EN,
      BASE_URL: context.env.BASE_URL,
      BASE_OGP: context.env.BASE_OGP,
    }
  },
  head() {
    const head = { meta: [] }
    const locale = this.locale

    // タイトル
    if (this.meta.title) {
      if (this.meta.title[locale]) {
        const title = `${this.meta.title[locale]} | ${this.BASE_NAME}`
        head.title = title
        head.meta.push({ hid: 'og:title', property: 'og:title', content: title })
      } else {
        const title = `${this.meta.title} | ${this.BASE_NAME}`
        head.title = title
        head.meta.push({ hid: 'og:title', property: 'og:title', content: title })
      }
    } else {
      console.log(this.$route.path)
      const title = `${this.$route.path[1].toUpperCase() + this.$route.path.slice(2)} | ${this.BASE_NAME}`
      head.title = title
      head.meta.push({ hid: 'og:title', property: 'og:title', content: title })
    }

    // ディスクリプション
    if (this.meta.description) {
      if (this.meta.description[locale]) {
        head.meta.push({ hid: 'description', name: 'description', content: this.meta.description[locale] })
        head.meta.push({ hid: 'og:description', property: 'og:description', content: this.meta.description[locale] })
      } else {
        head.meta.push({ hid: 'description', name: 'description', content: this.meta.description })
        head.meta.push({ hid: 'og:description', property: 'og:description', content: this.meta.description })
      }
    } else if (locale == 'en') {
      head.meta.push({ hid: 'description', name: 'description', content: this.BASE_DESC_EN })
      head.meta.push({ hid: 'og:description', property: 'og:description', content: this.BASE_DESC_EN })
    } 

    // ページタイプ
    if (this.meta.type) {
      head.meta.push({ hid: 'og:type', property: 'og:type', content: this.meta.type })
    } else if (this.$route.path === '/') {
      head.meta.push({ hid: 'og:type', property: 'og:type', content: 'website' })
    }

    // ページURL
    const url = `${this.BASE_URL}${this.$router.history.base}${this.$route.path}`
    head.meta.push({ hid: 'og:url', property: 'og:url', content: url })

    // Twitter画像タイプ
    if (this.meta.twitter_card_type == 'summary') {
      head.meta.push({ hid: 'twitter:card', name: 'twitter:card', content: 'summary' })
      head.meta.push({ hid: 'og:image', property: 'og:image', content: `${this.BASE_URL}${this.$router.history.base}${this.BASE_OGP}/twitter_summary.png` })
    }

    // OGP画像URL
    if (this.meta.image) {
      const imageUrl = `${this.BASE_URL}${this.$router.history.base}${this.BASE_OGP}${this.meta.image}`
      head.meta.push({ hid: 'og:image', property: 'og:image', content: imageUrl })
    }

    return head
  }
}
