<template>
  <svg :width="width" :height="width" viewBox="-150 -150 300 300">
    <path d="M130 75 L0 150 L-130 75 L-130 -75 L-0 -150 L130 -75 z" :fill="fillcolor" :stroke="strokecolor" stroke-width="1vw"></path>
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