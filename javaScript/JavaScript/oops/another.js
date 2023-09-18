
class animmal{
    constructor(animmal){
        console.log("my ek " + animmal);
    }

    anotherannimal(){
        console.log("My ek cat hu")
    }
}


let animmal1 = new animmal("Dog");

animmal1;
animmal1.anotherannimal();


class phone{
    constructor (ph , bat){
        console.log("mere phone my" + ph);
        console.log("mere phone my" + bat);
    }

    smartPhone(cam , int ){
        console.log("mere phone my" + cam);
        console.log("mere phone my" + int);
    }

    
};

let phone1 = new phone("Nokia" , "lowBattery");
phone1.smartPhone("120px" , "800mbs");