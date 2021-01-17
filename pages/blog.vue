<template>
  <div>
    <section class="hero is-fullheight">asasa</section>
		<ul>
		 	<li v-for="(post, index) in posts" :key="index">
		 		<a :href="'post.title'" target="_blank" rel="noopener noreferrer">{{ post.title }}</a>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    // 取得先のURL
    const url = "https://note.com/api/v2/creators/tedxutsukuba/contents?kind=note&page=1";
    // const url = "https://note.com/api/v2/creators/tedxutsukuba/";
    // const url = "https://qiita.com/api/v2/items";
    // リクエスト（Get）
    const response = await $axios.$get(url);
    // 配列で返ってくるのでJSONにして返却
    console.log(response);
    return {
      posts: response
    };
  }
}
</script>