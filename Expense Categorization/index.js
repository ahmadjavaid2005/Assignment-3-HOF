let expenses = [
  { amount: 100, category: "Utilities" },
  { amount: 200, category: "Groceries" },
  { amount: 50, category: "Entertainment" },
];

function categorizeExpense(expense) {
  return expense.amount > 100 ? "High Expense" : "Low Expense";
}

const categorizedExpenses = expenses.map((expense) =>
  categorizeExpense(expense)
);

console.log(categorizedExpenses);
