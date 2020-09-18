<template>
  <section class="section font-awesome">

      <div class="columns is-centered">
        <div class="column is-3-desktop is-3-tablet is-12-mobile">
          <img
              src="~/assets/logo/u_white.svg"
              alt="TEDxUTsukukuba logo"
              width="80%;"
          >
        </div>
        <div class="column is-9-desktop is-9-tablet is-12-mobile has-text-right">
          <h1 class="title is-3 is-size-5-mobile">Spread Globally, Connect Locally.</h1>
          <span class="is-size-7-mobile">
            <p>茨城県つくば市天王台1-1-1</p>
            <p>1-1-1 Tennodai, Tsukuba, Ibaraki, Japan</p>
            <p>&copy; TEDxUTsukuba 2020</p>
          </span>
        </div>
      </div>
      <div class="columns is-centered">
        <div class="column is-9-desktop is-9-tablet is-12-mobile has-text-left has-text-centered-mobile">
          <a href="">Media Relations</a>
          <a href="">Privacy Policy</a>
          <a href="">Code of Conduct</a>
          <a href="">About TEDx program <font-awesome-icon :icon="['fas', 'external-link-alt']" /></a>
        </div>
        <div class="column is-3-desktop is-3-tablet is-12-mobile has-text-right has-text-centered-mobile">
          <font-awesome-icon class="sns-icon" :icon="['fab', 'facebook-square']" />
          <font-awesome-icon class="sns-icon" :icon="['fab', 'instagram']" />
          <font-awesome-icon class="sns-icon" :icon="['fab', 'twitter']" />
          <font-awesome-icon class="sns-icon" :icon="['fab', 'flickr']" />
          <font-awesome-icon class="sns-icon" :icon="['fas', 'sticky-note']" />
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
  .sns-icon {
    font-size: 24px;
    margin: 5px;
  }
</style>


<!-- What is TEDx?<br>
In the spirit of ideas worth spreading, TED has created a program called TEDx. TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. Our event is called TEDx[name], where x = independently organized TED event. At our TEDx[name] event, TED Talks video and live speakers will combine to spark deep discussion and connection in a small group. The TED Conference provides general guidance for the TEDx program, but individual TEDx events, including ours, are self-organized. -->
