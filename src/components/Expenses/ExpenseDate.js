import React from "react";

import "./ExpenseDate.css";
const ExpenseDate = (props) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const year = props.myDate.getFullYear();
  const month = monthNames[props.myDate.getMonth()];
  const day = props.myDate.getDate();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}; // component ended here
export default ExpenseDate;
