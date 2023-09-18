let sayHello = () => console.log("hello...");

let sayHii = ()  => console.log("Hii...");

let newFun = (a , b , callBack) => {
    console.log(a + b);
    callBack();
    // sayHello();
    // sayHii();    //Dnt use like this   --> we are using call back method
}

let a = 20;
let b = 30;
newFun(a , b , sayHello);
newFun(a , b , sayHii);