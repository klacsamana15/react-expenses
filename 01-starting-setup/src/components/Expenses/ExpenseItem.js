import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
//import React,{useState} from 'react';
import React from 'react';

const ExpenseItem = (props) => {
//function ExpenseItem(props) {
  // const expenseDate = new Date(2021, 2, 28);
  // const expenseTitle = 'Car Insurance';
  // const expenseAmount = 294.67;
//   const month = props.date.toLocaleString("en-US", { month: "long" });
//   const day = props.date.toLocaleString("en-US", { day: "2-digit" });
//   const year = props.date.getFullYear();

//declare a default value inside useState: props.title
//first value: title, is a pointer to props.title
//second value: setTitle, is a function to call so that we can set a new Title
//convention: old value, new value
//const [title, setTitle] = useState(props.title);


// const clickHandler = () => {
//   setTitle("Updated!");
//   console.log(title);
// };

return (
  <li>
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        {/* <h2>{title}</h2> */}
        <h2>{props.title}</h2> 
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      {/* adds event listener when we click the button, must add a function as a value */}
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
    </li>
  );
}

export default ExpenseItem;