import React from 'react';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import Moment from 'react-moment';
import moment from 'moment';
import {connect} from 'react-redux';
import { fetchSearchResults } from '../../actions/spot_actions';
import {hashHistory, router, withRouter} from 'react-router';
import SpotSearchLocationInput from './spot_search_location_input';

class SpotSearchBar extends React.Component {

  constructor(props){
    super(props);

    const city = this.props.location.query.city || '';

    let startDate = this.props.location.query.startDate;
    let endDate = this.props.location.query.endDate;

    let calendarVisible;
    if(startDate && endDate){
      startDate = moment(startDate);
      endDate = moment(endDate);
      calendarVisible = true;
    } else {
      startDate = null;
      endDate = null;
      calendarVisible = false;
    }

    this.state = {
      calendarProps: {
        focusedInput: null,
      },
      searchCriteria: {
        city,
        startDate,
        endDate,
      },
      calendarVisible,
    };

    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNewDates = this.handleNewDates.bind(this);
    this.handleNewFocusedInput = this.handleNewFocusedInput.bind(this);
    this.showCalendar = this.showCalendar.bind(this);
  }

  handleCityChange(value, submit){
    const newSearchCriteria = Object.assign({}, this.state.searchCriteria);
    newSearchCriteria.city = value;
    this.setState({searchCriteria: newSearchCriteria}, () => {
      if(submit) this.handleSubmit();
    });
  }

  deMomentDate(moment){
    return moment._d.toString();
  }

  handleSubmit(e){
    if(e) e.preventDefault();
    const criteria = Object.assign({}, this.state.searchCriteria);

    if(criteria.startDate && criteria.endDate){
      criteria.startDate = this.deMomentDate(criteria.startDate);
      criteria.endDate = this.deMomentDate(criteria.endDate);
    } else {
      criteria.startDate = null;
      criteria.endDate = null;
    }

    this.props.router.push({pathname: `/spots/search`, query: criteria});
  }

  handleNewDates({ startDate, endDate }){
    const endDateChanged = endDate && (endDate !== this.state.searchCriteria.endDate);
    const newSearchCriteria = Object.assign({}, this.state.searchCriteria);
    newSearchCriteria.startDate = startDate;
    newSearchCriteria.endDate = endDate;
    this.setState({ searchCriteria: newSearchCriteria }, () => {
      if(endDateChanged) this.handleSubmit();
    });
  }

  handleNewFocusedInput(newFocusedInput){
    const newCalendarProps = Object.assign({}, this.state.calendarProps);
    newCalendarProps.focusedInput = newFocusedInput;
    this.setState({ calendarProps: newCalendarProps });
  }

  showCalendar() {
    this.setState({ calendarVisible: true })
    this.handleNewFocusedInput('startDate')
  }

  render() {

    const calendarDisplay = this.state.calendarVisible ? 'block' : 'none';
    const anytimeLabelDisplay = this.state.calendarVisible ? 'none' : 'block';

    return(
      <div className='spot-search-bar-main-container'>
        <form onSubmit={this.handleSubmit} className='spot-search-bar-form'>

          <div className='spot-search-bar-left'>
            <label>Where</label>
            <SpotSearchLocationInput
              handleCityChange={this.handleCityChange}
              initialValue={this.state.searchCriteria.city}
              handleSubmit={this.handleSubmit}
            />
          </div>


          <div className='spot-search-bar-middle'>
            <label>When</label>

            <div className='spot-search-bar-when-contents'>
                <input
                  className='spot-search-bar-anywhere-input'
                  type='text'
                  placeholder='Anytime'
                  style={{display: anytimeLabelDisplay}}
                  onClick={this.showCalendar}
                 />

               <div className='spot-search-bar-calendar' style={{display: calendarDisplay}}>
                <DateRangePicker
                  startDate={this.state.searchCriteria.startDate}
                  endDate={this.state.searchCriteria.endDate}
                  onDatesChange={this.handleNewDates}
                  focusedInput={this.state.calendarProps.focusedInput}
                  onFocusChange={this.handleNewFocusedInput}
                  displayFormat='MMM D'
                  startDatePlaceholderText='Check In'
                  endDatePlaceholderText='Check Out'
                />
              </div>
            </div>
          </div>



          <div className='spot-search-bar-right'>
            <div>
              <label></label>
              <div></div>
            </div>

            <div>
              <button
                type='submit'
                className='spot-search-bar-search-button'
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
)(withRouter(SpotSearchBar));
