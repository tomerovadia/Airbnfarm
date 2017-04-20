import React from 'react';
import SessionFormContainer from './session/session_form_container';
import { logout } from '../actions/session_actions';
import { receiveModal, clearModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import Nav from './main/nav';

class App extends React.Component {

  constructor(props){
    super(props);
  }

  render() {

    let sessionForm;
    if (!this.props.activeModal){
      sessionForm = "";
    } else {
      sessionForm =
      <SessionFormContainer
        formType={this.props.activeModal}
        clearModal={this.props.clearModal}
      />
    }

    return (
      <div>

        {sessionForm}

        <Nav
          currentUser={ this.props.currentUser }
          logout={this.props.logout}
          receiveModal={this.props.receiveModal}
        />

        <div className='welcome-splash'>
          <span className='welcome-where-to'>Where to?</span>
          <span className='welcome-start-adventure'>Start your next adventure on Airbnb.</span>
        </div>


      </div>
    );
  }
}

export default connect(
  (state) => {
    let currentUser;
    if(state.session.currentUser){
      currentUser = state.session.currentUser.email
    } else {
      currentUser = null
    }

    return{
      currentUser,
      activeModal: state.modalConductor.activeModal
    };
  },
  (dispatch) => {
    return {
      logout: () => dispatch(logout()),
      receiveModal: (modalName) => dispatch(receiveModal(modalName)),
      clearModal: () => dispatch(clearModal())
    }
  }
)(App);
