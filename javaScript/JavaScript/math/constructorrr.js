
function getFun(name , age , rollNum , classs ){
    this.getuserName = name;
    this.getAge = age;
    this.getRollNum = rollNum;
    this.getClass = classs;
}

let resultfun = new getFun("swag" , 19 , 111, "BE" );
resultfun.getSub = "javaScript";
console.log(resultfun);


let resultfun2 = new getFun("scout" , 20 , 1, "BE" );
console.log(resultfun2);

getFun.prototype.language = "java javascript";

console.log(resultfun.language);


let unoderlist = document.getElementById("ulii");
let unli = unoderlist.firstElementChild();
console.log(unli);
