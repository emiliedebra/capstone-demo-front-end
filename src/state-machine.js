
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

// // watch for store changes to modify addDialog state
// store.watch(
//   state => state.addContext,
//   (addContext) => {
//     if (addContext) {
//       if (addContext.state === contextState.ADDNODE) {
//         store.commit('changeModalDialog', modalState.ADDNODE);
//       } else if (addContext.state === contextState.ADDUSER) {
//         store.commit('changeModalDialog', modalState.ADDUSER);
//       }
//     } else {
//       // no context so...
//       store.commit('changeModalDialog', modalState.NONE);
//     }
//   }
// );
