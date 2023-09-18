let inp = document.getElementById("inp");

inp.addEventListener("focus" , function(){
    this.style.background = "green";
})

inp.addEventListener("blur" , function(){
    this.style.background = "#fff";
}) 