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
  }

  render(){

    const onDatesChange = ({ startDate, endDate }) => {
      this.setState({startDate});
      this.setState({endDate});
    };

    const firstDate = moment({ year :2010, month :3, day :5})
    const secondDate = moment({ year :2011, month :3, day :5})

    return (

      <div id='spot-form-availability-main-container spot-form-main-container'>
        <h1>Tell us about the availability of your place.</h1>

        <DateRangePicker
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
          focusedInput={this.state.focusedInput}
          onFocusChange={focusedInput => this.setState({ focusedInput })}
        />

      </div>

    );
  }

}

export default SpotFormAvailability;
