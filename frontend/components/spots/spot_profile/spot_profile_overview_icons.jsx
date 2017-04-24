import React from 'react';

export default (props) => {

  return(

    <div className='spot-profile-overview-icons'>

      <div className='spot-profile-overview-icon-div'>
        <i className="fa fa-users" aria-hidden="true"></i>
        <div>{props.currentSpot.num_guests} Guests</div>
      </div>


      <div className='spot-profile-overview-icon-div'>
        <i className="fa fa-home" aria-hidden="true"></i>
        <div>{props.currentSpot.num_bedrooms} Bedrooms</div>
      </div>


      <div className='spot-profile-overview-icon-div'>
        <i className="fa fa-bed" aria-hidden="true"></i>
        <div>{props.currentSpot.num_beds} Beds</div>
      </div>

      <div className='spot-profile-overview-icon-div'>
        <i className="fa fa-bath" aria-hidden="true"></i>
        <div>{props.currentSpot.num_bathrooms} Bathrooms</div>
      </div>

    </div>
  );

};
