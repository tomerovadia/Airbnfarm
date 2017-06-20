import React from 'react';
import onClickOutside from 'react-onclickoutside';
import {connect} from 'react-redux';
import {hideDropdown} from '../../actions/modal_actions';
import {Link} from 'react-router';

class HostDropdown extends React.Component {

  handleClickOutside(e){
    this.props.hideDropdown(e);
  }

  render() {

    return (
      <div className='host-dropdown-div dropdown-div'>
        <ul>
          <Link className='inactive'>Dashboard</Link>
          <Link className='inactive'>Calendar</Link>
          <Link to='/bookings/host/listings' onClick={this.props.hideDropdown}>Manage Listings</Link>
          <Link to='/become-a-host' onClick={this.props.hideDropdown}>List Your Space</Link>
          <Link to='/bookings/host/reservations' onClick={this.props.hideDropdown}>Your Reservations</Link>
          <Link className='inactive'>Transaction History</Link>
          <Link className='inactive'>Reviews</Link>
          <Link className='inactive'>Host Assist</Link>
          <Link className='inactive'>Experience Hosting</Link>
        </ul>
      </div>
    )

  }


}

export default onClickOutside(HostDropdown);
