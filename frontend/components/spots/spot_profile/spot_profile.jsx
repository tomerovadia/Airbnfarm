import React from 'react';
import SpotProfileOverview from './spot_profile_overview';
import SpotProfileSidebar from './spot_profile_sidebar';


class SpotProfile extends React.Component {

  constructor(props){
    super(props);

    this.props.fetchSpot(this.props.params.spotId);
  }

  render() {

    const mainPhotoUrl = this.props.currentSpot.main_photo_url;

    return(

      <div className='spot-profile-main-container'>

        <div className='spot-profile-img-container'>
          <img className='spot-profile-main-img' src={mainPhotoUrl} />

          <div className='spot-profile-photo-overlay'>
            <button className='spot-profile-view-photos-button'>
              View Photos
            </button>
          </div>
        </div>


        <div className='spot-profile-overview-and-sidebar'>

          <SpotProfileOverview currentSpot={this.props.currentSpot}/>

          <SpotProfileSidebar currentSpot={this.props.currentSpot}/>

        </div>

      </div>

    );

  }

}


export default SpotProfile;
