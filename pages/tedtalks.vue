<template>
  <div id="wrap">
    <section class="section has-text-white has-text-centered">
      <div>
        <h1 class="title is-1 has-text-centered has-text-white">
          TED Talks
        </h1>
        <h1 class="subtitle is-3 has-text-white">
          Random Watchlist
        </h1>
        <p class="has-text-centered">
          TEDxUTsukubaのメンバーが団体内でシェアしたオススメのTEDトークを公開しています。
        </p>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac suscipit lacus. Mauris ullamcorper lorem id tristique lacinia. Fusce in sollicitudin lectus. Nullam auctor leo id lorem lacinia elementum. Nullam vitae faucibus nulla, sollicitudin blandit est. Integer dignissim mi non nisl scelerisque, sed molestie eros laoreet. Mauris neque lacus, porttitor non suscipit non, tempus sit amet libero. Maecenas tempus arcu eget ipsum dictum malesuada. Etiam vehicula lectus sit amet blandit tincidunt. Vestibulum facilisis dolor arcu, vel gravida justo varius ut. Sed blandit lacus vitae tellus egestas, et tempor nisl laoreet. Suspendisse eu tristique nisi.
          Aenean placerat velit diam, id euismod sem venenatis sed. Duis a placerat est, convallis interdum odio. Nullam at rhoncus urna. In a tellus vel ipsum semper ullamcorper id in nibh. Vivamus pharetra vel sapien at mollis. Duis volutpat massa tempor, euismod nisl et, tincidunt justo. Phasellus efficitur convallis erat, a pretium dolor. Sed id malesuada diam, consequat imperdiet arcu. Phasellus congue libero eget porta ultricies. Etiam tristique, leo tristique facilisis luctus, eros est laoreet tortor, nec pulvinar nisl augue ac enim. Sed nisi urna, ullamcorper ac justo id, iaculis commodo ante. Mauris tempor tristique mollis. Mauris egestas, odio at finibus hendrerit, mauris mauris consectetur justo, nec accumsan dui arcu at tellus. Mauris sit amet pretium diam, eget suscipit erat. Sed sodales quis magna et ullamcorper. Morbi sem purus, eleifend id lacus a, imperdiet finibus felis.
          Vestibulum mollis molestie sem sed rhoncus. Donec sollicitudin odio erat, eget consequat lectus condimentum elementum. Suspendisse placerat facilisis blandit. Phasellus ac tellus ut risus volutpat bibendum. Nullam ornare sapien vulputate, facilisis purus at, ullamcorper sapien. Cras eu arcu pellentesque risus pharetra viverra. Pellentesque lacinia diam lacus, eu dictum erat lobortis vel.
        </p>
        <div style="max-width:854px">
          <div style="position:relative;height:0;padding-bottom:56.25%">
            <iframe
              src="https://embed.ted.com/talks/lang/ja/michael_sandel_the_lost_art_of_democratic_debate" 
              width="854"
              height="480"
              style="position:absolute;left:0;top:0;width:100%;height:100%"
              frameborder="0"
              scrolling="no"
              allowfullscreen>
            </iframe>
          </div>
        </div>
      </div>
    </section>
    <footer class="footer has-background-black has-text-centered" style="background-color: rgba(0, 0, 0, 0.1);">
      <nuxt-link to="/">
        <img src="~/assets/logo.png" style="max-width: 360px; width: 60%;">
      </nuxt-link>
      <p>TEDxUTsukuba &copy; All Rights Reserved. </p>
    </footer>
  </div>
</template>

<script>

export default {
  layout: 'fullscreen',
  components: {
    
  },
  data(){
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
  div#wrap {
    background-color: #663dff;
    background-image: linear-gradient(319deg, #663dff 0%, #aa00ff 37%, #cc4499 100%);
    // background-color: #ff1493;
    // background-image: linear-gradient(319deg, #ff1493 0%, #0000ff 37%, #ff8c00 100%);
    background-attachment: fixed;
  }
  section.section {
    font-family: 'Montserrat', 'Hiragino Kaku Gothic Pro', 'Roboto', sans-serif;
  }
  .navbar.is-black {
    background-color: #ff0000 !important;
  }
</style>