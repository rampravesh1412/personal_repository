// Dont forget -----> Lexical scope


let message = "hello bhai";
function test (){
  let message = "kese ho";
  console.logmessage;

  return function(){
    return message;
  }
}


let resultTest = test();
console.log(resultTest());


// lets number object of closure

function num1(a , b , c){
    console.log(a);

    return  {
        num2: function(){
            return a+b;
        },
        num3: function(){
        return a+b+c;
        }
    }
   
}

let numResult = num1(5,7,8);
// num1();

console.log(numResult.num2());
console.log(numResult.num3());


