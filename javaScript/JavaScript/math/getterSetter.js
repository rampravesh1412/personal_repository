const obj = {
    userName : "rampravesh",
    rollNumber : 81 ,
    favSub : "math",
    

    set setName(n){
        this.userName = n.toUpperCase();
    },
    get getName(){
        return this.userName.toLowerCase();
    }
}

obj.setName ="yeohkalnhi" ;


console.log(obj);
console.log(obj.getName)