// we are creating first simple constractor

function ConstractorFun(){
    console.log("I am constractor");

};

const cnsObj = new ConstractorFun();

// We got the outPut because constractor will be auto call 


// lets creats class of obj


class newCls{

    constructor(){
        console.log("I am constractor of new class");
        return {x : 10};
    }

    // ekFun(){
    //     console.log("My ek funCtion hu new class ka");
    // }

}

const objNewCls = new newCls();

// objNewCls.ekFun();

console.log(objNewCls)