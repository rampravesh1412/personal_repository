window.addEventListener('wheel', function(e){
if(e.deltaY<0){
    console.log("Scrolling Up...");
}else if(e.deltaY>0){
console.log("Scrolling Down");
}
})