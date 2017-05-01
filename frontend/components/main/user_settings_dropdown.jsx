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
    this.props.hideDropdown(e);
  }

  handleLogoutClick(e){
    this.props.handleLogout();
    this.props.hideDropdown(e);
  }

  render() {

    return (
      <div className='user-settings-dropdown-div dropdown-div'>
        <ul>

          <Link className='inactive'>Edit Profile</Link>
          <Link className='inactive'>Travel Credit</Link>
          <Link className='inactive'>Account Settings</Link>
          <Link className='inactive'>My Guidebook</Link>
          <Link className='inactive'>Gift Cards</Link>
          <Link className='inactive'>Business Travel</Link>
          <Link onClick={this.handleLogoutClick}>Log Out</Link>

        </ul>
      </div>
    )

  }


}

export default onClickOutside(UserSettingsDropdown);
