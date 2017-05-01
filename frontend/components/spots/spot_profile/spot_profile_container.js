import { connect } from 'react-redux';
import SpotProfile from './spot_profile';
import { fetchSpot } from '../../../actions/spot_actions';
import { receiveModal } from '../../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    currentSpot: state.spots.currentSpot,
    loggedIn: !!state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    fetchSpot: (id) => dispatch(fetchSpot(id)),
    receiveModal: (modalName) => dispatch(receiveModal(modalName)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotProfile);
