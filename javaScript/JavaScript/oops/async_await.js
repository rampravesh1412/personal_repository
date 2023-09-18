async function fun(){
    console.log("hello 1");
   await console.log("hello 2");
    console.log("hello 3");
   await console.log("hello 4");
    console.log("hello 5");
}

console.log("before calling")
fun();
console.log("after calling")
for(i = 0; i<100; i++){
    console.log("Jai shree Ram");
}