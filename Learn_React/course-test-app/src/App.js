import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person.js';
// import Radium, { StyleRoot } from 'radium';

class App extends Component {
  state = {
    person: [
      {id: 1, name:'Prateek', age:21},
      {id: 2, name:'Qwerty', age:56}
    ],
    showPersons: false
  }

  // switchNameHandler = () => {
  //   // Don't use this type of syntax: this.state.person[0].name = 'Max';
  //   this.setState({
  //     person: [
  //       {id: 1, name:'Prateek', age:21},
  //       {id: 2, name:'Qwerty', age:64}
  //     ]
  //   })
  // }

  changeNameHandler = (event, id) => {
    const personIndex = this.state.person.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.person[personIndex]
    };

    person.name = event.target.value;
    const newPerson = [...this.state.person];
    newPerson[personIndex] = person;
    console.log(personIndex);
    this.setState({ person: newPerson });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
    // console.log(this.state.showPersons);
  }

  deleteHandler = ( personIndex ) => {
    // const persons = this.state.person;
    const persons = [ ...this.state.person ];
    persons.splice(personIndex, 1);
    this.setState({ person: persons });
  }

  render() {

    let persons = null;
    let btnClass = [classes.Button];

    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // }

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {
            this.state.person.map((person, idx) => {
              return <Person
                click={() => this.deleteHandler(idx)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.changeNameHandler(event, person.id)}
              />
            })
          }
        </div>
      );
      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // };
      btnClass.push(classes.Red);
    }

    let assignClass = [ ];
    if (this.state.person.length <= 1) {
      assignClass.push(classes.red);
    }
    if (this.state.person.length <= 0) {
      assignClass.push(classes.bold);
    }

    return (
      // <StyleRoot>
        <div className={classes.App}>
          <h1>Hello!!, You are on a React App</h1>
          <p className={assignClass.join(' ')}>This is a paragraph for testing.</p>
        {/* <button onClick={this.switchNameHandler.bind(this, 'Maximilium')}>Switch</button> */}
          <button className={btnClass.join(' ')}
          // style={style}
          onClick={this.togglePersonsHandler}>
            Toggle Person
          </button>
      { persons }
        </div>
      // </StyleRoot>
    );
  }
}

// export default Radium(App);
export default App;
