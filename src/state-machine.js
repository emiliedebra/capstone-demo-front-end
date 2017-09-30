
import store from './store';

export const contextState = {
  CREATE: 'CREATE',
  CREATEUSER: 'CREATEUSER',
  ADDUSER: 'ADDUSER',
  CREATENODE: 'CREATENODE',
  ADDNODE: 'ADDNODE',
  UPDATE: 'UPDATE',
  VIEW: 'VIEW',
  DELETE: 'DELETE',
  CONFIRM: 'CONFIRM',
  CONFIRMCLEAR: 'CONFIRMCLEAR',
  CONFIRMNODECLEAR: 'CONFIRMNODECLEAR',
  CONFIRMUSERCLEAR: 'CONFIRMUSERCLEAR',
  ERROR: 'ERROR',
};

export const modalState = {
  NONE: null,
  MODIFY: 'MODIFY',
  DELETE: 'DELETE',
  CREATEUSER: 'CREATEUSER',
  ADDUSER: 'ADDUSER',
  CREATENODE: 'CREATENODE',
  ADDNODE: 'ADDNODE',
};

// watch for store changes to modify modalDialog state
store.watch(
  state => state.reportContext,
  (reportContext) => {
    if (reportContext) {
      if (reportContext.state === contextState.UPDATE || reportContext.state === contextState.CREATE) {
        store.commit('changeModalDialog', modalState.MODIFY);
      } else if (reportContext.state === contextState.DELETE) {
        store.commit('changeModalDialog', modalState.DELETE);
      } else if (reportContext.state === contextState.CREATEUSER) {
        store.commit('changeModalDialog', modalState.CREATEUSER);
      } else if (reportContext.state === contextState.CREATENODE) {
        store.commit('changeModalDialog', modalState.CREATENODE);
      }
    } else {
      // no context so...
      store.commit('changeModalDialog', modalState.NONE);
      store.commit('changeAddContext', null);
      store.commit('changeConfirmationDialog', modalState.NONE);
    }
  }
);

// watch for store changes to modify userDialog state
store.watch(
  state => state.userContext,
  (userContext) => {
    if (userContext) {
      if (userContext.state === contextState.DELETE) {
        store.commit('changeUserDialog', modalState.DELETE);
      } else if (userContext.state === contextState.UPDATE) {
        store.commit('changeUserDialog', modalState.MODIFY);
      }
    } else {
      // no context so...
      store.commit('changeUserDialog', modalState.NONE);
    }
  }
);
