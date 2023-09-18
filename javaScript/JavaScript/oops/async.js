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

let fun2 = (datas) => {
    arr.push(datas);
}

async function  fun(){
    await fun2({userName : "Hnxx Boy" , userAge : 17,userQualification : "BE"})
    fun1();

}

fun()
