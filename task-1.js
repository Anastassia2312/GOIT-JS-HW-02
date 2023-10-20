"use strict";
function makeTransaction(quantity, pricePerDroid, customerCredits) {
  const sum = quantity * pricePerDroid;
  return sum > customerCredits
    ? "Insufficient funds!"
    : `You ordered ${quantity} droids worth ${sum} credits!`;
}
console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
console.log(makeTransaction(8, 2000, 10000));
