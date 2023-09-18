class cls{

    constructor(){
       console.log("My ek constructor hu");
    //    return {x:10};
    }

    fun(){
        console.log("My ek function hu");
    };

    static stcFun(){
        console.log("My ek static fun hu");
    }

}

const newObj = new cls();

// console.log(newObj)

newObj.fun();

cls.stcFun();

