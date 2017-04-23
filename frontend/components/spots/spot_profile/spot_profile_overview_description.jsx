import React from 'react';
import { Link } from 'react-router';

export default (props) => {

  return(

    <div className='spot-profile-overview-description'>

      <p>
        {props.currentSpot.description}
      </p>

    </div>
  );

};
