<template>
<section>
  <div class="columns is-multiline is-mobile is-8-tablet">
    <div :class="`column is-${width_fullhd}-fullhd is-${width_desktop}-desktop is-${width_tablet}-tablet is-${width_mobile}-mobile`" v-for="(partner, index) in partnerList" :key="index"> 
      <div class="has-text-white has-text-centered" style="padding: 0.5rem;">
        <figure class="image is-1by1">
          <img :src="getJsonImgUrl(partner.id)" :alt="partner.name">
        </figure>
        <br>
        <p class="has-text-weight-bold is-size-5" v-if="category == 'take'">
          {{ partner.name }} <span v-if="$i18n.locale == 'ja'">様</span>
        </p>
        <p class="has-text-weight-bold is-size-6" v-else-if="category == 'ume'">
          {{ partner.name }} <span v-if="$i18n.locale == 'ja'">様</span>
        </p>
        <p class="has-text-weight-bold is-size-7" v-else>
          {{ partner.name }} <span v-if="$i18n.locale == 'ja'">様</span>
        </p>
        <br>
        <!-- <p class="is-size-7">{{ partner.category }}</p> -->
          <!-- <button class="button is-black is-outlined is-rounded"
            @click="openModal(partner)">
            {{ $t('button.discover') }}
          </button> -->
          <!-- <a :href="partner.url" class="button is-white is-outlined is-rounded is-small">{{ $t('button.visitwebsite') }}<i class="mdi mdi-open-in-new" style="margin-left: 0.25rem;" /></a> -->
          <b-button 
            @click="countGA(partner.url, partner.name)"
            :label="$t('button.visitwebsite')"
            icon-right="open-in-new"
            iconPack="mdi"
            type="is-white is-small is-rounded"
            outlined
          >
          </b-button>
          <!-- <modal :val="postItem" v-show="showContent" @close="closeModal" /> -->
          <br><br>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  props: {
    category: {
      type: String,
      required: true
    },
    width_fullhd: {
      type: String
    }, 
    width_desktop: {
      type: String
    },
    width_tablet: {
      type: String
    },
    width_mobile: {
      type: String
    }
  },
  methods: {
    getJsonImgUrl(value) {
      // return require(`~/assets/partners/2020/carousel_${value}.jpg`)
      return require(`~/assets/partners/2020/logo/${value}.jpg`)
    },
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
  },
  computed: {
    partnerList(){
      return this.$store.getters [
        'partner/findPartnersByCategory'
      ](this.category)
    }  
  }
}
</script>