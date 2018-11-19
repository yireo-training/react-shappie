import React from 'react';
import './EmptyItem.css';

class EmptyItem extends React.Component {
    render() {
        return (
            <button onClick={this.props.onClick} className="EmptyItem">
                Click to add a new item
            </button>
        );
    }
}

export default EmptyItem;