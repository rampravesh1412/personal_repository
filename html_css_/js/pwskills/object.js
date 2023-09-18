let obj = {
  Name: "rampravesh",
  RollNo: 81,
  age: 20,
};

console.log(obj.Name);
console.log(obj.RollNo);
console.log(obj.age);

let output = Object.keys(obj);
console.log(output);

let values = Object.values(obj);
console.log(values);

let allOne = Object.entries(obj);
console.log(allOne);

const rampr = {
  Name: "Rampravesh",
  class: "4th years",
  gender: "Male",
  Dream: "FullStack Devloper",
  pubgid: 5347254277,
  regno: 620820104081,

};

let neww = Object.assign({mobNO : 62035}, rampr);

let keyss = Object.keys(rampr);
console.log(keyss);
let valuess = Object.values(rampr);
console.log(valuess);
let entiresss = Object.entries(rampr);
console.log(entiresss);

console.log(neww);

// Object.freeze(rampr);
Object.seal(rampr);

delete rampr.Name;
console.log(rampr);