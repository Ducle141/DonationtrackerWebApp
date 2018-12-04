import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';
import { getLocations } from '../../actions/locationActions';
import TextFieldGroup from '../common/TextFieldGroup';
import SelectListGroup from '../common/SelectListGroup';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayLocationInputs: false,
      email: '',
      password: '',
      password2: '',
      userType: '',
      location: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
    console.log('component did mount');
    this.props.getLocations();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    if (e.target.name === 'userType') {
      if (e.target.value === 'Employee') {
        this.setState({ displayLocationInputs: true });
      } else {
        this.setState({ displayLocationInputs: false, location: '' });
      }
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      userType: this.state.userType,
      location: this.state.location
    };
    console.log('------');
    this.props.registerUser(newUser, this.props.history);
  }

  render() {
    console.log(this.props.location);
    const { errors, displayLocationInputs } = this.state;

    const { x, locations, loading } = this.props.location;

    let locationInputs;
    let locationValues = [];
    // Select option for user role
    const user_roles = [
      { label: 'User', value: 'User' },
      { label: 'Employee', value: 'Employee' },
      { label: 'Admin', value: 'Admin' }
    ];

    if (locations !== null && locations !== undefined && locations.length > 0) {
      console.log(locations);

      locations.map(loc => {
        locationValues.push({ label: loc.name, value: loc._id });
      });
    } else {
      console.log(locations);
      console.log('-------------------------');
      locationValues.push({ label: 'No available location', value: 0 });
    }

    if (displayLocationInputs) {
      locationInputs = (
        <SelectListGroup
          placeholder="Employee Location"
          name="location"
          value={this.state.location}
          onChange={this.onChange}
          options={locationValues}
          error={errors.location}
          info="Location of Employee"
        />
      );
    }

    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">
                Create your Donation Tracker account
              </p>
              <form noValidate onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  error={errors.email}
                  // info="This site uses Gravatar so if you want a profile image, use a Gravatar email"
                />
                <TextFieldGroup
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  error={errors.password}
                />
                <TextFieldGroup
                  placeholder="Confirm Password"
                  name="password2"
                  type="password"
                  value={this.state.password2}
                  onChange={this.onChange}
                  error={errors.password2}
                />
                <SelectListGroup
                  placeholder="User Roles"
                  name="userType"
                  value={this.state.userType}
                  onChange={this.onChange}
                  options={user_roles}
                  error={errors.status}
                  info="Select User Role"
                />
                {locationInputs}
                <input
                  type="submit"
                  className="btn btn-secondary btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  getLocations: PropTypes.func.isRequired,
  registerUser: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  location: state.location,
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser, getLocations }
)(Register);
