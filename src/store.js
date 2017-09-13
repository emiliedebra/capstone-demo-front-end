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
    logInDialog: true,
  },
  getters: {
    // clearReport: state => state.clearReport,
    loggedIn: state => state.loggedIn,
    accesslevel: state => state.accessLevel,
    viewID: state => state.viewID,
    addAuthorDialog: state => state.addAuthorDialog,
    addReportDialog: state => state.addReportDialog,
    logInDialog: state => state.logInDialog,
  },
  mutations: {
    // toggleClearReport: (state) => {
    //   state.clearReport = !state.clearReport;
    // },
    changeLoggedIn: (state, boolean) => {
      state.loggedIn = boolean;
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
    changeLogInDialog: (state, boolean) => {
      state.logInDialog = boolean;
    },
  },
  actions: {
    // toggleClearReport: (context) => {
    //   context.commit('toggleClearReport');
    // },
    changeLoggedIn: (context, boolean) => {
      context.commit('changeLoggedIn', boolean);
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
    changeLogInDialog: (context, newValue) => {
      context.commit('changeLogInDialog', newValue);
    },
  },
});
