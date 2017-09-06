<!-- report-body.vue -->

<template id="app-nav-drawer">
  <v-navigation-drawer class="pb-0" persistent absolute height="100%" clipped enable-resize-watcher fluid v-model="showNav">
    <v-list dense class="pt-0">
      <v-list-tile ripple v-for="item in items" :key="item.text" :to="item.link">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.text }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import Vue from 'vue';

Vue.component('app-nav-drawer', {
  template: '#app-nav-drawer',
});

export default {
  name: 'app-nav-drawer',
  data: () => ({
    title: '',
    search: false,
    // NB: temporary items for dev purposes
    items: [
      { icon: 'home', text: 'Home', link: '/' },
      { icon: 'search', text: 'Advanced Search', link: '/page' },
    ],
    items2: [
      { icon: 'settings', text: 'Settings', link: '/page' },
      { icon: 'home', text: 'Log Out', link: '/login' },
    ],
    dialog: false,
  }),
  computed: {
    showNav: () => {
      return this.$store.getters.showNav;
    }
  },
};
</script>
