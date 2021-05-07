<template>
  <section id="wrapper-dark">
    Hello<br>
    Hello
    {{ id }}
    <div v-for="(member, index) in memberList" :key="index">
      {{ member.given_name_en }}
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      memberList: {},
      id: this.$route.params.id
    }
  },
  mounted(){
    console.log(this.$route.params.id);
    const api_url = "https://script.google.com/macros/s/AKfycbwxBWD2JADxoXKKjOXWDrHwD3Gx9Y3CihND37akRmEm_6hCJii7e8EVAhk8NZujIZlHMg/exec" + '?id=' + this.$route.params.id;
    axios.get(api_url, {
      crossDomain: true
    }).then(response => this.memberList = response.data[0]);
    console.log(response.data[0]);
  }
}
</script>
