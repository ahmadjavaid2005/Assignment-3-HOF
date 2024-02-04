let expenses = [
  { amount: 100, category: "Utilities" },
  { amount: 200, category: "Groceries" },
  { amount: 50, category: "Entertainment" },
];

const totalAmount = expenses.reduce(
  (accumulator, expense) => accumulator + expense.amount,
  0
);

console.log(`The total amount of all expenses is: ${totalAmount}`);
