import React from 'react';
import MarkerManager from '../../util/map_marker_manager';
import { withRouter } from 'react-router';

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

    const locationQuery = this.props.location.query.city;

    $.ajax({
      method: 'get',
      url: 'https://maps.googleapis.com/maps/api/geocode/json',
      dataType: 'json',
      data: {address: locationQuery},
    }).then(function(resp){
      const newMapOptions = Object.assign({}, this.state.mapOptions);
      newMapOptions.center = resp.results[0].geometry.location;
      this.setState({ mapOptions: newMapOptions});
    }.bind(this),
      // (resp) => console.log(resp.results[0].geometry.location),
      // (resp) => this.addMarker(resp.results[0].geometry.location),
      (errors) => console.log('Errors:', errors)
    )
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

  componentWillUpdate(newProps){
    // this.MarkerManager.updateMarkers(newProps.searchResults);
    // this.map = new google.maps.Map(this.mapNode, this.state.mapOptions);
  }

  componentDidUpdate(){
    this.map = new google.maps.Map(document.getElementById('spot-search-map'), this.state.mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.props.updateCriteria(this.map.getBounds());
    this.MarkerManager.updateMarkers(this.props.searchResults);
    // map.getBounds().getNorthEast().lng()
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

export default withRouter(SpotSearchMap);
