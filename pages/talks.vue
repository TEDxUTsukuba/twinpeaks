<template>
  <section class="section">
    <div class="columns is-variable is-6 is-multiline is-centered">
      <div class="column is-one-third" v-for = 'sp in speakers'
      :key = 'sp.id'>
        <div class="card-image">
          <figure class="image is-3by2">
            <img :src = 'sp.url' />
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">{{ sp.title }}</p>
              <p class="subtitle is-6">{{ sp.name }}</p>
            </div>
          </div>
          <div class="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris.
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return {
      speakers: [
        { id:1, title: "私は靴を履かないバーテンダー", name: "松島壮志", url: '/_nuxt/assets/speakers/2019/sp_2019_1.jpg' },
        { id:2, title: "私は靴を履かないバーテンダー", name: "山田玲司", url: '/_nuxt/assets/speakers/2019/sp_2019_2.jpg' },
        { id:3, title: "私は靴を履かないバーテンダー", name: "Leonid Dimaano / Annet Nakkazi", url: '/_nuxt/assets/speakers/2019/sp_2019_3-1.jpg' },
        { id:4, title: "私は靴を履かないバーテンダー", name: "Carol Inugai Dixon", url: '/_nuxt/assets/speakers/2019/sp_2019_4.jpg' }
      ],
      topImg: require(`~/assets/speakers/2019/sp_2019_1.jpg`)
    }
  }
}
</script>

<style scoped>
.card {
  /* margin: 1.25vw; */
  padding: 0;
}
</style>
