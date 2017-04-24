import React from 'react';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
const moment = extendMoment(Moment);

class SpotProfileSidebar extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      focusedInput: 'startDate',
      startDate: null,
      endDate: null,
    };

    this.isDayBlocked = this.isDayBlocked.bind(this);
  }

  isDayBlocked(day){
    const startDate = moment('Sat, 02 May 2017');
    const endDate = moment('Sat, 10 May 2017');

    const range = moment().range(startDate, endDate);

    console.log(day.within(range));

    debugger
  }

  render(){

    return(

      <div className='spot-profile-sidebar'>

        <div className='spot-profile-price-overlay'>
          <div className='spot-profile-text'>
            <span className='spot-profile-price'>${this.props.currentSpot.base_price}</span><span>per night</span>
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
              isDayBlocked={this.isDayBlocked}
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
