const piggyBank = {
  quarters: 18 ,
  dimes: 45,
  nickels: 23,
  pennies: 9
}

getDollarAmount = (change) => {
  let dollarAmount = 0;
  dollarAmount += change.quarters * .25;
  dollarAmount += change.dimes * .10;
  dollarAmount += change.nickels * .05;
  dollarAmount += change.pennies * .01;
  return dollarAmount;
}

console.log(`You have $${getDollarAmount(piggyBank)}`);