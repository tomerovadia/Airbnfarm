import React from 'react';
import { Link } from 'react-router';

class Trip extends React.Component {

  constructor(props){
    super(props)
  }

  render(){

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

    const startDate = new Date(this.props.trip.start_date);
    const endDate = new Date(this.props.trip.end_date);
    const dateRange = months[startDate.getMonth()] + ' ' + startDate.getDate() + ' - ' + months[endDate.getMonth()] + ' ' + endDate.getDate() + ', ' + endDate.getFullYear()

    return(
      <div className='trip-main-container'>

        <Link to={`/spots/profile/${this.props.trip.spot_id}`} target='_blank'>

          <div className='trip-photo-and-avatar'>
            <img className='trip-main-photo' src={this.props.trip.spot_main_photo_url}/>

            <div className='host-avatar-div'>
              <img className='host-avatar' src='https://a0.muscache.com/defaults/user_pic-50x50.png?v=2' />
            </div>
          </div>

          <h1 className='trip-city-h1'>{this.props.trip.city}</h1>

          <div className='trip-dates-and-guests-div'>
            <span className='trip-dates-and-guests-span'>
               {dateRange} &middot; {this.props.trip.num_guests} guests
            </span>
          </div>

          <div className='trip-title-div'>
            <span className='trip-title-span'>{this.props.trip.title}</span>
          </div>

        </Link>

        <div className='trip-status-div'>
          <span className='trip-status-span'>Approved</span>
        </div>

        <button className='trip-cancel-button'>Cancel Request</button>



      </div>

    );

  }
}

export default Trip;
