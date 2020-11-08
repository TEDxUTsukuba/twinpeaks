<template>
  <section id="wrapper-dark" class="font-awesome">
    
    <section class="hero is-medium is-dark bg-jijimuge">
      <div class="hero-body has-text-white has-text-left">
        <div class="container has-text-centered">
          <h1 class="title is-1">JIJIMUGE</h1>
          <h1 class="subtitle is-4">TEDxUTsukuba 2020</h1>
        </div>
      </div>
    </section>
    <section class="section">
          <div class="tile is-ancestor">
            <div class="tile is-2 is-parent">
              <article class="tile is-child notification">
                <figure class="image">
                  <img src="~/assets/2020/date.png">
                </figure>
              </article>
            </div>
            <div class="tile is-2 is-parent">
              <article class="tile is-child notification">
                <figure class="image">
                  <img src="~/assets/2020/youtube.png">
                </figure>
              </article>
            </div>
            <div class="tile is-4 is-parent">
              <article class="tile is-child notification">
                <figure class="image">
                  <img src="~/assets/2020/independent.png">
                </figure>
              </article>
            </div>
            <div class="tile is-4 is-parent">
              <article class="tile is-child notification" style="margin: 0; padding: 0;">
                <figure class="image">
                  <img src="~/assets/2020/environment.png">
                </figure>
              </article>
            </div>
          </div>
        
          <div class="tile is-ancestor">
            <div class="tile is-vertical is-9">
              <div class="tile">
                <div class="tile is-parent is-vertical">
                  <article class="tile is-child notification">
                    <p class="title">Vertical tiles</p>
                    <p class="subtitle">Top notification</p>
                  </article>
                  <article class="tile is-child notification">
                    <p class="title">Vertical tiles</p>
                    <p class="subtitle">Bottom notification</p>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child notification" style="margin: 0; padding: 0;">
                    <figure class="image">
                      <img src="~/assets/wallpapers/jijimuge.png">
                    </figure>
                  </article>
                </div>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child notification">
                  <p class="title">Wide column</p>
                  <p class="subtitle">Aligned with the right column</p>
                  <div class="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                  </div>
                </article>
              </div>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child notification">
                <div class="content">
                  <p class="title">Tall column</p>
                  <p class="subtitle">With even more content</p>
                  <div class="content">
                  </div>
                </div>
              </article>
            </div>
          </div>

          <div class="tile is-ancestor">
            <div class="tile is-parent">
              <article class="tile is-child notification">
                <p class="title">Side column</p>
                <p class="subtitle">With some content</p>
                <div class="content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                </div>
              </article>
            </div>
            <div class="tile is-parent is-8">
              <article class="tile is-child notification">
                <p class="title">Main column</p>
                <p class="subtitle">With some content</p>
                <p class="subtitle">With some content</p>
                <div class="content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                </div>
              </article>
            </div>
          </div>
      <div class="section has-text-centered">
        <a href="https://tiget.net/events/109783" class="button is-gradient is-rounded is-large">{{ $t('2020.participance.applynowbutton') }}</a>
      </div>
    </section>
    <section class="section">
      <h1 class="title is-0">
        <span class="">{{ $t('2020.speaker.title') }}</span>
      </h1>
      <Card
        :title = "$t('2020.speaker.sp1.name')"
        :subtitle = "$t('2020.speaker.sp1.position')"
        :description = "$t('2020.speaker.sp1.description')"
        :image_url = "src_sp1"
      >
      </Card>
      <Card
        :title = "$t('2020.speaker.sp2.name')"
        :subtitle = "$t('2020.speaker.sp2.position')"
        :description = "$t('2020.speaker.sp2.description')"
        :image_url = "src_sp2"
      >
      </Card>
      <Card
        :title = "$t('2020.speaker.sp3.name')"
        :subtitle = "$t('2020.speaker.sp3.position')"
        :description = "$t('2020.speaker.sp3.description')"
        :image_url = "src_sp3"
      >
      </Card>
      <Card
        :title = "$t('2020.speaker.sp4.name')"
        :subtitle = "$t('2020.speaker.sp4.position')"
        :description = "$t('2020.speaker.sp4.description')"
        :image_url = "src_sp4"
      >
      </Card>
    </section>
    <section class="hero has-text-centered">
      <section class="section">
        <h1 class="title is-0">
          <span class="">{{ $t('2020.concept.title') }}</span>
        </h1>

        <b-carousel
        :autoplay="true"
        :arrow="arrow"
        :repeat="arrowBoth"
        :arrow-hover="arrowHover"
        :interval="interval"
        :icon-pack="iconPack"
        :icon-prev="iconPrev"
        :icon-next="iconNext"
        :icon-size="iconSize"
        :pause-info-type="pauseInfoType"
        @click="switchGallery(true)">
        <b-carousel-item v-for="(item, i) in 4" :key="i">
          <a class="image ">
            <img :src="getImgUrl(i)">
          </a>
        </b-carousel-item>
        <span v-if="gallery" @click="switchGallery(false)" class="modal-close is-large"/>
      </b-carousel>
      </section>
    </section>

    <!-- <section class="section has-text-centered">
      <b-collapse :open="false" position="is-bottom" aria-id="contentIdForA11y1">
        <a class="button is-medium is-gradient is-rounded" slot="trigger" slot-scope="props" aria-controls="contentIdForA11y1" style="margin: 3rem auto;">
            <b-icon :icon="!props.open ? 'menu-down' : 'menu-up'"></b-icon>
            {{ !props.open ? 'Read statement' : 'Close' }}
        </a>
        <br><br>
        <div class="column has-text-left">
          <article>
            {{ $t('2020.concept.statement1') }}<br>
            {{ $t('2020.concept.statement2') }}<br>
            {{ $t('2020.concept.statement3') }}
          </article>
        </div>
      </b-collapse>
    </section> -->

    <section class="hero bg-red">
      <div class="hero-body">
        <section class="section">
          <h1 class="title is-0">
            <span class="">{{ $t('2020.participance.title') }}</span>
          </h1>
          <div class="columns">
            <div class="column is-5">
              <div class="nmp-card-red">
                <p><font-awesome-icon :icon="['far', 'clock']" style="color: white;" /> {{ $t('2020.participance.free.time') }}</p>
                <h1 class="title is-2 has-text-white">{{ $t('2020.participance.free.title') }}</h1>
                <p>{{ $t('2020.participance.free.intro') }}</p>
                <ul>
                  <li><font-awesome-icon :icon="['fas', 'check-square']" style="color: white;" /> {{ $t('2020.participance.free.reservation') }}</li>
                </ul>
                <br>
                <a class="button is-white is-outlined is-rounded" href="https://www.youtube.com/watch?v=ujhrcXJCBUw&feature=youtu.be">{{ $t('2020.participance.free.youtube') }}</a>
              </div>
            </div>
            <div class="column is-7">
              <div class="nmp-card-red">
                <p><font-awesome-icon :icon="['far', 'clock']" style="color: white;" /> {{ $t('2020.participance.premium.time') }}</p>
                <h1 class="title is-2 has-text-white">{{ $t('2020.participance.premium.title') }}</h1>
                <p>{{ $t('2020.participance.premium.intro') }}</p>
                <ul>
                  <li><font-awesome-icon :icon="['fas', 'check-square']" style="color: white;" /> {{ $t('2020.participance.premium.reservation') }}</li>
                </ul>
                <br>
                <a class="button is-large is-white is-outlined is-rounded" href="https://tiget.net/events/109783">{{ $t('2020.participance.premium.tiget') }}</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  </section>
