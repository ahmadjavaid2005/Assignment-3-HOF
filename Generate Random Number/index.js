function generateRandomNumber() {
  setInterval(() => {
    const randomNumber = Math.floor(Math.random() * 1000); // Adjust the range as needed
    console.log(`Random Number: ${randomNumber}`);
  }, 2000);
}

// Call the function to start generating random numbers
generateRandomNumber();
