let fun = (...rest) => {
    console.log(rest);
};

fun([5,5,10]);


// lets take again example

let newFun = (a,b,...other) => {
    console.log(other);
    return a + b ;
}

console.log(newFun(10,20,30,40,50));