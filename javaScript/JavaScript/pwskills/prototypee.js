let obj = {
    userName : "swag_king_432",
    age : 19
}

let arr = [20, 30, "mohan"]


Object.prototype.passWord = "YeOhKalNhi@123";  //Original nhi hai 
Array.prototype.pass = "kuchvHai@123";  //Original nhi hai 

console.log(obj.passWord);
console.log(arr.passWord);


console.log(obj.pass);   //it is given by undifine  bcz we cant access array in obj but obj are access in array
console.log(arr.pass);


// lets we try another example