</template>

<script>
import Card from '~/components/Card'
import Image_sp1 from '~/assets/speakers/2020/speaker-01.png'
import Image_sp2 from '~/assets/speakers/2020/speaker-02.png'
import Image_sp3 from '~/assets/speakers/2020/speaker-03.png'
import Image_sp4 from '~/assets/speakers/2020/speaker-04.png'

export default {
  components: {
    Card
  },
  data(){
    return {
      src_sp1: Image_sp1,
      src_sp2: Image_sp2,
      src_sp3: Image_sp3,
      src_sp4: Image_sp4,
      animated: 'true',
      interval: '5000',
      iconSize: 'is-large',
      pauseInfoType: 'is-dark',
      images: [
        require('~/assets/2020/concept/statement_1_small.png'),
        require('~/assets/2020/concept/statement_2_small.png'),
        require('~/assets/2020/concept/statement_3_small.png'),
        require('~/assets/2020/concept/statement_4_small.png')
      ],
      carousels: [
        { 
          maintitle: 'JIJIMUGE',
          color: 'black' 
        },
        { 
          title: 'Slide 2', 
          title: '今、世の中にある様々な境界線が溶けつつあります。',
          description: 'グローバル化の進展により、ヒト・モノ・情報は自由に行き来し、国境は溶け始めています。',
          color: 'black'
        },
        { 
          title: 'Slide 3', 
          description: '',
          color: 'black' 
        },
        { 
          title: 'Slide 4', 
          description: '',
          color: 'black' 
        }
      ]
    }
  },
  methods: {
    getImgUrl(value) {
      return this.images[value]
    },
    switchGallery(value) {
      this.gallery = value
      if (value) {
          return document.documentElement.classList.add('is-clipped')
      } else {
          return document.documentElement.classList.remove('is-clipped')
      }
    }
  }
}
</script>

<style scoped>
  .notification {
    background-color: white;
  }
  .is-active .al img {
    filter: grayscale(0%);
  }
  .al img {
      filter: grayscale(100%);
  }
</style>