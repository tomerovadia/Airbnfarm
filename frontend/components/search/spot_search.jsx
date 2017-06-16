import React from 'react';
import SpotSearchFilter from './spot_search_filter';
import SpotSearchResultsList from './spot_search_results_list';
import SpotSearchMap from './spot_search_map';
import { isEqual } from 'lodash.isequal';

class SpotSearch extends React.Component {

  constructor(props){
    super(props);
    this.criteria = {};

    this.updateCriteria = this.updateCriteria.bind(this);
  }

  componentWillUpdate() {
    // if(JSON.stringify(this.criteria) !== JSON.stringify(this.getCriteriaFromQueryString())){
    //   this.criteria = this.getCriteriaFromQueryString();
    //   this.props.fetchSearchResults(this.criteria);
    // }
  }

  updateCriteria(bounds){
    this.criteria = this.getCriteriaFromQueryString();
    this.criteria.bounds = bounds;
    this.props.fetchSearchResults(this.criteria);
  }


  getCriteriaFromQueryString(){
    const city = this.props.location.query.city || '';

    const criteria = {
      city,
      startDate: this.props.location.query.startDate,
      endDate: this.props.location.query.endDate,
    }

    return criteria;
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
          <SpotSearchMap updateCriteria={this.updateCriteria} searchResults={this.props.searchResults}/>
        </div>

      </div>
    );
  }
}
// <SpotSearchResultsList spotErrors={this.props.spotErrors} searchResults={this.props.searchResults} />

export default SpotSearch;
