import React from 'react';
import { fetchSearchResults } from '../../actions/spot_actions';
import { connect } from 'react-redux';
import { getSearchResults } from '../../reducers/selectors';
import SpotMini from '../spots/spot_mini';

class Carousel extends React.Component {

  constructor(props){
    super(props);

    this.spots = 'turkey';
    const today = new Date();
    const nextMonth = new Date(today.setMonth(today.getMonth() + 1));

    this.props.fetchSearchResults({city: '', startDate: today, nextMonth: nextMonth});
  }

  render() {

    if(Object.keys(this.props.searchResults).length > 0) {
      this.spots = [
        <SpotMini spot={this.props.searchResults[0]} />,
        <SpotMini spot={this.props.searchResults[1]} />,
        <SpotMini spot={this.props.searchResults[2]} />
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
