<template>
  <div id="carousel-wrapper">
    <b-carousel
      with-carousel-list
      :autoplay="true"
      :indicator="indicator"
      indicator-mode="hover"
      :indicator-inside="false"
      :indicator-style="indicatorStyle"
      interval=5000
      :overlay="gallery"
      :repeat="true"
      @click="switchGallery(true)">
      <b-carousel-item v-for="(item, i) in items" :key="i">
        <nuxt-link :to="item.link">
          <figure class="image">
            <img :src="item.image" :alt="item.title">
          </figure>
        </nuxt-link>
        <!-- <div class="mt-2 has-text-centered">
          <h1 class="title has-text-white">{{ item.title }}</h1>
        </div> -->
      </b-carousel-item>
      <template #indicators="props">
        <figure class="image">
          <source type="image/webp" :src="items[props.i].webpimage">
          <img :src="items[props.i].image">
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
      indicatorStyle: 'is-lines',
      items: [
        {
          title: 'Staff Wanted',
          image: 'https://www.tedxutsukuba.com/carousel/staffwanted.png',
          webpimage: 'https://www.tedxutsukuba.com/carousel/staffwanted.webp',
          link: './about/utsukuba'
        },
        {
          title: '2020 JIJIMUGE',
          image: 'https://www.tedxutsukuba.com/carousel/2020jijimuge.png',
          webpimage: 'https://www.tedxutsukuba.com/carousel/2020jijimuge.webp',
          link: './events/2020'
        },
        {
          title: '2019 CoPhilAction',
          image: 'https://www.tedxutsukuba.com/carousel/2019cophilaction.png',
          webpimage: 'https://www.tedxutsukuba.com/carousel/2019cophilaction.webp',
          link: './events/2019'
        },
        {
          title: 'TEDxUTsukubaLive',
          image: 'https://www.tedxutsukuba.com/carousel/2019utsukubalive.png',
          webpimage: 'https://www.tedxutsukuba.com/carousel/2019utsukubalive.webp',
          link: ''
        }
      ]
    }
  }
}
</script>


<style scoped lang="scss">
#carousel-wrapper {
  width: 100%;
  max-width: 1280px;
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
</style>