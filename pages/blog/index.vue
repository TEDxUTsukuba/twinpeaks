<template>
  <section id="wrapper-dark">
    <section class="section has-text-centered is-halfheight">
      <i class="mdi mdi-newspaper has-text-primary is-size-1" />
      <h1 class="title is-1 is-spaced">{{ $t("blog.title") }}</h1>
      <h1 class="subtitle has-text-grey-light">
        {{ $t("blog.subtitle") }}
      </h1>
    </section>
    <section class="section">
      <div class="columns is-multiline is-mobile">
      <div class="column is-6-tablet is-full-mobile h-full" v-for="(blog, index) in blogs" :key="index">
        <div class="nmp-dark my-4">
        <header class="card-header">
          <p class="card-header-title">
          <span class="has-text-grey is-family-narrow">
            {{ blog.date }}
          </span>
          </p>
        </header>
        <div class="card-image">
          <figure class="image is-5by3">
          <img
            :src="blog.image"
            alt="dummy"
            loading="lazy"
            style="object-fit: cover; object-position: center; width: 100%; height: 100%;"
          />
          </figure>
        </div>
        <div class="card-content">
          <h2 class="title is-size-5">{{ blog.title }}</h2>
          <p class="content">
            {{ blog.description }}
          </p>
          <br />
          <nav class="level is-mobile">
          <div class="level-left">
            <p class="level-left"></p>
          </div>
          <div class="level-right">
            <p class="level-item">
            <nuxt-link :to="localePath(blog.path)">{{
              $t("button.readmore")
            }}</nuxt-link>
            </p>
          </div>
          </nav>
        </div>
        </div>
      </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      blogs: [
        {
          title: "株式会社TOKIUM 大澤様 インタビュー",
          date: "2025/02/14",
          description: "2024年TEDxUTsukubaイベント「Panorama」にて協賛していただいた株式会社TOKIUMでインターンをされている大澤様にお話を伺いました。",
          image: "/blog/24_partner_tokium_interview/001.jpg",
          path: "/blog/24_partner_tokium_interview",
        },
        {
          title: "株式会社TOKIUM 西本様 インタビュー",
          date: "2024/09/23",
          description: "2023年TEDxUTsukubaイベント「万華鏡」にて協賛していただいた株式会社TOKIUMの西本様にお話を伺いました。",
          image: "/blog/23_partner_tokium_interview/002.jpg",
          path: "/blog/23_partner_tokium_interview",
        },
        {
          title: "株式会社キープレイヤーズ 高野様 インタビュー",
          date: "2024/04/08",
          description: "2023年TEDxUTsukubaイベント「万華鏡」にて協賛していただいた株式会社キープレイヤーズの代表を務める高野様にお話を伺いました。",
          image: "/blog/23_partner_keyplayers_interview/003.jpg",
          path: "/blog/23_partner_keyplayers_interview",
        },
        {
          title: "Skyland Ventures 木下様 インタビュー",
          date: "2024/04/08",
          description: "2023年TEDxUTsukubaイベント「万華鏡」にて協賛していただいたSkyland Venturesの代表を務める木下様にお話を伺いました。",
          image: "/blog/23_partner_skylandventures_interview/002.jpg",
          path: "/blog/23_partner_skylandventures_interview",
        },
      ],
    };
  },
}
</script>

<style scoped>
hr {
  height: 1px;
}
a {
  color: #fff;
  font-weight: bold;
}
</style>