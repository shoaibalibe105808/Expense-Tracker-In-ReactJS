import React, { useState } from "react";

//import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "../UI/Card.css";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  // filteredExpense is a new array based on condition
  const filteredExpense = props.myExpenses.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  /*
  {filteredExpense.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
  */
  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onChangeFilter={filterChangeHandler} />
        <ExpensesList items={filteredExpense} />
      </Card>
    </div>
  );
};
export default Expenses;
