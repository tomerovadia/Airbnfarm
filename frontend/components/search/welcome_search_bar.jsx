import React from 'react';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import Moment from 'react-moment';
import moment from 'moment';

class WelcomeSearchBar extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      where: ''
    };

    this.handleWhereChange = this.handleWhereChange.bind(this);
  }

  handleWhereChange(e){
    this.setState({where: e.target.value});
  }

  render() {

    window.state = this.state;

    return(
      <div className='welcome-search-bar-main-container'>
        <form className='welcome-search-bar-form'>
          <div className='welcome-search-bar-left'>
            <label>Where</label>
            <input
              type='text'
              placeholder='Anywhere'
              onChange={this.handleWhereChange}
             />
          </div>

          <div className='welcome-search-bar-middle'>
            <label>When</label>
            <div></div>
          </div>

          <div className='welcome-search-bar-right'>
            <div>
              <label>Guests</label>
              <div></div>
            </div>

            <div>
              <button>Search</button>
            </div>

          </div>

        </form>

      </div>
    );

  }



}

export default WelcomeSearchBar;
