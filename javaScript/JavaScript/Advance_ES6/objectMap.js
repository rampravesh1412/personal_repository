

// Normal object 

let normalObject = {
    name : "Rampravesh",
    age : 19,
    regNo : 81,
  //  "1412" : "pin"  -->// but we are cannt access bcz when we are using normalObject.1412 thats time will be showing error;
}

// we can access 

console.log(normalObject.name)
// console.log(normalObject.1412)



//so we are using object ---> Map

let objMap = new Map([
    ["userName" , "rampravesh"],
    ["userAge" , 19],
    ["useRegNo" , 81],
    [1412 , "pin"],
    [true , "It is boolean value"]

])

objMap.set("another" , "something");


console.log(objMap.get(true));
console.log(objMap.get(1412));
console.log(objMap.get("another"));

objMap.forEach(function(val , ind , arr){
    console.log(ind , val );
});

// we are using this one okk