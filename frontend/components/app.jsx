import React from 'react';
import SessionFormContainer from './session/session_form_container';
// import { logout } from '../actions/session_actions';
import { clearModal, hideUserSettings } from '../actions/modal_actions';
import { connect } from 'react-redux';
import Nav from './main/nav';
import NavContainer from './main/nav_container';

class App extends React.Component {

  constructor(props){
    super(props);
    // this.state = {userSettingsVisible: false};
    // this.showUserSettings = this.showUserSettings.bind(this);
    // this.hideUserSettings = this.hideUserSettings.bind(this);
    this.handleAppClick = this.handleAppClick.bind(this);
  }

  // showUserSettings(e){
  //   this.setState({userSettingsVisible: true});
  //   e.stopPropagation();
  // }

  // hideUserSettings(){
  //   this.setState({userSettingsVisible: false});
  // }

  handleAppClick(){
    if(this.props.userSettingsVisible){
      this.props.hideUserSettings();
    }
  }

  render() {

    let sessionForm;
    if (!this.props.activeModal){
      sessionForm = null;
    } else {
      sessionForm =
      <SessionFormContainer
        formType={this.props.activeModal}
        clearModal={this.props.clearModal}
      />
    }

    return (
      <div onClick={this.handleAppClick} id='app'>

        {sessionForm}

        <NavContainer />

        {this.props.children}

      </div>
    );
  }
}

export default connect(
  (state) => {
    let currentUser;
    if(state.session.currentUser){
      currentUser = state.session.currentUser.email;
    } else {
      currentUser = null;
    }

    return{
      currentUser,
      activeModal: state.modalConductor.activeModal,
      userSettingsVisible: state.modalConductor.userSettingsVisible,
    };
  },
  (dispatch) => {
    return {
      // logout: () => dispatch(logout()),
      // receiveModal: (modalName) => dispatch(receiveModal(modalName)),
      clearModal: () => dispatch(clearModal()),
      hideUserSettings: () => dispatch(hideUserSettings()),

      // hideUserSettings: () => dispatch(hideUserSettings()),
    };
  }
)(App);
