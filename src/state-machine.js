
import store from './store';

export const contextState = {
  CREATE: 'CREATE',
  CREATEUSER: 'CREATEUSER',
  CREATENODE: 'CREATENODE',
  UPDATE: 'UPDATE',
  VIEW: 'VIEW',
  DELETE: 'DELETE',
  CONFIRM: 'CONFIRM',
  CONFIRMCLEAR: 'CONFIRMCLEAR',
};

export const modalState = {
  NONE: null,
  MODIFY: 'MODIFY',
  DELETE: 'DELETE',
  CREATEUSER: 'CREATEUSER',
  CREATENODE: 'CREATENODE',
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
      store.commit('changeConfirmationDialog', modalState.NONE);
    }
  }
);

