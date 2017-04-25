import React from 'react';
import {Link } from 'react-router';
import WelcomeSearchBar from '../search/welcome_search_bar';
import { withRouter } from 'react-router';

export default (props) => {

  const WelcomeSearchBarWithRouter = withRouter(WelcomeSearchBar);

  return (
    <div className='main-homepage-container'>
      <div className='welcome-splash'>
        <span className='welcome-where-to'>Where to? </span>
        <span className='welcome-start-adventure'> Start your next adventure on Airbnfarm.</span>
      </div>

      <WelcomeSearchBarWithRouter />

    </div>
  );
};
