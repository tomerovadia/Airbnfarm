import React from 'react';

export default (props) => {

  return(

    <div className='spot-profile-overview-icons'>

      <div className='spot-profile-overview-icon-div'>
        <i>PRIVACY_LEVEL_ICON</i>
        <div>Entire home/apt</div>
      </div>


      <div className='spot-profile-overview-icon-div'>
        <i>NUM_GUESTS_ICON</i>
        <div>8 Guests</div>
      </div>


      <div className='spot-profile-overview-icon-div'>
        <i>NUM_BEDROOMS_ICON</i>
        <div>4 Bedrooms</div>
      </div>


      <div className='spot-profile-overview-icon-div'>
        <i>NUM_BEDS_ICON</i>
        <div>4 Beds</div>
      </div>

    </div>
  );

};
