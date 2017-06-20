import React from 'react';

export default (props) => {



  const handleApproveButtonClick = (e) => {
    props.approveBooking(props.reservation.id);
  }

  const handleDeclineButtonClick = (e) => {
    props.declineBooking(props.reservation.id);
  }


  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
  const startDate = new Date(props.reservation.start_date);
  const endDate = new Date(props.reservation.end_date);
  const dateRange = months[startDate.getMonth()] + ' ' + startDate.getDate() + ' - ' + months[endDate.getMonth()] + ' ' + endDate.getDate() + ', ' + endDate.getFullYear()

  const bookingStatus = props.reservation.booking_status;
  const formattedBookingStatus = bookingStatus.charAt(0).toUpperCase() + bookingStatus.slice(1);

  let statusColor = '#878787';
  let approveButton = <button onClick={handleApproveButtonClick} className='reservation-approve-button'>Approve</button>;
  let declineButton = <button onClick={handleDeclineButtonClick} className='reservation-decline-button'>Decline</button>;
  if(bookingStatus === 'approved'){
    approveButton = null;
    declineButton = null;
    statusColor = 'green';
  } else if (bookingStatus === 'declined') {
    approveButton = null;
    declineButton = null;
    statusColor = 'red';
  } else if (bookingStatus === 'cancelled'){
    approveButton = null;
    declineButton = null;
  }

  return (
    <div className='reservation-main-container'>

      <div className='reservation-left'>
        <img className='reservation-guest-img' src='https://a0.muscache.com/defaults/user_pic-50x50.png?v=2'/>
      </div>

      <div className='reservation-middle'>
        <div className='reservation-guest-email'><span>{props.reservation.guest_email}</span></div>
        <div className='reservation-guest-title'><span>{props.reservation.title}</span></div>
        <div className='reservation-date-range'><span>{dateRange}</span></div>
        <div className='reservation-num-guests'><span>{props.reservation.num_guests} guests</span></div>
      </div>

      <div className='reservation-right'>

        <div className='reservation-status-div'>
          <span style={{color: statusColor}}>{formattedBookingStatus}</span>
        </div>

        {approveButton}

        {declineButton}

      </div>



    </div>


  );


}
