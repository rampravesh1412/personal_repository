let arr = [20, 30, 40, 50, 60, 70, 80, 90, 10];

let newArr = arr.map((value ,ind , arr) => {
 return ind,value, arr});
console.log(newArr);


// map is taking three parameter first one is value , second one is index and third one is array .