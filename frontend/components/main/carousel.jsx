import React from 'react';
import { fetchSearchResults } from '../../actions/spot_actions';
import { connect } from 'react-redux';
import { getSearchResults } from '../../reducers/selectors';
import SpotMini from '../spots/spot_mini';

class Carousel extends React.Component {

  constructor(props){
    super(props);

    this.spots = null;
    const today = new Date();
    const nextMonth = new Date(today.setMonth(today.getMonth() + 1));

    this.props.fetchSearchResults({city: '', startDate: today, nextMonth: nextMonth});
  }

  render() {
    debugger

    if(Object.keys(this.props.searchResults).length >= 3) {
      this.spots = [
        <SpotMini key={this.props.searchResults[0].id} spot={this.props.searchResults[0]} />,
        <SpotMini key={this.props.searchResults[1].id} spot={this.props.searchResults[1]} />,
        <SpotMini key={this.props.searchResults[2].id} spot={this.props.searchResults[2]} />
      ]
    }


    return(
      <div className='carousel-main-container'>
        {this.spots}
      </div>
    );

  }
}


export default connect(
  (state) => {
    return {
      searchResults: getSearchResults(state),
    }
  },

  (dispatch) => {
    return {
      fetchSearchResults: (criteria) => dispatch(fetchSearchResults(criteria)),
    };
  }
)(Carousel);
