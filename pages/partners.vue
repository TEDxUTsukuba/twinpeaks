<template>
  <section class="wrapper">
    <section class="hero is-medium is-black">
      <div class="hero-body has-text-white has-text-left">
        <div class="container has-text-centered">
          <h1 class="title is-1">Partners</h1>
          <h1 class="subtitle is-4">協賛</h1>
        </div>
      </div>
      <div class="container">
        <b-carousel 
          :autoplay="false" indicator-custom 
          :indicator-inside="false" 
          :overlay="gallery" 
          :icon-size="iconSize"
          @click="switchGallery(true)">
          <b-carousel-item v-for="(item, i) in 5" :key="i">
            <a class="image ">
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
      </div>
      <section class="section">
        <div class="columns is-multiline is-mobile is-variable is-7-tablet">
          <div class="column is-3-desktop is-4-tablet is-6-mobile" v-for="partner in partners" :key="partner.title">
            <figure class="image is-1by1">
              <img :src="partner.src">
            </figure>
            <h1 class="is-size-5 has-text-centered">
              {{ partner.title }} 様
            </h1>
          </div>
        </div>
      </section>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      iconSize: 'is-large',
      gallery: false,
      images: [
        require('~/assets/partners/2020/carousel_0.jpg'),
        require('~/assets/partners/2020/carousel_1.jpg'),
        require('~/assets/partners/2020/carousel_2.jpg'),
        require('~/assets/partners/2020/carousel_3.jpg'),
        require('~/assets/partners/2020/carousel_4.jpg'),
      ],
      partners: [
        { title: "朝日印刷", src: require('~/assets/480x480.png') },
        { title: "茶の木村園", src: require('~/assets/480x480.png') },
        { title: "茶の木村園", src: require('~/assets/480x480.png') },
        { title: "茶の木村園", src: require('~/assets/480x480.png') },
        { title: "茶の木村園", src: require('~/assets/480x480.png') },
        { title: "茶の木村園", src: require('~/assets/480x480.png') },
        { title: "茶の木村園", src: require('~/assets/480x480.png') },
        { title: "茶の木村園", src: require('~/assets/480x480.png') },
        { title: "茶の木村園", src: require('~/assets/480x480.png') },
        { title: "茶の木村園", src: require('~/assets/480x480.png') },
        { title: "茶の木村園", src: require('~/assets/480x480.png') },
        { title: "茶の木村園", src: require('~/assets/480x480.png') }
      ]
    }
  },
  methods: {
    getImgUrl(value) {
      // value += 50
      // return `https://picsum.photos/id/10${value}/1230/500`
      return this.images[value]
    },
    switchGallery(value) {
      this.gallery = value
      if (value) {
          return document.documentElement.classList.add('is-clipped')
      } else {
          return document.documentElement.classList.remove('is-clipped')
      }
    }
  }
}
</script>å