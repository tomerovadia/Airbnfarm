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

    const form = this.props.location.pathname === '/' ? "" : <SessionFormContainer path={this.props.location.pathname} />;

    return (
      <div>

        <Nav currentUser={ this.props.currentUser } logout={this.props.logout}/>

        {form}

      </div>
    );
  }
}

export default connect(
  (state) => {
    const currentUser = state.session.currentUser ? state.session.currentUser.email : null;
    return{currentUser: currentUser};
  },
  (dispatch) => {
    return {logout: () => dispatch(logout())};
  }
)(App);
