import { connect } from 'react-redux';
import BecomeAHost from './bome_a_host';
import {}

const mapStateToProps = (state, ownProps) => {
  return {
    currentSpot: state.spots.currentSpot,
    currentUser: state.session.currentUser,
  }
}

const mapDispatchToProps = (state, ownProps) => {
  return {
    createSpot: (spot) => dispatch(createSpot(spot)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BecomeAHost);
