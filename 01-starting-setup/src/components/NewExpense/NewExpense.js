import React, {useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  //need a true or false state for form to be visible or not
const [isEditing, setIsEditing] = useState(false);

const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
        ...enteredExpenseData, 
        id: Math.random().toString()
    };
    //console.log(expenseData);
    props.onAddExpense(expenseData);
    setIsEditing(false);
};

const startEditingHandler = () => {
  setIsEditing(true);
};

//function that we want to trigger when the cancel button from expenseForm.js is clicked
//to pass this function we are going to pass it as a props in ExpenseForm component
//onCancel = {stopEditingHandler}
const stopEditingHandler = () => {
  setIsEditing(false);
}

  return (
    <div className="new-expense">
        {/* want to show the button if we are not editing
            check if editing is false, in which case I show a button
            if editing is true, i show the form */}
        {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
        {/* I want to make this form visible when needed */}
        {isEditing && <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onCancel={stopEditingHandler}/>}
    </div>
  );
};

export default NewExpense;
