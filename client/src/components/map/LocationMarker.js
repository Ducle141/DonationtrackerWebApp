import React from 'react';
import { Marker, InfoWindow } from 'react-google-maps';

export default class LocationMarker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  handleToggleOpen = () => {
    this.setState({
      isOpen: true
    });
  };

  handleToggleClose = () => {
    this.setState({
      isOpen: false
    });
    this.props.handleCloseCall;
  };

  render() {
    console.log('google marker');
    console.log(this.props);
    return (
      <Marker
        name={this.props.title}
        position={this.props.location}
        onClick={() => this.handleToggleOpen()}
      >
        {this.state.isOpen && (
          <InfoWindow onCloseClick={this.props.handleToggleClose}>
            <div>
              <h3>{this.props.title}</h3>
              <h4>Address: {this.props.address}</h4>
            </div>
          </InfoWindow>
        )}
      </Marker>
    );
  }
}
