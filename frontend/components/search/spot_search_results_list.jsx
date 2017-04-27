import React from 'react';
import SpotMini from '../spots/spot_mini';

class SpotSearchResultsList extends React.Component {

  constructor(props){
    super(props);
  }

  render() {

    let contents;
    if(Object.keys(this.props.searchResults).length > 0){
      contents = this.props.searchResults.map((spot) => {
        return <SpotMini key={spot.id} spot={spot} />
      });
    } else {
      contents =
        <div className='spot-search-no-results-container'>
          <h1>No results</h1>
          <span>Try adjusting your search. Here are some ideas:</span>
          <ul>
            <li>Change your dates</li>
            <li>Search for a specific city</li>
          </ul>

          <div className='spot-search-no-results-fine-text'><span>Enter dates to see full pricing. Additional fees apply. Taxes may be added.</span></div>
        </div>
    }

    return(
      <div className='spot-search-results-list-container clearfix'>
        { contents }
      </div>
    );
  }
}

export default SpotSearchResultsList;
