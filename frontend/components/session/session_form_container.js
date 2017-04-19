import React from 'react-redux';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import {signup, login} from '../../actions/session_actions';
import { clearModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {

  return {
    currentUser: state.session.currentUser,
    errors: state.session.errors,
    formType: ownProps.formType,
    activeModal: state.modalConductor.activeModal,
  };
};


const mapDispatchToProps = (dispatch, ownProps) => {
  let formType = ownProps.formType;
  let processForm = formType === "login" ? login : signup;

  return {
    processForm: (user) => dispatch(processForm(user)),
    clearModal: () => dispatch(clearModal()),
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
