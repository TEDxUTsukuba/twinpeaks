<template>
  <div class="slideshow-wrap">
    <ul class="slideshow" id="slides-before">
      <li class="slideshow-item" v-for="(item, index) in items" :key="index">
        <figure class="image is-3by2">
          <img :src="require(`~/assets/album/${item.src}.jpg`)" style="object-fit: cover; border-radius: 12px;">
        </figure>
      </li>
    </ul>
    <ul class="slideshow" id="slides-after">
      <li class="slideshow-item" v-for="(item, index) in items" :key="index">
        <figure class="image is-3by2">
          <img :src="require(`~/assets/album/${item.src}.jpg`)" style="object-fit: cover; border-radius: 12px;">
        </figure>
      </li>
    </ul>
  </div>
</template>



<script>
export default {
  data() {
    return {
      items: [
        {
          src: "49072668996_f981656e4d_c"
        },
        {
          src: "49072679926_696bafac53_c"
        },
        // {
        //   src: "50718704372_09262dda41_c"
        // },
        {
          src: "50717794028_fefdac8504_c"
        },
        {
          src: "24865764328_112c8828a7_c"
        },
        {
          src: "40772589253_022b8a89b5_c"
        },
        {
          src: "49074347321_3039a117ce_c"
        },
      ]
    }
  },
  methods: {
    getJsonImgUrl(value) {
      return require(`~/assets/album/${value}.jpg`)
    }
  },
  computed: {
  }
}
</script>

<style lang="scss">
  .slideshow-item {
    /* 横スクロール用 */
    word-break: break-all;
    margin: 3vh 0 8vh 2vw;
    width: 26vw;
    figure {
      filter: drop-shadow(0px 8px 18px rgba(0, 0, 0, 0.6));
    }
  }
  @media screen and (max-width: 768px) {
    .slideshow-item {
      width: 40vw;
      padding: 0;
    }
  }
</style>