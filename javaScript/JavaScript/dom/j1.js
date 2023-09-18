
let parent = document.getElementById("parentlist");

let createEle = document.createElement("li");
createEle.textContent = "I am unique List";

let result = parent.appendChild(createEle);

