export const RECEIVE_MODAL = 'RECEIVE_MODAL';
export const CLEAR_MODAL = 'CLEAR_MODAL';
export const HIDE_USER_SETTINGS = 'HIDE_USER_SETTINGS';
export const SHOW_USER_SETTINGS = 'SHOW_USER_SETTINGS';

export const receiveModal = (modalName) => {
  return {
    type: RECEIVE_MODAL,
    activeModal: modalName,
  }
};

export const clearModal = () => {
  return {
    type: CLEAR_MODAL,
    activeModal: null,
  }
};


export const hideUserSettings = () => {
  return {
    type: HIDE_USER_SETTINGS,
    userSettingsVisible: false,
  }
};

export const showUserSettings = () => {
  return {
    type: SHOW_USER_SETTINGS,
    userSettingsVisible: true,
  }
};
