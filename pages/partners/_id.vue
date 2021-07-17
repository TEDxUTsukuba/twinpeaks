<template>
  <section id="wrapper-dark">
    <section class="section has-text-centered">
      <p class="has-text-primary mb-2">TEDxUTsukuba Partner</p>
      <h1 class="title is-2 mb-6">{{ partnerDetail.name }}</h1>
      <p class="has-text-left mb-6">
        大同特殊鋼は素材の力で様々な産業を支える世界最大級の特殊鋼専業メーカーです。
        熱に強い、サビにくいなど様々な機能を持つ特殊鋼は、ボールペンの先から、スマホ、パソコン、自動車、航空機など皆さんの身近なところで活躍しています。
        TEDの目的や精神には当社の経営理念に通じるものがあり、主催・運営を担う学生やスピーカーの皆さんの熱意に賛同して２０１５年から協賛を続けてきました。
        大同特殊鋼はTEDxNagoyaUの熱意を応援します。
      </p>
      <p class="is-size-7 mb-2" style="letter-spacing: 2px;">Discover more about {{ partnerDetail.name }}</p>
      <b-button type="is-light is-info" icon-left="mdi mdi-twitter" class="my-1"><span v-if="!$ua.isFromSmartphone()">Twitter</span></b-button>
      <b-button type="is-light is-warning" icon-left="mdi mdi-instagram" class="my-1"><span v-if="!$ua.isFromSmartphone()">Instagram</span></b-button>
      <b-button type="is-light is-danger" icon-left="mdi mdi-youtube" class="my-1"><span v-if="!$ua.isFromSmartphone()">YouTube</span></b-button>
      <b-button 
        @click="countGA(partnerDetail.url, partnerDetail.name)"
        icon-left="earth"
        iconPack="mdi"
        type="is-light"
        class="my-1"
      >
        <span v-if="!$ua.isFromSmartphone()">{{ $t('button.visitwebsite') }}</span>
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