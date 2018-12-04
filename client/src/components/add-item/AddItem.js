import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import InputGroup from '../common/InputGroup';
import SelectListGroup from '../common/SelectListGroup';
import { addItem, getCategories } from '../../actions/itemActions';
import { getLocations } from '../../actions/locationActions';

class AddItem extends Component {
  constructor() {
    super();
    this.state = {
      description: '',
      longDescription: '',
      location: '',
      category: '',
      value: 0.0,
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    // if (this.props.auth.isAuthenticated) {
    //   this.props.history.push('/dashboard');
    // }
    console.log('component did mount');

    this.props.getLocations();
    this.props.getCategories();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const itemData = {
      description: this.state.description,
      longDescription: this.state.longDescription,
      location: this.state.location,
      category: this.state.category,
      value: this.state.value
    };
    console.log('adding item on submit');
    console.log(itemData);
    this.props.addItem(itemData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    // Select options for status

    const { categories } = this.props.category;
    const { locations } = this.props.location;

    let locationValues = [];
    if (locations !== null && locations !== undefined && locations.length > 0) {
      console.log(locations);

      locations.map(loc => {
        locationValues.push({ label: loc.name, value: loc.name });
      });
    } else {
      console.log(locations);
      console.log('-------------------------');
      locationValues.push({ label: 'No available location', value: 0 });
    }

    let categoryOptions = [];
    if (
      categories !== null &&
      categories !== undefined &&
      categories.length > 0
    ) {
      console.log(categories);

      categories.map(ca => {
        categoryOptions.push({ label: ca.name, value: ca.name });
      });
    } else {
      console.log(categories);
      console.log('-------------------------');
      categoryOptions.push({ label: 'No available category', value: 0 });
    }

    return (
      <div className="add-item-">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add New Item</h1>

              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="* Name"
                  name="description"
                  value={this.state.description}
                  onChange={this.onChange}
                  error={errors.description}
                  info="Item Name"
                />
                <TextFieldGroup
                  placeholder="* Detail Information"
                  name="longDescription"
                  value={this.state.longDescription}
                  onChange={this.onChange}
                  error={errors.longDescription}
                  info="Detail Information"
                />

                <SelectListGroup
                  placeholder="* Category"
                  name="category"
                  value={this.state.category}
                  onChange={this.onChange}
                  options={categoryOptions}
                  error={errors.category}
                  info="Category"
                />

                <SelectListGroup
                  placeholder="* Store Location"
                  name="location"
                  value={this.state.location}
                  onChange={this.onChange}
                  options={locationValues}
                  error={errors.location}
                  info="Store Location"
                />

                <TextFieldGroup
                  placeholder="* Value"
                  name="value"
                  type="number"
                  value={this.state.value}
                  onChange={this.onChange}
                  error={errors.value}
                />

                <input
                  type="submit"
                  value="Submit"
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

AddItem.propTypes = {
  addItem: PropTypes.func.isRequired,
  getCategories: PropTypes.func.isRequired,
  getLocations: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  category: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  category: state.category,
  item: state.item,
  location: state.location,
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addItem, getCategories, getLocations }
)(AddItem);
