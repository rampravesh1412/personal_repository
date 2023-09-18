// //if else condition

// let a = +prompt("Enter the input value");
// if (a == 0) {
//     document.write("yeah this is zero")
// } else if (a == "ram") {
//     document.write("this is my nickname")
// } else if (a <= 5) {
//     document.write("five less than of a")
// } else {
//     document.write("nothing");
// }

// switch condition

// if else nested loop

let num = +prompt("Enter the num");
if (num > 0) {
    console.log("This is +ve num");
    document.getElementById("demo1").innerText = "This is +ve num";
    if (num % 2 === 0) {
        console.log("this is even number")
        document.getElementById("demo2").innerText = "This is even num";

        if (num % 4 === 0) {
            console.log("Yeah this is leapear")
            document.getElementById("demo3").innerText = "This is leapear";


        } else {
            console.log("Yeah this is not leapear")
            document.getElementById("demo3").innerText = "This is not-leapear";


        }
    } else {
        console.log("this is odd num")
        document.getElementById("demo2").innerText = "This is odd num";

    }
} else if (num === 0) {
    console.log("zer0")
    document.getElementById("demo4").innerText = "zeroo";

}
else {
    console.log("This is -ve num");
    document.getElementById("demo1").innerText = "This is -ve num";
}

// let numTer = +prompt("Enter the second Num");
// let result = numTer > 0 ? (numTer % 2 === 0 ? (numTer % 4 === 0 ? "lepear" : "non-lepear") : "odd") : "-ve";
// console.log(result);