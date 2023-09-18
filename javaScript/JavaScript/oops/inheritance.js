class person{
    constructor(name){
        console.log(name + " ka ek constructor hu..");
    };

    sayhii(){
        console.log("Hiii of parents ....");
    };

    sayHello(){
        console.log("Hello...");
    };
}


class child extends person{
   
    constructor(name ,greet){
        super(name);
        console.log("Good "+greet)
    };

    sayhii(){
        console.log("Hiii of child....");
    };

    sayAfterNoon(){
        console.log("Good afterNoon...");
        // super.sayhii();
        this.sayhii();

    };
}

// let child1 = new child("Rampravesh" , "morning sir");

// console.log(child1);
// // child1.sayhii();
// child1.sayAfterNoon();


class subChild extends child{
    constructor(name , greet , something){
        super(name , greet);
        console.log(something + " ye kux hai ");
    };

    meraNam(){
        console.log("Unixxx ..")
    };
}

let child1 = new subChild("Rampravesh" , "morning sir" , "354566Rampra");


console.log(child1);
child1.sayhii();
child1.sayAfterNoon();
child1.meraNam();
child1.sayHello();

// console.log(child1)