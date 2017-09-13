import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // clearReport: true,
    // NOT YET IMPLEMENTED
    loggedIn: false,
    accessLevel: 0,
    // IMPLEMENTED
    viewID: 1,
    addAuthorDialog: false,
    addReportDialog: false,
  },
  getters: {
    // clearReport: state => state.clearReport,
    loggedIn: state => state.loggedIn,
    accesslevel: state => state.accessLevel,
    viewID: state => state.viewID,
    addAuthorDialog: state => state.addAuthorDialog,
    addReportDialog: state => state.addReportDialog,
  },
  mutations: {
    // toggleClearReport: (state) => {
    //   state.clearReport = !state.clearReport;
    // },
    changeLogginIn: (state) => {
      state.loggedIn = !state.loggedIn;
    },
    changeAccessLevel: (state, newValue) => {
      state.accessLevel = newValue;
    },
    changeViewID: (state, newValue) => {
      state.viewID = newValue;
    },
    changeAddAuthorDialog: (state) => {
      state.addAuthorDialog = !state.addAuthorDialog;
    },
    changeAddReportDialog: (state) => {
      state.addReportDialog = !state.addReportDialog;
    },
  },
  actions: {
    // toggleClearReport: (context) => {
    //   context.commit('toggleClearReport');
    // },
    changeLoggedIn: (context) => {
      context.commit('changeLoggedIn');
    },
    changeAccessLevel: (context, newValue) => {
      context.commit('changeAccessLevel', newValue);
    },
    changeViewID: (context, newValue) => {
      context.commit('changeViewID', newValue);
    },
    changeAddAuthorDialog: (context) => {
      context.commit('changeAddAuthorDialog');
    },
    changeAddReportDialog: (context) => {
      context.commit('changeAddReportDialog');
    },
  },
});
