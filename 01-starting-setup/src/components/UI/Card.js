import './Card.css';
import React from 'react';

const Card = (props) => {
//function Card(props) {
    //note the white space after card
    //anything we receive outside of className is added to that string
    //any value set on the className props is added on to string card which gives const classes
    //before: return <div className='card'>
    //now adding card + wtv other className that we want to support ex: expense-item class, etc.
    //instead of this: return <div className='card expense-item'>
  const classes = 'card ' + props.className;
  
  return <div className={classes}>{props.children}</div>;
}

export default Card;


