class bindcls{
    constructor(){
        this.userName = "Rampravesh";
        this.adddress = "Rajpur";
        this.RollNum = 81;
        document.getElementById('btn').addEventListener('click' ,this.userMethod.bind(this))

    }

    userMethod(){
        console.log("clicked....");
        console.log(this.RollNum)
    }
}

const ekBind = new bindcls()