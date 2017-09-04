<!-- App.vue -->

<template>
  <v-app toolbar>
    
    <!-- Navigation Drawer -->
    <v-navigation-drawer class="pb-0" persistent absolute height="100%" clipped enable-resize-watcher fluid v-model="drawer">
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
    
    <!-- Toolbar -->
    <v-toolbar dark class="primary">
      
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">{{ this.$route.name }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click.stop="search = !search">
        <v-icon>{{ search ? 'clear' : 'search' }}</v-icon>
      </v-btn>
      
      <v-menu clipped bottom right offset-y>
        <v-btn icon slot="activator" dark>
          <v-icon>more_vert</v-icon>
        </v-btn>
        <v-list dense>
          <v-list-tile v-for="item in items2" :key="item.text" :to="item.link">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>{{ item.text }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      
      </v-toolbar>

    <!-- Page View -->
    <main>
      <v-container fluid>
        <router-view></router-view>
        <v-dialog v-model="dialog" persistent>
          
          <v-btn slot="activator" class="pink" dark fixed bottom right fab>
            <v-icon>add</v-icon>
            <!-- <v-icon>close</v-icon> -->
          </v-btn>
          <!-- Make separate insert component here -->
          <v-card class="text-xs-center">
            <v-btn @click.native="dialog = false">Close</v-btn>
          </v-card>
        </v-dialog>
      </v-container>
    </main>
  </v-app>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    title: '',
    drawer: true,
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
    activeFab() {
      switch (this.tabs) {
        case 'one': return { class: 'purple', icon: 'account_circle' };
        case 'two': return { class: 'red', icon: 'edit' };
        case 'three': return { class: 'green', icon: 'keyboard_arrow_up' };
        default: return {};
      }
    },
  },
};
</script>
