import React from 'react';
import { Link } from 'react-router';

export default (props) => {

  return(

    <div className='spot-profile-overview-summary'>

      <h3>About this listing</h3>

      <div>
        <p>{props.currentSpot.summary}</p>
      </div>

    </div>
  );

};
