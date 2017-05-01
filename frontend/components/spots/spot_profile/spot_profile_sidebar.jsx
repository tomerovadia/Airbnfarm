import React from 'react';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
const moment = extendMoment(Moment);

class SpotProfileSidebar extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      availabilities: [],
      focusedInput: null,
      startDate: null,
      endDate: null,
      numGuests: 1,
    };

    this.isDayBlocked = this.isDayBlocked.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNumGuestsChange = this.handleNumGuestsChange.bind(this);
  }

  componentWillReceiveProps(newProps){
    if(newProps.currentSpot.availabilities){
      this.setState({availabilities: newProps.currentSpot.availabilities.map((date) => {
        let dateObj = new Date(date);
        dateObj.setTime(dateObj.getTime() + (4*60*60*1000));
        return moment(dateObj);
      })})
    }
  }

  isDayBlocked(day){
    return !this.state.availabilities.some((availableDate) => {
      return availableDate.startOf('day').isSame(day.startOf('day'));
    });
  }

  handleNumGuestsChange(e){
    this.setState({numGuests: parseInt(e.target.value)});
  }

  deMomentDate(moment){
    return moment._d.toString();
  }

  handleSubmit(e){
    e.preventDefault();

    if(this.props.loggedIn){
      this.props.createBooking({
        num_guests: this.state.numGuests,
        start_date: this.deMomentDate(this.state.startDate),
        end_date: this.deMomentDate(this.state.endDate),
        spot_id: this.props.currentSpot.id,
      });

      this.props.router.push('/bookings/trips');
    } else {
      debugger
      this.props.receiveModal('login');
    }
  }

  render(){

    let numGuestOptions = [];
    for(let i=1; i <= this.props.currentSpot.num_guests; i++){
      numGuestOptions.push(<option key={i} value={i}>{i} guests</option>);
    }

    return(

      <div className='spot-profile-sidebar'>

        <div className='spot-profile-price-overlay'>
          <div className='spot-profile-text'>
            <span className='spot-profile-price'>${this.props.currentSpot.base_price}</span><span>per night</span>
          </div>
        </div>

        <form className='spot-profile-sidebar-form' onSubmit={this.handleSubmit}>

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
            <select className='spot-profile-guests-select' onChange={this.handleNumGuestsChange}>
              {numGuestOptions}
            </select>
          </div>

          <div className='spot-profile-request-to-book-button-div'>
            <button className='spot-profile-request-to-book-button'>
              Request to Book
            </button>
            <span>You won't be charged yet</span>
          </div>

        </form>

      </div>
    );


  }

}

export default SpotProfileSidebar;
