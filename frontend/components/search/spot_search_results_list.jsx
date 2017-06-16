import React from 'react';
import SpotMini from '../spots/spot_mini';
import { connect } from 'react-redux';
import { getSearchResults } from '../../reducers/selectors';
import noSearchResultsHTML from './no_search_results';


class SpotSearchResultsList extends React.Component {

  constructor(props){
    super(props);

    this.contents = null;
  }

  componentWillReceiveProps(newProps){
    if(Object.keys(newProps.searchResults).length > 0){
      this.content = newProps.searchResults.map((spot) => {
        return <SpotMini key={spot.id} spot={spot} />
      });
    } else if(newProps.spotErrors === 404){
      this.content = noSearchResultsHTML;
    }
  }

  render() {

    return(
      <div className='spot-search-results-list-container clearfix'>
        { this.content }
      </div>
    );
  }
}

export default connect(
  (state) => {
    return {
      searchResults: getSearchResults(state),
      spotErrors: state.spots.errors,
    }
  },
  (dispatch) => {return {}}
)(SpotSearchResultsList);
