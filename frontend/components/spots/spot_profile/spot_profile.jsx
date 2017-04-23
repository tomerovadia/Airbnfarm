import React from 'react';


class SpotProfile extends React.Component {

  constructor(props){
    super(props);

    this.props.fetchSpot(this.props.params.spotId);
  }

  render() {

    let mainPhotoUrl = '';
    if(this.props.currentSpot){
      mainPhotoUrl = this.props.currentSpot.main_photo_url;
    }


    return(

      <div className='spot-profile-main-container'>

        <img src={mainPhotoUrl}>


        </img>

      </div>

    );

  }

}


export default SpotProfile;
