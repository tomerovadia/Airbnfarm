import React from 'react';
import MarkerManager from '../../util/map_marker_manager';
import { withRouter } from 'react-router';
import { getSearchResults } from '../../reducers/selectors';
import { connect } from 'react-redux';
import { fetchSearchResults } from '../../actions/spot_actions';

class SpotSearchMap extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      mapOptions: {
          center: {lat: 43.226451, lng: -97.965929},
          zoom: 13,
          zoomControl: true,
        },
    };

    this.initiateMap();
  }

  componentDidMount() {
    // const mapOptions = {
    //   center: {lat: 43.226451, lng: -97.965929},
    //   zoom: 13,
    //   zoomControl: true,
    // };

    // this.map = new google.maps.Map(this.mapNode, this.state.mapOptions);
    // this.MarkerManager = new MarkerManager(this.map);
    // this.MarkerManager.updateMarkers(this.props.searchResults);
  }

  initiateMap(){
    const locationQuery = this.props.location.query.city;

    $.ajax({
      method: 'get',
      url: 'https://maps.googleapis.com/maps/api/geocode/json',
      dataType: 'json',
      data: {address: locationQuery},
    }).then(function(resp){
        this.updateMapCenter(resp.results[0].geometry.location)
      }.bind(this),
      (errors) => console.log('Errors:', errors)
    ).then(function(){
        this.map = new google.maps.Map(document.getElementById('spot-search-map'), this.state.mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
        this.updateSearchResults(this.map.getBounds());
      }.bind(this))
  }

  updateMapCenter(center){
    const newMapOptions = Object.assign({}, this.state.mapOptions);
    newMapOptions.center = center;
    this.setState({ mapOptions: newMapOptions});
  }


  componentWillUpdate(newProps){
    // this.MarkerManager.updateMarkers(newProps.searchResults);
    // this.map = new google.maps.Map(this.mapNode, this.state.mapOptions);
  }

  componentDidMount(){

  }

  componentDidUpdate(){
    // map.getBounds().getNorthEast().lng()
  }

  updateSearchResults(bounds){
    this.criteria = this.getCriteriaFromQueryString();
    this.criteria.bounds = bounds;
    this.props.fetchSearchResults(this.criteria)
      .then(function(){
        this.MarkerManager.updateMarkers(this.props.searchResults)
      }.bind(this));
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
    console.log(this.state.mapOptions.center);

    return(
      <div className='spot-search-map-main-container'>
        <div id='spot-search-map'></div>
      </div>
    );

  }
  // <div ref={thisdiv => this.mapNode = thisdiv} className='spot-search-map'></div>

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
    }
  }
)(withRouter(SpotSearchMap));
