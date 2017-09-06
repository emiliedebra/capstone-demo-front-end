/*
  Define all routing and routing logic in here
*/
import VueRouter from 'vue-router';

import '../../node_modules/vuetify/dist/vuetify.min.css';

// Import pages here
import Page from '@/pages/PageView';
import Home from '@/pages/HomeView';
import Report from '@/pages/ReportView';
import Login from '@/pages/LoginView';

// Add routes here
export default new VueRouter({
  routes: [
    {
      title: 'CAIR Home',
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      title: 'CAIR Login',
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      title: 'CAIR Page',
      path: '/page',
      name: 'Page',
      component: Page,
    },
    {
      title: 'CAIR Report',
      path: '/report',
      name: 'Report',
      component: Report,
    },
  ],
});
