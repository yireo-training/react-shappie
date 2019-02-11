import React, { Component } from 'react'
import EmptyItem from './EmptyItem'
import ItemList from './ItemList'
import { connect } from 'react-redux'
import { addItem, removeItem, updateItem } from './actions'
import PropTypes from 'prop-types';

class ItemContainer extends Component {
  getInitialValues() {
    let initialValues = {items: []}
    if (this.props.items === undefined) {
      return initialValues
    }

    this.props.items.map(function(item, index) {
      return initialValues.items.push(item.value)
    })

    return initialValues
  }

  render() {
    return (
      <div className="ItemContainer">
        <ItemList items={this.props.items} initialValues={this.getInitialValues()} onChange={this.props.onItemChange} onClick={this.props.onItemClick} />
        <EmptyItem onClick={this.props.onEmptyClick} />
      </div>
    );
  }
}

ItemContainer.propTypes = {
  items: PropTypes.array
};

const mapStateToProps = (state) => {
  return {
    items: state.itemsReducer.items
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onEmptyClick: () => {
      dispatch(addItem())
    },
    onItemClick: (itemId) => {
      dispatch(removeItem(itemId))
    },
    onItemChange: (id, value) => {
      dispatch(updateItem({id, value}))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemContainer);
