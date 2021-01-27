<template>
  <section id="wrapper-dark" style="margin: 0; padding: 0;">
    <div class="bg-jijimuge" style="padding-top: 25vh; ">  
      <!-- <div id="top-photoframe" class="top-photoframe">
        <nuxt-link :to="localePath('/events/2020')">
        <figure class="is-square">
          <img src = "~/assets/wallpapers/jijimuge-transparent-circle.png" />
        </figure>
        </nuxt-link>
      </div> -->
      <section id="top-title" class="section has-text-centered has-text-weight-light has-text-light" style="padding-bottom: 20vh;">
        <h1 class="title is-1 is-spaced" style="letter-spacing: -1px;">
          {{ $t('event.title1') }}<br class="mobile-br">{{ $t('event.title2') }}<br class="mobile-br">{{ $t('event.title3') }}
        </h1>
        <h1 class="subtitle is-5 has-text-weight-normal has-text-white">
          {{ $t('event.subtitle1') }}<br class="mobile-br">{{ $t('event.subtitle2') }}
        </h1>
        <br>
        <nuxt-link :to="localePath('/events/2020')" class="button is-gradient is-rounded">{{ $t('button.discover') }}</nuxt-link>
        
      </section>
    </div>
      <section id="intro" class="hero bg-red">
        <div class="has-text-left" style="margin: 1vh 0 0vh 0;">
         
        </div>
        <div class="hero-body">
          <section class="section">
            <div class="columns is-mobile is-multiline is-centered is-variable is-0">
                <div class="column is-5-widescreen is-4-desktop is-6-tablet is-6-mobile">
                  <img src="~/assets/logo/motto.png" class="motto" style="padding-right: 50px;">
                </div>
                <div class="column is-0-fullhd is-0-widescreen is-0-desktop is-6-tablet is-6-mobile"></div>
                <div class="column is-7-widescreen is-8-desktop is-full-tablet is-full-mobile">
                    <h1 v-if="$i18n.locale == 'ja'" class="title is-2 is-size-4-mobile has-text-weight-light">
                      {{ $t('intro.headline1') }}
                      <br>
                      {{ $t('intro.headline2') }}
                    </h1>
                    <h1 v-if="$i18n.locale == 'en'" class="title is-2 is-size-4-mobile has-text-weight-light">
                      {{ $t('intro.headline1') }}
                      <br>
                      {{ $t('intro.headline2') }}
                    </h1>
                     <img id="rocket" src="~/assets/svg/rocket.png" width="100%" style="z-index: 0;">
                    <article class="is-size-6 has-text-light">
                      {{ $t('intro.description') }}
                    </article>
                    <br>
                    <div class="has-text-right">
                      <nuxt-link :to="localePath('/about')"><button class="button is-white is-rounded is-outlined">{{ $t('intro.button') }}</button></nuxt-link>
                    </div>
                </div>
             </div>
          </section>
        </div>
      </section>
        

      <section class="hero">
        <Movie id="teaser" :vId='videoId3' classname="large" style=""></Movie>
      </section>

    <section id="notice-title" class="section">
      <h1 class="title is-2 has-text-centered">
        <span class="">{{ $t('news.title') }}</span>
      </h1>
      <br>
      <div class="columns is-multiline reverse-row-order" id="notice">
        <div class="column is-5-tablet">
          <Flip
            :title = "$t('notice.left-top.title')"
            :description = "$t('notice.left-top.description')"
            :detail = "$t('notice.left-top.detail')"
            :link = "$t('notice.left-top.link')"
            imageUrl = "/_nuxt/assets/speakers/2019/sp_2019_1.jpg"
           />
        </div>
        <div class="column is-7-tablet">
          <Flip
            :title = "$t('notice.left-bottom.title')"
            :description = "$t('notice.left-bottom.description')"
            :detail = "$t('notice.left-bottom.detail')"
            :link = "$t('notice.left-bottom.link')"
            imageUrl = ""
          />
        </div>
        <div class="column is-7-tablet">
          <Flip
            :title = "$t('notice.right-top.title')"
            :description = "$t('notice.right-top.description')"
            :detail = "$t('notice.right-top.detail')"
            :link = "$t('notice.right-top.link')"
            imageUrl = ""
          />
        </div>
        <div class="column is-5-tablet">
          <Flip
            :title = "$t('notice.right-bottom.title')"
            :description = "$t('notice.right-bottom.description')"
            :detail = "$t('notice.right-bottom.detail')"
            :link = "$t('notice.right-bottom.link')"
            imageUrl = ""
          />
        </div>
      </div>
      <p class="has-text-grey-light has-text-right">{{ $t('notice.last-modified')}}<time datetime="2020-12-22">2020/1/26</time></p>
      <div class="has-text-centered">
        <nuxt-link :to="localePath('/notice')" class="button is-gradient is-rounded">{{ $t('button.archive') }}</nuxt-link>
      </div>
    </section>
    <div class="text-divider"></div>
  </section>
