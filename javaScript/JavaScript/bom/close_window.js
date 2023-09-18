let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let featers = "height = 500 ,width = 500;"


btn1.addEventListener("click" , function(){
  window.open("https://www.google.com" , "google" , featers)
})


btn2.addEventListener("click" , function(){
    window.open("https://www.yahoo.com" , "yahoo" , featers)
})