<template>
  <section class="font-awesome">
    <h1 class="title textoverflow">TEDxUTsukuba 2020<br>CoPhilAction</h1>
    <img id="top" src = "~/assets/banner/2019.jpg" />
    <section class="hero is-large is-black">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1 has-text-centered">
            Talks
          </h1>
          <TalkDetails year="2019" />
        </div>
      </div>
      <!--
      <div　v-for = 'sp in speakers' :key = 'sp.id'>
        <h1>{{ sp.title }}</h1>
      </div>
       -->
    </section>

    <section class="hero is-large is-white">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1 has-text-centered">
            Workshop
          </h1>
        </div>
      </div>
    </section>

    <section class="hero is-large">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1 has-text-centered">
            Performance
          </h1>
        </div>
      </div>
    </section>

    <section class="hero is-large" >
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1 has-text-centered">
            Concept
          </h1>
          <h1 class="title is-2 has-text-centered">
            CoPhilAction
          </h1>
          <article>
            Se et enim senserit. Ubi anim occaecat quibusdam. Quo export praetermissum, o hic concursionibus ne nescius a arbitror si proident tempor legam quo esse iis quid an do quorum iudicem do offendit tamen quis iudicem veniam est non eram cillum a constias, nam velit voluptatibus. Occaecat ita quis, mentitum sunt proident vidisse.Ita vidisse ut admodum ab doctrina est anim iudicem te fore e admodum, eu anim mentitum admodum ut probant irure consequat commodo ut noster arbitror sed quid dolor, multos officia in despicationes, e probant ad occaecat. Nisi mentitum litteris ita illum nescius fidelissimae se sint ullamco et export malis an ubi magna sint labore incurreret, deserunt o deserunt, e magna si eram iis an irure firmissimum, nulla e officia. Ipsum sed quibusdam eu sint nam hic fugiat imitarentur, ullamco magna nam deserunt efflorescere, consequat a nisi. Mentitum sint nostrud o summis voluptate comprehenderit, proident sed cupidatat, ne aute appellat, nostrud se quorum, tamen ex ex quid doctrina, aliqua incurreret singulis ut o malis nulla ea pariatur.
          </article>
        </div>
      </div>
    </section>

    <section class="hero is-large">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1 has-text-centered">
            Attendee's voice
          </h1>
          <div class="tile is-ancestor">
            <div class="tile is-vertical is-8">
              <div class="tile">
                <div class="tile is-parent">
                  <article class="tile is-child notification">
                    <p class="title is-2">
                      <font-awesome-layers class="fa-lg fa-pull-left" style="margin-right: 20px;">
                        <font-awesome-icon :icon="['fas', 'quote-left']" style="color: red;" />
                      </font-awesome-layers>
                      A day full of discoveries for all of us to share.
                    </p>
                    <p class="subtitle">20代 学生</p>
                  </article>

                </div>
                <div class="tile is-parent">
                  <article class="tile is-child notification is-black">
                    <p class="title is-2">
                      <font-awesome-layers class="fa-lg fa-pull-left" style="margin-right: 20px;">
                        <font-awesome-icon :icon="['fas', 'quote-left']" style="color: red;" />
                      </font-awesome-layers>
                      A day full of discoveries for all of us to share.
                    </p>
                  </article>
                </div>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child notification">
                  <p class="title is-2">
                    <font-awesome-layers class="fa-lg fa-pull-left" style="margin-right: 20px;">
                      <font-awesome-icon :icon="['fas', 'quote-left']" style="color: red;" />
                    </font-awesome-layers>
                    A day full of discoveries for all of us to share.
                  </p>
                </article>
              </div>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child notification" style="background-color: red;">
                <p class="title is-2 has-text-white">
                  <font-awesome-layers class="fa-lg fa-pull-left" style="margin-right: 20px;">
                    <font-awesome-icon :icon="['fas', 'quote-left']" />
                  </font-awesome-layers>
                  A day full of discoveries for all of us to share.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="hero is-large">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1 has-text-centered">
            About
          </h1>
        </div>
      </div>
    </section>

          <!-- <a :href="`http://localhost:3000/_nuxt/assets/speakers/2019/sp_2019_1.jpg`">hey</a> -->
  </section>
</template>

<script>
    import Events from '~/components/Events.vue'
    import TalkDetails from '~/components/TalkDetails.vue'

    export default {
      components: {
        Events, TalkDetails
      },
      data(){
        return {
          speakers: [
            { id:1, title: "私は靴を履かないバーテンダー", name: "松島壮志", url: '/_nuxt/assets/speakers/2019/sp_2019_1.jpg' },
            { id:2, title: "私は靴を履かないバーテンダー", name: "山田玲司", url: '/_nuxt/assets/speakers/2019/sp_2019_2.jpg' },
            { id:3, title: "私は靴を履かないバーテンダー", name: "Leonid Dimaano / Annet Nakkazi", url: '/_nuxt/assets/speakers/2019/sp_2019_3-1.jpg' },
            { id:4, title: "私は靴を履かないバーテンダー", name: "Carol Inugai Dixon", url: '/_nuxt/assets/speakers/2019/sp_2019_4.jpg' }
          ],
          topImg: require(`~/assets/speakers/2019/sp_2019_1.jpg`)
        }
      }
    }
</script>

<style scoped>
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
.is-red {
  background-color: red;
  color: white;
}
</style>
