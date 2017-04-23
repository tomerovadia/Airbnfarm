import React from 'react';
import SpotProfileOverviewHeading from './spot_profile_overview_heading';
import SpotProfileOverviewIcons from './spot_profile_overview_icons';
import SpotProfileOverviewSummary from './spot_profile_overview_summary';
import SpotProfileOverviewSection from './spot_profile_overview_section';
import SpotProfileOverviewThespace from './spot_profile_overview_thespace';
import SpotProfileOverviewDescription from './spot_profile_overview_description';

export default (props) => {

  return(

    <div className='spot-profile-overview'>

      <SpotProfileOverviewHeading currentSpot={props.currentSpot}/>

      <SpotProfileOverviewIcons currentSpot={props.currentSpot} />

      <SpotProfileOverviewSummary currentSpot={props.currentSpot} />

      <div className='spot-profile-overview-sections'>
        <SpotProfileOverviewSection sectionTitle='The space' contents={<SpotProfileOverviewThespace currentSpot={props.currentSpot} />}/>
        <SpotProfileOverviewSection sectionTitle='Description' contents={<SpotProfileOverviewDescription currentSpot={props.currentSpot} />}/>
      </div>

    </div>
  );

};
