import React from 'react';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import Moment from 'react-moment';
import moment from 'moment';

class SpotFormAvailability extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      focusedInput: 'startDate',
      startDate: null,
      endDate: null,
    };

    this.props.setTips({'Select a Date': 'Pick wisely'});
    this.onDatesChange = this.onDatesChange.bind(this);
    this.startAvailabilityDate = this.startAvailabilityDate.bind(this);
    this.endAvailabilityDate = this.endAvailabilityDate.bind(this);
  }

  componentWillReceiveProps(newProps){
    if(this.startAvailabilityDate() !== newProps.startAvailabilityDate._d){
      this.setState({startDate: moment(newProps.startAvailabilityDate)});
    }

    if(this.endAvailabilityDate() !== newProps.endAvailabilityDate._d){
      this.setState({endDate: moment(newProps.endAvailabilityDate)});
    }
  }

  startAvailabilityDate(){
    if(this.state.startDate){
      return this.state.startDate._d;
    }
    return null;
  }

  endAvailabilityDate(){
    if(this.state.endDate){
      return this.state.endDate._d;
    }
    return null;
  }


  onDatesChange({ startDate, endDate }){
    this.setState({ startDate, endDate },
      () => this.props.receiveAvailabilityDates(this.startAvailabilityDate(), this.endAvailabilityDate())
    );
  }

  render(){

    // const firstDate = moment({ year :2010, month :3, day :5});
    // const secondDate = moment({ year :2011, month :3, day :5});

    return (

      <div id='spot-form-availability-main-container spot-form-main-container'>
        <h1>Tell us about the availability of your place.</h1>

        <DateRangePicker
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.focusedInput}
          onFocusChange={focusedInput => this.setState({ focusedInput })}
        />

        <br />

        <button className='spot-form-back-button' onClick={this.props.switchForm('details')}>
          Back
        </button>

        <button className='spot-form-next-button' onClick={this.props.handleSubmit}>
          Finish
        </button >

      </div>

    );
  }

}

export default SpotFormAvailability;
