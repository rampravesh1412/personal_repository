class oneClass{

    constructor(){
        console.log("My ek constructor hu");
    }

    userName = "UNIXX";

    set userNameReal(realName){
        this.userName = realName;
    }

    
}

const oneClassObj = new oneClass();

// oneClassObj.setData("Rampravesh");

oneClassObj.userNameReal ="Rampravesh";

console.log(oneClassObj.userName)