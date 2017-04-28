import React from 'react';
import onClickOutside from 'react-onclickoutside';
import {connect} from 'react-redux';
import {hideDropdown} from '../../actions/modal_actions';
import {Link} from 'react-router';

class HostDropdown extends React.Component {

  handleClickOutside(e){
    this.props.hideDropdown();
  }

  render() {

    return (
      <div className='host-dropdown-div dropdown-div'>
        <ul>
          <Link>Dashboard</Link>
          <Link>Calendar</Link>
          <Link>Manage Listings</Link>
          <Link to='/become-a-host' onClick={this.props.hideDropdown}>List Your Space</Link>
          <Link to='/bookings/host/reservations' onClick={this.props.hideDropdown}>Your Reservations</Link>
          <Link>Transaction History</Link>
          <Link>Reviews</Link>
          <Link>Host Assist</Link>
          <Link>Experience Hosting</Link>
        </ul>
      </div>
    )

  }


}

export default onClickOutside(HostDropdown);
