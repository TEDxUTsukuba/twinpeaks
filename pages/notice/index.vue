<template>
  <section id="wrapper-dark">
    <section class="section">
      <div class="nmp-card has-text-centered">
        <h1 class="title is-1 is-spaced">{{ $t('notice.archive.title') }}</h1>
        <h1 class="subtitle has-text-grey-light">{{ $t('notice.archive.subtitle') }}</h1>
      </div>
      <Flip
        :title = "$t('notice.left-top.title')"
        :description = "$t('notice.left-top.description')"
        :detail = "$t('notice.left-top.detail')"
        :link = "$t('notice.left-top.link')"
        :date = "$t('notice.left-top.date')"
        imageUrl = ""
      />
    </section>
  </section>
</template>

<script>
import Flip from '~/components/Flip'
export default {
  components: {
    Flip
  },
}
</script>