<template>
      <section class="section">
        <div class="columns content is-centered has-text-left">
          <nuxt-link to="/">
            <div class="column reflection" style="margin: 20px; padding: 40px; min-height: 320px;">
              <div class="font-awesome">
                <h1 class="title is-2 is-size-4-mobile">{{ $t('rcm.left.title') }}</h1>
                <h1 class="title is-5 is-size-6-mobile">{{ $t('rcm.left.description') }}</h1>
              </div>
            </div>
          </nuxt-link>
          <nuxt-link to="/">
            <div class="column reflection" style="margin: 20px; padding: 40px; min-height: 320px;">
              <div class="font-awesome">
                <h1 class="title is-2 is-size-4-mobile">{{ $t('rcm.center.title') }}</h1>
                <h1 class="title is-5 is-size-6-mobile">{{ $t('rcm.center.description') }}</h1>
              </div>
            </div>
          </nuxt-link>
          <nuxt-link to="/">
            <div class="column reflection" style="margin: 20px; padding: 40px; min-height: 320px;">
              <div class="font-awesome">
                <h1 class="title is-2 is-size-4-mobile">{{ $t('rcm.right.title') }}</h1>
                <h1 class="title is-5 is-size-6-mobile">{{ $t('rcm.right.description') }}</h1>
              </div>
            </div>
          </nuxt-link>
        </div>
    </section>
</template>

<style lang="scss">
.reflection {
    background-color: white;
    border: 10px solid #5B08B9;
    .title {
      color: #5B08B9;
    }
    &:hover {
      background-color: #5B08B9;
      border: 10px solid #5B08B9;
      .title {
        color: white;
      }
    }
  }
</style>