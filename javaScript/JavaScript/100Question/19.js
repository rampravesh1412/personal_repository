// ●	JavaScript Program to Check if the Numbers Have Same Last Digit

let checkLastNum = () => {
  let firstNum = +prompt("Enter the firstNum");
  let secondNum = +prompt("Enter the secondNum");
  let thirdNum = +prompt("Enter the thirdNum");
  let fourthNum = +prompt("Enter the fourthNum");


 // We are taking last digit
  let firstNumOfLastDigit = firstNum%10;
  let secondNumOfLastDigit = secondNum%10;
  let thirdNumOfLastDigit = thirdNum%10;
  let fourthNumOfLastDigit = fourthNum%10;

  if(firstNumOfLastDigit === secondNumOfLastDigit && firstNumOfLastDigit === thirdNumOfLastDigit && firstNumOfLastDigit === thirdNumOfLastDigit && firstNumOfLastDigit === fourthNumOfLastDigit ){
    console.log("The number have same last Digit");
  }else{
    console.log("The number have not same last Digit");
  }
};

checkLastNum();
