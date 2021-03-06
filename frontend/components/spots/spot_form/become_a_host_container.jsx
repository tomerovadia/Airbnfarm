import { connect } from 'react-redux';
import BecomeAHost from './become_a_host';
import { createSpot, receiveErrors } from '../../../actions/spot_actions';
import { createAvailability } from '../../../actions/availability_actions';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
  return {
    currentSpot: state.spots.currentSpot,
    errors: state.spots.errors,
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createSpot: (spot) => dispatch(createSpot(spot)),
    receiveErrors: (errors) => dispatch(receiveErrors(errors)),
    createAvailability: (availability) => dispatch(createAvailability(availability)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(BecomeAHost));
