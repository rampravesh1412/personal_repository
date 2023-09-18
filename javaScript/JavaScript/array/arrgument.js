function myFun(){
    let sum = 0;
 for (var i = 0; i < arguments.length; i++)
    sum = sum + arguments[i];
    return sum;
 
}

const result = myFun(1,2,3,4,5);
console.log(result);




// try to another example




function myAddNum(){
    let summ = 0;
    for(var i1 = 0; i1 < arguments.length;i1++)
    summ = summ + arguments[i1];
    return summ
}

let rusultt = myAddNum(10,11,12,13,14);
console.log(rusultt);



// pratice makes prafact

function totRupaya(){
   let rupaya = 0;
    for(let a = 0; a < arguments.length; a++)
    rupaya = rupaya + arguments[a];
    return rupaya
}

let resTot = totRupaya(10,20,30,40,50);
console.log(resTot);