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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Nav));


// <Nav
//   // currentUser={ this.props.currentUser }
//   // logout={this.props.logout}
//   // receiveModal={this.props.receiveModal}
//   userSettingsVisible={this.state.userSettingsVisible}
//   showUserSettings={this.showUserSettings}
// />
