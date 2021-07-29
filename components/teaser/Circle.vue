<template>
  <svg :width="width" :height="width" viewBox="0, 0, 200, 200" xmlns="http://www.w3.org/2000/svg">
    <circle class="flash" cx="100" cy="100" r="90" :fill="fillcolor" :stroke="strokecolor" stroke-width="1vw" />
  </svg>
</template>

<script>
export default {
  props: {
    width: {
      type: [Number, String],
      default: '20vh'
    },
    fillcolor: {
      type: String,
      default: 'transparent'
    },
    strokecolor: {
      type: String,
      default: 'transparent'
    }
  }
}
</script>