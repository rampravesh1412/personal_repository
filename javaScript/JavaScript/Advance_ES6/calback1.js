// lets try to new something of callback function

let newObj = [
    {userName : "Rampravesh" , userLast : "yadav" , userAge : 19},
    {userName : "Swag" , userLast : "Op" , userAge : 19}
];

function mainFun(){
   setTimeout(() => {
    newObj.forEach((value)=>{
    console.log(value);
    })
   }, 1000);
}

function fun1(data , callBackMainFun){
    setTimeout(() =>{
     newObj.push(data);
     callBackMainFun();
    },3000);
}

fun1({userName : "here" , userLast : "Rpk" , userAge : 19} , mainFun);



function fun2(data2 , fun1){
    setTimeout(() => {
        newObj.push(data2);
        fun1(mainFun);
    }, 5000);
}

fun2({userName : "4Ever" , userLast : "Fragger" , userAge : 19} ,
 fun1({userName : "here" , userLast : "Rpk" , userAge : 19} ,
  mainFun));