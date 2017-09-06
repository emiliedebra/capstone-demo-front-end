<!-- App.vue -->

<template>
  <v-app toolbar footer>
    
    <!-- Navigation Drawer -->
    <app-nav-drawer></app-nav-drawer>
    
    <!-- Toolbar -->
    <app-toolbar></app-toolbar>

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
    dialog: false,
  }),
  components: {
    'app-nav-drawer': () => import('./components/app-nav-drawer.vue'),
    'app-toolbar': () => import('./components/app-toolbar.vue'),
  },
};
</script>
