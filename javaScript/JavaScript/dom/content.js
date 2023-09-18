let ul = document.getElementById("ulli");

let crateLi = document.createElement("li");
crateLi.className = "new list";
crateLi.id = "new list";

let cont = document.createTextNode("I am new list");

let created = ul.appendChild(crateLi).appendChild(cont);


