// const arr1 = [1,2,4,5];
// const arr2 = [1,4,16,25];

/**
 * for(arr1--->arr.length)
 * for(arr2--->arr.length)
 * boolean false
 * arr1*arr1 = arr2 
 * true
 * 
 */

let checkFun = (arr1 , arr2) => {
    for(let i = 0; i<arr1.length; i++){
        let isBoolean = false;
        for(let j = 0 ; j<arr2.length; j++){
            if(arr1[i]*arr1[i] === arr2[j]){
                isBoolean = true;
            }

            if(j=== arr2.length-1){
                if(!isBoolean){
                    return false;
                }
            }
        }
        return true
    }

}

let result = checkFun([1,2,4,5],[1,4,16,25]);
console.log(result)



