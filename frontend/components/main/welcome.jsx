import React from 'react';
import { Link } from 'react-router';
import SpotSearchBar from '../search/spot_search_bar';
import NavContainer from './nav_container';
import HomepageSectionNav from './homepage_section_nav';
import Carousel from './carousel';
import Footer from './footer';

export default (props) => {


  return (
    <div className='main-homepage-container'>

      <NavContainer searchBarVisible={false} />

      <div className='homepage-main-section'>

        <div className='welcome-splash'>
          <span className='welcome-where-to'>Airbnfarm </span>
          <span className='welcome-start-adventure'> Book unique farms and experience rural life like a local.</span>
        </div>

        <SpotSearchBar />

        <HomepageSectionNav />

        <div className='homepage-homes-section-header'>
          <h2 className='homepage-section-h2'>Farms</h2>
          <Link to='/spots/search' className='homepage-section-see-all'>See all &#62;</Link>
        </div>

        <Carousel />

        <Footer />

      </div>

    </div>
  );
};
