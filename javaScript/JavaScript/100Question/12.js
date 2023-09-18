// ●	Javascript Program to Check if a number is Positive, Negative, or Zero

let checkNum = () => {
    let num = parseInt(prompt("Enter the Number"));
    if(num === 0){
        console.log("It is zero ")
    }else if(num>0){
        console.log("It is Positive Num");
    }else{
        console.log("It is Negative Num");
    }
}

checkNum()