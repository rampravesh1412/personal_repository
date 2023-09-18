// ●	JavaScript Program to Find HCF or GCD

let firstNum = +prompt("Enter the Number");
let secondNum = +prompt("Enter the SecondNum");
let result;

for(let i = 1; i<=firstNum && i<=secondNum; i++){
    if(firstNum % i === 0 && secondNum % i ===0){
        result = i;
    }
}
console.log(`${firstNum} and ${secondNum} HCF are ${result} `)

