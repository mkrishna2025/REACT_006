import React from 'react';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
 
import { MapParams } from '../../constants';

export default class App extends React.Component {
  
  constructor(props){
      super(props);
      this.state = {
          center: {
            lat: 51.5258541,
            lng: -0.08040660000006028
          },
          markers: [
            {
                lat: 51.5258541,
                lng: -0.09040660000006028
            },
            {
                lat: 51.5258541,
                lng: -0.07040660000006028
            },
            {
                lat: 51.5258541,
                lng: -0.06040660000006028
            }
          ]
      }
  }
  
  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }
 
  onDragEnd(e) {
    console.log('onDragEnd', e);
  }
 
  onCloseClick() {
    console.log('onCloseClick');
  }
 
  onClick(e) {
    console.log('onClick', e);
  }
 
  render() {
      var markers = [];
      for(var marker of this.state.markers){
        markers.push(<Marker
            lat={marker.lat}
            lng={marker.lng}
            draggable={true}
            onDragEnd={this.onDragEnd} />);
      }
    return (
      <Gmaps
        width={'800px'}
        height={'600px'}
        lat={this.state.center.lat}
        lng={this.state.center.lng}
        zoom={12}
        loadingMessage={'Restaurants are Loading'}
        params={MapParams}
        onMapCreated={this.onMapCreated}>
        {markers}
      </Gmaps>
    );
  }
 
};