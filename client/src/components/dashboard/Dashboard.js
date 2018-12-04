import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { getCurrentProfile, deleteAccount } from '../../actions/profileActions';
// import Spinner from '../common/Spinner';
// import ProfileActions from './ProfileActions';

import Locations from '../locations/Locations';
import Items from '../items/Items';
// import AddItem from '../add-item/AddItem';

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

    if (user.userType == 'User') {
      userContent = <Items />;
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
