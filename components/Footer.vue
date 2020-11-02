<template>
  <section class="hero is-black font-awesome has-text-white">
    <div class="hero-body">
      <section class="section">
        <div class="columns is-centered">
          <div class="column is-4-desktop is-5-tablet">
            <figure class="image">
              <img
                src="~/assets/logo/u_black.svg"
                alt="TEDxUTsukukuba logo"
              >
            </figure>
          </div>
          <div class="column is-8-desktop is-7-tablet has-text-right has-text-centered-mobile">
            <h1 class="title is-3 is-size-5-mobile">Spread Globally, Connect Locally.</h1>
            <span class="is-size-7-mobile">
              <p>茨城県つくば市天王台1-1-1</p>
              <p>1-1-1 Tennodai, Tsukuba, Ibaraki, Japan</p>
              <p>&copy; TEDxUTsukuba 2020</p>
            </span>
          </div>
        </div>
        <div class="columns is-centered">
          <div class="column is-8-desktop is-8-tablet has-text-left has-text-centered-mobile">
            <a href="">Media Relations</a>
            <a href="">Privacy Policy</a>
            <a href="">Code of Conduct</a>
            <a href="">About TEDx program <font-awesome-icon :icon="['fas', 'external-link-alt']" /></a>
          </div>
          <div class="column is-4-desktop is-5-tablet has-text-right has-text-centered-mobile">
            <font-awesome-icon class="sns-icon" :icon="['fab', 'facebook-square']" />
            <font-awesome-icon class="sns-icon" :icon="['fab', 'instagram']" />
            <font-awesome-icon class="sns-icon" :icon="['fab', 'twitter']" />
            <font-awesome-icon class="sns-icon" :icon="['fab', 'flickr']" />
            <font-awesome-icon class="sns-icon" :icon="['fas', 'sticky-note']" />
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .sns-icon {
    font-size: 24px;
    margin: 5px;
  }
  a {
    color: #bec1c3;
    margin-right: 15px;
  }
  a:visited {
    color: #bec1c3;
  }
  figure.image {
    @media screen and (max-width: 768px) {
      padding: 0 20vw;
    }
  }
</style>


<!-- What is TEDx?<br>
In the spirit of ideas worth spreading, TED has created a program called TEDx. TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. Our event is called TEDx[name], where x = independently organized TED event. At our TEDx[name] event, TED Talks video and live speakers will combine to spark deep discussion and connection in a small group. The TED Conference provides general guidance for the TEDx program, but individual TEDx events, including ours, are self-organized. -->
