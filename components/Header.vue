<template>
  <b-navbar class="is-fixed-top" style="background-color: #000000;">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="~/assets/buefy.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        >
        <!-- https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png -->
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-dropdown label="Events" class="is-hoverable">
        <b-navbar-item tag="router-link" :to="{ path: '/events/2019' }">
          2019
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/events/live2019' }">
          Live 2019
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/events/2017' }">
          2017
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/events/2016' }">
          2016
        </b-navbar-item>
      </b-navbar-dropdown>
      <b-navbar-item href="/talks">
        Talks
      </b-navbar-item>
      <b-navbar-item href="/partners">
        Partners
      </b-navbar-item>
      <b-navbar-item href="/about">
        About
      </b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item>
        <nuxt-link :to="switchLocalePath('ja')">日本語</nuxt-link>
      </b-navbar-item>
      <b-navbar-item>
        <nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
      </b-navbar-item>
      <!-- <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-white">
            <strong>JP</strong>
          </a>
          <a class="button is-white is-outlined">
            <strong>EN</strong>
          </a>
        </div>
      </b-navbar-item> -->
    </template>
  </b-navbar>
</template>

<style>
</style>
