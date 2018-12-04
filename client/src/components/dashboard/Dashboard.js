import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import Spinner from '../common/Spinner';
// import ProfileActions from './ProfileActions';

import Locations from '../locations/Locations';
import Items from '../items/Items';
// import AddItem from '../add-item/AddItem';
import LocationsMapContainer from '../map/LocationsMapContainer';
import { getLocations } from '../../actions/locationActions';

class Dashboard extends Component {
  componentDidMount() {
    this.props.getLocations();
  }

  onDeleteClick(e) {
    this.props.deleteAccount();
  }

  render() {
    const { user } = this.props.auth;
    // const { profile, loading } = this.props.profile;
    const { locations } = this.props.locations;
    console.log('test Dashbaord');
    console.log(locations);
    let userContent;

    if (user.userType == 'User') {
      userContent = (
        <div className="btn-group mb-4" role="group">
          <div className="col-md-12">
            <div className="row">
              <Items />
            </div>
            <div className="row">
              {locations !== null && locations !== undefined ? (
                <LocationsMapContainer locations={locations} />
              ) : null}
            </div>
          </div>
        </div>
      );
    } else if (user.userType == 'Employee') {
      userContent = (
        <div className="btn-group mb-4" role="group">
          <div className="col-md-12">
            <div className="row">
              <Link to="/add-item" className="btn btn-light">
                <i className="fas fa-hand-holding-usd text-secondary mr-1" />
                Add Item
              </Link>
            </div>

            <div className="row">
              <Items />
            </div>
          </div>
        </div>
      );
    } else {
      userContent = (
        <div className="btn-group mb-4" role="group">
          <div className="col-md-12">
            <div className="row">
              <Locations />
            </div>
            <div className="row">
              {locations !== null && locations !== undefined ? (
                <LocationsMapContainer locations={locations} />
              ) : null}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4">Dashboard</h1>
              <p className="lead text-muted">Welcome {user.email}</p>{' '}
              {user.userType === 'Employee' ? (
                <p className="lead text-muted">Location {user.location}</p>
              ) : (
                ''
              )}
              {userContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getLocations: PropTypes.func.isRequired,
  // deleteAccount: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
  // profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  // profile: state.profile,
  locations: state.location,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  // { getCurrentProfile, deleteAccount }
  { getLocations }
)(Dashboard);
