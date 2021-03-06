import React, { Component } from 'react';
import classes from './App.css';
// import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { id: 'n1', name: "John", age: 30 },
      { id: 'n2', name: "Sarah", age: 35 },
      { id: 'n3', name: "Sam", age: 25 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.find(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  // The switchNameHandler => Maximillian way is another way of binding osmething to the handler, but it's a worse way of doing it. It's generally better to use bind as it is used below.
  render () {
    // const style = {
      // backgroundColor: 'green',
      // color: 'white',
      // font: 'inherit',
      // border: '1px solid blue',
      // padding: '8px',
      // cursor: 'pointer',
      // ':hover': {
      //   backgroundColor: 'lightgreen',
      //   color: 'black'
      // }
    // };

    let persons = null;
    let btnClass = '';

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
      );

      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); // assignedClasses = ['red']
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); //assignedClasses = ['red', 'bold']
    }

    return (
      // <StyleRoot>
      <div className={classes.App}>
        <h1>Hi, This is a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button
          className={btnClass}
          onClick={this.togglePersonsHandler}>Toggle names</button>
        {persons}
      </div>
      // </StyleRoot>
    );
  }
}

// export default Radium(App);

export default App;
