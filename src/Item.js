import React from 'react';
import './Item.css';
import { Text } from 'informed';

class Item extends React.Component {
  render() {
    let fieldId = 'items[' + this.props.index + ']'
    return (
      <div className="Item">
        <Text field={fieldId} id={this.props.id} value={this.props.value} />
        <button onClick={this.props.onClick}>x</button>
      </div>
    );
  }
}

export default Item;