import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showNav: true,
  },
  getters: {
    showNav: (state) => {
      return state.showNav;
    },
  },
  mutations: {
    toggleShowNav: (state) => {
      state.showNav = !state.showNav;
    },
  },
  actions: {
    toggleShowNav: (context) => {
      context.commit('toggleShowNav');
    },
  },
});
