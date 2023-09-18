let obj = [
    {firstName : "Rampravesh" , lastName : "Yadav"},
    {firstName : "swag" , lastName : "op"}
]

function fun(){
    setTimeout(() => {
        obj.forEach((val)=> {
            console.log(val)
        })
    }, 1000);

}

// fun();

function fun1(parameter){
    return new Promise((resolve , reject)=>{
        setTimeout(() => {
            obj.push(parameter);
            let error = false;
            if(!error){
                resolve()
            }else{
                reject("Ye galat hai")
            }
            
        }, 5000);

    })
}

fun1({firstName : "mrrr" , lastName : "unnixx"}).then(fun);