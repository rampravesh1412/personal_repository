let arr = [10, 20, 30, 40, 50];

let newArr= [];

for(let i = 0; i<arr.length; i++){
    newArr[i] = arr[i]*2
}

console.log(newArr);


// lets try help of map 

let newArr1 = arr.map(val => val*3);
console.log(newArr1)


// let try again somthing

let psArr = arr.map(anVal => anVal+1);

console.log(psArr);

// welcome to realtity how to work this one

let psArr1 = arr.map(function(anVal){
   return anVal+1
});

console.log(psArr1);


