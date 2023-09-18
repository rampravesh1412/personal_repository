let  createObj = [
    {firstName : "Rampravesh" , lastName : "yadav"},
    {firstName : "AAyan" , lastName : "bhai"}
]

function fun(){
    setTimeout(() => {
        createObj.forEach((ele)=> {
            console.log(ele)
        })
    }, 1000);
}

// fun();




function fun1(para){
  return new Promise((solved , rejected) => {
      setTimeout(() => {
        createObj.push(para);
        let thisfunction = false;

      if(!thisfunction){
        solved()
       }else{
        rejected("It is wrong something");
       }

       }, 5000);
    })
}

fun1({firstName : "Priyanshu" , lastName : "bhai"}).then(fun);