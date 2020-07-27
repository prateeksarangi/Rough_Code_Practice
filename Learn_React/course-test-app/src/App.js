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

  switchNameHandler = () => {
    // Don't use this type of syntax: this.state.person[0].name = 'Max';
    this.setState({
      person: [
        {name:'Max', age:21},
        {name:'Qwerty', age:64}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <button onClick={this.switchNameHandler}>Switch</button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
        <Person name={this.state.person[1].name} age={this.state.person[1].age}/>
      </div>
    );
  }
}

export default App;
