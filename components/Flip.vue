<template>
  <div class="nmp-card-dark">
      <!-- <p>{{ date }}</p> -->
      <h1 class="title is-size-6-mobile is-size-5">{{ title }}</h1>
      <p class="subtitle is-size-6 has-text-primary">{{ description }}</p>
      <article class="is-size-7">{{ detail }}</article>
      <br>
      <a v-if="link" :href="link" class="button is-gradient is-rounded is-small">{{ $t('button.discover') }}</a>
      
      <!-- <p class="image is-16by9">
        <img :src="imageUrl" alt="">
      </p> -->
  </div>
</template>

<script>
export default {
  name: 'Flip',
  props: ['title', 'description', 'detail', 'link', 'date', 'imageUrl'],
}
</script>