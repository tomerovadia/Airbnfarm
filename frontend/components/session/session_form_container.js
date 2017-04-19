import React from 'react-redux';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import {signup, login} from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {

  return {
    currentUser: state.session.currentUser,
    errors: state.session.errors,
    formType: ownProps.formType
  };
};


const mapDispatchToProps = (dispatch, ownProps) => {
  let formType = ownProps.formType;
  let processForm = formType === "login" ? login : signup;

  return {
    processForm: (user) => dispatch(processForm(user))
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
