import React from 'react';
import SpotMini from '../spots/spot_mini';

class SpotSearchResultsList extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    const spotMinis = this.props.searchResults.map((spot) => <SpotMini key={spot.id} spot={spot} />)

    return(
      <div className='spot-search-results-list-container clearfix'>
        { spotMinis }
      </div>
    );
  }
}

export default SpotSearchResultsList;
