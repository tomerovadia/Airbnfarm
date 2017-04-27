import React from 'react';
import Trip from './trip';
import NavContainer from '../main/nav_container';
import { connect } from 'react-redux';
import { fetchBookings } from '../../actions/booking_actions';
import { getFormatedBookings } from '../../reducers/selectors';

class TripsPage extends React.Component {

  constructor(props){
    super(props)

    this.props.fetchBookings(this.props.currentUser.id);
  }



  render(){

    let trips = this.props.currentBookings.trips.map((trip) => {
      return <Trip key={trip.id} trip={trip} />
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

export default connect(
  (state) => {
    return {
      currentUser: state.session.currentUser,
      currentBookings: getFormatedBookings(state),
    };
  },
  (dispatch) => {
    return {
      fetchBookings: (userId) => dispatch(fetchBookings(userId)),
    };
  }
)(TripsPage);
