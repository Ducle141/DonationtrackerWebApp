import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Spinner from '../common/Spinner';
import { getLocations } from '../../actions/locationActions';
import LocationItem from './LocationItem';

class Locations extends Component {
  componentDidMount() {
    this.props.getLocations();
  }

  render() {
    const { locations, loading } = this.props.location;
    let locationContent;

    if (locations === null || loading) {
      locationContent = <Spinner />;
    } else {
      if (locations.length > 0) {
        locationContent = locations.map(location => (
          <LocationItem key={location._id} location={location} />
        ));
      } else {
        locationContent = <h4> NO locations available...</h4>;
      }
    }

    return (
      <div className="locations">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Stores Gallery</h1>

              {locationContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Locations.propTypes = {
  getLocations: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  location: state.location
});

export default connect(
  mapStateToProps,
  { getLocations }
)(Locations);