</template>

<script>
import Card from '~/components/Card'
import Flip from '~/components/Flip'
// const Card = () => import('~/components/Card')
// const Flip = () => import('~/components/Flip')
// const Movie = () => import('~/components/Movie')

export default {
  name: 'HomePage',

  components: {
    Card, Flip
  },
  data() {
    return {
      videoId1: 'yJpcvqCC0ww',
      videoId2: 'q_Es52kl6FQ',
      videoId3: 'ZbIEuwjpxp0',
      todayDate: Date.now(),
      eventDate: Date(2020, 11, 29, 0, 0, 0),
      isAlertActive: true,
    }
  },
  head() {
    return {
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'TEDxUTsukuba is an independently organised TEDx community managed by passionate students and alumni at the University of Tsukuba. Join us for conversations on local stories to global issues. '
        },
      ]
    }
  },
  // asyncData(context) {
  //   const isAndroid = context.$ua.isFromAndroidOs()
  //   console.log('isAndroid', isAndroid)
  //   return { isAndroid }
  // },
  mounted() {
    // const scene1 = this.$scrollmagic
    //   .scene({
    //     triggerElement: '#top-photoframe',
    //     triggerHook: 1,
    //     offset: 10,
    //     duration: 300,
    //     reverse: false
    //   })
    //   .setTween('#top-caption', {
    //     css: {
    //       opacity: 1
    //     }
    //   })

    const scene2 = this.$scrollmagic
      .scene({
        triggerElement: '#top-title',
        triggerHook: 1,
        offset: 0,
        reverse: false
      })
      .setTween('#intro', {
        css: {
          opacity: 1
        }
      })
    // const scene4 = this.$scrollmagic
    //   .scene({
    //     triggerElement: '#intro',
    //     triggerHook: 1,
    //     offset: 0,
    //     reverse: false
    //   })
    //   .setTween('#rocket', {
    //     css: {
    //       opacity: 1
    //     }
    //   })

    const scene3 = this.$scrollmagic
      .scene({
        triggerElement: '#notice-title',
        triggerHook: 1,
        offset: 0,
        reverse: false
      })
      .setTween('#notice', {
        css: {
          opacity: 1
        }
      })
      // this.$scrollmagic.addScene(scene1)
      this.$scrollmagic.addScene(scene2)
      this.$scrollmagic.addScene(scene3)
      // this.$scrollmagic.addScene(scene4)
  }
}
</script>


<style lang="scss" scoped>
  .same-height {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -ms-flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
  }

  .textoverflow {
    color: white;
    font-size: 6rem;
    font-family: 'Helvetica Neue', 'Arial', sans-serif;
    left: 10vw;
    position: absolute;
    top: 130vh;
  }
  h1.thin {
    font-weight: 100 !important;
  }

  .bounce_box {
    background-color: #fff;
    border-radius: 25px;
    padding: 3rem 6rem;
  }
  .text-divider {
    background-color: #5B08B9;
    margin: 0 auto;
    width: 80%;
    height: 2px;
  }
  #rocket {
    opacity: 1;
    // animation: SlideIn 3s;
  }
  #intro, #notice {
    opacity: 0;
    transition: all 0.5s;
  }
  @keyframes SlideIn {
    0% {
      opacity: 0;
      // transform: translate3d(-1920px,0,0);
    }
    100% {
      opacity: 1;
      transform: translate3d(0,0,0);
    }
  }
  .motto {
    width: 100%; max-width: 480px;
    // transform: translate3d(0,0,100px);
  }

</style>
