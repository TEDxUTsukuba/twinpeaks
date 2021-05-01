<template>
  <div id="carousel-wrapper">
    <b-carousel
      with-carousel-list
      :autoplay="autoplay"
      :animated="animated"
      :repeat="repeat"
      :indicator="indicator"
      :indicator-inside="false"
      :indicator-style="indicatorStyle"
      :interval="interval"
      :overlay="gallery"
      :icon-pack="iconPack"
      :icon-prev="iconPrev"
      :icon-next="iconNext"
      :icon-size="iconSize"
      :pause-info-type="pauseInfoType"
      @click="switchGallery(true)">
      <b-carousel-item v-for="(item, i) in items" :key="i">
        <nuxt-link :to="item.link">
          <figure class="image is-16by9">
            <img data-not-lazy :src="item.image" :alt="item.title">
          </figure>
        </nuxt-link>
      </b-carousel-item>
      <template #indicators="props">
        <figure class="image">
          <img data-not-lazy :src="items[props.i].thumbnail" :alt="items[props.i].title">
        </figure>
      </template>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gallery: false,
      autoplay: true,
      animated: 'slide',
      repeat: false,
      interval: 3500,
      indicator: true,
      indicatorStyle: 'is-lines',
      iconPack: 'mdi',
      iconPrev: 'chevron-left',
      iconNext: 'chevron-right',
      iconSize: 'is-medium',
      pauseInfoType: 'is-dark',
      items: [
        {
          title: 'Staff Wanted',
          image: 'https://www.tedxutsukuba.com/carousel/sns_banner_recruitment.jpg',
          thumbnail: 'https://www.tedxutsukuba.com/carousel/thumbnail/sns_banner_recruitment.jpg',
          link: './about/utsukuba'
        },
        {
          title: '2020 JIJIMUGE',
          image: 'https://www.tedxutsukuba.com/carousel/2020jijimuge.png',
          thumbnail: 'https://www.tedxutsukuba.com/carousel/thumbnail/2020jijimuge.png',
          link: './events/2020'
        },
        {
          title: '2019 CoPhilAction',
          image: 'https://www.tedxutsukuba.com/carousel/2019cophilaction.png',
          thumbnail: 'https://www.tedxutsukuba.com/carousel/thumbnail/2019cophilaction.jpg',
          link: './events/2019'
        },
        {
          title: 'TEDxUTsukubaLive',
          image: 'https://www.tedxutsukuba.com/carousel/2019utsukubalive.png',
          thumbnail: 'https://www.tedxutsukuba.com/carousel/thumbnail/2019utsukubalive.png',
          link: ''
        }
      ]
    }
  }
}
</script>


<style lang="scss">
.indicator-item {
  width: 25%;
}
.indicator-item figure img {
  margin-top: 0.2rem;
  padding-top: 0.3rem;
  border-top: 0.3rem solid #666666;
  // border: 2px solid gray;
  // filter: grayscale(80%);
  filter: brightness(75%);
}
.indicator-item.is-active figure img {
  border-top: 0.3rem solid red;
  // border: 2px solid white;
  // filter: grayscale(0);
  filter: brightness(100%);
}
.carousel .carousel-indicator {
  @media screen and (min-width: 1216px) {
    padding: 0.5rem 0 !important;
  }
}
</style>