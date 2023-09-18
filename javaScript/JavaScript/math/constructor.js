function constractor(first, last , dob , age , classs){
    this.firstName = first;
    this.lastName = last;
    this.dateOfBirth = dob;
    this.yourAge = age;
    this.yourClass = classs; 
}

let result = new constractor("rampravesh", "yadav" , 15 , 20, 12);

console.log(result.firstName);
console.log(result.lastName);
console.log(result.dateOfBirth);
console.log(result.yourAge);
console.log(result.yourAge);

console.log(result);





// we are making new constractor

function newConstract(pubgName , favGun , closeGun , longGun){
    this.inGameName = pubgName;
    this.favrateGun = favGun;
    this.closeBeast = closeGun;
    this.longBest = longGun;
}

const pubdetails = new newConstract("swag0P" , "M4" , "AKM" , "AWM");

console.log(pubdetails);