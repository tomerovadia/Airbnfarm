import React from 'react';
import SpotSearchFilter from './spot_search_filter';
import SpotSearchResultsList from './spot_search_results_list';

class SpotSearch extends React.Component {

  constructor(props){
    super(props);

  }

  render() {

    return(
      <div className='spot-search-main-container'>

        <div className='spot-search-left'>

          <div className='spot-search-filter-container'>
            <SpotSearchFilter />
          </div>

          <div>
            <SpotSearchResultsList searchResults={this.props.searchResults} />
          </div>

        </div>


        <div className='spot-search-right'>

          <div className='spot-search-map-container'>
            

          </div>

        </div>




      </div>
    );
  }
}

export default SpotSearch;
