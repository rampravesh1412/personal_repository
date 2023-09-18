

// check arr1 are square of arr2


let objFun = (arr1 , arr2) => {
    let obj1 = {};
    let obj2 = {};

    for(const arr1Data of arr1){
        // console.log(obj1[arr1Data] = obj1[arr1Data])
        // console.log(obj1[arr1Data] = (obj1[arr1Data] || 0))
        // console.log(obj1[arr1Data] = (obj1[arr1Data] || 0)+ 1)
        obj1[arr1Data] = (obj1[arr1Data] || 0) + 1
    }

    console.log(obj1)


    for(const arr2Data of arr2){
        obj2[arr2Data] = (obj2[arr2Data] || 0) + 1
    
    }
    console.log(obj2)

    for(const key in obj1){
        if(!obj2[key * key]){
            return false;
        }
        if(obj1[key] !== obj2[key*key]){
            return false
        }
    }

    return true;

}

 let result = objFun([2,5,7,5],[4,25,25,49])
 console.log(result);