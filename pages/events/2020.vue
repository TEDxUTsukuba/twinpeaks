<template>
  <section id="wrapper">
    
    <section class="hero is-medium is-black">
      <div class="hero-body has-text-white has-text-left">
        <div class="container has-text-centered">
          <h1 class="title is-1">JIJIMUGE</h1>
          <h1 class="subtitle is-4">TEDxUTsukuba 2020</h1>
        </div>
      </div>
    </section>
    <section class="" style="padding: 2rem;">
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
                  <article class="tile is-child notification">
                    <p class="title">Middle notification</p>
                    <p class="subtitle">With an image</p>
                    <figure class="image">
                      <img src="~/assets/wallpapers/jijimuge.jpg">
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p>
                    <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.</p>
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
                <div class="content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                </div>
              </article>
            </div>
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
    <section class="section">
      <h1 class="title is-0">
        <span class="">{{ $t('2020.concept.title') }}</span>
      </h1>
      <h1 class="title is-1 has-text-centered">JIJIMUGE</h1>
      <article class="has-text-centered">
        {{ $t('2020.concept.statement') }}
      </article>
    <!-- <div class="columns is-multiline">
      <div class="column is-5-desktop is-12-tablet">
        <figure class="image is-3by2">
          <img class="nmp-card-image" src="~/assets/banner/2019.jpg" alt="Placeholder image">
        </figure>
      </div>
      <div class="column is-7-desktop is-12-tablet">
        <section class="nmp-card-light">
          <b-carousel
            :arrow="arrow"
            :repeat="arrowBoth"
            :arrow-hover="arrowHover"
            :animated="animated"
            :interval="interval"
            :icon-pack="iconPack"
            :icon-prev="iconPrev"
            :icon-next="iconNext"
            :icon-size="iconSize">
            <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
              <div class="hero is-medium" style="display: flex; justify-content: center; align-items: center;">
                <div class="has-text-centered" style="width: 100%; height: 20vh; ">
                  <h1 class="title is-2">{{carousel.title}}</h1>
                  <p class="has-text-dark">{{carousel.description}}</p>
                </div>
              </div>
            </b-carousel-item>
          </b-carousel>
        </section>
      </div>
      </div> -->
    </section>
    <section class="hero bg-red">
      <div class="hero-body">
        <section class="section">
          <h1 class="title is-0">
            <span class="">{{ $t('2020.participance.title') }}</span>
          </h1>
          <div class="columns">
            <div class="column is-5">
              <div class="nmp-card-red">
                <h1 class="title is-2 has-text-white">トーク</h1>
                <p>YouTube Live にて公開いたします。参加は無料です。</p>
              </div>
            </div>
            <div class="column is-7">
              <div class="nmp-card-red">
                <h1 class="title is-2 has-text-white">交流会</h1>
                <p>スピーカーさんと直接お話しできる交流会を企画しています。先着n名限定です。</p>
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
      animated: 'fade',
      interval: '5000',
      iconSize: 'is-large',
      carousels: [
        { 
          title: 'JIJIMUGEとは？',
          description: '',
        },
        { 
          title: '本来は仏教用語', 
          description: '華厳経の「事事無碍法界」という単語から取り出した言葉。真理にたどり着くための、世界の見方について説いた教え。',
          color: 'success' 
        },
        { 
          title: 'Slide 3', 
          description: '',
          color: 'warning' 
        },
        { 
          title: 'Slide 4', 
          description: '',
          color: 'danger' 
        }
      ]
    }
  }
}
</script>

<style scoped>
  .notification {
    background-color: white;
  }
</style>