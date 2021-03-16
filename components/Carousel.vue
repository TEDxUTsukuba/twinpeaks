<template>
  <div id="carousel-wrapper">
    <b-carousel
      with-carousel-list
      :autoplay="true"
      :indicator="indicator"
      :indicator-mode="hover"
      :indicator-inside="false"
      :indicator-style="indicatorStyle"
      :overlay="gallery"
      :repeat="repeat"
      @click="switchGallery(true)">
      <b-carousel-item v-for="(item, i) in items" :key="i">
        <figure class="image">
          <img :src="item.image">
        </figure>
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
          title: 'Slide 1',
          image: 'https://www.tedxutsukuba.com/carouse/staffwanted.png',
          webpimage: 'https://www.tedxutsukuba.com/carouse/staffwanted.webp'
        },
        {
          title: 'Slide 2',
          image: 'https://www.tedxutsukuba.com/carousel/2020jijimuge.png',
          webpimage: 'https://www.tedxutsukuba.com/carousel/2020jijimuge.webp'
        },
        {
          title: 'Slide 3',
          image: 'https://www.tedxutsukuba.com/carousel/2019cophilaction.png',
          webpimage: 'https://www.tedxutsukuba.com/carousel/2019cophilaction.webp'
        },
        {
          title: 'Slide 4',
          image: 'https://www.tedxutsukuba.com/carousel/2019utsukubalive.png',
          webpimage: 'https://www.tedxutsukuba.com/carousel/2019utsukubalive.webp'
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
  // border: 2px solid gray;
  filter: grayscale(80%);
}
.indicator-item.is-active figure img {
  // border: 2px solid white;
  filter: grayscale(0);
}
</style>