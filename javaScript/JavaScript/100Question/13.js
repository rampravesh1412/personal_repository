// ●	Javascript Program to Check if a Number is Odd or Even

let checkNum = () => {
    let num = parseInt(prompt("Enter the Number"));
    if(num % 2 === 0){
        console.log("It is Even Number ")
    }else{
        console.log("It is Odd Number");
    }
}

checkNum()