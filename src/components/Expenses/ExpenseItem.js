import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "../UI/Card.css";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // useState is a hook that is always used in a component.
  //console.log('ExpenseItem is evaluated by React.');
  /*const [title, setTitle] = useState(props.title);*/
  // useState is a function that returns an array,
  // where the first element is the value or a variable
  // and the second element is an updating function

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate myDate={props.date} />

        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
}; // component ended here
export default ExpenseItem;
