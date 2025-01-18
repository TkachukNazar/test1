let profit = [-10000, 32000, -20000, 50000, -40000, 30000];
console.log(profit);
let loss = 0;
let gain = 0;
for (let i = 0; i < profit.length; i++) {
  if (profit[i] < 0) {
    loss += profit[i];
  } else {
    gain += profit[i];
  }
}
console.log("total loss: " + loss);
console.log("total gain: " + gain);
for (let i = 0; i < profit.length; i++) {
  console.log(`${i + 1} ${profit[i]}`);
}
