import { connect } from 'react-redux';
import BecomeAHost from './become_a_host';
import { createSpot } from '../../actions/spot_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentSpot: state.spots.currentSpot,
    currentUser: state.session.currentUser,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createSpot: (spot) => dispatch(createSpot(spot)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BecomeAHost);
