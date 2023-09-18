// function numberr(firstValue) {
//  let num1 = firstValue;
//  let num2 = 70;
//  document.getElementById("demo").innerHTML = num1 + num2; 
    
// }

// numberr(30);

function returnnn() {
    let x = 10;
    console.log(x);
    return x;  
}

console.log("return value", returnnn());

function nothing(val1) {
    let a = val1;
    let b = 50;
    console.log(a+b);

    
}

nothing(returnnn())




// object

console.log("object ");

const ram ={
    firstName : "rampravesh",
    middleName : "kumar",
    lastName : "yadav",
   fullname : function(){
        return this.firstName + " " + this.middleName + " " + this.lastName;
    }
}

ram.fullname()


