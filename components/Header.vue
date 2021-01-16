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
      <!-- <b-navbar-dropdown label="Events" class="is-hoverable">
        <b-navbar-item tag="router-link" :to="{ path: '/events/2020' }">
          2020 JIJIMUGE
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/events/2019' }">
          2019 CoPhilAction
        </b-navbar-item>
      </b-navbar-dropdown> -->
      <b-navbar-item class="normal-category" tag="nuxt-link" :to="localePath('/events/2020')">
        TEDxUTsukuba 2020
      </b-navbar-item>
      <b-navbar-item class="normal-category" tag="nuxt-link" :to="localePath('/talks')">
        <span v-if="$i18n.locale !== 'en'">トーク</span>
        <span v-if="$i18n.locale == 'en'">Talks</span>
      </b-navbar-item>
      <b-navbar-item class="normal-category" tag="nuxt-link" :to="localePath('/partners')">
        <span v-if="$i18n.locale !== 'en'">パートナー</span>
        <span v-if="$i18n.locale == 'en'">Partners</span>
      </b-navbar-item>
      <b-navbar-item class="normal-category" tag="nuxt-link" :to="localePath('/about')">
        <span v-if="$i18n.locale !== 'en'">私たちについて</span>
        <span v-if="$i18n.locale == 'en'">About us</span>
      </b-navbar-item>
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
    color: lightgray !important;
  }
  .normal-category:hover {
    background-color: red !important;
  }
  a:visited {
    color: white;
  }
</style>
