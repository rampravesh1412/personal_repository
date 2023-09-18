let div = document.getElementById("div1");
let btn = document.getElementById("btn");
let body = document.body;


div.addEventListener("click" , function(e){
    console.log("I am div");
    e.stopPropagation();
})

btn.addEventListener("click" , function(el){
    console.log("I am btn");
    el.stopPropagation();
})


body.addEventListener("click" , function(ev){
    console.log("I am body");
    ev.stopPropagation();

})