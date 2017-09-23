<!-- app-nav-drawer-list -->

<template>
  <v-list dense class="pt-0">
    <v-list-tile ripple :to="home.link">
      <v-list-tile-action>
        <v-icon>{{ home.icon }}</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>{{ home.text }}</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
    <v-list-tile ripple :to="search.link">
      <v-list-tile-action>
        <v-icon>{{ search.icon }}</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>{{ search.text }}</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
    <v-list-tile v-show="this.$store.getters.showDetails" ripple :to="create.link">
      <v-list-tile-action>
        <v-icon>{{ create.icon }}</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>{{ create.text }}</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</template>

<script>
export default {
  name: 'app-nav-drawer-list',
  data() {
    return {
      home: { icon: 'home', text: 'Home', link: '/' },
      search: { icon: 'search', text: 'Advanced Search', link: '/search' },
      create: { icon: 'create', text: 'Create Account/Node', link: '/create' },
    };
  },
};
</script>
