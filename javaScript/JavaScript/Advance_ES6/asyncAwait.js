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

async function asyncFun(){
  await fun1({ userName: "here", userLast: "Rpk", userAge: 19 }, mainFun);
  mainFun();
}

asyncFun()



