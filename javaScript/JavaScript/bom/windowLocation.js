let btn = document.getElementById("btn");

btn.addEventListener("click" ,  myfun)

function myfun(){

    // location.reload();
    // window.location = "https://www.google.com"
    // location.href = "https://www.google.com"
    // location.assign("https://www.google.com")
    location.replace("https://www.google.com")
}