import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import InputGroup from '../common/InputGroup';
import SelectListGroup from '../common/SelectListGroup';
import { addItem } from '../../actions/itemActions';

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // displaySocialInputs: false,

      description: '',
      longDescription: '',
      locationS: '',
      category: '',
      value: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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
      locationS: this.state.locationS,
      category: this.state.category,
      value: this.state.value
    };

    this.props.addItem(itemData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    // let socialInputs;

    // if (displaySocialInputs) {
    //   socialInputs = (
    //     <div>
    //       <InputGroup
    //         placeholder="Twitter Profile URL"
    //         name="twitter"
    //         icon="fab fa-twitter"
    //         value={this.state.twitter}
    //         onChange={this.onChange}
    //         error={errors.twitter}
    //       />

    //       <InputGroup
    //         placeholder="Facebook Page URL"
    //         name="facebook"
    //         icon="fab fa-facebook"
    //         value={this.state.facebook}
    //         onChange={this.onChange}
    //         error={errors.facebook}
    //       />

    //       <InputGroup
    //         placeholder="Linkedin Profile URL"
    //         name="linkedin"
    //         icon="fab fa-linkedin"
    //         value={this.state.linkedin}
    //         onChange={this.onChange}
    //         error={errors.linkedin}
    //       />

    //       <InputGroup
    //         placeholder="YouTube Channel URL"
    //         name="youtube"
    //         icon="fab fa-youtube"
    //         value={this.state.youtube}
    //         onChange={this.onChange}
    //         error={errors.youtube}
    //       />

    //       <InputGroup
    //         placeholder="Instagram Page URL"
    //         name="instagram"
    //         icon="fab fa-instagram"
    //         value={this.state.instagram}
    //         onChange={this.onChange}
    //         error={errors.instagram}
    //       />
    //     </div>
    //   );
    // }

    // Select options for status
    const categoryOptions = [
      { label: '* Select Professional Status', value: 0 },
      { label: 'Developer', value: 'Developer' },
      { label: 'Junior Developer', value: 'Junior Developer' },
      { label: 'Senior Developer', value: 'Senior Developer' },
      { label: 'Manager', value: 'Manager' },
      { label: 'Student or Learning', value: 'Student or Learning' },
      { label: 'Instructor or Teacher', value: 'Instructor or Teacher' },
      { label: 'Intern', value: 'Intern' },
      { label: 'Other', value: 'Other' }
    ];

    const locationOptions = [];

    return (
      <div className="add-item-">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add New Item</h1>
              {/* <p className="lead text-center">
                Let's get some information to make your profile stand out
              </p> */}
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
                  options={locationOptions}
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
  item: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  item: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addItem }
)(withRouter(AddItem));
