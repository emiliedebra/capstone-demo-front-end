/*
Define all routing and routing logic in here
*/
import VueRouter from 'vue-router';

import '../../node_modules/vuetify/dist/vuetify.min.css';

// Import pages
import Page from '../pages/PageView.vue';
import Home from '../pages/HomeView.vue';
import Report from '../pages/ReportView.vue';
import Nodes from '../pages/NodesView.vue';
import Users from '../pages/UsersView.vue';
import Search from '../pages/SearchView.vue';

// Define routes
export default new VueRouter({
  routes: [
    {
      title: 'CAIR Home',
      path: '/',
      name: 'Research Outputs',
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
      title: 'CAIR Manage Users',
      path: '/manage-users',
      name: 'Manage Users',
      component: Users,
    },
    {
      title: 'CAIR Manage Node',
      path: '/manage-nodes',
      name: 'Manage Nodes',
      component: Nodes,
    },
    {
      title: 'CAIR Search',
      path: '/search',
      name: 'Search',
      component: Search,
    },
  ],
});
