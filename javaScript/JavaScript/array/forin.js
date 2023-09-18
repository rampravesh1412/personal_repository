let obj = {
    userName : "Rampravesh kumar yadav",
    address : "Rajpur",
    rollNo : 81,
    sub : false
}

for(const key in obj){
    // console.log(key)
    console.log(`${key} --->  `+obj[key])
}




// lets try something new

let sembolObj = new Symbol();
let firstName = sembolObj.ufName = "Rampravesh"
let lastName = sembolObj.ufL = "yadav"

let newObj = {
    [firstName] : firstName,
    [lastName] : lastName
}

for(const key in newObj){
    // console.log(key)
    console.log(`${key} --->  `+newObj[key])
}