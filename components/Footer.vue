<template>
  <section id="wrapper" class="hero font-awesome">
    <div class="hero-body">    
        <section class="section has-text-centered">
        <h1 class="title is-3 has-text-centered">
            <span class="has-text-dark">{{ $t('social.title') }}</span>
          </h1>
          <a class="icon-circle fb" href="https://www.facebook.com/tedxutsukuba/" target="_blank" rel="noopener noreferrer">
            <!-- <font-awesome-icon :icon="['fab', 'facebook-square']" /> -->
            <iconFB alt="Facebook" style="width: 3rem;" />
          </a>
          <a class="icon-circle ig" href="https://www.instagram.com/tedxutsukuba/" target="_blank" rel="noopener noreferrer">
            <!-- <font-awesome-icon :icon="['fab', 'instagram']" /> -->
            <iconIG alt="Instagram" style="width: 3rem;" />
          </a>
          <a class="icon-circle tw" href="https://www.twitter.com/tedxutsukuba/" target="_blank" rel="noopener noreferrer">
            <!-- <font-awesome-icon :icon="['fab', 'twitter']" /> -->
            <iconTW alt="Twitter" style="width: 3rem;" />
          </a>
        </section>
        
        <section class="section has-text-centered">
          <h1 class="title is-3">
            <span class="has-text-dark">{{ $t('covid19-info.title') }}</span>
          </h1>
          <p class="is-size-7">{{ $t('covid19-info.description1')}}</p>
          
          <!-- <div>
            <img src="http://www.tsukuba.ac.jp/en/application/themes/tsukuba/images/logo_footer.png">
          </div> -->

          <div class="content">
            <b-collapse :open="false" position="is-bottom" aria-id="contentIdForA11y1">
              <a class="button is-gradient is-rounded" slot="trigger" slot-scope="props" aria-controls="contentIdForA11y1" style="margin: 3rem auto 0 auto;">
                  <!-- <b-icon :icon="!props.open ? 'menu-down' : 'menu-up'"></b-icon> -->
                  {{ !props.open ? $t('button.readmore') : $t('button.readless') }}
              </a>
              <br><br>
              <div class="column has-text-left">
                <h1 class="title is-4">{{ $t('covid19-info.org.title') }}</h1>
                <ul>
                  <li>{{ $t('covid19-info.org.s1') }}</li>
                  <li>{{ $t('covid19-info.org.s2') }}</li>
                  <li>{{ $t('covid19-info.org.s3') }}</li>
                  <li>{{ $t('covid19-info.org.s4') }}</li>
                  <li>{{ $t('covid19-info.org.s5') }}</li>
                </ul>
                <h1 class="title is-4">{{ $t('covid19-info.event.title') }}</h1>
                <ul>
                  <li>{{ $t('covid19-info.event.s1') }}</li>
                  <li>{{ $t('covid19-info.event.s2') }}</li>
                  <li>{{ $t('covid19-info.event.s3') }}</li>
                  <li>{{ $t('covid19-info.event.s4') }}</li>
                </ul>
                <br>
                <p class="is-size-7">{{ $t('covid19-info.description2') }}</p>
                <a class="button is-small is-rounded is-outlined" href="http://www.tsukuba.ac.jp/about/antidisaster/covid-19-list.html">{{ $t('covid19-info.link.university') }}</a>
                <a class="button is-small is-rounded is-outlined" href="https://www.city.tsukuba.lg.jp/shisei/1010123/index.html">{{ $t('covid19-info.link.city') }}</a>
                <a class="button is-small is-rounded is-outlined" href="https://www.pref.ibaraki.jp/shokorodo/chusho/shogyo/2020korona/guideline.html">{{ $t('covid19-info.link.prefecture') }}</a>
              </div>
            </b-collapse>
          </div>
      </section>

      <section class="hero has-background-black">
        <div class="hero-body">
          <section class="section">
            <div class="columns is-centered is-vcentered">
              <div class="column is-4-desktop is-6-tablet has-text-centered-mobile">
                <nuxt-link :to="localePath('/')">
                  <figure class="image" style="width: 100%; max-width: 75%;">
                    <logo />
                  </figure>
                </nuxt-link>
                <p class="is-size-7 has-text-grey" style="padding-top: 2rem;">
                  This independent TEDx event is operated under license from TED.
                </p>
                <a class="is-size-7 has-text-grey url" href="https://www.ted.com/about/programs-initiatives/tedx-program">About TEDx program <externalLink style="width: 0.75rem;"/></a>
              </div>

              <div class="column is-8-desktop is-6-tablet has-text-right has-text-centered-mobile">
                <h1 class="title is-size-5 is-size-5-mobile has-text-light">Spread Globally, Connect Locally.</h1>
                <span class="has-text-grey-light">
                  <p class="is-size-7">{{ $t('about.location.address') }}</p>
                  <p class="is-size-7">tedxutsukuba&#64;gmail.com</p>
                  <p class="is-size-7">&copy; TEDxUTsukuba 2020</p>
                </span>
              </div>
            </div>

            <div class="columns is-centered">
              <div class="column is-8-desktop is-8-tablet has-text-left has-text-centered-mobile">  
                <nuxt-link :to="localePath('/notice')" class="has-text-grey url is-size-7">{{ $t('notice.archive.title') }}</nuxt-link> |
                <nuxt-link :to="localePath('/code-of-conduct')" class="has-text-grey url is-size-7">{{ $t('codeofconduct.title') }}</nuxt-link> |
                <nuxt-link :to="localePath('/explore')" class="has-text-grey url is-size-7">{{ $t('2020.participance.pass.title') }}</nuxt-link>
              </div>

              <div class="sns column is-4-desktop is-5-tablet has-text-right has-text-centered-mobile">
                <a href="https://www.facebook.com/tedxtsukuba" target="_blank" rel="noopener noreferrer">
                  <iconFB alt="Facebook" class="icon" />
                </a>
                <a href="https://www.instagram.com/tedxutsukuba" target="_blank" rel="noopener noreferrer">
                  <iconIG alt="Instagram" class="icon" />
                </a>
                <a href="https://www.twitter.com/tedxutsukuba" target="_blank" rel="noopener noreferrer">
                  <iconTW alt="Twitter" class="icon" />
                </a>
                <a href="https://www.flic.kr/ps/3eCWpZ" target="_blank" rel="noopener noreferrer">
                  <iconFL alt="Flickr" class="icon" />
                </a>
                <a href="https://www.note.com/tedxutsukuba" target="_blank" rel="noopener noreferrer"> 
                  <iconNT alt="note" class="icon" />
                </a>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>

    <div class="wrap">
      <nuxt-link to="./partners">
        <ul class="slideshow">
          <li class="slideshow-content" v-for="(partner, index) in partnerList" :key="index">
            <figure class="">
              <img :src="getJsonImgUrl(partner.id)" :alt="partner.name">
            </figure>
          </li>
        </ul>
        <ul class="slideshow">
          <li class="slideshow-content" v-for="(partner, index) in partnerList" :key="index">
            <figure class="">
              <img :src="getJsonImgUrl(partner.id)" :alt="partner.name">
            </figure>
          </li>
        </ul>
      </nuxt-link>
    </div>

  </section>
