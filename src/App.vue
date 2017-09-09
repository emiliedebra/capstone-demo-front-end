<!-- App.vue -->

<template>
  <v-app toolbar footer>
    
    <!-- Navigation Drawer -->
    <v-navigation-drawer class="pb-0" persistent absolute height="100%" clipped enable-resize-watcher fluid v-model="show">
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
      <v-toolbar-side-icon @click.stop="show = !show"></v-toolbar-side-icon>
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
        <v-dialog v-model="dialog" persistent width="800">
            <v-btn slot="activator" class="pink" dark fixed bottom right fab>
              <v-icon>add</v-icon>
              <!-- <v-icon>close</v-icon> -->
            </v-btn>
            <report-create-form @toggleDialog="toggleDialog"></report-create-form>
        </v-dialog>
      </v-container>
    </main>
  </v-app>
</template>

<script>
import reportCreateForm from './components/report-create-form';

export default {
  name: 'app',
  data: () => ({
    title: '',
    search: false,
    show: true,
    // NB: temporary items for dev purposes, may change
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
  components: {
    reportCreateForm,
  },
  methods: {
    toggleDialog() {
      this.dialog = !this.dialog;
    },
  },
};
</script>
