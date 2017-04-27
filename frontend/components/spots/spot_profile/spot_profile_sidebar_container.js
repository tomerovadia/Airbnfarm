import { connect } from 'react-redux';
import SpotProfileSidebar from './spot_profile_sidebar';
import { withRouter } from 'react-router';
import { createBooking } from '../../../actions/booking_actions';

const mapStateToProps = (state, ownProps) => {

  return {
  };

};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    createBooking: (booking) => dispatch(createBooking(booking)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotProfileSidebar));
