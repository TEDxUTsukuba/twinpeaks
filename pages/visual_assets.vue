<template>
  <section id="wrapper-dark">
    <section class="section is-halfheight has-text-centered">
      <i class="mdi mdi-palette has-text-primary is-size-1" /> 
      <h1 class="title is-1 is-spaced">{{ $t('visual_assets.title' )}}</h1>
      <h1 class="subtitle has-text-grey-light">{{ $t('visual_assets.subtitle')}}</h1>
    </section>
    <section class="section">
      <p class="is-family-narrow has-text-primary">Organization Name & Description</p>
      <h2 class="title is-size-3 mb-6">We are TEDxUTsukuba.</h2>
      <p class="mb-6 has-text-grey-lighter">
          TEDxUTsukuba は、すべて半角の英字で表記し、大文字で <strong>TED</strong> 、小文字で <strong>x</strong> 、その後ろに筑波大学(University of Tsukuba)を示す <strong>UTsukuba</strong> が続きます。単語の間に空白(スペース)は入りません。何卒お間違えのないよう、お願い申し上げます。
        <br><br>
          また、省略・改変は禁止されています。特に <strong>TEDxUTsukuba を省略して TED や TEDx と表記すること</strong>は、TEDおよびTEDxプログラム、他のTEDxイベントとの混同の恐れがあるため、TED本部より固く禁じられております。
      </p>
      <p class="has-text-grey-lighter">
        Our organization name should be written as <strong>TEDxUTsukuba</strong> with the <strong>TED</strong> capitalized, <strong>x</strong> in lowercase, and attached as all one word to <strong>UTsukuba</strong>, which is representing the University of Tsukuba. 
        <br><br>
        Any abbreviations and variations are not allowed. You should always refer to our event as <strong>TEDxUTsukuba</strong>, not simply <strong>TEDx</strong> or <strong>TED</strong>. This will avoid significant confusion with TED, TEDx programs, and other TEDx events.  
      </p>
    </section>
      
    <section class="section has-text-light">
      <p class="is-family-narrow has-text-primary">Logo</p>
      <h2 class="title is-size-3 mb-6">Logo is like a face. </h2>
      <p class="has-text-grey-lighter mb-4">ロゴは必ず本ウェブサイトよりダウンロードしたものをご利用ください。改変・複製は禁止しています。<br><br>なお、TEDxUTsukubaを表すロゴとして TED および TEDx の部分を単独で使用することはできません。<br><br>
      また、文字色と背景色の組み合わせに条件がございます。詳しくは下記をご覧ください。</p>
      <div class="mb-6 has-text-grey-light columns is-multiline">
        <div class="column is-4 p-6 has-text-centered">
          <bgwhite class="has-background-white p-4" />
          <p class="is-family-monospace mb-4 is-size-7">u_bgblack_oneline.svg</p>
          <p>背景色が <span class="tag is-dark is-family-monospace is-family-monospace">#ffffff</span>(白) の場合のみご利用ください。<br>Allowed only if background color is <span class="tag is-dark is-family-monospace">#ffffff</span>(white).</p>
        </div>
        <div class="column is-4 p-6 has-text-centered">
          <bgblack class="has-background-black p-4" />
          <p class="is-family-monospace mb-4 is-size-7">u_bgblack_oneline.svg</p>
          <p>背景色が黒*の場合のみご利用ください。<br>Allowed only if background color is black*.</p>
        </div>
        <div class="column is-4 p-6 has-text-centered">
          <allwhite class="has-background-black p-4" />
          <p class="is-family-monospace mb-4 is-size-7">u_bgblack_oneline.svg</p>
          <p>背景色が黒*または <span class="tag is-dark is-family-monospace">#ff0000</span>(赤)の場合のみご利用ください。<br>Allowed only if background color is black* or <span class="tag is-dark is-family-monospace">#ff0000</span>(red).</p>
        </div>
      </div>
      <p class="has-text-grey-lighter mb-4">上記以外の背景色ではご利用いただけません。*黒に関しては、濃い灰色も許容しています。</p>
      <p class="has-text-grey-lighter mb-3">こちらからダウンロードしてご利用ください。</p>
      <a href="https://drive.google.com/drive/folders/1cDHRfPqa_dv8FL3RqcDG44fQ2qVFhqBb?usp=sharing" class="button is-gradient is-rounded" target="_blank">Download</a>

    </section>

    <section class="section has-text-lighter">
      <p class="is-family-narrow has-text-primary">Image</p>
      <h2 class="title is-size-3 mb-6">Seduce your audience.</h2>
      <div class="mb-6 has-text-grey-lighter">
        準備中です。
      </div>
    </section>

    <section class="section mb-6 has-text-lighter">
      <p>ご不明な点がありましたら、遠慮なく下記連絡先までご連絡ください。<br>Contact us if you have any concerns.</p>
      <p>tedxutsukuba[at]gmail.com</p>
    </section>
  </section>
</template>

<script>
import bgwhite from '~/assets/logo/u_bgwhite_oneline.svg'
import bgblack from '~/assets/logo/u_bgblack_oneline.svg'
import allwhite from '~/assets/logo/u_allwhite_oneline.svg'

export default {
  components: {
    bgwhite, bgblack, allwhite
  },
  methods: {
    openWindow(param) {
      window.open()
    }
  }
}
</script>

<style scoped>
strong {
  color: #fff;
}
</style>