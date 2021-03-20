export default {
  data() {
    return {
      meta: {
        title: "",
        description: "",
        type: "",
        url: "",
        image: ""
      },
      // ベースとなるurl。自分の環境に合わせてください。
      base: "https://www.tedxutsukuba.com"
    };
  },
  head() {
    // 相対パスを取得。例えば'/item/1'とか
    const path = this.$route.path;

    // ここでmetaの中身を更新
    this.meta.title = this.eventData.name;
    this.meta.description = this.eventData.summary_ja + ' | ' + this.eventData.summary_en;
    this.meta.type = "article";
    this.meta.url = this.base + path;
    this.meta.image = 'https://www.tedxutsukuba.com/u_logo_banner.png'

    // ここから先でmetaタグを書いていく
    return {
      title: this.meta.title,
      meta: [
        { hid: "description", name: "description", content: this.meta.description },
        { hid: "og:description", property: "og:description", content: this.meta.description },
        { hid: "og:title", property: "og:title", content: this.meta.title },
        { hid: "og:type", property: "og:type", content: this.meta.type },
        { hid: "og:url", property: "og:url", content: this.meta.url },
        { hid: "og:image", property: "og:image", content: this.meta.image },
        { name: "twitter:title", content: this.meta.title },
        { name: "twitter:card", content: 'summary' },
        { name: "twitter:site", content: '@tedxutsukuba' },
        { name: "twitter:creator", content: '@tedxutsukuba' },
      ]
    };
  }
};
