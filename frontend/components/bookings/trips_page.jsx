import React from 'react';
import Trip from './trip';
import NavContainer from '../main/nav_container';
import { connect } from 'react-redux';
import { fetchBookings, cancelBooking } from '../../actions/booking_actions';
import { getFormatedBookings } from '../../reducers/selectors';
import { withRouter, Link } from 'react-router';

class TripsPage extends React.Component {

  constructor(props){
    super(props)

    this.props.fetchBookings(this.props.currentUser.id);

  }

  render(){

    let trips = this.props.currentBookings.trips.map((trip) => {
      return <Trip key={trip.id} trip={trip} cancelBooking={this.props.cancelBooking} />
    });

    if(trips.length === 0){
      trips =
      <h3>
        You have no trips! <Link to={`/spots/search`}>Find one</Link>.
      </h3>
    }



    return(

      <div className='trips-page-with-nav'>

        <NavContainer searchBarVisible={false} />

        <div className='trips-page-main-container'>

          <h1 className='trips-page-h1'>Your Trips</h1>

          <section className='trips-section'>

            {trips}

          </section>

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
    cancelBooking: (bookingId) => dispatch(cancelBooking(bookingId)),
  };
};


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TripsPage));
