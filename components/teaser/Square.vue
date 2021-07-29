<template>
  <svg :width="width" :height="width" viewBox="0, 0, 200, 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="10" width="180" height="180" rx="30" ry="30" :fill="fillcolor" :stroke="strokecolor" stroke-width="1.5vh" />
  </svg>
</template>

<script>
export default {
  props: {
    width: {
      type: [Number, String],
      default: '20vh'
    },
    strokecolor: {
      type: String,
      default: 'transparent'
    },
    fillcolor: {
      type: String,
      default: 'transparent'
    }
  }
}
</script>