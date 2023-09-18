

class person{
    constructor(){
        console.log("My ek constructor hu");
    }

    addFun(){
        console.log("I belongs from bihar Darbhanga")
    }

    static funName(){
        console.log("I am function")
    }

    static anotherFun(){
        console.log("My ek another fun hu")
    }

}


let person1 = new person();
person1.addFun();
person.funName(); // because it is static that why we are access with class name
person.anotherFun();