let userName = "Mr. Mohan"
let userName1 = "mrs. sita"

for (let i = 0; i < userName.length; i++) {
    if (userName[1] == "r") {
        console.log("male");
        document.getElementById("demo").innerHTML = "Male";


    } else {
        console.log("female");
        document.getElementById("demo").innerHTML = "Female";

    }


}