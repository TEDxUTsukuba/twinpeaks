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
    
    <section class="section">
      <h1 class="title is-0">{{ $t('about.tedx.title')}}</h1>
      <article>
        In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to certain rules and regulations.)
      </article>
        
      <div class="columns is-variable is-8">
        <div class="column nmp-dark">
          3600+ TEDx Events
        </div>
        <div class="column nmp-dark">
          170+ Countries
        </div>
        <div class="column nmp-dark">
          3,000+ Events per year
        </div>
        <div class="column nmp-dark">
         100,000+ talks in total
        </div>
      </div>
    </section>

    <section class="section">
      <h1 class="title is-0">{{ $t('about.ted.title')}}</h1>
        <article>
          TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference in California 30 years ago, TED has grown to support its mission with multiple initiatives. The two annual TED Conferences invite the world’s leading thinkers and doers to speak for 18 minutes or less. Many of these talks are then made available, free, at TED.com. TED speakers have included Bill Gates, Jane Goodall, Elizabeth Gilbert, Sir Richard Branson, Nandan Nilekani, Philippe Starck, Ngozi Okonjo-Iweala, Sal Khan and Daniel Kahneman.
        </article>
        <article>
          The annual TED Conference takes place each spring in Vancouver, British Columbia. TED’s media initiatives include TED.com, where new TED Talks are posted daily; the Open Translation Project, which provides subtitles and interactive transcripts as well as translations from volunteers worldwide; the educational initiative TED-Ed. TED has established the annual TED Prize, where exceptional individuals with a wish to change the world get help translating their wishes into action; TEDx, which supports individuals or groups in hosting local, self- organized TED-style events around the world, and the TED Fellows program, helping world-changing innovators from around the globe to amplify the impact of their remarkable projects and activities.
        </article>
      <nav class="level">
        <div class="level-item has-text-centered">
          <div>
            <p class="title is-size-1"> 3600+</p>
            <p class="heading">Talks</p>           
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="title is-size-1">116</p>
            <p class="heading">Languages</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="title is-size-1">18M</p>
            <p class="heading">Monthly Unique</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="title is-size-1">1.5M</p>
            <p class="heading">Views a day</p>
          </div>
        </div>
      </nav>
    </section>


    <section class="hero is-black has-text-centered">
      <section class="section">
        <h1 class="title is-0">{{ $t('about.tedandtedx.watch')}}</h1>
      </section>
      <div class="hero-body has-text-centered">
        <Movie id="teaser" :vId='videoId4' :aPlay='autoplay'></Movie>
      </div>
    </section>
    <section class="section has-text-centered">
      <h1 class="title is-0">{{ $t('about.tedandtedx.listen')}}</h1>
      <div class="columns">
        <div class="column is-2">
          <img src="~/assets/others/TED_Talks_Podcast_Thumbnail_Audio_600px.png">
        </div>
        <div class="column is-5 has-text-centered">
          <iframe src="https://open.spotify.com/embed-podcast/show/1VXcH8QHkjRcTCEd88U3ti" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
        <div class="column is-5 has-text-centered">
          <iframe allow="autoplay *; encrypted-media *; fullscreen *" frameborder="0" style="overflow:hidden;background:transparent;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/jp/station/ted-talks/ra.1461369887"></iframe>
        </div>
      </div>
      <a class="button is-rounded is-gradient" href="https://www.ted.com/podcasts">See more Podcasts</a>
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


<style scoped>
  iframe {
    width: 100%;
    max-width: 640px;
    height: 250px !important;
  }
</style>