// ●	JavaScript Program to Print the Fibonacci Sequence

//  0,1,1,2,3,5 .....so on

let fibonacciFun = () => {
    let firstNum = 0;
    let secondNum = 1;
    console.log(firstNum)
    console.log(secondNum)
    let nNumber = parseInt(prompt("Enter the number"));
    let sum = 0;
    for(let i = 1; i<nNumber;i++){
        sum = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = sum;
        console.log(sum);
    }
}

fibonacciFun()