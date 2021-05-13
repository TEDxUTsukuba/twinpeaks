<template>
  <section id="wrapper-dark" class="hero is-fullheight">
    <div class="hero-body has-text-centered">
      <div class="container" style="padding: 0 5vw;">
        <i class="mdi mdi-emoticon-sad-outline" style="font-size: 8rem; color: white;"/>
        <h1 class="has-text-weight-light has-text-white is-size-2" v-if="$i18n.locale == 'en'">Page Not Found</h1>
        <h1 class="has-text-weight-light has-text-white is-size-2" v-if="$i18n.locale == 'ja'">お探しのページは見つかりません。</h1>
        <br>
        <p v-if="$i18n.locale == 'en'">
          We're sorry, we can't find the page you're looking for. It might have been removed, changed names, or is otherwise unavailable. <br>If you typed the URL directly, check your spelling and capitalization. 
        </p>
        <p v-if="$i18n.locale == 'ja'">
          ご不便をおかけして申し訳ございません。お探しのページは削除あるいは名前が変更されたか、ご利用いただけない可能性があります。<br>URLを直接入力された場合は、正しく入力されているかを再度ご確認ください。
        </p>
        <br>
        <button onclick="history.back();" class="button is-rounded is-large is-gradient">{{ $t('button.back')}}</button>
      </div>
    </div>
    <div class="hero-foot has-text-centered">
      <p style="margin-bottom: 5vh;">Need a little break? Watch <a href="https://youtu.be/8S0FDjFBj8o" target="_blank" rel="noopener noreferrer">this</a></p>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'headeronly',
  props: [
    'error'
  ],
  head () {
    return {
      title: 'Page Not Found | TEDxUTsukuba',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'The page you\'re looking for doesn\'t exist or unavailable.' }
      ]
    }
  }
}
</script>