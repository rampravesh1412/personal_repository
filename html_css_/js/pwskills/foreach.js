let arr = [1,2,3,4,5,6,7,8,9,10];

arr.forEach(function(el , ind , arrayy) {
    console.log(ind , el , arrayy)

})

arr.forEach((el , ind , arrayy) => {
    console.log(el);

})

arr.map(function(el , indx , ar) {
    console.log(indx , el) , ar;
})



// work of real cenario  

const herous = ["nagraj" , "heroraj" , "rampravesh" , "mohanraj"];

const varherous = herous.filter((elll) =>{
   return elll.endsWith("raj");
});

console.log(varherous);



const arrr = ["pramranjan" ,"heor" , "priyaranjan" , "babu" , "monoranjan" , "aviranjan"];

const resultranjan = arrr.filter((ranj) => {
    return ranj.endsWith('ranjan');
})

let realresult = resultranjan;
console.log(realresult);