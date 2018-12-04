import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

class ItemItem extends Component {
  render() {
    const { item } = this.props;

    return (
      <div className="card card-body bg-light mb-3">
        <div className="row">
          <div className="col-lg-6 col-md-4 col-8">
            <h3>{item.description}</h3>

            <p>{item.longDescription} </p>
          </div>
          <div className="col-md-4 d-none d-md-block">
            <h4>Located at: {item.locationS} </h4>
            <p>Time: {item.timestamp}</p>
          </div>
          <div className="col-md-4 d-none d-md-block">
            <h4>Value: {item.value} </h4>
          </div>
        </div>
      </div>
    );
  }
}

ItemItem.propTypes = {
  item: PropTypes.object.isRequired
};

// const mapStateToProps = state => ({
//   auth: state.auth
// });

export default ItemItem;
