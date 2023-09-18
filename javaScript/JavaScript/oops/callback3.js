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
 
//   setTimeout(() => {
//     arr.forEach((val , ind)=> {
//         console.log(ind , val)
//     })

//   },1000)

//   setTimeout(() =>{
//     arr.forEach((val , ind) => {
//         console.log(ind , val ," before" )
//     })

//   } , 3000)

let fun1 = () => {
    setTimeout(() => {
        let outPut = ""
        arr.forEach((val) => {
            outPut += `<li>${val.userName}</li>`
            console.log(val.userName)
        })
        document.body.innerHTML = outPut;

    },1000)
}

//  fun1();

// lets create once agian callback function

let fun2 = (userObj4) => {
    setTimeout(() => {
        arr.push(userObj4);
        // fun1();

    }, 3000);
}

 let userObj4 = {userName : "YeOhKalNhi" , userAge : 19,userQualification : "BE"};

// fun2(userObj4 , fun1);


// lets create once agian callback function

let fun3 = (userObj5) => {
    setTimeout(() => {
        arr.push(userObj5)
        // fun2(userObj4);
        // fun1();

    },5000)

}

let userObj5 = {userName : "Rampravesh" , userAge : 19,userQualification : "BE"};


// fun3(userObj5 , userObj4 , fun1);


// lets once more fun

 let fun4 = (userObj6 , userObj5 , userObj4 , fun1 ) => {
    setTimeout(() => {
        arr.push(userObj6);
        fun3(userObj5);
        fun2(userObj4);
        fun1();

    })

 }

let userObj6 = {userName : "Unixx" , userAge : 19,userQualification : "BE"};

 fun4(userObj6, userObj5 , userObj4 , fun1);
