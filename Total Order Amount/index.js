const ordersList = [
  { name: "Laptop", price: 120000 },
  { name: "Mobile", price: 70000 },
  { name: "Mobile Charger", price: 1500 },
  { name: "Laptop Charger", price: 10500 },
];

function calculateTotalOrderAmount(orderList) {
  let totalPrice = 0;

  orderList.forEach((item) => {
    totalPrice += item.price;
  });

  console.log(`The total price is Rs. ${totalPrice}`);
}

calculateTotalOrderAmount(ordersList);
