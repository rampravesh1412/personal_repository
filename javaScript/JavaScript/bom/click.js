let btn = document.getElementById("btn");

btn.addEventListener("click" , function(){
    console.log("clicked");
    // window.alert("cliked!");
})

let anotherFun = function anotherFun(){
    console.log("Another time clicke");
    // window.alert("Another time clicke");
}

btn.addEventListener('click' , anotherFun)

