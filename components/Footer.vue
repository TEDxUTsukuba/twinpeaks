<template>
 
    <!-- フッター -->
    <section class="hero has-background-dark">
      <div class="hero-body">
        <section class="section pb-4">
          <div class="columns is-variable is-6">
            <!-- 上段左側 -->
            <div class="column is-6-desktop is-6-tablet has-text-centered-mobile">
              <nuxt-link :to="localePath('/')">
                <figure class="image" style="width: 65%; min-width: 300px;">
                  <img src="~/assets/logo/u_bgblack_oneline.png" alt="Logo">
                </figure>
              </nuxt-link>
              <p class="mt-5 title is-size-4 is-size-5-mobile has-text-light has-text-centered-mobile has-text-weight-light">Spread Globally, Connect Locally.</p>            
            </div>
            <!-- 上段右側 -->
            <div class="column has-text-right py-4">
              <TsukubaScenery />
            </div>
          </div>
          <div class="columns is-centered is-vcentered reverse-row-order">
            <!-- 下段左側 -->
            <div class="column has-text-centered-mobile has-text-right">
              <a href="https://www.facebook.com/tedxutsukuba" target="_blank" class="has-text-primary mx-2">
                <iconFB style="width: 1.2rem;" />
              </a>
              <a href="https://www.instagram.com/tedxutsukuba" target="_blank" class="has-text-primary mx-2">
                <iconIG style="width: 1.2rem;" />
              </a>
              <a href="https://www.twitter.com/tedxutsukuba" target="_blank" class="has-text-primary mx-2">
                <iconTW style="width: 1.2rem;" />
              </a>            
              <a href="https://www.flickr.com/photos/146703506@N03/albums" target="_blank" class="has-text-primary mx-2">
                <iconFL style="width: 1.2rem;" />
              </a>            
            </div>
            <div class="column has-text-left has-text-grey-light has-text-centered-mobile">
              <p class="is-size-7">{{ $t('about.location.address') }}</p>
              <p class="is-size-7">contact&#64;tedxutsukuba.com</p>
            </div>
          </div>
          <hr class="has-background-grey mt-0 mb-2">
          <div class="columns reverse-row-order">
            <div class="column is-4 has-text-right-tablet has-text-centered-mobile pb-0">
              <p class="is-size-7 has-text-grey">&copy; TEDxUTsukuba 2022</p>
              <p itemprop="author" class="is-hidden">木下晴貴</p>
            </div>
            <div class="column is-8 has-text-left-tablet has-text-centered-mobile">
              <p class="has-text-grey is-size-7">
                This independent TEDx event is operated under license from TED.
              </p>
            </div>
            
            <!-- <div class="column is-8-desktop is-7-tablet has-text-left has-text-grey-light has-text-centered-mobile">  
              <nuxt-link :to="localePath('news')" class="has-text-white url is-size-7">{{ $t('news.title') }}</nuxt-link> |
              <nuxt-link :to="localePath('')" class="has-text-white url is-size-7">{{ $t('codeofconduct.title') }}</nuxt-link> |
              <nuxt-link :to="localePath('private')" class="has-text-white url is-size-7">{{ $t('2020.participance.pass.title') }}</nuxt-link>
            </div> -->
          </div>
        </section>
      </div>
    </section>

    <!-- <div class="wrap">
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
    </div> -->

  </section>
</template>

<script>
import iconIG from '@/assets/svg/instagram.svg'
import iconFB from '@/assets/svg/facebook.svg'
import iconTW from '@/assets/svg/twitter.svg'
import iconFL from '@/assets/svg/flickr.svg'
import iconNT from '@/assets/svg/note.svg'
import externalLink from '@/assets/svg/external-link-alt-solid.svg'
import TsukubaScenery from '@/assets/svg/tsukuba-scenery.svg'

export default {
  components: {
    iconIG, iconFB, iconTW, iconFL, iconNT, externalLink, TsukubaScenery
  },
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
  .section + .section {
    padding-top: 0 !important;
  }
</style>
