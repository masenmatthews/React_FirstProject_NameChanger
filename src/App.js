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

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: "John", age: 90 },
        { name: event.target.value, age: 100 },
        { name: "Samantha", age: 79 }
      ]
    } )
  }

  // The switchNameHandler => Maximillian way is another way of binding osmething to the handler, but it's a worse way of doing it. It's generally better to use bind as it is used below.
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    return (
      <div className="App">
        <h1>Hi, This is a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler("Maximillian")}>Switch name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "maxxx")}
          changed={this.nameChangedHandler} >
          My hobbies include running and painting </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
