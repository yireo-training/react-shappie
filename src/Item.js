import React from 'react';
import './Item.css';

class Item extends React.Component {
  render() {
    let fieldId = 'items[' + this.props.index + ']'
    return (
      <div className="Item">
        <input 
          name={fieldId} 
          id={this.props.id} 
          value={this.props.value} 
          onChange={(event) => this.props.onChange(event.target.id, event.target.value)} />
        <button onClick={(event) => this.props.onClick(this.props.id)}>x</button>
      </div>
    );
  }
}

export default Item;