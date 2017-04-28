import React from 'react';
import onClickOutside from 'react-onclickoutside';
import {connect} from 'react-redux';
import {hideDropdown} from '../../actions/modal_actions';

class UserSettingsDropdown extends React.Component {

  handleClickOutside(e){
    this.props.hideDropdown();
  }

  render() {

    return (
      <div className='user-settings-dropdown-div dropdown-div'>
        <ul>
          <li>Edit Profile</li>
          <li>Travel Credit</li>
          <li>Account Settings</li>
          <li>My Guidebook</li>
          <li>Gift Cards</li>
          <li>Business Travel</li>
          <li onClick={this.props.handleLogout}>Log Out</li>

        </ul>
      </div>
    )

  }


}

export default onClickOutside(UserSettingsDropdown);
