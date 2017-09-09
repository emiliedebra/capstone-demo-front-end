import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // clearReport: true,
    viewID: 1,
  },
  getters: {
    // clearReport: state => state.clearReport,
    viewID: state => state.viewID,
  },
  mutations: {
    // toggleClearReport: (state) => {
    //   state.clearReport = !state.clearReport;
    // },
    changeViewID: (state, newValue) => {
      state.viewID = newValue;
    },
  },
  actions: {
    // toggleClearReport: (context) => {
    //   context.commit('toggleClearReport');
    // },
    changeViewID: (state, newValue) => {
      state.commit('changeViewID', newValue);
    },
  },
});
