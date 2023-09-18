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



// lets we are move the --->  speared operators


let spearedNew = [20,30,40,50,60,70,88,22,44];

let getNum = (n1 , n2 , n3 ) => {
    console.log(n1+n2+n3)
};


getNum(...spearedNew);