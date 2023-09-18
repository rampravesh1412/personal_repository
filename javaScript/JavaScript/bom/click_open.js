let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");

let featers = "height = 500 ,width = 500;"

let yahoo = "https://www.yahoo.com/";

btn1.addEventListener("click" , function(){
    window.open("https://www.google.com" , "google" ,featers )    //url and featers
})

btn2.addEventListener("click" , function(){
    window.open(yahoo ,"yahho", featers);
})

btn3.addEventListener("click" , function(){
    window.close();
})