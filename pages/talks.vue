<template>
  <section>
    <div v-for="(talk, index) in talkList" :key="index">
      <h1 class="title">{{ talk.title }}</h1>
      <h1 class="subtitle">{{ talk.speaker_name }}</h1>
      <p>{{ talk.description_ja }}</p>
      <span class="tag">{{ talk.year }}</span>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    year: {
      type: String,
      required: true
    }
  },
  computed: {
    talkList() {
      return this.$store.getters[
        'talk/showAllTalks'
      ](this.year)
    }
  }
}
</script>

<!--
<template>
  <section>
    <TalkDetail year="2019" />
  </section>
</template>

<script>
import TalkDetail from '~/components/TalkDetail.vue'
export default {
  components: {
    TalkDetail
  }
}
</script> -->
