<template>
  <div v-if="loading" class="loading">
    <div class="loading_spinner">
      <img src="loading-x.svg">
    </div>
  </div>
</template>

<script>
export default {
  name: "Loading",
  data() {
    return {
      loading: false
    };
  },
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    },
    fail() {
      this.loading = false;
    }
  }
}
</script>

<style lang="scss" scoped>
.loading {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  transition: all ease-in-out 1s;
  background: rgba(255, 255, 255, 0.5);
  &_spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 18px;
  }
}
</style>

