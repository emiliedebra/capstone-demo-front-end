/*
  Define all routing and routing logic in here
*/
import VueRouter from 'vue-router';

import '../../node_modules/vuetify/dist/vuetify.min.css';

// Import pages here
import Page from '@/pages/PageView';
import Home from '@/pages/HomeView';
import Report from '@/pages/ReportView';
import Create from '@/pages/CreateView';
import Search from '@/pages/SearchView';

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
    {
      title: 'CAIR Create',
      path: '/create',
      name: 'Create',
      component: Create,
    },
    {
      title: 'CAIR Search',
      path: '/search',
      name: 'Search',
      component: Search,
    },
  ],
});
