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
          center: {lat: 37.0902, lng: -95.7129},
          zoom: 13,
          zoomControl: true,
        },
    };

    console.log('constructing')
  }

  // componentDidMount() {
  //   // const mapOptions = {
  //   //   center: {lat: 43.226451, lng: -97.965929},
  //   //   zoom: 13,
  //   //   zoomControl: true,
  //   // };
  //
  //   // this.map = new google.maps.Map(this.mapNode, this.state.mapOptions);
  //   // this.MarkerManager = new MarkerManager(this.map);
  //   // this.MarkerManager.updateMarkers(this.props.searchResults);
  // }

  buildMap(){
    console.log('buildMap()')
    let mapOptions = { zoom: 13 };
    let locationQuery = this.props.location.query.city;

    if(locationQuery === ''){
      locationQuery = 'united states'
      mapOptions.zoom = 5
    }

    return this.getLatLng(locationQuery)
      .then((resp) => {
        mapOptions.center = resp.results[0].geometry.location;
        this.updateMapOptions(mapOptions);
      },
        (errors) => console.log('Errors:', errors)
      ).then(() => this.placeMap());
  }

  componentDidMount(){
    console.log('componentDidMount()')
    this.buildMap()
      .then(function(){
        this.MarkerManager = new MarkerManager(this.map);
        this.createMapEventListeners();
      }.bind(this))
  }

  createMapEventListeners(){
    // First time, zoom the map to focus on the pins
    google.maps.event.addListenerOnce(this.map, 'tilesloaded', () => {
      this.updateSearchResults()
        .then(() => this.MarkerManager.updateMarkers(this.props.searchResults, true));
    });

    // Subsequent times, no auto zoom, to allow user to control zoom
    google.maps.event.addListener(this.map, 'idle', () => {
      this.updateSearchResults()
        .then(() => this.MarkerManager.updateMarkers(this.props.searchResults));
    });
  }

  getLatLng(locationQuery){
    console.log('getLatLng()')
    return $.ajax({
      method: 'get',
      url: 'https://maps.googleapis.com/maps/api/geocode/json',
      dataType: 'json',
      data: {address: locationQuery},
    })
  }


  updateMapOptions({center, zoom}){
    console.log('updateMapCenter()')
    const newMapOptions = Object.assign({}, this.state.mapOptions);
    newMapOptions.center = center;
    if(zoom) newMapOptions.zoom = zoom;
    this.setState({ mapOptions: newMapOptions});
  }


  placeMap(){
    console.log('placeMap()')
    this.map = new google.maps.Map(
      document.getElementById('spot-search-map'),
      this.state.mapOptions
    );
  }


  componentWillUpdate(newProps){
    // this.MarkerManager.updateMarkers(newProps.searchResults);
    // this.map = new google.maps.Map(this.mapNode, this.state.mapOptions);
  }

  // componentDidMount(){
  //
  // }

  componentDidUpdate(){
    // map.getBounds().getNorthEast().lng()
  }

  getMapBounds(){
    console.log('getMapBounds()')
    const mapsBoundsObject = this.map.getBounds();
    return {
      SWLat: mapsBoundsObject.getSouthWest().lat(),
      SWLng: mapsBoundsObject.getSouthWest().lng(),
      NELat: mapsBoundsObject.getNorthEast().lat(),
      NELng: mapsBoundsObject.getNorthEast().lng(),
    };
  }

  updateSearchResults(){
    console.log('updateSearchResults()')
    this.criteria = this.getCriteriaFromQueryString();
    this.criteria.bounds = this.getMapBounds();

    return this.props.fetchSearchResults(this.criteria);
  }

  getCriteriaFromQueryString(){
    console.log('getCriteriaFromQueryString()')
    const city = this.props.location.query.city || '';

    const criteria = {
      city,
      startDate: this.props.location.query.startDate,
      endDate: this.props.location.query.endDate,
    }

    return criteria;
  }

  render() {
    console.log('render()')
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
