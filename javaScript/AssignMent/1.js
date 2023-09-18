function getForm(params) {
    // firstName
const firstName = document.getElementById("firstName").value;
console.log(firstName);
document.getElementById("demo").innerHTML += "My name is "+firstName;

// lastName
const lastName = document.getElementById("lastName").value;
console.log(firstName);
document.getElementById("demo").innerHTML += lastName;

// userName
const userName = document.getElementById("userName").value;
console.log(userName);
document.getElementById("demo").innerHTML += "My user name is "+userName;


// cityName
const cityName = document.getElementById("cityName").value;
console.log(cityName);
document.getElementById("demo").innerHTML += "I belong form "+cityName;

//stateName
const stateName = document.getElementById("stateName").value;
console.log(stateName);
document.getElementById("demo").innerHTML += "In "+stateName;

//zipCode
const zipCode = document.getElementById("zipCode").value;
console.log(zipCode);
document.getElementById("demo").innerHTML += "My pincode is "+zipCode;

}