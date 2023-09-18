let unorderList = document.getElementById("ul");

let creatElement = document.createElement("li");
// let createContent = document.createTextNode("I am Unique li");
creatElement.textContent = "I am Unique li";
let res = unorderList.appendChild(creatElement);
let result = unorderList.firstElementChild.nextSibling.nextSibling.nextSibling;

unorderList.insertBefore(res , result);