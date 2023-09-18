let arr = [20,30,40,80,70,90];

let newArr = 50;
let target = 3;

for(let i = arr.length - 1 ; i>=0; i--){
    if(i>= target){
        arr[i+1] = arr[i];
        if(i == target){
            arr[i] = newArr;
        }
    }
}

console.log(arr);

// arr.splice(3 , 0 , 50);
// console.log(arr)