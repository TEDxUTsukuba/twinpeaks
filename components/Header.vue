<template>
  <b-navbar class="is-fixed-top is-spaced is-black">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="localePath('/')">
        <img
          src="~/assets/logo.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        >
        <!-- https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png -->
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-dropdown :label="$t('header.events.parent')" class="is-hoverable">
        <b-navbar-item tag="router-link" :to="{ path: '/events/2020' }">
          {{ $t('header.events.child1') }}
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/events/2019' }">
          {{ $t('header.events.child2') }}
        </b-navbar-item>
      </b-navbar-dropdown>
      <!-- <b-navbar-item class="normal-category" tag="nuxt-link" :to="localePath('/events/2020')">
        {{ $t('header.events.child1') }}
      </b-navbar-item> -->
      <b-navbar-item class="normal-category" tag="nuxt-link" :to="localePath('/talks')">
        {{ $t('header.talks.item') }}
      </b-navbar-item>
      <b-navbar-item class="normal-category" tag="nuxt-link" :to="localePath('/partners')">
        {{ $t('header.partners.item') }}
      </b-navbar-item>
      <!-- <b-navbar-item class="normal-category" tag="nuxt-link" :to="localePath('/about/utsukuba')">
        {{ $t('header.aboutus.child2') }}
      </b-navbar-item> -->
      <b-navbar-dropdown :label="$t('header.aboutus.parent')" class="is-hoverable">
        <b-navbar-item tag="router-link" :to="{ path: '/about/ted-and-tedx' }">
          {{ $t('header.aboutus.child1') }}
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/about/utsukuba' }">
          {{ $t('header.aboutus.child2') }}
        </b-navbar-item>
      </b-navbar-dropdown>
      <b-navbar-item tag="div">
        <div class="buttons">
          <nuxt-link class="button is-info" v-if="$i18n.locale !== 'en'" :to="switchLocalePath('en')">English</nuxt-link>
          <nuxt-link class="button is-danger" v-if="$i18n.locale !== 'ja'" :to="switchLocalePath('ja')">日本語</nuxt-link>
        </div>
      </b-navbar-item>
      <!-- <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-white">
            <strong>JP</strong>
          </a>
          <a class="button is-white is-outlined">
            <strong>EN</strong>
          </a>
        </div>
      </b-navbar-item> -->
    </template>
  </b-navbar>
</template>

<style lang="scss" scoped>
  .navbar-item, .navbar-link {
    font-weight: bold;
    font-size: 125%;
    // color: lightgray !important;
  }
  .normal-category:hover {
    background-color: red !important;
  }
  a:visited {
    // color: white;
  }
</style>
