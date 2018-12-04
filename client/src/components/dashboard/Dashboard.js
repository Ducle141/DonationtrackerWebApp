import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { getCurrentProfile, deleteAccount } from '../../actions/profileActions';
// import Spinner from '../common/Spinner';
// import ProfileActions from './ProfileActions';

import Locations from '../locations/Locations';
import Items from '../items/Items';

class Dashboard extends Component {
  componentDidMount() {
    // this.props.getCurrentProfile();
    // TODO: this.props.getRole();
  }

  onDeleteClick(e) {
    this.props.deleteAccount();
  }

  render() {
    const { user } = this.props.auth;
    // const { profile, loading } = this.props.profile;

    let userContent;

    if (user.userType == 'User' || user.userType == 'Employee') {
      userContent = <Items />;
    } else {
      userContent = <Locations />;
    }

    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4">Dashboard</h1>
              <p className="lead text-muted">Welcome {user.email}</p>
              {userContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  // getCurrentProfile: PropTypes.func.isRequired,
  // deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
  // profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  // profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps
  // { getCurrentProfile, deleteAccount }
)(Dashboard);
