let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let inp = document.getElementById("inp").innerHTML = 0;

btn2.addEventListener('click' , function(){
    // inp = inp + 1;
    inp++;
    document.getElementById("inp").innerHTML = inp;

});

btn1.addEventListener('click' , function(){
    // inp = inp - 1;
    inp--;

    document.getElementById("inp").innerHTML = inp;

})
