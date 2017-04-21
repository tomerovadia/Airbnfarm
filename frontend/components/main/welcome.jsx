import React from 'react';
import {Link } from 'react-router';

export default (props) => {

  return (
    <div className='main-homepage-container'>
      <div className='welcome-splash'>
        <span className='welcome-where-to'>Where to? </span>
        <span className='welcome-start-adventure'> Start your next adventure on Airnbn.</span>
      </div>
      <br/><br/><br/><br/><br/><br/><br/>
      <Link to='/become-a-host'>Become a Host!</Link>
    </div>
  )
}
