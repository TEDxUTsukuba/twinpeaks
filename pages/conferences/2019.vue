<template>
  <section id="wrapper-dark" class="font-awesome">   
    <section class="section has-text-centered-mobile">
      <h1 class="subtitle is-4">TEDxUTsukuba 2019</h1>
      <h1 class="title is-1">CoPhilaction</h1>
    </section>

    <section class="hero">
      <section class="section" id="concept-title">
        <!-- <h1 class="title is-0">
          <span class="">{{ $t('2019.concept.title') }}</span>
        </h1> -->
        <figure class="image">
          <img src="~/assets/2019/concept/cophilaction_silver.png" alt="CoPhilAction" style="width: 80%; max-width: 720px; margin: 5vh auto;">
        </figure>
        <div>
          <article id="concept">
            <span class="is-size-7">
              　テクノロジーが進歩し、物質的な豊かさを享受できるようになった現代において、家族や仲間との強い繋がりが個人の幸せに占める割合は、相対的に低下している。
              地縁や血縁、職場での付き合いが「しがらみ」として遠ざけられるようになる一方で、SNSの普及や非正規雇用の拡大により、うわべだけの人間関係が増加しつつある。
            </span>
            <span class="is-size-7">
              　ムラ社会ニッポン特有の「同調圧力」といった悪弊が徐々に廃れていくとともに、個人主義や競争社会への賛辞が、日夜を問わず世間を賑わせてきたのが現実だ。
              しかし、テクノロジーのあくなき追求の先に待ち受けていた人工知能の登場は、皮肉にも私たちに「人間とは何か」という問いとの対峙を要請するのであった。
            </span>
            <span class="is-size-7">
              　古代エジプトでピラミッドが建造され、バスティーユ牢獄で市民革命の火蓋が切られたように、文明の進歩の原動力は「人間関係」の中にこそ見いだすことができるはずだ。
              そして令和という新たな時代を生きる私たちに求められるのは、これまで人間関係を築く上での障壁となってきた文化や思想、価値観の違いを、強みへと変えようとする気概ではないだろうか。
            </span>
            <span class="is-size-7">
              　「共に」を意味する接頭辞に、Phila「愛」とAction「行動」を合わせた CoPhilAction には、互いを認め合う「愛」が「行動」を生み、未来を切り拓くという理念が現れている。
              多様な人とアイディアが交わる TEDxUTsukuba という大きな社会実験の場に集い、あなたらしい CoPhilAction のカタチを、自由に思い描いてほしい。
            </span>
          </article>
        </div>
      </section>
    </section>

    <section class="section" id="card-0">
      <h1 class="title is-0">
        <span class="">{{ $t('2019.speaker.title') }}</span>
      </h1>
      <h1 class="subtitle has-text-white has-text-right">
        <!-- {{ $t('2019.speaker.description') }} -->
      </h1>
      <Card id="card-1"
        :title = "$t('2019.speaker.sp1.name')"
        :subtitle = "$t('2019.speaker.sp1.position')"
        :description = "$t('2019.speaker.sp1.description')"
        :image_url = "src_sp1"
        :youtubeId = "getYouTubeUrl($t('2019.speaker.sp1.youtubeId'))"
      >
      </Card>
      <Card id="card-2"
        :title = "$t('2019.speaker.sp2.name')"
        :subtitle = "$t('2019.speaker.sp2.position')"
        :description = "$t('2019.speaker.sp2.description')"
        :image_url = "src_sp2"
        :youtubeId = "getYouTubeUrl($t('2019.speaker.sp2.youtubeId'))"
      >
      </Card>
      <Card id="card-3"
        :title = "$t('2019.speaker.sp3.name')"
        :subtitle = "$t('2019.speaker.sp3.position')"
        :description = "$t('2019.speaker.sp3.description')"
        :image_url = "src_sp3"
        :youtubeId = "getYouTubeUrl($t('2019.speaker.sp3.youtubeId'))"
      >
      </Card>
      <Card id="card-4"
        :title = "$t('2019.speaker.sp4.name')"
        :subtitle = "$t('2019.speaker.sp4.position')"
        :description = "$t('2019.speaker.sp4.description')"
        :image_url = "src_sp4"
        :youtubeId = "getYouTubeUrl($t('2019.speaker.sp4.youtubeId'))"
      >
      </Card>
      <Card id="card-5"
        :title = "$t('2019.speaker.sp5.name')"
        :subtitle = "$t('2019.speaker.sp5.position')"
        :description = "$t('2019.speaker.sp5.description')"
        :image_url = "src_sp5"
        :youtubeId = "getYouTubeUrl($t('2019.speaker.sp5.youtubeId'))"
      >
      </Card>
    </section>

    <section class="hero" id="program">
      <div class="hero-body">
        <section class="section">
          <h1 class="title is-0" id="program-title">
            <span class="">{{ $t('2019.program.title') }}</span>
          </h1>
          <h1 class="subtitle has-text-white has-text-right has-text-centered-mobile">
            <!-- {{ $t('2019.participance.description') }} -->
          </h1>
          <div class="columns is-multiline reverse-row-order" id="program">
            <div class="column is-7">
              <div class="nmp-card-dark">
                <div class="header" style="margin-bottom: 0.5rem;">
                  <span class="tag is-dark"><i class="mdi mdi-clock" />12:40 - 13:30</span>
                </div>
                <div class="">
                  <h1 class="title is-3">{{ $t('2019.program.welcome.title') }}</h1>
                  <p>{{ $t('2019.program.welcome.description') }}</p>
                </div>
              </div>
            </div>
            <div class="column is-5 has-text-centered">
              <a data-flickr-embed="false" href="https://www.flickr.com/photos/146703506@N03/49072672506/in/album-72157711800937367/" title="_DSC8851"><img src="https://live.staticflickr.com/65535/49072672506_37b567aeb9_z.jpg" width="500" height="333" alt="_DSC8851"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
            </div>
            <div class="column is-7">
              <div class="nmp-card-dark">
                <div class="header" style="margin-bottom: 0.5rem;">
                  <span class="tag is-dark"><i class="mdi mdi-clock" />13:30 - 13:50</span>
                </div>
                <div class="">
                  <h1 class="title is-3">{{ $t('2019.program.perf1.title') }}</h1>
                  <p>{{ $t('2019.program.perf1.description') }}</p>
                </div>
              </div>
            </div>
            <div class="column is-5 has-text-centered">
              <a data-flickr-embed="false" href="https://www.flickr.com/photos/146703506@N03/49072891237/in/album-72157711800937367/" title="_DSC9016"><img src="https://live.staticflickr.com/65535/49072891237_b33eaa1a72_z.jpg" width="500" height="333" alt="_DSC9016"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
            </div>
            <div class="column is-7">
              <div class="nmp-card-dark">
                <div class="header" style="margin-bottom: 0.5rem;">
                  <span class="tag is-dark"><i class="mdi mdi-clock" />14:00 - 15:10</span>
                </div>
                <div class="">
                  <h1 class="title is-3">{{ $t('2019.program.talk1.title') }}</h1>
                  <p>{{ $t('2019.program.talk1.description') }}</p>
                </div>
              </div>
            </div>
            <div class="column is-5 has-text-centered">
              <a data-flickr-embed="false" href="https://www.flickr.com/photos/146703506@N03/49074551742/in/album-72157711800937367/" title="_DSC9217"><img src="https://live.staticflickr.com/65535/49074551742_c8fc9f4ae3_z.jpg" width="500" height="333" alt="_DSC9217"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
            </div>
            <div class="column is-7">
              <div class="nmp-card-dark">
                <div class="header" style="margin-bottom: 0.5rem;">
                  <span class="tag is-dark"><i class="mdi mdi-clock" />15:30 - 16:00</span>
                </div>
                <div class="">
                  <h1 class="title is-3">{{ $t('2019.program.workshop.title') }}</h1>
                  <p>{{ $t('2019.program.workshop.description') }}</p>
                </div>
              </div>
            </div>
            <div class="column is-5 has-text-centered">
              <a data-flickr-embed="false" href="https://www.flickr.com/photos/146703506@N03/49073714868/in/album-72157711800937367/" title="P1120186"><img src="https://live.staticflickr.com/65535/49073714868_a2c16e06ca_z.jpg" width="500" height="333" alt="P1120186"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
            </div>
            <div class="column is-7">
              <div class="nmp-card-dark">
                <div class="header" style="margin-bottom: 0.5rem;">
                  <span class="tag is-dark"><i class="mdi mdi-clock" />16:30 - 17:10</span>
                </div>
                <div class="">
                  <h1 class="title is-3">{{ $t('2019.program.talk2.title') }}</h1>
                  <p>{{ $t('2019.program.talk2.description') }}</p>
                </div>
              </div>
            </div>
            <div class="column is-5 has-text-centered">
              <a data-flickr-embed="false" href="https://www.flickr.com/photos/146703506@N03/49072130933/in/album-72157711800937367/" title="_DSC9206"><img src="https://live.staticflickr.com/65535/49072130933_8661453b05.jpg" width="500" height="333" alt="_DSC9206"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
            </div>
            <div class="column is-7">
              <div class="nmp-card-dark">
                <div class="header" style="margin-bottom: 0.5rem;">
                  <span class="tag is-dark"><i class="mdi mdi-clock" />17:30 - 17:50</span>
                </div>
                <div class="">
                  <h1 class="title is-3">{{ $t('2019.program.perf2.title') }}</h1>
                  <p>{{ $t('2019.program.perf2.description') }}</p>
                </div>
              </div>
            </div>
            <div class="column is-5 has-text-centered">
              <a data-flickr-embed="false" href="https://www.flickr.com/photos/146703506@N03/49073747613/in/album-72157711800937367/" title="P1120614"><img src="https://live.staticflickr.com/65535/49073747613_3e12a9d6e9_z.jpg" width="500" height="333" alt="P1120614"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
            </div>
            <div class="column is-7">
              <div class="nmp-card-dark">
                <div class="header" style="margin-bottom: 0.5rem;">
                  <span class="tag is-dark"><i class="mdi mdi-clock" />18:10 - 20:00</span>
                </div>
                <div class="">
                  <h1 class="title is-3">{{ $t('2019.program.afterparty.title') }}</h1>
                  <p>{{ $t('2019.program.afterparty.description') }}</p>
                </div>
              </div>
            </div>
            <div class="column is-5 has-text-centered">
              <a data-flickr-embed="false" href="https://www.flickr.com/photos/146703506@N03/49073776248/in/album-72157711800937367/" title="_DSC0139"><img src="https://live.staticflickr.com/65535/49073776248_ea72761d3d_z.jpg" width="500" height="333" alt="_DSC0139"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
            </div>
            <div class="column is-12 has-text-centered">
              <a data-flickr-embed="true" href="https://www.flickr.com/photos/146703506@N03/49072659536/in/album-72157711800937367/" title="_DSC0036"><img src="https://live.staticflickr.com/65535/49072659536_03391f6f95_b.jpg" width="1024" height="683" alt="_DSC0036"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
            </div>
          </div>
       </section>
      </div>
    </section>
    <section class="hero bg-venue" id="venue-title">
      <div class="hero-body">
        <section class="section" id="venue">
          <h1 class="title is-0 has-text-white">
            <span class="\">{{ $t('2019.venue.title') }}</span>
          </h1>
          <h1 class="title is-3 has-text-white">
            {{ $t('2019.venue.headline') }}
          </h1>
          <p class="has-text-white">
            {{ $t('2019.venue.description') }}
          </p>
          <hr>
          <p class="is-size-7 has-text-white">
            {{ $t('2019.venue.access') }}
          </p>
        </section>
      </div>
    </section>
    <section>
      <figure class="image is-3by1">
        <iframe class="has-ratio" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1957.0340758696698!2d140.10173302442405!3d36.103447991333944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f8.1!3m3!1m2!1s0x0%3A0x1e70d22a5b012e11!2z562R5rOi5aSn5a2mIDVD5qOf77yI5L2T6Iq45qOf77yJ!5e0!3m2!1sja!2sjp!4v1612811039423!5m2!1sja!2sjp" width="100%" rameborder="0" style="margin: 0 auto; border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </figure>
    </section>
  </section>
