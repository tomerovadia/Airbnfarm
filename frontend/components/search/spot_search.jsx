import React from 'react';
import SpotSearchFilter from './spot_search_filter';
import SpotSearchResultsList from './spot_search_results_list';
import SpotSearchMap from './spot_search_map';
import { isEqual } from 'lodash.isequal';

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
            <SpotSearchResultsList />
          </div>

        </div>


        <div className='spot-search-right'>
          <SpotSearchMap />
        </div>

      </div>
    );
  }
}

export default SpotSearch;
