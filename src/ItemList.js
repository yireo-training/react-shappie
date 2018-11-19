import React from 'react'
import Item from './Item'

const ItemList = (props) => props.items.map((item, index) => (
    <Item
      key={item.id}
      index={index}
      id={item.id}
      name={item.name}
      value={item.value}
      onClick={() => props.onClick(item)}
    />
  ));

export default ItemList;
