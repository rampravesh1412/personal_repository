//●	Given two strings, return true if they are anagrams of one another

// let anagramName1 = prompt("Enter the number");
// let anagramName2 = prompt("Enter the number");
let anagramName1 = "madam";
let anagramName2 = "damam";

let anagramSplit1 = anagramName1.split("").sort().join("");
let anagramSplit2 = anagramName2.split("").sort().join("");

if(anagramSplit1 == anagramSplit2){
    console.log("Yes it anagrams")
}else{
    console.log("it is not anagrams")
}