</template>

<script>
import logo from '@/assets/logo/u_black.svg'
import iconIG from '@/assets/svg/instagram.svg'
import iconFB from '@/assets/svg/facebook.svg'
import iconTW from '@/assets/svg/twitter.svg'
import iconFL from '@/assets/svg/flickr.svg'
import iconNT from '@/assets/svg/note.svg'
import externalLink from '@/assets/svg/external-link-alt-solid.svg'

export default {
  components: {
    logo, iconIG, iconFB, iconTW, iconFL, iconNT, externalLink
  },
  methods: {
    getJsonImgUrl(value) {
      // return require(`~/assets/partners/2020/carousel_${value}.jpg`)
      return require(`~/assets/partners/2020/logo/${value}.jpg`)
    }
  },
  computed: {
    partnerList(){
      return this.$store.getters [
        'partner/findPartnersByExceptionCategory'
      ]("sakura")
    }  
  }  
}
</script>


<style lang="scss" scoped>
  .sns-icon {
    font-size: 24px;
    margin: 5px;
  }
  .url {
    a, nuxt-link {
      color: #bec1c3;
      margin-right: 15px;
    }
  }
  figure.image {
    @media screen and (max-width: 768px) {
      margin: 0 auto;  
      padding: 0 10vw;
    }
  }
  .sns {
    a {
      color: white;
    }
    margin-right: 0;
    .icon {
      width: 3rem;
    }
  }
</style>


<!-- What is TEDx?<br>
In the spirit of ideas worth spreading, TED has created a program called TEDx. TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. Our event is called TEDx[name], where x = independently organized TED event. At our TEDx[name] event, TED Talks video and live speakers will combine to spark deep discussion and connection in a small group. The TED Conference provides general guidance for the TEDx program, but individual TEDx events, including ours, are self-organized. -->
