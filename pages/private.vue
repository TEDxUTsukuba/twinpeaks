<template>
<!-- Nested Routes
  https://ja.nuxtjs.org/docs/2.x/features/nuxt-components/#the-nuxtchild-component -->
  <section>
    <div class="columns">
      <aside class="column is-hidden-touch is-2-widescreen is-3-tablet section" style="background-color: #eceff1;">
        <p class="menu-label">
          Menu
        </p>
        <ul class="menu-list">
          <li
            v-for="(item, key) of items"
            :key="key"
          >
            <nuxt-link v-if="item.path"
              :to="localePath(item.path)"
              exact-active-class="is-active"
              class="is-size-7"
            >
              <i :class="`mdi mdi-${item.icon}`" />
              <span v-if="$i18n.locale == 'ja'">{{ item.title_ja }}</span>
              <span v-if="$i18n.locale == 'en'">{{ item.title_en }}</span>
            </nuxt-link>
            <a v-if="item.url"
              :href="item.url"
              class="is-size-7"
              target="_blank"
            >
              <i :class="`mdi mdi-${item.icon}`" />
              <span v-if="$i18n.locale == 'ja'">{{ item.title_ja }} <i class="mdi mdi-open-in-new" /></span>
              <span v-if="$i18n.locale == 'en'">{{ item.title_en }} <i class="mdi mdi-open-in-new" /></span>
            </a>
          </li>
        </ul>
        <br>
        <p class="menu-label">
          
        </p>
        <ul class="menu-list">
          <li>
          <nuxt-link :to="localePath('/')"
            class="is-size-7"
          >
            <i class="mdi mdi-arrow-left-circle" />
            <span v-if="$i18n.locale == 'ja'">ウェブサイトに戻る</span>
            <span v-if="$i18n.locale == 'en'">Back to the Website</span>
          </nuxt-link>
          </li>
        </ul>
      </aside>
      <div class="column" style="padding: 0; ">
        <nuxt-child />
      </div>
    </div>
  </section>
</template>

<script>
// import Header from '~/components/Header'
// import Footer from '~/components/Footer'
export default {
  components: {
    // Header,
    // Footer
  },
  data () {
    return {
      head() {
        return {
          htmlAttrs: {
            lang: this.$i18n.locale
          },
          meta: [
            {
              property: 'og:locale',
              content: this.$i18n.locale
            }
          ]
        };
      },
      link: [
        {
          rel: "canonical",
          href: 'https://www.tedxutsukuba.com' + `${this.$route.path}`,
        },
      ],
      items: [
        {
          title_ja: 'ホーム',
          title_en: 'Home',
          icon: 'home-variant',
          path: '/private',
          to: { name: 'private', path: '/private/', }
        },
        {
          title_ja: "デジタル名刺を作成する",
          title_en: "Create your own digital business card",
          icon: 'card-account-details',
          path: '/private/business-card-generator',
        },
        {
          title_ja: 'メンバー情報を追加・更新する',
          title_en: 'Edit member information',
          icon: 'account-box-multiple',
          path: '/private/how_to_update_team',
        },
        {
          title_ja: 'ウェブサイトのお知らせを追加・更新する',
          title_en: 'Edit an update to the news',
          icon: 'file-document-edit',
          path: '/private/how_to_update_news'
        },
        {
          title_ja: 'TEDxUTsukuba.comにイベント情報を追加・更新する',
          title_en: 'Edit event information on TEDxUTsukuba.com',
          icon: 'calendar-edit',
          path: '/private/how_to_add_an_event',
        },
        {
          title_ja: 'TED.comのイベント情報を編集する',
          title_en: 'Edit event information on TED.com',
          icon: 'calendar-edit',
          url: 'https://organize.ted.com/'
        },
        {
          title_ja: 'ウェブサイトの閲覧回数などを調べる',
          title_en: 'See website analysis',
          icon: 'google-analytics',
          url: 'https://analytics.google.com'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-item:hover {
  cursor: grab;
}
.menu-list a.is-active {
  background-color: #00c0d4;
  i {
    color: #fff;
  }
}
</style>