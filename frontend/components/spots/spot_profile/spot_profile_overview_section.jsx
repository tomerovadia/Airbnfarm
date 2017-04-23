import React from 'react';

export default (props) => {

  return(

    <div className='spot-profile-overview-section'>

      <div className='spot-profile-overview-section-left'>
        <span>{props.sectionTitle}</span>
      </div>


      <div className='spot-profile-overview-section-right'>
        {props.contents}
      </div>

    </div>
  );

};
