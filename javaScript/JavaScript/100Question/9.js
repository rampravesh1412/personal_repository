// ●	Print number from 1 to 10 with loop and without using loop

let a = " ";
for(let i = 1; i<=10; i++){
    a = a+i + " ";
}

console.log(a);



// without loop

function funNum(a, b) {
    if (a <= b) {
      console.log(a);
      a++;
      // arguments.callee(a, b);
      funNum(a, b);
    }
  };

  funNum(1, 10);
 



  