</template>

<script>
import Card from '~/components/EnjaCard'
import Movie from '~/components/Movie'
import Image_sp1 from '~/assets/speakers/2019/sp_2019_1.jpg'
import Image_sp2 from '~/assets/speakers/2019/sp_2019_2.jpg'
import Image_sp3 from '~/assets/speakers/2019/sp_2019_3-1.jpg'
import Image_sp4 from '~/assets/speakers/2019/sp_2019_3-2.jpg'
import Image_sp5 from '~/assets/speakers/2019/sp_2019_4.jpg'

export default {
  components: {
    Card, Movie
  },
  data(){
    return {
      src_sp1: Image_sp1,
      src_sp2: Image_sp2,
      src_sp3: Image_sp3,
      src_sp4: Image_sp4,
      src_sp5: Image_sp5,
      speakers: [
            { id:1, title: "私は靴を履かないバーテンダー", name: "松島壮志", url: '/_nuxt/assets/speakers/2019/sp_2019_1.jpg' },
            { id:2, title: "私は靴を履かないバーテンダー", name: "山田玲司", url: '/_nuxt/assets/speakers/2019/sp_2019_2.jpg' },
            { id:3, title: "私は靴を履かないバーテンダー", name: "Leonid Dimaano / Annet Nakkazi", url: '/_nuxt/assets/speakers/2019/sp_2019_3-1.jpg' },
            { id:4, title: "私は靴を履かないバーテンダー", name: "Carol Inugai Dixon", url: '/_nuxt/assets/speakers/2019/sp_2019_4.jpg' }
          ],
          topImg: require(`~/assets/speakers/2019/sp_2019_1.jpg`),
    }
  },
  head: {
    title: '2019 CoPhilAction | TEDxUTsukuba',
      meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 
        hid: 'description', 
        name: 'description', 
        content: '2019年11月10日(日) TEDxUTsukuba "CoPhilAction" 筑波大学5C棟にて開催。Join us on Nov 10, 2019 for TEDxUTsukuba "CoPhilAction".'
      },
      { 
        hid: 'twitter:card', 
        name: 'twitter:card', 
        content: 'summary_large_image' 
      },
      { 
        hid: 'twitter:site', 
        name: 'twitter:site', 
        content: '@tedxutsukuba' 
      },
      { 
        hid: 'twitter:creator', 
        name: 'twitter:creator', 
        content: '@tedxutsukuba' 
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'TEDxUTsukuba 2019 CoPhilAction'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://tedxutsukuba.com/events/2019'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Join us for our annual event on Nov. 10, 2019.'
      },
      {
        hid: 'og:author',
        property: 'og:author',
        content: 'Haruki Kinoshita and TEDxUTsukuba website team'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://www.tedxutsukuba.com/sns_banner_2019.png'
      },
      { 
        hid: 'og:site_name', 
        name: 'og:site_name', 
        content: 'TEDxUTsukuba Official Website' 
      }
    ]
  },
  methods: {
    getYouTubeUrl(value) {
      return `https://youtu.be/${value}`
    },
    getImgUrl(value) {
      if (process.client) {
        if (window.innerWidth <= 1080) {
          return this.statementMobileImages[value]
        } else {
          return this.statementImages[value]
        }
      }
    },
    switchGallery(value) {
      this.gallery = value
      if (value) {
          return document.documentElement.classList.add('is-clipped')
      } else {
          return document.documentElement.classList.remove('is-clipped')
      }
    }
  },
  mounted() {
  const scene1 = this.$scrollmagic
    .scene({
      triggerElement: '#card-0',
      triggerHook: 0.75,
      offset: 0,
      reverse: false
    })
    .setTween('#card-1', {
      css: {
        opacity: 1
      }
    })
  const scene2 = this.$scrollmagic
    .scene({
      triggerElement: '#card-1',
      triggerHook: 0.75,
      offset: 0,
      reverse: false
    })
    .setTween('#card-2', {
      css: {
        opacity: 1
      }
    })
  const scene3 = this.$scrollmagic
    .scene({
      triggerElement: '#card-2',
      triggerHook: 0.75,
      offset: 0,
      reverse: false
    })
    .setTween('#card-3', {
      css: {
        opacity: 1
      }
    })
  const scene4 = this.$scrollmagic
    .scene({
      triggerElement: '#card-3',
      triggerHook: 0.75,
      offset: 0,
      reverse: false
    })
    .setTween('#card-4', {
      css: {
        opacity: 1
      }
    })
  const scene5 = this.$scrollmagic
    .scene({
      triggerElement: '#concept-title',
      triggerHook: 0.75,
      offset: 0,
      reverse: false
    })
    .setTween('#concept', {
      css: {
        opacity: 1
      }
    })
  const scene6 = this.$scrollmagic
    .scene({
      triggerElement: '#card-4',
      triggerHook: 0.75,
      offset: 0,
      reverse: false
    })
    .setTween('#card-5', {
      css: {
        opacity: 1
      }
    })
    const scene7 = this.$scrollmagic
    .scene({
      triggerElement: '#program-title',
      triggerHook: 0.75,
      offset: 0,
      reverse: false
    })
    .setTween('#program', {
      css: {
        opacity: 1
      }
    })
    const scene8 = this.$scrollmagic
    .scene({
      triggerElement: '#venue-title',
      triggerHook: 0.75,
      offset: 0,
      reverse: false
    })
    .setTween('#venue', {
      css: {
        opacity: 1
      }
    })
    this.$scrollmagic.addScene(scene5)
    this.$scrollmagic.addScene(scene1)
    this.$scrollmagic.addScene(scene2)
    this.$scrollmagic.addScene(scene3)
    this.$scrollmagic.addScene(scene4)
    this.$scrollmagic.addScene(scene6)
    this.$scrollmagic.addScene(scene7)
    this.$scrollmagic.addScene(scene8)
  }
}
</script>


