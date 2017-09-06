<!-- app-toolbar.vue -->

<template id="app-toolbar">
  <v-toolbar dark class="primary">
    <v-toolbar-side-icon @click.native="toggleShowNav"></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">{{ this.$route.name }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon @click.stop="search = !search">
      <v-icon>{{ search ? 'clear' : 'search' }}</v-icon>
    </v-btn>
    <!-- Side Menu -->
    <v-menu clipped bottom right offset-y>
      <v-btn icon slot="activator" dark>
        <v-icon>more_vert</v-icon>
      </v-btn>
      <v-list dense>
        <v-list-tile v-for="item in items" :key="item.text" :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>{{ item.text }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<script>
export default {
  name: 'app-toolbar',
  data: () => ({
    title: '',
    search: false,
    // NB: temporary items for dev purposes
    items: [
      { icon: 'settings', text: 'Settings', link: '/page' },
      { icon: 'home', text: 'Log Out', link: '/login' },
    ],
    dialog: false,
  }),
  computed: {
    showNav() {
      return this.$store.getters.showNav;
    },
  },
  methods: {
    toggleShowNav() {
      this.$store.dispatch('toggleShowNav');
    },
  },
};
</script>
