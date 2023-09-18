//1. print "number is even" id the number is divisible by 2
// else print number is odd if the number returns a remainder when divisded by 2

//soln  --->

const val1 = parseInt(prompt("Enter your Number"));
if (val1 % 2 === 0) {
  console.log("Number Is Even");
} 
else if (val1 % 2 != 0) {
  console.log("Number Is Odd");
  // we want modulo value also
  console.log("modulo: ", val1 % 2);
}


// question 2 ---> find   largest number

let a = parseInt(prompt("Enter The A Value"));
let b = parseInt(prompt("Enter The B Value"));
let c = parseInt(prompt("Enter The C Value"));
let d = parseInt(prompt("Enter The D Value"));

if(a>b && a>c && a>d){
    console.log(`${a}:- A Is Largest Number`);
}

else if(b>a && b>c && b>d){
    console.log(`${b}:- B Is Largest Number`);
}

else if(c>a && c>d && c>d){
    console.log(`${c}:- C Is Largest Number`);
}
else{
    console.log(`${d}:- D Is Largest Number`)
}

// Who years is leap pear and who year is non leap year

const years = (parseInt(prompt("Enter The Years!")));
if(years % 4 ===0){
console.log(`${years}: is Leapyear`)
}else{
    console.log(`${years}: is NonLeapyear`)
}



// print the input value of factorial


function factoriall(fact){
    let totalSum = 1;
    for(let i = 1; i<=fact; i++){
       totalSum = totalSum * i;
       
        
    }
    console.log(totalSum);
}

factoriall(parseInt(prompt("Enter the factorial Num")));

