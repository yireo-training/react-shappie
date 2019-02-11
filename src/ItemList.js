import React from 'react'
import Item from './Item'
import PropTypes from 'prop-types';

const ItemList = (props) => props.items.map((item, index) => (
  <Item
    key={item.id}
    index={index}
    id={item.id}
    name={item.name}
    value={item.value}
    onChange={props.onChange}
    onClick={props.onClick}
  />
));

ItemList.propTypes = {
  items: PropTypes.array
};

export default ItemList;
