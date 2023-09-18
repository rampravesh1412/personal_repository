let btn = document.getElementById("btn");
let check = getComputedStyle(btn);
console.log(check.background);

btn.classList.add("buttonClass");
console.log(btn);

// btn.classList.remove("buttonClass");
btn.classList.replace("buttonClass" ,"newButton" );
console.log(btn);

let annn = btn.classList.contains("mohan");

console.log(annn);


