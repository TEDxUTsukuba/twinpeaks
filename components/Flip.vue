<template>
  <div class="nmp-card-dark">
      <h1 class="title is-3">{{ title }}</h1>
      <p class="subtitle is-size-6">{{ description }}</p>
      <article>{{ detail }}</article>
      <br>
      <a :href="link" class="button is-gradient is-rounded">{{ $t('notice.discover') }}</a>
      
      <!-- <p class="image is-16by9">
        <img :src="imageUrl" alt="">
      </p> -->
  </div>
</template>

<script>
export default {
  name: 'Flip',
  props: ['title', 'description', 'detail', 'link', 'imageUrl'],
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
