import React from 'react';
import MarkerManager from '../../util/map_marker_manager';

class SpotSearchMap extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount() {
    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13,
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.searchResults);
  }

  componentDidUpdate(){
    this.MarkerManager.updateMarkers(this.props.searchResults);
  }


  render() {


    return(
      <div className='spot-search-map-main-container'>
        <span>asdfasdf</span>

        <div ref={thisdiv => this.mapNode = thisdiv} className='spot-search-map'>

        </div>

      </div>
    );

  }


}

export default SpotSearchMap;
