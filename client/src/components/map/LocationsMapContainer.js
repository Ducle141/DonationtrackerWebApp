import React from 'react';
import LocationMap from './LocationMap';

export default class LocationsMapContainer extends React.Component {
  render() {
    return (
      <LocationMap
        locations={this.props.locations}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAvF2wx-hOnCNpXah6I1JEKjY2qWY5g2Fk
        &v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `600px`, width: `1000px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}
