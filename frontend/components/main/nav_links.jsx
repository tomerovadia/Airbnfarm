import React from 'react';
import {Link, hashHistory} from 'react-router';
import UserSettingsDropdown from './user_settings_dropdown';
import HostDropdown from './host_dropdown';



export default (props) => {

  const redirectIfLoggedOut = () => {
    if (props.loggedIn){
      hashHistory.push('/become-a-host');
    } else {
      props.activateModal('login')();
    }
  }

  let userSettingsDropdown = props.activeDropdown === 'userSettings' ? <UserSettingsDropdown handleLogout={props.handleLogout} hideDropdown={props.hideDropdown}/> : null;
  let hostDropdown = props.activeDropdown === 'host' ? <HostDropdown hideDropdown={props.hideDropdown}/> : null;

  let links;
  if(props.loggedIn){
    links =
    <ul className='main-nav-links'>
      <Link className='inactive'>No time to host?</Link>
      <div className='link-with-dropdown' onClick={() => props.showDropdown('host')}>Host
        {hostDropdown}
      </div>
      <Link to='/bookings/trips'>Trips</Link>
      <Link className='inactive'>Messages</Link>
      <Link className='inactive'>Help</Link>
      <div className='link-with-dropdown' id='main-nav-avatar' onClick={() => props.showDropdown('userSettings')}>
        <img src='http://www.clker.com/cliparts/8/l/O/9/b/2/farmer-smiley-md.png' />
        {userSettingsDropdown}
      </div>
    </ul>

  } else {
    links =
    <ul className='main-nav-links'>
      <Link className='inactive'>No time to host?</Link>
      <Link onClick={redirectIfLoggedOut}>Become a Host</Link>
      <Link className='inactive'>Help</Link>
      <Link onClick={props.activateModal('signup')}>Sign Up</Link>
      <Link onClick={props.activateModal('login')}>Log In</Link>
    </ul>
  }

  return links;

}
