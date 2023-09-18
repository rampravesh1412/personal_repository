// object 

const obj = {
    "UserName" : "Rampravesh",
    "RollNo"   : "20cs111",
    "RegNo"    : 6203528288,
}

obj.collegeName = "gnanamani college of technology";

console.log(Object.entries(obj));

console.log(Object.keys(obj));


// console.log(Object.freeze(obj));  //  ----> no anything change
obj.branch = "cse";

console.log(Object.entries(obj));

// console.log((Object.delete(obj)));

const objj = Object.assign({"sem" : 5 , "NewSem" :6},obj);

console.log(objj);
// Object.seal(objj);

objj.currentSem = 7;

console.log(objj);




// 

var sum=0;

var arr = [10,15,20,30];  

arr.forEach(function myFunction(element) 

{  

     sum= sum+element;  

});  

console.log(sum);




