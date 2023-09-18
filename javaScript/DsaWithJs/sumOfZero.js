// let arr = (arr) => {
//     for (const number of arr) {
//         // console.log(number)
//         for(let j = 1 ; j<arr.length ; j++){
//             if(number + arr[j] === 0){
//                 return [number , arr[j]]
//             }
//         }
        
//     }

// }

let arr = (arr) => {
    for (const number of arr) {
        for(let i = 1; i<arr.length; i++){
            if(number + arr[i] === 0){
                return [number , arr[i]];
            }
        }
    }
}

console.log(arr([-6,-4,-2,0,2,4,7]))

// O 1(n^2);

