<template>
  <div class="is-flex">
    <ul class="slideshow">
      <li class="slideshow-item" v-for="(event, index) in eventList" :key="index">
        <div class="box">
          <p class="is-size-7">{{ event.date.day }}</p>
          <p class="title is-3">{{ event.name }}</p>
          <p class="is-size-7">{{ event.description }}</p>
          <a v-if="event.register.isRegistrationNeeded" :href="event.url.register" class="button is-white is-gradient is-rounded is-small">Register</a>
        </div>
      </li>
    </ul>
    <ul class="slideshow">
      <li class="slideshow-item" v-for="(event, index) in eventList" :key="index">
        <div class="box">
          <p class="is-size-7">{{ event.date.day }} </p>
          <p class="title is-3">{{ event.name }}</p>
          <p class="is-size-7">{{ event.description }}</p>
          <nav class="level">
            <div class="level-item" v-if="event.register.isRegistrationNeeded === true">
              <a :href="event.url.register" class="button is-white is-gradient is-rounded is-small">Register</a>
            </div>
          </nav>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    getJsonImgUrl(value) {
      // return require(`~/assets/partners/2020/carousel_${value}.jpg`)
      return require(`~/assets/partners/2020/logo/1.jpg`)
    }
  },
  computed: {
    eventList(){
      return this.$store.getters [
        'upcomingeventfromjson/getAll'
      ]
    }  
  }
}
</script>

<style lang="scss" scoped>
  .slideshow-item {
    /* 横スクロール用 */
    display: inline-block;
    margin: 5px;    
    width: 25vw;
    /* height: 400px; */
    word-break: break-all
  }
</style>