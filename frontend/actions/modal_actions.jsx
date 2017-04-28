export const RECEIVE_MODAL = 'RECEIVE_MODAL';
export const CLEAR_MODAL = 'CLEAR_MODAL';
export const SHOW_DROPDOWN = 'SHOW_DROPDOWN';
export const HIDE_DROPDOWN = 'HIDE_DROPDOWN';

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

export const showDropdown = (dropdown) => {
  return {
    type: SHOW_DROPDOWN,
    dropdown,
  }
}

export const hideDropdown = (dropdown) => {
  return {
    type: HIDE_DROPDOWN,
  }
}





// export const hideUserSettings = () => {
//   return {
//     type: HIDE_USER_SETTINGS,
//     userSettingsVisible: false,
//   }
// };

// export const showUserSettings = () => {
//   return {
//     type: SHOW_USER_SETTINGS,
//     userSettingsVisible: true,
//   }
// };
