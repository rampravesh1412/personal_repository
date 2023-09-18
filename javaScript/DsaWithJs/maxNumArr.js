let arr = [1 , 2, 4, 5, 10, 15, 25, 30, 40, 20, 1, 5, 8, 10]  //--> 115
// console.log(arr.sort())

let takeNum = 4;  
// formula --> arr.length-takeNum + 1 

let total = 0;
for(let i = 0; i<arr.length-takeNum + 1;i++){
    // console.log(i)
    let temp = 0; 
    for(let j = 0 ; j<takeNum; j++){
        // console.log(i , j)
        temp += arr[i+j];
        if(temp>total){
            total = temp;
        }
    }

}

console.log(total);