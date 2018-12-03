import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import classnames from 'classnames';
// import { Link } from 'react-router-dom';

class LocationItem extends Component {
  render() {
    const { location } = this.props;

    return (
      <div className="card card-body bg-light mb-3">
        <div className="row">
          <div className="col-lg-6 col-md-4 col-8">
            <h3>{location.name}</h3>
            <p>Type: {location.type} </p>
          </div>
          <div className="col-md-4 d-none d-md-block">
            {/* <p>Phone: {location.phone}</p> */}
            <p>Website: {location.website}</p>
            <p>
              Address: {location.streetAddress} {location.city} {location.state}{' '}
              {location.zip}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

LocationItem.propTypes = {
  location: PropTypes.object.isRequired
};

// const mapStateToProps = state => ({
//   auth: state.auth
// });

export default LocationItem;
