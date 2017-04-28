import React from 'react';
import {Link, hashHistory} from 'react-router';
import UserSettingsDropdown from './user_settings_dropdown';


export default (props) => {

  let userSettingsDropdown = props.userSettingsVisible ? <UserSettingsDropdown handleLogout={props.handleLogout}/> : null

  let links;
  if(props.loggedIn){
    links =
    <ul className='main-nav-links'>
      <Link>No time to host?</Link>
      <Link to='/become-a-host'>Host</Link>
      <Link to='/bookings/trips'>Trips</Link>
      <Link>Messages</Link>
      <Link>Help</Link>
      <Link id='main-nav-avatar-link' onClick={props.showUserSettings}>
        <img src='https://a0.muscache.com/defaults/user_pic-50x50.png?v=2' />
        {userSettingsDropdown}
      </Link>
    </ul>

  } else {
    links =
    <ul className='main-nav-links'>
      <Link>No time to host?</Link>
      <Link to='/become-a-host'>Become a Host</Link>
      <Link>Help</Link>
      <Link onClick={props.activateModal('signup')}>Sign Up</Link>
      <Link onClick={props.activateModal('login')}>Log In</Link>
    </ul>
  }

  return links;

}
