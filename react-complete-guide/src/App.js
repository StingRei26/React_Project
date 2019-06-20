import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1> Hi my name is reiniel </h1>
       <p> This is an example of creating a second element </p>
       <Person />
      </div>
    );
  }
}

export default App;
