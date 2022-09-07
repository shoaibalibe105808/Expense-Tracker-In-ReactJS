import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  // the component NewExpense call ExpenseForm component
  //const parentCallback = () => {
    const saveExpenseDataHandler = (enteredExpenseData) => { 
      // enteredExpenseData receives an object 
      // from a child component (i mean ExpenseForm component)
    // ExpenseData object to be received here.
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    //console.log(expenseData);
    props.onAddExpense(expenseData);// further forwarded to app component

  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};
export default NewExpense;
