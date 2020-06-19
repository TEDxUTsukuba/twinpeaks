<template>
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-10-desktop is-8-tablet is-12-mobile">
        <h1 class="title is-size-1">{{ title_ja }}</h1>
        <h1 class="subtitle is-size-4">{{ title_en }}</h1>
        <p class="is-size-6">{{ description_ja }}</p><br>
        <p>{{ description_en }}</p>
      </div>
      <div class="column is-4-desktop is-4-tablet is-12-mobile">
        <p class="image is-4by3">
          <img src="https://bulma.io/images/placeholders/1280x960.png" alt="">
        </p>
        <p class="is-size-7">minim magna tamen sunt export sunt magna quis summis elit quae quid </p>
      </div>
    </div>
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
