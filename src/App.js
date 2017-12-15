import React, { Component } from 'react';
import InputBar from './input_bar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <InputBar myList={this.props.myList}/>
      </div>
    );
  }
}

export default App;
