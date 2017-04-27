import React from 'react';


class Trip extends React.Component {

  constructor(props){
    super(props)
  }



  render(){

    return(
      <div className='trip-main-container'>

        <div className='trip-photo-and-avatar'>
          <img className='trip-main-photo' src='http://s3.amazonaws.com/airbnfarm-dev/spots/main_photos/000/000/227/original/farm6.jpg?1493219515'/>

          <div className='host-avatar-div'>
            <img className='host-avatar' src='https://a0.muscache.com/defaults/user_pic-50x50.png?v=2' />
          </div>
        </div>

        <h1 className='trip-city-h1'>Brooklyn</h1>

        <div className='trip-dates-and-guests-div'>
          <span className='trip-dates-and-guests-span'>Mar 20 - April 15, 2017 &middot; 2 guests</span>
        </div>

        <div className='trip-title-div'>
          <span className='trip-title-span'>2 bedroom apt in beautiful Brooklyn</span>
        </div>

        <div className='trip-status-div'>
          <span className='trip-status-span'>Approved</span>
        </div>

        <button className='trip-cancel-button'>Cancel Request</button>

      </div>

    );

  }

<<<<<<< HEAD


=======
>>>>>>> make-usersettingsdropdown-disappear
}

export default Trip;
