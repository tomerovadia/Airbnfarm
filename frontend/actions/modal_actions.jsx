export const RECEIVE_MODAL = 'RECEIVE_MODAL';
export const CLEAR_MODAL = 'CLEAR_MODAL';

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
