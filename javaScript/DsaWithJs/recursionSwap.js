//sorting the array 
const arr = [20,10,5,1,7,12,16,4];
let i = 0;
let j = 1;
let newArr = [];

let isArr = () => {
    for(let i = 0; i<arr.length; i++){
        if(arr[i]>arr[i+1]){
            return false;
        }
    }

    return true;
}


let fun = (arr) => {
    if (isArr(arr)) {
        newArr = arr;
        return;
        
    }else if(arr[i]<arr[j]){
        i++;
        j++
        fun(arr);
    }else{
        [arr[i],arr[j]]  = [arr[j] , arr[i]]; //swap
        i = 0;
        j = 0;
        // fun(arr)
        fun(arr);
    }

}

fun(arr);
console.log(newArr)
