<template>
  <section id="wrapper-dark">
    <section class="section has-text-centered">
      <p class="has-text-primary mb-2">TEDxUTsukuba Partner</p>
      <h1 class="title is-2">{{ partnerDetail.name }}</h1>
    </section>
    <section class="section has-text-centered-mobile has-text-right">
      <p class="has-text-left">
        大同特殊鋼は素材の力で様々な産業を支える世界最大級の特殊鋼専業メーカーです。
        熱に強い、サビにくいなど様々な機能を持つ特殊鋼は、ボールペンの先から、スマホ、パソコン、自動車、航空機など皆さんの身近なところで活躍しています。
        TEDの目的や精神には当社の経営理念に通じるものがあり、主催・運営を担う学生やスピーカーの皆さんの熱意に賛同して２０１５年から協賛を続けてきました。
        大同特殊鋼はTEDxNagoyaUの熱意を応援します。
      </p>
      <b-button 
        @click="countGA(partnerDetail.url, partnerDetail.name)"
        :label="$t('button.visitwebsite')"
        icon-right="open-in-new"
        iconPack="mdi"
        type="is-white is-small is-rounded"
        outlined
        class="mt-5"
      >
      </b-button>
      <div style="max-width: 640px; margin: auto;">
        <figure class="image is-3by4 my-6">
          <img src="~/assets/partners/2020/poster/ham.jpg">
        </figure>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id
    }
  },
  computed: {
    partnerDetail(){
      return this.$store.getters [
        'partner/findPartnerById'
      ](parseInt(this.$route.params.id))[0]
    }  
  },
  methods: {
    countGA(url, name) {
      this.$buefy.dialog.confirm({
        title: this.$i18n.t('button.externalwebsite'),
        message: this.$i18n.t('button.alerttoexternalwebsite') + '<br>' + url,
        // onConfirm: () => window.open(url, '_blank')
        onConfirm: () => {
          // console.log(name)
          this.$gtag(
            'event', 'visitPartnerWebsite', {
              'event_category': 'link',
              'event_label': name,
              'value': '1'
            }
          ),
          window.open(url, '_blank')
        }
      })
    }
  }
}
</script>