import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // Not Yet Implemented
    update: false,
    /* --------IMPLEMENTED-------- */
    // unsuccessful-login-dialog
    unsuccessfulLogin: false,
    // clears report-create-form
    clearReport: false,
    // shows logged in state
    loggedIn: false,
    // defines access level (and hence detailed/not detailed views)
    accessLevel: 0,
    // current viewable report id - TODO: change to reportID
    viewID: 1,
    // toggles user-create-dialog
    addAuthorDialog: false,
    // toggles report-create-dialog
    addReportDialog: false,
    // toggles login-dialog
    logInDialog: true,
    // defines logged in user ID
    loggedInUserID: 0,
    // state used to toggle display of detailed information based on accessLevel
    showDetails: false,
  },
  getters: {
    update: state => state.update,
    unsuccessfulLogin: state => state.unsuccessfulLogin,
    clearReport: state => state.clearReport,
    loggedIn: state => state.loggedIn,
    accesslevel: state => state.accessLevel,
    viewID: state => state.viewID,
    addAuthorDialog: state => state.addAuthorDialog,
    addReportDialog: state => state.addReportDialog,
    logInDialog: state => state.logInDialog,
    loggedInUserID: state => state.loggedInUserID,
    showDetails: state => state.showDetails,
  },
  mutations: {
    toggleUpdate: (state) => {
      state.update = !state.update;
    },
    toggleClearReport: (state) => {
      state.clearReport = !state.clearReport;
    },
    toggleUnsuccessfulLogin: (state) => {
      state.unsuccessfulLogin = !state.unsuccessfulLogin;
    },
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
    changeLoggedInUserID: (state, newValue) => {
      state.loggedInUserID = newValue;
    },
    changeShowDetails: (state, boolean) => {
      state.showDetails = boolean;
    },
  },
  actions: {
    toggleUpdate: (context) => {
      context.commit('toggleUpdate');
    },
    toggleUnsuccessfulLogin: (context) => {
      context.commit('toggleUnsuccessfulLogin');
    },
    toggleClearReport: (context) => {
      context.commit('toggleClearReport');
    },
    changeLoggedIn: (context, boolean) => {
      context.commit('changeLoggedIn', boolean);
    },
    changeAccessLevel: (context, newValue) => {
      context.commit('changeAccessLevel', newValue);
      if (newValue > 0) {
        context.commit('changeShowDetails', true);
      } else {
        context.commit('changeShowDetails', false);
      }
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
    changeLoggedInUserID: (context, newValue) => {
      context.commit('changeLoggedInUserID', newValue);
    },
  },
});
