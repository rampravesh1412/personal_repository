function funName(){
    console.log("I am normal function");
};

// convert to arrow function

let arrFun = () => console.log("I am arrow funtion");

let arrRetFun = num => num+1;

funName();
arrFun();
console.log(arrRetFun(10));