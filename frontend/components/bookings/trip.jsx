import React from 'react';


class Trip extends React.Component {

  constructor(props){
    super(props)
  }

  render(){


    return(
      <div className='trip-main-container'>

        <div className='trip-photo-and-avatar'>
          <img className='trip-main-photo' src={this.props.trip.spot_main_photo_url}/>

          <div className='host-avatar-div'>
            <img className='host-avatar' src='https://a0.muscache.com/defaults/user_pic-50x50.png?v=2' />
          </div>
        </div>

        <h1 className='trip-city-h1'>{this.props.trip.city}</h1>

        <div className='trip-dates-and-guests-div'>
          <span className='trip-dates-and-guests-span'>{this.props.trip.start_date} - {this.props.trip.end_date} &middot; {this.props.trip.num_guests} guests</span>
        </div>

        <div className='trip-title-div'>
          <span className='trip-title-span'>{this.props.trip.title}</span>
        </div>

        <div className='trip-status-div'>
          <span className='trip-status-span'>Approved</span>
        </div>

        <button className='trip-cancel-button'>Cancel Request</button>

      </div>

    );

  }
}

export default Trip;
