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
      locationQuery: '',
      searchCriteria: null,
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

    return this.updateMapOptions().then(() => this.placeMap());
  }

  updateMapOptions(){
    console.log('updateMapCenter()')

    let newMapOptions = { zoom: 13 };
    let locationQuery = this.props.location.query.city;

    if(!locationQuery || locationQuery === ''){
      locationQuery = 'united states'
      newMapOptions.zoom = 5
      this.setState({ locationQuery: '' });
    } else {
      this.setState({ locationQuery });
    }

    return this.getLatLng(locationQuery)
      .then((resp) => {
        newMapOptions.center = resp.results[0].geometry.location;
        this.setState({ mapOptions: newMapOptions});
      },
        (errors) => console.log('Errors:', errors)
      )
  }

  componentWillReceiveProps(newProps){
    console.log('componentWillReceiveProps()');

    let locationQuery = newProps.router.location.query.city;
    !locationQuery || locationQuery === '' ? locationQuery = '' : null;
    const locationQueryChanged = locationQuery !== this.state.locationQuery;

    const criteria = this.getCriteriaFromQueryString();
    const startDateChanged = criteria.startDate !== this.state.searchCriteria.startDate;
    const endDateChanged = criteria.endDate !== this.state.searchCriteria.endDate;

    console.log('locationQueryChanged', locationQueryChanged);
    console.log('startDateChanged', startDateChanged);
    console.log('endDateChanged', endDateChanged);

    if(locationQueryChanged || startDateChanged || endDateChanged){
      this.buildMapAndCreateListeners();
    }
  }

  buildMapAndCreateListeners(){
    this.buildMap()
      .then(() => {
        this.MarkerManager = new MarkerManager(this.map);
        this.createInitialMapMarkers();
        this.createMapEventListener();
      })
  }

  componentDidMount(){
    console.log('componentDidMount()')
    this.buildMapAndCreateListeners();
  }

  createInitialMapMarkers(){
    // First time, zoom the map to focus on the pins
    google.maps.event.addListenerOnce(this.map, 'tilesloaded', () => {
      this.updateSearchResults()
        .then(() => this.MarkerManager.updateMarkers(this.props.searchResults, true));
    });
  }

  createMapEventListener(){
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
    this.setState({ searchCriteria: this.criteria });
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
