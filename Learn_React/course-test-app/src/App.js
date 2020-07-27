import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {
  state = {
    person: [
      {name:'Prateek', age:21},
      {name:'Qwerty', age:56}
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // Don't use this type of syntax: this.state.person[0].name = 'Max';
    this.setState({
      person: [
        {name:newName, age:21},
        {name:'Qwerty', age:64}
      ]
    })
  }

  // changeNameHandler = (event) => {
  //   this.setState({
  //     person: [
  //       {name:'Prateek', age:21},
  //       {name:event.target.value, age:64}
  //     ]
  //   })
  // }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
    console.log(this.state.showPersons);
  }

  deleteHandler = ( personIndex ) => {
    // const persons = this.state.person;
    const persons = [ ...this.state.person ];
    persons.splice(personIndex, 1);
    this.setState({ person: persons });
  }

  render() {

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {
            this.state.person.map((person, idx) => {
              return <Person
                click={() => this.deleteHandler(idx)}
                name={person.name}
                age={person.age}
              />
            })
          }
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hello!!, You are on a React App</h1>
      {/* <button onClick={this.switchNameHandler.bind(this, 'Maximilium')}>Switch</button> */}
      <button onClick={this.togglePersonsHandler}>Switch</button>
    { persons }
      </div>
    );
  }
}

export default App;
