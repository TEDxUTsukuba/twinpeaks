<template>
  <div class="nmp-card-light">
      <h1 class="title is-3">{{ title }}</h1>
      <p class="subtitle is-size-6">{{ description }}</p>
      <article>{{ detail }}</article>
      <br>
      <!-- <p class="image is-16by9">
        <img :src="imageUrl" alt="">
      </p> -->
  </div>
</template>

<script>
export default {
  name: 'Flip',
  props: ['title', 'description', 'detail', 'imageUrl'],
}
</script>

<style scoped>
  .container {
    margin: 0 2vw;
  }
  .title {
    font-weight: bold;
  }
  .subtitle {
    font-weight: bold;
    color: silver;
  }
  .p {
    color: gray;
  }
  .nmp-card-light {
    height: 90%;
  }
</style>
