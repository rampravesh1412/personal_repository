// ●	JavaScript Program to Check Prime Number

let primeFun = () => {
  let checkPrime = parseInt(prompt("Enter the Number"));
  let boolenPrime = true;
  if(checkPrime === 1){
    console.log("it is neither Prime Number")
  }else if(1<checkPrime){
    for(let i = 2; i< checkPrime; i++){
        if(checkPrime === 2 || checkPrime % i === 0){
            boolenPrime = false;
            break;
        }
    }
    if(boolenPrime){
        console.log("Prime Number")
    }else{
        console.log("Not prime")
    }

  }
};

primeFun()
