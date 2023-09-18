function randomclr() {
  let hexClr = "0123456789ABCDEF";
  let fixVal = "#";
  for (let i = 0; i < 6; i++) {
    fixVal += hexClr[Math.floor(Math.random() * 16)];
  }
  // console.log(fixVal)
  return fixVal;
}
// console.log(randomclr());

let setvar;

let startfun = function(){
   setvar =  setInterval(()=>{
        document.body.style.backgroundColor = randomclr();
        console.log(randomclr());
    } , 1000)

}



let stopfun = function(){
    clearInterval(setvar)
    console.log(setvar)
    
}

let mybtn = document.getElementById("btn").addEventListener('click' , startfun)
let mybtn2 = document.getElementById("btn2").addEventListener('click' , stopfun)





