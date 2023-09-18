class userClass{
    constructor(userName , passWord){
        this.userName = userName;
        this.passWord = passWord;
    }

    set userName(val){
        this._userName = val;
    }

    get userName(){
        return console.log(this._userName.toUpperCase());
    }
}

const user = new userClass("Rampravesh" , "Rpk@something081");

user.userName