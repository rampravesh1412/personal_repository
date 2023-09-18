const nrArr = [-5, -4, -3, -2 , 0 , 2 , 4 , 6 , 8];

// Req ---> [? , ? = 0 ]


function findIndex(arr){
    let left = 0;
    let right = arr.length - 1;

    while(left<right){
        if(arr[left] + arr[right] === 0){
            console.log([arr[left] , arr[right]]);
            break;
        }else if(arr[left] + arr[right] > 0){
            right -- ;
        }else if(arr[left] + arr[right] < 0){
            left ++;
        }else{
            console.log("Data Not Matching");
        }

    }
}

findIndex(nrArr);