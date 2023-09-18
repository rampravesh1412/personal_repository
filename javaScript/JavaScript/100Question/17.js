// ●	JavaScript Program to Check Armstrong Number

// armstrong number 153 = 1**3 + 5**3 + 3**3 ==> 153

// ========
// var x = 1234567;
// x.toString().length;
// =====

let armstrongNum = prompt("Enter the armstrong Number ");
let numberOfLength = armstrongNum.length;
let orginalArmStrongNum = +armstrongNum;

let result = 0;
let temp = orginalArmStrongNum;

while (temp > 0) {
  let lastDigit = temp % 10;
  result += lastDigit ** numberOfLength;
  temp = Math.floor(temp / 10);
}
console.log(result);
if(orginalArmStrongNum === result){
    console.log(`${orginalArmStrongNum} is a armstrong number`);
}else{
    console.log(`${orginalArmStrongNum} are not armstrong number`);
}