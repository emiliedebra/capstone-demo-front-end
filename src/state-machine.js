
import store from './store';

export const contextState = {
  CREATE: 'CREATE',
  UPDATE: 'UPDATE',
  VIEW: 'VIEW',
  DELETE: 'DELETE',
};

export const modalState = {
  NONE: null,
  MODIFY: 'MODIFY',
  DELETE: 'DELETE',
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
      }
    } else {
      // no context so...
      store.commit('changeModalDialog', modalState.NONE);
    }
  }
);

