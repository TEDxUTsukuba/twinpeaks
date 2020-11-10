<template>
  <section class="hero is-medium">
    <div class="hero-body">
    <button @click="playMusic()">play</button>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    playMusic() {
      const m = new Audio(require("~/assets/qatar-rl-fin.mp3"));
      m.play();
    }

  }
}
</script>