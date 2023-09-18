let arr = [
    {
        userName : "Hnxx Boy" , 
        userAge : 17,
        userQualification : "BE"
    },
    {
        userName : "Star Boy" , 
        userAge : 18,
        userQualification : "12th"
    },
    {
        userName : "Swag op" , 
        userAge : 19,
        userQualification : "BE Final Years"
    }
]

let fun1 = () => {
    setTimeout(() => {
        arr.forEach((val) => {
            console.log(val)
        })
    }, 1000);
}

// fun1()


let anotherObj ={
    userName : "BhaiCharaOnTop" , 
    userAge : 19,
    userQualification : "BE Final Years"
}

function fun2 (anotherObj){
    
        
        
        return new Promise((resolve, error) => {
          setTimeout(() => {
            arr.push(anotherObj);
            let thisSetTimeOut = true;
            if (thisSetTimeOut == true) {
              resolve("yes ThisSetTimeOut is correct");
            } else {
              error("Throw the error");
            }
          }, 2000);
        });


    
}

fun2.then 
   fun2(anotherObj).then(fun1).catch((err => {
    console.log(er)
   })).finally("Amost complete");



console.log(arr)




