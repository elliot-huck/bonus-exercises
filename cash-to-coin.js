const piggyBank = {};
let dollarAmount = .41;
let centsAmount = dollarAmount * 100;

const getNumCoins = (coinValue) => {
  coinValue = coinValue * 100;
  let numCoins = Math.floor(centsAmount / coinValue);
  centsAmount -= (numCoins * coinValue);
  return numCoins;
}

const makeChange = () => {
  piggyBank.quarters = getNumCoins(.25);
  piggyBank.dimes = getNumCoins(.10);
  piggyBank.nickels = getNumCoins(.05);
  piggyBank.pennies = getNumCoins(.01);
}

makeChange();
// console.log(piggyBank);
for (coin in piggyBank) {
  console.log(`${coin}: ${piggyBank[coin]}`)
}