import React from 'react';
import SessionFormContainer from './session/session_form_container';
import { logout } from '../actions/session_actions';
import { connect } from 'react-redux';
import Nav from './main/nav';

class App extends React.Component {

  constructor(props){
    super(props);
  }

  render() {

    // const form = this.props.location.pathname === '/' ? "" : <SessionFormContainer path={this.props.location.pathname} />;

    let sessionForm;
    if (!this.props.activeModal){
      sessionForm = "";
    } else {
      sessionForm = <SessionFormContainer formType={this.props.activeModal} />
    }

    return (
      <div>

        <Nav currentUser={ this.props.currentUser } logout={this.props.logout}/>

        {sessionForm}

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
      activeModal: 'signup'
    };
  },
  (dispatch) => {
    return {logout: () => dispatch(logout())};
  }
)(App);
