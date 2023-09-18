function myFun(a, b) {
  console.log("I am function");
  let sumMyFun = a + b;
  console.log(sumMyFun);
  return sumMyFun;
}

myFun(10,20);
// myFun(10)(20); its means myFun inside the fun parameter are 20


// Arrow Function

let arrFun = (val1 , val2) => {
  const totalVal = val1 + val2;
  console.log(totalVal)
  return totalVal;
}

arrFun(75 , 85);
console.log(arrFun);

// annomous function


let annomous = function(val3 , val4) {
    let ram = val3;
    let moh = val4;
    console.log(val3 + val4)
}(5,5);