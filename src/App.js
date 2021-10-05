import React, { useState } from 'react';
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

let zus_amount = 381.81;
let pit_amount = 2371;

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "ZUS",
    amount: zus_amount,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "PIT",
    amount: pit_amount,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "ZUS + PIT",
    amount: zus_amount + pit_amount,
    date: new Date(2021, 2, 28),
  }, 
  {
    id: "e4",
    title: "Accounting",
    amount: 307.5,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = newExpenseData => {
    const index = expenses.findIndex(expense => expense.id === newExpenseData.id);
    
    if(index >= 0 ) {
      const updatedArray = (expenses[index] = newExpenseData)
      setExpenses(updatedArray);
    } else {
      setExpenses((prevExpenses) => {
        return [newExpenseData, ...prevExpenses];
      })
    }
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
