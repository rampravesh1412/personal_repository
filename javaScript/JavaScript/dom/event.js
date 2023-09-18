document.getElementById('ulist').addEventListener('click' , (el) => {
    console.log(el.target.tagName);
    if(el.target.tagName == 'IMG'){
        let res = el.target.parentNode;
        res.remove();
    }

},false)


// document.getElementById('parent').addEventListener('click', (el)=> {
//     console.log("parent clicked")
// } , false)

// document.getElementById('child').addEventListener('click', (el)=> {
//     console.log("child clicked")
// } , false)

// document.getElementById('childOfchild').addEventListener('click', (el)=> {
//     console.log("childOfchild clicked")
// } , false)


document.getElementById('parent').addEventListener('click', (el)=> {
    console.log("parent clicked")
    el.stopPropagation()
} , false)

document.getElementById('child').addEventListener('click', (el)=> {
    console.log("child clicked")
    el.stopPropagation()
} , false)

document.getElementById('childOfchild').addEventListener('click', (el)=> {
    console.log("childOfchild clicked")
    el.stopPropagation()
} , false)



document.getElementById('anchor').addEventListener('click' ,(el)=> {
el.preventDefault()

},false)