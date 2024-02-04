let expenses = [
  { amount: 100, category: "Utilities" },
  { amount: 200, category: "Groceries" },
  { amount: 50, category: "Entertainment" },
];

const taxRate = 0.1; // 10%

const expensesWithTax = expenses.map((expense) => {
  const taxAmount = expense.amount * taxRate;
  return {
    ...expense,
    tax: taxAmount,
  };
});

console.log(expensesWithTax);
