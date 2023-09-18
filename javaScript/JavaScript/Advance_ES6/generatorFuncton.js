// function* newFun(){
//     let i = 100;
//     while(true){
//         i++
//         yield;
//     }

//     return i;
// }



//   let nwfun = newFun();


// function btnGenFun(){
//  let a =  document.getElementById("gntr").innerHTML = newFun().next().value;
//  console.log(a);
// }


function* newfff(){
   console.log("hlw");
   yield 20;
   yield 30;
   yield 40;
   yield 50;
}

let areNew = newfff();

console.log(areNew.next().value);
console.log(areNew.next().value);
console.log(areNew.next().value);
console.log(areNew.next().value);
console.log(areNew.next().value);
console.log(areNew.next().value);




function* generator(i) {
    yield i;
    yield i + 10;
  }
  
  const gen = generator(10);
  
  console.log(gen.next().value);
  // Expected output: 10
  
  console.log(gen.next().value);
  // Expected output: 20
  