<style lang="scss" scoped>
h1.is-0 {
  color: #bcc5cd;
  background-color: #eec0c6;
  background-image: linear-gradient(135deg, #b267eb, #fc6f62);

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  &.has-text-white {
    color: white;
    background: linear-gradient(135deg, white, white) !important;
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent;
  }
}
  #card-1, #card-2, #card-3, #card-4, #card-5, #concept, #program, #venue {
    opacity: 0;
    transition: all 0.5s;
  }
.itemContainer{
    display: flex;
}
img#top {
  width: 100vw;
  height: 40vh;
  object-fit: cover;
  object-position: center;
}
.textoverflow {
  color: white;
  font-size: 6rem;
  font-family: 'Helvetica Neue', 'Arial', sans-serif;
  left: 10vw;
  position: absolute;
  top: 25vh;
}

.bg-venue{
  background: url("~@/assets/2019/venue/venue001.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position:center center;
  padding: 30px;
  overflow: hidden;
  position: relative;
  z-index: 0;
}
.bg-venue:before{
  content: "";
  display: block;
  position: absolute;
  background: inherit;
  filter: brightness(75%) contrast(50%) blur(5px);
  top: -20px;
  right: -20px;
  bottom: -20px;
  left: -20px;
  z-index: -1;
}
#concept {
  @media screen and (min-width: 769px) {
    // -webkit-writing-mode: vertical-rl; /* 実装済 */
    -moz-writing-mode: vertical-rl; /* 実装済 */
    -ms-writing-mode: vertical-rl; /* 実装済 */
    flex-direction : row-reverse;
    word-break: break-all;
    text-orientation: mixed;
    span {
      writing-mode: vertical-rl;
      margin: 0 1vw;
    }
    width: 100%;
    height: 40vh;
    letter-spacing: 0.5px;
    line-height: 1.8em;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "ヒラギノ明朝 ProN", "Hiragino Mincho ProN", "游明朝", YuMincho, serif;
    font-weight: normal;
  }
  @media screen and (max-width: 768px) {
    p {
      margin: 2vh 0;
    }
  }
  
  
}
</style>
