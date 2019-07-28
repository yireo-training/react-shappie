import React, { Component } from 'react'
import './App.css'
import ItemContainer from './ItemContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Shappie</h1>
        <ItemContainer />
      </div>
    )
  }
}


export default App