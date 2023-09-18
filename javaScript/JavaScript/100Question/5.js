// ●	Javascript Program to Solve Quadratic Equation

const a = parseInt(prompt("Enter the A"));
const b = parseInt(prompt("Enter the B"));
const c = parseInt(prompt("Enter the C"));

const d = b*b -4*a*c;

const psX = -b+(Math.sqrt(d))/2*a;
const negX = -b+(Math.sqrt(d))/2*a;

console.log("D is : "+d);
console.log("Postive number is :" + psX);
console.log("Negative number is :" + negX);