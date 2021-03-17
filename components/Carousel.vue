<template>
  <div id="carousel-wrapper">
    <b-carousel
      with-carousel-list
      :autoplay="true"
      :indicator="indicator"
      :indicator-inside="false"
      :indicator-style="indicatorStyle"
      :interval="interval"
      :overlay="gallery"
      :icon-pack="iconPack"
      :icon-prev="iconPrev"
      :icon-next="iconNext"
      :icon-size="iconSize"
      :repeat="true"
      :pause-info-type="pauseInfoType"
      @click="switchGallery(true)">
      <b-carousel-item v-for="(item, i) in items" :key="i">
        <nuxt-link :to="item.link">
          <figure class="image">
            <img :src="item.image" :alt="item.title" style="width: 100%;">
          </figure>
        </nuxt-link>
      </b-carousel-item>
      <template #indicators="props">
        <figure class="image">
          <img :src="items[props.i].thumbnail" style="width: 100%;">
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
      interval: 5000,
      indicator: true,
      indicatorStyle: 'is-lines',
      iconPack: 'mdi',
      iconprev: 'chevron-left',
      iconNext: 'chevron-right',
      iconSize: 'is-medium',
      pauseInfoType: 'is-dark',
      items: [
        {
          title: 'Staff Wanted',
          image: 'https://www.tedxutsukuba.com/carousel/staffwanted.jpg',
          thumbnail: 'https://www.tedxutsukuba.com/carousel/thumbnail/staffwanted.jpg',
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
#carousel-wrapper {
  width: 100%;
  max-width: 960px;
  margin: auto;
}
.indicator-item figure img {
  border: 2px solid gray;
  // filter: grayscale(80%);
}
.indicator-item.is-active figure img {
  border: 2px solid white;
  // filter: grayscale(0);
}
.carousel .carousel-indicator {
  @media screen and (min-width: 961px) {
    padding: 0.5rem 0 !important;
  }
}
</style>