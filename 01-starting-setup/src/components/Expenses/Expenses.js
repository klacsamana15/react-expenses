import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";
import React, {useState} from "react";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  //function Expenses(props) {
const [filteredYear, setFilteredYear] = useState('2020');

const filterChangeHandler = selectedYear => {
  //set new value to the year that was selected
  setFilteredYear(selectedYear);
  //display output change in expenses.js
  //console.log(selectedYear);
  //console.log('Expenses.js');
};

//filtering array of expenses, 
//returns a brand new array that we either keep or remove items from array
//the function that is being passed:
//i wanna check if a given expense has a date (expense.date) that matches the filteredYear
//will return true or false
const filteredExpenses = props.items.filter(expense => {
  return expense.date.getFullYear().toString() === filteredYear;
});

// let expensesContent = <p>No expenses found.</p>;

// if(filteredExpenses.length > 0) {
//   expensesContent = filteredExpenses.map(expense => 
//     <ExpenseItem 
//     key={expense.id}
//     title={expense.title} 
//     amount={expense.amount}
//     date={expense.date}/>
//     )
// }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
        //default value chosen: filtered year: 2020
        default={filteredYear} 
        onChangeFilter={filterChangeHandler}/>

        <ExpensesList items = {filteredExpenses}/>
        
        {/* {filteredExpenses.length === 0 && <p>No expenses found.</p>}
        {filteredExpenses.length > 0 &&  */}
        {/* // using props.items that is technically the array of expenses in app.js
        // using map to transform our array of objects into array of jsx element
        // i want to map every expense in my array of expenses into an ExpenseItem jsx element 
        // {props.items.map(expense => 
        filteredExpenses.map(expense => 
        <ExpenseItem 
        //should always add a key whenever mapping out a list of items
        //if we dont have one, use indexes but not advisable
        //keys are important because behind the scenes, 
        //react doesnt know how to identify what is what
        key={expense.id}
        title={expense.title} 
        amount={expense.amount}
        date={expense.date}/>
        ))} */}
        
        {/* <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        /> */}
      </Card>
    </div>
  );
};

export default Expenses;
