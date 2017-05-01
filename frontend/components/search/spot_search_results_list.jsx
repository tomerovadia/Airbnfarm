import React from 'react';
import SpotMini from '../spots/spot_mini';

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
      this.content = <div className='spot-search-no-results-container'>
          <h1>No results</h1>
          <span>Try adjusting your search. Here are some ideas:</span>
          <ul>
            <li>Change your dates</li>
            <li>Search for a specific city (e.g. 'Agra', 'Tripp' or 'Oil Trough')</li>
          </ul>

          <div className='spot-search-no-results-fine-text'><span>Enter dates to see full pricing. Additional fees apply. Taxes may be added.</span></div>
        </div>
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

export default SpotSearchResultsList;
