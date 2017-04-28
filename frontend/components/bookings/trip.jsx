import React from 'react';
import { Link } from 'react-router';

class Trip extends React.Component {

  constructor(props){
    super(props)

    this.handleCancelButtonClick = this.handleCancelButtonClick.bind(this);
  }

  handleCancelButtonClick(){
    debugger
    this.props.cancelBooking(this.props.trip.id);
  }

  render(){

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

    let startDate = new Date(this.props.trip.start_date);
    startDate.setTime(startDate.getTime() + (4*60*60*1000)) // convert to UTC

    let endDate = new Date(this.props.trip.end_date);
    endDate.setTime(endDate.getTime() + (4*60*60*1000)) // convert to UTC


    const dateRange = months[startDate.getMonth()] + ' ' + startDate.getDate() + ' - ' + months[endDate.getMonth()] + ' ' + endDate.getDate() + ', ' + endDate.getFullYear()

    const bookingStatus = this.props.trip.booking_status;
    const formattedBookingStatus = bookingStatus.charAt(0).toUpperCase() + bookingStatus.slice(1);

    let statusColor = '#878787';
    if(bookingStatus === 'approved'){
      statusColor = 'green';
    } else if (bookingStatus === 'declined') {
      statusColor = 'red';
    }

    let cancelButton = null;
    if(this.props.trip.booking_status === 'pending'){
      cancelButton = <button className='trip-cancel-button' onClick={this.handleCancelButtonClick}>Cancel Request</button>;
    }

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
          <span style={{color: statusColor}} className='trip-status-span'>{formattedBookingStatus}</span>
        </div>

        {cancelButton}



      </div>

    );

  }
}

export default Trip;
