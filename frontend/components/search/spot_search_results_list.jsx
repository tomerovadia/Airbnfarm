import React from 'react';
import SpotMini from '../spots/spot_mini';

class SpotSearchResultsList extends React.Component {

  constructor(props){
    super(props);
  }

  render() {

    let spotMinis;
    if(Object.keys(this.props.searchResults).length > 0){
      spotMinis = this.props.searchResults.map((spot) => {
        return <SpotMini key={spot.id} spot={spot} />
      });
    } else {
      spotMinis = null;
    }

    return(
      <div className='spot-search-results-list-container clearfix'>
        { spotMinis }
      </div>
    );
  }
}

export default SpotSearchResultsList;
