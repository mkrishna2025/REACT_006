import React from 'react';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import Autocomplete from 'react-google-autocomplete';
 
import { MapParams } from '../../constants';
 
export default class App extends React.Component {
  
  constructor(props){
      super(props);
      this.state = {
          center: {
            lat: 17.4374614,
            lng: 78.4482878
          }
        }
  }
  
  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }
  render() {
    return (
        <div>
            <Autocomplete
                style={{width: '90%'}}
                onPlaceSelected={(place) => {
                    console.log(place.geometry.location.lat());
                    console.log(place.geometry.location.lng());
                    this.setState({
                        center: {
                            lat: place.geometry.location.lat(),
                            lng: place.geometry.location.lng()
                        }
                    })
                }}
                types={['(regions)']}
                componentRestrictions={{country: "in"}}
            />
            <Gmaps
                width={'800px'}
                height={'600px'}
                lat={this.state.center.lat}
                lng={this.state.center.lng}
                zoom={15}
                loadingMessage={'Restaurants are Loading'}
                params={MapParams}
                onMapCreated={this.onMapCreated}>
            </Gmaps>
        </div>
    );
  }
};