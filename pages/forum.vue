<template>
  <section class="hero is-fullheight">
      <div class="columns is-multiline">
        <div class="column is-12-tablet is-8-desktop is-8-widescreen is-7-fullhd is-12-tablet">
          <figure class="image is-16by9">
            <iframe class="has-ratio" src="https://www.youtube.com/embed/yJpcvqCC0ww" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </figure>
          <!-- <div class="ml-4 mt-4" v-show="showTranslation">
            <p class="is-size-6 has-text-grey has-text-weight-light notification is-black">Translation comes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat egestas mi in cursus. Cras massa dui, mattis eu ipsum a, venenatis tempus turpis.</p>
          </div> -->
          <div class="ml-4 mt-4 notification is-black">
            <nav class="level">
              <!-- Left side -->
              <div class="level-left">
                <div class="level-item">
                  <div class="onair"><span class="tag is-medium is-red">ON AIR</span></div>
                </div>
              </div>

              <!-- Right side -->
              <div class="level-right">
                <button class="button is-dark mx-2">👏 Clap</button>
                <button class="button is-dark mx-2">💖 Love</button>
                <button class="button is-dark mx-2">😊 Nice</button>
              </div>
            </nav>
          </div>
          <div class="notification ml-4 is-black">
            <div class="media">
              <div class="media-left">
                <figure class="image is-96x96">
                  <img class="is-rounded" src="https://vuesax.com/foto12.png" alt="Placeholder image">
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">John Smith</p>
                <p class="subtitle is-6">Editor in chief of 'Mu'</p>
                <p class="has-text-grey is-size-7">
                  UFOや超常現象など、様々な世界の謎と不思議に挑む雑誌『ムー』の5代目編集長にして、普段私たちが覗くことのない世界の真相に迫っている…😎 そのミステリアスで圧倒的なオーラと魅力的なトークで、オーディエンスの皆様を『ムー』の世界に引きずり込みます…
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-12-tablet is-4-desktop is-4-widescreen is-5-fullhd mt-2 px-5">
          <nav class="level is-mobile">
            <div class="level-left">
            </div>
            <div class="level-right">
              <div class="level-item">
                <b-button tag="router-link"
                  to="/participant/298"
                  class="is-dark is-small"
                  icon-left="account">
                    <small>アカウント</small>
                </b-button>
              </div>
              <div class="level-item">
                <img src="~/assets/logo/u_bgblack_oneline.png" width=160>
              </div>
            </div>
          </nav>
          <div v-for="(item, index) in programs" :key="index" class="mb-3">
            <div :class="`${item.now}`">
              <small class="has-text-weight-bold has-text-grey">{{ item.start }} - {{ item.end }}</small>
          
              <b-collapse :open="false" animation="slide" aria-id="contentIdForA11y3">
                <template #trigger="props">
                  <div
                    role="button"
                    aria-controls="contentIdForA11y3">
                    <span class="has-text-weight-bold">{{ item.title }}</span>
                    <b-icon
                      class="has-text-grey"
                      size="is-small"
                      :icon="props.open ? 'chevron-up' : 'chevron-down'">
                    </b-icon>
                  </div>
                </template>
                  <div class="content mt-2">
                    <p class="is-size-7 has-text-grey-light">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                        Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. <br/>
                        Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
                    </p>
                  </div>
              </b-collapse>
            </div>
          </div>
        
          <div class="columns is-gapless is-multiline">
            <div class="column is-12-tablet is-9 is-10-fullhd">
                <a class="twitter-timeline" data-width="100%" data-height="420" data-theme="dark" href="https://twitter.com/tedxutsukuba?ref_src=twsrc%5Etfw"></a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 
            </div>
            <div class="column ml-3">
              <figure class="image is-1by1 mb-4">
                <img src="~/assets/partners/2020/logo/14.jpg">
              </figure>
              <figure class="image is-1by1 mb-4">
                <img src="~/assets/partners/2020/logo/13.jpg">
              </figure>
              <figure class="image is-1by1">
                <img src="~/assets/partners/2020/logo/15.jpg">
              </figure>
            </div>
          </div>
        </div>
      </div>
  </section>
</template>

// is-pulled-right

<script>
export default {
  layout: "fullscreen",
  data() {
    return {
      showTranslation: true,
      programs: [
        {
          title: "Welcome Session",
          now: "program-box",
          start: "13:00",
          end: "13:15",
        },
        {
          title: "Talk Session",
          now: "program-box-highlight",
          start: "13:15",
          end: "14:15",
        },
        {
          title: "Workshop",
          now: "program-box",
          start: "14:15",
          end: "14:45"
        },
        {
          title: "Break Time",
          now: "program-box",
          start: "14:45",
          end: "15:00"
        },
        {
          title: "Talk Session",
          now: "program-box",
          start: "15:00",
          end: "15:30"
        },
        {
          title: "After Party",
          now: "program-box",
          start: "15:30",
          end: "17:00"
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  p {
    color: #fff;
  }
  .program-box {
    color: white;
    padding: .5rem 1rem;
    background: #282d36;
    border: 2px solid #282d36;
  }
  .program-box-highlight {
    @extend .program-box;
    border-image: linear-gradient(45deg, #c21500 0%, #7700ff 100%);
    border-image-slice: 1;
  }
  .onair{
    animation: flash 2s linear infinite;
  }

  @keyframes flash {
    0% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }

</style>