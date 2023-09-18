// ●	JavaScript Program to Find the Factors of a Number

let factNum = +prompt("Enter the Factorial Number");
let result = 1;

for(let i = 1; i<=factNum; i++){
    result *= i;
}
console.log(result);

