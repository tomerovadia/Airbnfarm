import React from 'react';
import Reservation from './reservation';
import NavContainer from '../main/nav_container';
import { connect } from 'react-redux';
import { fetchBookings, approveBooking, declineBooking } from '../../actions/booking_actions';
import { getFormatedBookings } from '../../reducers/selectors';
import { withRouter } from 'react-router';


class ReservationsPage extends React.Component {

  constructor(props){
    super(props)

    this.props.fetchBookings(this.props.currentUser.id);

  }



  render(){

    let reservations = this.props.currentBookings.reservations.map((reservation) => {
      return (<Reservation
        key={reservation.id}
        reservation={reservation}
        declineBooking={this.props.declineBooking}
        approveBooking={this.props.approveBooking}
        />
      )
    });


    return(

      <div className='reservations-page-main-container'>

        <div className='reservations-page-reservations'>
          {reservations}
        </div>

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
    approveBooking: (bookingId) => dispatch(approveBooking(bookingId)),
    declineBooking: (bookingId) => dispatch(declineBooking(bookingId)),
  };
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ReservationsPage));
