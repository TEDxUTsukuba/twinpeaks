<template>
  <div class="container">
        <h1 class="title is-size-1">{{ title_ja }}</h1>
        <h1 class="subtitle is-size-4">{{ title_en }}</h1>
        <p class="is-size-6">{{ description_ja }}</p><br>
        <p>{{ description_en }}</p>
        <p class="image is-16by9">
          <img src="https://bulma.io/images/placeholders/640x360.png" alt="">
        </p>
        <p class="is-size-7">minim magna tamen sunt export sunt magna quis summis elit quae quid </p>
      </div>
</template>

<script>
export default {
  name: 'Flip',
  props: ['title_ja', 'title_en', 'description_ja', 'description_en', 'imageUrl'],
}
</script>

<style scoped>
  .title {
    font-weight: normal;
  }
  .subtitle {
    font-weight: bold;
    color: silver;
  }
  .p {
    color: gray;
  }
</style>
