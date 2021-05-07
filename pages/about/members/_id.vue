<template>
  <section id="wrapper-dark">
    Hello<br>
    Hello
    {{ id }}
    <div class="columns is-mobile is-multiline">
      <div
        id="thumbnails"
        class="column is-3-fullhd is-4-widescreen is-4-desktop is-6-tablet is-6-mobile"
        v-for="(member, index) in memberList" :key="member.tedtalk"
        style="display: inline-block; vertical-align: top;"
      >
      {{ member.given_name_en }} {{ member.family_name_en}}
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  components: {
  },
  data() {
    return {
      memberList: {},
      id: this.$route.params.id,
      regexTitle: new RegExp(/https:\/\/www.ted.com.talks\//),
      regexLang: new RegExp(/\?[\w\=]+/)
    }
  },
  head: {
    title: 'About TEDxUTsukuba | TEDxUTsukuba',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 
        hid: 'description', 
        name: 'description', 
        content: 'TEDxUTsukubaは2016年に設立されたTEDxコミュニティ。筑波大学の一般学生団体であり、学生や卒業生を中心として運営されています。これまでに4回のメインカンファレンスを含む数々のTEDxイベントを開催しており、登壇者には筑波大学の教員や学生、卒業生を中心に、多彩なアイディアを持つ方々をお招きしています。'
      },
    ]
  },
  mounted(){
    const api_url = 'https://script.google.com/macros/s/AKfycbxBAnie0WBvu5iepBYw47A-7E7I8tDsZFj7FvIOguXPcz-t6QBYU31RHIOQIe8eqZm1tw/exec' + '?id=' + this.$route.params.id;
    axios.get(api_url, {
      crossDomain: true
    }).then(response => this.memberList = response.data);
  }
}
</script>
