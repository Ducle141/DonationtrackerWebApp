import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import LocationMarker from './LocationMarker';

const LocationMap = withScriptjs(
  withGoogleMap(props => {
    console.log('location -> ', this.props);
    const markers = props.locations.map(location => (
      <LocationMarker
        key={location._id}
        title={location.name}
        address={
          location.streetAddress + ', ' + location.city + ', ' + location.zip
        }
        location={{ lat: location.latitude, lng: location.longtitude }}
      />
    ));

    return (
      <GoogleMap defaultZoom={10} center={{ lat: 33.753746, lng: -84.38633 }}>
        {markers}
      </GoogleMap>
    );
  })
);

export default LocationMap;
