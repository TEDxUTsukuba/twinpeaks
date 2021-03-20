<template>
  <section>
    <h1 class="title textoverflow">TEDxUTsukuba 2020<br>CoPhilAction</h1>
    <!-- <img id="top" src = "~/assets/banner/2019.jpg" /> -->
    <section class="hero">
      <div class="container">
        <h1 class="title is-1 has-text-centered">
          Live
        </h1>
      </div>
      <div　v-for = 'sp in speakers' :key = 'sp.id'>
        <h1>{{ sp.title }}</h1>
      </div>
    </section>

    <section class="hero">
      <div class="container">
        <h1 class="title is-1 has-text-centered">
          Attendee's voice
        </h1>
      </div>
    </section>

    <section class="hero">
      <div class="container">
        <h1 class="title is-1 has-text-centered">
          About info
        </h1>
      </div>
    </section>

          <!-- <a :href="`http://localhost:3000/_nuxt/assets/speakers/2019/sp_2019_1.jpg`">hey</a> -->
  </section>
</template>

<script>
    // import Events from '~/components/Events.vue'

    export default {
      components: {
        // Events
      },
      data(){
        return {
          speakers: [
            { id:1, title: "私は靴を履かないバーテンダー", name: "Barathunde Thurston", url: '/_nuxt/assets/speakers/live2019/sp_live2019_1.jpg' },
            { id:2, title: "私は靴を履かないバーテンダー", name: "Jacqueline Woodson", url: '/_nuxt/assets/speakers/live2019/sp_live2019_2.jpg' }
          ],
          topImg: require(`~/assets/speakers/2019/sp_2019_1.jpg`)
        }
      }
    }
</script>

<style scoped>
.itemContainer{
    display: flex;
}
img#top {
  width: 100vw;
  height: 40vh;
  object-fit: cover;
  object-position: center;
}
.textoverflow {
  color: white;
  font-size: 6rem;
  font-family: 'Helvetica Neue', 'Arial', sans-serif;
  left: 10vw;
  position: absolute;
  top: 25vh;
}
</style>
