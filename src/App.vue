<!-- App.vue -->

<template>
  <v-app toolbar footer>
    
    <!-- Navigation Drawer -->
    <v-navigation-drawer class="pb-0" persistent absolute height="100%" clipped fluid v-model="show">
      <app-nav-drawer-list></app-nav-drawer-list>
    </v-navigation-drawer>    
    
    <!-- Toolbar -->
    <v-toolbar dark class="primary" v-show="!this.$store.getters.logInDialog">
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
        <app-side-menu-list></app-side-menu-list>
      </v-menu>
    </v-toolbar>

    <!-- Page View -->
    <main>
      <v-container fluid>
        <login-dialog></login-dialog>
        <router-view v-show="!this.$store.getters.logInDialog"></router-view>
        <report-create-dialog></report-create-dialog> 
        <v-btn v-show="!this.$store.getters.logInDialog" class="pink" dark fixed bottom right fab @click.native="changeAddReportDialog">
          <v-icon>add</v-icon>
        </v-btn>
      </v-container>
    </main>
  </v-app>
</template>

<script>
import reportCreateDialog from './components/report-create-dialog';
import appSideMenuList from './components/app-side-menu-list';
import appNavDrawerList from './components/app-nav-drawer-list';
import loginDialog from './components/login-dialog';

export default {
  name: 'app',
  data: () => ({
    search: false,
    show: false,
  }),
  components: {
    reportCreateDialog,
    appSideMenuList,
    appNavDrawerList,
    loginDialog,
  },
  methods: {
    changeAddReportDialog() {
      this.$store.dispatch('changeAddReportDialog');
    },
  },
  created() {
    // TODO: apply calcs based on access level and login to pass correct item info to lists
  },
};
</script>
