<template>
  <section class="hero is-fullheight has-text-centered">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-0 has-text-centered">
          Type. Save. Share. 
        </h1>
        <h1 class="subtitle is-size-4 has-text-weight-light">
          Create your own business card online. 
        </h1>
        <div style="margin: 5vh auto 2vh auto;">
          <b-field grouped position="is-centered">
            <b-input
              placeholder="John Doe"
              type="text"
              v-model="inputText"
            />
            <p class="control">
              <b-button :disabled="disabled" type="is-primary" label="Generate" @click="generateImage(inputText)" />
            </p>
          </b-field>
        </div>
        <div v-if="isValid == 'valid'">
          <b-tag
            class="is-success is-medium"
            size="is-medium"
          >
            <i class="mdi mdi-checkbox-marked-circle" /> Valid
          </b-tag>
        </div>
        <div v-if="isValid == 'long'">
          <b-tag
            class="is-warning is-medium"
            size="is-medium"
          >
            <i class="mdi mdi-alert-circle" /> Too Long
          </b-tag>
        </div>
        <div v-if="isValid == 'invalid'">
          <b-tag
            class="is-danger is-medium"
            size="is-medium"
          >
            <i class="mdi mdi-alert-circle" /> Invalid
          </b-tag>
        </div>
        <p class="has-text-grey-light">{{ status }}</p>
        <div class="notification" v-if="isGenerated">
          Successfully Generated!
        </div>
      </div>
    </div>
    <div class="hero-footer" style="margin-bottom: 2vh;">
      <p class="has-text-grey-light">
        TEDxUTsukuba Online Business Card Generator<br>
        <span class="has-text-weight-bold">v0.1.0</span> Public Beta
      </p>
      <p class="has-text-grey"><span class="">Made with &#9829; by <nuxt-link to="./about/harry" class="has-text-weight-bold">Harry</nuxt-link></span></p>
    </div>
  </section>
</template>

<script>
export default {
  layout: "headeronly",
  head: {
    title: "Online Business Card Generator | TEDxUTsukuba",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 
        hid: 'description', 
        name: 'description', 
        content: 'Type. Save. Share. Create your own business card online. '
      },
    ]
  },
  data() {
    return {
      isGenerated: false,
      isValid: "blank",
      disabled: true,
      status: "Type Something.",
      inputText: ''
    }
  },
  watch: {
    inputText: function(val) {
      // console.log(val, val.length)
      if (!val.trim() || val.length == 0) {
        this.isValid = "blank"
        this.status = "Type Something. "
        this.disabled = true
      } else if (val.match(/^[A-Za-z\s]/) && val.length > 30) {
        this.isValid = "long"
        this.status = "Text must be 30 characters or less."
        this.disabled = true
      } else if (val.match(/^[A-Za-z\s]{1,30}$/i) == null) {
        this.isValid = "invalid"
        this.status = "Only alphabet is allowed."
        this.disabled = true
      } else {
        this.isValid = "valid"
        this.status = "Everything is fine."
        this.disabled = false
      }
    }
  },
  methods: {
    generateImage(val) {
      this.isGenerated = true
    }
  }
}
</script>

<style scoped>
  h1.is-0 {
    color: #bcc5cd;
    background: linear-gradient(135deg, #3494e6, #ec6ead);
    /* background: linear-gradient(45deg, #74ebd5, #acb6e5); */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>