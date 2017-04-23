import { connect } from 'react-redux';
import SpotProfile from './spot_profile';
import { fetchSpot } from '../../../actions/spot_actions';

const mapStateToProps = (state, ownProps) => {

  return {
    currentSpot: state.spots.currentSpot,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    fetchSpot: (id) => dispatch(fetchSpot(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotProfile);
