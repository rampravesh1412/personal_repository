let std = {
    firstName : "Rampravesh",
    lastName : "yadav",
    age : 19,
    fullName : function(){
        return this.firstName +" "+ this.lastName;
    }
}

console.log(std);
console.log(std.fullName());


let teach = {
    firstName : "Raghav",
    lastName : "sir",
    age : 35
}

let result = std.fullName.call(teach);
console.log(result);


// We try to something New

let user1 = {
    userfName : "RPK",
    userLName : "Yadav",
    userAge : 19

}

let user2 = {
    userfName : "swag",
    userLName : "op",
    userAge : 20
}

let userFun = function(country){
    return this.userfName + " " + this.userLName + " " +this.userAge + " " + country;
}

// let user1Result = 
console.log(userFun.call(user1 , "India"));
console.log(userFun.call(user2 , "India"));




// lets create new --> Apply () method


let obj1 = {
    userFirstName : "Here",
    userLastName : "Rpk",
    userAgeAre : 19
}

let obj2 = {
    userFirstName : "4Ever",
    userLastName : "fragger",
    userAgeAre : 20
}

let obj = function(state , coutry){
    console.log(this.userFirstName + " " + this.userLastName + " " + this.userAgeAre + " " + state + " " + coutry);
}

// let resutobj1 = obj.apply(obj1, ["bihar" , "india"]);
// let resutobj2 = obj.apply(obj2, ["bihar" , "india"]);


let resutobj1 = obj.bind(obj1, ["bihar" , "india"]);
let resutobj2 = obj.bind(obj2, ["bihar" , "india"]);

resutobj1();
resutobj2();

