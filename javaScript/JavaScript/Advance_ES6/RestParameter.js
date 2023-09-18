function fun(... argss){
    console.log(argss)
    let sum = 0;
    for(let i = 0; i<argss.length; i++){
        sum += argss[i];
    }
    console.log(sum);
}

fun(10, 20, 30, 40, 50, 60, 70, 80, 90, 100);