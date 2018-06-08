import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: "John", age: 30 },
      { name: "Sarah", age: 35 },
      { name: "Sam", age: 25 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    this.setState( {
      persons: [
        { name: newName, age: 90 },
        { name: "Sarah-Marie", age: 100 },
        { name: "Samantha", age: 79 }
      ]
    } )
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, This is a React App</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler("Maximillian")}>Switch name</button>
        // The above way is another way of binding osmething to the handler, but it's a worse way of doing it. It's generally better to use bind as it is used below.
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "maxxx")} >
          My hobbies include running and painting </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
