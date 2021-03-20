<template>
  <section id="wrapper-dark">
    <section class="section has-text-centered-mobile has-text-left">
    <!-- <section class="hero is-large">
      <div class="hero-body has-text-white has-text-left">
        <div class="container has-text-centered">
          
        </div>
      </div>
    </section> -->
      <!-- <div class="top-photoframe">
        <b-carousel 
          :autoplay="false" indicator-custom
          :indicator-inside="false" 
          :overlay="gallery" 
          :icon-size="iconSize"
          :pause-info-type="pauseInfoType"
          @click="switchGallery(true)">
          <b-carousel-item v-for="(item, i) in 3" :key="i">
            <a class="image">
              <img :src="getImgUrl(i)">
            </a>
          </b-carousel-item>
          <span v-if="gallery" @click="switchGallery(false)" class="modal-close is-large"/>
          <template slot="indicators" slot-scope="props">
            <figure class="al image" :draggable="false">
              <img :draggable="false" :src="getImgUrl(props.i)" :title="props.i">
            </figure>
          </template>
        </b-carousel>
      </div> -->
        <div class="nmp-card">
          <h1 class="title is-1 is-spaced">{{ $t('partners.title') }}</h1>
          <h1 class="subtitle has-text-grey-light">{{ $t('partners.subtitle') }}</h1>
        </div>
        <hr>
        <PartnerList category="take" width_fullhd="4" width_desktop="4" width_tablet="6" width_mobile="12" />
        <PartnerList category="ume" width_fullhd="3" width_desktop="3" width_tablet="4" width_mobile="6" />
        <PartnerList category="sakura" width_fullhd="2" width_desktop="2" width_tablet="3" width_mobile="6" />
        <div class="container has-text-centered">
          <h1 class="title is-1 is-spaced">パートナー募集中</h1>
          <h1 class="subtitle is-5 has-text-grey-light">理念に賛同し、イベントを一緒に作り上げていただけるパートナーを募集しています。</h1>
          <div class="nmp-card-dark">下記連絡先までお問い合わせください。<br>tedxutsukuba&#64;gmail.com</div>
        </div>
    </section>
  </section>
</template>

<script>
// import Modal from '~/components/Modal.vue'
import PartnerList from '~/components/PartnerList.vue'
export default {
  components: {
    // Modal, 
    PartnerList
  },
  data() {
    return {
      showContent: false,
      postItem: "",
      iconSize: 'is-large',
      gallery: false,
      pauseInfoType: 'is-dark',
      images: [
        // require('~/assets/partners/2020/carousel_3.jpg'),
        // require('~/assets/partners/2020/carousel_4.jpg')
      ]
    }
  },
  head: {
    title: 'Partners'
  },
  methods: {
    openModal (partner) {
      this.showContent = true
      this.postItem = partner
    },
    closeModal () {
      this.showContent = false
    },
    switchGallery(value) {
      this.gallery = value
      if (value) {
          return document.documentElement.classList.add('is-clipped')
      } else {
          return document.documentElement.classList.remove('is-clipped')
      }
    }
  },
  // computed: {
  //   partnerList() {
  //     return this.$store.getters[
  //       'partner/findPartnersByCategory'
  //     ](this.category)
  //   }
  // }
}
</script>

<style lang="scss">

</style>