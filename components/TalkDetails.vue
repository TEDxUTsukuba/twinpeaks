<template>
  <section>
    <div class="wide" style="width: 80vw; margin: 0 auto;">
      <div class="columns is-variable is-4 is-multiline is-centered">
        <div class="column is-one-quarter-widescreen is-half-desktop is-half-tablet" v-for="(talk, index) in talkList" :key="index">
          <div class="card">
            <div class="card-image">
              <figure class="image is-16by9">
                <img src="https://bulma.io/images/placeholders/640x360.png">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4 has-text-black">{{ talk.title }}</p>
                  <p class="subtitle is-6 has-text-dark">{{ talk.speaker_name }}</p>
                </div>
              </div>
              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
              </div>
            </div>
          </div>
        </div>
      </div>
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
        'talk/findTalksByYear'
      ](this.year)
    }
  }
}
</script>

<style scoped>

</style>
