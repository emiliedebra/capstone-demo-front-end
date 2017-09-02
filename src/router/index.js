/*
  Define all routing and routing logic in here
*/

import Vue from 'vue';
import Vuetify from 'vuetify';
import Router from 'vue-router';

import '../../node_modules/vuetify/dist/vuetify.min.css';

// Import components here
import Page from '@/pages/PageView';
import Home from '@/pages/HomeView';

Vue.use(Router);
Vue.use(Vuetify);

// Add routes here
export default new Router({
  routes: [
    {
      title: 'CAIR Home',
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      title: 'CAIR Page',
      path: '/page',
      name: 'Page',
      component: Page,
    },
  ],
});
