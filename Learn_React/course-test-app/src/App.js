import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {
  state = {
    person: [
      {name:'Prateek', age:21},
      {name:'Qwerty', age:56}
    ]
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

  changeNameHandler = (event) => {
    this.setState({
      person: [
        {name:'Prateek', age:21},
        {name:event.target.value, age:64}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hello!!, You are on a React App</h1>
      <button onClick={this.switchNameHandler.bind(this, 'Maximilium')}>Switch</button>
        <Person
          name={this.state.person[0].name}
          age={this.state.person[0].age}
          click={this.switchNameHandler.bind(this, 'Sid')}
        />
        <Person
          name={this.state.person[1].name}
          age={this.state.person[1].age}
          changed={this.changeNameHandler}
        />
      </div>
    );
  }
}

export default App;
