<template>
  <div class="tile is-ancestor">
    <div class="tile is-8 is-6-tablet">
      <div class="tile is-parent">
        <div class="tile is-child card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="is-size-7">4/14 12:00 - 14:00</p>
                <p class="title is-size-4">John Smith</p>
              </div>
            </div>
            <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nec iaculis mauris. <a>@bulmaio</a>
            </div>
            <p class=""><span class="tag is-light">Online</span></p> 
          </div>
        </div>
      </div>
      <div class="tile is-parent">
        <div class="tile is-child card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="is-size-7">4/14 12:00 - 14:00</p>
                <p class="title is-size-4">Zoomでチャレンジ！TEDx流ワークショップ</p>
              </div>
            </div>
            <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nec iaculis mauris. <a>@bulmaio</a>.                  
            </div>
            <p class=""><span class="tag is-light">Online</span></p>
          </div>
          <footer class="footer">
          </footer>
        </div>
      </div>
    </div>
    <div class="tile is-vertical is-parent">
      <div class="tile is-child notification">
        <p class="is-size-7">4/14 12:00 - 14:00</p>
        <p class="title">Three</p>
        <p class="is-size-7">Lorem ipsum dolor sit amet, r fe</p>
      </div>
      <div class="tile is-child notification">
        <p class="is-size-7">4/14 12:00 - 14:00</p>
        <p class="title">Three</p>
        <p class="is-size-7">Lorem ipsum dolor sit amet, pulvinar felis blandit. Ve</p>
      </div>
      <div class="tile is-child notification">
        <p class="is-size-7">4/14 12:00 - 14:00</p>
        <p class="title">Three</p>
        <p class="is-size-7">Lorem ipsum dolor sit amear felis b</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  .card {
    background-color: #c6251a;
    color: white;
  }
</style>