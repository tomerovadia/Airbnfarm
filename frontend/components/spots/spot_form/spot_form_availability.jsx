import React from 'react';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import Moment from 'react-moment';
import moment from 'moment';

class SpotFormAvailability extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      focusedInput: null,
      startDate: null,
      endDate: null,
    };
  }

  render(){

    window.state = this.state;

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
          startDate={this.state.startDate} // momentPropTypes.momentObj or null,
          endDate={this.state.endDate} // momentPropTypes.momentObj or null,
          onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
          focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
        />

      </div>

    );
  }

}

export default SpotFormAvailability;
