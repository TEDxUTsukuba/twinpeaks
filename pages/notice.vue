<template>
  <article>
    <div v-if="data">
      <h1>{{ data.blogPost.title }}</h1>
      <datocms-image :data="data.blogPost.cover.responsiveImage" />
    </div>
  </article>
</template>

<script>
// import { request } from "./lib/datocms";
// import { Image } from "vue-datocms";

const query = gql`
  query {
    notice {
      title_ja
    }
  }
`;

export default {
  components: {
    "datocms-image": Image,
  },
  data() {
    return {
      data: null,
    };
  },
  async mounted() {
    this.data = await request({ query });
  },
};
</script>