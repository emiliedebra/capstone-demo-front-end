<!-- app-nav-drawer-list -->

<template>
  <v-list dense class="pt-0">
    <!-- Home Page -->
    <v-list-tile ripple :to="home.link">
      <v-list-tile-action>
        <v-icon>{{ home.icon }}</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>{{ home.text }}</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
    <!-- Search Page -->
    <v-list-tile ripple :to="search.link">
      <v-list-tile-action>
        <v-icon>{{ search.icon }}</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>{{ search.text }}</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
    <!-- Only Available to Node Admins/GlobalAdmins -->
    <!-- Manage Nodes -->
    <v-list-tile v-show="this.$store.getters.showDetails" ripple :to="nodes.link">
      <v-list-tile-action>
        <v-icon>{{ nodes.icon }}</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>{{ nodes.text }}</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
    <!-- Manage Users -->
    <v-list-tile v-show="this.$store.getters.showDetails" ripple :to="users.link">
      <v-list-tile-action>
        <v-icon>{{ users.icon }}</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>{{ users.text }}</v-list-tile-title>
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
      search: { icon: 'search', text: 'Search', link: '/search' },
      nodes: { icon: 'location_city', text: 'Manage Nodes', link: '/manage-nodes' },
      users: { icon: 'person_add', text: 'Manage Users', link: '/manage-users' },
    };
  },
};
</script>
