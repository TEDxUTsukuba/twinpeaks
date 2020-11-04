<template>
  <section id="wrapper-dark">
    
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
        <button class="button is-gradient is-rounded is-large">{{ $t('2020.participance.applynowbutton') }}</button>
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
      </section>
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
          >
            <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
              <section :class="`hero is-large is-${carousel.color}`" style="">
                <div class="hero-body has-text-centered">
                  <div class="container">
                    <h1 class="title is-1 has-text-centered has-text-white">{{carousel.maintitle}}</h1>
                    <h1 class="title">{{carousel.title}}</h1>
                    <p class="description">{{carousel.description}}</p>
                  </div>
                </div>
              </section>
            </b-carousel-item>
          </b-carousel>
        </div>
    </section>
    <section class="section has-text-centered">

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
      animated: 'true',
      interval: '8000',
      iconSize: 'is-large',
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
  }
}
</script>

<style scoped>
  .notification {
    background-color: white;
  }
</style>