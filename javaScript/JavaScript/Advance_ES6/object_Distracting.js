let obj = {
    userName : "Rampravesh",
    userRoll : 81 ,
    userYear : "4th years",
    nothing: {
        kya : "kuchNhiBhai",
        hyy : "Hello Baby Boy"
    }
}
// Dont use one by one obj name and dot then call we are using object distractring

// let uName = obj.userName;
// let uRoll = obj.userRoll;
// let uYear = obj.userYear;

// let ukya = obj.nothing.kya;
// let uhyy = obj.nothing.hyy;
// console.log(uName);
// console.log(uRoll);
// console.log(uYear);
// console.log(ukya);
// console.log(uhyy);


// we are using object distractring


let{userName, userRoll , userYear , nothing :{kya, hyy}} = obj;
console.log(userName , userRoll , userYear  ,kya, hyy);
// console.log(uniq);


let newObj = {
    newName : "rampraveshhhh",
    newRoll : 81
}

            //we can access userrrr variable this also know as variable
let{newName : userrrr , newRoll} = newObj;
console.log(userrrr);
