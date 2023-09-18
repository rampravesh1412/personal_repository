

let data = [
    {name : "Rampravesh" , role : "S/w Eng"},
    {name : "yadav" , role : "S/w Eng"}
]

function createFun(name1 , name2){
    setTimeout(() => {
        data.forEach((val , ind) =>{
          console.log(val);
        })
    }, 1000);
}



function newCreateFun(something , callback){
    setTimeout(() => {
        data.forEach(()=>{
           data.push(something);
           callback();
           
        })
    }, 3000);
}

newCreateFun({name: "sherya", role : "s/w Eng"} ,createFun);





