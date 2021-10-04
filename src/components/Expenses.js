import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";

function Expenses(props) {
  let expenseData = [];

  props.expenses.forEach((expense) => {
    expenseData.push(expense);
  });

  return (
    <Card className="expenses">
      {expenseData.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
