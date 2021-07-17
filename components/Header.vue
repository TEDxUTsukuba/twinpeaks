<template>
  <b-navbar :class="`is-fixed-top is-spaced is-${headerColor}`" id="navbar-top">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="localePath('/')">
        <img  
          src="~/assets/logo/u_bgblack_oneline.png"
          alt="TEDxUTsukuba Logo"
        >
      </b-navbar-item>
      <b-navbar-item v-if="this.$route.path.includes('private')">
        <span class="tag has-background-red is-medium has-text-white">Private</span>
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item>
        <span class="is-size-7 has-text-grey">{{ isCelebration() }}</span>
      </b-navbar-item>
    </template>
    <template slot="end" v-if="!this.$route.path.includes('private')">
      <b-navbar-dropdown collapsible :label="$t('header.events.parent')" class="is-hoverable">
        <b-navbar-item tag="router-link" :to="{ path: localePath('/conferences/2020') }">
          {{ $t('header.events.2020') }}
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: localePath('/conferences/2019') }">
          {{ $t('header.events.2019') }}
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: localePath('/events/') }">
          {{ $t('header.events.listing') }}
        </b-navbar-item>
      </b-navbar-dropdown>
      <!-- <b-navbar-item class="normal-category" tag="nuxt-link" :to="localePath('/events/2020')">
        {{ $t('header.events.child1') }}
      </b-navbar-item> -->
      <b-navbar-item class="normal-category" tag="nuxt-link" :to="localePath('/talks')">
        {{ $t('header.talks.item') }}
      </b-navbar-item>
      <b-navbar-item class="normal-category" tag="nuxt-link" :to="localePath('/blog')">
        {{ $t('header.blog.item') }}
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
      </b-navbar-dropdown>
      <b-navbar-item tag="div">
        <div class="buttons is-right">
          <nuxt-link class="button is-info" v-if="$i18n.locale !== 'en'" :to="switchLocalePath('en')"><i class="mdi mdi-translate" style="margin-right: 0.25rem;" />English</nuxt-link>
          <nuxt-link class="button is-danger" v-if="$i18n.locale !== 'ja'" :to="switchLocalePath('ja')"><i class="mdi mdi-translate" style="margin-right: 0.25rem;" />日本語</nuxt-link>
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
      celebrationdays: [
        {
          "month": 1,
          "date": 1,
          "title_en": "New Year",
          "title_ja": "新年おめでとう！"
        },
        {
          "month": 2,
          "date": 11,
          "title_en": "National Foundation Day",
          "title_ja": "建国記念の日"
        },
        {
          "month": 3,
          "date": 8,
          "title_en": "International Women's day",
          "title_ja": "世界女性の日"
        },
        {
          "month": 3,
          "date": 21,
          "title_en": "Elimination of Racial Discrimination Day",
          "title_ja": "国際人種差別撤廃デー"
        },
        {
          "month": 3,
          "date": 22,
          "title_en": "Earth Day",
          "title_ja": "アースデー(地球の日)"
        },
        {
          "month": 5,
          "date": 2,
          "title_en": "International Day for Biological Diversity",
          "title_ja": "国際生物多様性の日"
        },
        {
          "month": 9,
          "date": 15,
          "title_en": "Internatonal Day of Democracy",
          "title_ja": "国際民主主義デー"
        },
        {
          "month": 10,
          "date": 10,
          "title_en": "World Mental Health Day",
          "title_ja": "世界メンタルヘルスデー"
        },
        {
          "month": 12,
          "date": 10,
          "title_en": "Human Rights Day",
          "title_ja": "世界人権の日"
        },
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
    else this.headerColor = 'black'
  },
  watch: {
    '$route': function(to, from) {
      if (to.path.includes('private')) this.headerColor = 'darksilver'
      else this.headerColor = 'black'
    }
  },
  methods: {
    isCelebration() {
      const month = new Date().getMonth()+1
      const date = new Date().getDate()
      // console.log(month, date)
      const data = this.celebrationdays.find(item => item.month === month && item.date === date)
      if (data === undefined) {
        return "Spread Globally, Connect Locally."
      } else if (this.$i18n.locale !== 'en') {
        return "Celebrating " + data.title_en
      } else {
        return data.title_ja + "を祝おう"
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .navbar-item, .navbar-link {
    font-weight: bold;
    // font-size: 125%;
    // color: lightgray !important;
  }
  .normal-category:hover {
    background-color: #c6251a !important;
  }
  .navbar.is-darksilver {
    background-color: #90a4ae !important;
  }
</style>
