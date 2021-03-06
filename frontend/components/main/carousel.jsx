import React from 'react';
import { fetchSearchResults } from '../../actions/spot_actions';
import { connect } from 'react-redux';
import { getSearchResults } from '../../reducers/selectors';
import SpotMini from '../spots/spot_mini';

class Carousel extends React.Component {

  constructor(props){
    super(props);

    this.spots = null;

    this.props.fetchSearchResults({});
  }

  render() {

    if(this.props.searchResults[48]){
      this.spots = [
        <SpotMini key={this.props.searchResults[25].id} spot={this.props.searchResults[25]} />,
        <SpotMini key={this.props.searchResults[35].id} spot={this.props.searchResults[35]} />,
        <SpotMini key={this.props.searchResults[48].id} spot={this.props.searchResults[48]} />
      ]
    } else {
      this.spots = null;
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
