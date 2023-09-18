const startbtn = document.getElementById('start');
const stopbtn = document.getElementById('stop');

let setint;
console.log(setint)

startbtn.addEventListener('click', ()=>{

    if(!setint){
    setint = setInterval(()=> {
        console.log("clicked ....")

    },2000)
}

    
} , false);

stopbtn.addEventListener('click' , ()=> {
    clearInterval(setint);
    console.log(setint);
    setint = null;


},false);