<template>
  <b-navbar class="is-fixed-top is-black is-spaced" id="navbar-top">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="localePath('/')">
        <img  
          src="~/assets/logo/u_bgblack_oneline.png"
          alt="TEDxUTsukuba"
        >
      </b-navbar-item>
    </template>
    <template slot="end" v-if="!this.$route.path.includes('private')">
      <b-navbar-dropdown collapsible :label="$t('header.events.parent')" class="is-hoverable">
        <b-navbar-item v-for="item in conferences" :key="item.path" tag="router-link" :to="{ path: localePath('/conferences/' + item.path)}">
          {{ item.name }}
        </b-navbar-item>
      </b-navbar-dropdown>
      <b-navbar-item class="normal-category" tag="nuxt-link" :to="localePath('/talks')">
        {{ $t('header.talks.item') }}
      </b-navbar-item>
      <b-navbar-item class="normal-category" tag="nuxt-link" :to="localePath('/partners')">
        {{ $t('header.partners.item') }}
      </b-navbar-item>
      <!-- <b-navbar-item class="normal-category" tag="nuxt-link" :to="localePath('/about/utsukuba')">
        {{ $t('header.aboutus.child2') }}
      </b-navbar-item> -->
      <b-navbar-dropdown collapsible :label="$t('header.aboutus.parent')" class="is-hoverable">
        <b-navbar-item tag="router-link" :to="{ path: localePath('/about/ted-and-tedx') }">
          {{ $t('header.aboutus.child1') }}
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: localePath('/about/utsukuba') }">
          {{ $t('header.aboutus.child2') }}
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: localePath('/about/member') }">
          {{ $t('header.aboutus.child3') }}
        </b-navbar-item>
      </b-navbar-dropdown>
      <b-navbar-item tag="div">
        <div class="buttons is-right">
          <nuxt-link class="button is-info is-outlined" v-if="$i18n.locale !== 'en'" :to="switchLocalePath('en')"><i class="mdi mdi-translate mr-1" />English</nuxt-link>
          <nuxt-link class="button is-danger is-outlined" v-if="$i18n.locale !== 'ja'" :to="switchLocalePath('ja')"><i class="mdi mdi-translate mr-1" />日本語</nuxt-link>
          <!-- <a class="button is-info" v-if="$i18n.locale !== 'en'" :href="switchLocalePath('en')"><i class="mdi mdi-translate" style="margin-right: 0.25rem;" />English</a>
          <a class="button is-danger" v-if="$i18n.locale !== 'ja'" :href="switchLocalePath('ja')"><i class="mdi mdi-translate" style="margin-right: 0.25rem;" />日本語</a> -->
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

<script>
import { request, gql } from '~/lib/datocms'

export default {
  data(){
    return {
      conferences: [
        {
          path: '2022',
          name: '2022 LIKE AND SEEK'
        },
        {
          path: '2021',
          name: '2021 The World is a Playground'
        },
        {
          path: '2020',
          name: '2020 JIJIMUGE'
        },
        {
          path: '2019',
          name: '2019 CoPhilAction'
        },
        {
          path: '2017',
          name: '2017 moving'
        }
      ]
    }
  },
  // props: {
  //   'headerColor': {
  //     type: String,
  //     required: true
  //   }
  // },
  created() {
    if (this.$route.path.includes('private')) this.headerColor = 'darksilver'
    else this.headerColor = 'red'
  },
  watch: {
    '$route': function(to, from) {
      if (to.path.includes('private')) this.headerColor = 'darksilver'
      else this.headerColor = 'red'
    }
  }
}
</script>

<style lang="scss">
  .navbar-item, .navbar-link {
    font-weight: bold;
  }
</style>
