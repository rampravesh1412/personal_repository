
let user = ["Rampravesh" , 81 , "fourthYears" , "StateBankOfIndia"];

//Avoid this one please use array distructing

// let userName = user[0];
// let userRoll = user[1];
// let userYear = user[2];
// let userBank = user[3];

// console.log(userName , userRoll , userYear , userBank);


// Try to use array distructing

let[userName, userRoll, userYear, userBank] = user;
console.log(userName , userRoll , userYear , userBank);



// Lets try to use function and use array distructing

function funName(){
    return ["hello baby boy" , 81 , 45 , 77];
}

let[str , num1 , num2 , num3] = funName();

console.log(str , num1 , num2 , num3);


// lets we are using nested array

let arr = [20, 30, [40 , 50]];

let[n1, n2 , [n3, n4]] = arr;
console.log(n3, n4);

