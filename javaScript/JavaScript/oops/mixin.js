let greet = {
    sayh(){
        console.log("hiiiiii...")
    },

    sayhello(){
        console.log("hello...")
    }
    
}


let mentor = {
    mathMentor(){
        console.log("mathMentor...")
    },

    webDevMentor(){
        console.log("webDevMentor...")
    }
    
}



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

Object.assign(child.prototype , greet);
Object.assign(child.prototype , mentor);

let child1 = new child("Rampravesh" , "morning..");

console.log(child1)
console.log(child1.mathMentor());
console.log(child1.webDevMentor());