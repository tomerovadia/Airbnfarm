import React from 'react';

export default (props) => {

  return(

    <div className='spot-profile-overview-heading'>

      <div className='spot-profile-overview-heading-left'>
        <h1>{props.currentSpot.title}</h1>
        <div className='spot-profile-city-and-reviews'>
          {props.currentSpot.city}, {props.currentSpot.state}
        </div>
      </div>


      <div className='spot-profile-overview-heading-right'>
        <img src='https://a0.muscache.com/defaults/user_pic-50x50.png?v=2'></img>

        <div className='spot-profile-host-name'>{props.currentSpot.host}</div>
      </div>

    </div>
  );

};
