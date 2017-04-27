import React from 'react';
import {Link } from 'react-router';
import SpotSearchBar from '../search/spot_search_bar';
import NavContainer from './nav_container';

export default (props) => {


  return (
    <div className='main-homepage-container'>

      <NavContainer searchBarVisible={false} />

      <div className='welcome-splash'>
        <span className='welcome-where-to'>Where to? </span>
        <span className='welcome-start-adventure'> Start your next adventure on Airbnfarm.</span>
      </div>

      <SpotSearchBar />

    </div>
  );
};
