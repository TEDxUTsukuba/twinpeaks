<template>
  <div class="nmp-card-dark">
      <h1 class="title is-3">{{ title }}</h1>
      <p class="subtitle is-size-6 has-text-primary">{{ description }}</p>
      <article>{{ detail }}</article>
      <br>
      <a v-if="link" :href="link" class="button is-gradient is-rounded">{{ $t('button.discover') }}</a>
      
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
  .p {
    color: gray;
  }
  .nmp-card-light {
    height: 90%;
  }
</style>
