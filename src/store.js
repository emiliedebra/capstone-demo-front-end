import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // clearReport: true,
  },
  getters: {
    // clearReport: state => state.clearReport,
  },
  mutations: {
    // toggleClearReport: (state) => {
    //   state.clearReport = !state.clearReport;
    // },
  },
  actions: {
    // toggleClearReport: (context) => {
    //   context.commit('toggleClearReport');
    // },
  },
});
