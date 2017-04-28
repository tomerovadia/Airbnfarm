import React from 'react';
import onClickOutside from 'react-onclickoutside';
import {connect} from 'react-redux';
import {hideDropdown} from '../../actions/modal_actions';
import {Link} from 'react-router';

class UserSettingsDropdown extends React.Component {

  constructor(props){
    super(props);

    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleClickOutside(e){
    this.props.hideDropdown();
  }

  handleLogoutClick(e){
    this.props.handleLogout();
    this.props.hideDropdown(e);
  }

  render() {

    return (
      <div className='user-settings-dropdown-div dropdown-div'>
        <ul>

          <Link>Edit Profile</Link>
          <Link>Travel Credit</Link>
          <Link>Account Settings</Link>
          <Link>My Guidebook</Link>
          <Link>Gift Cards</Link>
          <Link>Business Travel</Link>
          <Link onClick={this.handleLogoutClick}>Log Out</Link>

        </ul>
      </div>
    )

  }


}

export default onClickOutside(UserSettingsDropdown);
