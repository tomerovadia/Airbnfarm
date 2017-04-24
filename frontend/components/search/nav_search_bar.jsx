import React from 'react';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import Moment from 'react-moment';
import moment from 'moment';
import {connect} from 'react-redux';
import { fetchSearchResults } from '../../actions/spot_actions';
import {hashHistory} from 'react-router';


class NavSearchBar extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      city: ''
    };

    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCityChange(e){
    this.setState({city: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.fetchSearchResults(this.state)
      .then(() => hashHistory.push(`/spots/search`));
  }

  render() {

    return(
      <div className='nav-search-bar-main-container'>
        <form id='nav-search-bar-form' onSubmit={this.handleSubmit}>
          <div className='nav-search-bar-left'>
          <input
            type='text'
            placeholder='Anywhere'
            onChange={this.handleCityChange}
            value={this.state.city}
           />
          </div>

          <div className='nav-search-bar-middle'>

          </div>

          <div className='nav-search-bar-right'>

          </div>

          <input className='nav-search-bar-submit-button' type='submit'></input>

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
)(NavSearchBar);
