import React from 'react';
import Trip from './trip';
import NavContainer from '../main/nav_container';
import { connect } from 'react-redux';
import { fetchBookings, cancelBooking } from '../../actions/booking_actions';
import { getFormatedBookings } from '../../reducers/selectors';
import { withRouter } from 'react-router';

class TripsPage extends React.Component {

  constructor(props){
    super(props)

    this.props.fetchBookings(this.props.currentUser.id);

  }



  render(){

    let trips = this.props.currentBookings.trips.map((trip) => {
      return <Trip key={trip.id} trip={trip} cancelBooking={this.props.cancelBooking} />
    });



    return(

      <div className='trips-page-main-container'>

        <NavContainer searchBarVisible={false} />

        <h1 className='trips-page-h1'>Your Trips</h1>

        <section className='trips-section'>

          {trips}

        </section>

      </div>

    );

  }

}

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    currentBookings: getFormatedBookings(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBookings: (userId) => dispatch(fetchBookings(userId)),
    cancelBooking: (bookingId) => dispatch(cancelBooking(bookingId)),
  };
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TripsPage));
