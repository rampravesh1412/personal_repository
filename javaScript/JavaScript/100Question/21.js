// ●	JavaScript Program to Find LCM

// 20 , 50  == 2x5x2x5

let findLcmNum1 = +prompt("Enter the number");
let findLcmNum2 = +prompt("Enter the number");
let result;

for (let i = 1; i <= findLcmNum1 && i <= findLcmNum2; i++) {
  if (findLcmNum1 % i == 0 && findLcmNum2 % i == 0) {
    result = i
  }
}

console.log((findLcmNum1 * findLcmNum2)/result);
