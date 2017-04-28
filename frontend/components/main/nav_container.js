import { connect } from 'react-redux';
import Nav from './nav';
import { withRouter } from 'react-router';
import { receiveModal, showDropdown, hideDropdown } from '../../actions/modal_actions';
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
    activeDropdown: state.modalConductor.activeDropdown,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    logout: () => dispatch(logout()),
    receiveModal: (modalName) => dispatch(receiveModal(modalName)),
    showDropdown: (dropdown) => dispatch(showDropdown(dropdown)),
    hideDropdown: (e) => {
      e.stopPropagation();
      dispatch(hideDropdown())
    },
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav));
