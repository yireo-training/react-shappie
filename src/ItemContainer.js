import React, { Component } from 'react'
import EmptyItem from './EmptyItem'
import ItemList from './ItemList'
import { Form } from 'informed'
import uuidv4 from 'uuid/v4'

const Product = function(value) {
  this.id = uuidv4();
  this.value = value;
}

class ItemContainer extends Component {
  constructor(props) {
    super(props)
    this.onEmptyItemClick = this.onEmptyItemClick.bind(this)
    this.onItemClick = this.onItemClick.bind(this)

    const items = []
    let storedValues = JSON.parse(localStorage.getItem('shappie.values'))

    if (storedValues.items !== undefined) {
      storedValues.items.map(function(item, index) {
        return items.push(new Product(item))
      })
    }

    this.state = {items: items}
  }

  onEmptyItemClick() {
    this.setState(state => {
      state.items.push(new Product(''))
      return state
    })
  }

  onItemClick(clickedItem) {
    this.setState(function(state) {
      state.items = state.items.filter(function(item) {
        return (item.id !== clickedItem.id)
      })
      return state
    })
  }

  onFormChange(formState) {
    let data = JSON.stringify(formState.values)
    localStorage.setItem('shappie.values', data)
  }

  getInitialValues() {
    let initialValues = {items: []}
    this.state.items.map(function(item, index) {
      return initialValues.items.push(item.value)
    })

    return initialValues
  }

  render() {
    return (
      <div className="ItemContainer">
        <Form id="simple-form" initialValues={this.getInitialValues()} onChange={this.onFormChange}>
          <ItemList items={this.state.items} onClick={this.onItemClick} />
          <EmptyItem onClick={this.onEmptyItemClick} />
        </Form>
      </div>
    );
  }
}

export default ItemContainer;
