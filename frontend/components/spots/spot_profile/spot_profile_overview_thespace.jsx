import React from 'react';

export default (props) => {

  return(

    <div className='spot-profile-overview-thespace'>

      <div className='spot-profile-overview-thespace-row'>
        <div className='spot-profile-overview-thespace-item'>
          <span>Bathrooms: </span>
          <span>{props.currentSpot.num_bathrooms}</span>
        </div>

        <div className='spot-profile-overview-thespace-item'>
          <span>Bedrooms: </span>
          <span>{props.currentSpot.num_bedrooms}</span>
        </div>
      </div>

      <div className='spot-profile-overview-thespace-row'>
        <div className='spot-profile-overview-thespace-item'>
          <span>Beds: </span>
          <span>{props.currentSpot.num_beds}</span>
        </div>

        <div className='spot-profile-overview-thespace-item'>
          <span>Room Type: </span>
          <span>{props.currentSpot.privacy_level}</span>
        </div>
      </div>


    </div>
  );

};
