<template>
  <section id="wrapper-dark">
    <section id="app" class="section has-text-white">
      <h1 class="title has-text-left">{{ $t('2020.participance.pass.title') }}</h1>
      <input class="input" v-model="pass" placeholder="Type password" style="width: 320px">
      <!-- {{ pass }} -->
      <!-- <button v-on:click="toggle_switch()">Toggle Button</button> -->
      <div v-if="pass !== 'jijimuge'">
        <p>{{ $t('2020.participance.pass.inputpassword') }}</p>
      </div>
      <div v-else>
        <p>ログイン</p>
        <Movie id="teaser" :vId='videoId1' :aPlay='autoplay' :classname="large"></Movie>
      </div>
    </section>
  </section>
</template>

<script>
  import Movie from '~/components/Movie'
 export default {
   components: {
     Movie
  },
  data: function() {
   return {
    videoId1: 'q_Es52kl6FQ',
    pass: ''
   }
  },
  methods: {
   toggle_switch: function() {
    this.isActive = !this.isActive
   }
  }
 }
</script>