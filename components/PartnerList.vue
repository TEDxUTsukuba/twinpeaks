<template>
<section>
  <div class="columns is-multiline is-mobile is-8-tablet">
    <div :class="`column is-${width_fullhd}-fullhd is-${width_desktop}-desktop is-${width_tablet}-tablet is-${width_mobile}-mobile`" v-for="(partner, index) in partnerList" :key="index"> 
      <div class="has-text-white" style="padding: 1rem;">
        <figure class="image is-1by1">
          <img :src="getJsonImgUrl(partner.id)" :alt="partner.name">
        </figure>
        <br>
        <p class="has-text-weight-bold">
          {{ partner.name }} <span v-if="$i18n.locale == 'ja'">様</span>
        </p>
        <br>
        <!-- <p class="is-size-7">{{ partner.category }}</p> -->
          <!-- <button class="button is-black is-outlined is-rounded"
            @click="openModal(partner)">
            {{ $t('button.discover') }}
          </button> -->
          <a :href="partner.url" class="button is-white is-outlined is-rounded">{{ $t('button.visitwebsite') }}</a>
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