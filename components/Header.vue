<template>
  <b-navbar class="is-fixed-top is-spaced is-red" id="navbar-top">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="localePath('/')">
        <img  
          src="~/assets/logo/u_allwhite_oneline.png"
          alt="TEDxUTsukuba Logo"
        >
      </b-navbar-item>
    </template>
    <template slot="end" v-if="!this.$route.path.includes('private')">
      <b-navbar-dropdown collapsible :label="$t('header.events.parent')" class="is-hoverable">
        <b-navbar-item tag="router-link" :to="{ path: localePath('/conferences/2022') }">
          2022
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: localePath('/conferences/2020') }">
          2020 JIJIMUGE
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: localePath('/conferences/2019') }">
          2019 CoPhilAction
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: localePath('/conferences/2017') }">
          2017 moving
        </b-navbar-item>
        <!-- <b-navbar-item tag="router-link" :to="{ path: localePath('/events/') }">
          {{ $t('header.events.listing') }}
        </b-navbar-item> -->
      </b-navbar-dropdown>
      <!-- <b-navbar-item class="normal-category" tag="nuxt-link" :to="localePath('/events/2020')">
        {{ $t('header.events.child1') }}
      </b-navbar-item> -->
      <b-navbar-item class="normal-category" tag="nuxt-link" :to="localePath('/talks')">
        {{ $t('header.talks.item') }}
      </b-navbar-item>
      <!-- <b-navbar-item class="normal-category" tag="nuxt-link" :to="localePath('/articles')">
        {{ $t('header.articles.item') }}
      </b-navbar-item> -->
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
      </b-navbar-dropdown>
      <b-navbar-item tag="div">
        <div class="buttons is-right">
          <nuxt-link class="button is-white is-outlined" v-if="$i18n.locale !== 'en'" :to="switchLocalePath('en')"><i class="mdi mdi-translate mr-1" />English</nuxt-link>
          <nuxt-link class="button is-white is-outlined" v-if="$i18n.locale !== 'ja'" :to="switchLocalePath('ja')"><i class="mdi mdi-translate mr-1" />日本語</nuxt-link>
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
export default {
  data(){
    return {
    
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
  },
  methods: {
    isCountdown() {
      const month = new Date().getMonth()+1
      const date = new Date().getDate()
      // console.log(month, date)
      // const eventDate 
    }
  }
}
</script>

<style lang="scss">
  .navbar-burger {
    color: #fff;
  }
  .navbar-menu {
    background-color: #c6251a;
  }
  .navbar-item, .navbar-link {
    font-weight: bold;
    color: #fff;
  }
  .navbar-link:not(.is-arrowless)::after {
    border-color: #fff;
  }
  .navbar-link:hover {
    background-color: #E62B1E !important;
    color: #fff !important;
  }
  .navbar-item.normal-category:hover {
    background-color: #E62B1E !important;
    color: #fff !important;
  }
  .navbar-link.is-active {
    background-color: #E62B1E !important;
    color: #fff !important;
  }
  .navbar-item.nuxt-link-exact-active.nuxt-link-active:hover {
    background-color: #E62B1E !important;
    color: #fff !important;
  }
  .navbar.is-darksilver {
    background-color: #90a4ae !important;
  }
  .navbar.is-red {
    background-color: #c6251a !important;
  }
  .navbar-dropdown {
    background-color: #c6251a !important;
    .navbar-item {
      color: #fff !important;
      &:hover {
        background-color: #E62B1E !important;
      }
    }
  }
</style>
