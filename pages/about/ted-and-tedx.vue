<template>
  <section id="wrapper-dark" class="font-awesome">
    <section class="hero is-fullheight">
      <div class="hero-body has-text-left">
        <div class="container has-text-centered">
          <h1 class="title is-1 is-spaced">{{ $t('about.tedandtedx.title')}}</h1>
          <h1 class="subtitle is-5 has-text-grey-light">{{ $t('about.tedandtedx.subtitle')}}</h1>
        </div>
      </div>
    </section>
    
    <section class="hero" id="ted">
      <section class="section">
        <h1 class="title is-0">{{ $t('about.ted.title')}}</h1>
        <article v-if="$i18n.locale == 'en'">
          <span class="em">TED</span> is a nonprofit organization devoted to <span class="em">Ideas Worth Spreading</span>. Started as a four-day conference in California 30 years ago, TED has grown to support its mission with multiple initiatives. The two annual TED Conferences invite <span class="em">the world’s leading thinkers and doers</span> to speak for <span class="em">18 minutes or less</span>. Many of these talks are then made available, free, at TED.com. TED speakers have included Bill Gates, Jane Goodall, Elizabeth Gilbert, Sir Richard Branson, Nandan Nilekani, Philippe Starck, Ngozi Okonjo-Iweala, Sal Khan, Daniel Kahneman and John Maeda, who earned his Ph.D. at the University of Tsukuba. 
        </article>
        <article v-if="$i18n.locale == 'ja'">
          <span class="em">TED</span>は、非営利団体であり、<span class="em">価値あるアイデアを広める</span>ことを目的としています。30年前にカリフォルニアで開催された4日間のカンファレンスから始まって以来、発展を続け、現在は複数の取り組みを通してその使命を支えています。年に2回開催されるTEDカンファレンスでは、<span class="em">世界の様々な分野の第一人者</span>を招き、<span class="em">18分以内に収まるトーク</span>を行ってもらいます。これらのトークの多くは、TED.comで無料で公開されています。これまでに、ビル・ゲイツ、アル・ゴア、エリザベス・ギルバート、ジェフ・ホーキンス、レイ・カーツワイル、新井紀子、伊藤穰一、石井菜穂子、筑波大学の卒業生であるジョン・マエダなどがTEDに登壇しています。
        </article>
        <br>
        <article v-if="$i18n.locale == 'en'">
          <span class="em">The annual TED Conference</span> takes place each spring in Vancouver, British Columbia. TED’s media initiatives include <span class="em">TED.com</span>, where new TED Talks are posted daily; <span class="em">the Open Translation Project</span>, which provides subtitles and interactive transcripts as well as translations from volunteers worldwide; the educational initiative <span class="em">TED-Ed</span>. TED has established the annual <span class="em">TED Prize</span>, where exceptional individuals with a wish to change the world get help translating their wishes into action; <span class="em">TEDx</span>, which supports individuals or groups in hosting local, self- organized TED-style events around the world, and the <span class="em">TED Fellows program</span>, helping world-changing innovators from around the globe to amplify the impact of their remarkable projects and activities.
        </article>
        <article v-if="$i18n.locale == 'ja'">
          <span class="em">TEDカンファレンス</span>は、毎年春にカナダ・バンクーバーで開催されています。TEDの取り組みには、毎日新しいTED Talksが掲載されるプラットフォーム<span class="em">TED.com</span>、世界中のボランティアが翻訳と文字起こしを行い字幕を提供する<span class="em">オープン・トランスレーション・プロジェクト</span>、教育分野における取り組み<span class="em">TED-Ed</span>などがあります。TEDは、世界を変えたいという願いを持つ優れた人々が行動を起こすことを支援する<span class="em">TED Prize</span>や、個人やグループが世界各地で開催するTEDスタイルのイベントを支援する<span class="em">TEDx</span>、世界を変えるイノベーターたちが、彼らの素晴らしいプロジェクトや活動の影響力を増幅させるための支援を行う<span class="em">TED Fellowsプログラム</span>などを毎年開催しています。
        </article>
      </section>
    </section>

    <section class="hero is-light">
      <section class="section">
        <div class="columns is-mobile is-multiline">
          <div class="column has-text-centered is-12-mobile is-4-tablet">
            <div>
              <p class="title is-size-1 has-text-primary"> 3600+</p>
              <p class="subtitle heading has-text-dark">Talks</p>           
            </div>
          </div>
          <div class="column has-text-centered is-6-mobile is-4-tablet">
            <div>
              <p class="title is-size-1 has-text-primary">116</p>
              <p class="subtitle heading has-text-dark">Languages</p>
            </div>
          </div>
          <div class="column has-text-centered is-6-mobile is-4-tablet">
            <div>
              <p class="title is-size-1 has-text-primary">1.5M</p>
              <p class="subtitle heading has-text-dark">Views per day</p>
            </div>
          </div>
        </div>
      </section>
    </section>

    <section class="hero" id="tedx">
      <section class="section">
        <h1 class="title is-0">{{ $t('about.tedx.title')}}</h1>
        <article v-if="$i18n.locale == 'en'">
          In the spirit of <span class="em">ideas worth spreading</span>, TEDx is a program of <span class="em">local, self-organized events</span> that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark <span class="em">deep discussion</span> and <span class="em">connection</span>. These local, self-organized events are branded TEDx, where <span class="em">x = independently organized TED event</span>. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to certain rules and regulations.)
        </article>
        <article v-if="$i18n.locale == 'ja'">
          TEDxは、<span class="em">価値あるアイデアを広める</span>という精神に基づいて、TEDのような体験を共有するために、<span class="em">地域や大学</span>で<span class="em">自主的なイベント</span>を開催するというプログラムです。TEDxイベントでは、TEDトークのビデオと登壇者によって、少人数のグループでの<span class="em">深い議論</span>と<span class="em">つながり</span>が生まれます。TEDカンファレンスはTEDxプログラムの総合的なガイダンスを提供していますが、私たちのイベントを含む個々のTEDxイベントは一定のルールと制限の下に自主的に組織されています。
        </article>
      </section>
    
    </section>

    <section class="hero bg-red">
      <section class="section">
        <div class="columns is-mobile is-multiline">
          <div class="column has-text-centered is-12-mobile is-4-tablet">
            <div>
              <p class="title is-size-1 has-text-light">100,000+ </p>
              <p class="subtitle heading has-text-dark">Talks</p>
            </div>
          </div>
          <div class="column has-text-centered is-6-mobile is-4-tablet">
            <div>
              <p class="title is-size-1 has-text-light">170+</p>
              <p class="subtitle heading has-text-dark">Countries</p>
            </div>
          </div>
          <div class="column has-text-centered is-6-mobile is-4-tablet">
            <div>
              <p class="title is-size-1 has-text-light"> 3000+</p>
              <p class="subtitle heading has-text-dark">Events every year</p>           
            </div>
          </div>
          
          <div class="column has-text-centered is-6-mobile is-3-tablet">
            <div>
            </div>
          </div>
        </div>
      </section>
    </section>


    <section class="hero is-black has-text-centered">
      <section class="section">
        <h1 class="title is-0">{{ $t('about.ted.watch')}}</h1>
      </section>
      <div class="hero-body has-text-centered">
        <div style="position:relative;height:0;padding-bottom:45vw;">
          <iframe class="video" src="https://embed.ted.com/talks/john_maeda_designing_for_simplicity" width="854" height="480" style="position: relative;" frameborder="0" scrolling="no" allowfullscreen></iframe>
          <br><br>
          <p class="">{{ $t('about.ted.event')}}</p>
          <p class="title">{{ $t('about.ted.talktitle')}}</p>
          <p class="subtitle">{{ $t('about.ted.speaker')}}</p>
          <a class="button is-rounded is-gradient" href="https://www.ted.com/talks">{{ $t('about.ted.watchmoreted')}}</a>
        </div>
        <br>
        <div style="position:relative;height:0;padding-bottom:45vw;">
          <iframe class="video" src="https://embed.ted.com/talks/takaharu_tezuka_the_best_kindergarten_you_ve_ever_seen" width="854" height="480" style="position: relative;" frameborder="0" scrolling="no" allowfullscreen></iframe>
          <br><br>
          <p class="">{{ $t('about.tedx.event')}}</p>
          <p class="title">{{ $t('about.tedx.talktitle')}}</p>
          <p class="subtitle">{{ $t('about.tedx.speaker')}}</p>
          <a class="button is-rounded is-gradient" href="https://www.ted.com/watch/tedx-talks">{{ $t('about.tedx.watchmoretedx')}}</a>
        </div>
        <!-- <Movie id="teaser" :vId='videoId4' :aPlay='autoplay'></Movie> -->
      </div>
    </section>
    <section class="section has-text-centered">
      <h1 class="title is-0">{{ $t('about.ted.listen')}}</h1>
      <div class="columns">
        <div class="column is-2">
          <img src="~/assets/others/TED_Talks_Podcast_Thumbnail_Audio_600px.png">
        </div>
        <div class="column is-5 has-text-centered">
          <iframe class="podcast" src="https://open.spotify.com/embed-podcast/show/1VXcH8QHkjRcTCEd88U3ti" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
        <div class="column is-5 has-text-centered">
          <iframe class="podcast" allow="autoplay *; encrypted-media *; fullscreen *" frameborder="0" style="overflow:hidden;background:transparent;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/jp/station/ted-talks/ra.1461369887"></iframe>
        </div>
      </div>
      <a class="button is-rounded is-gradient" href="https://www.ted.com/podcasts">{{ $t('about.ted.listenmore')}}</a>
    </section>
  </section>
</template>

<script>
import Movie from '~/components/Movie.vue'
export default {
  components: {
    Movie
  },
  data() {
    return {
      videoId1: 'd0NHOpeczUU',
      videoId2: 'JSP7GPU3Eic',
      videoId3: '-FOCpMAww28',
      videoId4: 'xHsXfmHaBUo',
    }
  }
}
</script>


<style lang="scss" scoped>
  iframe.podcast {
    width: 100%;
    max-width: 640px;
    height: 250px !important;
  }
  iframe.video {
    @media screen and (min-width: 769px) {
      width: 64vw;
      height: 36vw !important;
    }
    width: 100vw;
  }

  #ted {
    background: url("~@/assets/wallpapers/dot.png");
    background-repeat: no-repeat;
    background-size: cover;
  }
  #tedx {
    background: url("~@/assets/wallpapers/x.png");
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>