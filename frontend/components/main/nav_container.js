import { connect } from 'react-redux';
import Nav from './nav';
import { withRouter } from 'react-router';
import { receiveModal, showUserSettings } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  let currentUser;
  if(state.session.currentUser){
    currentUser = state.session.currentUser.email;
  } else {
    currentUser = null;
  }

  return {
    currentUser,
    userSettingsVisible: state.modalConductor.userSettingsVisible,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    logout: () => dispatch(logout()),
    receiveModal: (modalName) => dispatch(receiveModal(modalName)),
    showUserSettings: () => dispatch(showUserSettings()),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav));
