<template>
  <div>
    <section class="section has-text-centered">
      <h1 class="title is-0 has-text-centered" style="margin-bottom: 0; padding-bottom: 1.5rem;">
        Type. Save. Share. 
      </h1>
      <h1 class="subtitle is-size-4 has-text-weight-light">
        Create your own business card online. 
      </h1>
      <div class="columns is-vcentered">
        <div class="column is-7-desktop is-6-tablet notification is-light">
          <div style="max-width: 400px; margin: 1rem auto 1rem auto;">
            <div v-if="isValid == 'valid'">
              <b-tag
                class="is-success is-medium"
                size="is-medium"
              >
                <i class="mdi mdi-checkbox-marked-circle" /> Valid
              </b-tag>
            </div>
            <div v-if="isValid == 'invalid'">
              <b-tag
                class="is-danger is-medium"
                size="is-medium"
              >
                <i class="mdi mdi-alert-circle" /> Numbers and emojis are not allowed. 
              </b-tag>
            </div>
            <div v-if="isValid == 'blank'">
              <b-tag
                class="is-white is-medium"
                size="is-medium"
              >
                <i class="mdi mdi-alert-circle" /> Type your name.
              </b-tag>
            </div>
            <br>
            <b-field grouped position="is-centered">
              <b-input expanded id="input"
                size="is-medium"
                placeholder="John Doe"
                type="text"
                v-model="inputText"
              />
            </b-field>
            <br>
            <b-field label="Font Size">
              <b-slider v-model="fontsize" :min="76" :max="140" :step="8" ticks>
              </b-slider>
            </b-field>
          </div>
        </div>
        <div class="column is-5-desktop is-6-tablet">
          <div id="konvaCanvas" style="margin: auto;">
            <v-stage ref="stage" :config="{
              scale: {x: 0.2, y: 0.2},
              width: this.width,
              height: this.height,
              id: `${this.inputText}`
            }">
              <v-layer ref="layer">
                <v-image :config="{
                  image: bgImage
                }"/>
                <!-- <v-circle :config="configCircle"></v-circle> -->
                <v-text v-if="isValid == 'valid'"
                :config="{
                  text: `${this.inputText}`, 
                  align: 'center',
                  verticalAlign: 'middle',
                  fontFamily: `${selectFont}`,
                  fontSize: this.fontsize,
                  fontStyle: 'bold',
                  fill: '#fff',
                  width: this.width,
                  height: this.height,
                  offsetY: 14,
                  id: `${this.inputText}`
                }"/>
              </v-layer>
            </v-stage>
          </div>
          <div style="margin: 2rem auto 2rem auto;">
            <b-button id="save" @click="save" class="button is-primary has-text-weight-bold" size="is-medium" icon-left="download">
              Save Image
            </b-button>
          </div>
        </div>
      </div>
      <v-stage style="display: none;" ref="stage_fullsize" :config="{
        scale: {x: 1, y: 1},
        width: this.width,
        height: this.height,
        id: `${this.inputText}`
      }">
        <v-layer ref="layer">
          <v-image :config="{
            image: bgImage
          }"/>
          <!-- <v-circle :config="configCircle"></v-circle> -->
          <v-text v-if="isValid == 'valid'"
          :config="{
            text: `${this.inputText}`, 
            align: 'center',
            verticalAlign: 'middle',
            fontFamily: `${selectFont}`,
            fontSize: this.fontsize,
            fontStyle: 'bold',
            fill: '#fff',
            width: this.width,
            height: this.height,
            offsetY: 14,
            id: `${this.inputText}`
          }"/>
        </v-layer>
      </v-stage>
    </section>
    <footer class="has-text-centered" style="padding: 1rem;">
      <div class="content has-text-centered">
        <p class="has-text-grey-light">
          TEDxUTsukuba Online Business Card Generator<br><span class="has-text-weight-bold">v0.1.0</span> Public Beta
        </p>
        <p class="has-text-grey" style="margin-bottom: 1rem;"><span class="">Made with &#9829; by <nuxt-link to="./about/harry" class="has-text-weight-bold">Harry</nuxt-link></span></p>
        <details>
          <summary class="button is-small">
            About This Generator
          </summary>
          <div class="content has-text-left" style="margin: 1rem 2rem;">
            When was the last time you exchanged business cards in person? This generator allows you to create your digital businness card. Reach out to your partners with this card!<br><br>
            Change Log
            <dl>
              <dt>v0.1.0 (2021/05/14)</dt>
              <dd>First Release</dd>
              <dd>Do not fully support mobile devices.</dd>
            </dl>
          </div>
        </details>
      </div>
    </footer>
  </div>
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
      isValid: "blank",
      status: "Type your name.",
      aspect: 'Business Card',
      inputText: '',
      bgImage: '',
      width: 1365,
      height: 825,
      fontsize: 116,
      configCircle: {
        x: 100,
        y: 100,
        radius: 70,
        fill: "red",
        stroke: "black",
        strokeWidth: 4
      },
      list: [{ x: 100, y: 100, radius: 50, fill: 'blue' }]
    }
  },
  watch: {
    inputText: function(val) {
      // console.log(val, val.length)
      if (!val.trim() || val.length == 0) {
        this.isValid = "blank"
        this.status = "Type Something. "
      } else if (val.match(/^[\D]{1,}$/i) == null || val.match(/\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation}|\p{Emoji}\uFE0F/gu)) {
        this.isValid = "invalid"
        this.status = "Numbers and Emojis are not allowed."
      } else {
        this.isValid = "valid"
        this.status = ""
      }
    }
  },
  methods: {
    save () {
      const stage = this.$refs.stage_fullsize.getStage();
      console.log(stage);
      localStorage.setItem(this.inputText.replace(/ /g, "_") + '_from_TEDxUTsukuba', JSON.stringify(stage));
      var link = document.createElement('a');
      link.download = this.inputText.replace(/ /g, "_") + '_from_TEDxUTsukuba';
      link.href = stage.toDataURL();;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  },
  mounted () {
    const image = new window.Image();
    image.src = "/ogp/bg_meishi.png";
    image.onload = () => {
      // set image only when it is loaded
      this.bgImage = image;
      const data = localStorage.getItem('storage') || '[]';
      this.list = JSON.parse(data);
    }
    if (this.$ua.isFromIos() && this.$ua.browser() != 'Safari') this.$buefy.notification.open({ message: "Some browsers are not comparable with this generator. Try using Safari!", type: 'is-warning', position: 'is-bottom-right' })
    if (this.$ua.isFromAndroidOs()) this.$buefy.notification.open({ message: "Some browsers are not comparable with this generator.", type: 'is-warning', position: 'is-bottom-right' })
  },
  computed: {
    selectFont() {
      if (this.$ua.isFromIos() || this.$ua.os() == 'Mac OSX') {
        return 'Helvetica Neue'
      } else if (this.$ua.isFromAndroidOs()) {
        return 'Open Sans'
      } else if (this.$ua.os().includes('Windows')) {
        return 'Arial'
      } else {
        return 'sans-serif'
      }
    }
  }
}
</script>

<style scoped>
  html {
    overflow-x : hidden;
    overflow-y : auto;
  }
  body {
    width: 100vw;
    overflow-x : hidden;
    overflow-y : auto;
  }
  h1.is-0 {
    color: #bcc5cd;
    background: linear-gradient(135deg, #3494e6, #ec6ead);
    /* background: linear-gradient(45deg, #74ebd5, #acb6e5); */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  dt {
    font-weight: bold;
  }
  #konvaCanvas {
    width: 273px;
    height: 165px;
    margin: 4rem auto 2rem auto;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
  .column {
    margin: 3rem 0;
  }
</style>