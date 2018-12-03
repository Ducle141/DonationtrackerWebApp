import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Spinner from '../common/Spinner';
import { getItem } from '../../actions/itemActions';
import ItemItem from './ItemItem';

class Items extends Component {
  componentDidMount() {
    console.log('items did mount');

    const { user } = this.props.auth;
    console.log(user.location);
    this.props.getItem(user.location);
  }

  render() {
    console.log('rederinggg---------------');
    console.log(this.props.item);
    const { loading } = this.props.item;
    const items = this.props.item.item;
    let itemContent;
    console.log(items);
    if (items === null || loading || items === undefined) {
      itemContent = <Spinner />;
    } else {
      if (items.length > 0) {
        itemContent = items.map(item => (
          <ItemItem key={item._id} item={item} />
        ));
      } else {
        itemContent = <h4> NO items available...</h4>;
      }
    }

    return (
      <div className="items">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Item Gallery</h1>

              {itemContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Items.propTypes = {
  getItem: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  item: state.item,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getItem }
)(Items);
