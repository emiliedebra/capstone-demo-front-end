<!-- App-->

<template>
  <v-app toolbar footer>

    <!-- Navigation Drawer -->
    <v-navigation-drawer persistent class="pb-0" absolute disable-route-watcher height="100%" clipped fluid v-model="show">
      <app-nav-drawer-list ></app-nav-drawer-list>
    </v-navigation-drawer>

    <!-- Toolbar -->
    <v-toolbar dark class="primary" v-show="!this.$store.getters.logInDialog">
      <v-toolbar-side-icon @click.stop="show=!show"></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">{{ this.$route.name }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field solo label="Search" append-icon="search" v-on:keyup.enter="searchOnEnter" v-model="searchInput"></v-text-field>

      <!-- Side Menu -->
      <v-menu clipped bottom right offset-y>
        <v-btn icon slot="activator" dark>
          <v-icon>more_vert</v-icon>
        </v-btn>
        <app-side-menu-list @logout="show = false"></app-side-menu-list>
      </v-menu>
    </v-toolbar>

    <!-- Page View -->
    <main>
      <v-container fluid>
        <unsuccessful-login-dialog></unsuccessful-login-dialog>
        <login-dialog v-show="!this.$store.getters.unsuccessfulLoginDialog"></login-dialog>
        <router-view v-show="!this.$store.getters.logInDialog"></router-view>
        <v-btn v-show="!this.$store.getters.logInDialog && this.$store.getters.showDetails" class="pink ma-4" v-tooltip:top="{ html: `${toolTip}` }" dark fixed bottom right fab @click.native="add">
          <v-icon>add</v-icon>
        </v-btn>
      </v-container>
    </main>
  </v-app>
</template>

<script>
import { mapState } from 'vuex';
import appSideMenuList from './components/app-components/app-side-menu-list.vue';
import appNavDrawerList from './components/app-components/app-nav-drawer-list.vue';
import loginDialog from './components/pop-up-dialogs/login-dialog.vue';
import unsuccessfulLoginDialog from './components/pop-up-dialogs/unsuccessful-login-dialog.vue';
import { contextState } from './state-machine';

export default {
  name: 'app',
  data: () => ({
    search: false,
    icon: 'search',
    show: false,
    searchInput: '',
  }),
  components: {

    appSideMenuList,
    appNavDrawerList,
    loginDialog,
    unsuccessfulLoginDialog,
  },
  computed: {
    ...mapState({
      toolTip: state => state.toolTip,
    }),
  },
  methods: {
    changeReportContext() {
      // toggle report-create0dialog
      this.$store.dispatch('changeReportContext', { id: null, state: contextState.CREATE });
    },
    changeUserContext(state) {
      // toggle report-create0dialog
      this.$store.dispatch('changeUserContext', {id: null, state });
    },
    changeNodeContext(state) {
      // toggle report-create0dialog
      this.$store.dispatch('changeNodeContext', { id: null, state });
    },
    searchOnEnter() {
      this.$store.dispatch('changeSearchInput', this.searchInput);
      this.$router.push('/search');
    },
    add() {
      if (this.$route.path === '/') {
        this.changeReportContext();
      } else if (this.$route.path === '/manage-users') {
        this.changeUserContext(contextState.CREATE);
      } else if (this.$route.path === '/manage-nodes') {
        this.changeNodeContext(contextState.CREATE);
      }
    },
  },
};
</script>
