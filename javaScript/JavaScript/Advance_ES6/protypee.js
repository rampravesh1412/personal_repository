// const obj = {
//     userName : "Rampravesh",
//     RollNum : 81,
//     language : "JavaScript"
// }

// console.log(obj);
// // obj.state = "bihar"

function fun(userName, RollNum) {
  this.userName = userName;
  this.RollNum = RollNum;
}

// console.log(fun("Rampravesh" , 81))

const newVar = new fun("Rampravesh Yadav", 81);
const anotherVar = new fun("hmHaiNa", 144);
fun.prototype.state = "bihar";

// console.log(newVar.state);
// console.log(anotherVar.state);
// console.log(anotherVar.userName);

const objj = {
  userName: "Rampravesh",
  RollNum: 81,
  language: "JavaScript"

};

const newArr = ["akm" , "m416" , "m7" , "groza"];

Object.prototype.newName = "SwagOp";

Array.prototype.clg = "GCT";

// console.log(objj.newName);
// console.log(newArr.newName)

// console.log(newArr.clg);
// console.log(objj.clg);


const objOfObj = {
    class : "FinalYear",
    colloge : "Gnanamani"
}


const objOfObj1 = {
    branch : "CSE",
    DOB : "15-Nov- 2003"
}


const anotherObj =  {
    idNum : "20cs111",
    hostelName : "ABD KALAM HOSTEL",
    __proto__ :objOfObj
}

console.log(anotherObj.colloge);
console.log(anotherObj.class);




