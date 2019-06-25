import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  
  state = {
    persons : [
      {name: 'Max', age: 28},
      {name: 'Reiniel', age: 29},
      {name: 'Mia', age: 29},
    ]
  }

  switchNameHandler = () => {
    console.log("this was clicked"); 
  }
  
  render() {
    return (
      <div className="App">
       <h1> Hi my name is reiniel </h1>
       <p> This is an example of creating a second element </p>
       
       
       <button onClick={this.switchNameHandler}>Switch Name</button>
       
       
       {/*Using State*/}
       <Person name = {this.state.persons[0].name} age={this.state.persons[0].age} />
       <Person name = {this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
       <Person name = {this.state.persons[2].name} age={this.state.persons[2].age} /> 
      </div>
    );
       {/*<Person name = "Max" age="28" />
       <Person name = "Reiniel" age="29">My Hobbies: Racing</Person>
       <Person name = "Mia" age ="23" />*/}

  }
}

export default App;
