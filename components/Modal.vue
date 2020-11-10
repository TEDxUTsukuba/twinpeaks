<template>
  <div id="overlay">
    <div class="modal-card">
      <section class="modal-card-body">
        <img :src="getImgUrl(val.id)" :alt="val.name">
        <h1 class="">{{ val.name }}</h1>
      </section>
      <footer class="modal-card-foot">
        <a class="button is-rounded is-gradient" :href="val.url">{{ $t('button.visitwebsite') }}</a>
        <a class="button is-rounded" @click="$emit('close')">{{ $t('button.close') }}</a>
      </footer>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Modal',
    props: ['val'],
    methods: {
      getImgUrl(value) {
        // return require(`~/assets/partners/2020/posteposposr/${value}.jpg`)
        return require(`~/assets/partners/2020/poster/onikle.jpg`)
    },
    }
  }
</script>

<style>
  #overlay{
  z-index:1;
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>