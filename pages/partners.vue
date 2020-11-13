<template>
  <section class="wrapper">
    <section class="hero is-medium is-black">
      <div class="hero-body has-text-white has-text-left">
        <div class="container has-text-centered">
          <h1 class="title is-1 is-spaced">{{ $t('partners.title') }}</h1>
          <h1 class="subtitle has-text-grey-light">{{ $t('partners.subtitle') }}</h1>
        </div>
      </div>
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
      <section class="section has-text-centered">
        <div class="columns is-multiline is-mobile is-8-tablet">
          <div class="column is-2-fullhd is-3-desktop is-4-tablet is-6-mobile" v-for="(partner, index) in partnerList" :key="index">
            <div class="has-background-white has-text-dark" style="padding: 10px;">
              <figure class="image is-1by1">
                <img :src="getJsonImgUrl(partner.id)" :alt="partner.name">
              </figure>
              <br>
              <p>
                {{ partner.name }} 様
              </p>
              <br>
              <!-- <p class="is-size-7">{{ partner.category }}</p> -->
                <!-- <button class="button is-black is-outlined is-rounded"
                  @click="openModal(partner)">
                  {{ $t('button.discover') }}
                </button> -->
                <a :href="partner.url" class="button is-black is-outlined is-rounded">{{ $t('button.visitwebsite') }}</a>
                <modal :val="postItem" v-show="showContent" @close="closeModal" />
            </div>
          </div>


        

        </div>
      </section>
    </section>
  </section>
</template>

<script>
import Modal from '~/components/Modal.vue'
export default {
  components: {
    Modal
  },
  data() {
    return {
      showContent: false,
      postItem: "",
      iconSize: 'is-large',
      gallery: false,
      pauseInfoType: 'is-dark',
      images: [
        require('~/assets/partners/2020/carousel_3.jpg'),
        require('~/assets/partners/2020/carousel_4.jpg')
      ]
    }
  },
  methods: {
    openModal (partner) {
      this.showContent = true
      this.postItem = partner
    },
    closeModal () {
      this.showContent = false
    },
    getImgUrl(value) {
      // value += 50
      // return `https://picsum.photos/id/10${value}/1230/500`
      return this.images[value]
    },
    getJsonImgUrl(value) {
      // return require(`~/assets/partners/2020/carousel_${value}.jpg`)
      return require(`~/assets/partners/2020/logo/${value}.jpg`)
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
  computed: {
    partnerList() {
      return this.$store.getters[
        'partner/showAllPartners'
      ](this.year)
    }
  }
}
</script>

<style lang="scss">

</style>