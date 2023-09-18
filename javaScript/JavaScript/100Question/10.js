// ●	JavaScript Program to Swap Two Variables

// help of distracting

let varFirst = 10;
let varSecond = 20;

[varFirst , varSecond] = [varSecond , varFirst];
console.log(varFirst , varSecond);


//help of temp  value

let a = 50;
let b = 100;

let temp;

temp = a;
a = b;
b = temp;

console.log(a);
console.log(b);


// without of temp value

let x = 200;
let y = 300;

x = x + y;
y = x - y;
x = x - y;

console.log(x);
console.log(y);