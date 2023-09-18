let parents = document.getElementById("divParents");

let para1  = "<p><b>para afterBegins</b></p>";

let para2  = "<p><b>para afterend</b></p>";

let para3  = "<p><b>para beforeend</b></p>";

let para4  = "<p><b>para afterbegin</b></p>";

parents.insertAdjacentHTML('afterbegin' , para1);

parents.insertAdjacentHTML('afterend' , para2);

parents.insertAdjacentHTML('beforeend' , para3);

parents.insertAdjacentHTML('afterbegin' , para3);
