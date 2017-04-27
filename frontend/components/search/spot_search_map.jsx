import React from 'react';
import MarkerManager from '../../util/map_marker_manager';

class SpotSearchMap extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount() {
    const mapOptions = {
      center: {lat: 43.226451, lng: -97.965929},
      zoom: 13,
      zoomControl: true,
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.searchResults);
  }

  componentWillUpdate(newProps){
    this.MarkerManager.updateMarkers(newProps.searchResults);
  }


  render() {


    return(
      <div className='spot-search-map-main-container'>

        <div ref={thisdiv => this.mapNode = thisdiv} className='spot-search-map'>

        </div>

      </div>
    );

  }


}

export default SpotSearchMap;
