<template>
  <section id="wrapper" class="hero font-awesome">
    <div class="hero-body">    
        <section class="section has-text-centered">
        <h1 class="title is-3 has-text-centered">
            <span class="has-text-dark">{{ $t('social.title') }}</span>
          </h1>
          <a class="icon-circle fb" href="https://www.facebook.com/tedxutsukuba/">
            <!-- <font-awesome-icon :icon="['fab', 'facebook-square']" /> -->
            <iconFB alt="Facebook" style="width: 3rem;" />
          </a>
          <a class="icon-circle ig" href="https://www.instagram.com/tedxutsukuba/">
            <!-- <font-awesome-icon :icon="['fab', 'instagram']" /> -->
            <iconIG alt="Instagram" style="width: 3rem;" />
          </a>
          <a class="icon-circle tw" href="https://www.twitter.com/tedxutsukuba/">
            <!-- <font-awesome-icon :icon="['fab', 'twitter']" /> -->
            <iconTW alt="Twitter" style="width: 3rem;" />
          </a>
        </section>
        
        <section class="section has-text-centered">
          <h1 class="title is-3">
            <span class="has-text-dark">{{ $t('covid19-info.title') }}</span>
          </h1>
          <p class="is-size-7">{{ $t('covid19-info.description')}}</p>
          
          <!-- <div>
            <img src="http://www.tsukuba.ac.jp/en/application/themes/tsukuba/images/logo_footer.png">
          </div> -->

          <div class="content">
            <b-collapse :open="false" position="is-bottom" aria-id="contentIdForA11y1">
              <a class="button is-gradient is-rounded" slot="trigger" slot-scope="props" aria-controls="contentIdForA11y1" style="margin: 3rem auto;">
                  <!-- <b-icon :icon="!props.open ? 'menu-down' : 'menu-up'"></b-icon> -->
                  {{ !props.open ? $t('button.readmore') : $t('button.readless') }}
              </a>
              <br><br>
              <div class="column has-text-left">
                <h1 class="title is-4">団体の活動形態</h1>
                <ul>
                  <li>3密を避けた会議やリモートワークを実施しています。</li>
                  <li>日毎に団体メンバーの体温を管理し、体調の優れない者の活動は自粛しています。</li>
                  <li>活動前の機材の消毒や手足の消毒、マスクの着用を行っています。</li>
                  <li>スピーカー・パフォーマー・パートナーの皆さまとは上記に留意しコンタクトを取っています。</li>
                </ul>
                <h1 class="title is-4">イベントの開催形態</h1>
                <ul>
                  <li>例年の対面式のイベントから、オンラインの配信に変更しました。</li>
                  <li>撮影および配信会場では、換気を徹底し十分な空間を確保します。</li>
                  <li>一度に同じ場所に多くの関係者が集まらないよう、時間を分けて作業を行います。</li>
                  <li>スピーカーとのセッション等、マスクを外す必要のある場面ではアクリル板による仕切りを設置します。</li>
                </ul>
                <br>
                <p class="is-size-7">今後もTEDxUTsukubaは、感染拡大の抑止と関係者の安全確保を最優先に、政府や自治体の方針も踏まえながら、追加の対応を検討・実施してまいります。筑波大学および茨城県・つくば市の感染対策も合わせてご確認ください。</p>
                <a class="button is-small is-rounded is-outlined" href="http://www.tsukuba.ac.jp/about/antidisaster/covid-19-list.html">{{ $t('covid19-info.link.university') }}</a>
                <a class="button is-small is-rounded is-outlined" href="https://www.city.tsukuba.lg.jp/shisei/1010123/index.html">{{ $t('covid19-info.link.city') }}</a>
                <a class="button is-small is-rounded is-outlined" href="https://www.pref.ibaraki.jp/shokorodo/chusho/shogyo/2020korona/guideline.html">{{ $t('covid19-info.link.prefecture') }}</a>
              </div>
            </b-collapse>

          </div>
      </section>
    </div>
    <div>
      <section class="hero has-background-black">
        <div class="hero-body">
          <section class="section">
            <div class="columns is-centered">
              <div class="column is-3-desktop is-5-tablet">
                <nuxt-link :to="localePath('/')">
                  <figure class="image">
                    <logo />
                  </figure>
                </nuxt-link>
              </div>
              <div class="column is-9-desktop is-7-tablet has-text-right has-text-centered-mobile">
                <h1 class="title is-3 is-size-5-mobile has-text-light">Spread Globally, Connect Locally.</h1>
                <span class="is-size-7-mobile has-text-grey-light">
                  <p>{{ $t('about.location.address') }}</p>
                  <p>tedxutsukuba&#64;gmail.com</p>
                  <p>&copy; TEDxUTsukuba 2020</p>
                </span>
              </div>
            </div>
            <div class="columns is-centered">
              <div class="url column is-8-desktop is-8-tablet has-text-left has-text-centered-mobile">
                <p class="is-size-7 has-text-grey-light">
                  This independent TEDx event is operated under license from TED.
                </p>
                <!-- <a href="">Media Relations</a> -->
                <!-- <a href="">Privacy Policy</a> -->
                <!-- <a href="">Code of Conduct</a> -->
                <a class="is-size-7" href="https://www.ted.com/about/programs-initiatives/tedx-program">About TEDx program <externalLink style="width: 0.75rem;"/></a>
              </div>
              <div class="sns column is-4-desktop is-5-tablet has-text-right has-text-centered-mobile">
                <a href="https://www.facebook.com/tedxtsukuba">
                  <iconFB alt="Facebook" class="icon" />
                </a>
                <a href="https://www.instagram.com/tedxutsukuba">
                  <iconIG alt="Instagram" class="icon" />
                </a>
                <a href="https://www.twitter.com/tedxutsukuba">
                  <iconTW alt="Twitter" class="icon" />
                </a>
                <a href="https://www.flic.kr/ps/3eCWpZ">
                  <iconFL alt="Flickr" class="icon" />
                </a>
                <a href="https://www.note.com/tedxutsukuba">
                  <iconNT alt="note" class="icon" />
                </a>
              </div>
            </div>
          </section>
        </div>
      </section>
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
  }  
}
</script>


<style lang="scss" scoped>
  .sns-icon {
    font-size: 24px;
    margin: 5px;
  }
  .url {
    a {
      color: #bec1c3;
      margin-right: 15px;
    }
  }
  figure.image {
    @media screen and (max-width: 768px) {
      padding: 0 20vw;
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
