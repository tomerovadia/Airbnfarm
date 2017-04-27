import React from 'react';
import ReservationsPage from './reservations_page';
import NavContainer from '../main/nav_container';
import { Link } from 'react-router';

class HostPage extends React.Component {

  constructor(props){
    super(props);

  }



  render() {

    const url = this.props.location.pathname;
    let yourReservationsClassName = 'inactive'
    let yourListingsClassName = 'inactive'
    if(url === "/bookings/host/reservations"){
      yourReservationsClassName = 'active';
    } else if(url === "/bookings/host/listings") {
      yourListingsClassName = 'active';
    }

    return(

      <div className='host-page-main-container'>

        <NavContainer />

        <section className='host-console'>

          <div className='host-console-tabs'>
            <ul className='host-console-ul'>
              <Link to='/bookings/host/listings' className={yourListingsClassName}>Your Listings</Link>
              <Link to='/bookings/host/reservations' className={yourReservationsClassName}>Your Reservations</Link>
            </ul>

            <Link to='/become-a-host' className='host-add-new-listing-button'>Add New Listing</Link>
          </div>

          <div className='host-console-contents'>
            {this.props.children}
          </div>



        </section>

      </div>

    );


  }


}

export default HostPage;
