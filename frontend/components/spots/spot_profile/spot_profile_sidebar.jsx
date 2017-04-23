import React from 'react';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import Moment from 'react-moment';
import moment from 'moment';

class SpotProfileSidebar extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      focusedInput: 'startDate',
      startDate: null,
      endDate: null,
    };
  }




  render(){

    return(

      <div className='spot-profile-sidebar'>

        <div className='spot-profile-price-overlay'>
          <div className='spot-profile-text'>
            <span className='spot-profile-price'>$123</span><span>per night</span>
          </div>
        </div>

        <div className='spot-profile-sidebar-contents'>

          <div className='spot-profile-calendar-labels'>
            <label>Check In</label>
            <label>Check Out</label>
          </div>

          <div className='spot-profile-booking-calendar'>
            <DateRangePicker
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
              focusedInput={this.state.focusedInput}
              onFocusChange={focusedInput => this.setState({ focusedInput })}
              startDatePlaceholderText='mm/dd/yyyy'
              endDatePlaceholderText='mm/dd/yyyy'
            />

          </div>



          <div className='spot-profile-guests-select-div'>
            <label>Guests</label>
            <select className='spot-profile-guests-select'>
              <option>1 guest</option>
            </select>
          </div>

          <div className='spot-profile-request-to-book-button-div'>
            <button className='spot-profile-request-to-book-button'>
              Request to Book
            </button>
            <span>You won't be charged yet</span>
          </div>

        </div>

      </div>
    );


  }




}

export default SpotProfileSidebar;
