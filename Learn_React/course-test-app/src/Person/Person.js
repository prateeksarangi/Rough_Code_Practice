import React from 'react';
// import Radium from 'radium';
import classes from './Person.css';
// import styled from 'styled-components';

// const StyleDiv = styled.div`
//                   width: 60%;
//                   margin: 16px auto;
//                   border: 1px solid #eee;
//                   box-shadow: 0 2px 3px #ccc;
//                   padding: 16px;
//                   text-align: center;
//
//                   @@media (min-width: 500px) { width: 450px; }
//                 `;

const person = (props) => {
  // const style = {
  //   '@media (min-width: 500px)': {
  //     width: '450px'
  //   }
  // };

  return (
    // <div className='Person' style={style}>
    // <StyleDiv>
    <div className={classes.Person}>
      <p onClick={props.click}>
        Hello, my name is {props.name},
        and I am {props.age} years old.</p>
      <input type='text' onChange={props.changed} value={props.name}/>
    </div>
    // </StyleDiv>
  )
}

// export default Radium(person);
export default person;
