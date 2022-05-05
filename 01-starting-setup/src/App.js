//import ExpenseItem from "./components/ExpenseItem";
import Expenses from './components/Expenses/Expenses';
import React, {useState} from 'react';
import NewExpense from './components/NewExpense/NewExpense';


  const dummyExpenses = [
  //const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

const App = () => {
  //function App() {
  
  //using the following useState to use the hard-coded data
  //and to be able to add new data (add new expenses)
  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseHandler = expense => {
    // console.log('In App.js');
    // console.log(expense);
    // creating a new array: passing expense first which is the new data
    // passing ...expenses second which is the existing data(dummyExpenses)
    // this will create a new array of expenses (new data + dummyExpenses)
    //** remember if you update your state DEPENDING on your previous state
    // we should be using a special function
    //setExpenses([expense, ...expenses]);
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      {/* pass expenses array down by a props
      passing the items props which points to expenses array */}
      <Expenses items={expenses}/>
      {/* <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
       <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
       */}
    </div>
  );
}

export default App;
