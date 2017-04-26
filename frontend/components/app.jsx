import React from 'react';
import SessionFormContainer from './session/session_form_container';
import { clearModal, hideUserSettings } from '../actions/modal_actions';
import { connect } from 'react-redux';
import Nav from './main/nav';
import NavContainer from './main/nav_container';

class App extends React.Component {

  constructor(props){
    super(props);

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
      <div id='app'>

        {sessionForm}


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
      clearModal: () => dispatch(clearModal()),
      hideUserSettings: () => dispatch(hideUserSettings()),
    };
  }
)(App);
