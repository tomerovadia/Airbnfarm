import React from 'react';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import Moment from 'react-moment';
import moment from 'moment';
import {connect} from 'react-redux';
import { fetchSearchResults } from '../../actions/spot_actions';
import {hashHistory} from 'react-router';

class WelcomeSearchBar extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      calendarProps: {
        focusedInput: 'startDate',
      },
      searchCriteria: {
        city: '',
        startDate: null,
        endDate: null,
      },
    };

    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNewDates = this.handleNewDates.bind(this);
    this.handleNewFocusedInput = this.handleNewFocusedInput.bind(this);
  }

  handleCityChange(e){
    const newSearchCriteria = this.state.searchCriteria;
    newSearchCriteria.city = e.target.value;
    this.setState({searchCriteria: newSearchCriteria});
  }

  handleSubmit(e){
    e.preventDefault();

    const criteria = this.state.searchCriteria;

    if(this.state.searchCriteria.startDate && this.state.searchCriteria.endDate){
      criteria.startDate = this.state.searchCriteria.startDate._d;
      criteria.endDate = this.state.searchCriteria.endDate._d;
    } else {
      delete criteria.startDate
      delete criteria.endDate
    }

    this.props.fetchSearchResults(criteria)
      .then(() => hashHistory.push(`/spots/search`));
  }

  handleNewDates({ startDate, endDate }){
    const newSearchCriteria = this.state.searchCriteria;
    newSearchCriteria.startDate = startDate;
    newSearchCriteria.endDate = endDate;
    this.setState({ searchCriteria: newSearchCriteria });
  }

  handleNewFocusedInput(newFocusedInput){
    const newCalendarProps = this.state.calendarProps;
    newCalendarProps.focusedInput = newFocusedInput;
    this.setState({ calendarProps: newCalendarProps });
  }

  render() {

    return(
      <div className='welcome-search-bar-main-container'>
        <form id='welcome-search-bar-form' onSubmit={this.handleSubmit}>




          <div className='welcome-search-bar-left'>
            <label>Where</label>
            <input
              type='text'
              placeholder='Anywhere'
              onChange={this.handleCityChange}
              value={this.state.searchCriteria.city}
             />
          </div>




          <div className='welcome-search-bar-middle'>
            <label>When</label>
            <div className='welcome-search-bar-calendar'>
              <DateRangePicker
                startDate={this.state.searchCriteria.startDate}
                endDate={this.state.searchCriteria.endDate}
                onDatesChange={this.handleNewDates}
                focusedInput={this.state.calendarProps.focusedInput}
                onFocusChange={this.handleNewFocusedInput}
              />

            </div>
          </div>



          <div className='welcome-search-bar-right'>
            <div>
              <label>Guests</label>
              <div></div>
            </div>

            <div>
              <button
                type='submit'
                form='welcome-search-bar-form'
                className='welcome-search-bar-search-button'
                >
                Search
              </button>
            </div>

          </div>






        </form>

      </div>
    );
  }
}

export default connect(
  (state) => {return {};},

  (dispatch) => {
    return {
      fetchSearchResults: (criteria) => dispatch(fetchSearchResults(criteria)),
    };
  }
)(WelcomeSearchBar);
